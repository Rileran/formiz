(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(e,t,a){var n=a(18);n(n.S+n.F,"Object",{assign:a(605)})},170:function(e,t){t.f=Object.getOwnPropertySymbols},602:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(617),o=a(177),l=a(159),i=a(169),s="",u="dark",d=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),o(s)}),[]),d=Object(n.useCallback)((function(){c(u),o(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?u:s)}))}),[]),{isDarkTheme:r===u,setLightTheme:i,setDarkTheme:d}},h=a(620);var m=function(e){var t=d(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(h.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},f=(a(163),a(604),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign(Object.assign({},a),{},((n={})[e]=t,n))})),r(e,t)}}}),b=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var v=function(e){var t=f(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(b.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},g=a(128),p=a.n(g);var k=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,o=a.content,i=a.backgroundColor,s=a.textColor,u=Object(n.useState)(!0),d=u[0],h=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&h(!1)}),[]),!o||d?null:r.a.createElement("div",{className:p.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:p.a.announcementBarContent,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("button",{type:"button",className:p.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),h(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},E=a(1),_=a(9),O=a(160),j=a.n(O),y=a(171),C=(a(57),a(25),a(20),a(21),a(74),a(606)),N=(a(129),function(e){var t=Object(n.useState)(!1),c=t[0],o=t[1],i=Object(n.useRef)(null),s=Object(l.a)().siteConfig,u=(void 0===s?{}:s).themeConfig.algolia,d=Object(C.b)();var h=function(e){void 0===e&&(e=!0),c||Promise.all([a.e(21).then(a.t.bind(null,726,7)),a.e(14).then(a.t.bind(null,727,7))]).then((function(t){var a=t[0].default;o(!0),window.docsearch=a,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;d.push(r)}}),e&&i.current.focus()}(e)}))},m=Object(n.useCallback)((function(){h(),c&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),f=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),b=Object(n.useCallback)((function(e){var t="mouseover"!==e.type;h(t)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:j()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:j()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:b,onFocus:b,onBlur:f,ref:i}))}),w=a(642),S=a.n(w),T=a(130),x=a.n(T),B=function(){return r.a.createElement("span",{className:j()(x.a.toggle,x.a.moon)})},L=function(){return r.a.createElement("span",{className:j()(x.a.toggle,x.a.sun)})},M=function(e){var t=Object(l.a)().isClient;return r.a.createElement(S.a,Object(E.a)({disabled:!t,icons:{checked:r.a.createElement(B,null),unchecked:r.a.createElement(L,null)}},e))},D=a(607);var I=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},P=a(16),X=a.n(P),F=function(){return{scrollX:X.a.canUseDOM?window.pageXOffset:0,scrollY:X.a.canUseDOM?window.pageYOffset:0}},G=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(F()),r=a[0],c=a[1],o=function(){var t=F();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o,{passive:!0})}}),t),r},A=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],l=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),h=d[0],m=d[1],f=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),b=Object(C.c)(),v=I(b.hash),g=v[0],p=v[1];return G((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<h))){if(o)return l(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-h,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),u(a)}}),[s,h]),Object(n.useEffect)((function(){e&&(r(!0),p(b.hash))}),[b]),Object(n.useEffect)((function(){e&&g&&l(!0)}),[g]),{navbarRef:f,isNavbarVisible:a}},H=a(621),R=a(622),U=a(131),K=a.n(U);function Y(e){var t=e.activeBasePath,a=e.to,n=e.href,c=e.label,o=e.activeClassName,l=void 0===o?"navbar__link--active":o,s=Object(_.a)(e,["activeBasePath","to","href","label","activeClassName"]),u=Object(i.a)(a),d=Object(i.a)(t);return r.a.createElement(y.a,Object(E.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:n}:Object.assign({isNavLink:!0,activeClassName:l,to:u},t?{isActive:function(e,t){return t.pathname.startsWith(d)}}:null),s),c)}function V(e){var t=e.items,a=e.position,n=e.className,c=Object(_.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),j()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:j()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(Y,Object(E.a)({className:o(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(_.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(Y,Object(E.a)({activeClassName:"dropdown__link--active",className:o(a,!0)},n)))})))):r.a.createElement(Y,Object(E.a)({className:o(n)},c))}function W(e){var t=e.items,a=e.className,n=Object(_.a)(e,["items","className"]),c=function(e,t){return void 0===t&&(t=!1),j()("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(E.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,o=Object(_.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(Y,Object(E.a)({activeClassName:"menu__link--active",className:c(a)},o,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(Y,Object(E.a)({className:c(a)},n)))}var J=function(){var e,t,a=Object(l.a)(),c=a.siteConfig.themeConfig,o=c.navbar,i=(o=void 0===o?{}:o).title,s=o.links,u=void 0===s?[]:s,d=o.hideOnScroll,h=void 0!==d&&d,m=c.disableDarkMode,f=void 0!==m&&m,b=a.isClient,v=Object(n.useState)(!1),g=v[0],p=v[1],k=Object(n.useState)(!1),_=k[0],O=k[1],C=Object(D.a)(),w=C.isDarkTheme,S=C.setLightTheme,T=C.setDarkTheme,x=A(h),B=x.navbarRef,L=x.isNavbarVisible,I=Object(R.a)(),P=I.logoLink,X=I.logoLinkProps,F=I.logoImageUrl,G=I.logoAlt;Object(H.a)(g);var U=Object(n.useCallback)((function(){p(!0)}),[p]),Y=Object(n.useCallback)((function(){p(!1)}),[p]),J=Object(n.useCallback)((function(e){return e.target.checked?T():S()}),[S,T]);return r.a.createElement("nav",{ref:B,className:j()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":g},e[K.a.navbarHideable]=h,e[K.a.navbarHidden]=!L,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(y.a,Object(E.a)({className:"navbar__brand",to:P},X),null!=F&&r.a.createElement("img",{key:b,className:"navbar__logo",src:F,alt:G}),null!=i&&r.a.createElement("strong",{className:j()("navbar__title",(t={},t[K.a.hideLogoText]=_,t))},i)),u.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(V,Object(E.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},u.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(V,Object(E.a)({},e,{key:t}))})),!f&&r.a.createElement(M,{className:K.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:w,onChange:J}),r.a.createElement(N,{handleSearchBarToggle:O,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(y.a,Object(E.a)({className:"navbar__brand",onClick:Y,to:P},X),null!=F&&r.a.createElement("img",{key:b,className:"navbar__logo",src:F,alt:G}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!f&&g&&r.a.createElement(M,{"aria-label":"Dark mode toggle in sidebar",checked:w,onChange:J})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(W,Object(E.a)({},e,{onClick:Y,key:t}))})))))))},q=a(132),z=a.n(q);function Q(e){var t=e.to,a=e.href,n=e.label,c=Object(_.a)(e,["to","href","label"]),o=Object(i.a)(t);return r.a.createElement(y.a,Object(E.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:o},c),n)}var Z=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var $=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,o=n.links,s=void 0===o?[]:o,u=n.logo,d=void 0===u?{}:u,h=Object(i.a)(d.src);return a?r.a.createElement("footer",{className:j()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(Q,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:z.a.footerLogoLink},r.a.createElement(Z,{alt:d.alt,url:h})):r.a.createElement(Z,{alt:d.alt,url:h})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(133);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,u=a.themeConfig.image,d=a.url,h=e.children,f=e.title,b=e.noFooter,g=e.description,p=e.image,E=e.keywords,_=e.permalink,O=e.version,j=f?f+" | "+s:s,y=p||u,C=d+Object(i.a)(y);Object(o.a)(y)||(C=y);var N=Object(i.a)(n);return r.a.createElement(m,null,r.a.createElement(v,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),j&&r.a.createElement("title",null,j),j&&r.a.createElement("meta",{property:"og:title",content:j}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:C}),y&&r.a.createElement("meta",{property:"twitter:image",content:C}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),_&&r.a.createElement("meta",{property:"og:url",content:d+_}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(k,null),r.a.createElement(J,null),r.a.createElement("div",{className:"main-wrapper"},h),!b&&r.a.createElement($,null)))}},605:function(e,t,a){"use strict";var n=a(12),r=a(29),c=a(170),o=a(72),l=a(51),i=a(77),s=Object.assign;e.exports=!s||a(19)((function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach((function(e){t[e]=e})),7!=s({},e)[a]||Object.keys(s({},t)).join("")!=n}))?function(e,t){for(var a=l(e),s=arguments.length,u=1,d=c.f,h=o.f;s>u;)for(var m,f=i(arguments[u++]),b=d?r(f).concat(d(f)):r(f),v=b.length,g=0;v>g;)m=b[g++],n&&!h.call(f,m)||(a[m]=f[m]);return a}:s},606:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},607:function(e,t,a){"use strict";var n=a(0),r=a(620);t.a=function(){return Object(n.useContext)(r.a)}},620:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},621:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},622:function(e,t,a){"use strict";var n=a(159),r=a(607),c=a(169),o=a(177);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,l=(a=void 0===a?{}:a).logo,i=void 0===l?{}:l,s=Object(r.a)().isDarkTheme,u=i.href||t,d={};i.target?d={target:i.target}:Object(o.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var h=i.srcDark&&s?i.srcDark:i.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(h),logoAlt:i.alt}}},642:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=h(c),l=h(a(160)),i=h(a(11)),s=h(a(643)),u=h(a(644)),d=a(645);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},643:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);