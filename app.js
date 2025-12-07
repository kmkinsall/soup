// Lucide Icons
const icons = {
    soup: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 21 3"/><path d="M10 3c0 1.5 1 2 1.5 2.5S13 7 13 8.5"/><path d="M14 3c0 1.5 1 2 1.5 2.5S17 7 17 8.5"/></svg>`,
    sun: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    list: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/></svg>`,
    utensils: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
    pasta: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M12 3v3"/><path d="M9 3v6"/><path d="M15 3v6"/></svg>`,
    cheese: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.5 9.5-1 1"/><path d="m11.5 13.5-1 1"/><path d="M2 12c0-3.5 4.5-6 10-6s10 2.5 10 6"/><path d="M2 12v5c0 2.8 4.5 5 10 5s10-2.2 10-5v-5"/><circle cx="10" cy="14" r="1"/><circle cx="16" cy="16" r="1"/></svg>`,
    beef: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12.5" cy="8.5" r="2.5"/><path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18h15a3 3 0 0 0 1.9-5.32c-2.4-2.18-2.08-2.95-3.18-6.08A6.5 6.5 0 0 0 12.5 2Z"/><path d="m19.5 18-2-7"/><path d="M4.5 18l2-7"/></svg>`,
    potato: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-4 0-8 4-8 8 0 5 4 12 8 12s8-7 8-12c0-4-4-8-8-8z"/><path d="M10 8h.01"/><path d="M14 12h.01"/><path d="M9 14h.01"/></svg>`,
    salad: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21h10"/><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"/><path d="m13 12 4-4"/><path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"/></svg>`,
    chicken: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 5.5c.83-1.67 3.17-1.67 4 0 .83 1.67-.42 3.67-2 4.5"/><circle cx="13" cy="12" r="3"/><path d="M7.5 12c-2-1-3.5-3-3.5-5.5C4 4 6 2 8.5 2c1.5 0 2.9.8 3.7 2"/><path d="M13 15c0 3-2.5 6-6 7"/><path d="M13 15c0 3 2.5 6 6 7"/></svg>`
};

