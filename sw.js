const BUILD="2026.10.16.29";
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.clients.claim()})()));
self.addEventListener("message",e=>{if(e.data?.type==="SKIP_WAITING")self.skipWaiting()});
self.addEventListener("fetch",e=>{if(e.request.mode==="navigate"){e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)));return}e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match(e.request)))});
self.addEventListener("push",e=>{let d={};try{d=e.data.json()}catch(_){d={body:e.data?.text()||""}};e.waitUntil(self.registration.showNotification(d.title||"TeeTime HQ",{body:d.body||"",icon:"./icon-192.png"}))});
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(clients.openWindow("./"))});
