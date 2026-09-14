// خدمة بسيطة فقط عشان أندرويد يعتبر الموقع تطبيق حقيقي قابل للتثبيت (بدون أي تخزين مؤقت للمحتوى)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
