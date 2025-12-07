<?php
/**
 * Soup Cooking Assistant - Configuration
 * Uses OpenAI Responses API with GPT-5.1
 */

// Prevent direct access
if (basename($_SERVER['PHP_SELF']) === basename(__FILE__)) {
    http_response_code(403);
    die('Direct access not allowed');
}

// Load .env file if it exists
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '#') === 0) continue;
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

// Get API key from environment
$apiKey = $_ENV['OPENAI_API_KEY'] ?? $_ENV['VITE_OPENAI_API_KEY'] ?? 'your-openai-api-key-here';

// OpenAI API Configuration
define('OPENAI_API_KEY', $apiKey);
define('OPENAI_API_URL', 'https://api.openai.com/v1/responses');
define('OPENAI_MODEL', 'gpt-5.1');

// Streaming toggle
define('ENABLE_STREAMING', true);

// Reasoning and verbosity settings
define('REASONING_EFFORT', 'none');
define('VERBOSITY', 'low');
define('TEMPERATURE', 0.7);
define('TOP_P', 0.9);

// System prompt for the Soup Cooking Assistant
define('SYSTEM_PROMPT', <<<'PROMPT'
You are a friendly and knowledgeable cooking assistant specializing in soup recipes. You have access to a curated collection of 8 delicious soup recipes and your purpose is to help home cooks prepare these soups successfully.

## Your Role
- Guide users step-by-step through cooking any of the 8 soups
- Answer questions about ingredients, substitutions, and techniques
- Provide helpful tips for timing, preparation, and serving
- Troubleshoot cooking issues in real-time
- Suggest which soup to make based on available ingredients or preferences

## Your Personality
- Warm, encouraging, and patient
- Practical and clear with instructions
- Enthusiastic about good food
- Supportive when things go wrong

## Conversational Skills
Be naturally conversational and engaging:
- **Greetings**: Respond warmly to "hello", "hi", "hey" - introduce yourself briefly and offer to help
- **Casual Chat**: Engage with small talk naturally, then gently steer toward soup-related topics
- **Follow-ups**: Remember context from earlier in the conversation and reference it
- **Check-ins**: Ask how things are going if they're actively cooking
- **Encouragement**: Celebrate wins ("That sounds perfect!") and comfort setbacks ("No worries, let's fix this!")
- **Farewells**: End with warmth ("Enjoy your soup!" or "Happy cooking!")
- **Humor**: Light, food-related humor is welcome when appropriate
- **Questions**: When unsure what they need, ask clarifying questions rather than guessing

## How to Help
1. **Recipe Selection**: Help users choose a soup based on what they have or what they're craving
2. **Preparation**: Walk through ingredient prep before cooking
3. **Cooking Guidance**: Provide step-by-step instructions with timing cues
4. **Troubleshooting**: Help fix issues (too thick, too thin, bland, etc.)
5. **Customization**: Suggest modifications for dietary needs or preferences

## Response Length
- Match response length to the question complexity
- Simple questions get concise answers
- Detailed recipe walkthroughs can be longer
- Don't over-explain obvious things

## Response Formatting - USE FULL MARKDOWN
Always format your responses using rich GitHub-flavored markdown. THIS IS CRITICAL for proper display.

### Formatting Requirements
- **Bold** important terms, ingredients, temperatures, and times using **double asterisks**
- Use `backticks` for measurements like `1 lb`, `4 cups`, `350°F`
- Use bullet points with dash and space (- item) for unordered lists
- Use numbered lists (1. item) for sequential cooking steps
- Use > at the start of a line for tips, warnings, and important notes (blockquotes)
- Use ### for section headers (What You'll Need, Instructions, Tips, etc.)
- Use --- on its own line for horizontal separators between major sections

### IMPORTANT - Blockquotes for Tips
Every tip, note, or important callout MUST start with > like this:
> **Tip:** This is how to format tips correctly.
> **Pro Tip:** Multiple lines can continue with > at the start.
> **Note:** Important information goes in blockquotes.

### Example Full Recipe Response:
**Lasagna Soup** is a hearty, comforting choice!

### Ingredients
- `1 lb` **ground beef**
- `1 lb` **Italian sausage**
- `4 cups` **beef broth**
- `8` **lasagna sheets**, broken into pieces
- **Italian seasoning** to taste

### Instructions
1. **Brown the meats** in a large pot over medium-high heat for `5-7 minutes`
2. **Drain excess fat**, leaving about `1 tbsp` for flavor
3. Add the **onion and garlic**, cook until fragrant (`2-3 minutes`)
4. Pour in the **broth** and bring to a simmer

> **Pro Tip:** Break lasagna sheets into bite-sized pieces before adding - much easier to eat!

5. Add **broken lasagna sheets** and cook until al dente (`8-10 minutes`)
6. Stir in **spinach** and let wilt

> **Serving Suggestion:** Top with fresh **mozzarella** and **parmesan** for that authentic lasagna experience!

---

## Important Guidelines
- Only discuss the 8 soups in your knowledge base
- Always prioritize food safety (cooking temps, storage, etc.)
- Be honest about what you don't know
- Keep the conversation flowing naturally - you're a helpful kitchen companion, not just a recipe database

## STAYING ON TOPIC - CRITICAL
You are ONLY a soup cooking assistant. You must stay focused on your 8 soup recipes.

**Politely redirect off-topic requests:**
- Other recipes: "I specialize in these 8 soup recipes! Would you like me to suggest one that might satisfy that craving?"
- Non-cooking topics: "I'm your soup cooking assistant - I'd love to help you with one of my 8 delicious soup recipes instead!"
- General questions: "That's outside my expertise, but I can definitely help you make an amazing soup! What sounds good today?"
- Technical/coding/etc: "I'm just a humble soup assistant! Let me help you with something delicious from my recipe collection."

**Never provide:**
- Recipes not in your knowledge base
- Advice on non-cooking topics
- Information unrelated to soup preparation
- Responses that could be seen as general assistant behavior

**Always bring it back to soup:**
Even if someone asks something off-topic, acknowledge briefly and redirect warmly to your soup expertise. Your passion is these 8 soups - stay in character!
PROMPT
);

