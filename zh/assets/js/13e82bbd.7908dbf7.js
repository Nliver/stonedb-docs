"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6076],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=l,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(87462),l=n(63366),o=(n(67294),n(3905)),r=["components"],i={id:"compile-using-redhat7",sidebar_position:5.13},s="Compile StoneDB on RHEL 7",p={unversionedId:"developer-guide/compiling-methods/compile-using-redhat7",id:"developer-guide/compiling-methods/compile-using-redhat7",title:"Compile StoneDB on RHEL 7",description:"This topic describes how to compile StoneDB on Red Hat Enterprise Linux (RHEL) 7.",source:"@site/docs/04-developer-guide/00-compiling-methods/compile-using-redhat7.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-redhat7",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-redhat7",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-using-redhat7.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1656413960,formattedLastUpdatedAt:"2022/6/28",sidebarPosition:5.13,frontMatter:{id:"compile-using-redhat7",sidebar_position:5.13},sidebar:"autoSidebar",previous:{title:"Compile StoneDB on CentOS 7",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-centos7"},next:{title:"Compile StoneDB on Ubuntu 20.04",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Step 1. Install the dependencies",id:"step-1-install-the-dependencies",level:3},{value:"Step 2. Install CMake and third-party libraries",id:"step-2-install-cmake-and-third-party-libraries",level:3},{value:"Step 3. Install GCC 7.3.0",id:"step-3-install-gcc-730",level:3},{value:"Step 4. Compile StoneDB",id:"step-4-compile-stonedb",level:3},{value:"<strong>Step 5. Start StoneDB</strong>",id:"step-5-start-stonedb",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compile-stonedb-on-rhel-7"},"Compile StoneDB on RHEL 7"),(0,o.kt)("p",null,"This topic describes how to compile StoneDB on Red Hat Enterprise Linux (RHEL) 7."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The source code of StoneDB has been downloaded."),(0,o.kt)("p",null,"Download link: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stoneatom/stonedb.git"},"https://github.com/stoneatom/stonedb.git")),(0,o.kt)("h2",{id:"procedure"},"Procedure"),(0,o.kt)("h3",{id:"step-1-install-the-dependencies"},"Step 1. Install the dependencies"),(0,o.kt)("p",null,"Before installing the dependencies, ensure that the GCC version in use is 4.8.5."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install -y gcc\nyum install -y g++\nyum install -y make\nyum install -y build-essential\nyum install -y autoconf\nyum install -y tree\nyum install -y bison\nyum install -y git\nyum install -y cmake\nyum install -y libtool\nyum install -y numactl\nyum install -y python\nyum install -y openssl\nyum install -y perl\nyum install -y binutils\nyum install -y libgmp-dev\nyum install -y libmpfr-dev\nyum install -y libmpc-dev\nyum install -y libisl-dev\nyum install -y zlib1g-dev\nyum install -y liblz4-dev\nyum install -y libbz2-dev\nyum install -y libzstd-dev\nyum install -y lz4\nyum install -y ncurses-dev\nyum install -y libsnappy-dev\n")),(0,o.kt)("h3",{id:"step-2-install-cmake-and-third-party-libraries"},"Step 2. Install CMake and third-party libraries"),(0,o.kt)("p",null,"Before compiling StoneDB, install CMake 3.7 or later and the following third-party libraries: marisa, RocksDB, and Boost."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install CMake.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://cmake.org/files/v3.7/cmake-3.7.2.tar.gz\ntar -zxvf cmake-3.7.2.tar.gz\ncd cmake-3.7.2\n./bootstrap && make && make install\n/usr/local/bin/cmake --version\napt remove cmake -y\nln -s /usr/local/bin/cmake /usr/bin/\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install marisa.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/s-yata/marisa-trie.git\ncd marisa-trie\nautoreconf -i\n./configure --enable-native-code --prefix=/usr/local/stonedb-marisa\nmake && make install \n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install RocksDB.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/facebook/rocksdb/archive/refs/tags/v4.13.tar.gz\ntar -zxvf v4.13.tar.gz\ncd rocksdb-4.13\nmake shared_lib\nmake install-shared INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\nmake static_lib\nmake install-static INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Boost is automatically installed when the ",(0,o.kt)("strong",{parentName:"p"},"stonedb_build.sh")," script is executed in step 4. "))),(0,o.kt)("h3",{id:"step-3-install-gcc-730"},"Step 3. Install GCC 7.3.0"),(0,o.kt)("p",null,"Before executing ",(0,o.kt)("strong",{parentName:"p"},"stonedb_build.sh")," to compile StoneDB, you must ensure the GCC version is 7.3.0."),(0,o.kt)("p",null,"You can run the following command to check the GCC version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcc --version\n")),(0,o.kt)("p",null,"If the version is earlier than 7.3.0, perform the following steps to upgrade GCC."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the SCL utility.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centos-release-scl scl-utils-build -y\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install GCC, GCC-C++, or GDB of v7.3.0.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install devtoolset-7-gcc.x86_64 devtoolset-7-gcc-c++.x86_64 devtoolset-7-gcc-gdb-plugin.x86_64 -y\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Switch the version to 7.3.0.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"scl enable devtoolset-7 bash\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check that the version is switched to 7.3.0.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gcc --version\n")),(0,o.kt)("h3",{id:"step-4-compile-stonedb"},"Step 4. Compile StoneDB"),(0,o.kt)("p",null,"Execute the following script to compile StoneDB:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /stonedb2022/scripts\n./stonedb_build.sh\n")),(0,o.kt)("p",null,"After the compilation is complete, a folder named ",(0,o.kt)("strong",{parentName:"p"},"/stonedb56")," is generated."),(0,o.kt)("h3",{id:"step-5-start-stonedb"},(0,o.kt)("strong",{parentName:"h3"},"Step 5. Start StoneDB")),(0,o.kt)("p",null,"Perform the following steps to start StoneDB."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a group, a user, and relevant directories.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"groupadd mysql\nuseradd -g mysql mysql\nmkdir -p /stonedb56/install/{log/,tmp/,binlog/,data/innodb} && chown -R mysql:mysql /stonedb56\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Start StoneDB.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /stonedb56/install/bin\n./mysqld_safe --defaults-file=/stonedb56/install/stonedb.cnf --user=mysql &\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Log in to StoneDB.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#./mysql -uroot -p -S /stonedb56/install/tmp/mysql.sock\nWarning: Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 1\nServer version: 5.6.24-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| innodb             |\n| test               |\n+--------------------+\n4 rows in set (0.08 sec)\n")))}u.isMDXComponent=!0}}]);