(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{22:function(e,t,a){e.exports=a(44)},38:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),m=a(6),o=a(1),u=(a(27),a(38),a(39),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"navbar-menu"},c.a.createElement(m.c,{to:"/",exact:!0,className:"navbar-item is-tab",activeClassName:"is-active"},"Home"),c.a.createElement(m.c,{to:"/people",className:"navbar-item is-tab",activeClassName:"is-active"},"People"))))}),s=function(){return c.a.createElement("h1",{className:"title"},"Home Page")},i=a(9),E=a(13),p=c.a.memo((function(e){var t=e.name,a=e.sex,n=e.slug;return c.a.createElement(m.b,{to:"/people/".concat(n),style:{color:"m"===a?"blue":"red"}},t)})),f=function(e){var t=e.name,a=e.sex,n=e.born,r=e.died,l=e.fatherName,m=e.motherName,o=e.slug,u=e.father,s=e.mother,i=e.click;return c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{onClick:function(){return i(t)}},c.a.createElement(p,{name:t,sex:a,slug:o})),c.a.createElement("td",null,a),c.a.createElement("td",null,n),c.a.createElement("td",null,r),c.a.createElement("td",null,c.a.createElement(p,{name:l,sex:"m",slug:u?u.slug:""})),c.a.createElement("td",null,c.a.createElement(p,{name:m,sex:"f",slug:s?s.slug:""})))},h=c.a.memo((function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),u=m[0],s=m[1],p=Object(n.useState)(""),h=Object(i.a)(p,2),b=(h[0],h[1],Object(n.useState)("")),d=Object(i.a)(b,2),N=d[0],g=d[1],v=Object(o.g)();Object(n.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return e.map((function(t){return Object(E.a)(Object(E.a)({},t),{},{mother:e.find((function(e){return t.motherName===e.name?e.name:""})),father:e.find((function(e){return t.fatherName===e.name?e.name:""}))})}))})).then(r)}),[]);var j=function(e){s(e)},O=function(e){console.log(v.location.search),e!==N?(v.push("?sortBy=".concat(e,"&sortOrder=asc")),g(e),a.sort((function(t,a){return["sex","name"].includes(e)?t[e].localeCompare(a[e]):+t[e]-+a[e]}))):(v.push("?sortBy=".concat(e,"&sortOrder=desc")),g(""),a.reverse())};a.filter((function(e){return"m"===e.sex})),a.filter((function(e){return"f"===e.sex}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"title"},"People"),c.a.createElement("div",{class:"control"},c.a.createElement("input",{class:"input",type:"text",placeholder:"Loading input"})),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{onClick:function(){return O("name")}},"Name"),c.a.createElement("th",{onClick:function(){return O("sex")}},"Sex"),c.a.createElement("th",{onClick:function(){return O("born")}},"Born"),c.a.createElement("th",{onClick:function(){return O("died")}},"Died"),c.a.createElement("th",null,"Father"),c.a.createElement("th",null,"Mother"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement("tr",{name:e.slug,className:"".concat(u===e.name&&"is-selected")},c.a.createElement(f,Object.assign({},e,{click:j})))})))))})),b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/people",component:h}),c.a.createElement(o.b,{path:"/",exact:!0,component:s}),c.a.createElement(o.a,{path:"/home",to:"/"}),c.a.createElement("h2",{className:"subtitle"},"Not Found Page")))};l.a.render(c.a.createElement(m.a,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.1280cfb3.chunk.js.map