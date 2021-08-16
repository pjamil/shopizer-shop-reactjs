(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[23],{644:function(e,a,t){"use strict";t.r(a);var s=t(5),r=t.n(s),n=t(18),c=t(500),i=t(0),o=t(505),l=t.n(o),m=t(21),d=t(117),u=t(159),j=t(524),p=t(523),b=t(502),h=t(503),g=t(507),O=t(160),v=t(38),x=t(22),f=t(44),N=t(48),w=t(66),y=t(49),C=t(47),P=t(53),S=t(6),q={name:"username",validate:{required:{value:!0,message:"Email is required"},pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,message:"Please entered the valid email id"}}},I={name:"loginPassword",validate:{required:{value:!0,message:"Password is required"}}},T={email:{name:"email",validate:{required:{value:!0,message:"Email is required"},pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,message:"Please entered the valid email id"}}},password:{name:"password",validate:{required:{value:!0,message:"Password is required"},validate:{hasSpecialChar:function(e){return e&&e.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)||"Password must be minimum of 8 characters atleast one number and one special character"}}}},repeatPassword:{name:"repeatPassword",validate:{required:{value:!0,message:"Repeat Password is required"}}},firstName:{name:"firstName",validate:{required:{value:!0,message:"Firstname is required"}}},lastName:{name:"lastName",validate:{required:{value:!0,message:"Lastname is required"}}},country:{name:"country",validate:{required:{value:!0,message:"Country is required"}}},stateProvince:{name:"stateProvince",validate:{required:{value:!0,message:"State is required"}}}};a.default=Object(C.connect)((function(e){return{shipCountryData:e.userData.shipCountry,cartItems:e.cartData.cartItems,currentLocation:e.userData.currentAddress,stateData:e.userData.state,defaultStore:e.merchantData.defaultStore,merchant:e.merchantData.merchant}}),(function(e){return{addToCart:function(a,t,s,r,n,c,i){e(Object(y.f)(a,t,s.code,r,n,c,i))},setLoader:function(a){e(Object(N.b)(a))},setUser:function(a){e(Object(w.k)(a))},getShippingCountry:function(a){e(Object(w.h)(a))},getState:function(a){e(Object(w.j)(a))},getCart:function(a,t){e(Object(y.i)(a,t))}}}))(Object(P.multilanguage)((function(e){var a=e.merchant,t=e.strings,s=(e.props,e.location),o=e.setLoader,N=e.setUser,w=e.getCart,y=e.getShippingCountry,C=e.getState,k=e.shipCountryData,R=e.currentLocation,E=e.stateData,L=e.cartItems,D=e.addToCart,A=e.defaultStore,_=s.pathname,M=Object(O.useToasts)().addToast,U=Object(m.f)(),K=Object(i.useState)(!1),$=Object(c.a)(K,2),F=$[0],J=$[1],V=Object(g.b)({mode:"onChange",defaultValues:{username:"",password:""},criteriaMode:"all"}),B=V.register,G=V.handleSubmit,H=V.errors,Y=V.setValue,z=Object(g.b)({mode:"onChange",criteriaMode:"all"}),Z=z.register,Q=z.errors,W=z.handleSubmit,X=z.setValue,ee=z.control,ae=z.watch,te=z.setError,se=z.clearErrors;Object(i.useEffect)((function(){"true"===Object(f.a)("isRemember")&&(J(!0),Y("username",Object(f.a)("loginEmail"))),y(P.multilanguage.currentLanguageCode),re()}),[L]);var re=function(){R.length>0&&(X("country",R.find((function(e){return e.types.some((function(e){return"country"===e}))})).address_components[0].short_name),X("stateProvince",R.find((function(e){return e.types.some((function(e){return"administrative_area_level_1"===e}))})).address_components[0].long_name))},ne=function(){var e=Object(n.a)(r.a.mark((function e(a){var t,s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,t=x.a.ACTION.CUSTOMER+x.a.ACTION.LOGIN,s={username:a.username,password:a.loginPassword},e.next=6,v.a.post(t,s);case 6:(n=e.sent)&&(Object(f.c)(L)?ce(n):w("",n),"true"===Object(f.a)("isRemember")?Object(f.e)("loginEmail",a.username):Object(f.e)("loginEmail",""),M("You have successfully logged in to this website",{appearance:"success",autoDismiss:!0}),N(n),Object(f.e)("token",n.token),U.push("my-account")),o(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),M("Incorrect username or password",{appearance:"error",autoDismiss:!0}),o(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}(),ce=function(){var e=Object(n.a)(r.a.mark((function e(a){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=x.a.ACTION.AUTH+x.a.ACTION.CUSTOMER+x.a.ACTION.CARTS+"?&lang="+JSON.parse(Object(f.a)("redux_localstorage_simple")).multilanguage.currentLanguageCode,e.next=4,v.a.get(t);case 4:s=e.sent,console.log(s),s&&setTimeout((function(){console.log(s.code),L.products.forEach((function(e){console.log(s.code),D(e,"",s,e.quantity,A,a)}))}),2e3),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),ie=function(){var e=Object(n.a)(r.a.mark((function e(a){var t,s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,t=x.a.ACTION.CUSTOMER+x.a.ACTION.REGISTER,s={userName:a.email,password:a.password,emailAddress:a.email,gender:"M",language:"en",billing:{country:a.country,stateProvince:a.stateProvince,firstName:a.firstName,lastName:a.lastName}},e.next=6,v.a.post(t,s);case 6:(n=e.sent)&&(M("'You have successfully registerd in to this website.",{appearance:"success",autoDismiss:!0}),N(n),Object(f.e)("token",n.token),U.push("my-account")),o(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),M("Registering customer already exist",{appearance:"error",autoDismiss:!0}),o(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}();return Object(S.jsxs)(i.Fragment,{children:[Object(S.jsx)(l.a,{children:Object(S.jsxs)("title",{children:[a.name," | ",t.Login]})}),Object(S.jsx)(u.BreadcrumbsItem,{to:"/",children:t.Home}),Object(S.jsx)(u.BreadcrumbsItem,{to:""+_,children:t.Login}),Object(S.jsxs)(b.a,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",headerTop:"visible",children:[Object(S.jsx)(h.a,{}),Object(S.jsx)("div",{className:"login-register-area pt-100 pb-100",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsx)("div",{className:"row",children:Object(S.jsx)("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto",children:Object(S.jsx)("div",{className:"login-register-wrapper",children:Object(S.jsxs)(j.a.Container,{defaultActiveKey:_.split("/")[1],children:[Object(S.jsxs)(p.a,{variant:"pills",className:"login-register-tab-list",children:[Object(S.jsx)(p.a.Item,{children:Object(S.jsx)(p.a.Link,{eventKey:"login",children:Object(S.jsxs)("h4",{children:[" ",t.Login]})})}),Object(S.jsx)(p.a.Item,{children:Object(S.jsx)(p.a.Link,{eventKey:"register",children:Object(S.jsxs)("h4",{children:[" ",t.Register]})})})]}),Object(S.jsxs)(j.a.Content,{children:[Object(S.jsx)(j.a.Pane,{eventKey:"login",children:Object(S.jsx)("div",{className:"login-form-container",children:Object(S.jsx)("div",{className:"login-register-form",children:Object(S.jsxs)("form",{onSubmit:G(ne),children:[Object(S.jsxs)("div",{className:"login-input",children:[Object(S.jsx)("input",{type:"text",name:q.name,placeholder:t["Email address"],ref:B(q.validate)}),H[q.name]&&Object(S.jsx)("p",{className:"error-msg",children:H[q.name].message})]}),Object(S.jsxs)("div",{className:"login-input",children:[Object(S.jsx)("input",{type:"text",className:"user-password",name:I.name,placeholder:t.Password,ref:B(I.validate)}),H[I.name]&&Object(S.jsx)("p",{className:"error-msg",children:H[I.name].message})]}),Object(S.jsxs)("div",{className:"button-box",children:[Object(S.jsxs)("div",{className:"login-toggle-btn",children:[Object(S.jsx)("input",{type:"checkbox",checked:F,onChange:function(e){J(!F),e.target.checked?Object(f.e)("isRemember",!0):Object(f.e)("isRemember",!1)}}),Object(S.jsx)("label",{className:"ml-10",children:t["Remember me"]}),Object(S.jsx)(d.b,{to:"/forgot-password",children:t["Forgot Password?"]})]}),Object(S.jsx)("button",{type:"submit",children:Object(S.jsx)("span",{children:t.Login})})]})]})})})}),Object(S.jsx)(j.a.Pane,{eventKey:"register",children:Object(S.jsx)("div",{className:"login-form-container",children:Object(S.jsx)("div",{className:"login-register-form",children:Object(S.jsxs)("form",{onSubmit:W(ie),children:[Object(S.jsx)("p",{className:"login-info",children:t["Login Information"]}),Object(S.jsxs)("div",{className:"login-input",children:[Object(S.jsx)("input",{type:"email",autoComplete:"Email",name:T.email.name,ref:Z(T.email.validate),placeholder:t.Username}),Q[T.email.name]&&Object(S.jsx)("p",{className:"error-msg",children:Q[T.email.name].message})]}),Object(S.jsxs)("div",{className:"login-input",children:[Object(S.jsx)("input",{type:"password",autoComplete:"new-password",name:T.password.name,ref:Z(T.password.validate),placeholder:t.Password,onChange:function(e){return function(e){if(""!==ae("repeatPassword")&&ae("repeatPassword")!==e.target.value)return te(T.repeatPassword.name,{type:"notMatch",message:"Repeat Password should be the same as a password"});se(T.repeatPassword.name)}(e)}}),Q[T.password.name]&&Object(S.jsx)("p",{className:"error-msg",children:Q[T.password.name].message})]}),Object(S.jsxs)("div",{className:"login-input",children:[Object(S.jsx)("input",{type:"password",name:T.repeatPassword.name,ref:Z(T.repeatPassword.validate),placeholder:t["Repeat Password"],onChange:function(e){return function(e){if(ae("password")!==e.target.value)return te(T.repeatPassword.name,{type:"notMatch",message:"Repeat Password should be the same as a password"})}(e)}}),Q[T.repeatPassword.name]&&Object(S.jsx)("p",{className:"error-msg",children:Q[T.repeatPassword.name].message})]}),Object(S.jsx)("p",{className:"login-info",children:t["Personal Information"]}),Object(S.jsxs)("div",{className:"login-input",children:[Object(S.jsx)("input",{type:"text",name:T.firstName.name,ref:Z(T.firstName.validate),placeholder:t["First Name"]}),Q[T.firstName.name]&&Object(S.jsx)("p",{className:"error-msg",children:Q[T.firstName.name].message})]}),Object(S.jsxs)("div",{className:"login-input",children:[Object(S.jsx)("input",{type:"text",name:T.lastName.name,ref:Z(T.lastName.validate),placeholder:t["Last Name"]}),Q[T.lastName.name]&&Object(S.jsx)("p",{className:"error-msg",children:Q[T.lastName.name].message})]}),Object(S.jsxs)("div",{className:"login-input",children:[Object(S.jsx)(g.a,{name:T.country.name,control:ee,rules:T.country.validate,render:function(e){return Object(S.jsxs)("select",{onChange:function(a){e.onChange(a.target.value),C(a.target.value)},value:e.value,children:[Object(S.jsx)("option",{children:t["Select a country"]}),k.map((function(e,a){return Object(S.jsx)("option",{value:e.code,children:e.name},a)}))]})}}),Q[T.country.name]&&Object(S.jsx)("p",{className:"error-msg",children:Q[T.country.name].message})]}),Object(S.jsxs)("div",{className:"login-input",children:[E&&E.length>0?Object(S.jsx)(g.a,{name:T.stateProvince.name,control:ee,rules:T.stateProvince.validate,render:function(e){return Object(S.jsxs)("select",{onChange:function(a){e.onChange(a.target.value)},value:e.value,children:[Object(S.jsx)("option",{children:t["Select a state"]}),E.map((function(e,a){return Object(S.jsx)("option",{value:e.code,children:e.name},a)}))]})}}):Object(S.jsx)("input",{type:"text",name:T.stateProvince.name,ref:Z(T.stateProvince.validate),placeholder:t.State}),Q[T.stateProvince.name]&&Object(S.jsx)("p",{className:"error-msg",children:Q[T.stateProvince.name].message})]}),Object(S.jsx)("div",{className:"button-box",children:Object(S.jsx)("button",{type:"submit",children:Object(S.jsx)("span",{children:t.Register})})})]})})})})]})]})})})})})})]})]})})))}}]);
//# sourceMappingURL=23.3e97c5da.chunk.js.map