const CACHE = 'qrcheck-v1';
const SHELL = ['/qr-check/', '/qr-check/index.html', '/qr-check/manifest.json', '/qr-check/icon-192.png', '/qr-check/icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  // Ayaw hilabti ang third-party requests (Cloudinary, CDN, ug uban pa)
  if (req.method !== 'GET' || url.origin !== location.origin) return;

  // Network-first, cache lang kung offline
  e.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match('/qr-check/index.html')))
  );
});
