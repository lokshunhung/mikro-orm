"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65718],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93713:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],c={title:"Read Replica Connections"},s=void 0,l={unversionedId:"read-connections",id:"read-connections",title:"Read Replica Connections",description:"Users can specify multiple read connections via replicas option. You can provide only fields",source:"@site/docs/read-connections.md",sourceDirName:".",slug:"/read-connections",permalink:"/docs/next/read-connections",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/read-connections.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1666214802,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{title:"Read Replica Connections"},sidebar:"docs",previous:{title:"Seeding",permalink:"/docs/next/seeding"},next:{title:"Reference",permalink:"/docs/next/reference"}},p={},u=[],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Users can specify multiple read connections via ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," option. You can provide only fields\nthat differ from master connection, rest will be taken from it."),(0,i.kt)("p",null,"When resolving read connections, the default strategy is to assign random read replicas for all\nread operations (SELECT, COUNT) that are not running inside a transaction."),(0,i.kt)("p",null,"You can specify an explicit connection type for find and count operations by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"connectionType"),"\nproperty on the corresponding Options argument (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"FindOptions"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CountOptions"),")."),(0,i.kt)("p",null,"The connection resolution strategy can be also inverted by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"preferReadReplicas")," configuration property\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," so that the default connection will always be a write connection, unless explicitly requested to be read\n(can be useful in applications where read-replicas are available but should only be used for specific use-cases)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const orm = await MikroORM.init({\n  entities: [Author, ...],\n  dbName: `my_database`,\n  type: 'mysql',\n  user: 'master_user',\n  host: 'master_host',\n  preferReadReplicas: true, // optional property, defaults to true\n  replicas: [\n    { name: 'read-1', host: 'read_host_1', user: 'read_user' },\n    { name: 'read-2', host: 'read_host_2' }, // user omitted, will be taken from master connection\n  ],\n});\n")),(0,i.kt)("p",null,"By default, select queries will use random read connection if not inside transaction. You can\nspecify the connection type explicitly in ",(0,i.kt)("inlineCode",{parentName:"p"},"em.getConnection(type: 'read' | 'write')"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const connection = em.getConnection(); // write connection\nconst readConnection = em.getConnection('read'); // random read connection\n\nconst qb1 = em.createQueryBuilder(Author);\nconst res1 = await qb1.select('*').execute(); // random read connection\n\nconst qb2 = em.createQueryBuilder(Author, 'a', 'write');\nconst res2 = await qb2.select('*').execute(); // write connection\n\nconst qb3 = em.createQueryBuilder(Author);\nconst res3 = await qb3.update(...).where(...).execute(); // write connection\n\nconst res4 = await em.findOne(Author, 1, { connectionType: 'write' }); // explicit write connection\n\n// all queries inside a transaction will use write connection\nawait em.transactional(async em => {\n    const a = await em.findOne(Author, 1); // write connection\n    const b = await em.findOne(Author, 1, { connectionType: 'read' }); // still a write connection - we are in a transaction\n    a.name = 'test'; // will trigger update on write connection once flushed\n});\n\n// given a configuration where preferReadReplicas: false\nconst res5 = await em.findOne(Author, 1); // write connection - even for a read operation\nconst res6 = await em.findOne(Author, 1, { connectionType: 'read' }); // unless explicitly asking for a read replica\n")))}f.isMDXComponent=!0}}]);