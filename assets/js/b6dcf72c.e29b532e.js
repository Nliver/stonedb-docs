"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[7313],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52182:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],i={id:"quick-start",sidebar_position:3.2},c="Quick Start",l={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",title:"Quick Start",description:"This topic presents some examples to show you that the StoneDB storage engine has superior performance than InnoDB on processing bulk insert of data, compressing data, and executing analytical queries.",source:"@site/docs/02-getting-started/quick-start.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-start",permalink:"/docs/getting-started/quick-start",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/02-getting-started/quick-start.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656423256,formattedLastUpdatedAt:"6/28/2022",sidebarPosition:3.2,frontMatter:{id:"quick-start",sidebar_position:3.2},sidebar:"autoSidebar",previous:{title:"Quick Deployment",permalink:"/docs/getting-started/quick-deployment"},next:{title:"Basic Operations",permalink:"/docs/getting-started/basic-operations"}},p={},u=[{value:"Step 1. Deploy a test environment",id:"step-1-deploy-a-test-environment",level:2},{value:"Step 2. Prepare test data",id:"step-2-prepare-test-data",level:2},{value:"1. Prepare for the test",id:"1-prepare-for-the-test",level:3},{value:"2. Create a database",id:"2-create-a-database",level:3},{value:"3. Create a table",id:"3-create-a-table",level:3},{value:"4. Create a stored procedure",id:"4-create-a-stored-procedure",level:3},{value:"Step 3. Test insert performance",id:"step-3-test-insert-performance",level:2},{value:"Step 4. Test data compression efficiency",id:"step-4-test-data-compression-efficiency",level:2},{value:"Step 5. Test performance on processing aggregate queries",id:"step-5-test-performance-on-processing-aggregate-queries",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"quick-start"},"Quick Start"),(0,s.kt)("p",null,"This topic presents some examples to show you that the StoneDB storage engine has superior performance than InnoDB on processing bulk insert of data, compressing data, and executing analytical queries."),(0,s.kt)("h2",{id:"step-1-deploy-a-test-environment"},"Step 1. Deploy a test environment"),(0,s.kt)("p",null,"Before using StoneDB, prepare your test environment according to instructions provided in ",(0,s.kt)("a",{parentName:"p",href:"/docs/getting-started/quick-deployment"},"Quick Deployment")," and start StoneDB."),(0,s.kt)("h2",{id:"step-2-prepare-test-data"},"Step 2. Prepare test data"),(0,s.kt)("p",null,"Perform the following steps to generate test data."),(0,s.kt)("h3",{id:"1-prepare-for-the-test"},"1. Prepare for the test"),(0,s.kt)("p",null,"In the test environment, create a StoneDB table and a InnoDB table. Ensure the following parameter settings of the two tables are same:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"autocommit=1"),(0,s.kt)("li",{parentName:"ul"},"innodb_flush_log_at_trx_commit=1"),(0,s.kt)("li",{parentName:"ul"},"sync_binlog=0")),(0,s.kt)("h3",{id:"2-create-a-database"},"2. Create a database"),(0,s.kt)("p",null,"Create a database named ",(0,s.kt)("strong",{parentName:"p"},"test"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"create database test DEFAULT CHARACTER SET utf8mb4;\n")),(0,s.kt)("h3",{id:"3-create-a-table"},"3. Create a table"),(0,s.kt)("p",null,"In database ",(0,s.kt)("strong",{parentName:"p"},"test"),", create a table named ",(0,s.kt)("strong",{parentName:"p"},"t_test"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"use test\nCREATE TABLE t_user(\n  id INT NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(20) NOT NULL,\n  last_name VARCHAR(20) NOT NULL,\n  sex VARCHAR(5) NOT NULL,\n  score INT NOT NULL,\n  copy_id INT NOT NULL,\n  PRIMARY KEY (`id`)\n) engine=STONEDB;\n")),(0,s.kt)("h3",{id:"4-create-a-stored-procedure"},"4. Create a stored procedure"),(0,s.kt)("p",null,"Create a stored procedure that is used to generate a table containing randomly generated names of persons."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"DELIMITER //\n    create PROCEDURE add_user(in num INT)\n    BEGIN\n        DECLARE rowid INT DEFAULT 0;\n        DECLARE firstname VARCHAR(10);\n        DECLARE name1 VARCHAR(10);\n        DECLARE name2 VARCHAR(10);\n        DECLARE lastname VARCHAR(10) DEFAULT '';\n        DECLARE sex CHAR(1);\n        DECLARE score CHAR(2);\n        WHILE rowid < num DO\n        SET firstname = SUBSTRING(md5(rand()),1,4); \n        SET name1 = SUBSTRING(md5(rand()),1,4); \n        SET name2 = SUBSTRING(md5(rand()),1,4); \n        SET sex=FLOOR(0 + (RAND() * 2));\n        SET score= FLOOR(40 + (RAND() *60));\n        SET rowid = rowid + 1;\n        IF ROUND(RAND())=0 THEN \n        SET lastname =name1;\n        END IF;\n        IF ROUND(RAND())=1 THEN\n        SET lastname = CONCAT(name1,name2);\n        END IF;\n        insert INTO t_user(first_name,last_name,sex,score,copy_id) VALUES (firstname,lastname,sex,score,rowid);  \n        END WHILE;\n    END //\nDELIMITER ;\n")),(0,s.kt)("h2",{id:"step-3-test-insert-performance"},"Step 3. Test insert performance"),(0,s.kt)("p",null,"Call the stored procedure to insert 10,000,000 rows of data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"> call add_user_innodb(10000000);\nQuery OK, 1 row affected (24 min 46.62 sec)\n\n> call add_user(10000000);\nQuery OK, 1 row affected (9 min 21.14 sec)\n")),(0,s.kt)("p",null,"According to the returned result, StoneDB takes 9 minutes and 21 seconds, while InnoDB takes 24 minutes and 46 seconds."),(0,s.kt)("h2",{id:"step-4-test-data-compression-efficiency"},"Step 4. Test data compression efficiency"),(0,s.kt)("p",null,"Compress the inserted data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"> select count(*) from t_user_innodb;\n+----------+\n| count(*) |\n+----------+\n| 10000000 |\n+----------+\n1 row in set (1.83 sec)\n\n> select count(*) from t_user;       \n+----------+\n| count(*) |\n+----------+\n| 10000000 |\n+----------+\n1 row in set (0.00 sec)\n\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n| table_schema | table_name    | table_rows | data_length | index_length | total_size | engine  |\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n| test         | t_user        |   10000000 | 119.99M     | 0.00M        | 119.99M    | STONEDB |\n| test         | t_user_innodb |    9995867 | 454.91M     | 0.00M        | 454.91M    | InnoDB  |\n+--------------+---------------+------------+-------------+--------------+------------+---------+\n")),(0,s.kt)("p",null,"According to the returned result, the data size after compression in StoneDB is 120 MB while that in InnoDB is 455 MB."),(0,s.kt)("h2",{id:"step-5-test-performance-on-processing-aggregate-queries"},"Step 5. Test performance on processing aggregate queries"),(0,s.kt)("p",null,"Execute an aggregate query."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"> select first_name,count(*) from t_user group by first_name order by 1; \n+------------+----------+\n| first_name | count(*) |\n+------------+----------+\n.....\n| fffb       |      142 |\n| fffc       |      140 |\n| fffd       |      156 |\n| fffe       |      140 |\n| ffff       |      132 |\n+------------+----------+\n65536 rows in set (0.98 sec)\n\n> select first_name,count(*) from t_user_innodb group by first_name order by 1;\n+------------+----------+\n| first_name | count(*) |\n+------------+----------+\n......\n| fffb       |      178 |\n| fffc       |      161 |\n| fffd       |      170 |\n| fffe       |      156 |\n| ffff       |      139 |\n+------------+----------+\n65536 rows in set (9.00 sec)\n")),(0,s.kt)("p",null,"According to the returned result, StoneDB takes 0.98 seconds while InnoDB takes 9 seconds."))}f.isMDXComponent=!0}}]);