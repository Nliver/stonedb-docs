"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6260],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={id:"assignment-operators",sidebar_position:6.35},c="Assignment Operators",p={unversionedId:"SQL-reference/operators/assignment-operators",id:"SQL-reference/operators/assignment-operators",title:"Assignment Operators",description:"In the SET clause of an UPDATE statement, the equal sign (=) functions as an assignment operator. In this case, the value on the right side of the operator is assigned to the variable on the right side, provided that any WHERE conditions specified in the UPDATE statement are met.",source:"@site/docs/05-SQL-reference/03-operators/assignment-operators.md",sourceDirName:"05-SQL-reference/03-operators",slug:"/SQL-reference/operators/assignment-operators",permalink:"/zh/docs/SQL-reference/operators/assignment-operators",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/03-operators/assignment-operators.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656412785,formattedLastUpdatedAt:"2022/6/28",sidebarPosition:6.35,frontMatter:{id:"assignment-operators",sidebar_position:6.35},sidebar:"autoSidebar",previous:{title:"Logical Operators",permalink:"/zh/docs/SQL-reference/operators/logical-operators"},next:{title:"Date and Time Functions",permalink:"/zh/docs/SQL-reference/functions/date-and-time-functions"}},l={},u=[],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"assignment-operators"},"Assignment Operators"),(0,a.kt)("p",null,"In the SET clause of an UPDATE statement, the equal sign (",(0,a.kt)("inlineCode",{parentName:"p"},"="),") functions as an assignment operator. In this case, the value on the right side of the operator is assigned to the variable on the right side, provided that any WHERE conditions specified in the UPDATE statement are met."),(0,a.kt)("p",null,"The following code provides an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from t;\n+------+------+\n| col1 | col2 |\n+------+------+\n|  100 |  100 |\n+------+------+\n1 row in set (0.00 sec)\n\nmysql> update t set col1=col1+100,col2=col1+100;\nQuery OK, 1 row affected (0.00 sec)\nRows matched: 1  Changed: 1  Warnings: 0\n\nmysql> select * from t;                         \n+------+------+\n| col1 | col2 |\n+------+------+\n|  200 |  300 |\n+------+------+\n1 row in set (0.00 sec)\n")))}d.isMDXComponent=!0}}]);