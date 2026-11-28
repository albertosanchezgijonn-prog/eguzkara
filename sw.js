const CACHE = 'eguzkara-v5';
const ASSETS = ['./', 'index.html', 'core.js', 'guzki.js', 'content_a1a.js', 'content_a1b.js', 'content_a2a.js', 'content_a2b.js', 'content_a2c.js', 'content_b1.js', 'content_b1b.js', 'content_b2.js', 'content_b2b.js', 'content_c1a.js', 'content_c1b.js', 'app.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'audio/index.json', 'assets/guzki/normal.webp', 'assets/guzki/acierto.webp', 'assets/guzki/racha.webp', 'assets/guzki/bien.webp', 'assets/guzki/sorpresa.webp', 'assets/guzki/duda.webp', 'assets/guzki/depresivo.webp', 'assets/guzki/toxico.webp', 'assets/guzki/impaciente.webp', 'assets/guzki/enfadado.webp', 'assets/guzki/euforia.webp'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    if (res.ok && new URL(e.request.url).origin === location.origin) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); }
    return res;
  }).catch(() => caches.match('index.html'))));
});
