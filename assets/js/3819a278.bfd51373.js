"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9538],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"quick-deployment",sidebar_position:3.1},d="Quick Deployment",l={unversionedId:"getting-started/quick-deployment",id:"getting-started/quick-deployment",title:"Quick Deployment",description:"Download the latest package",source:"@site/docs/02-getting-started/quick-deployment.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-deployment",permalink:"/docs/getting-started/quick-deployment",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/02-getting-started/quick-deployment.md",tags:[],version:"current",lastUpdatedBy:"Ma Jun",lastUpdatedAt:1656465854,formattedLastUpdatedAt:"6/29/2022",sidebarPosition:3.1,frontMatter:{id:"quick-deployment",sidebar_position:3.1},sidebar:"autoSidebar",previous:{title:"Server Configuration Requirements",permalink:"/docs/environment-requirements/server-configuration-requirements"},next:{title:"Quick Start",permalink:"/docs/getting-started/quick-start"}},c={},p=[{value:"Download the latest package",id:"download-the-latest-package",level:2},{value:"Upload and decompress the TAR package",id:"upload-and-decompress-the-tar-package",level:2},{value:"Check dependencies",id:"check-dependencies",level:2},{value:"Modify the configuration file",id:"modify-the-configuration-file",level:2},{value:"Create an account and directories",id:"create-an-account-and-directories",level:2},{value:"Initialize StoneDB",id:"initialize-stonedb",level:2},{value:"Start or stop StoneDB",id:"start-or-stop-stonedb",level:2},{value:"Log in as admin and reset the password",id:"log-in-as-admin-and-reset-the-password",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-deployment"},"Quick Deployment"),(0,o.kt)("h2",{id:"download-the-latest-package"},"Download the latest package"),(0,o.kt)("p",null,"Click ",(0,o.kt)("a",{parentName:"p",href:"/docs/download"},"here")," to download the latest installation package of StoneDB."),(0,o.kt)("h2",{id:"upload-and-decompress-the-tar-package"},"Upload and decompress the TAR package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -zxvf stonedb-ce-5.6-v1.0.0.el7.x86_64.tar.gz\n")),(0,o.kt)("p",null,"Upload the installation package to the directory. The name of the folder extracted from the package is ",(0,o.kt)("strong",{parentName:"p"},"stonedb"),"."),(0,o.kt)("h2",{id:"check-dependencies"},"Check dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd stonedb/install/bin\nldd mysqld\nldd mysql\n")),(0,o.kt)("p",null,"If the command output contains keywords ",(0,o.kt)("strong",{parentName:"p"},"not found"),", some dependencies are missing and must be installed."),(0,o.kt)("h2",{id:"modify-the-configuration-file"},"Modify the configuration file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd stonedb/install/\ncp stonedb.cnf stonedb.cnf.bak\nvi stonedb.cnf\n")),(0,o.kt)("p",null,"Modify the path and parameters. If the installation folder is ",(0,o.kt)("strong",{parentName:"p"},"stonedb"),", you only need to modify the parameters."),(0,o.kt)("h2",{id:"create-an-account-and-directories"},"Create an account and directories"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"groupadd stonedb\nuseradd -g stonedb stonedb\npasswd stonedb\ncd stonedb/install/\nmkdir binlog\nmkdir log\nmkdir tmp\nmkdir redolog\nmkdir undolog\nchown -R stonedb:stonedb stonedb\n")),(0,o.kt)("h2",{id:"initialize-stonedb"},"Initialize StoneDB"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/stonedb/install/bin/mysqld --defaults-file=/stonedb/install/stonedb.cnf --initialize-insecure --user=stonedb\n")),(0,o.kt)("p",null,"When you initialize StoneDB, add",(0,o.kt)("strong",{parentName:"p"}," parameter --initialize-insecure")," to allow the admin to initially log in without the need to enter a password. The admin is required to set a password after the initial login."),(0,o.kt)("h2",{id:"start-or-stop-stonedb"},"Start or stop StoneDB"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/stonedb/install/bin/mysqld_safe --defaults-file=/stonedb/install/stonedb.cnf --user=stonedb &\nmysqladmin -uroot -p -S /stonedb/install/tmp/mysql.sock shutdown\n")),(0,o.kt)("h2",{id:"log-in-as-admin-and-reset-the-password"},"Log in as admin and reset the password"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -uroot -p -S /stonedb/install/tmp/mysql.sock\n>set password = password('MYPASSWORD');\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("strong",{parentName:"p"},"MYPASSWORD")," with your password."))}m.isMDXComponent=!0}}]);