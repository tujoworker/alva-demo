"use strict";var precacheConfig=[["/index.html","b20734e39668e9882e21727c33656bf2"],["/static/css/main.653da357.css","521def3ae35e5b12d25e0300c45174f2"],["/static/js/Product.7c0dc932.chunk.js","4af58df34421128f5b159e34e0b558d1"],["/static/js/components/AsyncProduct/CounterWithStore.03e720b0.chunk.js","0dd35e436c0270834a3bacd96c6e60a3"],["/static/js/components/form/Dialogs/ContinueCardQuestion.87617256.chunk.js","40071a2a880a13d922e713565334a8a3"],["/static/js/components/form/FirstForm/FirstForm.8ef8c3de.chunk.js","e2a3b10c66ac97b1fa04da190edca3a9"],["/static/js/components/form/RequiredStep/RequiredStep.5dc640f8.chunk.js","8dd78dec731f162be4645ffaa8427c52"],["/static/js/components/form/SecondForm/SecondForm.6226aa6b.chunk.js","26ad71f65b8c2e3d79a111d547b66f25"],["/static/js/main.8504b95d.js","663b3c6ed74cb3176fdf3c07f179a8d8"],["/static/js/views/About.04af5b43.chunk.js","5d322d63a166633532b3628bd538fec6"],["/static/js/views/Auth.f452b675.chunk.js","fb6df167d3a3c7eb5195b11c2c88bbc4"],["/static/media/example.a696cd47.md","a696cd47124e2a63ead54ba5b5db54f7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));var a="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});