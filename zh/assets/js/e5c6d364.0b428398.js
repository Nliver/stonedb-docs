"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9031],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1802:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"use-mysql-client",sidebar_position:5.21},s="Use mysql to Connect to StoneDB",c={unversionedId:"developer-guide/connect-to-stonedb/use-mysql-client",id:"developer-guide/connect-to-stonedb/use-mysql-client",title:"Use mysql to Connect to StoneDB",description:"This topic describes how to use the MySQL command-line client named mysql to connect to StoneDB.",source:"@site/docs/04-developer-guide/01-connect-to-stonedb/use-mysql-client.md",sourceDirName:"04-developer-guide/01-connect-to-stonedb",slug:"/developer-guide/connect-to-stonedb/use-mysql-client",permalink:"/zh/docs/developer-guide/connect-to-stonedb/use-mysql-client",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/01-connect-to-stonedb/use-mysql-client.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1656414906,formattedLastUpdatedAt:"2022/6/28",sidebarPosition:5.21,frontMatter:{id:"use-mysql-client",sidebar_position:5.21},sidebar:"autoSidebar",previous:{title:"Compile StoneDB in a Docker Container",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-docker"},next:{title:"Use Navicat to Connect to StoneDB",permalink:"/zh/docs/developer-guide/connect-to-stonedb/use-navicat"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Parameter description",id:"parameter-description",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-mysql-to-connect-to-stonedb"},"Use mysql to Connect to StoneDB"),(0,a.kt)("p",null,"This topic describes how to use the MySQL command-line client named mysql to connect to StoneDB."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mysql has been installed and its version is 5.5, 5.6, or 5.7."),(0,a.kt)("li",{parentName:"ul"},"The value of environment variable ",(0,a.kt)("strong",{parentName:"li"},"PATH")," contains the directory that stores mysql.")),(0,a.kt)("h2",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open mysql."),(0,a.kt)("li",{parentName:"ol"},"Specify required parameters according to the following format.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -u -p -h -P -S -A\n")),(0,a.kt)("h2",{id:"parameter-description"},"Parameter description"),(0,a.kt)("p",null,"The following table describes required parameters."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-h"),(0,a.kt)("td",{parentName:"tr",align:null},"The IP address of StoneDB.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-u"),(0,a.kt)("td",{parentName:"tr",align:null},"The username of the account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-p"),(0,a.kt)("td",{parentName:"tr",align:null},"The password of the account. You can skip this parameter for security purposes and enter the password as prompted later.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-P"),(0,a.kt)("td",{parentName:"tr",align:null},"The port used to connect to StoneDB. By default, the port 3306 is used. You can specify another port as needed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-A"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the database.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-S"),(0,a.kt)("td",{parentName:"tr",align:null},"The name of the .sock file that is used to connect to StoneDB.")))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"If you want to exit the command-line client, enter",(0,a.kt)("strong",{parentName:"li"}," exit")," and press ",(0,a.kt)("strong",{parentName:"li"},"Enter.")),(0,a.kt)("li",{parentName:"ul"},"For more information about parameters, run ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql --help"),".")))))}m.isMDXComponent=!0}}]);