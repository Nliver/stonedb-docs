"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9005],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22100:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"bitwise-operators",sidebar_position:6.32},p="Bitwise Operators",l={unversionedId:"SQL-reference/operators/bitwise-operators",id:"SQL-reference/operators/bitwise-operators",title:"Bitwise Operators",description:"This topic describes the bitwise operators supported by StoneDB.",source:"@site/docs/05-SQL-reference/03-operators/bitwise-operators.md",sourceDirName:"05-SQL-reference/03-operators",slug:"/SQL-reference/operators/bitwise-operators",permalink:"/docs/SQL-reference/operators/bitwise-operators",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/05-SQL-reference/03-operators/bitwise-operators.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656412785,formattedLastUpdatedAt:"6/28/2022",sidebarPosition:6.32,frontMatter:{id:"bitwise-operators",sidebar_position:6.32},sidebar:"autoSidebar",previous:{title:"Arithmetic Operators",permalink:"/docs/SQL-reference/operators/arithmetic-operators"},next:{title:"Comparison Operators",permalink:"/docs/SQL-reference/operators/comparison-operators"}},c={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bitwise-operators"},"Bitwise Operators"),(0,o.kt)("p",null,"This topic describes the bitwise operators supported by StoneDB."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Operator")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"&")),(0,o.kt)("td",{parentName:"tr",align:null},"Bitwise AND")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"|"),(0,o.kt)("td",{parentName:"tr",align:null},"Bitwise OR")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"^")),(0,o.kt)("td",{parentName:"tr",align:null},"Bitwise XOR")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"!")),(0,o.kt)("td",{parentName:"tr",align:null},"Bitwise inversion")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<<")),(0,o.kt)("td",{parentName:"tr",align:null},"Left shift")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},">>")),(0,o.kt)("td",{parentName:"tr",align:null},"Right shift")))),(0,o.kt)("p",null,"Bitwise operators are used to operate on binary numbers. In a bitwise operation, the involved numbers are first converted to binary numbers to compute the result, and then the result is converted back to a decimal value."),(0,o.kt)("p",null,"The following code provides an example of using each operator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"> select 3&5;\n+-----+\n| 3&5 |\n+-----+\n|   1 |\n+-----+\n1 row in set (0.00 sec)\n\n> select 3|5;\n+-----+\n| 3|5 |\n+-----+\n|   7 |\n+-----+\n1 row in set (0.00 sec)\n\n> select 3^5;\n+-----+\n| 3^5 |\n+-----+\n|   6 |\n+-----+\n1 row in set (0.00 sec)\n\n> select ~18446744073709551612;\n+-----------------------+\n| ~18446744073709551612 |\n+-----------------------+\n|                     3 |\n+-----------------------+\n1 row in set (0.00 sec)\n\n> select 3>>1;\n+------+\n| 3>>1 |\n+------+\n|    1 |\n+------+\n1 row in set (0.00 sec)\n\n> select 3<<1;\n+------+\n| 3<<1 |\n+------+\n|    6 |\n+------+\n1 row in set (0.00 sec)\n")))}m.isMDXComponent=!0}}]);