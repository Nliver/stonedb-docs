"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[858],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"regular-change-operations",sidebar_position:5.3},l="DML Statements",c={unversionedId:"developer-guide/regular-change-operations",id:"developer-guide/regular-change-operations",title:"DML Statements",description:"This topic describes the DML statements supported by StoneDB.",source:"@site/docs/04-developer-guide/DML-starements.md",sourceDirName:"04-developer-guide",slug:"/developer-guide/regular-change-operations",permalink:"/zh/docs/developer-guide/regular-change-operations",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/DML-starements.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656334920,formattedLastUpdatedAt:"2022/6/27",sidebarPosition:5.3,frontMatter:{id:"regular-change-operations",sidebar_position:5.3},sidebar:"autoSidebar",previous:{title:"Use Navicat to Connect to StoneDB",permalink:"/zh/docs/developer-guide/connect-to-stonedb/use-navicat"},next:{title:"Statements for Queries",permalink:"/zh/docs/developer-guide/statements-for-queries"}},u={},p=[{value:"INSERT",id:"insert",level:2},{value:"UPDATE",id:"update",level:2},{value:"INSERT INTO ... SELECT",id:"insert-into--select",level:2},{value:"INSERT INTO ... ON DUPLICATE KEY UPDATE",id:"insert-into--on-duplicate-key-update",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dml-statements"},"DML Statements"),(0,o.kt)("p",null,"This topic describes the DML statements supported by StoneDB."),(0,o.kt)("p",null,"In this topic, table ",(0,o.kt)("strong",{parentName:"p"},"t_test")," created by executing the following statement is used in all code examples. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_test(\n  id INT NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(10) NOT NULL,\n  last_name VARCHAR(10) NOT NULL,\n  sex VARCHAR(5) NOT NULL,\n  score INT NOT NULL,\n  copy_id INT NOT NULL,\n  PRIMARY KEY (`id`)\n) engine=STONEDB;\n")),(0,o.kt)("h2",{id:"insert"},"INSERT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into t_test values(1,'jack','rose','0',58,1);\n")),(0,o.kt)("h2",{id:"update"},"UPDATE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"update t_test set score=200 where id=1;\n")),(0,o.kt)("h2",{id:"insert-into--select"},"INSERT INTO ... SELECT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_test2 like t_test;\ninsert into t_test2 select * from t_test;\n")),(0,o.kt)("h2",{id:"insert-into--on-duplicate-key-update"},"INSERT INTO ... ON DUPLICATE KEY UPDATE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"insert into t_test1 values(1,'Bond','Jason','1',47,10) on duplicate key update last_name='James';\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The logic of this syntax is to insert a row of data. The UPDATE statement is executed only if a primary key constraint or unique constraint conflict occurs."))))}m.isMDXComponent=!0}}]);