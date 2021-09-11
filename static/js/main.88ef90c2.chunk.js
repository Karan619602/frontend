(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(18),c=a.n(n),s=(a(70),a(40),a(9)),o=a(11),i=a(31),l=a(6),u=a(19),d=a(8),j=a(14),b=a.n(j),p=a(20),O="LOGIN_REQUEST",h="LOGIN_SUCCESS",m="LOGIN_FAIL",f="REGISTER_USER_REQUEST",v="REGISTER_USER_SUCCESS",x="REGISTER_USER_FAIL",g="LOAD_USER_REQUEST",y="LOAD_USER_SUCCESS",S="LOAD_USER_FAIL",E="LOGOUT_SUCCESS",_="LOGOUT_FAIL",N="ALL_USERS_REQUEST",w="ALL_USERS_SUCCESS",U="ALL_USERS_FAIL",A="UPDATE_USER_REQUEST",R="UPDATE_USER_SUCCESS",L="UPDATE_USER_FAIL",C="USER_DETAILS_REQUEST",F="USER_DETAILS_SUCCESS",k="USER_DETAILS_FAIL",I="CLEAR_ERRORS",T=a(21),D=a.n(T),G=function(){return function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("/api/user/logout");case 3:t({type:E}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:_,payload:e.t0.response.data.message});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},P=function(e,t){return function(){var a=Object(p.a)(b.a.mark((function a(r){var n,c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:A}),a.next=4,D.a.put("/api/admin/approved/driver/".concat(e),t);case 4:n=a.sent,c=n.data,r({type:R,payload:c}),console.log(c),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),r({type:L,payload:a.t0});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},Q=function(){return function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:I});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=(a(121),a(4)),W=function(e){var t=e.history,a=Object(r.useState)({username:"",email:"",password:"",role:""}),n=Object(u.a)(a,2),c=n[0],s=n[1],o=c.username,j=c.email,O=c.password,h=(c.role,Object(d.b)()),m=Object(d.c)((function(e){return e.auth})),g=m.isAuthenicated,y=(m.loading,m.error);Object(r.useEffect)((function(){g&&t.push("/"),y&&(h(Q()),console.log(y))}),[t,h,y,g]);var S=function(e){s(Object(l.a)(Object(l.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(V.jsx)(r.Fragment,{children:Object(V.jsx)("div",{className:"row wrapper",children:Object(V.jsx)("div",{className:"col-10 col-lg-5",children:Object(V.jsxs)("form",{className:"shadow-lg",onSubmit:function(e){var t;e.preventDefault(),h((t=c,function(){var e=Object(p.a)(b.a.mark((function e(a){var r,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:f}),e.next=4,D.a.post("/api/user/register",t);case 4:r=e.sent,n=r.data,console.log(n),a({type:v,payload:n.user}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:x,payload:e.t0.response.data.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),s({username:"",email:"",password:"",role:""})},children:[Object(V.jsx)("h1",{className:"mb-3",children:"Register"}),Object(V.jsxs)("div",{className:"form-group",children:[Object(V.jsx)("label",{htmlFor:"email_field",children:"Name"}),Object(V.jsx)("input",{type:"name",id:"name_field",className:"form-control",name:"username",value:o,onChange:S})]}),Object(V.jsxs)("div",{className:"form-group",children:[Object(V.jsx)("label",{htmlFor:"email_field",children:"Email"}),Object(V.jsx)("input",{type:"email",id:"email_field",className:"form-control",name:"email",value:j,onChange:S})]}),Object(V.jsxs)("div",{className:"form-group",children:[Object(V.jsx)("label",{htmlFor:"password_field",children:"Password"}),Object(V.jsx)("input",{type:"password",id:"password_field",className:"form-control",name:"password",value:O,onChange:S})]}),Object(V.jsx)("button",{id:"register_button",type:"submit",className:"btn btn-block py-3",children:"REGISTER"})]})})})})},J=function(){return Object(V.jsx)("div",{})},B=function(e){var t=e.history,a=Object(r.useState)(""),n=Object(u.a)(a,2),c=n[0],o=n[1],i=Object(r.useState)(""),l=Object(u.a)(i,2),j=l[0],f=l[1],v=Object(d.b)(),x=Object(d.c)((function(e){return e.auth})),g=x.isAuthenicated,y=(x.loading,x.error);Object(r.useEffect)((function(){g&&t.push("/"),y&&v(Q())}),[v,g,y,t]);return Object(V.jsx)(r.Fragment,{children:Object(V.jsx)(r.Fragment,{children:Object(V.jsx)("div",{className:"row wrapper",children:Object(V.jsx)("div",{className:"col-10 col-lg-5",children:Object(V.jsxs)("form",{className:"shadow-lg",onSubmit:function(e){e.preventDefault(),v(function(e,t){return function(){var a=Object(p.a)(b.a.mark((function a(r){var n,c,s;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:O}),n={headers:{"Content-Type":"application/json"}},a.next=5,D.a.post("/api/user/login",{email:e,password:t},n);case 5:c=a.sent,s=c.data,console.log(s),r({type:h,payload:s.user}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),r({type:m,payload:a.t0.response.data.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(c,j))},children:[Object(V.jsx)("h1",{className:"mb-3 login",children:"Login"}),Object(V.jsxs)("div",{className:"form-group",children:[Object(V.jsx)("label",{htmlFor:"email_field",children:"Email"}),Object(V.jsx)("input",{type:"email",id:"email_field",className:"form-control",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(V.jsxs)("div",{className:"form-group",children:[Object(V.jsx)("label",{htmlFor:"password_field",children:"Password"}),Object(V.jsx)("input",{type:"password",id:"password_field",className:"form-control",value:j,onChange:function(e){return f(e.target.value)}})]}),Object(V.jsx)("button",{id:"login_button",type:"submit",className:"btn btn-block py-3 buttoncolor",children:"LOGIN"}),Object(V.jsx)(s.b,{to:"/registers",className:"float-right mt-3",children:"New User?"})]})})})})})},M=function(){var e=Object(d.b)();return Object(V.jsx)(s.b,{to:"/",onClick:function(){e(G())},children:"Logout"})},q=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.auth})),a=t.user;t.loading;return Object(V.jsx)(r.Fragment,{children:Object(V.jsx)("div",{className:"navbar",children:a?Object(V.jsxs)("div",{children:[Object(V.jsx)("h1",{className:"heading",children:"Welcome to app"}),a&&"admin"===a.role&&Object(V.jsx)(s.b,{to:"/dashboard",children:"Dashboard"}),Object(V.jsx)(s.b,{className:"text-danger",to:"/",onClick:function(){e(G())},children:"Logout"}),Object(V.jsx)(s.b,{to:"/profile",children:"profile"})]}):Object(V.jsxs)(r.Fragment,{children:[Object(V.jsx)("h1",{className:"heading",children:"Welcome to  app"}),Object(V.jsx)(s.b,{to:"/login",id:"login_btn",children:"Login"}),Object(V.jsx)(s.b,{to:"/register",id:"signup_btn",children:"signup"}),Object(V.jsx)(s.b,{to:"/profile",children:"profile"})]})})})},z=a(28),H=a(59),K=a(60),X=Object(z.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case f:case g:return{loading:!0,isAuthenicated:!1};case h:case v:case y:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,isAuthenicated:!0,user:t.payload});case E:return{loading:!1,isAuthenicated:!1,user:null};case S:return{loading:!1,isAuthenicated:!1,user:null,error:t.payload};case _:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload});case m:case x:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,isAuthenicated:!1,user:null,error:t.payload});case I:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload});default:return e}},alluser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case w:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,users:t.payload});case U:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case R:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,isUpdated:t.payload});case L:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:t.payload});case I:return Object(l.a)(Object(l.a)({},e),{},{error:null});default:return e}},driverdetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case F:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,user:t.payload});case k:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:t.payload});case I:return Object(l.a)(Object(l.a)({},e),{},{error:null});default:return e}}}),Y=[H.a],Z=Object(z.createStore)(X,{},Object(K.composeWithDevTools)(z.applyMiddleware.apply(void 0,Y))),$=a(66),ee=function(e){var t=e.isAdmin,a=e.component,n=Object($.a)(e,["isAdmin","component"]),c=Object(d.c)((function(e){return e.auth})),s=c.isAuthenicated,i=c.loading,u=c.user;return Object(V.jsx)(r.Fragment,{children:!1===i&&Object(V.jsx)(o.b,Object(l.a)(Object(l.a)({},n),{},{render:function(e){return!1===s?Object(V.jsx)(o.a,{to:"/login"}):!0===t&&"admin"!==u.role?Object(V.jsx)(o.a,{to:"/"}):Object(V.jsx)(a,Object(l.a)({},e))}}))})},te=function(){var e=Object(d.c)((function(e){return e.auth})),t=e.user,a=e.loading;return Object(V.jsx)(r.Fragment,{children:a?Object(V.jsx)("h2",{children:"user not login"}):Object(V.jsxs)("div",{children:[Object(V.jsx)("h1",{children:t.username}),Object(V.jsx)("h2",{children:t.email})]})})},ae=a(65),re=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.alluser})),a=t.users,n=t.loading,c=Object(r.useState)(""),o=Object(u.a)(c,2);o[0],o[1];Object(r.useEffect)((function(){e(function(){var e=Object(p.a)(b.a.mark((function e(t){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:N}),e.next=4,D.a.get("/api/admin/alldrivers");case 4:a=e.sent,r=a.data,t({type:w,payload:r.alldrivers}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:U,payload:e.t0.response});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(V.jsx)(r.Fragment,{children:Object(V.jsx)("div",{className:"col-12 col-md-10",children:Object(V.jsxs)(r.Fragment,{children:[Object(V.jsx)("h1",{className:"my-5",children:"All Users"}),n?Object(V.jsx)("h2",{children:" data not available"}):Object(V.jsx)(ae.c,{data:function(){var e={columns:[{label:"User ID",field:"id",sort:"asc"},{label:"Name",field:"drivername",sort:"asc"},{label:"phone",field:"Phone_No",sort:"asc"},{label:"Address",field:"address",sort:"asc"},{label:"vehicleName",field:"VehicleName",sort:"asc"},{label:"Status",field:"status",sort:"asc"},{label:"Actions",field:"options"}],rows:[]};return a.forEach((function(t){e.rows.push({id:t._id,drivername:t.drivername,Phone_No:t.Phone_No,address:t.address,VehicleName:t.VehicleName,status:t.status,options:Object(V.jsx)(r.Fragment,{children:Object(V.jsx)(s.b,{to:"/admin/drivers/".concat(t._id),className:"btn btn-primary py-1 px-2",children:Object(V.jsx)("i",{className:"fa fa-pencil"})})})})})),e}(),className:"px-3",bordered:!0,striped:!0,hover:!0})]})})})},ne=function(e){var t=e.match,a=Object(d.c)((function(e){return e.driverdetails})),n=a.user,c=(a.loading,Object(r.useState)("")),s=Object(u.a)(c,2),o=s[0],i=s[1],l=Object(d.b)(),j=t.params.id;Object(r.useEffect)((function(){var e;l((e=j,function(){var t=Object(p.a)(b.a.mark((function t(a){var r,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:C}),t.next=4,D.a.get("/api/admin/alldrivers/".concat(e));case 4:r=t.sent,n=r.data,a({type:F,payload:n.driver}),console.log(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:k,payload:t.t0.response.data.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()))}),[l,j]);return Object(V.jsx)(r.Fragment,{children:Object(V.jsxs)("div",{className:"row",children:[Object(V.jsx)("div",{className:"col-12 col-md-2"}),Object(V.jsx)("div",{className:"col-12 col-md-10",children:Object(V.jsx)("div",{className:"row wrapper",children:Object(V.jsx)("div",{className:"col-10 col-lg-5",children:Object(V.jsxs)("form",{className:"shadow-lg",children:[Object(V.jsx)("h1",{className:"mt-2 mb-5",children:"Update User"}),Object(V.jsxs)("div",{className:"form-group",children:[Object(V.jsx)("label",{htmlFor:"role_field",children:"status"}),Object(V.jsxs)("select",{id:"role_field",className:"form-control",name:"status",value:o,onChange:function(e){return i(e.target.value)},children:[Object(V.jsx)("option",{value:"Proceesing",children:"djd"}),Object(V.jsx)("option",{value:"Approved",children:"Approved"})]})]}),Object(V.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){return e=n._id,(new FormData).set("status",o),void l(P(e,o));var e},children:"Update Status"})]})})})})]})})};var ce=function(){return Object(r.useEffect)((function(){Z.dispatch(function(){var e=Object(p.a)(b.a.mark((function e(t){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:g}),e.next=4,D.a.get("/api/user/profile");case 4:a=e.sent,r=a.data,t({type:y,payload:r.userprofile}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:S,payload:e.t0.response.data.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(V.jsxs)(s.a,{children:[Object(V.jsx)(q,{}),Object(V.jsx)(J,{}),Object(V.jsx)(o.b,{path:"/register",component:W,exact:!0}),Object(V.jsx)(o.b,{path:"/login",component:B,exact:!0}),Object(V.jsx)(o.b,{path:"/logout",component:M,exact:!0}),Object(V.jsx)(ee,{path:"/profile",component:te,exact:!0}),Object(V.jsx)(ee,{path:"/dashboard",isAdmin:!0,component:re,exact:!0}),Object(V.jsx)(ee,{path:"/admin/drivers/:id",isAdmin:!0,component:ne,exact:!0})]})};c.a.render(Object(V.jsx)(d.a,{store:Z,children:Object(V.jsx)(ce,{})}),document.getElementById("root"))},40:function(e,t,a){},70:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.88ef90c2.chunk.js.map