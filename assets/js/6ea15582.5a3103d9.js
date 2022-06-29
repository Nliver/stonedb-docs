"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2575],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},28229:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"excessive-large-directory",sidebar_position:9.2},c="Excessively Large Data Directory",l={unversionedId:"troubleshooting/excessive-large-directory",id:"troubleshooting/excessive-large-directory",title:"Excessively Large Data Directory",description:"The data directory contains data files, binlogs, and error logs. If the data directory is run out of capacity, the database will be suspended and cannot provide services. To prevent this issue, monitoring on capacity usage must be strengthened in routine maintenance. This topic describes common causes of this issue.",source:"@site/docs/08-troubleshooting/excessive-large-directory.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/excessive-large-directory",permalink:"/docs/troubleshooting/excessive-large-directory",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/08-troubleshooting/excessive-large-directory.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656467054,formattedLastUpdatedAt:"6/29/2022",sidebarPosition:9.2,frontMatter:{id:"excessive-large-directory",sidebar_position:9.2},sidebar:"autoSidebar",previous:{title:"Failed to Start StoneDB",permalink:"/docs/troubleshooting/failed-to-start"},next:{title:"Metadata Lock Waits",permalink:"/docs/troubleshooting/mdl-wait"}},d={},u=[{value:"Big transactions",id:"big-transactions",level:2},{value:"CARTESIAN JOIN",id:"cartesian-join",level:2},{value:"Subqueries and grouped orderings",id:"subqueries-and-grouped-orderings",level:2}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"excessively-large-data-directory"},"Excessively Large Data Directory"),(0,i.kt)("p",null,"The data directory contains data files, binlogs, and error logs. If the data directory is run out of capacity, the database will be suspended and cannot provide services. To prevent this issue, monitoring on capacity usage must be strengthened in routine maintenance. This topic describes common causes of this issue."),(0,i.kt)("h2",{id:"big-transactions"},"Big transactions"),(0,i.kt)("p",null,"If big transactions exist, a large amount of binlogs are generated. If the binlog cache is insufficient, excessive binlogs will be temporarily stored to temporary files on disks. Big transactions not only occupy too much disk space, but result in long primary/secondary replication latency. Therefore, we recommend that you split each big transactions into multiple small transactions in your production environment."),(0,i.kt)("h2",{id:"cartesian-join"},"CARTESIAN JOIN"),(0,i.kt)("p",null,'When SQL statements do not strictly follow syntaxes, for example, no condition is specified during table association, Cartesian products are generated. If the tables to associate are large, the table space will be used up. Therefore, we recommend that you check the execution plan each time you finish writing an SQL statement. If "Using join buffer (Block Nested Loop)" exists in the execution plan, check the two associated tables to see whether the association condition of the driven table is not indexed or no association condition exists.'),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can start StoneDB to release the temporary table space."))),(0,i.kt)("h2",{id:"subqueries-and-grouped-orderings"},"Subqueries and grouped orderings"),(0,i.kt)("p",null,"Subqueries and grouped orderings use temporary tables to cache intermediate result sets. If the temporary files run out of space, the intermediate result sets will be temporarily stored to temporary files on disks."))}m.isMDXComponent=!0}}]);