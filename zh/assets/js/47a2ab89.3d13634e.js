"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[594],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=a(n),d=o,v=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(v,c(c({ref:t},u),{},{components:n})):r.createElement(v,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],l={id:"compile-overview",sidebar_position:5.11},p="Overview",a={unversionedId:"developer-guide/compiling-methods/compile-overview",id:"developer-guide/compiling-methods/compile-overview",title:"Overview",description:"The method to compile StoneDB varies with the environment. Choose the compiling method that suits your environment.",source:"@site/docs/04-developer-guide/00-compiling-methods/compile-overview.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-overview",permalink:"/zh/docs/developer-guide/compiling-methods/compile-overview",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-overview.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656141452,formattedLastUpdatedAt:"2022/6/25",sidebarPosition:5.11,frontMatter:{id:"compile-overview",sidebar_position:5.11},sidebar:"autoSidebar",previous:{title:"Use Mydumper for Full Backup",permalink:"/zh/docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup"},next:{title:"Compile StoneDB on CentOS 7",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-centos7"}},u={},m=[],s={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The method to compile StoneDB varies with the environment. Choose the compiling method that suits your environment."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./compile-using-centos7"},"Compile StoneDB on CentOS 7")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./compile-using-redhat7"},"Compile StoneDB on RHEL 7")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04"},"Compile StoneDB on Ubuntu 20.04")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/developer-guide/compiling-methods/compile-using-docker"},"Compile StoneDB Using a Docker Container"))))}d.isMDXComponent=!0}}]);