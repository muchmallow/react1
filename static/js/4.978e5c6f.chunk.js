(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{287:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(n,"a",function(){return r})},291:function(e,n,t){e.exports={paginator:"Paginator_paginator__2ZfZj",pageNumber:"Paginator_pageNumber__U32lt",selectedPage:"Paginator_selectedPage__3RmRx"}},292:function(e,n,t){e.exports={userPhoto:"Users_userPhoto__1hdZb"}},293:function(e,n,t){e.exports=t.p+"static/media/user_image_male.04867da4.png"},296:function(e,n,t){"use strict";t.r(n);var r=t(48),a=t(49),o=t(51),u=t(50),l=t(52),s=t(0),i=t.n(s),c=t(19),g=t(126),f=t(66),p=t(287),h=t(291),m=t.n(h),d=function(e){for(var n=e.totalItemsCount,t=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.portionSize,u=void 0===o?15:o,l=Math.ceil(n/t),c=[],g=1;g<=l;g++)c.push(g);var f=Math.ceil(l/u),h=Object(s.useState)(1),d=Object(p.a)(h,2),P=d[0],C=d[1],v=(P-1)*u+1,w=P*u;return i.a.createElement("div",{className:m.a.paginator},P>1&&i.a.createElement("button",{onClick:function(){return C(P-1)}},"PREV"),c.filter(function(e){return e>=v&&e<=w}).map(function(e){return i.a.createElement("span",{className:r===e&&m.a.selectedPage,key:e,onClick:function(){return a(e)}},e)}),f>P&&i.a.createElement("button",{onClick:function(){return C(P+1)}},"NEXT"))},P=t(292),C=t.n(P),v=t(293),w=t.n(v),E=t(16),b=function(e){var n=e.user,t=e.followingInProgress,r=e.unfollowThunkCreator,a=e.followThunkCreator;return i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement("div",null,i.a.createElement(E.b,{to:"/profile/"+n.id},i.a.createElement("img",{src:null!=n.photos.small?n.photos.small:w.a,className:C.a.userPhoto,alt:"userPhoto"}))),i.a.createElement("div",null,n.followed?i.a.createElement("button",{disabled:t.some(function(e){return e===n.id}),onClick:function(){r(n.id)}},"Unfollow"):i.a.createElement("button",{disabled:t.some(function(e){return e===n.id}),onClick:function(){a(n.id)}},"Follow"))),i.a.createElement("span",null,i.a.createElement("span",null,i.a.createElement("div",null,n.name),i.a.createElement("div",null,n.status)),i.a.createElement("span",null,i.a.createElement("div",null,"user.location.city"),i.a.createElement("div",null,"user.location.country"))))},k=function(e){var n=e.currentPage,t=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,o=e.users,u=Object(f.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return i.a.createElement("div",null,i.a.createElement(d,{currentPage:n,onPageChanged:a,totalItemsCount:t,pageSize:r}),i.a.createElement("div",null,o.map(function(e){return i.a.createElement(b,{user:e,key:e.id,followingInProgress:u.followingInProgress,followThunkCreator:u.followThunkCreator,unfollowThunkCreator:u.unfollowThunkCreator})})))},y=t(92),T=t(6);function _(e,n){return e===n}!function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r]}(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_,t=null,r=null;return function(){return function(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}});var S=function(e){return e.usersPage.users},U=function(e){return e.usersPage.pageSize},j=function(e){return e.usersPage.totalUsersCount},z=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},O=function(e){return e.usersPage.followingInProgress},N=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),s=0;s<a;s++)l[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(l)))).onPageChanged=function(e){var n=t.props.pageSize;t.props.requestUsers(e,n)},t}return Object(l.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;this.props.requestUsers(n,t)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,this.props.isFetching?i.a.createElement(y.a,null):null,i.a.createElement(k,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followThunkCreator:this.props.followThunkCreator,unfollowThunkCreator:this.props.unfollowThunkCreator,followingInProgress:this.props.followingInProgress}))}}]),n}(i.a.Component);n.default=Object(T.d)(Object(c.b)(function(e){return{users:S(e),pageSize:U(e),totalUsersCount:j(e),currentPage:z(e),isFetching:I(e),followingInProgress:O(e)}},{followThunkCreator:g.b,unfollowThunkCreator:g.e,setCurrentPage:g.d,requestUsers:g.c}))(N)}}]);
//# sourceMappingURL=4.978e5c6f.chunk.js.map