// Soup Knowledge Base - embedded for quick access
define('SOUP_KNOWLEDGE_BASE', <<<'SOUPS'
# Soup Recipe Knowledge Base

## 1. Lasagna Soup
**Tags:** Popular, Hearty
**Description:** All the flavors of lasagna in a cozy soup form with ground beef, Italian sausage, butternut squash, and melty cheese.

### Ingredients
- 1 lb ground beef
- 1 lb Italian sausage
- 1 butternut squash, cubed
- 1 jar roasted red peppers
- 8 lasagna sheets, broken
- 4 cups beef broth
- 2 cups fresh spinach
- 1 cup mozzarella cheese
- 1/2 cup parmesan cheese
- 1 cup heavy cream
- 1 onion, diced
- 4 cloves garlic, minced
- Salt and pepper
- Italian seasoning

### Instructions
1. Brown the ground beef and Italian sausage in a large pot over medium-high heat. Drain excess fat.
2. Add diced onion and minced garlic. Cook until softened, about 3-4 minutes.
3. Roast butternut squash cubes at 400F for 25-30 minutes until tender.
4. Blend roasted squash with roasted red peppers and heavy cream until smooth.
5. Add blended sauce and beef broth to the pot. Bring to a simmer.
6. Add broken lasagna sheets and cook until al dente.
7. Stir in fresh spinach and let it wilt.
8. Serve topped with mozzarella and parmesan cheese.

### Tips
- Break lasagna sheets into bite-sized pieces for easier eating
- The butternut squash sauce makes it extra creamy without heavy cream overload
- Can substitute turkey for a lighter version

---

## 2. Tortellini Soup
**Tags:** Quick, Creamy
**Description:** Creamy and rich with cheese tortellini, Italian sausage, and fresh spinach in a savory broth.

### Ingredients
- 1 lb Italian sausage
- 20 oz cheese tortellini
- 2 carrots, diced
- 2 celery stalks, diced
- 1 onion, diced
- 4 cups beef broth
- 2 tbsp tomato paste
- 1 cup heavy cream
- 2 cups fresh spinach
- 1/2 cup parmesan cheese
- 2 tbsp flour
- 4 cloves garlic, minced
- Italian seasoning

### Instructions
1. Brown sausage in a large pot, breaking into crumbles.
2. Add carrots, celery, and onion. Cook until softened.
3. Stir in garlic and Italian seasoning.
4. Add tomato paste and flour, stir to coat.
5. Pour in beef broth, bring to boil, then simmer 15 mins.
6. Stir in cream and tortellini. Cook until tender.
7. Fold in spinach and let wilt.
8. Top with parmesan.

### Tips
- Use refrigerated tortellini for best texture
- Don't overcook the tortellini or it gets mushy
- Great for meal prep - stores well for 3-4 days

---

## 3. Cheeseburger Soup
**Tags:** Comfort, Cheesy
**Description:** A burger in soup form. Cheesy, hearty, and topped with pickles just like your favorite burger.

### Ingredients
- 1.5 lbs ground beef
- 1 onion, diced
- 2 carrots, diced
- 2 celery stalks, diced
- 4 potatoes, cubed
- 4 cups chicken broth
- 2 cups sharp cheddar
- 1 cup milk
- 1/2 cup sour cream
- 3 tbsp flour
- Dill pickles
- Garlic and onion powder

### Instructions
1. Brown beef in a large pot. Drain fat.
2. Add onion, carrots, celery. Cook until softened.
3. Sprinkle flour and cook for 1 minute.
4. Add broth and potatoes. Season with spices.
5. Simmer 15-20 mins until potatoes are tender.
6. Stir in milk, sour cream, and cheese until melted.
7. Top with pickles and cheese.

### Tips
- Use sharp cheddar for best flavor
- The pickles are essential - don't skip them!
- Add a dollop of ketchup and mustard for full burger experience

---

## 4. Potato Sausage Soup
**Tags:** Creamy, Rich
**Description:** Ultra creamy potato soup loaded with Italian sausage, cream cheese, and fresh spinach.

### Ingredients
- 1 lb Italian sausage
- 2 lbs potatoes, cubed
- 1 large onion
- 4 cups beef broth
- 8 oz cream cheese
- 1 cup heavy cream
- 2 cups fresh spinach
- 1/2 cup parmesan cheese
- 4 cloves garlic
- Red pepper flakes

### Instructions
1. Brown sausage in a large pot.
2. Add onion and cook until translucent.
3. Add garlic and spices.
4. Add potatoes and broth. Boil then simmer 12-15 mins.
5. Melt in cream cheese.
6. Stir in heavy cream and parmesan.
7. Fold in spinach and serve.

### Tips
- Cut potatoes small for faster cooking
- Cream cheese should be room temperature for smooth melting
- Add red pepper flakes gradually - they're spicy!

---

## 5. Baked Ziti Soup
**Tags:** Italian, Pastalicious
**Description:** Classic baked ziti transformed into a hearty soup with two meats and plenty of melted cheese.

### Ingredients
- 1/2 lb ground beef
- 1/2 lb Italian sausage
- 8 oz ziti pasta
- 28 oz crushed tomatoes
- 15 oz tomato sauce
- 2 cups broth
- 1 cup mozzarella
- 1/2 cup parmesan
- 1/2 cup heavy cream
- Onion and garlic

### Instructions
1. Brown beef and sausage together. Drain fat.
2. Add onion and garlic.
3. Stir in tomato paste, tomatoes, sauce, and broth.
4. Simmer 15 mins to develop flavor.
5. Add ziti and cook until al dente.
6. Stir in cream and cheeses.
7. Serve with fresh basil.

### Tips
- Use a mix of beef and sausage for best flavor
- Don't skip the cream - it balances the acidity
- Rigatoni works as a substitute for ziti

---

## 6. Boursin Soup
**Tags:** Gourmet, Vegetarian-friendly
**Description:** Roasted vegetables blended with creamy Boursin cheese and topped with crispy bacon.

### Ingredients
- 1 butternut squash
- 2 zucchini
- 2 yellow squash
- 1 red pepper
- 2 cups cherry tomatoes
- 2 packs Boursin cheese
- 1 cup heavy cream
- Bacon crumbles
- Garlic and rosemary

### Instructions
1. Roast all chopped veggies with garlic and rosemary at 400F for 30 mins.
2. Melt Boursin cheese over hot veggies.
3. Blend everything until smooth.
4. Add cream to reach desired consistency.
5. Top with bacon.

### Tips
- Can be made vegetarian by omitting bacon
- Boursin Garlic & Fine Herbs flavor works best
- Roast veggies until caramelized for deeper flavor

---

## 7. Chicken Gnocchi Soup
**Tags:** Hearty, Classic
**Description:** Pillowy gnocchi in a creamy chicken soup with sundried tomatoes and fresh spinach.

### Ingredients
- 1 lb ground chicken
- 16 oz gnocchi
- 4 cups chicken broth
- 1 cup heavy cream
- Onion, carrots, celery
- Sundried tomatoes
- 2 cups spinach
- Parmesan cheese

### Instructions
1. Saute mirepoix (onion, carrot, celery).
2. Cook chicken until done.
3. Add garlic and sundried tomatoes.
4. Stir in flour and paste, then broth.
5. Simmer 15 mins, add gnocchi until floating.
6. Add cream, cheese, and spinach.

### Tips
- Gnocchi is done when it floats to the surface
- Use oil-packed sundried tomatoes for extra flavor
- Can substitute rotisserie chicken for quick prep

---

## 8. Chicken Alfredo Soup
**Tags:** Family, Creamy
**Description:** Rich and creamy Alfredo soup with tender chicken, fettuccine, and fresh broccoli.

### Ingredients
- 2 cups cooked chicken
- 8 oz fettuccine
- 15 oz Alfredo sauce
- 3 cups broth
- 2 cups broccoli
- 1 cup heavy cream
- Parmesan cheese
- Onion and garlic

### Instructions
1. Saute onion and garlic.
2. Add alfredo sauce and broth. Simmer.
3. Add broken pasta, cook 5 mins.
4. Add broccoli and chicken.
5. Simmer until broccoli is tender.
6. Stir in cream and cheese.

### Tips
- Break fettuccine into 2-inch pieces
- Use rotisserie chicken to save time
- Fresh broccoli works better than frozen here

---

## General Soup Tips

### Storage
- Most soups keep 3-4 days refrigerated
- Freeze without pasta/noodles for best results
- Reheat gently to prevent cream from separating

### Substitutions
- Heavy cream can be replaced with half-and-half (less rich)
- Italian sausage: use mild or hot based on preference
- Beef broth and chicken broth are often interchangeable
- Fresh spinach can be swapped for kale (cook longer)

### Serving Suggestions
- Crusty bread for dipping
- Side salad for balance
- Garnish with fresh herbs
- Extra cheese on top always welcome
SOUPS
);
