"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[89,103],{9290:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(7294),a=n(6010),l=n(2263),r=n(1944),o=n(5281),c=n(6786),s=n(223),d=n(5999),u=n(2244);function m(e){var t=e.metadata,n=t.previousPage,a=t.nextPage;return i.createElement("nav",{className:"pagination-nav","aria-label":(0,d.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&i.createElement(u.Z,{permalink:n,title:i.createElement(d.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),a&&i.createElement(u.Z,{permalink:a,title:i.createElement(d.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var p=n(197);function g(e){var t=e.metadata,n=(0,l.Z)().siteConfig.title,a=t.blogDescription,o=t.blogTitle,c="/"===t.permalink?n:o;return i.createElement(i.Fragment,null,i.createElement(r.d,{title:c,description:a}),i.createElement(p.Z,{tag:"blog_posts_list"}))}function h(e){var t=e.metadata,n=e.items,a=e.sidebar;return i.createElement(c.Z,{sidebar:a},n.map((function(e){var t=e.content;return i.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},i.createElement(t,null))})),i.createElement(m,{metadata:t}))}function f(e){return i.createElement(r.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},i.createElement(g,e),i.createElement(h,e))}},8824:function(e,t,n){n.d(t,{c:function(){return s}});var i=n(7294),a=n(2263),l=["zero","one","two","few","many","other"];function r(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:r(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,a.Z)().i18n.currentLocale;return(0,i.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:r(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(i){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+i.message+"\n"),o}var t,n}),[e])}function s(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+i.length+": "+e);var a=n.select(t),l=n.pluralForms.indexOf(a);return i[Math.min(l,i.length-1)]}(n,t,e)}}}},6786:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(3366),a=n(7294),l=n(6888),r=n(2125),o=r.ZP.div.withConfig({displayName:"styles__Container",componentId:"sc-1gaaq1l-0"})(["position:relative;display:flex;flex-direction:row;main{padding-right:10px;}@media (max-width:996px){margin:0;margin-top:0;width:100%;max-width:100%;padding:0;main{padding-right:0;}.markdown{> h2,> p{padding:0 var(--ifm-spacing-horizontal);}}}"]),c=r.ZP.div.withConfig({displayName:"styles__Nav",componentId:"sc-1gaaq1l-1"})([""]),s=["sidebar","toc","children"];function d(e){e.sidebar;var t=e.toc,n=e.children,r=(0,i.Z)(e,s);return a.createElement(l.Z,r,a.createElement(o,{className:"container margin-vert--lg"},a.createElement("main",{itemScope:!0,itemType:"http://schema.org/Blog"},n),t&&a.createElement(c,null,t)))}},223:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(7294),a=n(6010),l=n(5999),r=n(9960),o=n(4996),c=n(8824),s=n(8780),d=n(5042),u=n(6114),m=n(6233),p="blogPostDetailsFull_enUA";function g(e){n=(0,c.c)().selectMessage;var t,n,g=(0,o.C)().withBaseUrl,h=e.children,f=e.frontMatter,x=e.assets,w=e.metadata,v=e.truncated,y=e.isBlogPostPage,E=void 0!==y&&y,b=(w.date,w.formattedDate,w.permalink,w.tags),Z=(w.readingTime,w.title),F=w.editUrl,k=(w.authors,null!=(t=x.image)?t:f.image),_=!E&&v,P=b.length>0;return i.createElement("article",{className:E?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},k&&i.createElement("meta",{itemProp:"image",content:g(k,{absolute:!0})}),i.createElement("div",{id:E?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},i.createElement(d.Z,null,h)),(P||v)&&i.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",E&&p)},P&&i.createElement("div",{className:(0,a.Z)("col",{"col--9":_})},i.createElement(m.Z,{tags:b})),E&&F&&i.createElement("div",{className:"col margin-top--sm"},i.createElement(u.Z,{editUrl:F})),_&&i.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":P})},i.createElement(r.Z,{to:w.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:Z})},i.createElement("b",null,i.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4648:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(3366),a=n(7294),l=n(3654),r=n(2263),o=n(2611),c=n(6162),s=["url","children","title"];function d(e){var t=e.url,n=void 0===t?"":t,d=e.children,u=e.title,m=((0,i.Z)(e,s),(0,r.Z)().i18n.currentLocale),p=u&&u.indexOf(":")>=0?(0,l.zGw)((0,l.Vl2)(","),(0,l.UID)((0,l.Vl2)(":")),l.Pen,(0,o.M_)(l.fyY))(u):u?{title:u}:{},g=!!p.icon,h=(0,l.xbD)(p),f="export"===p.type,x="btnMore"===p.type;return p.local=p.local||m,console.log("url",n),a.createElement(a.Fragment,null,h&&m===p.local?a.createElement(c.rU,{to:n},d):null,g&&m===p.local?a.createElement(c.ku,{to:n,icon:p.icon},d):null,f&&m===p.local?a.createElement(c.xP,{to:n},d):null,x&&m===p.local?a.createElement(c.o7,{to:n},d):null)}},9180:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(3366),a=n(7294),l=n(3654),r=n(6162),o=n(2611),c=["className","alt","src","title"];function s(e){var t=e.className,n=e.alt,s=e.src,d=e.title,u=((0,i.Z)(e,c),d&&d.indexOf(":")>=0?(0,l.zGw)((0,l.Vl2)(","),(0,l.UID)((0,l.Vl2)(":")),l.Pen,(0,o.M_)(l.fyY))(d):d?{title:d}:{});return a.createElement(r.Ee,{src:s,className:t,alt:n,to:u.to},a.createElement(r.ZT,{size:20},u.title))}},4502:function(e,t,n){n.d(t,{Z:function(){return U}});var i=n(7294),a=n(3066),l=n(7164),r=n(2861),o=n.n(r),c=n(3654),s=n(5934),d=n(2611),u=n(9180),m=n(3581),p=n(2125),g=p.ZP.div.withConfig({displayName:"styles__Row",componentId:"sc-10csc5s-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:0 -8px;overflow:hidden;position:relative;@media (max-width:996px){margin:0 14px;}"]),h=p.ZP.div.withConfig({displayName:"styles__Col",componentId:"sc-10csc5s-1"})(["width:20%;padding:8px;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;> div{width:100%;height:100%;border-radius:8px;}@media (max-width:996px){width:50%;}"]),f=function(e){var t=e.children,n=(0,i.useState)(null),a=n[0],r=n[1];return(0,i.useEffect)((function(){!function(){var e=(0,l.l)().use(o()).parse(t),n=(0,c.u4g)((function(e,t){return"image"===t.type?e.push(t):t.children&&t.children.length&&(e=e.concat(n([],t.children))),e})),i=(0,d.IC)("image",(function(e,t){return e.push(t),e}),[e]);r(i)}()}),[]),i.createElement(g,null,i.createElement(m.V,{size:5},a&&a.length?a.map((function(e){var t=e.url,n=e.alt,a=e.title;return i.createElement(h,{key:(0,s.Z)()},i.createElement(u.Z,{src:t,alt:n,title:a}))})):null))},x=n(7462),w=n(3366),v=n(4648),y=n(9960),E=p.ZP.div.withConfig({displayName:"styles__LinkList",componentId:"sc-aigwwo-0"})(["margin:0 -10px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;@media (max-width:996px){margin:0;flex-direction:column;}"]),b=((0,p.ZP)(y.Z).withConfig({displayName:"styles__LinkStyle",componentId:"sc-aigwwo-1"})(["margin:10px;height:100px;border-radius:10px;border:1px solid #00A6FB;width:30%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;font-size:22px;color:var(--safe-text-color);padding:20px;span{margin-left:10px;}@media (max-width:996px){width:100%;margin:10px 0;}"]),["children"]),Z=function(e){var t=e.children,n=(0,i.useState)(null),a=n[0],r=n[1];return(0,i.useEffect)((function(){!function(){var e=(0,l.l)().use(o()).parse(t),n=(0,d.IC)("link",(function(e,t){return e.push(t),e}),[e]);r(n)}()}),[]),i.createElement(E,null,a&&a.length&&a.map((function(e){var t=e.children,n=(0,w.Z)(e,b);return i.createElement(v.Z,(0,x.Z)({key:(0,s.Z)()},n),t[0].value)})))},F=n(5124),k=p.ZP.div.withConfig({displayName:"styles__Row",componentId:"sc-18duw7t-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:0 -8px;overflow:hidden;position:relative;@media (max-width:996px){margin:0 14px;}"]),_=p.ZP.div.withConfig({displayName:"styles__Col",componentId:"sc-18duw7t-1"})(["width:50%;padding:8px;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;> div{width:100%;height:100%;border-radius:10px;}@media (max-width:996px){width:100%;}"]),P=p.ZP.h4.withConfig({displayName:"styles__Title",componentId:"sc-18duw7t-2"})(["height:27px;font-size:22px;font-weight:400;color:#FFFFFF;line-height:27px;"]),I=p.ZP.p.withConfig({displayName:"styles__Desc",componentId:"sc-18duw7t-3"})(["height:30px;font-size:16px;font-weight:300;color:#FFFFFF;line-height:30px;"]),C=(0,p.ZP)(y.Z).withConfig({displayName:"styles__LinkStyle",componentId:"sc-18duw7t-4"})(["height:19px;font-size:16px;font-weight:400;color:#FFFFFF;line-height:19px;"]),N=function(e){var t=e.children,n=(0,i.useState)(null),a=n[0],r=n[1];(0,i.useEffect)((function(){!function(){var e=(0,l.l)().use(o()).parse(t),n=(0,d.IC)("listItem",(function(e,t){return e.concat(t.children)}),[e]);r(n)}()}),[]);return i.createElement(k,null,a&&a.length&&a.map((function(e){return function(e){var t,n,a,l=(0,s.Z)(),r="image"===(null==(t=e[0])?void 0:t.type)?e[0]:null,o="text"===(null==(n=e[1])?void 0:n.type)?e[1].value.split("\n"):[],c="link"===(null==(a=e[2])?void 0:a.type)?e[2].url:"";return i.createElement(_,{key:l},r&&r.type?i.createElement(F.E,{src:""},i.createElement(P,null,o[0]),i.createElement(I,null,o[1]),i.createElement(C,{to:c},i.createElement("u",null,"More"))):null)}(e.children)})))},M=n(1262),D=n(7302),z=n(9992),L=p.ZP.div.attrs((function(e){return{width:document.body.clientWidth}})).withConfig({displayName:"styles__SubscribeStyle",componentId:"sc-1qcu86k-0"})(["--ifm-body-width:","px;--ifm-container-right-body:calc("," - var(--ifm-container-width));width:var( --ifm-body-width );height:400px;background-image:url(https://static.stoneatom.com/assets/rc-upload-1652691483537-2_subscribeBg.png);background-repeat:no-repeat;background-position:right center;background-size:100% 100%;margin:60px auto;margin-left:-12%;@media (max-width:996px){width:100%;margin-left:0;background-image:none;height:auto;}"],(function(e){return e.width}),(function(e){return e.width})),T=(0,p.ZP)(D.D.Message).withConfig({displayName:"styles__Message",componentId:"sc-1qcu86k-1"})(["color:#fff;.br{border-color:#fff;min-width:30px;max-width:30px;}@media (max-width:996px){background-color:#00A6FB;padding:var(--ifm-spacing-horizontal);}"]),j=((0,p.ZP)(D.D.Form).withConfig({displayName:"styles__FormStyle",componentId:"sc-1qcu86k-2"})(["width:300px;height:300px;background:#FFFFFF;box-shadow:0px 30px 50px 0px rgba(55,60,67,0.2);border-radius:10px;padding:20px;.ant-btn{width:100%;}"]),(0,p.ZP)(D.D.Tip).withConfig({displayName:"styles__TipStyle",componentId:"sc-1qcu86k-3"})(["width:300px;height:300px;background:#FFFFFF;box-shadow:0px 30px 50px 0px rgba(55,60,67,0.2);border-radius:10px;padding:20px;.ant-btn{width:100%;}@media (max-width:996px){width:92%;height:auto;flex:1;margin-top:-20px;margin-bottom:20px;margin-left:var(--ifm-spacing-horizontal);margin-right:var(--ifm-spacing-horizontal);}"])),S=(0,p.ZP)(z.S).withConfig({displayName:"styles__Doc",componentId:"sc-1qcu86k-4"})(["height:100%;margin-right:-12%;@media (max-width:996px){margin-right:0;}"]),B=p.ZP.div.withConfig({displayName:"styles__Mail",componentId:"sc-1qcu86k-5"})(["height:100%;width:100%;> div:first-child{width:60%;}@media (max-width:996px){> div:first-child{width:100%;}}"]),q=function(){return i.createElement(M.Z,null,(function(){return i.createElement(L,null,i.createElement(S,null,i.createElement(B,null,i.createElement(T,null),i.createElement(j,null))))}))},O=p.ZP.div.withConfig({displayName:"styles__Row",componentId:"sc-1qi3pjs-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;overflow:hidden;position:relative;margin:10px -20px;"]),R=p.ZP.div.withConfig({displayName:"styles__Col",componentId:"sc-1qi3pjs-1"})(["width:50%;padding:0 20px;padding-left:30px;"]),A={"language-custom-eventList":N,"language-custom-subscribe":q,"language-custom-joinList":Z,"language-custom-teamList":f,"language-custom-docLinksList":function(e){var t=e.children,n=(0,i.useState)(null),a=n[0],r=n[1];return(0,i.useEffect)((function(){!function(){var e=(0,l.l)().use(o()).parse(t),n=(0,d.IC)("list",(function(e,t){var n=(0,d.IC)("listItem",(function(e,t){var n=[],i=t.children.filter((function(e){return"paragraph"===e.type})),a=t.children.filter((function(e){return"list"===e.type}));if((null==i?void 0:i.length)===(null==a?void 0:a.length)&&1===(null==a?void 0:a.length)){var l,r=null==(l=i[0])?void 0:l.children[0];n.push(Object.assign({},r,{text:r.children[0].value,children:(0,d.IC)("paragraph",(function(e,t){return e.concat(t.children)}),a)}))}else n=t.children;return e.concat(n)}),t.children);return e.concat(n)}),[e]);r(n)}()}),[]),i.createElement(O,null,a&&a.length&&a.map((function(e){var t=e.children,n=e.text,a=e.url,l=e.title;return i.createElement(R,{key:(0,s.Z)()},i.createElement(v.Z,{to:a,title:l},n),i.createElement(O,null,t&&t.length&&t.map((function(e){var t=e.children,n=e.url,a=e.title;return i.createElement(R,{key:(0,s.Z)()},i.createElement(v.Z,{to:n,title:a},t[0].value))}))))})))}};function U(e){var t,n=e.children.props,l=n.children,r=n.className,o=n.originalType,c=r.indexOf("custom")<0,s=A[r];return i.createElement(i.Fragment,null,c?i.createElement(a.Z,(0,i.isValidElement)(e.children)&&"code"===o?null==(t=e.children)?void 0:t.props:Object.assign({},e)):i.createElement(s,null,l))}},962:function(e,t,n){var i=n(3075),a=n(9180),l=n(4648),r=n(4502),o=Object.assign({},i.Z,{img:a.Z,a:l.Z,pre:r.Z});t.Z=o}}]);