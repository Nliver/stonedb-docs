(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"855ef675776de6ab345162ec709a4457","url":"404.html"},{"revision":"d172f8b2bb9c964e792f014ff922aded","url":"assets/css/styles.cee48ecd.css"},{"revision":"895e0633136dcc7e3cd8a407847d1463","url":"assets/js/04a1ff1d.2e7763e5.js"},{"revision":"0f0a9ad91792c052283840fbed24a110","url":"assets/js/08e78a0e.a24ae71d.js"},{"revision":"bca636ef5727d395be4ea7274943fb46","url":"assets/js/09bd8251.d1b35322.js"},{"revision":"465465605d803b776953d3e740382729","url":"assets/js/0ad4fb1f.aa4b641b.js"},{"revision":"2936d0eea64cdb2d553c359c33a773db","url":"assets/js/0f716783.3fb6ecf3.js"},{"revision":"45d9e690c52bd7024dd72e653edce83f","url":"assets/js/13e82bbd.38e0e3f3.js"},{"revision":"5ab8c840e65669d305b250ec1aee97c3","url":"assets/js/14eb3368.19ca2084.js"},{"revision":"cffb56a6361eaf7312c6ff2a046c8a64","url":"assets/js/17896441.d65bbfe4.js"},{"revision":"809453e3edcfd9b10e0fb36755ac3e72","url":"assets/js/1be78505.9607912b.js"},{"revision":"9a29ff1808f444ac5b56408363faea7b","url":"assets/js/1df93b7f.57cc8227.js"},{"revision":"351d58fa4855ed4827e89128c5a501b1","url":"assets/js/230.e5d532a2.js"},{"revision":"fe04183e899f32e6fe04c31fe28f6e7a","url":"assets/js/2b1e257e.61cb8864.js"},{"revision":"d1219bf7634d435b4129ea4e3eabba13","url":"assets/js/323a772d.13974d0b.js"},{"revision":"5521ef8d02596dc3d38541c56ee1db45","url":"assets/js/362dbadd.0d3f9259.js"},{"revision":"db58956b5021e24128d4956ea5f31384","url":"assets/js/3819a278.7c324458.js"},{"revision":"4afc217fe8a5838dc0fdeec19760d1f4","url":"assets/js/47a2ab89.df35e71b.js"},{"revision":"12a46c824c22cf78a6555fce8d02f57e","url":"assets/js/4972.ec6cfa17.js"},{"revision":"16f456305b6ef60b952a2c977df0d2a5","url":"assets/js/4e9af88f.34b82649.js"},{"revision":"bf25f9e3caa46d6052fb2764ac607587","url":"assets/js/5131.2c346bfc.js"},{"revision":"8609fbee032dc7d2e116cb64e5a93e47","url":"assets/js/5283.3f2d0697.js"},{"revision":"ff960df78d980485fb82f610b079d223","url":"assets/js/598ea675.5db9e72a.js"},{"revision":"0b28ad89c4c44e8c92388cdd35ccc5cb","url":"assets/js/5ed9614c.89176e73.js"},{"revision":"3a8d0d751736d6e9a7d1fa1290277c72","url":"assets/js/7acb1c21.29eaecef.js"},{"revision":"0fad9159fe6cd95186d3901c6c96b643","url":"assets/js/7ceb65cf.d201f9c1.js"},{"revision":"7f0bc3a4e843ada8c99b55262686fcc6","url":"assets/js/85e76eb8.5492bb70.js"},{"revision":"14ae4188aa0e8d18c678b2ff67554f7b","url":"assets/js/88aa99b3.fc44cf84.js"},{"revision":"0bdbea21a29252297c0f0368a03cec1f","url":"assets/js/9095.0fc2c9a4.js"},{"revision":"64d6ecf35ccc4338a9aeda2d7aa1a968","url":"assets/js/935f2afb.067ee93f.js"},{"revision":"a0f06fda2e6f93d681c2968e86dfa1fa","url":"assets/js/979.373fa54f.js"},{"revision":"7e885cb87b801bcccc8a483773a4df9b","url":"assets/js/9e4087bc.54902b5d.js"},{"revision":"4049ce24e9e22518498cf10f61a46567","url":"assets/js/a1aff75e.fbb59679.js"},{"revision":"67be39fd5fcfdcb03ce8c5dd4236ad1c","url":"assets/js/a30d9234.21662c64.js"},{"revision":"399d04417d049d4a730ed06f1cad6149","url":"assets/js/a60863b3.ceb9e0d2.js"},{"revision":"51221b8c82d836a0b3b34bfbb85e804a","url":"assets/js/a6aa9e1f.be9cfeeb.js"},{"revision":"29b13d7a1ba29a171b09345adfab7d0c","url":"assets/js/b0461066.61ff6cbd.js"},{"revision":"ed24c11e7a2210d483f523d928319e03","url":"assets/js/b5e1e86c.6b598a46.js"},{"revision":"be4fc3d3592d1f59310a6a157c4b8915","url":"assets/js/b6a2d028.96fc060a.js"},{"revision":"ec331c0bb7652ab5943e7f7d458d27a8","url":"assets/js/b6dcf72c.0521acea.js"},{"revision":"1853260d83b868cb2b75d60785b3e56f","url":"assets/js/b89ea502.448b7a26.js"},{"revision":"6caf8cd58a9ef21c6dc1bda3a95ebd85","url":"assets/js/b9e5bc89.d3487129.js"},{"revision":"c6b12e1eb268b1f388fb30dd497ee8f2","url":"assets/js/bbef8dd2.6a9aff85.js"},{"revision":"fb0f32b6cc910f8a5ac16f7757b0825b","url":"assets/js/c0b8e79e.51da25d8.js"},{"revision":"59758c30ca99b9f0b2e036873ba0c389","url":"assets/js/c0fdcace.1b83b814.js"},{"revision":"b0c5427d931c4d25121843e63d937d9e","url":"assets/js/c9277353.ea2bc19e.js"},{"revision":"a53dc62b37a7ccd074b9a5fb0e7fd44a","url":"assets/js/ccc49370.0f944677.js"},{"revision":"421cb830c3efbe9c285dc17d8de7f124","url":"assets/js/dc4bb4c7.b0f61551.js"},{"revision":"7b9b954cbb37884808283739238d5dd4","url":"assets/js/e5c6d364.f55234f6.js"},{"revision":"ab62620bf120606473c0d1b000664205","url":"assets/js/f0e3321f.6f4bb732.js"},{"revision":"8f36ceb6b893fb43e0316611db8d9b66","url":"assets/js/f3eabdeb.4ce6991c.js"},{"revision":"0b11c2219afa26af672aecda1d71b2b6","url":"assets/js/f6aa66e6.3cb90f03.js"},{"revision":"374dba5d53b99500e9bb601cd5cce210","url":"assets/js/f7366610.7dcefa9b.js"},{"revision":"35d6844b5e90e7309f0f2c8c2b3c93cc","url":"assets/js/f9e23376.91e9e625.js"},{"revision":"e5ecdd48de8bd04585f7bc705daeeebb","url":"assets/js/fe0fd020.0ca47854.js"},{"revision":"488ee044e85769a36bb2196a5d79a4c1","url":"assets/js/main.e85dd8d2.js"},{"revision":"6d25d948c0d255c05a6ca5c57edb1fc2","url":"assets/js/runtime~main.c12a321d.js"},{"revision":"d81da01b869c9df508ec265662a4ec73","url":"community/archive/index.html"},{"revision":"97262c3ad23013cd538f8e4b07490e95","url":"community/index.html"},{"revision":"d54f72ad0339417b94026ef86eb75646","url":"community/main/index.html"},{"revision":"cc3ee4d26cc6263e629be18cb1ff4e3e","url":"docs/about-stonedb/architecture/index.html"},{"revision":"214b25ce109784029f1a884c2c511fc8","url":"docs/about-stonedb/intro/index.html"},{"revision":"e03996c1b6d76d73e185f1becccab737","url":"docs/about-stonedb/limits/index.html"},{"revision":"b7dbccab26fd3001867f412df1ad3f6a","url":"docs/about-stonedb/terms/index.html"},{"revision":"f118e3203e4bb880449b1572a2025eae","url":"docs/compiling-methods/index.html"},{"revision":"c6f211ab61ce6e871aefeac7826f9325","url":"docs/developer-guide/appendix/configuration-parameters/index.html"},{"revision":"a520ffab0e7a66e35a949b246b00b738","url":"docs/developer-guide/appendix/error-codes/index.html"},{"revision":"b9343235411b0cacb08b15de33a1b401","url":"docs/developer-guide/compiling-methods/compile-overview/index.html"},{"revision":"0f53110db47bdf020aaa2733f5ecaa7e","url":"docs/developer-guide/compiling-methods/compile-using-centos7/index.html"},{"revision":"df9ed36eff40bc908146453d824e6b27","url":"docs/developer-guide/compiling-methods/compile-using-docker/index.html"},{"revision":"86ac8512bf67a6a047222ff99c1c82ac","url":"docs/developer-guide/compiling-methods/compile-using-redhat7/index.html"},{"revision":"9c864880ae2f6791f157a3cf206cb9e5","url":"docs/developer-guide/compiling-methods/compile-using-ubuntu20.04/index.html"},{"revision":"070365c19491f5f5e8338ec73856807f","url":"docs/developer-guide/connect-to-stonedb/use-mysql-client/index.html"},{"revision":"226cbf90f663ce03457b72d909fc3313","url":"docs/developer-guide/connect-to-stonedb/use-navicat/index.html"},{"revision":"562f4419679ca64070247d0d890ad9b7","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-database/index.html"},{"revision":"7fc903bb248c65d1aae7e126241e5dcb","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure/index.html"},{"revision":"24ec9a78ebaa4a60d9d605dde20819ef","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-table/index.html"},{"revision":"7290c8fb37eeaaa86222ee777d0df5c3","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-view/index.html"},{"revision":"a7a45445181f9eed6af5fcfa886b4957","url":"docs/developer-guide/regular-change-operations/index.html"},{"revision":"9bc05947e200c65c0729dcce600492ee","url":"docs/developer-guide/statements-for-queries/index.html"},{"revision":"18bdac427ef78bcbed8860c72b0805be","url":"docs/download/index.html"},{"revision":"1e714f80e74c711a4ec2b7915fff450a","url":"docs/environment-requirements/server-configuration-requirements/index.html"},{"revision":"de40538aff213c39ecdd6a92c2cf6e44","url":"docs/environment-requirements/supported-servers-and-OSs/index.html"},{"revision":"187ec81e17adf643af3066d79342cd9b","url":"docs/getting-started/basic-operations/index.html"},{"revision":"048bd61f5c15d469cbd3bdf139f586e4","url":"docs/getting-started/quick-deployment/index.html"},{"revision":"30787c14caffee1fd24fd270053ad087","url":"docs/getting-started/quick-start/index.html"},{"revision":"cdd6f5acb0611035699e41198dcaad3e","url":"docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup/index.html"},{"revision":"d777d08dcb72702c58795626b6859e9f","url":"docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore/index.html"},{"revision":"861ab221d828b4b04b3e593523c19e12","url":"docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor/index.html"},{"revision":"5b0a89a99e47d936f9d317d94b4cff87","url":"docs/O&M-Guide/regular-change-operations/index.html"},{"revision":"42e1e9e52f01a78eec77ce9842be1439","url":"index.html"},{"revision":"dcab6c00a8c6209bde94bff518af6cda","url":"manifest.json"},{"revision":"53d6abce66b8b641fddd5b8155a05410","url":"styles/panel/index.html"},{"revision":"ea268e49582a11ab959bd8b7f30ff025","url":"img/favicon.ico"},{"revision":"d1d317e005b3aacd7897bb7c1004e296","url":"img/icons/128x128.png"},{"revision":"6ccd311f69702a4cdc1a599e7f303fec","url":"img/icons/144x144.png"},{"revision":"4068161cc8a2a4560a4b36b776d1f65c","url":"img/icons/152x152.png"},{"revision":"8d5af5791199ee12e1a5c40d62e0d764","url":"img/icons/192x192.png"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/icons/200x200.png"},{"revision":"0e505d2a9544b814a0d52ae4b700eef2","url":"img/icons/384x384.png"},{"revision":"6b5692ea59db253b55538632470b789c","url":"img/icons/512x512.png"},{"revision":"ab6607844950cb665f06c079a7ff939a","url":"img/icons/72x72.png"},{"revision":"87ff0ff98feac058d7c72aa4df4c131e","url":"img/icons/96x96.png"},{"revision":"b633060f5875949127f6a8a772af51ec","url":"img/logo_stonedb.svg"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/stoneDB.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();