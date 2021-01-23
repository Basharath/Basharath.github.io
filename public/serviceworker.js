const cacheName = 'v1';

self.addEventListener('install', () => {
  // console.log('Service worker installed');
});

self.addEventListener('activate', (e) => {
  // console.log('Service worker activated');

  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing old Cache');
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

self.addEventListener('fetch', (e) => {
  // console.log('Service worker Fetching');

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();

        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