// Recipe data
const recipes = {
    lasagna: {
        title: "Lasagna Soup",
        icon: "pasta",
        tag: "Popular",
        description: "All the flavors of lasagna in a cozy soup form with ground beef, Italian sausage, butternut squash, and melty cheese.",
        ingredients: [
            "1 lb ground beef",
            "1 lb Italian sausage",
            "1 butternut squash, cubed",
            "1 jar roasted red peppers",
            "8 lasagna sheets, broken",
            "4 cups beef broth",
            "2 cups fresh spinach",
            "1 cup mozzarella cheese",
            "1/2 cup parmesan cheese",
            "1 cup heavy cream",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "Salt and pepper",
            "Italian seasoning"
        ],
        instructions: [
            "Brown the ground beef and Italian sausage. Drain fat.",
            "Add onion and garlic. Cook until softened.",
            "Roast butternut squash at 400F for 25-30 minutes.",
            "Blend squash with red peppers and cream.",
            "Add sauce and broth to pot. Simmer.",
            "Add lasagna sheets. Cook until al dente.",
            "Stir in spinach until wilted.",
            "Top with mozzarella and parmesan."
        ]
    },
    tortellini: {
        title: "Tortellini Soup",
        icon: "cheese",
        tag: "Quick",
        description: "Creamy and rich with cheese tortellini, Italian sausage, and fresh spinach in a savory broth.",
        ingredients: [
            "1 lb Italian sausage",
            "20 oz cheese tortellini",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "1 onion, diced",
            "4 cups beef broth",
            "2 tbsp tomato paste",
            "1 cup heavy cream",
            "2 cups fresh spinach",
            "1/2 cup parmesan cheese",
            "2 tbsp flour",
            "4 cloves garlic, minced",
            "Italian seasoning"
        ],
        instructions: [
            "Brown sausage, breaking into crumbles.",
            "Add carrots, celery, onion. Cook until soft.",
            "Stir in garlic and Italian seasoning.",
            "Add tomato paste and flour.",
            "Pour in broth, simmer 15 mins.",
            "Add cream and tortellini. Cook until tender.",
            "Fold in spinach. Top with parmesan."
        ]
    },
    cheeseburger: {
        title: "Cheeseburger Soup",
        icon: "beef",
        tag: "Comfort",
        description: "A burger in soup form. Cheesy, hearty, and topped with pickles just like your favorite burger.",
        ingredients: [
            "1.5 lbs ground beef",
            "1 onion, diced",
            "2 carrots, diced",
            "2 celery stalks, diced",
            "4 potatoes, cubed",
            "4 cups chicken broth",
            "2 cups sharp cheddar",
            "1 cup milk",
            "1/2 cup sour cream",
            "3 tbsp flour",
            "Dill pickles",
            "Garlic and onion powder"
        ],
        instructions: [
            "Brown beef. Drain fat.",
            "Add onion, carrots, celery. Cook until soft.",
            "Sprinkle flour, cook 1 minute.",
            "Add broth and potatoes. Season.",
            "Simmer 15-20 mins until potatoes tender.",
            "Stir in milk, sour cream, cheese.",
            "Top with pickles and extra cheese."
        ]
    },
    potato: {
        title: "Potato Sausage Soup",
        icon: "potato",
        tag: "Creamy",
        description: "Ultra creamy potato soup loaded with Italian sausage, cream cheese, and fresh spinach.",
        ingredients: [
            "1 lb Italian sausage",
            "2 lbs potatoes, cubed",
            "1 large onion",
            "4 cups beef broth",
            "8 oz cream cheese",
            "1 cup heavy cream",
            "2 cups fresh spinach",
            "1/2 cup parmesan cheese",
            "4 cloves garlic",
            "Red pepper flakes"
        ],
        instructions: [
            "Brown sausage in a large pot.",
            "Add onion, cook until translucent.",
            "Add garlic and spices.",
            "Add potatoes and broth. Simmer 12-15 mins.",
            "Melt in cream cheese.",
            "Stir in heavy cream and parmesan.",
            "Fold in spinach and serve."
        ]
    },
    ziti: {
        title: "Baked Ziti Soup",
        icon: "pasta",
        tag: "Italian",
        description: "Classic baked ziti transformed into a hearty soup with two meats and plenty of melted cheese.",
        ingredients: [
            "1/2 lb ground beef",
            "1/2 lb Italian sausage",
            "8 oz ziti pasta",
            "28 oz crushed tomatoes",
            "15 oz tomato sauce",
            "2 cups broth",
            "1 cup mozzarella",
            "1/2 cup parmesan",
            "1/2 cup heavy cream",
            "Onion and garlic"
        ],
        instructions: [
            "Brown beef and sausage. Drain fat.",
            "Add onion and garlic.",
            "Add tomatoes, sauce, and broth.",
            "Simmer 15 mins.",
            "Add ziti, cook until al dente.",
            "Stir in cream and cheeses.",
            "Serve with fresh basil."
        ]
    },
    boursin: {
        title: "Boursin Soup",
        icon: "salad",
        tag: "Gourmet",
        description: "Roasted vegetables blended with creamy Boursin cheese and topped with crispy bacon.",
        ingredients: [
            "1 butternut squash",
            "2 zucchini",
            "2 yellow squash",
            "1 red pepper",
            "2 cups cherry tomatoes",
            "2 packs Boursin cheese",
            "1 cup heavy cream",
            "Bacon crumbles",
            "Garlic and rosemary"
        ],
        instructions: [
            "Roast veggies with garlic and rosemary at 400F for 30 mins.",
            "Melt Boursin over hot veggies.",
            "Blend everything until smooth.",
            "Add cream to reach desired consistency.",
            "Top with bacon."
        ]
    },
    gnocchi: {
        title: "Chicken Gnocchi Soup",
        icon: "chicken",
        tag: "Hearty",
        description: "Pillowy gnocchi in a creamy chicken soup with sundried tomatoes and fresh spinach.",
        ingredients: [
            "1 lb ground chicken",
            "16 oz gnocchi",
            "4 cups chicken broth",
            "1 cup heavy cream",
            "Onion, carrots, celery",
            "Sundried tomatoes",
            "2 cups spinach",
            "Parmesan cheese"
        ],
        instructions: [
            "Saute mirepoix (onion, carrot, celery).",
            "Cook chicken until done.",
            "Add garlic and sundried tomatoes.",
            "Add flour, then broth. Simmer 15 mins.",
            "Add gnocchi until floating.",
            "Add cream, cheese, and spinach."
        ]
    },
    alfredo: {
        title: "Chicken Alfredo Soup",
        icon: "pasta",
        tag: "Family",
        description: "Rich and creamy Alfredo soup with tender chicken, fettuccine, and fresh broccoli.",
        ingredients: [
            "2 cups cooked chicken",
            "8 oz fettuccine",
            "15 oz Alfredo sauce",
            "3 cups broth",
            "2 cups broccoli",
            "1 cup heavy cream",
            "Parmesan cheese",
            "Onion and garlic"
        ],
        instructions: [
            "Saute onion and garlic.",
            "Add alfredo sauce and broth. Simmer.",
            "Add broken pasta, cook 5 mins.",
            "Add broccoli and chicken.",
            "Simmer until broccoli tender.",
            "Stir in cream and cheese."
        ]
    }
};

