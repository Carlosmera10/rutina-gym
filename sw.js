// Este archivo solo existe para desactivar el modo sin conexión de versiones
// anteriores de la app: borra sus copias guardadas y se da de baja.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("tecnica-")).map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
});
