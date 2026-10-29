// 설치형 웹앱(홈 화면 앱) 조건을 맞추기 위한 서비스워커. 캐시하지 않고 네트워크로 그대로 보낸다.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) {
  if (e.request.mode === "navigate") e.respondWith(fetch(e.request));
});
