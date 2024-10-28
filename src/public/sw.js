importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

if (workbox) {
  console.log('Workbox berhasil dimuat.');

  // Caching aset statis
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'style' || request.destination === 'script' || request.destination === 'image',
    new workbox.strategies.CacheFirst({
      cacheName: 'static-assets',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
        }),
      ],
    })
  );

  // Caching data API
  workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'restaurant-api',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 hari
        }),
      ],
    })
  );
} else {
  console.log('Workbox gagal dimuat.');
}
