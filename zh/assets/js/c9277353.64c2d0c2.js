"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[491],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||s;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5873:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=["components"],i={id:"basic-operations",sidebar_position:3.3},l="Basic Operations",d={unversionedId:"getting-started/basic-operations",id:"getting-started/basic-operations",title:"Basic Operations",description:"Structured Query Language (SQL) is a programming language for communicating with databases. You can use it to manage relational databases by performing insert, query, update, and other operations.",source:"@site/docs/02-getting-started/basic-operations.md",sourceDirName:"02-getting-started",slug:"/getting-started/basic-operations",permalink:"/zh/docs/getting-started/basic-operations",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/basic-operations.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656158270,formattedLastUpdatedAt:"2022/6/25",sidebarPosition:3.3,frontMatter:{id:"basic-operations",sidebar_position:3.3},sidebar:"autoSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/zh/docs/getting-started/quick-start"},next:{title:"\u5e38\u89c4\u53d8\u66f4",permalink:"/zh/docs/O&M-Guide/regular-change-operations"}},p={},u=[{value:"Operations on databases",id:"operations-on-databases",level:2},{value:"Create a database",id:"create-a-database",level:3},{value:"List databases",id:"list-databases",level:3},{value:"Use a database",id:"use-a-database",level:3},{value:"Drop a database",id:"drop-a-database",level:3},{value:"Operations on tables",id:"operations-on-tables",level:2},{value:"Create a StoneDB table",id:"create-a-stonedb-table",level:3},{value:"Query the schema of a table",id:"query-the-schema-of-a-table",level:3},{value:"Drop a table",id:"drop-a-table",level:3},{value:"Operations on data",id:"operations-on-data",level:2},{value:"Insert data into a table",id:"insert-data-into-a-table",level:3},{value:"Modify data in a table",id:"modify-data-in-a-table",level:3},{value:"Remove data from a table",id:"remove-data-from-a-table",level:3},{value:"Clear data in a table",id:"clear-data-in-a-table",level:4},{value:"Remove specific data from a table",id:"remove-specific-data-from-a-table",level:4},{value:"Query data from a table",id:"query-data-from-a-table",level:3},{value:"Operations on users",id:"operations-on-users",level:2},{value:"Create a user",id:"create-a-user",level:3},{value:"Grant a user permissions",id:"grant-a-user-permissions",level:3},{value:"Query user permissions",id:"query-user-permissions",level:3},{value:"Drop a user",id:"drop-a-user",level:3}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"basic-operations"},"Basic Operations"),(0,s.kt)("p",null,"Structured Query Language (SQL) is a programming language for communicating with databases. You can use it to manage relational databases by performing insert, query, update, and other operations."),(0,s.kt)("p",null,"StoneDB is compatible with MySQL. You can use clients supported by MySQL to connect to StoneDB. In addition, StoneDB supports most SQL syntaxes. This section describes the basic SQL operations supported by StoneDB."),(0,s.kt)("p",null,"SQL can be classified into the following four parts by usage:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Data Definition Language (DDL): is used to manage database objects, such as CREATE, ALTER, and DROP statements."),(0,s.kt)("li",{parentName:"ul"},"Data Manipulation Language (DML): is used to manage data in tables, such as INSERT, DELETE, and UPDATE statements."),(0,s.kt)("li",{parentName:"ul"},"Data Query Language (DQL): is used to query objects, such as SELECT statements."),(0,s.kt)("li",{parentName:"ul"},"Data Control Language (DCL): is used to control access to data, such as GRANT and REVOKE statements.")),(0,s.kt)("h2",{id:"operations-on-databases"},"Operations on databases"),(0,s.kt)("p",null,"This section provides examples of performing basic operations on databases."),(0,s.kt)("h3",{id:"create-a-database"},"Create a database"),(0,s.kt)("p",null,"Execute the following SQL statement to create a database named ",(0,s.kt)("strong",{parentName:"p"},"test_db")," and set the default character set to ",(0,s.kt)("strong",{parentName:"p"},"utf8mb4"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create database test_db DEFAULT CHARACTER SET utf8mb4;\n")),(0,s.kt)("h3",{id:"list-databases"},"List databases"),(0,s.kt)("p",null,"Execute the following SQL statement to list databases:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"show databases;\n")),(0,s.kt)("h3",{id:"use-a-database"},"Use a database"),(0,s.kt)("p",null,"Execute the following SQL statement to use database ",(0,s.kt)("strong",{parentName:"p"},"test_db"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"use test_db;\n")),(0,s.kt)("h3",{id:"drop-a-database"},"Drop a database"),(0,s.kt)("p",null,"Execute the following SQL statement to drop database",(0,s.kt)("strong",{parentName:"p"}," test_db"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"drop database test_db;\n")),(0,s.kt)("h2",{id:"operations-on-tables"},"Operations on tables"),(0,s.kt)("p",null,"This section provides examples of performing basic operations on tables."),(0,s.kt)("h3",{id:"create-a-stonedb-table"},"Create a StoneDB table"),(0,s.kt)("p",null,"Execute the following SQL statement to create a table which is named ",(0,s.kt)("strong",{parentName:"p"},"student")," and consists of the ",(0,s.kt)("strong",{parentName:"p"},"id"),", ",(0,s.kt)("strong",{parentName:"p"},"name"),", ",(0,s.kt)("strong",{parentName:"p"},"age"),", and ",(0,s.kt)("strong",{parentName:"p"},"birthday")," fields:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create table student(\n    id int(11) primary key,\n    name varchar(255),\n    age smallint,\n    birthday DATE\n    ) engine=stonedb;\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you do not specify ",(0,s.kt)("strong",{parentName:"p"},"engine=stonedb")," in the SQL statement, the storage engine on which the table is created is determined by the value of parameter ",(0,s.kt)("strong",{parentName:"p"},"default_storage_engine"),". For more information, see ",(0,s.kt)("a",{parentName:"p",href:"https://stoneatom.yuque.com/staff-ft8n1u/dghuxr/xg9czr"},"Configure parameters"),"."))),(0,s.kt)("h3",{id:"query-the-schema-of-a-table"},"Query the schema of a table"),(0,s.kt)("p",null,"Execute the following SQL statement to query the schema of table ",(0,s.kt)("strong",{parentName:"p"},"student"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"show create table student\\G\n")),(0,s.kt)("h3",{id:"drop-a-table"},"Drop a table"),(0,s.kt)("p",null,"Execute the following SQL statement to drop table ",(0,s.kt)("strong",{parentName:"p"},"student"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"drop table student;\n")),(0,s.kt)("h2",{id:"operations-on-data"},"Operations on data"),(0,s.kt)("p",null,"This section provides examples of performing basic operations on data."),(0,s.kt)("h3",{id:"insert-data-into-a-table"},"Insert data into a table"),(0,s.kt)("p",null,"Execute the following SQL statement to insert a record to table ",(0,s.kt)("strong",{parentName:"p"},"student"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"insert into student values(1,'Jack',15,'20220506');\n")),(0,s.kt)("h3",{id:"modify-data-in-a-table"},"Modify data in a table"),(0,s.kt)("p",null,"Execute the following UPDATE statement to modify data in table ",(0,s.kt)("strong",{parentName:"p"},"student"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"update student set age=25 where id=1;\n")),(0,s.kt)("h3",{id:"remove-data-from-a-table"},"Remove data from a table"),(0,s.kt)("h4",{id:"clear-data-in-a-table"},"Clear data in a table"),(0,s.kt)("p",null,"Execute the following TRUNCATE statement to clear data in table ",(0,s.kt)("strong",{parentName:"p"},"student"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"truncate table student ;\n")),(0,s.kt)("h4",{id:"remove-specific-data-from-a-table"},"Remove specific data from a table"),(0,s.kt)("p",null,"As a column-based storage engine, StoneDB does not support DELETE operations."),(0,s.kt)("h3",{id:"query-data-from-a-table"},"Query data from a table"),(0,s.kt)("p",null,"Execute a SELECT statement to query data from a table."),(0,s.kt)("p",null,"Example 1: Query the name and birthday of the student whose ",(0,s.kt)("strong",{parentName:"p"},"id")," is ",(0,s.kt)("strong",{parentName:"p"},"1")," from table ",(0,s.kt)("strong",{parentName:"p"},"student"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"select name,birthday from student where id=1;\n")),(0,s.kt)("p",null,"Example 2: Query the name and birthday of each student and sort the result by birthday from table ",(0,s.kt)("strong",{parentName:"p"},"student"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"select name,birthday from student order by birthday;\n")),(0,s.kt)("h2",{id:"operations-on-users"},"Operations on users"),(0,s.kt)("p",null,"This section provides examples of performing basic operations on users."),(0,s.kt)("h3",{id:"create-a-user"},"Create a user"),(0,s.kt)("p",null,"Execute the following SQL statement to create a user named ",(0,s.kt)("strong",{parentName:"p"},"tiger")," and set the password to ",(0,s.kt)("strong",{parentName:"p"},"123456"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create user 'tiger'@'%' identified by '123456';\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The username together with the hostname uniquely identify a user in the format of '",(0,s.kt)("em",{parentName:"p"},"username"),"'@'",(0,s.kt)("em",{parentName:"p"},"host"),"'. In this way, 'tiger'@'%' and 'tiger'@'localhost' are two users."))),(0,s.kt)("h3",{id:"grant-a-user-permissions"},"Grant a user permissions"),(0,s.kt)("p",null,"Execute the following SQL statement to grant user ",(0,s.kt)("strong",{parentName:"p"},"tiger")," the permissions to query all tables in database ",(0,s.kt)("strong",{parentName:"p"},"test_db"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"grant select on test_db.* to 'tiger'@'%';\n")),(0,s.kt)("h3",{id:"query-user-permissions"},"Query user permissions"),(0,s.kt)("p",null,"Execute the following SQL statement to query permissions granted to user ",(0,s.kt)("strong",{parentName:"p"},"tiger"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"show grants for 'tiger'@'%';\n")),(0,s.kt)("h3",{id:"drop-a-user"},"Drop a user"),(0,s.kt)("p",null,"Execute the following SQL statement to drop user '",(0,s.kt)("strong",{parentName:"p"},"tiger'@'%'"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"drop user 'tiger'@'%';\n")))}c.isMDXComponent=!0}}]);