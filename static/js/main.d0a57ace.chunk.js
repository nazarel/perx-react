(window["webpackJsonpperx-react"]=window["webpackJsonpperx-react"]||[]).push([[0],{16:function(e,t,r){e.exports=r(34)},21:function(e,t,r){},22:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(5),o=r.n(c),i=(r(21),r(22),r(10)),s=r(13),l=r.n(s),u=function(e){return e.body},p=function(e,t){return l.a.get("".concat("https://api.github.com").concat(e)).query(t).then(u)},d={getRepos:function(e,t){return p("/users/".concat(e,"/repos"),t)},getOrgs:function(e,t){return p("/users/".concat(e,"/orgs"),t)}},m=r(1),f="GET_REPOS",O="".concat(f,"_SUCCESS"),E="".concat(f,"_FAILED"),b="GET_ORGANIZATIONS",g="".concat(b,"_SUCCESS"),y="".concat(b,"_FAILED");var v=function(e){var t=e.label,r=e.type,c=void 0===r?"text":r,o=Object(n.useState)(""),s=Object(i.a)(o,2),l=s[0],u=s[1],p=Object(n.useState)(!1),O=Object(i.a)(p,2),E=O[0],g=O[1],y=Object(m.b)(),v=Object(m.c)((function(e){return e.OrganizationReducer})),j=v.error,h=v.isError,w=h||E,N="";return E?N="*You need to enter a username to search":h&&(N=j.message),a.a.createElement("label",{className:"label"},a.a.createElement("span",null,t),w&&a.a.createElement("span",{className:"text-danger ml-3"},N),a.a.createElement("input",{className:"form-control",type:c,onChange:function(e){return function(e){var t=e.target.value.replace(/\s+/g,"");u(t)}(e)},value:l}),a.a.createElement("button",{className:"btn",onClick:function(){return function(e){e?(g(!1),y({type:b,payload:d.getOrgs(e)}),y({type:f,payload:d.getRepos(e)})):g(!0)}(l)}},"Search"))},j=function(e){var t=e.image,r=e.header,n=e.content;return a.a.createElement("div",{className:"card flex"},!!t&&a.a.createElement("div",null,a.a.createElement("img",{className:"avatar",src:t})),a.a.createElement("div",null,a.a.createElement("h3",null,r),a.a.createElement("div",{className:"text-muted"},n)))},h=function(){var e=Object(m.c)((function(e){return e.OrganizationReducer.organizations}));return a.a.createElement("div",{className:"list"},a.a.createElement("h2",null,"Organizations"),e instanceof Array&&e.map((function(e,t){return a.a.createElement(j,{key:t,header:e.login,content:e.description,image:e.avatar_url})})))},w=function(){var e=Object(m.c)((function(e){return e.RepoReducer.repos}));return a.a.createElement("div",{className:"list"},a.a.createElement("h2",null,"Repositories"),e instanceof Array&&e.map((function(e,t){return a.a.createElement(j,{key:t,header:e.name})})))};var N=function(){var e=Object(m.c)((function(e){return e.OrganizationReducer.organizations})),t=Object(m.c)((function(e){return e.RepoReducer.repos})),r=null!==e||null!==t;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"header"},a.a.createElement("div",{className:"header__inner container clearfix"},a.a.createElement("div",{className:"header__brand"},"Perx React"))),a.a.createElement("div",{className:"content container"},a.a.createElement("div",{className:r?"card input-container":"card input-container input-container--centralized"},a.a.createElement(v,{label:"Username"})),r&&a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"column"},a.a.createElement(h,null)),a.a.createElement("div",{className:"column"},a.a.createElement(w,null)))))},P=r(3),S=r(6);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(r,!0).forEach((function(t){Object(S.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(r,!0).forEach((function(t){Object(S.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=Object(P.c)({OrganizationReducer:function(e,t){switch(t.type){case b:return _({},e,{isLoading:!0,isError:!1,organizations:null});case g:return _({},e,{isLoading:!1,isError:!1,organizations:t.payload});case y:return _({},e,{isLoading:!1,isError:!0,error:t.payload});default:return _({isLoading:!1,isError:!1,organizations:null},e)}},RepoReducer:function(e,t){switch(t.type){case f:return D({},e,{isLoading:!0,isError:!1,repos:null});case O:return D({},e,{isLoading:!1,isError:!1,repos:t.payload});case E:return D({},e,{isLoading:!1,isError:!0});default:return D({isLoading:!1,isError:!1,repos:null},e)}}}),x=r(15);var A=Object(P.d)(L,Object(P.a)((function(e){return function(t){return function(r){if((a=r.payload)&&"function"===typeof a.then){r.payload;var n=Object(x.a)(r,["payload"]);return e.dispatch(n),void r.payload.then((function(t){r.payload=t,r.type+="_SUCCESS",e.dispatch(r)}),(function(t){r.type+="_FAILED",r.error=!0,r.payload=t,e.dispatch(r)}))}var a;t(r)}}})));o.a.render(a.a.createElement(m.a,{store:A},a.a.createElement(N,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d0a57ace.chunk.js.map