self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('countdown-date').then((cache) => cache.addAll([
      '/Countdown-date/',
      '/Countdown-date/index.html',
      '/Countdown-date/index.js',
      '/Countdown-date/style.css',
      '/Countdown-date/icon/favicon.ico',
      '/Countdown-date/icon/favicon-16.png',
      '/Countdown-date/icon/favicon-32.png',
      '/Countdown-date/icon/favicon-256.png',
      '/Countdown-date/icon/Icon-192.png',
      '/Countdown-date/icon/Icon-512.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
