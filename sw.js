const CACHE_NAME = 'ktsa-buch';
const urlsToCache = [
  './index.html',
  './script.js',
  './content.js',
  './style.css',
  './manifest.json',
  './bilder/icon-192.png',
  './bilder/icon-512.png'
  // Du kannst hier bei Bedarf auch noch CSS-Dateien oder wichtige Bilder ergänzen
];

// 1. Beim Installieren die Basis-Dateien cachen
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// 2. Bei jeder Anfrage: Erst im Cache suchen, sonst laden und automatisch für die Zukunft cachen
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Wenn das Bild/die Datei im Cache ist, gib sie zurück
      if (cachedResponse) {
        return cachedResponse;
      }
      // Ansonsten lade sie aus dem Netz und speichere sie direkt im Cache ab
      return fetch(event.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});