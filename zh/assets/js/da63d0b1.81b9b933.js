"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6680],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,g=d["".concat(u,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2189:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={id:"read_write-splitting",sidebar_position:7.51},u="Read/Write Splitting",p={unversionedId:"performance-tuning/architecture-tuning/read_write-splitting",id:"performance-tuning/architecture-tuning/read_write-splitting",title:"Read/Write Splitting",description:"",source:"@site/docs/06-performance-tuning/05-architecture-tuning/read_write-splitting.md",sourceDirName:"06-performance-tuning/05-architecture-tuning",slug:"/performance-tuning/architecture-tuning/read_write-splitting",permalink:"/zh/docs/performance-tuning/architecture-tuning/read_write-splitting",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/05-architecture-tuning/read_write-splitting.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656407494,formattedLastUpdatedAt:"2022/6/28",sidebarPosition:7.51,frontMatter:{id:"read_write-splitting",sidebar_position:7.51},sidebar:"autoSidebar",previous:{title:"Database parameter tuning",permalink:"/zh/docs/performance-tuning/database-tuning/parameter-tuning"},next:{title:"\u5373\u5c06\u53d1\u5e03",permalink:"/zh/docs/download"}},s={},l=[],d={toc:l};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"readwrite-splitting"},"Read/Write Splitting"))}f.isMDXComponent=!0}}]);