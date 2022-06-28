(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"47dffd8f2eab3e033b65d45c222db9c2","url":"404.html"},{"revision":"d172f8b2bb9c964e792f014ff922aded","url":"assets/css/styles.cee48ecd.css"},{"revision":"1471a51d81cb1be31fdbf24f67d7b0ae","url":"assets/js/04a1ff1d.3e6b15ff.js"},{"revision":"57082698a8e196b263150d2c50fd9f29","url":"assets/js/08962994.51a3db11.js"},{"revision":"85d7c75704e38ab09250659197eef0d4","url":"assets/js/09bd8251.532247c5.js"},{"revision":"465465605d803b776953d3e740382729","url":"assets/js/0ad4fb1f.aa4b641b.js"},{"revision":"3651b6177a14dfd58e5f7294c05751a1","url":"assets/js/0ea0c0e8.103e1bc9.js"},{"revision":"2936d0eea64cdb2d553c359c33a773db","url":"assets/js/0f716783.3fb6ecf3.js"},{"revision":"fd30c1f5d4e06cfc126f5d784ead5f63","url":"assets/js/12d4b11f.1ec82938.js"},{"revision":"e8c265b353c2db481f5fbc2b9a0cba90","url":"assets/js/13caa995.d5430d92.js"},{"revision":"2acc941142fe1e2fde174addd055d930","url":"assets/js/13e82bbd.a907bb10.js"},{"revision":"8022dcce817fc054efd78b2513403f10","url":"assets/js/145f8dde.187884f8.js"},{"revision":"5ab8c840e65669d305b250ec1aee97c3","url":"assets/js/14eb3368.19ca2084.js"},{"revision":"cffb56a6361eaf7312c6ff2a046c8a64","url":"assets/js/17896441.d65bbfe4.js"},{"revision":"809453e3edcfd9b10e0fb36755ac3e72","url":"assets/js/1be78505.9607912b.js"},{"revision":"9a29ff1808f444ac5b56408363faea7b","url":"assets/js/1df93b7f.57cc8227.js"},{"revision":"351d58fa4855ed4827e89128c5a501b1","url":"assets/js/230.e5d532a2.js"},{"revision":"7c0e072704f628bc8b8a587befd38eb2","url":"assets/js/2b1e257e.4e60712f.js"},{"revision":"4c3ae1688ad22bad8add0411cecbcf22","url":"assets/js/2b49bc9e.92f2bdd3.js"},{"revision":"9c0cba0e03822a274b69383077bff836","url":"assets/js/2fd5ee2e.2a3d6301.js"},{"revision":"8b36f26f5328dc13c55040cf6154b76c","url":"assets/js/42e664e5.118930e8.js"},{"revision":"bdd1e0c469c3fc9c7b4216db6fb6b0c1","url":"assets/js/4491524f.6713f0c9.js"},{"revision":"38e2a2d82ce2441f6971a92eb2d97a60","url":"assets/js/47a2ab89.40d2c13b.js"},{"revision":"12a46c824c22cf78a6555fce8d02f57e","url":"assets/js/4972.ec6cfa17.js"},{"revision":"d5e704c5dc4b9c0e1823534835ff6261","url":"assets/js/4b23bafa.c5128f56.js"},{"revision":"bf25f9e3caa46d6052fb2764ac607587","url":"assets/js/5131.2c346bfc.js"},{"revision":"8609fbee032dc7d2e116cb64e5a93e47","url":"assets/js/5283.3f2d0697.js"},{"revision":"753d2f378b1db115c4d1dda115218892","url":"assets/js/5503f11d.a4f896c6.js"},{"revision":"39d58231baf87d2bd2f71095e262db32","url":"assets/js/56f0168a.1ec7dfb8.js"},{"revision":"8526c60efd9c9370b4ec26d6d8629884","url":"assets/js/598ea675.18fe3f8b.js"},{"revision":"24592b94db55bf5d1c8c004efd4f429f","url":"assets/js/5c089101.88605520.js"},{"revision":"a19585d9929bebf7e08c2cd17ea00bc2","url":"assets/js/5ed9614c.966dea47.js"},{"revision":"b332c61e0bf4a44fb8635981d6d8ea09","url":"assets/js/60598a8e.db3210df.js"},{"revision":"d2a4409afd6650ef53acd5f71eb16d8d","url":"assets/js/61ffba71.3e4c8b8f.js"},{"revision":"2bc39d557a55f99f99ef1cf321f2ac4a","url":"assets/js/6b692f41.41387da0.js"},{"revision":"3d56bca13089f41cce85725a59eb8beb","url":"assets/js/6f4bf59f.26c46c3f.js"},{"revision":"f9da5a07a949bd0520d0ccf83ffb9ff6","url":"assets/js/6f8bdcd2.a8c65fd2.js"},{"revision":"a9a8ec2de63941ad92888b0d0603cf74","url":"assets/js/70cb9d50.35b73bff.js"},{"revision":"d5d104c7bdc2b7c03178c7581e2e6245","url":"assets/js/78126fdb.7316da15.js"},{"revision":"2c537cc11c11587693debded65812db8","url":"assets/js/7ceb65cf.725ef4fe.js"},{"revision":"9cc29535037936fd4ebdc6080d183e06","url":"assets/js/85e76eb8.d6ff78f8.js"},{"revision":"ebc993e9b85c3c6276503c7afff90e4e","url":"assets/js/8853afe8.40eba0c2.js"},{"revision":"0bdbea21a29252297c0f0368a03cec1f","url":"assets/js/9095.0fc2c9a4.js"},{"revision":"301679c88406454d2a8d384caf210f3f","url":"assets/js/935f2afb.c3dc3963.js"},{"revision":"a0f06fda2e6f93d681c2968e86dfa1fa","url":"assets/js/979.373fa54f.js"},{"revision":"01f1582ca96c04bd7bf069438d7161dc","url":"assets/js/9b155510.4767d9b4.js"},{"revision":"c656384e409d376d5e28f2dbe354ef98","url":"assets/js/9babdf19.db4d771f.js"},{"revision":"7e885cb87b801bcccc8a483773a4df9b","url":"assets/js/9e4087bc.54902b5d.js"},{"revision":"6622dc368047386f21b1bfebadab2565","url":"assets/js/a1aff75e.e1e51946.js"},{"revision":"37b0075b372ebdf6155384546ddc13be","url":"assets/js/a30d9234.03359a9d.js"},{"revision":"51221b8c82d836a0b3b34bfbb85e804a","url":"assets/js/a6aa9e1f.be9cfeeb.js"},{"revision":"3dc5bed17f53418d79a7c8f8fdc11f22","url":"assets/js/b0461066.f083ca69.js"},{"revision":"ed24c11e7a2210d483f523d928319e03","url":"assets/js/b5e1e86c.6b598a46.js"},{"revision":"be4fc3d3592d1f59310a6a157c4b8915","url":"assets/js/b6a2d028.96fc060a.js"},{"revision":"ff7773ac7b0ba537f1c56946dd390a7b","url":"assets/js/b89ea502.696fb7f5.js"},{"revision":"57d1848a0886c008313c8b0ace30b857","url":"assets/js/b9e5bc89.0683bf40.js"},{"revision":"27556b123fcccd454aa3a7cb4065f761","url":"assets/js/ba368d59.38a3f02a.js"},{"revision":"0f16bf85b6b51ad797ad078a1e407a9a","url":"assets/js/bbf707fc.f76f1cf4.js"},{"revision":"ec16b6e7e9d79d6834fd8aa8d1f4639b","url":"assets/js/c0fdcace.0baccce6.js"},{"revision":"0eb9eae3dcada6460c766e6d7b54f22f","url":"assets/js/c22ac12f.4fbe1c97.js"},{"revision":"2c8b048ceee3b5dcb4c1a22cfd193708","url":"assets/js/c52b4cc1.f7400e91.js"},{"revision":"b0bca4a8738646681c9b8fe1ae005d74","url":"assets/js/c9277353.85b72f17.js"},{"revision":"652b3a4ed873e670a33662a16063206e","url":"assets/js/cc79c185.72b479bb.js"},{"revision":"a53dc62b37a7ccd074b9a5fb0e7fd44a","url":"assets/js/ccc49370.0f944677.js"},{"revision":"ff2b1d69707c22802821d4baf9c48722","url":"assets/js/da63d0b1.5ade6af0.js"},{"revision":"b35a7cdbd7c4e038f90ae8aa9a81838b","url":"assets/js/db6eec97.b5b7c0dd.js"},{"revision":"53d280bb23e01d687cb3caa6d5eff884","url":"assets/js/dc4bb4c7.d14f2551.js"},{"revision":"840e059b583023426afe86fac6150e75","url":"assets/js/e15054b7.f94b5477.js"},{"revision":"fdd146de642556e598f6188f67ac82ed","url":"assets/js/e5c6d364.4ab54b3a.js"},{"revision":"78a46434270465f7070535b2282a8326","url":"assets/js/e771297a.99ac1ac7.js"},{"revision":"7dbc173579bdaaa5459c407f66fe7c63","url":"assets/js/ec7e31c8.6253a86d.js"},{"revision":"18a2fd835adc32847f1ff0adf5558029","url":"assets/js/ef5d54d6.2a7eab91.js"},{"revision":"cc5db8d7805b7e3cb70b7c0068202b21","url":"assets/js/f3015d51.5de01802.js"},{"revision":"8f36ceb6b893fb43e0316611db8d9b66","url":"assets/js/f3eabdeb.4ce6991c.js"},{"revision":"153de6a8bc0da045676d9eb34478c149","url":"assets/js/f6aa66e6.7e0fbb15.js"},{"revision":"2cd7f70eaf7abed05e3436705056c43b","url":"assets/js/f6e40cbe.8cd817d7.js"},{"revision":"49b65625f59bf924348f6663618df2a3","url":"assets/js/f7366610.f66cfc05.js"},{"revision":"6e5f21e6f5e01d851577b8d384fc8818","url":"assets/js/f841cfcf.7af92fcd.js"},{"revision":"7d8359e2e452d9b09042fe0e11dbf5bd","url":"assets/js/main.087c382a.js"},{"revision":"833ec32684d90e9b90f4c1fef4dce83b","url":"assets/js/runtime~main.ee66107a.js"},{"revision":"7c625cb48da026cc6aaa1df2692bba0d","url":"community/archive/index.html"},{"revision":"85f10699ccc9912af6b5ad3938dc19a8","url":"community/index.html"},{"revision":"4de6cd544f47d7b61d50bf573afe5f0e","url":"community/main/index.html"},{"revision":"6faa44fd720c0ed94470d1706c997540","url":"docs/about-stonedb/architecture/index.html"},{"revision":"3dcc5033850fc03b03f5f511e43f42c5","url":"docs/about-stonedb/intro/index.html"},{"revision":"5a99da3fb9ac48dc4045500577b2f145","url":"docs/about-stonedb/limits/index.html"},{"revision":"b3ed15527db6ee329fec538e9fcc9c61","url":"docs/about-stonedb/terms/index.html"},{"revision":"de0a7c41eafd0f3c430dfc1e5b242d29","url":"docs/compiling-methods/index.html"},{"revision":"599b3178eac7c1d1f5715f4d85c1ea67","url":"docs/developer-guide/appendix/configuration-parameters/index.html"},{"revision":"33962630a390e069a49394cb0213eab3","url":"docs/developer-guide/appendix/error-codes/index.html"},{"revision":"b47d3773914b88c6a379574aa44d9bb7","url":"docs/developer-guide/compiling-methods/compile-overview/index.html"},{"revision":"067df681698bac0ed1003a7d4a9f2acc","url":"docs/developer-guide/compiling-methods/compile-using-centos7/index.html"},{"revision":"c92ac0109795d0254f6b6d2e717679b6","url":"docs/developer-guide/compiling-methods/compile-using-docker/index.html"},{"revision":"6b3e1c09e56922d405b801b85b22b92e","url":"docs/developer-guide/compiling-methods/compile-using-redhat7/index.html"},{"revision":"e79e3a4c9cd003f26c9006e77dd60c54","url":"docs/developer-guide/compiling-methods/compile-using-ubuntu20.04/index.html"},{"revision":"0df8ee554f02aa6d0624320adcfae4ee","url":"docs/developer-guide/connect-to-stonedb/use-mysql-client/index.html"},{"revision":"6537a8e231a2e46010a6526c591f6e55","url":"docs/developer-guide/connect-to-stonedb/use-navicat/index.html"},{"revision":"5f9e66651b01ab1b7df64e4ab843a270","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-database/index.html"},{"revision":"7bd3d8213460204b89341eaf7ad3db57","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure/index.html"},{"revision":"8aee512bae7b37e2cce60cb1e5d320cf","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-table/index.html"},{"revision":"125314ee6275d58189cd2ab5be9f15a7","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-view/index.html"},{"revision":"2d4ca1d737e55bb6c570e3b3cb408d6a","url":"docs/developer-guide/regular-change-operations/index.html"},{"revision":"25e371f5a18fe5a26347a7bb5db47c6e","url":"docs/developer-guide/statements-for-queries/index.html"},{"revision":"5414352e0f0f9a72b08f4a321ed29883","url":"docs/download/index.html"},{"revision":"12462e30059d3ae4f3146cc5e2731c23","url":"docs/environment-requirements/server-configuration-requirements/index.html"},{"revision":"fede68c35b5c7704ccaab5767df97f88","url":"docs/environment-requirements/supported-servers-and-oss/index.html"},{"revision":"30dd53a6489138e15a0c9507ec9de87d","url":"docs/getting-started/basic-operations/index.html"},{"revision":"c235e60447c486def8523fbedc92b01e","url":"docs/getting-started/quick-deployment/index.html"},{"revision":"d6dfc5ba04056e2aa7dc4305c6700574","url":"docs/getting-started/quick-start/index.html"},{"revision":"941657aef55e03332284dccfcf55690f","url":"docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup/index.html"},{"revision":"80639edc135458e73efcc00b51c49e70","url":"docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore/index.html"},{"revision":"c6fb810f865040dc1d258590a97b08b3","url":"docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor/index.html"},{"revision":"11f79e66816fabab640d506ba3b0a50a","url":"docs/O&M-Guide/regular-change-operations/index.html"},{"revision":"31d72e78d95eddb47035edca0be08f34","url":"docs/performance-tuning/architecture-tuning/read_write-splitting/index.html"},{"revision":"96debf4dca945b01e87588e4e1e7c1e0","url":"docs/performance-tuning/database-tuning/parameter-tuning/index.html"},{"revision":"07814a38dad87282defded4e28f2a470","url":"docs/performance-tuning/database-tuning/sql-best-practices/index.html"},{"revision":"95d53fb04cc942834d36a3d6cd630c88","url":"docs/performance-tuning/database-tuning/sql-tuning/index.html"},{"revision":"7988348737d8b93851a5da605b2293ea","url":"docs/performance-tuning/os-tuning/index.html"},{"revision":"9d900514c24b279ab292fcebd3a3686d","url":"docs/performance-tuning/overview/index.html"},{"revision":"f87214a152603da16d5ebac97cb24993","url":"docs/performance-tuning/performance-monitoring-commands/cpu-monitor/index.html"},{"revision":"7b8eab85384b5614284acc5ef0c0c5ac","url":"docs/performance-tuning/performance-monitoring-commands/disk-io-monitor/index.html"},{"revision":"219a2f9d1add0d2dcc5e65c6473db3b3","url":"docs/performance-tuning/performance-monitoring-commands/mem-monitor/index.html"},{"revision":"14f9309c1ab2c225487989eeea20c7f4","url":"docs/performance-tuning/performance-monitoring-commands/network-monitor/index.html"},{"revision":"b486ff9895ba4d88eff5d4376e9c33d5","url":"docs/performance-tuning/performance-monitoring-commands/top-commands/index.html"},{"revision":"b2504f0febf60beb4d1155eaf0606460","url":"docs/SQL-reference/character-sets/index.html"},{"revision":"6f60208a2e69972d67ab3defc9ca993b","url":"docs/SQL-reference/data-types/index.html"},{"revision":"9b6784fe36b482411bc6d0c3905b2982","url":"docs/SQL-reference/functions/advanced-functions/index.html"},{"revision":"cc6b09cc531d6e3b6cd7c6c0d62fc9b7","url":"docs/SQL-reference/functions/aggregate-functions/index.html"},{"revision":"0d7675147765f5b20de133c3fb37a0af","url":"docs/SQL-reference/functions/date-and-time-functions/index.html"},{"revision":"477984c4eedd28f6a7244efb87ffd040","url":"docs/SQL-reference/functions/mathematical-functions/index.html"},{"revision":"51b05640b63aae0db70d9417082057e1","url":"docs/SQL-reference/functions/string-functions/index.html"},{"revision":"705a1ffe313b4ec1e4c0e3eff971dfa2","url":"docs/SQL-reference/operators/arithmetic-operators/index.html"},{"revision":"a6227981dd30efd24cc92f9f2fa56877","url":"docs/SQL-reference/operators/assignment-operators/index.html"},{"revision":"f1ed80a0e9d246e5c73d89f15d8b446b","url":"docs/SQL-reference/operators/bitwise-operators/index.html"},{"revision":"b9e9c5c5da0619a82cddcf792a7dc377","url":"docs/SQL-reference/operators/comparison-operators/index.html"},{"revision":"911757c840adf4e9ccdd1935e319a479","url":"docs/SQL-reference/operators/logical-operators/index.html"},{"revision":"90ae2d94fa9cc1c1dc86a753fa5c6c60","url":"index.html"},{"revision":"dcab6c00a8c6209bde94bff518af6cda","url":"manifest.json"},{"revision":"a617f24677eee8033dcd9f645cc42612","url":"styles/panel/index.html"},{"revision":"ea268e49582a11ab959bd8b7f30ff025","url":"img/favicon.ico"},{"revision":"d1d317e005b3aacd7897bb7c1004e296","url":"img/icons/128x128.png"},{"revision":"6ccd311f69702a4cdc1a599e7f303fec","url":"img/icons/144x144.png"},{"revision":"4068161cc8a2a4560a4b36b776d1f65c","url":"img/icons/152x152.png"},{"revision":"8d5af5791199ee12e1a5c40d62e0d764","url":"img/icons/192x192.png"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/icons/200x200.png"},{"revision":"0e505d2a9544b814a0d52ae4b700eef2","url":"img/icons/384x384.png"},{"revision":"6b5692ea59db253b55538632470b789c","url":"img/icons/512x512.png"},{"revision":"ab6607844950cb665f06c079a7ff939a","url":"img/icons/72x72.png"},{"revision":"87ff0ff98feac058d7c72aa4df4c131e","url":"img/icons/96x96.png"},{"revision":"b633060f5875949127f6a8a772af51ec","url":"img/logo_stonedb.svg"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/stoneDB.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();