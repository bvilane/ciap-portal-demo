self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('ciap-static-v1').then((cache)=>cache.addAll(['/','/index.html'])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((resp)=> resp || fetch(e.request).catch(()=>new Response('Offline', {status:503})))
  );
});
