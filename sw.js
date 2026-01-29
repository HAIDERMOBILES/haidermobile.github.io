const CACHE_NAME = 'haider-mobiles-v1';
const assets = [
  '/',
  '/index.html',
  'https://i.ibb.co/SSNjCH9/Haider-Mobile.png'
];

// Install Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Activate & Clean Old Cache
self.addEventListener('activate', e => {
  console.log('App Service Worker Active');
});

// Fetch events
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
