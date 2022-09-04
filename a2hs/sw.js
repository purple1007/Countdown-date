self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('countdown-date').then((cache) => cache.addAll([
      '/a2hs/',
      '/a2hs/index.html',
      '/a2hs/index.js',
      '/a2hs/style.css',
      '/a2hs/icon/favicon.ico',
      '/a2hs/icon/favicon-16.png',
      '/a2hs/icon/favicon-32.png',
      '/a2hs/icon/favicon-256.png',
      '/a2hs/icon/Icon-192.png',
      '/a2hs/icon/Icon-512.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
