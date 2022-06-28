"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[4478],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(g,r(r({ref:t},d),{},{components:n})):o.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8223:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"compile-using-ubuntu20.04",sidebar_position:5.14},l="Compile StoneDB on Ubuntu 20.04",c={unversionedId:"developer-guide/compiling-methods/compile-using-ubuntu20.04",id:"developer-guide/compiling-methods/compile-using-ubuntu20.04",title:"Compile StoneDB on Ubuntu 20.04",description:"This topic describes how to compile StoneDB on Ubuntu 20.04.",source:"@site/docs/04-developer-guide/00-compiling-methods/compile-using-ubuntu2004.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-ubuntu20.04",permalink:"/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/04-developer-guide/00-compiling-methods/compile-using-ubuntu2004.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656385212,formattedLastUpdatedAt:"6/28/2022",sidebarPosition:5.14,frontMatter:{id:"compile-using-ubuntu20.04",sidebar_position:5.14},sidebar:"autoSidebar",previous:{title:"Compile StoneDB on RHEL 7",permalink:"/docs/developer-guide/compiling-methods/compile-using-redhat7"},next:{title:"Compile StoneDB in a Docker Container",permalink:"/docs/developer-guide/compiling-methods/compile-using-docker"}},d={},p=[{value:"Step 1. Install GCC 7.3.0",id:"step-1-install-gcc-730",level:2},{value:"1. Install the dependencies",id:"1-install-the-dependencies",level:3},{value:"2. Decompress the source code package of GCC 7.3.0",id:"2-decompress-the-source-code-package-of-gcc-730",level:3},{value:"3. Prepare for compiling GCC",id:"3-prepare-for-compiling-gcc",level:3},{value:"4. Compile GCC",id:"4-compile-gcc",level:3},{value:"5. Check the GCC version",id:"5-check-the-gcc-version",level:3},{value:"6. Delete GCC and G++ versions that are later than 7.3.0",id:"6-delete-gcc-and-g-versions-that-are-later-than-730",level:3},{value:"Step 2. Compile StoneDB",id:"step-2-compile-stonedb",level:2},{value:"1. Download the source code package of StoneDB",id:"1-download-the-source-code-package-of-stonedb",level:3},{value:"2. Install CMake and the third-party libraries",id:"2-install-cmake-and-the-third-party-libraries",level:3},{value:"3. Compile StoneDB",id:"3-compile-stonedb",level:3},{value:"Step 3. Start StoneDB",id:"step-3-start-stonedb",level:2},{value:"1. Create a user group, a user, and directories",id:"1-create-a-user-group-a-user-and-directories",level:3},{value:"2. Start StoneDB",id:"2-start-stonedb",level:3},{value:"3. Log in to StoneDB",id:"3-log-in-to-stonedb",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compile-stonedb-on-ubuntu-2004"},"Compile StoneDB on Ubuntu 20.04"),(0,i.kt)("p",null,"This topic describes how to compile StoneDB on Ubuntu 20.04."),(0,i.kt)("h2",{id:"step-1-install-gcc-730"},"Step 1. Install GCC 7.3.0"),(0,i.kt)("p",null,"Ubuntu 20.04 LTS uses GCC 9.4.0, by default. You must downgrade the GCC version to 7.3.0, because StoneDB can be complied only on GCC 7.3.0."),(0,i.kt)("h3",{id:"1-install-the-dependencies"},"1. Install the dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install gcc\nsudo apt install g++\nsudo apt install make\nsudo apt install build-essential\nsudo apt install autoconf\nsudo apt install tree\nsudo apt install bison\nsudo apt install git\nsudo apt install cmake\nsudo apt install libtool\nsudo apt install numactl\nsudo apt install python\nsudo apt install openssl\nsudo apt install perl\nsudo apt install binutils\nsudo apt install libgmp-dev\nsudo apt install libmpfr-dev\nsudo apt install libmpc-dev\nsudo apt install libisl-dev\nsudo apt install zlib1g-dev\nsudo apt install liblz4-dev\nsudo apt install libbz2-dev\nsudo apt install libzstd-dev\nsudo apt install lz4\nsudo apt install ncurses-dev\nsudo apt install libsnappy-dev\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Ensure that all the dependencies are installed. Otherwise, a large number of errors will be reported."))),(0,i.kt)("h3",{id:"2-decompress-the-source-code-package-of-gcc-730"},"2. Decompress the source code package of GCC 7.3.0"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://ftp.gnu.org/gnu/gcc/"},"Download"),", upload, and then decompress the source code package of GCC 7.3.0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /home\ntar -zxvf gcc-7.3.0.tar.gz\n")),(0,i.kt)("h3",{id:"3-prepare-for-compiling-gcc"},"3. Prepare for compiling GCC"),(0,i.kt)("p",null,"Modify the source code. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /home/gcc-7.3.0/libsanitizer/sanitizer_common\ncp sanitizer_platform_limits_posix.cc sanitizer_platform_limits_posix.cc.bak\nvim sanitizer_platform_limits_posix.cc\n# 1. Comment out row 158.\n//#include <sys/ustat.h>\n# 2. Add the following code after row 250.\n// Use pre-computed size of struct ustat to avoid <sys/ustat.h> which\n// has been removed from glibc 2.28.\n#if defined(__aarch64__) || defined(__s390x__) || defined (__mips64) \\\n  || defined(__powerpc64__) || defined(__arch64__) || defined(__sparcv9) \\\n  || defined(__x86_64__)\n#define SIZEOF_STRUCT_USTAT 32\n#elif defined(__arm__) || defined(__i386__) || defined(__mips__) \\\n  || defined(__powerpc__) || defined(__s390__)\n#define SIZEOF_STRUCT_USTAT 20\n#else\n#error Unknown size of struct ustat\n#endif\n  unsigned struct_ustat_sz = SIZEOF_STRUCT_USTAT;\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Here's a picture to add")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If GCC is compiled without the modification, an error will be reported, indicating that ",(0,i.kt)("strong",{parentName:"p"},"sys/ustat.h")," does not exist."))),(0,i.kt)("h3",{id:"4-compile-gcc"},"4. Compile GCC"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir /gcc\ncd /home/gcc-7.3.0\n./contrib/download_prerequisites\n./configure --prefix=/gcc --enable-bootstrap -enable-threads=posix --enable-checking=release --enable-languages=c,c++ --disable-multilib --disable-libsanitizer\nsudo make && make install\n")),(0,i.kt)("h3",{id:"5-check-the-gcc-version"},"5. Check the GCC version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# /gcc/bin/gcc --version\ngcc (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")),(0,i.kt)("h3",{id:"6-delete-gcc-and-g-versions-that-are-later-than-730"},"6. Delete GCC and G++ versions that are later than 7.3.0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo rm /usr/bin/gcc\nsudo ln -s /gcc/bin/gcc /usr/bin/gcc\nsudo rm /usr/bin/g++\nsudo ln -s /gcc/bin/g++ /usr/bin/g++\n\n# gcc --version\ngcc (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\n# g++ --version\ng++ (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\n# c++ --version\nc++ (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\n")),(0,i.kt)("h2",{id:"step-2-compile-stonedb"},"Step 2. Compile StoneDB"),(0,i.kt)("h3",{id:"1-download-the-source-code-package-of-stonedb"},"1. Download the source code package of StoneDB"),(0,i.kt)("p",null,"Download the source code from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stoneatom/stonedb.git"},"https://github.com/stoneatom/stonedb.git"),"."),(0,i.kt)("h3",{id:"2-install-cmake-and-the-third-party-libraries"},"2. Install CMake and the third-party libraries"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install CMake.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wget https://cmake.org/files/v3.7/cmake-3.7.2.tar.gz\ntar -zxvf cmake-3.7.2.tar.gz\ncd cmake-3.7.2\n./bootstrap && make && make install\n/usr/local/bin/cmake --version\napt remove cmake -y\nln -s /usr/local/bin/cmake /usr/bin/\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Install marisa.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/s-yata/marisa-trie.git\ncd marisa-trie\nautoreconf -i\n./configure --enable-native-code --prefix=/usr/local/stonedb-marisa\nmake && make install \n")),(0,i.kt)("p",null,"The directories and files shown in the following figure are generated in directory ",(0,i.kt)("strong",{parentName:"p"},"/usr/local/stonedb-marisa"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Here's a picture to add")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install GCC 4.8.5 in an offline manner and configure it to be the default version.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/apt/sources.list\n# Append the image sources to the paths.\ndeb http://dk.archive.ubuntu.com/ubuntu/ xenial main\ndeb http://dk.archive.ubuntu.com/ubuntu/ xenial universe\n# Install GCC 4.8.5.\nsudo apt update\nsudo apt install gcc-4.8\nsudo apt install gcc-4.8-locales\nsudo apt install gcc-4.8-multilib\nsudo apt install gcc-4.8-doc\nsudo apt install g++-4.8\n# Switch the GCC version to 4.8.5.\nupdate-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.8 20\nupdate-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-4.8 20\n# Check the GCC version.\n# gcc --version\ngcc (Ubuntu 4.8.5-4ubuntu2) 4.8.5\nCopyright (C) 2015 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\n# c++ --version\nc++ (Ubuntu 4.8.5-4ubuntu2) 4.8.5\nCopyright (C) 2015 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\n# g++ --version\ng++ (Ubuntu 4.8.5-4ubuntu2) 4.8.5\nCopyright (C) 2015 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Install RocksDB.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/facebook/rocksdb/archive/refs/tags/v4.13.tar.gz\ntar -zxvf v4.13.tar.gz\ncd rocksdb-4.13\nmake shared_lib\nmake install-shared INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\nmake static_lib\nmake install-static INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\n")),(0,i.kt)("p",null,"The directories and files shown in the following figure are generated in directory ",(0,i.kt)("strong",{parentName:"p"},"/usr/local/stonedb-gcc-rocksdb"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Here's a picture to add")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Switch the GCC version back to 7.3.0. Otherwise, errors will be reported.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo rm /usr/bin/gcc\nsudo ln -s /gcc/bin/gcc /usr/bin/gcc\nsudo rm /usr/bin/g++\nsudo ln -s /gcc/bin/g++ /usr/bin/g++\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Install Boost.")),(0,i.kt)("p",null,"Boost can be automatically installed when you execute the ",(0,i.kt)("strong",{parentName:"p"},"stonedb_build.sh")," script stored in directory",(0,i.kt)("strong",{parentName:"p"}," /stonedb2022/scripts"),". The following code shows how to manually install Boost."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tar -zxvf boost_1_66_0.tar.gz\ncd boost_1_66_0\n./bootstrap.sh --prefix=/usr/local/stonedb-boost\n./b2 install --with=all\n")),(0,i.kt)("p",null,"The files and directories shown in the following figure are generated in directory ",(0,i.kt)("strong",{parentName:"p"},"/usr/local/stonedb-boost"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Here's a picture to add")),(0,i.kt)("h3",{id:"3-compile-stonedb"},"3. Compile StoneDB"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Modify script",(0,i.kt)("strong",{parentName:"li"}," stonedb_build.sh"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vim /stonedb2022/scripts/stonedb_build.sh\ncmake ../../ \\\n-DCMAKE_BUILD_TYPE=${build_type} \\\n-DCMAKE_INSTALL_PREFIX=${install_target} \\\n-DMYSQL_DATADIR=${install_target}/data \\\n-DSYSCONFDIR=${install_target} \\\n-DMYSQL_UNIX_ADDR=${install_target}/tmp/mysql.sock \\\n-DWITH_EMBEDDED_SERVER=OFF \\\n-DWITH_STONEDB_STORAGE_ENGINE=1 \\\n-DWITH_MYISAM_STORAGE_ENGINE=1 \\\n-DWITH_INNOBASE_STORAGE_ENGINE=1 \\\n-DWITH_PARTITION_STORAGE_ENGINE=1 \\\n-DMYSQL_TCP_PORT=3306 \\\n-DENABLED_LOCAL_INFILE=1 \\\n-DEXTRA_CHARSETS=all \\\n-DDEFAULT_CHARSET=utf8 \\\n-DDEFAULT_COLLATION=utf8_general_ci \\\n-DDOWNLOAD_BOOST=0 \\\n-DWITH_BOOST=/usr/local/stonedb-boost/include \\\n-DCMAKE_CXX_FLAGS='-D_GLIBCXX_USE_CXX11_ABI=0'\n\ncd /stonedb2022/scripts/\n./stonedb_build.sh\n")),(0,i.kt)("p",null,"After the compilation is complete, directory ",(0,i.kt)("strong",{parentName:"p"},"/stonedb56")," is generated."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Because Boost in this example is manually installed, the value of ",(0,i.kt)("strong",{parentName:"li"},"-DWITH_BOOST")," must be set to ",(0,i.kt)("strong",{parentName:"li"},"/usr/local/stonedb-boost/include"),"."),(0,i.kt)("li",{parentName:"ul"},"For compatibility purposes, ",(0,i.kt)("strong",{parentName:"li"},"-DCMAKE_CXX_FLAGS='-D_GLIBCXX_USE_CXX11_ABI=0")," must be included in the script. Otherwise, an error will be reported when the complication progress reaches 82%.")))),(0,i.kt)("h2",{id:"step-3-start-stonedb"},"Step 3. Start StoneDB"),(0,i.kt)("p",null,"Perform the following steps to start StoneDB."),(0,i.kt)("h3",{id:"1-create-a-user-group-a-user-and-directories"},"1. Create a user group, a user, and directories"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"groupadd mysql\nuseradd -g mysql mysql\nmkdir -p /stonedb56/install/{log/,tmp/,binlog/,data/innodb} && chown -R mysql:mysql /stonedb56\n")),(0,i.kt)("h3",{id:"2-start-stonedb"},"2. Start StoneDB"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"cd /stonedb56/install/bin\n./mysqld_safe --defaults-file=/stonedb56/install/stonedb.cnf --user=mysql &\n")),(0,i.kt)("h3",{id:"3-log-in-to-stonedb"},"3. Log in to StoneDB"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#./mysql -uroot -p -S /stonedb56/install/tmp/mysql.sock\nWarning: Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 1\nServer version: 5.6.24-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| innodb             |\n| test               |\n+--------------------+\n4 rows in set (0.08 sec)\n")))}m.isMDXComponent=!0}}]);