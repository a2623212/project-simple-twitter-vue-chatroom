(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],d=0,l=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(l.length)l.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==c[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09e20652":"6d7f5e5b","chunk-12acd2b4":"b6fca97c","chunk-1ac01f0a":"7da5a1a7","chunk-7f5a2ec5":"f28b254f","chunk-6916d64e":"d8609f33","chunk-07412521":"1348db82","chunk-2ba36c3a":"7e6d686e","chunk-42b1b75a":"ea85abd1","chunk-21f42770":"7a9da909","chunk-416c7d9b":"7e40ebe0","chunk-636d96df":"df99ef1b","chunk-3d02ef31":"c392bac0","chunk-5ee14d2a":"d42ee1e5","chunk-770cf8f8":"aa94d64d","chunk-d346fdba":"82d29431","chunk-743410a1":"a07545cc","chunk-74725a3a":"2d883b2b","chunk-7f97474c":"02795fd1","chunk-addd2f3a":"e7b2f3b5","chunk-f81a2616":"10980244"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-09e20652":1,"chunk-12acd2b4":1,"chunk-1ac01f0a":1,"chunk-7f5a2ec5":1,"chunk-07412521":1,"chunk-2ba36c3a":1,"chunk-42b1b75a":1,"chunk-21f42770":1,"chunk-416c7d9b":1,"chunk-636d96df":1,"chunk-3d02ef31":1,"chunk-5ee14d2a":1,"chunk-770cf8f8":1,"chunk-d346fdba":1,"chunk-743410a1":1,"chunk-74725a3a":1,"chunk-7f97474c":1,"chunk-addd2f3a":1,"chunk-f81a2616":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-09e20652":"ec2c9940","chunk-12acd2b4":"c0ffbbb3","chunk-1ac01f0a":"86fe57df","chunk-7f5a2ec5":"77c6e895","chunk-6916d64e":"31d6cfe0","chunk-07412521":"58c94ad6","chunk-2ba36c3a":"9824a5e1","chunk-42b1b75a":"a1dc94ba","chunk-21f42770":"c4e352c8","chunk-416c7d9b":"87a62588","chunk-636d96df":"43800a7c","chunk-3d02ef31":"60f95f58","chunk-5ee14d2a":"0ffdcd23","chunk-770cf8f8":"b1b8a6d0","chunk-d346fdba":"6a066dc8","chunk-743410a1":"ec2c9940","chunk-74725a3a":"f7c3f3d8","chunk-7f97474c":"3057ceff","chunk-addd2f3a":"73a03420","chunk-f81a2616":"a5163626"}[e]+".css",c=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===c)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),t(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/project-simple-twitter-vue-chatroom/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var f=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"16f4":function(e,n,t){e.exports=t.p+"img/404.cb516925.png"},2303:function(e,n,t){},"4cce":function(e,n,t){"use strict";var r=t("c968"),a=function(){return localStorage.getItem("token")};n["a"]={get:function(e){var n=e.userId;return r["c"].get("/users/".concat(n),{headers:{Authorization:"Bearer ".concat(a())}})},getTweets:function(e){var n=e.userId;return r["c"].get("/users/".concat(n,"/tweets"),{headers:{Authorization:"Bearer ".concat(a())}})},getReplies:function(e){var n=e.userId;return r["c"].get("/users/".concat(n,"/replied_tweets"),{headers:{Authorization:"Bearer ".concat(a())}})},getLikes:function(e){var n=e.userId;return r["c"].get("/users/".concat(n,"/likes"),{headers:{Authorization:"Bearer ".concat(a())}})},getTopUser:function(){return r["c"].get("/users/top",{headers:{Authorization:"Bearer ".concat(a())}})},getFollowers:function(e){var n=e.userId;return r["c"].get("/users/".concat(n,"/followers"),{headers:{Authorization:"Bearer ".concat(a())}})},getFollowings:function(e){var n=e.userId;return r["c"].get("/users/".concat(n,"/followings"),{headers:{Authorization:"Bearer ".concat(a())}})},update:function(e){var n=e.userId,t=e.formData;return r["c"].put("/users/".concat(n),t,{headers:{Authorization:"Bearer ".concat(a())}})},removeFollowship:function(e){var n=e.userId;return r["c"].delete("/followships/".concat(n),{headers:{Authorization:"Bearer ".concat(a())}})},addFollowship:function(e){var n=e.formData;return r["c"].post("/followships",n,{headers:{Authorization:"Bearer ".concat(a())}})},getCurrentUser:function(){return r["c"].get("/user",{headers:{Authorization:"Bearer ".concat(a())}})}}},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r,a,c=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],i=(t("5c0b"),t("2877")),s={},d=Object(i["a"])(s,o,u,!1,null,null,null),l=d.exports,f=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),h=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"not-found container"},[r("h1",[e._v("404 Page Not Found")]),r("img",{staticClass:"img",attrs:{src:t("16f4"),alt:"404"}})])}],m=(t("6a07"),{}),g=Object(i["a"])(m,h,p,!1,null,"2d078e03",null),b=g.exports,k={},v=Object(i["a"])(k,r,a,!1,null,null,null),w=v.exports,A=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"admin"}},[r("img",{staticClass:"admin-logo",attrs:{src:t("bca0"),alt:""}}),r("h1",[e._v("後台登入")]),r("form",{staticClass:"admin-form",attrs:{novalidate:""},on:{submit:function(n){return n.preventDefault(),n.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-label-group"},[r("label",{attrs:{for:"account"}},[e._v("帳號")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],staticClass:"form-control",class:{invalid:e.error.account},attrs:{id:"account",name:"account",type:"text",autocomplete:"username",placeholder:"帳號",required:"",autofocus:""},domProps:{value:e.account},on:{input:function(n){n.target.composing||(e.account=n.target.value)}}}),e.error.account?r("div",{staticClass:"invalid-message"},[e._v("帳號不得空白！")]):e._e()]),r("div",{staticClass:"form-label-group"},[r("label",{attrs:{for:"password"}},[e._v("密碼")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",class:{invalid:e.error.password},attrs:{id:"password",name:"password",type:"password",autocomplete:"new-password",placeholder:"密碼",required:""},domProps:{value:e.password},on:{input:function(n){n.target.composing||(e.password=n.target.value)}}}),e.error.password?r("div",{staticClass:"invalid-message"},[e._v("密碼不得空白！")]):e._e()]),r("button",{staticClass:"btnLogin",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" 登入 ")]),r("div",{staticClass:"text-link"},[r("router-link",{staticClass:"btnFontLogin",attrs:{to:"/login"}},[e._v("前台登入")])],1)])])},y=[],P=t("1da1"),x=(t("96cf"),t("d9e2"),t("7696")),C=t("c968"),S={name:"admin",data:function(){return{account:"",password:"",isProcessing:!1,error:{password:!1,account:!1}}},methods:{handleSubmit:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,e.isProcessing=!0,e.account){n.next=7;break}return e.error.account=!0,e.password="",e.isProcessing=!1,n.abrupt("return");case 7:if(e.password){n.next=11;break}return e.error.password=!0,e.isProcessing=!1,n.abrupt("return");case 11:return n.next=13,x["a"].adminLogin({account:e.account,password:e.password});case 13:if(t=n.sent,r=t.data,"error"!==r.status){n.next=17;break}throw new Error(r.message);case 17:C["a"].fire({title:"管理員，歡迎您！"}),localStorage.setItem("token",r.token),e.$router.push("/admin/main"),n.next=27;break;case 22:n.prev=22,n.t0=n["catch"](0),C["b"].fire({title:"請確認您輸入的帳號密碼"}),e.isProcessing=!1,console.log("error",n.t0);case 27:case"end":return n.stop()}}),n,null,[[0,22]])})))()}},watch:{password:function(){this.password&&(this.error.password=!1)},account:function(){this.account&&(this.error.account=!1)}}},U=S,B=(t("d188"),Object(i["a"])(U,A,y,!1,null,"7a5a6f01",null)),O=B.exports,E=t("5530"),j=(t("b0c0"),t("2f62")),I=t("4cce");c["a"].use(j["a"]);var R=new j["a"].Store({state:{currentUser:{account:"",avatar:"",cover:"",createdAt:"",email:"",id:-1,image:"",introduction:"",isAdmin:!1,name:"",role:"",updateAt:""},isAuthenticated:!1},mutations:{setCurrentUser:function(e,n){e.currentUser=Object(E["a"])(Object(E["a"])({},e.currentUser),n),e.isAuthenticated=!0}},actions:{fetchCurrentUser:function(e){return Object(P["a"])(regeneratorRuntime.mark((function n(){var t,r,a,c,o,u,i,s,d,l,f,h,p,m,g;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.prev=1,n.next=4,I["a"].getCurrentUser();case 4:r=n.sent,a=r.data,c=a.account,o=a.avatar,u=a.cover,i=a.createdAt,s=a.email,d=a.id,l=a.image,f=a.introduction,h=a.isAdmin,p=a.name,m=a.role,g=a.updateAt,t("setCurrentUser",{account:c,avatar:o,cover:u,createdAt:i,email:s,id:d,image:l,introduction:f,isAdmin:h,name:p,role:m,updateAt:g}),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](1),console.log("error",n.t0),console.error("can not fetch user information");case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()}},modules:{}});c["a"].use(f["a"]);var z=[{path:"/",name:"root",redirect:"/login"},{path:"/main",name:"main",component:function(){return Promise.all([t.e("chunk-6916d64e"),t.e("chunk-1ac01f0a"),t.e("chunk-42b1b75a")]).then(t.bind(null,"7f94"))}},{path:"/main/tweet",name:"mainTweet",component:w},{path:"/tweet",name:"tweet",component:function(){return t.e("chunk-12acd2b4").then(t.bind(null,"4287"))}},{path:"/reply/modal",name:"reply/modal",component:function(){return Promise.all([t.e("chunk-6916d64e"),t.e("chunk-3d02ef31"),t.e("chunk-770cf8f8")]).then(t.bind(null,"8f8e"))}},{path:"/reply/:id",name:"reply",component:function(){return Promise.all([t.e("chunk-6916d64e"),t.e("chunk-1ac01f0a"),t.e("chunk-2ba36c3a")]).then(t.bind(null,"7d91"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-74725a3a").then(t.bind(null,"dd7b"))}},{path:"/register",name:"register",component:function(){return t.e("chunk-addd2f3a").then(t.bind(null,"7803"))}},{path:"/user/:id",name:"user",component:function(){return Promise.all([t.e("chunk-1ac01f0a"),t.e("chunk-7f5a2ec5")]).then(t.bind(null,"1511"))},redirect:"/user/:id/tweets",children:[{path:"tweets",name:"user-tweets",component:function(){return Promise.all([t.e("chunk-6916d64e"),t.e("chunk-3d02ef31"),t.e("chunk-770cf8f8")]).then(t.bind(null,"8f8e"))}},{path:"replies",name:"user-replies",component:function(){return Promise.all([t.e("chunk-6916d64e"),t.e("chunk-3d02ef31"),t.e("chunk-5ee14d2a")]).then(t.bind(null,"942f"))}},{path:"likes",name:"user-likes",component:function(){return Promise.all([t.e("chunk-6916d64e"),t.e("chunk-3d02ef31"),t.e("chunk-d346fdba")]).then(t.bind(null,"43a0"))}},{path:"followers",name:"user-followers",component:function(){return t.e("chunk-09e20652").then(t.bind(null,"cd53"))}},{path:"followings",name:"user-followings",component:function(){return t.e("chunk-743410a1").then(t.bind(null,"6f77"))}}]},{path:"/profile/setting",name:"setting",component:function(){return t.e("chunk-f81a2616").then(t.bind(null,"79d9"))}},{path:"/chatroom/public",name:"public-chat-room",component:function(){return Promise.all([t.e("chunk-6916d64e"),t.e("chunk-21f42770"),t.e("chunk-636d96df")]).then(t.bind(null,"d583"))}},{path:"/chatroom/private",name:"private-chat-room",component:function(){return Promise.all([t.e("chunk-6916d64e"),t.e("chunk-21f42770"),t.e("chunk-416c7d9b")]).then(t.bind(null,"83a2"))}},{path:"/admin",name:"admin-root",redirect:"/admin/signin"},{path:"/admin/signin",name:"admin-signin",component:O},{path:"/admin/main",name:"admin-main",component:function(){return Promise.all([t.e("chunk-6916d64e"),t.e("chunk-07412521")]).then(t.bind(null,"cd21"))}},{path:"/admin/users",name:"admin-users",component:function(){return t.e("chunk-7f97474c").then(t.bind(null,"9d5c"))}},{path:"*",name:"not-found",component:b}],L=new f["a"]({routes:z});L.beforeEach((function(e,n,t){R.dispatch("fetchCurrentUser"),t()}));var _=L;t("fb98");c["a"].config.productionTip=!1,new c["a"]({router:_,store:R,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"6a07":function(e,n,t){"use strict";t("a678")},7696:function(e,n,t){"use strict";var r=t("c968");n["a"]={login:function(e){var n=e.account,t=e.password;return r["c"].post("/signin",{account:n,password:t})},register:function(e){return r["c"].post("/users",e)},adminLogin:function(e){var n=e.account,t=e.password;return r["c"].post("/admin/signin",{account:n,password:t})}}},"9c0c":function(e,n,t){},a678:function(e,n,t){},bca0:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOMSURBVHgB7ZhbctMwFIZ/pbeB4aE7wKygsIKSFUBX0HRogbemKyBZQdM3rtN2BYQVNN1BsgOzgzxDsfl1rCSObMeS7aeOv5k0qS3L+nUuOhLQ0tLS0tLS8nhQaJC4h31s4yW28AYxXvMT8A37yU3M+XeKDj8x7tVXjNEgjQgRAbs45wD7y4GXE/Jzgz+4VTfyuxa1hcRnFAAMPATYhJyAofpGUTWoJSR+j0t+9bM3MKELzRCJG4Xm2j5d7i1/HfIT5HQ3ortdoCKVhdAS13y6Z/V2g390le8UUvScdsMdseC5dSukkBeoyDYqYCzRS10KOfsntoD4lAGvOPt/MVnEAb910PfZh/7+tGzcQRc18LYILdHjU9epS2M8pYiRDCxp02Pm2qFYRSErBpzx4VpfH3An2Y2WVF9wghp4CeEAA2anOyx8PBI36llttIi73OCP0E1bLf7IfiK2pTXU53qZq+PVehfHWAXqOEdEUCgieVvakpDBxziyReh+xPIe+AlZxUXIJy/sl4u1NqfhQOImBdPuNNNqj7GjcCmJwRFnIfE7SZ2BeSrrCnsSuEFpR0r6KX6PnpBYJiypEhxxt0jHzKQOzBxXMC8vR7F82UQSg4u2G0WvD8+95YHpfJi5t5dKo+UERS5jqoQgdekQzsNzJaKZ61pjwU7WBaUfXeqkUQ6uanAXooOYq3bmup81NOGGALct1Xywk3lu6RGvZyGHN+av4HG9us9HyMS+YNwhgDvDwoUvyq1+53DER8gsc2XLPT1yxq9YogwK7z9IpTy3npnCEZ8Y+ZnztKsPTxkX/Y3d62JS4Zd1eQZH3IU8wW9UQ1cBR3k3pNZKY7tXVLwdsHEWkq5uVyMpLfSmrIxf5cWF7Gcia8Fbd69Q/XDf1/vWWmtIFlMFs8aYoIiuPQF6MVxuyuL1Vd6412LBvYXPWOCJHojZHCX/J6X4AKtVeMr/r/JStSksdaytkoRV2ks7XflucTPmUdr7C9HV6wPN7nHyUXLKEvIkpVv3JKXSIkQxekDzspMPY61jh2Oi3K2yD9UPH04poiPupHP9bBn4Sg7lnpsVP4APFMzJuUIF6h0HnWGUcxpSsTPGVclas4l6WUu/OJZDgxBVSdLtRR0RMhY0gImFHn+m9/QlD0mq1Sl6lLtGedLoIbZGtsTbEh8HZg+zOsRWtJzCPbcDYzxj2dKAgJaWlpaWlpbHyH+U4CVKFk5n+wAAAABJRU5ErkJggg=="},c968:function(e,n,t){"use strict";t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t("bc3a"),a=t.n(r),c=t("3d20"),o=t.n(c),u="https://mighty-ridge-02983.herokuapp.com/api",i=a.a.create({baseURL:u}),s=o.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,imageUrl:"https://i.imgur.com/Mip3qeP.jpg"}),d=o.a.mixin({toast:!0,position:"top-end",timer:3e3,showConfirmButton:!1,imageUrl:"https://i.imgur.com/Bc63ZDR.png"})},d188:function(e,n,t){"use strict";t("2303")},fb98:function(e,n,t){}});
//# sourceMappingURL=app.639c0bde.js.map