// State
let activeRecipe = null;
let conversationHistory = [];
let isLoading = false;

// DOM Elements
const recipeList = document.getElementById('recipe-list');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const themeToggle = document.getElementById('theme-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const recipesToggle = document.getElementById('recipes-toggle');
const closeSidebar = document.getElementById('close-sidebar');
const settingsToggle = document.getElementById('settings-toggle');
const settingsPanel = document.getElementById('settings-panel');
const settingsOverlay = document.getElementById('settings-overlay');
const closeSettings = document.getElementById('close-settings');
const clearChatButton = document.getElementById('clear-chat');

// Render recipe list in sidebar
function renderRecipes() {
    recipeList.innerHTML = Object.entries(recipes).map(([key, recipe]) => `
        <article class="recipe-card ${activeRecipe === key ? 'active' : ''}" data-key="${key}">
            <div class="recipe-header" onclick="selectRecipe('${key}')">
                <div class="recipe-title-row">
                    <div class="recipe-title-group">
                        <div class="recipe-icon">${icons[recipe.icon]}</div>
                        <h3 class="recipe-title">${recipe.title}</h3>
                    </div>
                    <span class="recipe-tag">${recipe.tag}</span>
                </div>
                <p class="recipe-description">${recipe.description}</p>
            </div>
            <div class="recipe-details" id="details-${key}">
                <div class="recipe-details-inner">
                    <div class="details-section">
                        <h4>${icons.list} Ingredients</h4>
                        <ul class="ingredients-list">
                            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="details-section">
                        <h4>${icons.utensils} Instructions</h4>
                        <ol class="instructions-list">
                            ${recipe.instructions.map((inst, i) => `
                                <li>
                                    <span class="step-number">${i + 1}</span>
                                    <span>${inst}</span>
                                </li>
                            `).join('')}
                        </ol>
                    </div>
                </div>
            </div>
            <button class="expand-toggle ${activeRecipe === key ? 'open' : ''}" onclick="toggleRecipe('${key}', event)">
                <span>${activeRecipe === key ? 'Hide details' : 'Show details'}</span>
                ${icons.chevronDown}
            </button>
        </article>
    `).join('');
}

// Select and toggle a recipe (clicking title opens/closes)
function selectRecipe(key) {
    const details = document.getElementById(`details-${key}`);
    const btn = document.querySelector(`.recipe-card[data-key="${key}"] .expand-toggle`);
    const isCurrentlyOpen = details && details.classList.contains('open');

    // If clicking the same recipe that's open, close it
    if (activeRecipe === key && isCurrentlyOpen) {
        details.style.maxHeight = null;
        details.classList.remove('open');
        if (btn) {
            btn.classList.remove('open');
            btn.querySelector('span').textContent = 'Show details';
        }
        activeRecipe = null;
        document.querySelectorAll('.recipe-card').forEach(card => {
            card.classList.remove('active');
        });
        return;
    }

    // Close any other open recipe
    document.querySelectorAll('.recipe-details.open').forEach(el => {
        el.style.maxHeight = null;
        el.classList.remove('open');
    });
    document.querySelectorAll('.expand-toggle.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('span').textContent = 'Show details';
    });
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.classList.remove('active');
    });

    // Open the clicked recipe
    activeRecipe = key;
    if (details) {
        details.classList.add('open');
        details.style.maxHeight = details.scrollHeight + 'px';
    }
    if (btn) {
        btn.classList.add('open');
        btn.querySelector('span').textContent = 'Hide details';
    }
    const card = document.querySelector(`.recipe-card[data-key="${key}"]`);
    if (card) card.classList.add('active');
}

