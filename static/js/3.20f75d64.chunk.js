(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{287:function(e,t,a){e.exports=a.p+"static/media/user_image_male.04867da4.png"},288:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,s=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,s=i}finally{try{n||null==u.return||u.return()}finally{if(r)throw s}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})},289:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1SgK6",mainPhoto:"ProfileInfo_mainPhoto__cY-tp"}},290:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1ucB6",posts:"MyPosts_posts__3Duam"}},291:function(e,t,a){e.exports={item:"Post_item__2BDQj"}},294:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a(49),s=a(51),o=a(50),u=a(52),i=a(0),c=a.n(i),l=a(289),p=a.n(l),m=a(92),f=a(288),h=function(e){var t=Object(i.useState)(!1),a=Object(f.a)(t,2),n=a[0],r=a[1],s=Object(i.useState)(e.status),o=Object(f.a)(s,2),u=o[0],l=o[1];Object(i.useEffect)(function(){l(e.status)},[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){r(!0)}},u||"----------")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){r(!1),e.updateStatusThunkCreator(u)},autoFocus:!0,value:u})))},d=a(287),v=a.n(d),b=function(e){var t=e.profile,a=e.status,n=e.updateStatusThunkCreator,r=e.isOwner,s=e.savePhotoTC;if(!t)return c.a.createElement(m.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:p.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large||v.a,className:p.a.mainPhoto,alt:"img"}),r&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}}),c.a.createElement(h,{status:a,updateStatusThunkCreator:n})))},E=a(91),g=a(290),k=a.n(g),P=a(291),C=a.n(P),T=function(e){return c.a.createElement("div",{className:C.a.item},c.a.createElement("img",{src:"https://amp.businessinsider.com/images/5cc300804a16757b2777a049-750-421.jpg",alt:""}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"Like "),e.likeCount))},O=a(85),j=a(124),y=a(61),S=a(32),_=Object(y.a)(10),w=c.a.memo(function(e){var t=e.posts.map(function(e){return c.a.createElement(T,{message:e.message,likeCount:e.likeCount})});return c.a.createElement("div",{className:k.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(I,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:k.a.posts},t))}),I=Object(j.a)({form:"ProfileAddNewPostForm"})(function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(O.a,{component:S.b,name:"newPostText",placeholder:"Post message",validate:[y.b,_]})),c.a.createElement("button",null,"Add post"))}),B=w,x=a(19),A=Object(x.b)(function(e){return{posts:e.profilePage.posts}},function(e){return{addPost:function(t){return e(Object(E.a)(t))}}})(B),N=function(e){return c.a.createElement("div",null,c.a.createElement(b,{savePhotoTC:e.savePhotoTC,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatusThunkCreator:e.updateStatusThunkCreator}),c.a.createElement(A,null))},D=a(29),U=a(7),M=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfileThunkCreator(e),this.props.getStatusThunkCreator(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(N,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatusThunkCreator:this.props.updateStatusThunkCreator,savePhotoTC:this.props.savePhotoTC})))}}]),t}(c.a.Component);t.default=Object(U.d)(Object(x.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfileThunkCreator:E.d,getStatusThunkCreator:E.c,updateStatusThunkCreator:E.f,savePhotoTC:E.e}),D.f)(M)}}]);
//# sourceMappingURL=3.20f75d64.chunk.js.map