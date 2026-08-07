const CACHE_NAME = 'protege-idoso-v1';
const assets = [
    'index.html',
    'style.css',
    'script.js',
    'manifest.json'
];

// Instalação do PWA
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assets);
        })
    );
});

// Intercepta requisições para funcionar offline
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});