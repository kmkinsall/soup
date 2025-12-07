<?php
/**
 * Soup Cooking Assistant - Security Module
 * Basic security measures for the API
 */

// Prevent direct access
if (basename($_SERVER['PHP_SELF']) === basename(__FILE__)) {
    http_response_code(403);
    die('Direct access not allowed');
}

/**
 * Apply security headers
 */
function applySecurityHeaders(): void {
    // Prevent MIME type sniffing
    header('X-Content-Type-Options: nosniff');

    // Prevent clickjacking
    header('X-Frame-Options: DENY');

    // XSS Protection (legacy, but still useful for older browsers)
    header('X-XSS-Protection: 1; mode=block');

    // Referrer policy - don't leak URLs
    header('Referrer-Policy: strict-origin-when-cross-origin');

    // Permissions policy - disable unnecessary features
    header('Permissions-Policy: geolocation=(), microphone=(), camera=()');

    // Content Security Policy
    $csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",  // unsafe-inline needed for inline event handlers
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data:",
        "connect-src 'self'",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'"
    ];
    header('Content-Security-Policy: ' . implode('; ', $csp));
}

/**
 * Rate limiting using session-based approach
 * @param int $maxRequests Maximum requests allowed in the time window
 * @param int $timeWindow Time window in seconds
 * @return bool True if request is allowed, false if rate limited
 */
function checkRateLimit(int $maxRequests = 30, int $timeWindow = 60): bool {
    // Start session if not started
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    $now = time();
    $key = 'rate_limit_requests';

    // Initialize if not set
    if (!isset($_SESSION[$key])) {
        $_SESSION[$key] = [];
    }

    // Clean old entries (outside time window)
    $_SESSION[$key] = array_filter($_SESSION[$key], function($timestamp) use ($now, $timeWindow) {
        return ($now - $timestamp) < $timeWindow;
    });

    // Check if over limit
    if (count($_SESSION[$key]) >= $maxRequests) {
        return false;
    }

    // Add current request
    $_SESSION[$key][] = $now;

    return true;
}

/**
 * Send rate limit exceeded response
 */
function sendRateLimitResponse(): void {
    header('Content-Type: application/json');
    header('Retry-After: 60');
    http_response_code(429);
    echo json_encode([
        'error' => 'Too many requests. Please wait a moment before trying again.',
        'retry_after' => 60
    ]);
    exit;
}

/**
 * Validate and sanitize user message
 * @param string $message Raw message input
 * @param int $maxLength Maximum allowed length
 * @return array ['valid' => bool, 'message' => string, 'error' => string|null]
 */
function validateMessage(string $message, int $maxLength = 2000): array {
    // Trim whitespace
    $message = trim($message);

    // Check if empty
    if (empty($message)) {
        return [
            'valid' => false,
            'message' => '',
            'error' => 'Message cannot be empty'
        ];
    }

    // Check length
    if (mb_strlen($message) > $maxLength) {
        return [
            'valid' => false,
            'message' => '',
            'error' => "Message too long. Maximum {$maxLength} characters allowed."
        ];
    }

    // Remove null bytes and other dangerous characters
    $message = str_replace(chr(0), '', $message);

    // Basic XSS prevention - encode HTML entities for storage/logging
    // Note: The actual display is handled client-side, but we sanitize here too
    $sanitized = htmlspecialchars($message, ENT_QUOTES | ENT_HTML5, 'UTF-8');

    return [
        'valid' => true,
        'message' => $message,  // Return original for API (AI needs raw text)
        'sanitized' => $sanitized,  // Sanitized version for logging
        'error' => null
    ];
}

/**
 * Validate conversation history
 * @param array $history Raw history array
 * @param int $maxMessages Maximum messages to allow
 * @return array Validated and sanitized history
 */
function validateHistory(array $history, int $maxMessages = 20): array {
    $validated = [];
    $count = 0;

    foreach ($history as $msg) {
        if ($count >= $maxMessages) break;

        // Must have role and content
        if (!isset($msg['role']) || !isset($msg['content'])) {
            continue;
        }

        // Role must be valid
        if (!in_array($msg['role'], ['user', 'assistant'], true)) {
            continue;
        }

        // Validate content
        $content = trim($msg['content']);
        if (empty($content) || mb_strlen($content) > 10000) {
            continue;
        }

        $validated[] = [
            'role' => $msg['role'],
            'content' => $content
        ];
        $count++;
    }

    return $validated;
}

/**
 * Get client IP address (for logging purposes)
 * @return string
 */
function getClientIP(): string {
    $headers = ['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'];

    foreach ($headers as $header) {
        if (!empty($_SERVER[$header])) {
            $ip = $_SERVER[$header];
            // Handle comma-separated list (X-Forwarded-For can have multiple IPs)
            if (strpos($ip, ',') !== false) {
                $ip = trim(explode(',', $ip)[0]);
            }
            // Validate IP
            if (filter_var($ip, FILTER_VALIDATE_IP)) {
                return $ip;
            }
        }
    }

    return 'unknown';
}

/**
 * Check if request origin is allowed
 * @return bool
 */
function isOriginAllowed(): bool {
    // For same-origin requests, allow
    if (empty($_SERVER['HTTP_ORIGIN'])) {
        return true;
    }

    $origin = $_SERVER['HTTP_ORIGIN'];
    $serverHost = $_SERVER['HTTP_HOST'] ?? '';

    // Parse origin
    $parsedOrigin = parse_url($origin);
    $originHost = $parsedOrigin['host'] ?? '';

    // Allow same host
    if ($originHost === $serverHost) {
        return true;
    }

    // Allow localhost variants for development
    $localhostVariants = ['localhost', '127.0.0.1', '::1'];
    if (in_array($originHost, $localhostVariants) && in_array($serverHost, $localhostVariants)) {
        return true;
    }

    return false;
}

/**
 * Configure error handling for production
 */
function configureErrorHandling(bool $isProduction = true): void {
    if ($isProduction) {
        // Don't display errors to users
        ini_set('display_errors', '0');
        ini_set('display_startup_errors', '0');

        // But do log them
        ini_set('log_errors', '1');
        error_reporting(E_ALL);
    } else {
        // Development mode - show errors
        ini_set('display_errors', '1');
        error_reporting(E_ALL);
    }
}
