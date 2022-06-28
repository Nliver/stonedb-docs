"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6680],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,g=d["".concat(u,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2189:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"read_write-splitting",sidebar_position:7.51},u="Read/Write Splitting",p={unversionedId:"performance-tuning/architecture-tuning/read_write-splitting",id:"performance-tuning/architecture-tuning/read_write-splitting",title:"Read/Write Splitting",description:"",source:"@site/docs/06-performance-tuning/05-architecture-tuning/read_write-splitting.md",sourceDirName:"06-performance-tuning/05-architecture-tuning",slug:"/performance-tuning/architecture-tuning/read_write-splitting",permalink:"/zh/docs/performance-tuning/architecture-tuning/read_write-splitting",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/05-architecture-tuning/read_write-splitting.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1656411149,formattedLastUpdatedAt:"2022/6/28",sidebarPosition:7.51,frontMatter:{id:"read_write-splitting",sidebar_position:7.51},sidebar:"autoSidebar",previous:{title:"Database parameter tuning",permalink:"/zh/docs/performance-tuning/database-tuning/parameter-tuning"},next:{title:"\u5373\u5c06\u53d1\u5e03",permalink:"/zh/docs/download"}},s={},l=[],d={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"readwrite-splitting"},"Read/Write Splitting"))}f.isMDXComponent=!0}}]);