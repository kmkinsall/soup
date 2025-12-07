<?php
/**
 * Soup Cooking Assistant - API Endpoint
 * Uses OpenAI Responses API with streaming support
 */

// Load security module first
require_once 'security.php';

// Configure error handling (set to false for development)
$isProduction = true;
configureErrorHandling($isProduction);

// Apply security headers
applySecurityHeaders();

// Catch all errors (don't expose details in production)
set_error_handler(function($errno, $errstr, $errfile, $errline) use ($isProduction) {
    header('Content-Type: application/json');
    http_response_code(500);
    if ($isProduction) {
        error_log("PHP Error: $errstr in $errfile on line $errline");
        echo json_encode(['error' => 'An internal error occurred. Please try again.']);
    } else {
        echo json_encode(['error' => "PHP Error: $errstr in $errfile on line $errline"]);
    }
    exit;
});

try {
    require_once 'config.php';
} catch (Exception $e) {
    header('Content-Type: application/json');
    http_response_code(500);
    error_log('Config error: ' . $e->getMessage());
    echo json_encode(['error' => 'Configuration error. Please contact support.']);
    exit;
} catch (Error $e) {
    header('Content-Type: application/json');
    http_response_code(500);
    error_log('Fatal error: ' . $e->getMessage());
    echo json_encode(['error' => 'A fatal error occurred. Please contact support.']);
    exit;
}

/**
 * Stream response from OpenAI Responses API
 */
function streamResponse(string $instructions, array $input): void {
    header('Content-Type: text/event-stream');
    header('Cache-Control: no-cache');
    header('Connection: keep-alive');
    // CORS already set in main request handling

    if (ob_get_level()) ob_end_clean();

    $data = [
        'model' => OPENAI_MODEL,
        'instructions' => $instructions,
        'input' => $input,
        'stream' => true
    ];

    // Add reasoning settings
    if (defined('REASONING_EFFORT')) {
        $data['reasoning'] = ['effort' => REASONING_EFFORT];
    }
    if (defined('VERBOSITY')) {
        $data['text'] = ['verbosity' => VERBOSITY];
    }
    if (REASONING_EFFORT === 'none') {
        if (defined('TEMPERATURE')) $data['temperature'] = TEMPERATURE;
        if (defined('TOP_P')) $data['top_p'] = TOP_P;
    }

    $ch = curl_init(OPENAI_API_URL);

    if ($ch === false) {
        echo "data: " . json_encode(['error' => 'Failed to initialize cURL']) . "\n\n";
        echo "data: [DONE]\n\n";
        flush();
        return;
    }

    $currentEvent = '';

    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($data),
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Authorization: Bearer ' . OPENAI_API_KEY
        ],
        CURLOPT_TIMEOUT => 120,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2,
        CURLOPT_WRITEFUNCTION => function($ch, $chunk) use (&$currentEvent) {
            $lines = explode("\n", $chunk);

            foreach ($lines as $line) {
                $line = trim($line);
                if (empty($line)) continue;

                if (strpos($line, 'event: ') === 0) {
                    $currentEvent = trim(substr($line, 7));
                    continue;
                }

                if (strpos($line, 'data: ') === 0) {
                    $jsonStr = substr($line, 6);

                    if ($jsonStr === '[DONE]') {
                        echo "data: [DONE]\n\n";
                        flush();
                        continue;
                    }

                    $decoded = json_decode($jsonStr, true);

                    if ($currentEvent === 'response.output_text.delta' && isset($decoded['delta'])) {
                        echo "data: " . json_encode(['content' => $decoded['delta']]) . "\n\n";
                        flush();
                    }

                    if ($currentEvent === 'response.completed') {
                        echo "data: [DONE]\n\n";
                        flush();
                    }

                    if (isset($decoded['error'])) {
                        $errorMsg = $decoded['error']['message'] ?? 'Unknown error';
                        echo "data: " . json_encode(['error' => $errorMsg]) . "\n\n";
                        flush();
                    }
                }
            }
            return strlen($chunk);
        }
    ]);

    curl_exec($ch);
    $error = curl_error($ch);
    $errno = curl_errno($ch);
    curl_close($ch);

    if ($errno) {
        echo "data: " . json_encode(['error' => 'cURL error: ' . $error]) . "\n\n";
    }

    echo "data: [DONE]\n\n";
    flush();
}

/**
 * Non-streaming response
 */
