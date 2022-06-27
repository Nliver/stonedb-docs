(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"8a9ea3a96b5b7586da21ef53e2651851","url":"404.html"},{"revision":"d172f8b2bb9c964e792f014ff922aded","url":"assets/css/styles.cee48ecd.css"},{"revision":"48602c9567ba93d4e1f4f6c19780e34f","url":"assets/js/04a1ff1d.3afe4e20.js"},{"revision":"15bf948d5fa6d9f3d8ac5b213da864f9","url":"assets/js/08e78a0e.bfd7208a.js"},{"revision":"faf411d2312622779bcf877ad59fca59","url":"assets/js/0ad4fb1f.2aa9a3c4.js"},{"revision":"40a060965344053f4c5959d22dbcc53f","url":"assets/js/0f716783.506cbc41.js"},{"revision":"5abbe99955f685121a12d5dd136ff06b","url":"assets/js/131.22a31100.js"},{"revision":"94fa996d51bf949e5639eb837726eb8d","url":"assets/js/13e82bbd.833d70fb.js"},{"revision":"89e17d2a1afd1b231b79af88c2f58916","url":"assets/js/14eb3368.505aa190.js"},{"revision":"0468aab9c6f8d409b9165a91e8ab1189","url":"assets/js/17896441.6cf17fc9.js"},{"revision":"6fdbf7d181ee44a2b49a105abe59873b","url":"assets/js/1be78505.c6e82214.js"},{"revision":"413ee041306e97ef141c4eaefe653074","url":"assets/js/1df93b7f.c1f54559.js"},{"revision":"351d58fa4855ed4827e89128c5a501b1","url":"assets/js/230.e5d532a2.js"},{"revision":"19d806b47ef0ca9c1b99969fe6419684","url":"assets/js/283.cd2f1bc1.js"},{"revision":"050ca6f29fa2703c8760039d9dafbd86","url":"assets/js/2b1e257e.bd926281.js"},{"revision":"1d5cefaea4ec3433acda92ece07676fb","url":"assets/js/323a772d.ba86ce38.js"},{"revision":"bf2cef958924173b7a2aa6aa0cf55db0","url":"assets/js/362dbadd.6d84bdcd.js"},{"revision":"0168fde7849c3e0f81d7569b9ef6f06e","url":"assets/js/3819a278.af0f3d28.js"},{"revision":"40bb57b1eb32079a3bb617edfda7d789","url":"assets/js/47a2ab89.ea35d52e.js"},{"revision":"e02e0f5b642b0add5eb62ef14ff4f175","url":"assets/js/4e9af88f.a6b5b04f.js"},{"revision":"71438db6cdb36938585ca87ec467cfb9","url":"assets/js/515.bbaa89ed.js"},{"revision":"b7299d7dab9eb6ddd4d3913c0ee31c4a","url":"assets/js/598ea675.7ac944bd.js"},{"revision":"fb700109eccd8b0c565d52dd0601d87f","url":"assets/js/5ed9614c.3d9c449c.js"},{"revision":"0befde6cd10ebd626d8e693f585bc2ed","url":"assets/js/7acb1c21.d56eb94b.js"},{"revision":"b1cbb20f1ce7baa09aa80014adfdd74a","url":"assets/js/7ceb65cf.4992b4dc.js"},{"revision":"b838e20960b4a105c60f9d99bc959f4f","url":"assets/js/85e76eb8.c936ece6.js"},{"revision":"749ee76c699d4545c9378872fbe3a9f6","url":"assets/js/88aa99b3.bfb4b4f5.js"},{"revision":"0ba0fc61b71ae2c59bbecf29c1c5f603","url":"assets/js/935f2afb.fcf6c9a7.js"},{"revision":"498d6ec9c93b7d0271ffb7d5cc0c8e6f","url":"assets/js/95.45d99f21.js"},{"revision":"a0f06fda2e6f93d681c2968e86dfa1fa","url":"assets/js/979.373fa54f.js"},{"revision":"9aa8dc5ab8d9bbd0bfdab2f29a0b5efc","url":"assets/js/9e4087bc.968a11bd.js"},{"revision":"8696fd27709cf547fe4be2277dfdc0d2","url":"assets/js/a1aff75e.df63907f.js"},{"revision":"81be6dab894ad539857a7fa555a48e45","url":"assets/js/a30d9234.168a8de1.js"},{"revision":"2f81b78bffefdce0fb52f108eeec2349","url":"assets/js/a60863b3.7e306632.js"},{"revision":"b1adafa0eac4ba7b6fd7dbb6c2658450","url":"assets/js/a6aa9e1f.42b25210.js"},{"revision":"64a14ded1e7531750d98117a39e1ffe8","url":"assets/js/b0461066.1a34de92.js"},{"revision":"f259a34b4b64c7470ab50bf0c93090c0","url":"assets/js/b5e1e86c.f8c36356.js"},{"revision":"4569166d3335debc96adf54b3d50ad57","url":"assets/js/b6a2d028.378ef763.js"},{"revision":"8312532d024ca3edfaa9d59a5f60933e","url":"assets/js/b6dcf72c.2e99e59c.js"},{"revision":"65956a32a99160ce0d4922ed9fccb8de","url":"assets/js/bbef8dd2.40a1d2a8.js"},{"revision":"013cf80fc591d14f3d4a217186791614","url":"assets/js/c0b8e79e.b8843895.js"},{"revision":"12702af6175ad25564c556c7ed1e6e05","url":"assets/js/c9277353.386a1aa4.js"},{"revision":"3a99fe3a7ad6f296c15a5f73e51c1d54","url":"assets/js/ccc49370.73bdd4ef.js"},{"revision":"d58a621bfc367655d663a712093bd863","url":"assets/js/e5c6d364.9b8d7122.js"},{"revision":"db03de5c024cec66d8dbdfed21129329","url":"assets/js/f0e3321f.3d06c6ce.js"},{"revision":"8f36ceb6b893fb43e0316611db8d9b66","url":"assets/js/f3eabdeb.4ce6991c.js"},{"revision":"00f95d47c4777ef4fbfb7359c237e7e9","url":"assets/js/f7366610.0999449b.js"},{"revision":"937a1f4a687c8584f607e29e3d7f1361","url":"assets/js/f9e23376.223c8597.js"},{"revision":"c7762e67564bf4b3f0e273434fd05d3d","url":"assets/js/fe0fd020.b2fae686.js"},{"revision":"8f7a2dc93eb2c8973ea982a0e968e5f5","url":"assets/js/main.a37f681f.js"},{"revision":"36f63d0cfde2e47ec8b30708454aa993","url":"assets/js/runtime~main.b6a0d5b5.js"},{"revision":"394df0034469ec3e8aca18d1d4db4b15","url":"community/archive/index.html"},{"revision":"1674412b3b3c568349171b306a699804","url":"community/index.html"},{"revision":"a2266d434af42f90eff087ffdee26fa6","url":"community/main/index.html"},{"revision":"0b9a5cbe5dad4b4e03095a6792e4991a","url":"docs/about-stonedb/architecture/index.html"},{"revision":"a2d13af911b0cfa768323662214e0e0a","url":"docs/about-stonedb/intro/index.html"},{"revision":"d3d397b3c1a49901f6976f27104c0dd9","url":"docs/about-stonedb/limits/index.html"},{"revision":"c2032183d4e14209f9cdcffd18cbb637","url":"docs/about-stonedb/terms/index.html"},{"revision":"d8cde918b4608921adbef92f65440557","url":"docs/compiling-methods/index.html"},{"revision":"5cdbcb471dd7f3a31572dfde99b559ea","url":"docs/developer-guide/compiling-methods/compile-overview/index.html"},{"revision":"eae0457064d86ceaeb39db99b0755f14","url":"docs/developer-guide/compiling-methods/compile-using-centos7/index.html"},{"revision":"d313eb9a71af71dd982a6a8009327ad4","url":"docs/developer-guide/compiling-methods/compile-using-docker/index.html"},{"revision":"44a342376155d1280fb06eeef910fb86","url":"docs/developer-guide/compiling-methods/compile-using-redhat7/index.html"},{"revision":"22eb99e254360d4f1a4b7f859b924c97","url":"docs/developer-guide/compiling-methods/compile-using-ubuntu20.04/index.html"},{"revision":"60cd0616e3db9c211f3168dfd8ebaf5f","url":"docs/developer-guide/connect-to-stonedb/use-mysql-client/index.html"},{"revision":"9922e1f5adc64e047f05dd4426d75650","url":"docs/developer-guide/connect-to-stonedb/use-navicat/index.html"},{"revision":"321fb10a6158ff12501b1fcd28d644e6","url":"docs/developer-guide/regular-change-operations/index.html"},{"revision":"0f0917f4c4f60df017eb795afe99f37b","url":"docs/developer-guide/statements-for-queries/index.html"},{"revision":"50ffbe78ebf7066687042e14270c5a7d","url":"docs/download/index.html"},{"revision":"fa16f4ef443ec7a41a981637c7cb829e","url":"docs/environment-requirements/server-configuration-requirements/index.html"},{"revision":"d81584c9db14415f0b5636ae718353e2","url":"docs/environment-requirements/supported-servers-and-OSs/index.html"},{"revision":"ca111c82b8584dfaa9419d4335844efc","url":"docs/getting-started/basic-operations/index.html"},{"revision":"be51f45ae9c82c38d4ecf246a62230a1","url":"docs/getting-started/quick-deployment/index.html"},{"revision":"e82c9dc2a2a2c7f44830e6753d03e7db","url":"docs/getting-started/quick-start/index.html"},{"revision":"d5cc54073484b6d9d845b8ca01c2048f","url":"docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup/index.html"},{"revision":"30a00d4b49618363f4dc4ec9553e3357","url":"docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore/index.html"},{"revision":"f0e9ac9cdd25f67ebf27972ebfeae3dc","url":"docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor/index.html"},{"revision":"8a845e91c8de6c37109a55c11fa08bf3","url":"docs/O&M-Guide/regular-change-operations/index.html"},{"revision":"c3384eadbb0a497f6ac8abfa9798de18","url":"index.html"},{"revision":"dcab6c00a8c6209bde94bff518af6cda","url":"manifest.json"},{"revision":"84e3f2b3c9a45c0b1585830306c583ae","url":"styles/panel/index.html"},{"revision":"ea268e49582a11ab959bd8b7f30ff025","url":"img/favicon.ico"},{"revision":"d1d317e005b3aacd7897bb7c1004e296","url":"img/icons/128x128.png"},{"revision":"6ccd311f69702a4cdc1a599e7f303fec","url":"img/icons/144x144.png"},{"revision":"4068161cc8a2a4560a4b36b776d1f65c","url":"img/icons/152x152.png"},{"revision":"8d5af5791199ee12e1a5c40d62e0d764","url":"img/icons/192x192.png"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/icons/200x200.png"},{"revision":"0e505d2a9544b814a0d52ae4b700eef2","url":"img/icons/384x384.png"},{"revision":"6b5692ea59db253b55538632470b789c","url":"img/icons/512x512.png"},{"revision":"ab6607844950cb665f06c079a7ff939a","url":"img/icons/72x72.png"},{"revision":"87ff0ff98feac058d7c72aa4df4c131e","url":"img/icons/96x96.png"},{"revision":"b633060f5875949127f6a8a772af51ec","url":"img/logo_stonedb.svg"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/stoneDB.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();