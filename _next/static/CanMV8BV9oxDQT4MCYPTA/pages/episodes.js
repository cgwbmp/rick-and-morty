(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"54NR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/episodes",function(){return n("sHdB")}])},Ac47:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("aph7"),s=n.n(o),i=a.a.createElement;t.a=function(e){var t=e.children;return i("div",{className:s.a.layout},i("header",{className:s.a.header},i("h1",{className:s.a.title},"Welcome to The Rick and Morty Wiki!")),t)}},"M/EI":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("fFmY"),s=n.n(o),i=a.a.createElement,c=function(e){var t=e.children;return i("div",{className:s.a.item},t)};n.d(t,"a",function(){return c});var u=a.a.createElement;t.b=function(e){var t=e.children,n=e.vertical,r=void 0!==n&&n;return u("section",{className:[s.a.grid,r?s.a.vertical:s.a.horisontal].join(" ")},t)}},OEnS:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),s=n.n(o),i=n("xidl"),c=n.n(i),u=a.a.createElement;function p(e,t){return t===e?c.a.active:""}t.a=function(e){var t=e.currentPath;return u("nav",{className:c.a.menu},u("ul",{className:c.a.list},u("li",{className:[c.a.item,p("/episodes",t)].join(" ")},u(s.a,{href:"/episodes"},u("a",{className:c.a.link},"Episodes"))),u("li",{className:[c.a.item,p("/characters",t)].join(" ")},u(s.a,{href:"/characters"},u("a",{className:c.a.link},"Characters")))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),a=n("WaGi"),o=n("ZDA2"),s=n("/+P4"),i=n("N9n2"),c=n("5Uuq"),u=n("KI45");t.__esModule=!0,t.default=void 0;var p,l=u(n("LX0d")),f=n("CxY0"),h=c(n("q1tI")),d=(u(n("17x9")),u(n("nOHt"))),v=(n("P5f7"),n("g/15"));function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var g=new l.default,b=window.IntersectionObserver;function w(){return p||(b?p=new b(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var y=function(e){function t(e){var n;return r(this,t),(n=o(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var s=e(a,o);return t=a,n=o,r=s,s}}(function(e,t){return{href:m(e),as:t?m(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,a=t.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),s=o.href,i=o.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,f.resolve)(c,s),i=i?(0,f.resolve)(c,i):s,e.preventDefault();var u=n.props.scroll;null==u&&(u=i.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](s,i,{shallow:n.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return i(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,f.resolve)(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=a||r),h.default.cloneElement(o,s)}}]),t}(h.Component);y.propTypes=void 0;var k=y;t.default=k},efbE:function(e,t,n){"use strict";var r=n("ln6h"),a=n.n(r),o=n("O40h"),s=n("zgjP"),i=n.n(s),c="https://rickandmortyapi.com";function u(){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark(function e(){var t,n,r,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,e.next=3,i()("".concat(c,"/api/character?page=").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:if(!("error"in(r=e.sent))){e.next=9;break}return e.abrupt("return",{error:{code:n.status,message:r.error}});case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}var l="https://rickandmortyapi.com";function f(){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(a.a.mark(function e(){var t,n,r,o=arguments;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,e.next=3,i()("".concat(l,"/api/episode?page=").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:if(!("error"in(r=e.sent))){e.next=9;break}return e.abrupt("return",{error:{code:n.status,message:r.error}});case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}n.d(t,"a",function(){return u}),n.d(t,"b",function(){return f})},eomm:function(e,t,n){e.exports=n("/a9y")},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest,o=[],s=[],i={},c=function(){return{ok:2==(a.status/100|0),statusText:a.statusText,status:a.status,url:a.responseURL,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(JSON.parse(a.responseText))},blob:function(){return Promise.resolve(new Blob([a.response]))},clone:c,headers:{keys:function(){return o},entries:function(){return s},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var u in a.open(t.method||"get",e,!0),a.onload=function(){a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),s.push([t,n]),i[t]=i[t]?i[t]+","+n:n}),n(c())},a.onerror=r,a.withCredentials="include"==t.credentials,t.headers)a.setRequestHeader(u,t.headers[u]);a.send(t.body||null)})}},sHdB:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),a=n.n(r),o=n("O40h"),s=n("q1tI"),i=n.n(s),c=n("eomm"),u=n.n(c),p=n("8Kt/"),l=n.n(p),f=n("Ac47"),h=n("OEnS"),d=n("yI17"),v=n.n(d),m=i.a.createElement,g=function(e){var t=e.name,n=e.episode;return m("div",{className:v.a.card},m("p",{className:v.a.info},n),m("h4",{className:v.a.title},t))},b=n("t5xf"),w=n("M/EI"),y=i.a.createElement,k=function(e){var t=e.episodes,n=void 0===t?[]:t,r=e.page,a=void 0===r?1:r,o=e.pages,s=void 0===o?0:o,i=e.currentPath;return y(f.a,null,y(h.a,{currentPath:i}),y(w.b,{vertical:!0},n.map(function(e){return y(w.a,{key:e.id},y(g,{name:e.name,episode:e.episode}))})),y(b.a,{page:a,pages:s}))},N=n("efbE"),x=i.a.createElement,E=function(e){var t=e.episodes,n=e.page,r=e.pages,a=e.currentPath,o=e.error;return o?x(u.a,{statusCode:o.code}):x(i.a.Fragment,null,x(l.a,null,x("title",null,"Episodes - The Rick and Morty Wiki")),x(k,{episodes:t,page:n,pages:r,currentPath:a}))};E.getInitialProps=function(){var e=Object(o.a)(a.a.mark(function e(t){var n,r,o,s,i,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.pathname,o=Number(n.page)||1,e.next=4,Object(N.b)(o);case 4:if(!("error"in(s=e.sent))){e.next=7;break}return e.abrupt("return",{error:s.error});case 7:return i=s.results,c=s.info.pages,e.abrupt("return",{episodes:i,page:o,pages:c,currentPath:r});case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.default=E},t5xf:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),s=n.n(o),i=n("YtUF"),c=n.n(i),u=a.a.createElement;t.a=function(e){var t=e.page,n=e.pages,r=t<n,a=t>1;return u("div",{className:c.a.pagination},a?u(s.a,{href:{pathname:"",query:{page:t-1}}},u("a",{className:c.a.link},"Previos page")):u("button",{className:c.a.button,type:"button",disabled:!0},"Previos page"),u("span",{className:c.a.status},"".concat(t,"/").concat(n)),r?u(s.a,{href:{pathname:"",query:{page:t+1}}},u("a",{className:c.a.link},"Next page")):u("button",{className:c.a.button,type:"button",disabled:!0},"Next page"))}},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["54NR",1,0,2]]]);