const C="hsk1-cache-v2";
const ASSETS=["manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()).catch(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const req=e.request;
  const isHTML = req.mode==="navigate" || (req.headers.get("accept")||"").indexOf("text/html")>=0;
  if(isHTML){
    e.respondWith(fetch(req).then(r=>{const cc=r.clone();caches.open(C).then(c=>c.put(req,cc));return r;}).catch(()=>caches.match(req).then(r=>r||caches.match("index.html"))));
  } else {
    e.respondWith(caches.match(req).then(r=>r||fetch(req).then(resp=>{const cc=resp.clone();caches.open(C).then(c=>{try{c.put(req,cc)}catch(_){}});return resp;})));
  }
});
