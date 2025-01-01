importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
  console.log('Workbox berhasil dimuat');

  // Do precaching
  workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/app.bundle.js', revision: '1' },
  ]);

  // Cache images
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.CacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        }),
      ],
    }),
  );

  // Cache API requests
  workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'restaurant-api-cache',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        }),
      ],
    }),
  );

  // Cache other static assets
  workbox.routing.registerRoute(
    ({ request }) => 
      request.destination === 'style' || 
      request.destination === 'script' || 
      request.destination === 'font',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    }),
  );
} else {
  console.log('Workbox gagal dimuat');
}
