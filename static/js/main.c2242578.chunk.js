(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",function(){return c}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return o});var r=n(127),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"da3b8251-db91-4981-b097-c49a19337cd6"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e)).then(function(e){return e.data})},unfollow:function(e){return a.delete("follow/".concat(e)).then(function(e){return e.data})}},u={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form/data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me").then(function(e){return e})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptchaURL:function(){return a.get("security/get-captcha-url")}}},102:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(34),a=n(7),c={messages:[{id:1,message:"Hi!"},{id:2,message:"How is your business?"},{id:3,message:"Yo!"},{id:4,message:"Grats!"},{id:5,message:"Hilarious!"},{id:6,message:"Good evening!"}],dialogs:[{id:1,name:"Dmitriy"},{id:2,name:"Andrey"},{id:3,name:"Svetlana"},{id:4,name:"Oleg"},{id:5,name:"Yurij"},{id:6,name:"Mick"},{id:7,name:"Evgeniy"}]},u=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n={id:7,message:t.newMessageBody};return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},126:function(e,t,n){"use strict";var r=n(6),a=n.n(r),c=n(12),u=n(34),i=n(7),o=n(10),s=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(i.a)({},e,r):e})};n.d(t,"d",function(){return p}),n.d(t,"c",function(){return v}),n.d(t,"b",function(){return g}),n.d(t,"e",function(){return b});var l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},d=function(e){return{type:"FOLLOW",userId:e}},f=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},m=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},h=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},v=function(e,t){return function(){var n=Object(c.a)(a.a.mark(function n(r){var c;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(m(!0)),r(p(e)),n.next=4,o.d.getUsers(e,t);case 4:c=n.sent,r(m(!1)),r({type:"SET_USERS",users:c.items}),r({type:"SET_TOTAL_USERS_COUNT",count:c.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(c.a)(a.a.mark(function e(t,n,r,c){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(h(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(h(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),g=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,o.d.follow.bind(o.d),d);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:E(n,e,o.d.unfollow.bind(o.d),f);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(i.a)({},e,{users:Object(u.a)(t.users)});case"SET_CURRENT_PAGE":return Object(i.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(i.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(i.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter(function(e){return e!==t.userId})]});default:return e}}},13:function(e,t,n){e.exports={nav:"Navbar_nav__3vniC",item:"Navbar_item__2xlsz",activeLink:"Navbar_activeLink__2u4tV",friendsWrapper:"Navbar_friendsWrapper__pQ5QG",friendsAvatars:"Navbar_friendsAvatars__ut-xU"}},132:function(e,t,n){e.exports=n.p+"static/media/preloader.c5dcdbc6.svg"},158:function(e,t,n){e.exports=n(285)},160:function(e,t,n){},24:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return d}),n.d(t,"c",function(){return f});var r=n(66),a=n(0),c=n.n(a),u=n(44),i=n.n(u),o=(n(43),n(85)),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,u=e.children,o=(Object(r.a)(e,["input","meta","children"]),n&&a);return c.a.createElement("div",{className:i.a.formControl+" "+(o?i.a.error:"")},c.a.createElement("div",null,u),o&&c.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement("textarea",Object.assign({},t,n)))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return c.a.createElement(s,e,c.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(o.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a)),u)}},242:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(160),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(8),u=n(91),i=n(102),o={avatarUrls:[{url:"http://ttod.ru/avatar/m/index.php"},{url:"http://ttod.ru/avatar/m/index.php"},{url:"http://ttod.ru/avatar/m/index.php"}]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;arguments.length>1&&arguments[1];return e},l=n(126),d=n(6),f=n.n(d),p=n(12),m=n(7),h=n(10),v=n(31),E={userId:null,email:null,login:null,isFetching:!1,isAuth:!1,captchaUrl:null},g=function(e,t,n,r){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},b=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",captchaUrl:e}},O=function(){return function(){var e=Object(p.a)(f.a.mark(function e(t){var n,r,a,c,u;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,u=r.email,t(g(a,u,c,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},S=function(){return function(){var e=Object(p.a)(f.a.mark(function e(t){var n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.c.getCaptchaURL();case 2:n=e.sent,r=n.data.url,t(b(r));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(m.a)({},e,t.payload);case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(m.a)({},e,{captchaUrl:t.captchaUrl});default:return e}},_=n(128),j=n(125),y={initialized:!1,globalError:null},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(m.a)({},e,{initialized:!0});default:return e}},T=Object(c.c)({profilePage:u.b,dialogsPage:i.a,sideNavbar:s,usersPage:l.a,auth:w,form:j.a,app:C}),U=Object(c.e)(T,Object(c.a)(_.a)),k=n(63),N=n.n(k),L=n(49),x=n(50),A=n(52),I=n(51),P=n(53),R=(n(242),n(87)),F=n.n(R),G=n(17),D=function(e){return a.a.createElement("header",{className:F.a.header},a.a.createElement("img",{src:"https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300",alt:"header"}),a.a.createElement("div",{className:F.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login,a.a.createElement("button",{onClick:e.logoutThunkCreator},"Log Out")):a.a.createElement(G.b,{to:"/login"},"Log In")))},W=n(19),M=function(e){function t(){return Object(L.a)(this,t),Object(A.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return a.a.createElement(D,this.props)}}]),t}(a.a.Component),z=Object(W.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logoutThunkCreator:function(){return function(){var e=Object(p.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.logout();case 2:0===e.sent.data.resultCode&&t(g(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(M),H=n(13),B=n.n(H),Y=function(e){var t=e.avatarUrls.map(function(e){return a.a.createElement("img",{src:e.url,alt:"avatar"})});return a.a.createElement("nav",{className:B.a.nav},a.a.createElement("div",null,a.a.createElement("div",{className:B.a.item},a.a.createElement(G.b,{to:"/profile",activeClassName:B.a.activeLink},"Profile")),a.a.createElement("div",{className:B.a.item},a.a.createElement(G.b,{to:"/dialogs",activeClassName:B.a.activeLink},"Messages")),a.a.createElement("div",{className:B.a.item},a.a.createElement(G.b,{to:"/users",activeClassName:B.a.activeLink},"Find Users")),a.a.createElement("div",{className:B.a.item},a.a.createElement(G.b,{to:"/news",activeClassName:B.a.activeLink},"News")),a.a.createElement("div",{className:B.a.item},a.a.createElement(G.b,{to:"/music",activeClassName:B.a.activeLink},"Music")),a.a.createElement("div",{className:B.a.item},a.a.createElement(G.b,{to:"/settings",activeClassName:B.a.activeLink},"Settings")),a.a.createElement("div",{className:B.a.friendsWrapper},"Your friends",a.a.createElement("div",{className:B.a.friendsAvatars},t))))},Q=n(30),V=function(e){return a.a.createElement("div",null,"News")},Z=function(e){return a.a.createElement("div",null,"Music")},J=function(e){return a.a.createElement("div",null,"Settings")},K=n(124),q=n(24),$=n(43),X=n(44),ee=n.n(X),te=Object(K.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(q.c)("Email","email",[$.b],q.a),Object(q.c)("Password","password",[$.b],q.a,{type:"password"}),Object(q.c)(null,"rememberMe",[],q.a,{type:"checkbox"},"remember me"),r&&a.a.createElement("img",{src:r,alt:"captcha"}),r&&Object(q.c)("Symbols from image","captcha",[$.b],q.a),n&&a.a.createElement("div",{className:ee.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),ne=Object(W.b)(function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}},{loginThunkCreator:function(e,t,n,r){return function(){var a=Object(p.a)(f.a.mark(function a(c){var u,i;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.login(e,t,n,r);case 2:0===(u=a.sent).data.resultCode?c(O()):(10===u.data.resultCode&&c(S()),i=u.data.messages.length>0?u.data.messages[0]:"Some error",c(Object(v.a)("login",{_error:i})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){var t=e.loginThunkCreator,n=e.isAuth,r=e.captchaUrl;return n?a.a.createElement(Q.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(te,{onSubmit:function(e){t(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:r}))}),re=n(92),ae=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,t))}},ce=a.a.lazy(function(){return n.e(5).then(n.bind(null,295))}),ue=a.a.lazy(function(){return n.e(3).then(n.bind(null,294))}),ie=a.a.lazy(function(){return n.e(4).then(n.bind(null,296))}),oe=function(e){function t(){var e,n;Object(L.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(A.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(a)))).catchAllUnhandledErrors=function(e){alert("Some error occurred")},n}return Object(P.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeAppTC(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(z,null),a.a.createElement(Y,{avatarUrls:this.props.avatarUrls}),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(Q.d,null,a.a.createElement(Q.a,{from:"/",to:"profile"}),a.a.createElement(Q.b,{path:"/dialogs",render:ae(ce)}),a.a.createElement(Q.b,{path:"/profile/:userId?",render:ae(ue)}),a.a.createElement(Q.b,{path:"/users",render:ae(ie)}),a.a.createElement(Q.b,{path:"/news",render:function(){return a.a.createElement(V,null)}}),a.a.createElement(Q.b,{path:"/music",render:function(){return a.a.createElement(Z,null)}}),a.a.createElement(Q.b,{path:"/settings",render:function(){return a.a.createElement(J,null)}}),a.a.createElement(Q.b,{path:"/login",render:function(){return a.a.createElement(ne,null)}}),a.a.createElement(Q.b,{path:"*",render:function(){return a.a.createElement("div",null,"\u042b\u042b 404 NOT FOUND ")}})))):a.a.createElement(re.a,null)}}]),t}(a.a.Component),se=Object(c.d)(Q.g,Object(W.b)(function(e){return{initialized:e.app.initialized,avatarUrls:e.sideNavbar.avatarUrls}},{initializeAppTC:function(){return function(e){var t=e(O());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(oe);N.a.render(a.a.createElement(G.a,{basename:"/react1"},a.a.createElement(W.a,{store:U},a.a.createElement(se,{store:U}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},44:function(e,t,n){e.exports={formControl:"FormsControls_formControl__BOCcK",error:"FormsControls_error__3lW3-",formSummaryError:"FormsControls_formSummaryError__2QTW6"}},87:function(e,t,n){e.exports={header:"Header_header__1fDtr",loginBlock:"Header_loginBlock__ebZSD"}},91:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"c",function(){return m}),n.d(t,"g",function(){return h}),n.d(t,"e",function(){return v}),n.d(t,"f",function(){return E});var r=n(6),a=n.n(r),c=n(12),u=n(34),i=n(7),o=n(10),s=n(31),l={posts:[{id:1,message:"Hi, how are you?",likeCount:16},{id:2,message:"It's my first post",likeCount:20}],profile:null,status:""},d=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_USER_STATUS",status:e}},p=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(f(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(a.a.mark(function t(n,r){var c,u;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,o.b.saveProfile(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(p(c)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,message:t.newPostText,likeCount:0};return Object(i.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SET_USER_STATUS":return Object(i.a)({},e,{status:t.status});case"DELETE_POST":return Object(i.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});case"SAVE_PHOTO_SUCCESS":return Object(i.a)({},e,{profile:Object(i.a)({},e.profile,{photos:t.photos})});default:return e}}},92:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(132),u=n.n(c);t.a=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:u.a,alt:"preloader"}))}}},[[158,1,2]]]);
//# sourceMappingURL=main.c2242578.chunk.js.map