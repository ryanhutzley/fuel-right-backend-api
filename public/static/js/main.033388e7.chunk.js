(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{219:function(e,t,n){},221:function(e,t,n){},367:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(36),r=n.n(a),i=(n(219),n(32)),s=n.n(i),o=n(73),l=n(12),j=(n(221),n(385)),d=n(373),b=n(386),u=n(381),h=n(55),O=n(1);var x=function(e){var t=e.user,n=e.logout,c=e.setDisplayForm,a=e.setErrors;function r(){c(!0),a([])}return Object(O.jsx)(j.a,{bg:"dark",variant:"dark",sticky:"top",children:Object(O.jsxs)(d.a,{id:"container",children:[Object(O.jsx)(j.a.Brand,{id:"brand",children:"FuelRight"}),Object(O.jsxs)(b.a,{className:"me-auto",children:[t?null:Object(O.jsx)(b.a.Link,{className:"link",as:h.b,to:"/login",children:"Login"}),Object(O.jsx)(b.a.Link,{className:"link",onClick:r,as:h.b,to:"/",children:"Tracker"}),Object(O.jsx)(b.a.Link,{className:"link",onClick:r,as:h.b,to:"/day",children:"Your Day"}),Object(O.jsx)(b.a.Link,{className:"link",onClick:r,as:h.b,to:"/history",children:"Your History"}),Object(O.jsxs)(u.a,{title:"Your Profile",id:"basic-nav-dropdown",children:[Object(O.jsx)(u.a.Item,{className:"link",onClick:r,as:h.b,to:"/edit",children:"Edit Profile"}),Object(O.jsx)(u.a.Divider,{}),Object(O.jsx)(u.a.Item,{onClick:n,className:"link",children:"Logout"})]})]}),t?Object(O.jsxs)("p",{style:{color:"white",marginBottom:"5px",marginTop:"5px"},children:[Object(O.jsx)("span",{style:{color:"white"},children:"Signed in as:"})," ",t.name]}):null]})})},m=n(13),p=n(383),f=n(190),g=n(22);var y=function(e){var t=e.onLogin,n=e.setDisplayForm,a=Object(c.useState)(!0),r=Object(l.a)(a,2),i=r[0],j=r[1],d=Object(c.useState)({email:"",password:""}),b=Object(l.a)(d,2),u=b[0],h=b[1],x=Object(c.useState)([]),y=Object(l.a)(x,2),v=y[0],w=y[1],C=Object(c.useState)({name:"",email:"",password:"",password_confirmation:"",weight:""}),k=Object(l.a)(C,2),N=k[0],S=k[1],D=Object(g.f)();function F(){j(!i),S({name:"",email:"",password:"",password_confirmation:"",weight:""}),h({email:"",password:""}),w([])}function L(){return(L=Object(o.a)(s.a.mark((function e(c){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),c.target.blur(),e.next=4,fetch("/signup",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(N)});case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,a.ok?(t(r),n(!0),D.push("/")):(w(r.errors),S({name:"",email:"",password:"",password_confirmation:"",weight:""}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(o.a)(s.a.mark((function e(c){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),c.target.blur(),e.next=4,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,a.ok?(t(r),n(!0),D.push("/")):(w(r.errors),h({email:"",password:""}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(t),Object(O.jsx)("div",{children:i?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center",width:"80%",margin:"auto",color:"white"},children:Object(O.jsxs)("div",{id:"pop",children:[Object(O.jsxs)("h1",{style:{marginTop:"50px",textAlign:"center"},children:["Welcome to ",Object(O.jsx)("span",{id:"brand",style:{textDecorationLine:"underline"},children:"FuelRight"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{style:{fontStyle:"italic"},children:"A digital lifestyle log so you can optimize your performance in the arena of your choosing"}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{style:{fontStyle:"italic"},children:"Unlocking a better you is hard..."}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("h3",{children:[Object(O.jsx)("span",{id:"brand",style:{textDecorationLine:"underline",fontStyle:"bolder"},children:"FuelRight"})," makes it simple"]})]})}),Object(O.jsxs)("section",{className:"gradient-custom",children:[Object(O.jsx)("div",{className:"container py-5 h-100",children:Object(O.jsx)("div",{className:"row justify-content-center align-items-center h-100",children:Object(O.jsx)("div",{className:"col-12 col-lg-9 col-xl-7",children:Object(O.jsx)("div",{className:"card shadow-2-strong card-registration",style:{borderRadius:"15px"},children:Object(O.jsxs)("div",{className:"card-body p-4 p-md-5",children:[Object(O.jsx)("h3",{className:"mb-4 pb-2 pb-md-0 mb-md-3",children:"FuelRight Signup"}),Object(O.jsxs)(p.a,{onSubmit:function(e){return L.apply(this,arguments)},children:[Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(O.jsx)(p.a.Label,{children:"Name"}),Object(O.jsx)(p.a.Control,{required:!0,type:"name",placeholder:"Enter name",value:N.name,onChange:function(e){return S(Object(m.a)(Object(m.a)({},N),{},{name:e.target.value}))}})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(p.a.Label,{children:"Email"}),Object(O.jsx)(p.a.Control,{required:!0,type:"email",placeholder:"Enter email",value:N.email,onChange:function(e){return S(Object(m.a)(Object(m.a)({},N),{},{email:e.target.value}))}})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(O.jsx)(p.a.Label,{children:"Password"}),Object(O.jsx)(p.a.Control,{required:!0,type:"password",placeholder:"Enter Password",value:N.password,onChange:function(e){return S(Object(m.a)(Object(m.a)({},N),{},{password:e.target.value}))}})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPasswordConfirmation",children:[Object(O.jsx)(p.a.Label,{children:"Password Confirmation"}),Object(O.jsx)(p.a.Control,{required:!0,type:"password",placeholder:"Password Confirmation",value:N.password_confirmation,onChange:function(e){return S(Object(m.a)(Object(m.a)({},N),{},{password_confirmation:e.target.value}))}})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicWeight",children:[Object(O.jsx)(p.a.Label,{children:"Weight"}),Object(O.jsx)(p.a.Control,{required:!0,type:"text",placeholder:"Weight in lbs.",value:N.weight,onChange:function(e){return S(Object(m.a)(Object(m.a)({},N),{},{weight:e.target.value}))}})]}),Object(O.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row"},children:[Object(O.jsx)(f.a,{variant:"primary",type:"submit",children:"Create Account"}),Object(O.jsxs)("p",{style:{marginLeft:"15px",marginBottom:"0px",marginTop:"5px"},children:["Already have an account? Login ",Object(O.jsx)("a",{className:"link",onClick:F,children:"here"})," "]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),v!==[]?Object(O.jsx)("div",{children:v.map((function(e,t){return Object(O.jsx)("p",{style:{color:"red",marginBottom:"0px",marginTop:"10px"},children:e},t)}))}):null]})]})})})})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})]}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("section",{className:"gradient-custom",style:{minHeight:"100vh"},children:Object(O.jsx)("div",{className:"container py-6",children:Object(O.jsx)("div",{className:"row justify-content-center align-items-center h-100",children:Object(O.jsx)("div",{className:"col-12 col-lg-9 col-xl-7",children:Object(O.jsx)("div",{className:"card shadow-2-strong card-registration",style:{borderRadius:"15px"},children:Object(O.jsxs)("div",{className:"card-body p-4 p-md-5",children:[Object(O.jsx)("h3",{className:"mb-4 pb-2 pb-md-0 mb-md-5",children:"FuelRight Signup"}),Object(O.jsxs)(p.a,{onSubmit:function(e){return E.apply(this,arguments)},children:[Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(p.a.Label,{children:"Email"}),Object(O.jsx)(p.a.Control,{required:!0,type:"email",placeholder:"Enter email",value:u.email,onChange:function(e){return h(Object(m.a)(Object(m.a)({},u),{},{email:e.target.value}))}})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(O.jsx)(p.a.Label,{children:"Password"}),Object(O.jsx)(p.a.Control,{required:!0,type:"password",placeholder:"Enter Password",value:u.password,onChange:function(e){return h(Object(m.a)(Object(m.a)({},u),{},{password:e.target.value}))}})]}),Object(O.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row"},children:[Object(O.jsx)(f.a,{variant:"primary",type:"submit",children:"Login"}),Object(O.jsxs)("p",{style:{marginLeft:"15px",marginBottom:"0px",marginTop:"5px"},children:["Back to ",Object(O.jsx)("a",{className:"link",onClick:F,children:"Signup"})," "]})]}),Object(O.jsx)("br",{}),v!==[]?Object(O.jsx)("div",{children:v.map((function(e,t){return Object(O.jsx)("p",{style:{color:"red",marginBottom:"0px",marginTop:"10px"},children:e},t)}))}):null]})]})})})})})})})})},v=n(209);var w=function(e){var t=e.addEntry,n=e.displayForm,a=e.setDisplayForm,r=e.errors,i=Object(c.useState)(""),s=Object(l.a)(i,2),o=s[0],j=s[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),u=b[0],h=b[1],x=Object(c.useState)(""),g=Object(l.a)(x,2),y=g[0],w=g[1],C=Object(c.useState)({name:"",duration:"",perceived_effort:""}),k=Object(l.a)(C,2),N=k[0],S=k[1],D=Object(c.useState)([{name:"",portion:""}]),F=Object(l.a)(D,2),L=F[0],E=F[1],B=Object(c.useState)({wakeup:!1,food:!1,activity:!1,bedtime:!1}),T=Object(l.a)(B,2),P=T[0],A=T[1];return console.log(r),console.log(L),Object(O.jsx)(O.Fragment,{children:n?Object(O.jsx)("section",{className:"gradient-custom",style:{minHeight:"100vh"},children:Object(O.jsx)("div",{className:"container py-6",children:Object(O.jsx)("div",{className:"row justify-content-center align-items-center h-100",children:Object(O.jsx)("div",{className:"col-12 col-lg-9 col-xl-7",children:Object(O.jsx)("div",{className:"card shadow-2-strong card-registration",style:{borderRadius:"15px"},children:Object(O.jsxs)("div",{className:"card-body p-4 p-md-5",children:[Object(O.jsx)("h3",{className:"mb-4 pb-2 pb-md-0 mb-md-3",children:"FuelRight Monitoring"}),Object(O.jsxs)(p.a,{onSubmit:function(e){if(e.preventDefault(),e.target[3].blur(),P.wakeup){var n={date:u,time:y};t(o.toLowerCase(),n),A(Object(m.a)(Object(m.a)({},P),{},{wakeup:!1})),w(""),h(""),j("")}else if(P.food){var c=L.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{date:u,time:y})}));t(o.toLowerCase(),c),A(Object(m.a)(Object(m.a)({},P),{},{food:!1})),w(""),h(""),E([{name:"",portion:""}]),j("")}else if(P.activity){var a=Object(m.a)(Object(m.a)({},N),{},{date:u,time:y});t(o.toLowerCase(),a),A(Object(m.a)(Object(m.a)({},P),{},{activity:!1})),w(""),h(""),S({name:"",duration:"",perceived_effort:""}),j("")}else if(P.bedtime){var r={date:u,time:y};t(o.toLowerCase(),r),A(Object(m.a)(Object(m.a)({},P),{},{bedtime:!1})),w(""),h(""),j("")}},children:[Object(O.jsx)(p.a.Text,{children:"Please provide information regarding your food consumption and activity results so that we can help get you on the path to success!"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicDate",children:[Object(O.jsx)(p.a.Label,{children:"Date"}),Object(O.jsx)(p.a.Control,{required:!0,type:"date",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicTime",children:[Object(O.jsx)(p.a.Label,{children:"Time"}),Object(O.jsx)(p.a.Control,{required:!0,type:"time",value:y,onChange:function(e){return w(e.target.value)}})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicAction",children:[Object(O.jsx)(p.a.Label,{children:"Action"}),Object(O.jsx)(p.a.Control,{required:!0,list:"action-list",type:"text",value:o,onChange:function(e){if(j(e.target.value),"Food"===e.target.value)A({wakeup:!1,food:!0,activity:!1,bedtime:!1}),S({name:"",duration:"",perceived_effort:""});else if("Activity"===e.target.value)A({wakeup:!1,food:!1,activity:!0,bedtime:!1}),E([{name:"",portion:""}]);else{if("Wakeup"===e.target.value)return A({wakeup:!0,food:!1,activity:!1,bedtime:!1}),S({name:"",duration:"",perceived_effort:""}),E([{name:"",portion:""}]),null;if("Bedtime"===e.target.value)return A({wakeup:!1,food:!1,activity:!1,bedtime:!0}),S({name:"",duration:"",perceived_effort:""}),E([{name:"",portion:""}]),null}}}),Object(O.jsxs)("datalist",{id:"action-list",children:[Object(O.jsx)("option",{value:"Wakeup"}),Object(O.jsx)("option",{value:"Food"}),Object(O.jsx)("option",{value:"Activity"}),Object(O.jsx)("option",{value:"Bedtime"})]})]}),P.food?L.map((function(e,t){return Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicFood",children:[Object(O.jsx)(p.a.Label,{children:"Type of Food"}),Object(O.jsx)(p.a.Control,{required:!0,type:"text",value:e.name,onChange:function(e){return function(e,t){var n=L.slice(0);n[t].name=e.target.value,E(n)}(e,t)}}),Object(O.jsx)(p.a.Label,{children:"Quantity (oz.)"}),Object(O.jsx)(p.a.Control,{required:!0,type:"text",value:e.portion,onChange:function(e){return function(e,t){var n=L.slice(0);n[t].portion=e.target.value,E(n)}(e,t)}})]},t)})):null,P.food?Object(O.jsxs)("div",{children:[Object(O.jsx)(f.a,{variant:"secondary",type:"button",onClick:function(e){e.target.blur(),E([].concat(Object(v.a)(L),[{name:"",portion:""}]))},children:"Add Foods"})," ",Object(O.jsx)(f.a,{variant:"danger",type:"button",onClick:function(e){if(e.target.blur(),1===L.length)return null;E(L.slice(0,-1))},children:"Remove Foods"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]}):null,P.activity?Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicFood",children:[Object(O.jsx)(p.a.Label,{children:"Type of activity"}),Object(O.jsx)(p.a.Control,{required:!0,type:"text",value:N.name,onChange:function(e){return S(Object(m.a)(Object(m.a)({},N),{},{name:e.target.value}))}}),Object(O.jsx)(p.a.Label,{children:"Duration (mins.)"}),Object(O.jsx)(p.a.Control,{required:!0,type:"text",value:N.duration,onChange:function(e){return S(Object(m.a)(Object(m.a)({},N),{},{duration:e.target.value}))}}),Object(O.jsx)("br",{}),Object(O.jsx)(p.a.Label,{children:"Rate Perceived Effort"}),Object(O.jsx)("br",{}),Object(O.jsx)(p.a.Text,{children:"(How did this workout feel compared to past efforts of similar intensity/duration? scale: 1-10, 1 = way worse, 5 = the same, 10 = way better)"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(p.a.Control,{required:!0,type:"text",value:N.perceived_effort,onChange:function(e){return S(Object(m.a)(Object(m.a)({},N),{},{perceived_effort:e.target.value}))}})]}):null,Object(O.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit Entry"}),Object(O.jsx)("br",{}),r!==[]?Object(O.jsx)("div",{children:r.map((function(e,t){return Object(O.jsx)("p",{style:{color:"red",marginBottom:"0px",marginTop:"10px"},children:e},t)}))}):null]})]})})})})})}):Object(O.jsx)("section",{className:"gradient-custom",style:{minHeight:"100vh"},children:Object(O.jsx)("div",{className:"container py-6",children:Object(O.jsx)("div",{className:"row justify-content-center align-items-center h-100",children:Object(O.jsx)("div",{className:"col-12 col-lg-9 col-xl-7",children:Object(O.jsx)("div",{className:"card shadow-2-strong card-registration",style:{borderRadius:"15px"},children:Object(O.jsxs)("div",{className:"card-body p-4 p-md-5",children:[Object(O.jsx)("h3",{className:"mb-4 pb-2 pb-md-0 mb-md-3",children:"Your entry has been recorded!"}),Object(O.jsx)("a",{className:"link",onClick:function(){return a(!0)},children:"Make another submission"})]})})})})})})})},C=n(374),k=n(382);var N=function(e){var t=e.schedules,n=e.index,a=e.setIndex,r=e.handleSchedulesScroll,i=e.displayedSchedule,s=e.handleScheduleDelete,o=Object(c.useState)(!1),j=Object(l.a)(o,2),d=j[0],b=j[1],u=/\d+:\d+/g,h=0,x="Insufficient data",m=0;if(i){h=i[1].filter((function(e){return e.duration})).length;var p=i[1].filter((function(e){return e.foods})),g=[];p.map((function(e){e.foods.forEach((function(e){return g.push(e.name)}))})),g.length>0&&(m=g.length),i[2].hours&&(x="".concat(i[2].hours,"h ").concat(i[2].added_mins,"m"))}function y(){b(!1)}return console.log(i),console.log(m),Object(O.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h1",{id:"pop",style:{color:"white",display:"table",margin:"auto",backgroundColor:"blue",padding:"10px",borderRadius:"10px"},children:i?"".concat(i[0].date):"No schedules to display"}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:n>0&&n<t.length-1?"space-between":"center",width:"15%",margin:"auto"},children:[n>0?Object(O.jsx)(f.a,{variant:"primary",type:"button",onClick:function(e){if(e.target.blur(),0!==n){var c=n-1;r(t[c].id),a(c)}},style:{width:"100px"},children:"Previous"}):null,n<t.length-1?Object(O.jsx)(f.a,{variant:"primary",type:"button",onClick:function(e){if(e.target.blur(),n!==t.length-1){var c=n+1;r(t[c].id),a(c)}},style:{width:"93px"},children:"Next"}):null]}),Object(O.jsx)("br",{}),i?Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"40%",margin:"auto",color:"black",borderRadius:"20px",backgroundColor:"#FFCC66",padding:"20px"},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Number of Activities: "}),Object(O.jsx)("h3",{children:"Sleep Duration: "}),Object(O.jsx)("h3",{children:"Number of Foods: "})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{style:{display:"table",fontSize:"28px"},children:h}),Object(O.jsx)("h2",{style:{display:"table",fontSize:"28px"},children:x}),Object(O.jsx)("h2",{style:{display:"table",fontSize:"28px"},children:m})]})]}):null,Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(C.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",style:{width:"80%",margin:"auto"},children:[i?Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Time"}),Object(O.jsx)("th",{children:"Action"}),Object(O.jsx)("th",{children:"Type(s)"}),Object(O.jsx)("th",{children:"Details"})]})}):null,Object(O.jsx)("tbody",{children:i?i[1].map((function(e,t){if(e.wakeup)return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.time.match(u)[0]}),Object(O.jsx)("td",{colSpan:"3",children:"Wakeup"})]},t);if(e.foods){var n=[],c=[];e.foods.forEach((function(e){n.push(e.name),c.push("".concat(e.portion," oz."))}));var a=n.join(", "),r=c.join(", ");return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.time.match(u)[0]}),Object(O.jsx)("td",{children:"Food"}),Object(O.jsx)("td",{children:a}),Object(O.jsx)("td",{children:r})]},t)}return e.duration?Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.time.match(u)[0]}),Object(O.jsx)("td",{children:"Activity"}),Object(O.jsx)("td",{children:e.name}),Object(O.jsxs)("td",{children:[e.duration," mins., RPE: ",e.perceived_effort]})]},t):e.bedtime?Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.time.match(u)[0]}),Object(O.jsx)("td",{colSpan:"3",children:"Bedtime"})]},t):void 0})):null})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),i?Object(O.jsx)(f.a,{variant:"danger",type:"button",onClick:function(e){e.target.blur(),b(!0)},style:{display:"flex",width:"12%",margin:"auto",justifyContent:"center"},children:"Delete Schedule"}):null,Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(k.a,{show:d,onHide:y,backdrop:"static",keyboard:!1,centered:!0,children:[Object(O.jsx)(k.a.Header,{children:Object(O.jsx)(k.a.Title,{children:"You're about to delete this schedule"})}),Object(O.jsx)(k.a.Body,{children:"Are you sure you want to delete?"}),Object(O.jsxs)(k.a.Footer,{children:[Object(O.jsx)(f.a,{variant:"secondary",onClick:y,children:"No, take me back!"}),Object(O.jsx)(f.a,{variant:"danger",onClick:function(){s(i[0].id),b(!1)},children:"Yes, get rid of this schedule!"})]})]})]})},S=n(375),D=n(376),F=n(380),L=n(206),E=n(207),B=n(102),T=n(210);var P=function(e){var t=e.user,n=e.schedules,c=e.favFood,a=e.avgSleepDuration,r=e.bestPerformanceFood,i=e.optimalSleepDuration,s=e.chartOneData,o=e.chartTwoData,l=0;n&&n.forEach((function(e){l+=e.activities.length})),console.log(n),console.log(c),console.log(r),console.log(i);var j="User";return t&&(j=t.name.charAt(0).toUpperCase()+t.name.slice(1)),Object(O.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h1",{id:"pop",style:{color:"white",display:"table",margin:"auto",backgroundColor:"blue",padding:"10px",borderRadius:"10px"},children:"".concat(j,"'s History")}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"60%",margin:"auto",color:"black",borderRadius:"20px",backgroundColor:"#FFCC66",padding:"20px"},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Total Number of Activities: "}),Object(O.jsx)("h2",{children:"Average Sleep Duration: "}),Object(O.jsx)("h2",{children:"Favorite Food: "}),Object(O.jsx)("h2",{children:"Best Food for Performance: "}),Object(O.jsx)("h2",{children:"Optimal Sleep Duration: "})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{style:{display:"table"},children:l}),Object(O.jsx)("h2",{style:{display:"table"},children:a?"".concat(a.hours,"h ").concat(a.mins,"m"):"0h"}),Object(O.jsx)("h2",{style:{display:"table"},children:c?c.name:"None"}),Object(O.jsx)("h2",{style:{display:"table"},children:r?r.name:"None"}),Object(O.jsx)("h2",{style:{display:"table"},children:i?"".concat(i.hours,"h ").concat(i.added_mins,"m"):"0h"})]})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h2",{id:"pop",style:{color:"white",textAlign:"center"},children:"Average RPE vs. Pre-Activity Food"}),Object(O.jsx)("br",{}),Object(O.jsx)(S.a,{width:"60%",height:300,children:Object(O.jsxs)(D.a,{width:500,height:300,data:s,margin:{top:5,right:30,left:20,bottom:5},children:[Object(O.jsx)(F.a,{strokeDasharray:"3 3"}),Object(O.jsx)(L.a,{dataKey:"name",style:{fontSize:"small"}}),Object(O.jsx)(E.a,{}),Object(O.jsx)(B.a,{}),Object(O.jsx)(T.a,{dataKey:"RPE",fill:"#82ca9d"})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("h2",{id:"pop",style:{color:"white",textAlign:"center"},children:"Average RPE vs. Sleep Duration"}),Object(O.jsx)("br",{}),Object(O.jsx)(S.a,{width:"60%",height:300,children:Object(O.jsxs)(D.a,{width:500,height:300,data:o,margin:{top:5,right:30,left:20,bottom:5},children:[Object(O.jsx)(F.a,{strokeDasharray:"3 3"}),Object(O.jsx)(L.a,{dataKey:"duration",style:{fontSize:"small"}}),Object(O.jsx)(E.a,{}),Object(O.jsx)(B.a,{}),Object(O.jsx)(T.a,{dataKey:"RPE",fill:"#8884d8"})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})};var A=function(e){var t=e.user,n=e.handleUserUpdate,a=e.handleUserDelete,r=e.errors,i=Object(c.useState)(!1),s=Object(l.a)(i,2),o=s[0],j=s[1],d=Object(c.useState)({name:t.name,email:t.email,weight:t.weight}),b=Object(l.a)(d,2),u=b[0],h=b[1];function x(){j(!1)}return Object(O.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("section",{className:"gradient-custom",children:Object(O.jsx)("div",{className:"container py-5 h-100",children:Object(O.jsx)("div",{className:"row justify-content-center align-items-center h-100",children:Object(O.jsx)("div",{className:"col-12 col-lg-9 col-xl-7",children:Object(O.jsx)("div",{className:"card shadow-2-strong card-registration",style:{borderRadius:"15px"},children:Object(O.jsxs)("div",{className:"card-body p-4 p-md-5",children:[Object(O.jsx)("h3",{className:"mb-4 pb-2 pb-md-0 mb-md-3",children:"Edit FuelRight Profile"}),Object(O.jsxs)(p.a,{onSubmit:function(e){e.preventDefault(),n(u)},children:[Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(O.jsx)(p.a.Label,{children:"Name"}),Object(O.jsx)(p.a.Control,{required:!0,type:"name",placeholder:"Enter name",value:u.name,onChange:function(e){return h(Object(m.a)(Object(m.a)({},u),{},{name:e.target.value}))}})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(p.a.Label,{children:"Email"}),Object(O.jsx)(p.a.Control,{required:!0,type:"email",placeholder:"Enter email",value:u.email,onChange:function(e){return h(Object(m.a)(Object(m.a)({},u),{},{email:e.target.value}))}})]}),Object(O.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicWeight",children:[Object(O.jsx)(p.a.Label,{children:"Weight"}),Object(O.jsx)(p.a.Control,{required:!0,type:"text",placeholder:"Weight in lbs.",value:u.weight,onChange:function(e){return h(Object(m.a)(Object(m.a)({},u),{},{weight:e.target.value}))}})]}),Object(O.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row",width:"50%"},children:[Object(O.jsx)(f.a,{variant:"primary",type:"submit",style:{marginRight:"10px"},children:"Save Changes"}),Object(O.jsx)(f.a,{variant:"danger",type:"button",onClick:function(e){e.target.blur(),j(!0)},children:"Delete Account"}),Object(O.jsxs)(k.a,{show:o,onHide:x,backdrop:"static",keyboard:!1,centered:!0,children:[Object(O.jsx)(k.a.Header,{children:Object(O.jsx)(k.a.Title,{children:"You're about to delete your FuelRight profile..."})}),Object(O.jsx)(k.a.Body,{children:"All of your data will be lost - schedules, activities, foods, etc. Are you sure you want to delete?"}),Object(O.jsxs)(k.a.Footer,{children:[Object(O.jsx)(f.a,{variant:"secondary",onClick:x,children:"No, take me back!"}),Object(O.jsx)(f.a,{variant:"danger",onClick:function(){a(),j(!1)},children:"Yes, delete my profile :("})]})]})]}),Object(O.jsx)("br",{}),r!==[]?Object(O.jsx)("div",{children:r.map((function(e,t){return Object(O.jsx)("p",{style:{color:"red",marginBottom:"0px",marginTop:"10px"},children:e},t)}))}):null]})]})})})})})})]})};n(366);var R=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(l.a)(r,2),j=i[0],d=i[1],b=Object(c.useState)(!0),u=Object(l.a)(b,2),h=u[0],m=u[1],p=Object(c.useState)(0),f=Object(l.a)(p,2),v=f[0],C=f[1],k=Object(c.useState)(null),S=Object(l.a)(k,2),D=S[0],F=S[1],L=Object(c.useState)(null),E=Object(l.a)(L,2),B=E[0],T=E[1],R=Object(c.useState)([]),_=Object(l.a)(R,2),I=_[0],q=_[1],G=Object(c.useState)(null),H=Object(l.a)(G,2),W=H[0],U=H[1],z=Object(c.useState)(null),Y=Object(l.a)(z,2),J=Y[0],K=Y[1],M=Object(c.useState)(null),Q=Object(l.a)(M,2),V=Q[0],X=Q[1],Z=Object(c.useState)(null),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)(null),ce=Object(l.a)(ne,2),ae=ce[0],re=ce[1],ie=Object(g.f)();function se(e){a(e),oe()}function oe(){fetch("/schedules").then((function(e){return e.json()})).then((function(e){var t;0!==e.length?(d(e),C(e.length-1),F(null),T(null),U(null),K(null),X(null),te(null),re(null),t=e[e.length-1].id,fetch("schedules/".concat(t)).then((function(e){return e.json()})).then((function(e){F(e),fetch("/favorite_food").then((function(e){return e.json()})).then((function(e){e.error||T(e),le()}))})),console.log(e)):(d([]),C(0),F(null),T(null),U(null),K(null),X(null),te(null),re(null))}))}function le(){fetch("/sleep_durations").then((function(e){return e.json()})).then((function(e){console.log(e),e.error||U(e),je()}))}function je(){fetch("/performance_food").then((function(e){return e.json()})).then((function(e){e.error||K(e),de()}))}function de(){fetch("/optimal_sleep_duration").then((function(e){return e.json()})).then((function(e){e.error||X(e),be()}))}function be(){fetch("/chart_one_data").then((function(e){return e.json()})).then((function(e){e.error||te(e),ue()}))}function ue(){fetch("/chart_two_data").then((function(e){return e.json()})).then((function(e){e.error?re(null):re(e)}))}function he(){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/logout",{method:"DELETE"});case 2:e.sent.ok&&(a(null),d([]),m(!0),C(0),F(null),T(null),q([]),U(null),K(null),X(null),te(null),re(null),ie.push("/login"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(){return(xe=Object(o.a)(s.a.mark((function e(t){var c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/".concat(n.id),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,c.ok?(a(r),q([]),ie.push("/")):q(r.errors);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(){return(me=Object(o.a)(s.a.mark((function e(t,n){var c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"activity"===t&&(t="activitie"),e.next=3,fetch("/".concat(t,"s"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,console.log(a),c.ok?(m(!1),q([]),oe()):q(a.errors);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){a(e),oe()}))}))}),[]),console.log(n),console.log(W),Object(O.jsxs)("div",{className:"App",children:[n?Object(O.jsx)(x,{user:n,logout:he,setDisplayForm:m,setErrors:q}):null,Object(O.jsxs)(g.c,{children:[Object(O.jsx)(g.a,{exact:!0,path:"/",children:n?Object(O.jsx)(w,{addEntry:function(e,t){return me.apply(this,arguments)},displayForm:h,setDisplayForm:m,errors:I}):Object(O.jsx)(y,{onLogin:se,setDisplayForm:m})}),Object(O.jsx)(g.a,{exact:!0,path:"/day",children:n?Object(O.jsx)(N,{schedules:j,index:v,setIndex:C,handleSchedulesScroll:function(e){fetch("schedules/".concat(e)).then((function(e){return e.json()})).then((function(e){F(e)}))},displayedSchedule:D,handleScheduleDelete:function(e){fetch("/schedules/".concat(e),{method:"DELETE"}).then((function(){return oe()}))}}):Object(O.jsx)(y,{onLogin:se,setDisplayForm:m})}),Object(O.jsx)(g.a,{exact:!0,path:"/history",children:n?Object(O.jsx)(P,{user:n,schedules:j,favFood:B,avgSleepDuration:W,bestPerformanceFood:J,optimalSleepDuration:V,chartOneData:ee,chartTwoData:ae}):Object(O.jsx)(y,{onLogin:se,setDisplayForm:m})}),Object(O.jsx)(g.a,{exact:!0,path:"/edit",children:n?Object(O.jsx)(A,{user:n,handleUserUpdate:function(e){return xe.apply(this,arguments)},handleUserDelete:function(){fetch("/users/".concat(n.id),{method:"DELETE"}).then((function(){return he()}))},errors:I}):Object(O.jsx)(y,{onLogin:se,setDisplayForm:m})}),Object(O.jsx)(g.a,{exact:!0,path:"/login",children:Object(O.jsx)(y,{onLogin:se,setDisplayForm:m})})]})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,387)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};r.a.render(Object(O.jsx)(h.a,{children:Object(O.jsx)(R,{})}),document.getElementById("root")),_()}},[[367,1,2]]]);
//# sourceMappingURL=main.033388e7.chunk.js.map