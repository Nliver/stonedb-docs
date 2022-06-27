"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9732],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3429:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"regular-change-operations",sidebar_position:4.1},u="\u5e38\u89c4\u53d8\u66f4",c={unversionedId:"O&M-Guide/regular-change-operations",id:"O&M-Guide/regular-change-operations",title:"\u5e38\u89c4\u53d8\u66f4",description:"\u8868\u7ed3\u6784\u53d8\u66f4",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-O&M-Guide/regular-change-operations.md",sourceDirName:"03-O&M-Guide",slug:"/O&M-Guide/regular-change-operations",permalink:"/zh/docs/O&M-Guide/regular-change-operations",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/03-O&M-Guide/regular-change-operations.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1656337895,formattedLastUpdatedAt:"2022/6/27",sidebarPosition:4.1,frontMatter:{id:"regular-change-operations",sidebar_position:4.1},sidebar:"autoSidebar",previous:{title:"Basic Operations",permalink:"/zh/docs/getting-started/basic-operations"},next:{title:"Use Prometheus and Grafana to Monitor MySQL or StoneDB Databases",permalink:"/zh/docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor"}},p={},d=[{value:"\u8868\u7ed3\u6784\u53d8\u66f4",id:"\u8868\u7ed3\u6784\u53d8\u66f4",level:2},{value:"\u521b\u5efa\u76f8\u4f3c\u8868",id:"\u521b\u5efa\u76f8\u4f3c\u8868",level:3},{value:"\u6e05\u7a7a\u8868\u6570\u636e",id:"\u6e05\u7a7a\u8868\u6570\u636e",level:3},{value:"\u6dfb\u52a0\u5b57\u6bb5",id:"\u6dfb\u52a0\u5b57\u6bb5",level:3},{value:"\u5220\u9664\u5b57\u6bb5",id:"\u5220\u9664\u5b57\u6bb5",level:3},{value:"\u91cd\u547d\u540d\u8868",id:"\u91cd\u547d\u540d\u8868",level:3},{value:"\u7528\u6237\u6743\u9650\u53d8\u66f4",id:"\u7528\u6237\u6743\u9650\u53d8\u66f4",level:2},{value:"\u521b\u5efa\u7528\u6237",id:"\u521b\u5efa\u7528\u6237",level:3},{value:"\u7ed9\u7528\u6237\u8d4b\u6743",id:"\u7ed9\u7528\u6237\u8d4b\u6743",level:3},{value:"\u56de\u6536\u7528\u6237\u6743\u9650",id:"\u56de\u6536\u7528\u6237\u6743\u9650",level:3},{value:"\u5220\u9664\u7528\u6237",id:"\u5220\u9664\u7528\u6237",level:3}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e38\u89c4\u53d8\u66f4"},"\u5e38\u89c4\u53d8\u66f4"),(0,o.kt)("h2",{id:"\u8868\u7ed3\u6784\u53d8\u66f4"},"\u8868\u7ed3\u6784\u53d8\u66f4"),(0,o.kt)("p",null,"StoneDB\u53ea\u652f\u6301\u4ee5\u4e0b\u8868\u7ed3\u6784\u53d8\u66f4\u548c\u6570\u636e\u53d8\u66f4\u64cd\u4f5c\uff0c\u5176\u5b83\u6ca1\u6709\u8bf4\u660e\u7684\u8868\u793a\u4e0d\u652f\u6301\u3002"),(0,o.kt)("h3",{id:"\u521b\u5efa\u76f8\u4f3c\u8868"},"\u521b\u5efa\u76f8\u4f3c\u8868"),(0,o.kt)("p",null,"1\uff09\u521b\u5efa\u4e00\u5f20\u5f15\u64ce\u4e3a stonedb \u3001\u540d\u4e3at_name\u7684\u8868\uff1b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_name(\n  col1 INT NOT NULL AUTO_INCREMENT,\n  col2 VARCHAR(10) NOT NULL,\n  ......\n  PRIMARY KEY (`id`)\n) engine=STONEDB;\n")),(0,o.kt)("p",null,"2\uff09\u521b\u5efa\u4e00\u5f20\u4e0et_name\u7ed3\u6784\u76f8\u540c\u7684\u8868t_other\n\u4f7f\u7528 Create table like \u8bed\u53e5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"create table t_other like t_name;\n")),(0,o.kt)("h3",{id:"\u6e05\u7a7a\u8868\u6570\u636e"},"\u6e05\u7a7a\u8868\u6570\u636e"),(0,o.kt)("p",null,"\u4f7f\u7528truncate table \u8bed\u53e5\u53ef\u4ee5\u5b9e\u73b0\u4fdd\u7559\u8868\u7ed3\u6784\uff0c\u4ec5\u6e05\u7a7a\u8868\u4e2d\u7684\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"truncate table t_name;\n")),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u5b57\u6bb5"},"\u6dfb\u52a0\u5b57\u6bb5"),(0,o.kt)("p",null,"\u4f7f\u7528 alter table  ... add column \u8bed\u53e5\u5b9e\u73b0\u5411\u6307\u5b9a\u8868\u4e2d\u6dfb\u52a0\u5b57\u6bb5\uff0c\u65b0\u589e\u52a0\u7684\u5b57\u6bb5\u9ed8\u8ba4\u7f6e\u4e8e\u6700\u540e\u4e00\u4e2a\u5b57\u6bb5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alter table t_name add column c_name varchar(10);\n")),(0,o.kt)("h3",{id:"\u5220\u9664\u5b57\u6bb5"},"\u5220\u9664\u5b57\u6bb5"),(0,o.kt)("p",null,"\u4f7f\u7528 alter table  ... drop \u8bed\u53e5\u5b9e\u73b0\u5220\u9664\u8868\u4e2d\u6307\u5b9a\u5b57\u6bb5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alter table t_name drop c_name;\n")),(0,o.kt)("h3",{id:"\u91cd\u547d\u540d\u8868"},"\u91cd\u547d\u540d\u8868"),(0,o.kt)("p",null,"\u4f7f\u7528 alter table ... rename to \u8bed\u53e5\u5b9e\u73b0\u5bf9\u6307\u5b9a\u8868\u7684\u91cd\u547d\u540d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alter table t_name rename to t_name_new;\n")),(0,o.kt)("h2",{id:"\u7528\u6237\u6743\u9650\u53d8\u66f4"},"\u7528\u6237\u6743\u9650\u53d8\u66f4"),(0,o.kt)("h3",{id:"\u521b\u5efa\u7528\u6237"},"\u521b\u5efa\u7528\u6237"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"create user 'u_name'@'hostname' identified by 'xxx';\n")),(0,o.kt)("h3",{id:"\u7ed9\u7528\u6237\u8d4b\u6743"},"\u7ed9\u7528\u6237\u8d4b\u6743"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grant all on *.* to 'u_name'@'hostname';\ngrant select on db_name.* to 'u_name'@'hostname';\ngrant select(column_name) on db_name.t_name to 'u_name'@'hostname';\n")),(0,o.kt)("h3",{id:"\u56de\u6536\u7528\u6237\u6743\u9650"},"\u56de\u6536\u7528\u6237\u6743\u9650"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"revoke all privileges on *.* from 'u_name'@'hostname';\nrevoke select on db_name.* from 'u_name'@'hostname';\nrevoke select(column_name) on db_name.t_name from 'u_name'@'hostname';\n")),(0,o.kt)("h3",{id:"\u5220\u9664\u7528\u6237"},"\u5220\u9664\u7528\u6237"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"drop user 'u_name'@'hostname';\n")))}m.isMDXComponent=!0}}]);