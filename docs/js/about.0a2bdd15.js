(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{4260:function(t,e,n){},5449:function(t,e,n){"use strict";var s=n("4260"),r=n.n(s);r.a},f820:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v(t._s(t.$t("navAbout"))+" OrgaBox")]),n("h2",[t._v("Version "+t._s(t.version.version)+" (Built at "+t._s(t.version.date)+")")]),t._m(0),n("v-simple-table",[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Version number")]),n("th",{staticClass:"text-left"},[t._v("Description")])])]),n("tbody",t._l(t.changelog,(function(e){return n("tr",{key:e.number},[n("td",[t._v(t._s(e.number))]),n("td",[t._v(t._s(e.description))])])})),0)])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("© 2019-2020 — "),n("a",{attrs:{href:"mailto:embaudert@gmx.de"}},[n("strong",[t._v("E.M.Baudert")])])])}],a={computed:{version:function(){return this.$store.state.version},changelog:function(){var t=[];for(var e in this.$store.state.changelog)t.unshift({number:e,description:this.$store.state.changelog[e]});return t}},methods:{}},i=a,o=(n("5449"),n("0c7c")),u=n("6544"),c=n.n(u),l=n("1f4f"),v=Object(o["a"])(i,s,r,!1,null,"4582ed72",null);e["default"]=v.exports;c()(v,{VSimpleTable:l["a"]})}}]);
//# sourceMappingURL=about.0a2bdd15.js.map