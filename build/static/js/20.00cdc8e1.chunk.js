(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[20],{650:function(e,t,a){"use strict";a.r(t);var s=a(5),n=a.n(s),r=a(18),i=a(500),c=a(0),o=a(21),l=a(117),d=a(505),m=a.n(d),u=a(47),p=a(159),j=a(502),h=a(503),b=a(44),O=a(22),g=a(38),v=a(66),x=a(507),f=a(635),y=a(636),N=a(160),C=a(48),P=a(545),w=a.n(P),T=a(53),A=a(6),S=Object(f.a)(window._env_.APP_STRIPE_KEY),_={firstName:{name:"firstName",validate:{required:{value:!0,message:"Firstname is required"}}},lastName:{name:"lastName",validate:{required:{value:!0,message:"Lastname is required"}}},company:{name:"company"},address:{name:"address",validate:{required:{value:!0,message:"Address is required"}}},city:{name:"city",validate:{required:{value:!0,message:"City is required"}}},country:{name:"country",validate:{required:{value:!0,message:"Country is required"}}},stateProvince:{name:"stateProvince",validate:{required:{value:!0,message:"State is required"}}},postalCode:{name:"postalCode",validate:{required:{value:!0,message:"Postal code is required"}}},phone:{name:"phone",validate:{required:{value:!0,message:"Phone number is required"},minLength:{value:10,message:"Enter a 10-digit number"}}},email:{name:"email",validate:{required:{value:!0,message:"Email is required"},pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,message:"Please entered the valid email id"}}},shipFirstName:{name:"shipFirstName",validate:{required:{value:!0,message:"Firstname is required"}}},shipLastName:{name:"shipLastName",validate:{required:{value:!0,message:"Lastname is required"}}},shipCompany:{name:"shipCompany"},shipAddress:{name:"shipAddress",validate:{required:{value:!0,message:"Address is required"}}},shipCity:{name:"shipCity",validate:{required:{value:!0,message:"City is required"}}},shipCountry:{name:"shipCountry",validate:{required:{value:!0,message:"Country is required"}}},shipStateProvince:{name:"shipStateProvince",validate:{required:{value:!0,message:"State is required"}}},shipPostalCode:{name:"shipPostalCode",validate:{required:{value:!0,message:"Postal code is required"}}},isAgree:{name:"isAgree",validate:{required:{value:!0,message:"Please agree to our terms and conditions"}}},password:{name:"password",validate:{required:{value:!0,message:"Password is required"},validate:{hasSpecialChar:function(e){return e&&e.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)||"Password must be minimum of 8 characters atleast one number and one special character"}}}},repeatPassword:{name:"repeatPassword",validate:{required:{value:!0,message:"Repeat Password is required"}}}},I={iconStyle:"solid",hidePostalCode:!0,style:{base:{iconColor:"#303238",color:"#303238",fontSize:"16px",fontFamily:'"Open Sans", sans-serif',fontSmoothing:"antialiased","::placeholder":{color:"#CFD7DF"}},invalid:{color:"#e5424d",":focus":{color:"#e5424d"}}}};t.default=Object(u.connect)((function(e){return{cartID:e.cartData.cartID,shipCountryData:e.userData.shipCountry,stateData:e.userData.state,shipStateData:e.userData.shipState,currentLocation:e.userData.currentAddress,userData:e.userData.userData,defaultStore:e.merchantData.defaultStore,merchant:e.merchantData.merchant,isLoading:e.loading.isLoading,currentLanguageCode:e.multilanguage.currentLanguageCode}}),(function(e){return{setLoader:function(t){e(Object(C.b)(t))},getShippingCountry:function(t){e(Object(v.h)(t))},getState:function(t){e(Object(v.j)(t))},getShippingState:function(t){e(Object(v.i)(t))},deleteAllFromCart:function(e){}}}))(Object(T.multilanguage)((function(e){var t=e.shipStateData,a=e.isLoading,s=e.currentLanguageCode,d=e.merchant,u=e.strings,v=e.location,f=e.cartID,C=e.defaultStore,P=e.getShippingCountry,T=e.getState,E=e.getShippingState,k=e.shipCountryData,q=e.stateData,D=e.currentLocation,R=e.userData,L=e.setLoader,F=e.deleteAllFromCart,M=v.pathname,z=Object(o.f)(),H=Object(N.useToasts)().addToast,U=Object(c.useState)({}),Y=Object(i.a)(U,2),Q=Y[0],B=Y[1],G=Object(c.useState)([]),K=Object(i.a)(G,2),$=K[0],J=K[1],V=Object(c.useState)(!1),X=Object(i.a)(V,2),Z=X[0],W=X[1],ee=Object(c.useState)(!1),te=Object(i.a)(ee,2),ae=te[0],se=te[1],ne=Object(c.useState)(""),re=Object(i.a)(ne,2),ie=re[0],ce=re[1],oe=Object(c.useState)(),le=Object(i.a)(oe,2),de=le[0],me=le[1],ue=Object(c.useState)([]),pe=Object(i.a)(ue,2),je=pe[0],he=pe[1],be=Object(c.useState)(""),Oe=Object(i.a)(be,2),ge=Oe[0],ve=Oe[1],xe=Object(c.useState)(),fe=Object(i.a)(xe,2),ye=fe[0],Ne=fe[1],Ce=Object(c.useState)(""),Pe=Object(i.a)(Ce,2),we=Pe[0],Te=Pe[1],Ae=Object(x.b)({mode:"onChange",criteriaMode:"all"}),Se=Ae.register,_e=Ae.control,Ie=Ae.handleSubmit,Ee=Ae.errors,ke=Ae.setValue,qe=Ae.watch,De=Ae.reset,Re=Ae.setError,Le=Ae.clearErrors,Fe=Object(c.useState)(null),Me=Object(i.a)(Fe,2),ze=Me[0],He=Me[1];Object(c.useEffect)((function(){Ue(),T(""),E(""),P(s),Be(),$e(""),Ke()}),[]);var Ue=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),console.log("GET SUMMARY"),t=O.a.ACTION.CART+f+"?store="+C,e.prev=3,e.next=6,g.a.get(t);case 6:(a=e.sent)&&(L(!1),J(a)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),L(!1),F(),setTimeout((function(){z.push("/")}),200);case 15:R?Qe():Ye();case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),Ye=function(){D.length>0&&(ke("country",D.find((function(e){return e.types.some((function(e){return"country"===e}))})).address_components[0].short_name),ke("city",D.find((function(e){return e.types.some((function(e){return"locality"===e}))})).address_components[0].short_name),ke("stateProvince",D.find((function(e){return e.types.some((function(e){return"administrative_area_level_1"===e}))})).address_components[0].short_name))},Qe=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.a.ACTION.AUTH+O.a.ACTION.CUSTOMER+O.a.ACTION.PROFILE,e.prev=1,e.next=4,g.a.get(t);case 4:(a=e.sent)&&(T(a.billing.country),ke("firstName",a.billing.firstName),ke("lastName",a.billing.lastName),ke("company",a.billing.company),ke("address",a.billing.address),ke("country",a.billing.country),ke("city",a.billing.city),setTimeout((function(){ke("stateProvince",a.billing.zone)}),1e3),ke("postalCode",a.billing.postalCode),ke("phone",a.billing.phone),ke("email",a.emailAddress),a.delivery&&Ne(a.delivery),Ke()),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.a.ACTION.CONFIG,e.prev=1,e.next=4,g.a.get(t);case 4:(a=e.sent)&&B(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(r.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(!Z),setTimeout((function(){R?ye&&(E(ye.country),ke("shipFirstName",ye.firstName),ke("shipLastName",ye.lastName),ke("shipCompany",ye.company),ke("shipAddress",ye.address),ke("shipCountry",ye.country),ke("shipCity",ye.city),setTimeout((function(){ke("shipStateProvince",ye.zone)}),1e3),ke("shipPostalCode",ye.postalCode)):D.length>0&&setTimeout((function(){E(D.find((function(e){return e.types.some((function(e){return"country"===e}))})).address_components[0].short_name),ke("shipCountry",D.find((function(e){return e.types.some((function(e){return"country"===e}))})).address_components[0].short_name),ke("shipCity",D.find((function(e){return e.types.some((function(e){return"locality"===e}))})).address_components[0].short_name),setTimeout((function(){ke("shipStateProvince",D.find((function(e){return e.types.some((function(e){return"administrative_area_level_1"===e}))})).address_components[0].short_name)}),1e3),Ke()}),1e3)}),1e3);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.a.ACTION.CART+f+"/"+O.a.ACTION.SHIPPING,a={},a=Z?{postalCode:qe("shipPostalCode"),countryCode:qe("shipCountry")}:{postalCode:qe("postalCode"),countryCode:qe("country"),zpneCode:qe("shipStateProvince")},e.prev=3,e.next=6,g.a.post(t,a);case 6:(s=e.sent)&&("null"===s.shippingOptions||null===s.shippingOptions?$e(""):$e(s.shippingOptions[s.shippingOptions.length-1].shippingQuoteOptionId),me(s.shippingOptions),ve(s.shippingOptions[s.shippingOptions.length-1].shippingQuoteOptionId)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),$e=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?O.a.ACTION.CART+f+"/"+O.a.ACTION.TOTAL+"?quote="+t:O.a.ACTION.CART+f+"/"+O.a.ACTION.TOTAL,e.prev=1,e.next=4,g.a.get(a);case 4:(s=e.sent)&&he(s.totals),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),Je=function(){var e=Object(r.a)(n.a.mark((function e(t,a,s){var r,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),f||z.push("/"),r=a.getElement(y.CardElement),e.next=5,s.createToken(r);case 5:(i=e.sent).error?(L(!1),H(i.error.message,{appearance:"error",autoDismiss:!0})):Ve(t,i.token.id);case 7:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(r.a)(n.a.mark((function e(t,a){var s,r,i,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},R?(s=O.a.ACTION.AUTH+O.a.ACTION.CART+f+"/"+O.a.ACTION.CHECKOUT,r={shippingQuote:ge,currency:d.currency,payment:{paymentType:"CREDITCARD",transactionType:"CAPTURE",paymentModule:"stripe",paymentToken:a.token,amount:je[je.length-1].value}}):(s=O.a.ACTION.CART+f+"/"+O.a.ACTION.CHECKOUT,i={},i=Z?{emailAddress:t.email,billing:{address:t.address,city:t.city,postalCode:t.postalCode,country:t.country,zone:t.stateProvince,firstName:t.firstName,lastName:t.lastName},delivery:{address:t.shipAddress,city:t.shipCity,postalCode:t.shipPostalCode,country:t.shipCountry,zone:t.shipStateProvince,firstName:t.shipFirstName,lastName:t.shipLastName}}:{emailAddress:t.email,billing:{address:t.address,city:t.city,postalCode:t.postalCode,country:t.country,zone:t.stateProvince,firstName:t.firstName,lastName:t.lastName}},ae&&(i.password=t.password,i.repeatPassword=t.repeatPassword),r={shippingQuote:ge,currency:d.currency,payment:{paymentType:"CREDITCARD",transactionType:"CAPTURE",paymentModule:"stripe",paymentToken:a.token,amount:je[je.length-1].value},customer:i}),e.prev=2,e.next=5,g.a.post(s,r);case 5:(c=e.sent)&&(De({}),ze.clear(),F(c.id),Object(b.e)("order-email",t.email),H("Your order has been submitted",{appearance:"success",autoDismiss:!0}),z.push("/order-confirm")),L(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),H(ae?"Registering customer already exist":"Your order submission has been failed",{appearance:"error",autoDismiss:!0}),L(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.a.ACTION.CONTENT+O.a.ACTION.BOXES+O.a.ACTION.AGREEMENT,e.prev=1,e.next=4,g.a.get(t);case 4:(a=e.sent)&&Te(a.description.description),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();function Ze(){var e={postalCode:qe("postalCode"),countryCode:qe("country"),zoneCode:qe("stateProvince")};Z&&(e={postalCode:qe("shipPostalCode"),countryCode:qe("shipCountry"),zoneCode:qe("shipStateProvince")});var t="";t!==e&&(t=e,console.log("Required fields "+JSON.stringify(e)),We(t))}var We=function(){var e;if(!e)return function(){if(!e){e=!0;setTimeout((function(){console.log("Into execution"),e=!1}),5e3)}}}();return Object(A.jsxs)(c.Fragment,{children:[Object(A.jsx)(m.a,{children:Object(A.jsxs)("title",{children:[d.name," | ",u.Checkout]})}),Object(A.jsx)(p.BreadcrumbsItem,{to:"/",children:u.Home}),Object(A.jsx)(p.BreadcrumbsItem,{to:""+M,children:u.Checkout}),Object(A.jsxs)(j.a,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",headerTop:"visible",children:[Object(A.jsx)(h.a,{}),Object(A.jsx)("div",{className:"checkout-area pt-95 pb-100",children:Object(A.jsxs)("div",{className:"container",children:[Object(b.c)($)&&$.products.length>0&&!R&&Object(A.jsx)("div",{className:"checkout-heading",children:Object(A.jsx)(l.b,{to:"/login",children:u["Returning customer ? Click here to login"]})}),Object(b.c)($)&&$.products.length>0?Object(A.jsx)("form",{children:Object(A.jsxs)("div",{className:"row",children:[Object(A.jsx)("div",{className:"col-lg-6",children:Object(A.jsxs)("div",{className:"billing-info-wrap",children:[Object(A.jsx)("h3",{children:u["Billing Details"]}),Object(A.jsxs)("div",{className:"row",children:[Object(A.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["First Name"]}),Object(A.jsx)("input",{type:"text",name:_.firstName.name,ref:Se(_.firstName.validate)}),Ee[_.firstName.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.firstName.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["Last Name"]}),Object(A.jsx)("input",{type:"text",name:_.lastName.name,ref:Se(_.lastName.validate)}),Ee[_.lastName.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.lastName.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["Company Name"]}),Object(A.jsx)("input",{type:"text",name:_.company.name,ref:Se(_.company.validate)})]})}),Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["Street Address"]}),Object(A.jsx)(w.a,{url:"https://maps.googleapis.com/maps/api/js?key="+window._env_.APP_MAP_API_KEY+"&libraries=places",onLoad:function(){var e=new google.maps.places.Autocomplete(document.getElementById("autocomplete"),{types:["address"]});e.addListener("place_changed",(function(){var t=e.getPlace();ke("country",t.address_components.find((function(e){return e.types.some((function(e){return"country"===e}))})).short_name),T(t.address_components.find((function(e){return e.types.some((function(e){return"country"===e}))})).short_name);var a=t.address_components.find((function(e){return e.types.some((function(e){return"locality"===e}))}));void 0!==a&&ke("city",a.short_name);var s=t.address_components.find((function(e){return e.types.some((function(e){return"postal_code"===e}))}));void 0!==s&&ke("postalCode",s.long_name);for(var n={street_number:"short_name",route:"long_name",sublocality:"sublocality"},r=[],i=0;i<t.address_components.length;i++){var c=t.address_components[i].types[0];if(n[c]){var o=t.address_components[i][n[c]];r.push(o)}}ke("address",r.toString()),setTimeout((function(){ke("stateProvince",t.address_components.find((function(e){return e.types.some((function(e){return"administrative_area_level_1"===e}))})).short_name)}),2e3),Ke()}))}}),Object(A.jsx)("input",{className:"billing-address",placeholder:u["House number and street name"],type:"text",id:"autocomplete",name:_.address.name,ref:Se(_.address.validate)}),Ee[_.address.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.address.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"billing-select mb-20",children:[Object(A.jsx)("label",{children:u.Country}),Object(A.jsx)(x.a,{name:_.country.name,control:_e,rules:_.country.validate,render:function(e){return Object(A.jsxs)("select",{onChange:function(t){e.onChange(t.target.value),T(t.target.value),Ke()},value:e.value,children:[Object(A.jsx)("option",{children:u["Select a country"]}),k.map((function(e,t){return Object(A.jsx)("option",{value:e.code,children:e.name},t)}))]})}}),Ee[_.country.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.country.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["Town/City"]}),Object(A.jsx)("input",{type:"text",name:_.city.name,ref:Se(_.city.validate)}),Ee[_.city.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.city.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(A.jsxs)("div",{className:"billing-select mb-20",children:[Object(A.jsx)("label",{children:u.State}),q&&q.length>0?Object(A.jsx)(x.a,{name:_.stateProvince.name,control:_e,rules:_.stateProvince.validate,render:function(e){return Object(A.jsxs)("select",{onBlur:Ze(),onChange:function(t){return e.onChange(t.target.value)},value:e.value,children:[Object(A.jsx)("option",{children:u["State / province"]}),q.map((function(e,t){return Object(A.jsx)("option",{value:e.code,children:e.name},t)}))]})}}):Object(A.jsx)("input",{type:"text",name:_.stateProvince.name,ref:Se(_.stateProvince.validate)}),Ee[_.stateProvince.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.stateProvince.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u.Postcode}),Object(A.jsx)("input",{type:"text",name:_.postalCode.name,ref:Se(_.postalCode.validate),onChange:function(){clearTimeout(ie),ce(setTimeout((function(){Ke()}),500))}}),Ee[_.postalCode.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.postalCode.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u.Phone}),Object(A.jsx)("input",{type:"text",name:_.phone.name,ref:Se(_.phone.validate)}),Ee[_.phone.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.phone.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["Email address"]}),Object(A.jsx)("input",{type:"text",name:_.email.name,ref:Se(_.email.validate)}),Ee[_.email.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.email.name].message})]})})]}),!R&&Object(A.jsxs)("div",{className:"login-toggle-btn",children:[Object(A.jsx)("input",{type:"checkbox",value:ae,onChange:function(){return se(!ae)}}),Object(A.jsx)("label",{className:"ml-10 mb-20",children:u["Create an account"]})]}),ae&&Object(A.jsxs)("div",{children:[Object(A.jsx)("p",{className:"main-color",children:" Create an account by entering the information below.If you are a returning customer please login using the link at the top of the page."}),Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:"Account Password"}),Object(A.jsx)("input",{type:"password",name:_.password.name,ref:Se(_.password.validate),onChange:function(e){return function(e){if(""!==qe("repeatPassword")&&qe("repeatPassword")!==e.target.value)return Re(_.repeatPassword.name,{type:"notMatch",message:"Repeat Password should be the same as a password"});Le(_.repeatPassword.name)}(e)}}),Ee[_.password.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.password.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:"Repeat Account Password"}),Object(A.jsx)("input",{type:"password",name:_.repeatPassword.name,ref:Se(_.repeatPassword.validate),onChange:function(e){return function(e){if(qe("password")!==e.target.value)return Re(_.repeatPassword.name,{type:"notMatch",message:"Repeat Password should be the same as a password"})}(e)}}),Ee[_.repeatPassword.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.repeatPassword.name].message})]})})]}),Object(A.jsxs)("div",{className:"login-toggle-btn",children:[Object(A.jsx)("input",{type:"checkbox",value:Z,onChange:Ge}),Object(A.jsx)("label",{className:"ml-10 mb-20",children:u["SHIP TO A DIFFERENT ADDRESS?"]})]}),Z&&Object(A.jsxs)("div",{className:"billing-info-wrap",children:[Object(A.jsx)("h3",{children:u["Shipping Details"]}),Object(A.jsxs)("div",{className:"row",children:[Object(A.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["First Name"]}),Object(A.jsx)("input",{type:"text",name:_.shipFirstName.name,ref:Se(_.shipFirstName.validate)}),Ee[_.shipFirstName.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.shipFirstName.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["Last Name"]}),Object(A.jsx)("input",{type:"text",name:_.shipLastName.name,ref:Se(_.shipLastName.validate)}),Ee[_.shipLastName.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.shipLastName.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["Company Name"]}),Object(A.jsx)("input",{type:"text",name:_.shipCompany.name,ref:Se(_.shipCompany.validate)})]})}),Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["Street Address"]}),Object(A.jsx)("input",{className:"billing-address",placeholder:u["House number and street name"],type:"text",name:_.shipAddress.name,ref:Se(_.shipAddress.validate)}),Ee[_.shipAddress.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.shipAddress.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"billing-select mb-20",children:[Object(A.jsx)("label",{children:u.Country}),Object(A.jsx)(x.a,{name:_.shipCountry.name,control:_e,rules:_.shipCountry.validate,render:function(e){return Object(A.jsxs)("select",{onChange:function(t){e.onChange(t.target.value),E(t.target.value),Ke()},value:e.value,children:[Object(A.jsx)("option",{children:u["Select a country"]}),k.map((function(e,t){return Object(A.jsx)("option",{value:e.code,children:e.name},t)}))]})}}),Ee[_.shipCountry.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.shipCountry.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u["Town/City"]}),Object(A.jsx)("input",{type:"text",name:_.shipCity.name,ref:Se(_.shipCity.validate)}),Ee[_.shipCity.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.shipCity.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(A.jsxs)("div",{className:"billing-select mb-20",children:[Object(A.jsx)("label",{children:u.State}),t&&t.length>0?Object(A.jsx)(x.a,{name:_.shipStateProvince.name,control:_e,rules:_.shipStateProvince.validate,render:function(e){return Object(A.jsxs)("select",{onChange:function(e){return console.log("-----"+e)},value:e.value,children:[Object(A.jsx)("option",{children:u["State / Province"]}),t.map((function(e,t){return Object(A.jsx)("option",{value:e.code,children:e.name},t)}))]})}}):Object(A.jsx)("input",{type:"text",name:_.shipStateProvince.name,ref:Se(_.shipStateProvince.validate)}),Ee[_.shipStateProvince.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.shipStateProvince.name].message})]})}),Object(A.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(A.jsxs)("div",{className:"billing-info mb-20",children:[Object(A.jsx)("label",{children:u.Postcode}),Object(A.jsx)("input",{type:"text",name:_.shipPostalCode.name,ref:Se(_.shipPostalCode.validate),onChange:function(){clearTimeout(ie),ce(setTimeout((function(){Ke()}),500))}}),Ee[_.shipPostalCode.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.shipPostalCode.name].message})]})})]})]}),Object(A.jsxs)("div",{className:"additional-info-wrap",children:[Object(A.jsx)("h4",{children:u["Additional information"]}),Object(A.jsxs)("div",{className:"additional-info",children:[Object(A.jsx)("label",{children:u["Order notes"]}),Object(A.jsx)("textarea",{placeholder:u["Notes about your order, e.g. special notes for delivery."],name:"message",defaultValue:""})]})]})]})}),Object(A.jsx)("div",{className:"col-lg-6",children:Object(A.jsxs)("div",{className:"your-order-area",children:[Object(A.jsx)("h3",{children:u["Your order"]}),Object(A.jsx)("div",{className:"your-order-wrap gray-bg-4",children:Object(A.jsxs)("div",{className:"your-order-product-info",children:[Object(A.jsx)("div",{className:"your-order-top",children:Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{children:u.Product}),Object(A.jsx)("li",{children:u.Total})]})}),Object(A.jsx)("div",{className:"your-order-middle",children:Object(A.jsx)("ul",{children:$.products.map((function(e,t){return Object(A.jsxs)("li",{children:[Object(A.jsx)("span",{className:"order-middle-left",style:{width:220},children:e.description.name})," ",Object(A.jsxs)("span",{children:["X ",e.quantity]}),Object(A.jsx)("span",{className:"order-price",children:e.finalPrice})]},t)}))})}),Object(A.jsx)("div",{className:"your-order-sub-total",children:je.length>0&&je.map((function(e,t){return"Total"!==e.title&&Object(A.jsxs)("ul",{className:"mb-20",children:[Object(A.jsx)("li",{className:"order-total",children:e.title}),Object(A.jsx)("li",{children:e.total})]},t)}))}),Q.displayShipping&&de&&Object(A.jsx)("div",{className:"your-order-bottom",children:Object(A.jsxs)("div",{className:"shippingRow",children:[Object(A.jsx)("ul",{children:Object(A.jsx)("li",{className:"your-order-shipping",children:"Shipping Fees"})}),Object(A.jsxs)("ul",{children:[de.map((function(e,t){return Object(A.jsx)("li",{children:Object(A.jsxs)("div",{className:"login-toggle-btn",children:[Object(A.jsx)("input",{type:"radio",value:e.shippingQuoteOptionId,onChange:function(){ve(e.shippingQuoteOptionId),$e(e.shippingQuoteOptionId)},checked:ge===e.shippingQuoteOptionId}),Object(A.jsxs)("label",{className:"ml-10 mb-20",children:[e.optionName," - ",e.optionPriceText]})]})},t)})),Object(A.jsx)("li",{style:{textAlign:"center",fontSize:12,color:"grey"},children:" This option let you reserve you order items through the online system and pick up your order by yourself at the store. this option is also offered when no other shipping option is available for your region."})]})]})}),Object(A.jsx)("div",{className:"your-order-total",children:Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{className:"order-total",children:"Total"}),Object(A.jsx)("li",{children:je.length>0&&je.map((function(e,t){return"Total"===e.title&&e.total}))})]})})]})}),"STRIPE"===window._env_.APP_PAYMENT_TYPE&&Object(A.jsx)("div",{className:"payment-method mt-25",children:Object(A.jsx)(y.Elements,{stripe:S,options:{locale:s},children:Object(A.jsx)(y.ElementsConsumer,{children:function(e){var t=e.stripe,a=e.elements;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"card-info",children:Object(A.jsx)(y.CardElement,{options:I,stripe:t,onReady:function(e){return He(e)}})}),Object(A.jsxs)("div",{className:"icon-container",children:[Object(A.jsx)("i",{className:"fa fa-cc-visa",style:{color:"navy"}}),Object(A.jsx)("i",{className:"fa fa-cc-amex",style:{color:"blue"}}),Object(A.jsx)("i",{className:"fa fa-cc-mastercard",style:{color:"red"}})]}),Object(A.jsxs)("div",{className:"place-order mt-100",children:[Object(A.jsxs)("div",{className:"login-toggle-btn mb-20",children:[Object(A.jsx)("input",{type:"checkbox",name:_.isAgree.name,ref:Se(_.isAgree.validate),onChange:Xe}),Object(A.jsx)("label",{className:"ml-10 ",children:u["I agree with the terms and conditions"]}),Ee[_.isAgree.name]&&Object(A.jsx)("p",{className:"error-msg",children:Ee[_.isAgree.name].message})]}),Object(A.jsx)("div",{children:qe("isAgree")&&Object(A.jsx)("div",{className:"agreement-info-wrap",dangerouslySetInnerHTML:{__html:we.replace(/>]]/g,"&gt;")}})}),Object(A.jsx)("button",{type:"button",onClick:Ie((function(e){return Je(e,a,t)})),className:"btn-hover",children:u["Place your order"]})]})]})}})})}),"NUVEI"===window._env_.APP_PAYMENT_TYPE&&Object(A.jsx)("iframe",{title:"Payment Page",height:"1150",width:"570",srcDoc:'<form action="https://testpayments.nuvei.com/merchant/paymentpage" method="post">\r <input type="hidden" name="TERMINALID" value="" />\r <input type="hidden" name="ORDERID" value="" />\r <input type="hidden" name="CURRENCY" value="" />\r <input type="hidden" name="AMOUNT" value="" />\r <input type="hidden" name="DATETIME" value="22-01-2021:10:43:01:200" />\r <input type="hidden" name="HASH" value="8636622c1dd4039783cd0fbcffd53a6ce2ceab7d0e183e8ce1b8043e3cdedebe3b6665c5e87d3b268e85217f6c11f15f09f86764d82b0bd923c8c19e9209296d" />\r <button type="submit"  style="font-weight: 500;\r line-height: 1;\r z-index: 9;\r display: block;\r width: 100%;\r padding: 18px 20px;\r text-align: center;\r letter-spacing: 1px;\r text-transform: uppercase;\r color: #fff;\r border: none;\r border-radius: 50px;\r background: none;\r background-color: #fb799c;"className="btn-hover">Pay now</button>\r </form>'})]})})]})}):!a&&Object(A.jsx)("div",{className:"row",children:Object(A.jsx)("div",{className:"col-lg-12",children:Object(A.jsxs)("div",{className:"item-empty-area text-center",children:[Object(A.jsx)("div",{className:"item-empty-area__icon mb-30",children:Object(A.jsx)("i",{className:"pe-7s-cash"})}),Object(A.jsxs)("div",{className:"item-empty-area__text",children:[u["No items found in checkout"]," ",Object(A.jsx)("br",{})," ",Object(A.jsx)(l.b,{to:"/",children:u["Shop now"]})]})]})})})]})})]})]})})))}}]);
//# sourceMappingURL=20.00cdc8e1.chunk.js.map