function callAPI(string $instructions, array $input): array {
    $data = [
        'model' => OPENAI_MODEL,
        'instructions' => $instructions,
        'input' => $input
    ];

    if (defined('REASONING_EFFORT')) {
        $data['reasoning'] = ['effort' => REASONING_EFFORT];
    }
    if (defined('VERBOSITY')) {
        $data['text'] = ['verbosity' => VERBOSITY];
    }
    if (REASONING_EFFORT === 'none') {
        if (defined('TEMPERATURE')) $data['temperature'] = TEMPERATURE;
        if (defined('TOP_P')) $data['top_p'] = TOP_P;
    }

    $ch = curl_init(OPENAI_API_URL);

    if ($ch === false) {
        return ['error' => 'Failed to initialize cURL'];
    }

    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($data),
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'Authorization: Bearer ' . OPENAI_API_KEY
        ],
        CURLOPT_TIMEOUT => 120,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    $errno = curl_errno($ch);
    curl_close($ch);

    if ($errno) {
        return ['error' => 'cURL error: ' . $error];
    }

    if (empty($response)) {
        return ['error' => 'Empty response from API'];
    }

    $decoded = json_decode($response, true);

    if ($httpCode !== 200) {
        $errorMessage = $decoded['error']['message'] ?? 'Unknown API error';
        return ['error' => 'API error (' . $httpCode . '): ' . $errorMessage];
    }

    return $decoded;
}

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Only allow same-origin or localhost in development
    if (isOriginAllowed()) {
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
        if ($origin) {
            header('Access-Control-Allow-Origin: ' . $origin);
        }
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Max-Age: 86400'); // Cache preflight for 24 hours
    }
    http_response_code(200);
    exit;
}

// Main request handling
try {
    // Check origin for actual requests
    if (!isOriginAllowed()) {
        header('Content-Type: application/json');
        http_response_code(403);
        echo json_encode(['error' => 'Origin not allowed']);
        exit;
    }

    // Set CORS header for allowed origins
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin && isOriginAllowed()) {
        header('Access-Control-Allow-Origin: ' . $origin);
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        header('Content-Type: application/json');
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        exit;
    }

    // Check rate limit (30 requests per minute)
    if (!checkRateLimit(30, 60)) {
        sendRateLimitResponse();
    }

    $rawInput = file_get_contents('php://input');
    $inputData = json_decode($rawInput, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        header('Content-Type: application/json');
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON input']);
        exit;
    }

    if (!$inputData || !isset($inputData['message'])) {
        header('Content-Type: application/json');
        http_response_code(400);
        echo json_encode(['error' => 'Message is required']);
        exit;
    }

    // Validate and sanitize the message
    $messageValidation = validateMessage($inputData['message'], 2000);
    if (!$messageValidation['valid']) {
        header('Content-Type: application/json');
        http_response_code(400);
        echo json_encode(['error' => $messageValidation['error']]);
        exit;
    }

    if (!defined('OPENAI_API_KEY') || empty(OPENAI_API_KEY) || OPENAI_API_KEY === 'your-openai-api-key-here') {
        header('Content-Type: application/json');
        http_response_code(500);
        echo json_encode(['error' => 'Service temporarily unavailable. Please try again later.']);
        exit;
    }

    $userMessage = $messageValidation['message'];
    $conversationHistory = validateHistory($inputData['history'] ?? [], 20);
    $useStreaming = ENABLE_STREAMING && ($inputData['stream'] ?? true);
    $activeRecipe = isset($inputData['activeRecipe']) ? htmlspecialchars($inputData['activeRecipe'], ENT_QUOTES, 'UTF-8') : null;

    // Build instructions with knowledge base
    $instructions = SYSTEM_PROMPT;
    $instructions .= "\n\n" . SOUP_KNOWLEDGE_BASE;

    // Add active recipe context if user is viewing one
    if ($activeRecipe) {
        $instructions .= "\n\n## CURRENT CONTEXT\nThe user is currently viewing the **{$activeRecipe}** recipe. Prioritize helping with this recipe unless they ask about something else.";
    }

    // Build input array
    $input = [];

    foreach ($conversationHistory as $msg) {
        if (isset($msg['role']) && isset($msg['content'])) {
            $input[] = [
                'role' => $msg['role'],
                'content' => $msg['content']
            ];
        }
    }

    $input[] = [
        'role' => 'user',
        'content' => $userMessage
    ];

    if ($useStreaming) {
        streamResponse($instructions, $input);
    } else {
        header('Content-Type: application/json');
        // CORS already set in main request handling

        $response = callAPI($instructions, $input);

        if (isset($response['error'])) {
            http_response_code(500);
            echo json_encode($response);
            exit;
        }

        $assistantMessage = '';
        if (isset($response['output_text'])) {
            $assistantMessage = $response['output_text'];
        } elseif (isset($response['output']) && is_array($response['output'])) {
            foreach ($response['output'] as $item) {
                if ($item['type'] === 'message' && isset($item['content'])) {
                    foreach ($item['content'] as $content) {
                        if ($content['type'] === 'output_text') {
                            $assistantMessage .= $content['text'];
                        }
                    }
                }
            }
        }

        echo json_encode([
            'success' => true,
            'message' => $assistantMessage
        ]);
    }

} catch (Exception $e) {
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
}
