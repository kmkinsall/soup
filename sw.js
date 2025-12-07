// Soup Cooking Assistant Service Worker
// No offline caching - network only

const CACHE_VERSION = 'v1';

// Install event - skip waiting to activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event - claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Fetch event - always go to network (no caching)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
