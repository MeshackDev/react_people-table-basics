(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),s=(c(20),c(21),c(2)),r=c(6),l=c.n(r),i=c(0),j=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},o=c(8),d=c(11),b=c(4),h=c(1),O=(c(23),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var u=function(e){var t,c,n,r=e.person,j=e.people,o=r.sex,d=r.born,b=r.died,h=r.motherName,O=r.fatherName,p=function(e){return j.find((function(t){return t.name===e}))||null},u=Object(s.f)().pathname;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":"/people/".concat(r.slug)===u}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{className:l()({"has-text-danger":"f"===o}),to:"/people/".concat(r.slug),children:r.name})}),Object(i.jsx)("td",{children:o}),Object(i.jsx)("td",{children:d}),Object(i.jsx)("td",{children:b}),p(h)?Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:"/people/".concat(null===(t=p(h))||void 0===t?void 0:t.slug),className:l()({"has-text-danger":"f"===(null===(c=p(h))||void 0===c?void 0:c.sex)}),children:h||"-"})}):Object(i.jsx)("td",{children:h||"-"}),p(O)?Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:"/people/".concat(null===(n=p(O))||void 0===n?void 0:n.slug),children:O||"-"})}):Object(i.jsx)("td",{children:O||"-"})]},r.slug)},x=function(){var e=Object(h.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(!1),s=Object(b.a)(a,2),r=s[0],l=s[1],j=Object(h.useState)(!1),x=Object(b.a)(j,2),m=x[0],v=x[1];return Object(h.useEffect)((function(){var e=function(){var e=Object(d.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!1),l(!0),e.prev=2,e.next=5,p();case 5:t=e.sent,l(!1),n(t),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),l(!1),v(!0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[r&&Object(i.jsx)(O,{}),m&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&!r&&!m&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e){return Object(i.jsx)(u,{person:e,people:c},e.slug)}))})]})]})})]})},m=(c(24),function(){var e=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:e,to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:e,to:"/people",children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)(j,{})}),Object(i.jsx)(s.b,{path:"/people/*",element:Object(i.jsx)(x,{})}),Object(i.jsx)(s.b,{path:"/home",element:Object(i.jsx)(s.a,{replace:!0,to:"/"})}),Object(i.jsx)(s.b,{path:"/*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})});Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(m,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.a0827436.chunk.js.map