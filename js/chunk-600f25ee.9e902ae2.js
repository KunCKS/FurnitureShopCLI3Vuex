(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-600f25ee"],{"3c9b":function(t,a,s){},7277:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Alert"),s("div",{staticClass:"container-fluid"},[s("Navbar"),s("div",{staticClass:"row"},[s("Sidebar"),s("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[s("router-view")],1)],1)],1)],1)},n=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky"},[t._m(0),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[s("i",{staticClass:"fas fa-box-open"}),t._v(" 產品列表\n          ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/dashboardorders"}},[s("i",{staticClass:"far fa-list-alt"}),t._v(" 訂單列表\n          ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupons"}},[s("i",{staticClass:"fas fa-ticket-alt"}),t._v(" 優惠券列表\n          ")])],1)]),t._m(1),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/customer_order"}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" 模擬訂單\n          ")])],1)])])])])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("管理員")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("模擬功能")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])}],r={},c=r,o=s("2877"),u=Object(o["a"])(c,i,l,!1,null,null,null),d=u.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[s("router-link",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{to:"/admin"}},[t._v("ASin DESIGN")]),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[t._v("登出")])])])],1)])},v=[],f={methods:{signout:function(){this.$store.dispatch("signout")}}},b=f,p=Object(o["a"])(b,m,v,!1,null,null,null),C=p.exports,h=s("98ab"),_={components:{Navbar:C,Sidebar:d,Alert:h["a"]}},g=_,x=Object(o["a"])(g,e,n,!1,null,null,null);a["default"]=x.exports},"82d5":function(t,a,s){"use strict";var e=s("3c9b"),n=s.n(e);n.a},"98ab":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,e){return s("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v("\n    "+t._s(a.message)+"\n    "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},n=[],i={name:"Navbar",computed:{messages:function(){return this.$store.state.messages}},methods:{removeMessage:function(t){this.$store.dispatch("removeMessage",t)}}},l=i,r=(s("82d5"),s("2877")),c=Object(r["a"])(l,e,n,!1,null,null,null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-600f25ee.9e902ae2.js.map