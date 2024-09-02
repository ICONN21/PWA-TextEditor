const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching');

precacheAndRoute(self.__WB_MANIFEST);

// Cache page navigations (HTML)
registerRoute(({ request }) => request.mode === 'navigate', new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
}));

// Cache assets but exclude external URLs
registerRoute(
  ({ request, url }) => {
    // Exclude CDN resources
    if (url.origin !== self.location.origin) {
      return false;
    }

    // Cache CSS, JS, and images
    return request.destination === 'style' ||
           request.destination === 'script' ||
           request.destination === 'image';
  },
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);
