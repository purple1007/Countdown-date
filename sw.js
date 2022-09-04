self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('countdown-date').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/index.js',
      '/style.css',
      '/icon/favicon.ico',
      '/icon/favicon-16.png',
      '/icon/favicon-32.png',
      '/icon/favicon-256.png',
      '/icon/Icon-192.png',
      '/icon/Icon-512.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