// Toggle recipe details
function toggleRecipe(key, event) {
    event.stopPropagation();

    const details = document.getElementById(`details-${key}`);
    const btn = event.currentTarget;
    const isOpen = details.classList.contains('open');

    if (isOpen) {
        details.style.maxHeight = null;
        details.classList.remove('open');
        btn.classList.remove('open');
        btn.querySelector('span').textContent = 'Show details';
        if (activeRecipe === key) activeRecipe = null;
    } else {
        // Close other open recipes
        document.querySelectorAll('.recipe-details.open').forEach(el => {
            el.style.maxHeight = null;
            el.classList.remove('open');
        });
        document.querySelectorAll('.expand-toggle.open').forEach(el => {
            el.classList.remove('open');
            el.querySelector('span').textContent = 'Show details';
        });

        details.classList.add('open');
        details.style.maxHeight = details.scrollHeight + 'px';
        btn.classList.add('open');
        btn.querySelector('span').textContent = 'Hide details';
        activeRecipe = key;
    }

    // Update active state
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.classList.toggle('active', card.dataset.key === activeRecipe);
    });
}

// Parse markdown to HTML
function parseMarkdown(text) {
    // Handle code blocks first (preserve content)
    const codeBlocks = [];
    text = text.replace(/```(\w*)\n?([\s\S]*?)```/g, (match, lang, code) => {
        const index = codeBlocks.length;
        codeBlocks.push(`<pre><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`);
        return `%%CODEBLOCK${index}%%`;
    });

    // Inline code (before other processing)
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Headers (must be at start of line) - support h2 through h5
    text = text.replace(/^#### (.+)$/gm, '<h5>$1</h5>');
    text = text.replace(/^### (.+)$/gm, '<h4>$1</h4>');
    text = text.replace(/^## (.+)$/gm, '<h3>$1</h3>');
    text = text.replace(/^# (.+)$/gm, '<h2>$1</h2>');

    // Horizontal rules
    text = text.replace(/^---+$/gm, '<hr>');

    // Blockquotes - group consecutive lines starting with >
    text = text.replace(/^(?:> .+\n?)+/gm, (match) => {
        const content = match.replace(/^> ?/gm, '').trim();
        return `<blockquote>${content}</blockquote>\n`;
    });

    // Bold and italic (handle nested)
    text = text.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Process lists - handle numbered and unordered with nesting support
    const lines = text.split('\n');
    let result = [];
    let listStack = []; // Stack to track nested lists [{type: 'ol'|'ul', indent: number}]

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Detect indentation level
        const indentMatch = line.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[1].length : 0;

        // Match unordered list items (- or * with optional leading spaces)
        const unorderedMatch = line.match(/^(\s*)[-*]\s+(.+)$/);
        // Match ordered list items (1. 2. etc with optional leading spaces)
        const orderedMatch = line.match(/^(\s*)\d+\.\s+(.+)$/);

        if (unorderedMatch || orderedMatch) {
            const match = unorderedMatch || orderedMatch;
            const itemIndent = match[1].length;
            const content = match[2];
            const newType = unorderedMatch ? 'ul' : 'ol';

            // Close lists that are deeper than current indent
            while (listStack.length > 0 && listStack[listStack.length - 1].indent > itemIndent) {
                const closed = listStack.pop();
                result.push(`</${closed.type}>`);
            }

            // Check if we need to open a new list or switch types
            if (listStack.length === 0 || listStack[listStack.length - 1].indent < itemIndent) {
                // Opening a new (possibly nested) list
                result.push(`<${newType}>`);
                listStack.push({ type: newType, indent: itemIndent });
            } else if (listStack[listStack.length - 1].type !== newType) {
                // Same indent but different type - close old, open new
                const closed = listStack.pop();
                result.push(`</${closed.type}>`);
                result.push(`<${newType}>`);
                listStack.push({ type: newType, indent: itemIndent });
            }

            result.push(`<li>${content}</li>`);
        } else {
            // Non-list line - close all open lists (only if line is not empty/whitespace)
            if (line.trim() !== '' || (i + 1 < lines.length && !lines[i + 1].match(/^\s*[-*\d]/))) {
                while (listStack.length > 0) {
                    const closed = listStack.pop();
                    result.push(`</${closed.type}>`);
                }
            }
            result.push(line);
        }
    }

    // Close any remaining open lists
    while (listStack.length > 0) {
        const closed = listStack.pop();
        result.push(`</${closed.type}>`);
    }

    text = result.join('\n');

    // Paragraphs - double newlines become paragraph breaks
    text = text.replace(/\n\n+/g, '</p><p>');

    // Single newlines become line breaks (except after block elements)
    text = text.replace(/(?<!(>|<\/h[2-5]>|<\/ul>|<\/ol>|<\/pre>|<\/blockquote>|<hr>|<\/li>))\n(?!<)/g, '<br>');

    // Clean up extra breaks and empty paragraphs
    text = text.replace(/<br>\s*<br>/g, '</p><p>');
    text = text.replace(/<p>\s*<\/p>/g, '');

    // Restore code blocks
    codeBlocks.forEach((block, index) => {
        text = text.replace(`%%CODEBLOCK${index}%%`, block);
    });

    return text;
}

// Helper to escape HTML in code blocks
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Wrap content in paragraphs intelligently (avoid wrapping block elements)
function wrapInParagraphs(html) {
    // Block elements that shouldn't be wrapped in <p>
    const blockElements = ['<h2', '<h3', '<h4', '<h5', '<ul>', '<ol>', '<pre>', '<blockquote>', '<hr>'];
    const startsWithBlock = blockElements.some(el => html.trimStart().startsWith(el));

    if (startsWithBlock) {
        return html;
    }

    // Wrap text content in paragraphs, but not if it already has proper structure
    if (!html.includes('<p>') && !html.includes('</p>')) {
        return `<p>${html}</p>`;
    }

    return html;
}

// Add message to chat
function addMessage(content, role, isError = false) {
    // Remove welcome message if present
    const welcome = chatMessages.querySelector('.welcome-message');
    if (welcome) welcome.remove();

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role} ${isError ? 'error' : ''} animate-in`;

    if (role === 'assistant') {
        messageDiv.innerHTML = wrapInParagraphs(parseMarkdown(content));
    } else {
        messageDiv.textContent = content;
    }

    chatMessages.appendChild(messageDiv);

    // Only auto-scroll for user messages, not assistant responses
    if (role === 'user') {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    return messageDiv;
}

// Show typing indicator
function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'typing-indicator';
    typing.id = 'typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTyping() {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
}

// Send message to API
async function sendMessage(message) {
    if (isLoading || !message.trim()) return;

    // Client-side validation
    const trimmedMessage = message.trim();
    const MAX_MESSAGE_LENGTH = 2000;

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
        addMessage(`Message too long. Please keep it under ${MAX_MESSAGE_LENGTH} characters.`, 'assistant', true);
        return;
    }

    isLoading = true;
    sendButton.disabled = true;

    // Add user message
    addMessage(trimmedMessage, 'user');
    conversationHistory.push({ role: 'user', content: trimmedMessage });

    // Clear input
    chatInput.value = '';
    chatInput.style.height = 'auto';

    showTyping();

    try {
        const response = await fetch('api.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: trimmedMessage,
                history: conversationHistory.slice(-10), // Last 10 messages
                stream: true,
                activeRecipe: activeRecipe ? recipes[activeRecipe]?.title : null
            })
        });

        hideTyping();

        if (!response.ok) {
            // Handle rate limiting
            if (response.status === 429) {
                const retryAfter = response.headers.get('Retry-After') || 60;
                throw new Error(`Too many requests. Please wait ${retryAfter} seconds before trying again.`);
            }
            const error = await response.json().catch(() => ({}));
            throw new Error(error.error || 'Failed to get response');
        }

        // Handle streaming response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let assistantMessage = '';
        let messageDiv = null;

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const data = line.slice(6);
                    if (data === '[DONE]') continue;

                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.content) {
                            assistantMessage += parsed.content;

                            if (!messageDiv) {
                                messageDiv = addMessage(assistantMessage, 'assistant');
                            } else {
                                // Update message content with markdown parsing
                                messageDiv.innerHTML = wrapInParagraphs(parseMarkdown(assistantMessage));
                            }
                        }
                        if (parsed.error) {
                            throw new Error(parsed.error);
                        }
                    } catch (e) {
                        if (e.message !== 'Unexpected end of JSON input') {
                            console.error('Parse error:', e);
                        }
                    }
                }
            }
        }

        if (assistantMessage) {
            conversationHistory.push({ role: 'assistant', content: assistantMessage });
            saveConversation(); // Save to session storage
        }

    } catch (error) {
        hideTyping();
        addMessage(error.message || 'Something went wrong. Please try again.', 'assistant', true);
    }

    isLoading = false;
    sendButton.disabled = false;
    chatInput.focus();
}

// Event listeners
sendButton.addEventListener('click', () => {
    sendMessage(chatInput.value);
});

chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(chatInput.value);
    }
});

// Auto-resize textarea
chatInput.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
});

// Quick action and soup buttons
document.addEventListener('click', (e) => {
    const button = e.target.closest('.quick-action, .soup-button');
    if (button) {
        const message = button.dataset.message;
        if (message) sendMessage(message);
    }
});

// Theme toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    const isLight = document.body.classList.contains('light-mode');
    themeToggle.innerHTML = isLight ? icons.moon : icons.sun;
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon();
});

// Sidebar toggle functions
function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeSidebarPanel() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('visible');
    document.body.style.overflow = '';
}

// Sidebar event listeners
recipesToggle.addEventListener('click', openSidebar);
closeSidebar.addEventListener('click', closeSidebarPanel);
sidebarOverlay.addEventListener('click', closeSidebarPanel);

// Close sidebar on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (sidebar.classList.contains('open')) {
            closeSidebarPanel();
        }
        if (settingsPanel.classList.contains('open')) {
            closeSettingsPanel();
        }
    }
});

// Settings panel functions
function openSettingsPanel() {
    settingsPanel.classList.add('open');
    settingsOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeSettingsPanel() {
    settingsPanel.classList.remove('open');
    settingsOverlay.classList.remove('visible');
    document.body.style.overflow = '';
}

// Settings event listeners
settingsToggle.addEventListener('click', openSettingsPanel);
closeSettings.addEventListener('click', closeSettingsPanel);
settingsOverlay.addEventListener('click', closeSettingsPanel);

// Session storage for conversation persistence
const SESSION_KEY = 'soup_assistant_chat';

function saveConversation() {
    const chatData = {
        history: conversationHistory,
        messages: chatMessages.innerHTML
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(chatData));
}

function restoreConversation() {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
        try {
            const chatData = JSON.parse(saved);
            if (chatData.history && chatData.history.length > 0) {
                conversationHistory = chatData.history;
                chatMessages.innerHTML = chatData.messages;
                return true;
            }
        } catch (e) {
            console.error('Failed to restore conversation:', e);
        }
    }
    return false;
}

// Clear chat functionality
function clearChat() {
    // Clear conversation history
    conversationHistory = [];

    // Clear session storage
    sessionStorage.removeItem(SESSION_KEY);

    // Reset chat messages to welcome state
    chatMessages.innerHTML = `
        <div class="welcome-message">
            <h3>Ready to cook?</h3>
            <p>Choose a soup to get the full recipe with ingredients and step-by-step instructions.</p>
            <div class="soup-grid">
                <button class="soup-button" data-message="Give me the full Lasagna Soup recipe with all ingredients and step-by-step instructions.">
                    <span class="soup-icon">${icons.pasta}</span>
                    <span class="soup-name">Lasagna Soup</span>
                </button>
                <button class="soup-button" data-message="Give me the full Tortellini Soup recipe with all ingredients and step-by-step instructions.">
                    <span class="soup-icon">${icons.cheese}</span>
                    <span class="soup-name">Tortellini Soup</span>
                </button>
                <button class="soup-button" data-message="Give me the full Cheeseburger Soup recipe with all ingredients and step-by-step instructions.">
                    <span class="soup-icon">${icons.beef}</span>
                    <span class="soup-name">Cheeseburger Soup</span>
                </button>
                <button class="soup-button" data-message="Give me the full Potato Sausage Soup recipe with all ingredients and step-by-step instructions.">
                    <span class="soup-icon">${icons.potato}</span>
                    <span class="soup-name">Potato Sausage</span>
                </button>
                <button class="soup-button" data-message="Give me the full Baked Ziti Soup recipe with all ingredients and step-by-step instructions.">
                    <span class="soup-icon">${icons.pasta}</span>
                    <span class="soup-name">Baked Ziti Soup</span>
                </button>
                <button class="soup-button" data-message="Give me the full Boursin Soup recipe with all ingredients and step-by-step instructions.">
                    <span class="soup-icon">${icons.salad}</span>
                    <span class="soup-name">Boursin Soup</span>
                </button>
                <button class="soup-button" data-message="Give me the full Chicken Gnocchi Soup recipe with all ingredients and step-by-step instructions.">
                    <span class="soup-icon">${icons.chicken}</span>
                    <span class="soup-name">Chicken Gnocchi</span>
                </button>
                <button class="soup-button" data-message="Give me the full Chicken Alfredo Soup recipe with all ingredients and step-by-step instructions.">
                    <span class="soup-icon">${icons.pasta}</span>
                    <span class="soup-name">Chicken Alfredo</span>
                </button>
            </div>
        </div>
    `;

    // Clear active recipe
    activeRecipe = null;
    renderRecipes();
}

// Clear chat event listener
clearChatButton.addEventListener('click', clearChat);

// Header scroll behavior - hide on scroll down, show on scroll up
function setupHeaderScroll() {
    const header = document.querySelector('.chat-header');
    let lastScrollTop = 0;
    let scrollThreshold = 50; // Minimum scroll before hiding
    let ticking = false;

    chatMessages.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = chatMessages.scrollTop;
                const scrollDiff = scrollTop - lastScrollTop;

                // Only trigger after scrolling past threshold
                if (Math.abs(scrollDiff) > 10) {
                    if (scrollDiff > 0 && scrollTop > scrollThreshold) {
                        // Scrolling down - hide header
                        header.classList.add('hidden');
                    } else if (scrollDiff < 0) {
                        // Scrolling up - show header
                        header.classList.remove('hidden');
                    }
                    lastScrollTop = scrollTop;
                }

                // Always show header when at top
                if (scrollTop < scrollThreshold) {
                    header.classList.remove('hidden');
                }

                ticking = false;
            });
            ticking = true;
        }
    });
}

// iOS/Mobile keyboard handling - prevent page scroll when keyboard opens
function setupMobileKeyboard() {
    const appLayout = document.querySelector('.app-layout');
    const chatArea = document.querySelector('.chat-area');
    const inputArea = document.querySelector('.chat-input-area');
    const chatMessagesEl = document.querySelector('.chat-messages');
    let keyboardOpen = false;
    let scrollPosition = 0;
    let initialWindowHeight = window.innerHeight;

    // Detect if we're on a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) return;

    function lockBody() {
        scrollPosition = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';
    }

    function unlockBody() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollPosition);
    }

    function handleKeyboardOpen() {
        if (keyboardOpen) return;
        keyboardOpen = true;

        // Lock the body to prevent scroll
        lockBody();

        // Add keyboard-open class
        appLayout.classList.add('keyboard-active');
        inputArea.classList.add('keyboard-open');

        // Use visualViewport if available for precise positioning
        if (window.visualViewport) {
            const updateInputPosition = () => {
                const vv = window.visualViewport;
                const keyboardHeight = initialWindowHeight - vv.height;

                if (keyboardHeight > 50) {
                    // Position the app to fit in visible viewport
                    appLayout.style.height = `${vv.height}px`;
                    appLayout.style.transform = `translateY(${vv.offsetTop}px)`;
                }
            };

            updateInputPosition();
            window.visualViewport.addEventListener('resize', updateInputPosition);
            window.visualViewport.addEventListener('scroll', updateInputPosition);

            // Store the handler for cleanup
            inputArea._vvHandler = updateInputPosition;
        }

        // Scroll chat to bottom after a brief delay
        setTimeout(() => {
            chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
        }, 100);
    }

    function handleKeyboardClose() {
        if (!keyboardOpen) return;
        keyboardOpen = false;

        // Remove keyboard-open class
        appLayout.classList.remove('keyboard-active');
        inputArea.classList.remove('keyboard-open');

        // Reset styles
        appLayout.style.height = '';
        appLayout.style.transform = '';

        // Unlock body
        unlockBody();

        // Remove visualViewport listeners
        if (window.visualViewport && inputArea._vvHandler) {
            window.visualViewport.removeEventListener('resize', inputArea._vvHandler);
            window.visualViewport.removeEventListener('scroll', inputArea._vvHandler);
            inputArea._vvHandler = null;
        }
    }

    // Handle focus/blur events
    chatInput.addEventListener('focus', () => {
        // Small delay to let the keyboard start opening
        setTimeout(handleKeyboardOpen, 50);
    });

    chatInput.addEventListener('blur', () => {
        // Delay to handle taps on other elements
        setTimeout(handleKeyboardClose, 100);
    });

    // Also detect window resize as backup
    window.addEventListener('resize', () => {
        // If window got significantly smaller, keyboard likely opened
        const currentHeight = window.innerHeight;
        if (document.activeElement === chatInput) {
            if (currentHeight < initialWindowHeight * 0.75) {
                handleKeyboardOpen();
            }
        } else {
            // Update initial height when keyboard is closed
            if (currentHeight > initialWindowHeight) {
                initialWindowHeight = currentHeight;
            }
        }
    });

    // Prevent iOS bounce/scroll on the body
    document.body.addEventListener('touchmove', (e) => {
        if (keyboardOpen && !chatMessagesEl.contains(e.target)) {
            e.preventDefault();
        }
    }, { passive: false });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderRecipes();
    initTheme();

    // Restore previous conversation if exists
    restoreConversation();

    // Setup scroll behaviors
    setupHeaderScroll();
    setupMobileKeyboard();
});

// Expose functions to window for onclick handlers
window.selectRecipe = selectRecipe;
window.toggleRecipe = toggleRecipe;
