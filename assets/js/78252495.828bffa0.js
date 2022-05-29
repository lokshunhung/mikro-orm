"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11032],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(83117),a=n(67294),o=n(86010),i=n(72389),s=n(67392),l=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,h=e.values,b=e.groupId,g=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.l)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=(0,l.U)(),N=_.tabGroupChoices,w=_.setTabGroupChoices,x=(0,a.useState)(v),E=x[0],B=x[1],T=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var O=N[b];null!=O&&O!==E&&f.some((function(e){return e.value===O}))&&B(O)}var A=function(e){var t=e.currentTarget,n=T.indexOf(t),r=f[n].value;r!==E&&(j(t),B(r),null!=b&&w(b,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var o,i=T.indexOf(e.currentTarget)-1;n=null!=(o=T[i])?o:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:A,onClick:A},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(y.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},8226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(65488),s=n(85162),l=["components"],u={title:"Virtual Entities"},c=void 0,p={unversionedId:"virtual-entities",id:"virtual-entities",title:"Virtual Entities",description:"Virtual entities don't represent any database table. Instead, they dynamically resolve to an SQL query (or an aggregation in mongo), allowing to map any kind of results onto an entity. Such entities are mean for read purposes, they don't have a primary key and therefore cannot be tracked for changes. In a sense they are similar to (currently unsupported) database views.",source:"@site/docs/virtual-entities.md",sourceDirName:".",slug:"/virtual-entities",permalink:"/docs/next/virtual-entities",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/virtual-entities.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1666214802,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{title:"Virtual Entities"},sidebar:"docs",previous:{title:"Custom Types",permalink:"/docs/next/custom-types"},next:{title:"Embeddables",permalink:"/docs/next/embeddables"}},m={},d=[],h={toc:d};function b(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Virtual entities don't represent any database table. Instead, they dynamically resolve to an SQL query (or an aggregation in mongo), allowing to map any kind of results onto an entity. Such entities are mean for read purposes, they don't have a primary key and therefore cannot be tracked for changes. In a sense they are similar to (currently unsupported) database views. "),(0,o.kt)("p",null,"To define a virtual entity, provide an ",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),", either as a string (SQL query):"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We need to use the virtual column names based on current naming strategy. Note the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorName")," property being represented as ",(0,o.kt)("inlineCode",{parentName:"p"},"author_name")," column.")),(0,o.kt)(i.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/BookWithAuthor.ts"',title:'"./entities/BookWithAuthor.ts"'},"@Entity({\n  expression: 'select name, age, ' +\n    '(select count(*) from book b where b.author_id = a.id) as total_books, ' +\n    '(select group_concat(distinct t.name) from book b ' +\n      'join tags_ordered bt on bt.book_id = b.id ' +\n      'join book_tag t on t.id = bt.book_tag_id ' +\n      'where b.author_id = a.id ' +\n      'group by b.author_id) as used_tags ' +\n    'from author a group by a.id',\n})\nexport class BookWithAuthor {\n\n  @Property()\n  title!: string;\n\n  @Property()\n  authorName!: string;\n\n  @Property()\n  tags!: string[];\n\n}\n"))),(0,o.kt)(s.Z,{value:"ts-morph",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/BookWithAuthor.ts"',title:'"./entities/BookWithAuthor.ts"'},"@Entity({\n  expression: 'select name, age, ' +\n    '(select count(*) from book b where b.author_id = a.id) as total_books, ' +\n    '(select group_concat(distinct t.name) from book b ' +\n      'join tags_ordered bt on bt.book_id = b.id ' +\n      'join book_tag t on t.id = bt.book_tag_id ' +\n      'where b.author_id = a.id ' +\n      'group by b.author_id) as used_tags ' +\n    'from author a group by a.id',\n})\nexport class BookWithAuthor {\n\n  @Property()\n  title!: string;\n\n  @Property()\n  authorName!: string;\n\n  @Property()\n  tags!: string[];\n\n}\n"))),(0,o.kt)(s.Z,{value:"entity-schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/BookWithAuthor.ts"',title:'"./entities/BookWithAuthor.ts"'},"export interface IBookWithAuthor{\n  title: string;\n  authorName: string;\n  tags: string[];\n}\n\nexport const BookWithAuthor = new EntitySchema<IBookWithAuthor>({ \n  name: 'BookWithAuthor',\n  expression: 'select name, age, ' +\n    '(select count(*) from book b where b.author_id = a.id) as total_books, ' +\n    '(select group_concat(distinct t.name) from book b ' +\n    'join tags_ordered bt on bt.book_id = b.id ' +\n    'join book_tag t on t.id = bt.book_tag_id ' +\n    'where b.author_id = a.id ' +\n    'group by b.author_id) as used_tags ' +\n    'from author a group by a.id',\n  properties: {\n    title: { type: 'string' },\n    authorName: { type: 'string' },\n    tags: { type: 'string[]' },\n  },\n});\n")))),(0,o.kt)("p",null,"Or as a callback:"),(0,o.kt)(i.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/BookWithAuthor.ts"',title:'"./entities/BookWithAuthor.ts"'},"@Entity({\n  expression: (em: EntityManager) => {\n    return em.createQueryBuilder(Book, 'b')\n      .select(['b.title', 'a.name as author_name', 'group_concat(t.name) as tags'])\n      .join('b.author', 'a')\n      .join('b.tags', 't')\n      .groupBy('b.id');\n  },\n})\nexport class BookWithAuthor {\n\n  @Property()\n  title!: string;\n\n  @Property()\n  authorName!: string;\n\n  @Property()\n  tags!: string[];\n\n}\n"))),(0,o.kt)(s.Z,{value:"ts-morph",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/BookWithAuthor.ts"',title:'"./entities/BookWithAuthor.ts"'},"@Entity({\n  expression: (em: EntityManager) => {\n    return em.createQueryBuilder(Book, 'b')\n      .select(['b.title', 'a.name as author_name', 'group_concat(t.name) as tags'])\n      .join('b.author', 'a')\n      .join('b.tags', 't')\n      .groupBy('b.id');\n  },\n})\nexport class BookWithAuthor {\n\n  @Property()\n  title!: string;\n\n  @Property()\n  authorName!: string;\n\n  @Property()\n  tags!: string[];\n\n}\n"))),(0,o.kt)(s.Z,{value:"entity-schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/BookWithAuthor.ts"',title:'"./entities/BookWithAuthor.ts"'},"export interface IBookWithAuthor{\n  title: string;\n  authorName: string;\n  tags: string[];\n}\n\nexport const BookWithAuthor = new EntitySchema<IBookWithAuthor>({\n  name: 'BookWithAuthor',\n  expression: (em: EntityManager) => {\n    return em.createQueryBuilder(Book, 'b')\n      .select(['b.title', 'a.name as author_name', 'group_concat(t.name) as tags'])\n      .join('b.author', 'a')\n      .join('b.tags', 't')\n      .groupBy('b.id');\n  },\n  properties: {\n    title: { type: 'string' },\n    authorName: { type: 'string' },\n    tags: { type: 'string[]' },\n  },\n});\n")))),(0,o.kt)("p",null,"In MongoDB, we can use aggregations, although it is not very ergonomic due to their nature. Following example is a rough equivalent of the previous SQL ones."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," query as well as the options like ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," needs to be explicitly handled in your pipeline.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({\n  expression: (em: EntityManager, where, options) => {\n    const $sort = { ...options.orderBy } as Dictionary;\n    $sort._id = 1;\n    const pipeline: Dictionary[] = [\n      { $project: { _id: 0, title: 1, author: 1 } },\n      { $sort },\n      { $match: where ?? {} },\n      { $lookup: { from: 'author', localField: 'author', foreignField: '_id', as: 'author', pipeline: [{ $project: { name: 1 } }] } },\n      { $unwind: '$author' },\n      { $set: { authorName: '$author.name' } },\n      { $unset: ['author'] },\n    ];\n\n    if (options.offset != null) {\n      pipeline.push({ $skip: options.offset });\n    }\n\n    if (options.limit != null) {\n      pipeline.push({ $limit: options.limit });\n    }\n\n    return em.aggregate(Book, pipeline);\n  },\n})\nexport class BookWithAuthor {\n\n  @Property()\n  title!: string;\n\n  @Property()\n  authorName!: string;\n\n}\n")))}b.isMDXComponent=!0}}]);