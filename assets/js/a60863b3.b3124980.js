"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[3308],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return t?n.createElement(g,l(l({ref:a},p),{},{components:t})):n.createElement(g,l({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5205:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],s={id:"regular-change-operations",sidebar_position:4.1},i="Regular Change Operations",u={unversionedId:"O&M-Guide/regular-change-operations",id:"O&M-Guide/regular-change-operations",title:"Regular Change Operations",description:"Change operations on schemas and data of tables",source:"@site/docs/03-O&M-Guide/regular-change-operations.md",sourceDirName:"03-O&M-Guide",slug:"/O&M-Guide/regular-change-operations",permalink:"/docs/O&M-Guide/regular-change-operations",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/03-O&M-Guide/regular-change-operations.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656385212,formattedLastUpdatedAt:"6/28/2022",sidebarPosition:4.1,frontMatter:{id:"regular-change-operations",sidebar_position:4.1},sidebar:"autoSidebar",previous:{title:"Basic Operations",permalink:"/docs/getting-started/basic-operations"},next:{title:"Use Prometheus and Grafana to Monitor MySQL or StoneDB Databases",permalink:"/docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor"}},p={},d=[{value:"Change operations on schemas and data of tables",id:"change-operations-on-schemas-and-data-of-tables",level:2},{value:"Create tables using the same schema",id:"create-tables-using-the-same-schema",level:3},{value:"Clear data in a table",id:"clear-data-in-a-table",level:3},{value:"Add a field",id:"add-a-field",level:3},{value:"Drop a field",id:"drop-a-field",level:3},{value:"Rename a table",id:"rename-a-table",level:3},{value:"Change operations on user permissions",id:"change-operations-on-user-permissions",level:2},{value:"Create a user",id:"create-a-user",level:3},{value:"Grant user permissions",id:"grant-user-permissions",level:3},{value:"Revoke permissions",id:"revoke-permissions",level:3},{value:"Drop a user",id:"drop-a-user",level:3}],c={toc:d};function m(e){var a=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"regular-change-operations"},"Regular Change Operations"),(0,o.kt)("h2",{id:"change-operations-on-schemas-and-data-of-tables"},"Change operations on schemas and data of tables"),(0,o.kt)("p",null,"This section describes the supported change operations on schemas and data of tables."),(0,o.kt)("h3",{id:"create-tables-using-the-same-schema"},"Create tables using the same schema"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Execute a ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE TABLE")," statement to create a StoneDB table.")),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_name(\n  col1 INT NOT NULL AUTO_INCREMENT,\n  col2 VARCHAR(10) NOT NULL,\n  ......\n  PRIMARY KEY (`id`)\n) engine=STONEDB;\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Execute a ",(0,o.kt)("inlineCode",{parentName:"li"},"CREATE TABLE... LIKE "),"statement to create another table that uses the same schema as the table created in the step 1. ")),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_other like t_name;\n")),(0,o.kt)("h3",{id:"clear-data-in-a-table"},"Clear data in a table"),(0,o.kt)("p",null,"Execute a ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE")," statement to clear data in a table and retain the table schema."),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"truncate table t_name;\n")),(0,o.kt)("h3",{id:"add-a-field"},"Add a field"),(0,o.kt)("p",null,"Execute an ",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE... ADD COLUMN")," statement to add a field in a given table. The added field is the last field, by default.\nCode example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"alter table t_name add column c_name varchar(10);\n")),(0,o.kt)("h3",{id:"drop-a-field"},"Drop a field"),(0,o.kt)("p",null,"Execute an ",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE... DROP")," statement to drop a field from a table.",(0,o.kt)("br",null),"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"alter table t_name drop c_name;\n")),(0,o.kt)("h3",{id:"rename-a-table"},"Rename a table"),(0,o.kt)("p",null,"Execute an ",(0,o.kt)("inlineCode",{parentName:"p"},"ALTER TABLE... RENAME TO")," statement to rename a given table.",(0,o.kt)("br",null),"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"alter table t_name rename to t_name_new;\n")),(0,o.kt)("h2",{id:"change-operations-on-user-permissions"},"Change operations on user permissions"),(0,o.kt)("h3",{id:"create-a-user"},"Create a user"),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create user 'u_name'@'hostname' identified by 'xxx';\n")),(0,o.kt)("h3",{id:"grant-user-permissions"},"Grant user permissions"),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"grant all on *.* to 'u_name'@'hostname';\ngrant select on db_name.* to 'u_name'@'hostname';\ngrant select(column_name) on db_name.t_name to 'u_name'@'hostname';\n")),(0,o.kt)("h3",{id:"revoke-permissions"},"Revoke permissions"),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"revoke all privileges on *.* from 'u_name'@'hostname';\nrevoke select on db_name.* from 'u_name'@'hostname';\nrevoke select(column_name) on db_name.t_name from 'u_name'@'hostname';\n")),(0,o.kt)("h3",{id:"drop-a-user"},"Drop a user"),(0,o.kt)("p",null,"Code example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"drop user 'u_name'@'hostname';\n")))}m.isMDXComponent=!0}}]);