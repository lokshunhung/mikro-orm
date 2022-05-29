"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27918],{31986:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(83117),r=n(67294),l=n(86010),i=n(35281),c=n(24575),o=n(48596),s=n(39960),d=n(44996),u=n(95999);function m(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function f(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?r.createElement("span",{className:a,itemProp:"name"},t):n?r.createElement(s.default,{className:a,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:a},t)}function b(e){var t=e.children,n=e.active,i=e.index,c=e.addMicrodata;return r.createElement("li",(0,a.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function h(){var e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(s.default,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},r.createElement(m,{className:v.breadcrumbHomeIcon})))}function p(){var e=(0,c.s1)(),t=(0,o.Ns)();return e?r.createElement("nav",{className:(0,l.Z)(i.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(h,null),e.map((function(t,n){var a=n===e.length-1;return r.createElement(b,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(f,{href:t.href,isLast:a},t.label))})))):null}},16291:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a=n(67294),r=n(10833),l=n(65130);function i(){var e,t=(0,l.k)(),n=t.metadata,i=t.frontMatter,c=t.assets;return a.createElement(r.d,{title:n.title,description:n.description,keywords:i.keywords,image:null!=(e=c.image)?e:i.image})}var c=n(86010),o=n(87524),s=n(80049);function d(){var e=(0,l.k)().metadata;return a.createElement(s.default,{previous:e.previous,next:e.next})}var u=n(23120),m=n(44364),v=n(35281),f=n(95999);function b(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(f.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function h(e){var t=e.lastUpdatedBy;return a.createElement(f.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function p(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:v.k.common.lastUpdated},a.createElement(f.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(h,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var g=n(84881),E=n(71526),L="lastUpdated_vwxv";function N(e){return a.createElement("div",{className:(0,c.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(E.Z,e)))}function k(e){var t=e.editUrl,n=e.lastUpdatedAt,r=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,c.Z)(v.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(g.Z,{editUrl:t})),a.createElement("div",{className:(0,c.Z)("col",L)},(n||r)&&a.createElement(p,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function Z(){var e=(0,l.k)().metadata,t=e.editUrl,n=e.lastUpdatedAt,r=e.formattedLastUpdatedAt,i=e.lastUpdatedBy,o=e.tags,s=o.length>0,d=!!(t||n||i);return s||d?a.createElement("footer",{className:(0,c.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(N,{tags:o}),d&&a.createElement(k,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,formattedLastUpdatedAt:r})):null}var _=n(69286),C="tocMobile_ITEo";function T(){var e=(0,l.k)(),t=e.toc,n=e.frontMatter;return a.createElement(_.default,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,c.Z)(v.k.docs.docTocMobile,C)})}var x=n(39407);function H(){var e=(0,l.k)(),t=e.toc,n=e.frontMatter;return a.createElement(x.default,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var U=n(92503),y=n(45042);function A(e){var t,n,r,i,o=e.children,s=(t=(0,l.k)(),n=t.metadata,r=t.frontMatter,i=t.contentTitle,r.hide_title||void 0!==i?null:n.title);return a.createElement("div",{className:(0,c.Z)(v.k.docs.docMarkdown,"markdown")},s&&a.createElement("header",null,a.createElement(U.default,{as:"h1"},s)),a.createElement(y.default,null,o))}var w=n(31986),M="docItemContainer_Djhp",I="docItemCol_VOVn";function B(e){var t,n,r,i,s,v,f=e.children,b=(t=(0,l.k)(),n=t.frontMatter,r=t.toc,i=(0,o.i)(),s=n.hide_table_of_contents,v=!s&&r.length>0,{hidden:s,mobile:v?a.createElement(T,null):void 0,desktop:!v||"desktop"!==i&&"ssr"!==i?void 0:a.createElement(H,null)});return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,c.Z)("col",!b.hidden&&I)},a.createElement(u.Z,null),a.createElement("div",{className:M},a.createElement("article",null,a.createElement(w.default,null),a.createElement(m.default,null),b.mobile,a.createElement(A,null,f),a.createElement(Z,null)),a.createElement(d,null))),b.desktop&&a.createElement("div",{className:"col col--3"},b.desktop))}function O(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,n=e.content;return a.createElement(l.b,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(i,null),a.createElement(B,null,a.createElement(n,null))))}},80049:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(83117),r=n(67294),l=n(95999),i=n(32244);function c(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(i.Z,(0,a.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(i.Z,(0,a.Z)({},n,{subLabel:r.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(67294),r=n(86010),l=n(95999),i=n(35281),c=n(74477);function o(e){var t=e.className,n=(0,c.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},23120:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(67294),r=n(86010),l=n(52263),i=n(39960),c=n(95999),o=n(80143),s=n(35281),d=n(60373),u=n(74477);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.default,{to:n,onClick:r},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,n=e.className,i=e.versionMetadata,c=(0,l.default)().siteConfig.title,u=(0,o.useActivePlugin)({failfast:!0}).pluginId,m=(0,d.J)(u).savePreferredVersionName,b=(0,o.useDocVersionSuggestions)(u),h=b.latestDocSuggestion,p=b.latestVersionSuggestion,g=null!=h?h:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:c,versionMetadata:i})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:p.label,to:g.path,onClick:function(){return m(p.name)}})))}function h(e){var t=e.className,n=(0,u.E)();return n.banner?a.createElement(b,{className:t,versionMetadata:n}):null}},84881:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(67294),r=n(95999),l=n(35281),i=n(83117),c=n(80102),o=n(86010),s="iconEdit_Z9Sw",d=["className"];function u(e){var t=e.className,n=(0,c.Z)(e,d);return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},a.createElement(u,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39407:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(83117),r=n(80102),l=n(67294),i=n(86010),c=n(38011),o="tableOfContents_bqdL",s=["className"];function d(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(c.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},69286:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(67294),r=n(86010),l=n(86043),i=n(38011),c=n(83117),o=n(80102),s=n(95999),d="tocCollapsibleButton_TO0P",u="tocCollapsibleButtonExpanded_MG3E",m=["collapsed"];function v(e){var t=e.collapsed,n=(0,o.Z)(e,m);return a.createElement("button",(0,c.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",d,!t&&u,n.className)}),a.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var f="tocCollapsible_ETCw",b="tocCollapsibleContent_vkbj",h="tocCollapsibleExpanded_sAul";function p(e){var t=e.toc,n=e.className,c=e.minHeadingLevel,o=e.maxHeadingLevel,s=(0,l.u)({initialState:!0}),d=s.collapsed,u=s.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(f,!d&&h,n)},a.createElement(v,{collapsed:d,onClick:u}),a.createElement(l.z,{lazy:!0,className:b,collapsed:d},a.createElement(i.Z,{toc:t,minHeadingLevel:c,maxHeadingLevel:o})))}},38011:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),r=n(80102),l=n(67294),i=n(86668),c=n(39665),o=n(96841);function s(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var d=l.memo(s),u=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,v=void 0===m?"table-of-contents__link":m,f=e.linkActiveClassName,b=void 0===f?void 0:f,h=e.minHeadingLevel,p=e.maxHeadingLevel,g=(0,r.Z)(e,u),E=(0,i.L)(),L=null!=h?h:E.tableOfContents.minHeadingLevel,N=null!=p?p:E.tableOfContents.maxHeadingLevel,k=(0,c.b)({toc:t,minHeadingLevel:L,maxHeadingLevel:N}),Z=(0,l.useMemo)((function(){if(v&&b)return{linkClassName:v,linkActiveClassName:b,minHeadingLevel:L,maxHeadingLevel:N}}),[v,b,L,N]);return(0,o.S)(Z),l.createElement(d,(0,a.Z)({toc:k,className:s,linkClassName:v},g))}},13008:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),l=n(39960),i="tag_zVej",c="tagRegular_sFm0",o="tagWithCount_h2kH";function s(e){var t=e.permalink,n=e.label,s=e.count;return a.createElement(l.default,{href:t,className:(0,r.Z)(i,s?o:c)},n,s&&a.createElement("span",null,s))}},71526:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),l=n(95999),i=n(13008),c="tags_jXut",o="tag_QGVx";function s(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:o},a.createElement(i.Z,{label:t,permalink:n}))}))))}},65130:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return c}});var a=n(67294),r=n(44700),l=a.createContext(null);function i(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(l.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocProvider");return e}},96841:function(e,t,n){n.d(t,{S:function(){return o}});var a=n(67294),r=n(86668);function l(e){var t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function i(e,t){var n,a,r=t.anchorTopOffset,i=e.find((function(e){return l(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(n=e[e.length-1])?n:null}function c(){var e=(0,a.useRef)(0),t=(0,r.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function o(e){var t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,c=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:c}),s=i(o,{anchorTopOffset:n.current}),d=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}},39665:function(e,t,n){n.d(t,{a:function(){return c},b:function(){return s}});var a=n(80102),r=n(67294),l=["parentIndex"];function i(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,a.Z)(e,l);n>=0?t[n].children.push(i):r.push(i)})),r}function c(e){return(0,r.useMemo)((function(){return i(e)}),[e])}function o(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function s(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}}}]);