"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62432],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(r),d=o,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var m=2;m<i;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},72782:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],s={title:"Using MikroORM with NestJS framework",sidebar_label:"Usage with NestJS"},l=void 0,m={unversionedId:"usage-with-nestjs",id:"version-3.6/usage-with-nestjs",title:"Using MikroORM with NestJS framework",description:"Installation",source:"@site/versioned_docs/version-3.6/usage-with-nestjs.md",sourceDirName:".",slug:"/usage-with-nestjs",permalink:"/docs/3.6/usage-with-nestjs",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/usage-with-nestjs.md",tags:[],version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1666214802,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{title:"Using MikroORM with NestJS framework",sidebar_label:"Usage with NestJS"},sidebar:"version-3.6/docs",previous:{title:"Usage with MongoDB",permalink:"/docs/3.6/usage-with-mongo"},next:{title:"Usage with Vanilla JS",permalink:"/docs/3.6/usage-with-js"}},p={},u=[{value:"Installation",id:"installation",level:2}],c={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Easiest way to integrate MikroORM to Nest is via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dario1985/nestjs-mikro-orm"},(0,i.kt)("inlineCode",{parentName:"a"},"nestjs-mikro-orm")," module"),".\nSimply install it next to Nest, MikroORM and underlying driver: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add mikro-orm nestjs-mikro-orm mongodb # for mongo\n$ yarn add mikro-orm nestjs-mikro-orm mysql2  # for mysql\n$ yarn add mikro-orm nestjs-mikro-orm pg      # for postgre\n$ yarn add mikro-orm nestjs-mikro-orm sqlite3 # for sqlite\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm i -s mikro-orm nestjs-mikro-orm mongodb # for mongo\n$ npm i -s mikro-orm nestjs-mikro-orm mysql2  # for mysql\n$ npm i -s mikro-orm nestjs-mikro-orm pg      # for postgre\n$ npm i -s mikro-orm nestjs-mikro-orm sqlite3 # for sqlite\n")),(0,i.kt)("p",null,"Then import the ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroOrmModule")," in your top level module (usually called ",(0,i.kt)("inlineCode",{parentName:"p"},"AppModule"),") via\n",(0,i.kt)("inlineCode",{parentName:"p"},"forRoot()"),", which will register ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager")," services. It will also\ncreate the request context for you automatically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      entitiesDirs: ['dist/entities'],\n      entitiesDirsTs: ['src/entities'],\n      dbName: 'my-db-name.sqlite3',\n      type: 'sqlite',\n      autoFlush: false, // read more here: https://mikro-orm.io/unit-of-work/\n    }),\n    // ... your feature modules\n  ],\n})\nexport class AppModule {}\n")),(0,i.kt)("p",null,"Then use ",(0,i.kt)("inlineCode",{parentName:"p"},"forFeature()")," to register entity repositories at feature module level:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [MikroOrmModule.forFeature({ entities: [Photo] })],\n  providers: [PhotoService],\n  controllers: [PhotoController],\n})\nexport class PhotoModule {}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Don't forget to import the feature module in your top level module.")))}d.isMDXComponent=!0}}]);