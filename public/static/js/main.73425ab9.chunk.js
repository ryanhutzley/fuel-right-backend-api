(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{219:function(e,t,n){},221:function(e,t,n){},367:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(36),a=n.n(r),i=(n(219),n(32)),s=n.n(i),o=n(73),l=n(12),j=(n(221),n(385)),d=n(373),b=n(386),u=n(381),h=n(55),x=n(1);var O=function(e){var t=e.user,n=e.logout,c=e.setDisplayForm,r=e.setErrors;function a(){c(!0),r([])}return Object(x.jsx)(j.a,{bg:"dark",variant:"dark",sticky:"top",style:{minWidth:"100vw"},children:Object(x.jsxs)(d.a,{id:"container",children:[Object(x.jsx)(j.a.Brand,{id:"brand",children:"FuelRight"}),Object(x.jsxs)(b.a,{className:"me-auto",children:[t?null:Object(x.jsx)(b.a.Link,{className:"link",as:h.b,to:"/login",children:"Login"}),Object(x.jsx)(b.a.Link,{className:"link",onClick:a,as:h.b,to:"/",children:"Tracker"}),Object(x.jsx)(b.a.Link,{className:"link",onClick:a,as:h.b,to:"/day",children:"Your Day"}),Object(x.jsx)(b.a.Link,{className:"link",onClick:a,as:h.b,to:"/history",children:"Your History"}),Object(x.jsxs)(u.a,{title:"Your Profile",id:"basic-nav-dropdown",children:[Object(x.jsx)(u.a.Item,{className:"link",onClick:a,as:h.b,to:"/edit",children:"Edit Profile"}),Object(x.jsx)(u.a.Divider,{}),Object(x.jsx)(u.a.Item,{onClick:n,className:"link",children:"Logout"})]})]}),t?Object(x.jsxs)("p",{style:{color:"white",marginBottom:"5px",marginTop:"5px"},children:[Object(x.jsx)("span",{style:{color:"white"},children:"Signed in as:"})," ",t.name]}):null]})})},m=n(13),p=n(383),f=n(190),g=n(22);var y=function(e){var t=e.onLogin,n=e.setDisplayForm,r=Object(c.useState)(!0),a=Object(l.a)(r,2),i=a[0],j=a[1],d=Object(c.useState)({email:"",password:""}),b=Object(l.a)(d,2),u=b[0],h=b[1],O=Object(c.useState)([]),y=Object(l.a)(O,2),v=y[0],w=y[1],C=Object(c.useState)({name:"",email:"",password:"",password_confirmation:"",weight:""}),k=Object(l.a)(C,2),N=k[0],D=k[1],S=Object(g.f)();function L(){j(!i),D({name:"",email:"",password:"",password_confirmation:"",weight:""}),h({email:"",password:""}),w([])}function F(){return(F=Object(o.a)(s.a.mark((function e(c){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),c.target.blur(),e.next=4,fetch("/signup",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(N)});case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,r.ok?(t(a),n(!0),S.push("/")):(w(a.errors),D({name:"",email:"",password:"",password_confirmation:"",weight:""}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(o.a)(s.a.mark((function e(c){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),c.target.blur(),e.next=4,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,r.ok?(t(a),n(!0),S.push("/")):(w(a.errors),h({email:"",password:""}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(t),Object(x.jsx)("div",{style:{minHeight:"100vh",minWidth:"100vw"},children:i?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",textAlign:"center",width:"80%",margin:"auto",color:"white"},children:Object(x.jsxs)("div",{id:"pop",children:[Object(x.jsxs)("h1",{style:{marginTop:"50px",textAlign:"center"},children:["Welcome to ",Object(x.jsx)("span",{id:"brand",style:{textDecorationLine:"underline"},children:"FuelRight"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h3",{style:{fontStyle:"italic"},children:"A digital lifestyle log so you can optimize your performance in the arena of your choosing"}),Object(x.jsx)("br",{}),Object(x.jsx)("h3",{style:{fontStyle:"italic"},children:"Unlocking a better you is hard..."}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("h3",{children:[Object(x.jsx)("span",{id:"brand",style:{textDecorationLine:"underline",fontStyle:"bolder"},children:"FuelRight"})," makes it simple"]})]})}),Object(x.jsxs)("section",{className:"gradient-custom",children:[Object(x.jsx)("div",{className:"container py-5 h-100",children:Object(x.jsx)("div",{className:"row justify-content-center align-items-center h-100",children:Object(x.jsx)("div",{className:"col-12 col-lg-9 col-xl-7",children:Object(x.jsx)("div",{className:"card shadow-2-strong card-registration",style:{borderRadius:"15px"},children:Object(x.jsxs)("div",{className:"card-body p-4 p-md-5",children:[Object(x.jsx)("h3",{className:"mb-4 pb-2 pb-md-0 mb-md-3",children:"FuelRight Signup"}),Object(x.jsxs)(p.a,{onSubmit:function(e){return F.apply(this,arguments)},children:[Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(x.jsx)(p.a.Label,{children:"Name"}),Object(x.jsx)(p.a.Control,{required:!0,type:"name",placeholder:"Enter name",value:N.name,onChange:function(e){return D(Object(m.a)(Object(m.a)({},N),{},{name:e.target.value}))}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(p.a.Label,{children:"Email"}),Object(x.jsx)(p.a.Control,{required:!0,type:"email",placeholder:"Enter email",value:N.email,onChange:function(e){return D(Object(m.a)(Object(m.a)({},N),{},{email:e.target.value}))}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(p.a.Label,{children:"Password"}),Object(x.jsx)(p.a.Control,{required:!0,type:"password",placeholder:"Enter Password",value:N.password,onChange:function(e){return D(Object(m.a)(Object(m.a)({},N),{},{password:e.target.value}))}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPasswordConfirmation",children:[Object(x.jsx)(p.a.Label,{children:"Password Confirmation"}),Object(x.jsx)(p.a.Control,{required:!0,type:"password",placeholder:"Password Confirmation",value:N.password_confirmation,onChange:function(e){return D(Object(m.a)(Object(m.a)({},N),{},{password_confirmation:e.target.value}))}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicWeight",children:[Object(x.jsx)(p.a.Label,{children:"Weight"}),Object(x.jsx)(p.a.Control,{required:!0,type:"text",placeholder:"Weight in lbs.",value:N.weight,onChange:function(e){return D(Object(m.a)(Object(m.a)({},N),{},{weight:e.target.value}))}})]}),Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row"},children:[Object(x.jsx)(f.a,{variant:"primary",type:"submit",children:"Create Account"}),Object(x.jsxs)("p",{style:{marginLeft:"15px",marginBottom:"0px",marginTop:"5px"},children:["Already have an account? Login ",Object(x.jsx)("a",{className:"link",onClick:L,children:"here"})," "]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),v!==[]?Object(x.jsx)("div",{children:v.map((function(e,t){return Object(x.jsx)("p",{style:{color:"red",marginBottom:"0px",marginTop:"10px"},children:e},t)}))}):null]})]})})})})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})]}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("section",{className:"gradient-custom",children:Object(x.jsx)("div",{className:"container py-6",children:Object(x.jsx)("div",{className:"row justify-content-center align-items-center h-100",children:Object(x.jsx)("div",{className:"col-12 col-lg-9 col-xl-7",children:Object(x.jsx)("div",{className:"card shadow-2-strong card-registration",style:{borderRadius:"15px"},children:Object(x.jsxs)("div",{className:"card-body p-4 p-md-5",children:[Object(x.jsx)("h3",{className:"mb-4 pb-2 pb-md-0 mb-md-5",children:"FuelRight Login"}),Object(x.jsxs)(p.a,{onSubmit:function(e){return E.apply(this,arguments)},children:[Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(p.a.Label,{children:"Email"}),Object(x.jsx)(p.a.Control,{required:!0,type:"email",placeholder:"Enter email",value:u.email,onChange:function(e){return h(Object(m.a)(Object(m.a)({},u),{},{email:e.target.value}))}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(x.jsx)(p.a.Label,{children:"Password"}),Object(x.jsx)(p.a.Control,{required:!0,type:"password",placeholder:"Enter Password",value:u.password,onChange:function(e){return h(Object(m.a)(Object(m.a)({},u),{},{password:e.target.value}))}})]}),Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row"},children:[Object(x.jsx)(f.a,{variant:"primary",type:"submit",children:"Login"}),Object(x.jsxs)("p",{style:{marginLeft:"15px",marginBottom:"0px",marginTop:"5px"},children:["Back to ",Object(x.jsx)("a",{className:"link",onClick:L,children:"Signup"})," "]})]}),Object(x.jsx)("br",{}),v!==[]?Object(x.jsx)("div",{children:v.map((function(e,t){return Object(x.jsx)("p",{style:{color:"red",marginBottom:"0px",marginTop:"10px"},children:e},t)}))}):null]})]})})})})})})})})},v=n(209);var w=function(e){var t=e.addEntry,n=e.displayForm,r=e.setDisplayForm,a=e.errors,i=Object(c.useState)(""),s=Object(l.a)(i,2),o=s[0],j=s[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),u=b[0],h=b[1],O=Object(c.useState)(""),g=Object(l.a)(O,2),y=g[0],w=g[1],C=Object(c.useState)({name:"",duration:"",perceived_effort:""}),k=Object(l.a)(C,2),N=k[0],D=k[1],S=Object(c.useState)([{name:"",portion:""}]),L=Object(l.a)(S,2),F=L[0],E=L[1],R=Object(c.useState)({wakeup:!1,food:!1,activity:!1,bedtime:!1}),B=Object(l.a)(R,2),T=B[0],P=B[1];return console.log(a),console.log(F),Object(x.jsx)(x.Fragment,{children:n?Object(x.jsx)("section",{className:"gradient-custom",style:{minHeight:"100vh",minWidth:"100vw"},children:Object(x.jsx)("div",{className:"container py-6",children:Object(x.jsx)("div",{className:"row justify-content-center align-items-center h-100",children:Object(x.jsx)("div",{className:"col-12 col-lg-9 col-xl-7",children:Object(x.jsx)("div",{className:"card shadow-2-strong card-registration",style:{borderRadius:"15px"},children:Object(x.jsxs)("div",{className:"card-body p-4 p-md-5",children:[Object(x.jsx)("h3",{className:"mb-4 pb-2 pb-md-0 mb-md-3",children:"FuelRight Monitoring"}),Object(x.jsxs)(p.a,{onSubmit:function(e){if(e.preventDefault(),e.target[3].blur(),T.wakeup){var n={date:u,time:y};t(o.toLowerCase(),n),P(Object(m.a)(Object(m.a)({},T),{},{wakeup:!1})),w(""),h(""),j("")}else if(T.food){var c=F.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{date:u,time:y})}));t(o.toLowerCase(),c),P(Object(m.a)(Object(m.a)({},T),{},{food:!1})),w(""),h(""),E([{name:"",portion:""}]),j("")}else if(T.activity){var r=Object(m.a)(Object(m.a)({},N),{},{date:u,time:y});t(o.toLowerCase(),r),P(Object(m.a)(Object(m.a)({},T),{},{activity:!1})),w(""),h(""),D({name:"",duration:"",perceived_effort:""}),j("")}else if(T.bedtime){var a={date:u,time:y};t(o.toLowerCase(),a),P(Object(m.a)(Object(m.a)({},T),{},{bedtime:!1})),w(""),h(""),j("")}},children:[Object(x.jsx)(p.a.Text,{children:"Please provide information regarding your food consumption and activity results so that we can help get you on the path to success!"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicDate",children:[Object(x.jsx)(p.a.Label,{children:"Date"}),Object(x.jsx)(p.a.Control,{required:!0,type:"date",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicTime",children:[Object(x.jsx)(p.a.Label,{children:"Time"}),Object(x.jsx)(p.a.Control,{required:!0,type:"time",value:y,onChange:function(e){return w(e.target.value)}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicAction",children:[Object(x.jsx)(p.a.Label,{children:"Action"}),Object(x.jsx)(p.a.Control,{required:!0,list:"action-list",type:"text",value:o,onChange:function(e){if(j(e.target.value),"Food"===e.target.value)P({wakeup:!1,food:!0,activity:!1,bedtime:!1}),D({name:"",duration:"",perceived_effort:""});else if("Activity"===e.target.value)P({wakeup:!1,food:!1,activity:!0,bedtime:!1}),E([{name:"",portion:""}]);else{if("Wakeup"===e.target.value)return P({wakeup:!0,food:!1,activity:!1,bedtime:!1}),D({name:"",duration:"",perceived_effort:""}),E([{name:"",portion:""}]),null;if("Bedtime"===e.target.value)return P({wakeup:!1,food:!1,activity:!1,bedtime:!0}),D({name:"",duration:"",perceived_effort:""}),E([{name:"",portion:""}]),null}}}),Object(x.jsxs)("datalist",{id:"action-list",children:[Object(x.jsx)("option",{value:"Wakeup"}),Object(x.jsx)("option",{value:"Food"}),Object(x.jsx)("option",{value:"Activity"}),Object(x.jsx)("option",{value:"Bedtime"})]})]}),T.food?F.map((function(e,t){return Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicFood",children:[Object(x.jsx)(p.a.Label,{children:"Type of Food"}),Object(x.jsx)(p.a.Control,{required:!0,type:"text",value:e.name,onChange:function(e){return function(e,t){var n=F.slice(0);n[t].name=e.target.value,E(n)}(e,t)}}),Object(x.jsx)(p.a.Label,{children:"Quantity (oz.)"}),Object(x.jsx)(p.a.Control,{required:!0,type:"text",value:e.portion,onChange:function(e){return function(e,t){var n=F.slice(0);n[t].portion=e.target.value,E(n)}(e,t)}})]},t)})):null,T.food?Object(x.jsxs)("div",{children:[Object(x.jsx)(f.a,{variant:"secondary",type:"button",onClick:function(e){e.target.blur(),E([].concat(Object(v.a)(F),[{name:"",portion:""}]))},children:"Add Foods"})," ",Object(x.jsx)(f.a,{variant:"danger",type:"button",onClick:function(e){if(e.target.blur(),1===F.length)return null;E(F.slice(0,-1))},children:"Remove Foods"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}):null,T.activity?Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicFood",children:[Object(x.jsx)(p.a.Label,{children:"Type of activity"}),Object(x.jsx)(p.a.Control,{required:!0,type:"text",value:N.name,onChange:function(e){return D(Object(m.a)(Object(m.a)({},N),{},{name:e.target.value}))}}),Object(x.jsx)(p.a.Label,{children:"Duration (mins.)"}),Object(x.jsx)(p.a.Control,{required:!0,type:"text",value:N.duration,onChange:function(e){return D(Object(m.a)(Object(m.a)({},N),{},{duration:e.target.value}))}}),Object(x.jsx)("br",{}),Object(x.jsx)(p.a.Label,{children:"Rate Perceived Effort"}),Object(x.jsx)("br",{}),Object(x.jsx)(p.a.Text,{children:"(How did this workout feel compared to past efforts of similar intensity/duration? scale: 1-10, 1 = way worse, 5 = the same, 10 = way better)"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(p.a.Control,{required:!0,type:"text",value:N.perceived_effort,onChange:function(e){return D(Object(m.a)(Object(m.a)({},N),{},{perceived_effort:e.target.value}))}})]}):null,Object(x.jsx)(f.a,{variant:"primary",type:"submit",children:"Submit Entry"}),Object(x.jsx)("br",{}),a!==[]?Object(x.jsx)("div",{children:a.map((function(e,t){return Object(x.jsx)("p",{style:{color:"red",marginBottom:"0px",marginTop:"10px"},children:e},t)}))}):null]})]})})})})})}):Object(x.jsx)("section",{className:"gradient-custom",style:{minHeight:"100vh",minWidth:"100vw"},children:Object(x.jsx)("div",{className:"container py-6",children:Object(x.jsx)("div",{className:"row justify-content-center align-items-center h-100",children:Object(x.jsx)("div",{className:"col-12 col-lg-9 col-xl-7",children:Object(x.jsx)("div",{className:"card shadow-2-strong card-registration",style:{borderRadius:"15px"},children:Object(x.jsxs)("div",{className:"card-body p-4 p-md-5",children:[Object(x.jsx)("h3",{className:"mb-4 pb-2 pb-md-0 mb-md-3",children:"Your entry has been recorded!"}),Object(x.jsx)("a",{className:"link",onClick:function(){return r(!0)},children:"Make another submission"})]})})})})})})})},C=n(374),k=n(382);var N=function(e){var t=e.schedules,n=e.index,r=e.setIndex,a=e.handleSchedulesScroll,i=e.displayedSchedule,s=e.handleScheduleDelete,o=Object(c.useState)(!1),j=Object(l.a)(o,2),d=j[0],b=j[1],u=/\d+:\d+/g,h=0,O="Insufficient data",m=0;if(i){h=i[1].filter((function(e){return e.duration})).length;var p=i[1].filter((function(e){return e.foods})),g=[];p.map((function(e){e.foods.forEach((function(e){return g.push(e.name)}))})),g.length>0&&(m=g.length),i[2].hours&&(O="".concat(i[2].hours,"h ").concat(i[2].added_mins,"m"))}function y(){b(!1)}return console.log(i),console.log(m),Object(x.jsxs)("div",{style:{minHeight:"100vh",minWidth:"100vw"},children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h1",{id:"pop",style:{color:"white",display:"table",margin:"auto",backgroundColor:"blue",padding:"20px",borderRadius:"10px"},children:i?"".concat(i[0].date):"No schedules to display"}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:n>0&&n<t.length-1?"space-between":"center",width:"15%",margin:"auto"},children:[n>0?Object(x.jsx)(f.a,{variant:"primary",type:"button",onClick:function(e){if(e.target.blur(),0!==n){var c=n-1;a(t[c].id),r(c)}},style:{width:"100px"},children:"Previous"}):null,n<t.length-1?Object(x.jsx)(f.a,{variant:"primary",type:"button",onClick:function(e){if(e.target.blur(),n!==t.length-1){var c=n+1;a(t[c].id),r(c)}},style:{width:"93px"},children:"Next"}):null]}),Object(x.jsx)("br",{}),i?Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"26%",margin:"auto",color:"black",borderRadius:"20px",backgroundColor:"#FFCC66",padding:"20px"},children:[Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(x.jsx)("h3",{style:{marginRight:"5%"},children:"Number of Activities \u27a1\ufe0f "}),Object(x.jsx)("h3",{style:{textDecorationLine:"underline",float:"right"},children:h})]}),Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(x.jsx)("h3",{style:{marginRight:"5%"},children:"Sleep Duration \u27a1\ufe0f "}),Object(x.jsx)("h3",{style:{textDecorationLine:"underline",float:"right"},children:O})]}),Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(x.jsx)("h3",{style:{marginRight:"5%"},children:"Number of Foods \u27a1\ufe0f "}),Object(x.jsx)("h3",{style:{textDecorationLine:"underline",float:"right"},children:m})]})]}):null,Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(C.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",style:{width:"80%",margin:"auto"},children:[i?Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Time"}),Object(x.jsx)("th",{children:"Action"}),Object(x.jsx)("th",{children:"Type(s)"}),Object(x.jsx)("th",{children:"Details"})]})}):null,Object(x.jsx)("tbody",{children:i?i[1].map((function(e,t){if(e.wakeup)return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.time.match(u)[0]}),Object(x.jsx)("td",{colSpan:"3",children:"Wakeup"})]},t);if(e.foods){var n=[],c=[];e.foods.forEach((function(e){n.push(e.name),c.push("".concat(e.portion," oz."))}));var r=n.join(", "),a=c.join(", ");return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.time.match(u)[0]}),Object(x.jsx)("td",{children:"Food"}),Object(x.jsx)("td",{children:r}),Object(x.jsx)("td",{children:a})]},t)}return e.duration?Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.time.match(u)[0]}),Object(x.jsx)("td",{children:"Activity"}),Object(x.jsx)("td",{children:e.name}),Object(x.jsxs)("td",{children:[e.duration," mins., RPE: ",e.perceived_effort]})]},t):e.bedtime?Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.time.match(u)[0]}),Object(x.jsx)("td",{colSpan:"3",children:"Bedtime"})]},t):void 0})):null})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),i?Object(x.jsx)(f.a,{variant:"danger",type:"button",onClick:function(e){e.target.blur(),b(!0)},style:{display:"flex",width:"12%",margin:"auto",justifyContent:"center"},children:"Delete Schedule"}):null,Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(k.a,{show:d,onHide:y,backdrop:"static",keyboard:!1,centered:!0,children:[Object(x.jsx)(k.a.Header,{children:Object(x.jsx)(k.a.Title,{children:"You're about to delete this schedule"})}),Object(x.jsx)(k.a.Body,{children:"Are you sure you want to delete?"}),Object(x.jsxs)(k.a.Footer,{children:[Object(x.jsx)(f.a,{variant:"secondary",onClick:y,children:"No, take me back!"}),Object(x.jsx)(f.a,{variant:"danger",onClick:function(){s(i[0].id),b(!1)},children:"Yes, get rid of this schedule!"})]})]})]})},D=n(375),S=n(376),L=n(380),F=n(206),E=n(207),R=n(102),B=n(210);var T=function(e){var t=e.user,n=e.schedules,c=e.favFood,r=e.avgSleepDuration,a=e.bestPerformanceFood,i=e.optimalSleepDuration,s=e.chartOneData,o=e.chartTwoData,l=0;n&&n.forEach((function(e){l+=e.activities.length})),console.log(n),console.log(c),console.log(a),console.log(i);var j="User";return t&&(j=t.name.charAt(0).toUpperCase()+t.name.slice(1)),Object(x.jsxs)("div",{style:{minHeight:"100vh",minWidth:"100vw"},children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h1",{id:"pop",style:{color:"white",display:"table",margin:"auto",backgroundColor:"blue",padding:"10px",borderRadius:"10px"},children:"".concat(j,"'s History")}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"47%",margin:"auto",color:"black",borderRadius:"20px",backgroundColor:"#FFCC66",padding:"20px"},children:[Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(x.jsx)("h2",{style:{marginRight:"1%"},children:"Total Number of Activities \u27a1\ufe0f "}),Object(x.jsx)("h2",{style:{textDecorationLine:"underline",float:"right"},children:l})]}),Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(x.jsx)("h2",{style:{marginRight:"1%"},children:"Average Sleep Duration \u27a1\ufe0f "}),Object(x.jsx)("h2",{style:{textDecorationLine:"underline",float:"right"},children:r?"".concat(r.hours,"h ").concat(r.mins,"m"):"0h"})]}),Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(x.jsx)("h2",{style:{marginRight:"1%"},children:"Favorite Food \u27a1\ufe0f "}),Object(x.jsx)("h2",{style:{textDecorationLine:"underline",float:"right"},children:c?c.name:"None"})]}),Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(x.jsx)("h2",{style:{marginRight:"1%"},children:"Best Food for Performance \u27a1\ufe0f "}),Object(x.jsx)("h2",{style:{textDecorationLine:"underline",float:"right"},children:a?a.name:"None"})]}),Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(x.jsx)("h2",{style:{marginRight:"1%"},children:"Optimal Sleep Duration \u27a1\ufe0f "}),Object(x.jsx)("h2",{style:{textDecorationLine:"underline",float:"right"},children:i?"".concat(i.hours,"h ").concat(i.added_mins,"m"):"0h"})]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h2",{id:"pop",style:{color:"white",textAlign:"center"},children:"Average RPE vs. Pre-Activity Food"}),Object(x.jsx)("br",{}),Object(x.jsx)(D.a,{width:"60%",height:300,children:Object(x.jsxs)(S.a,{width:500,height:300,data:s,margin:{top:5,right:30,left:20,bottom:5},children:[Object(x.jsx)(L.a,{strokeDasharray:"3 3"}),Object(x.jsx)(F.a,{dataKey:"name",style:{fontSize:"small"}}),Object(x.jsx)(E.a,{}),Object(x.jsx)(R.a,{}),Object(x.jsx)(B.a,{dataKey:"RPE",fill:"#82ca9d"})]})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h2",{id:"pop",style:{color:"white",textAlign:"center"},children:"Average RPE vs. Sleep Duration"}),Object(x.jsx)("br",{}),Object(x.jsx)(D.a,{width:"60%",height:300,children:Object(x.jsxs)(S.a,{width:500,height:300,data:o,margin:{top:5,right:30,left:20,bottom:5},children:[Object(x.jsx)(L.a,{strokeDasharray:"3 3"}),Object(x.jsx)(F.a,{dataKey:"duration",style:{fontSize:"small"}}),Object(x.jsx)(E.a,{}),Object(x.jsx)(R.a,{}),Object(x.jsx)(B.a,{dataKey:"RPE",fill:"#8884d8"})]})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})};var P=function(e){var t=e.user,n=e.handleUserUpdate,r=e.handleUserDelete,a=e.errors,i=Object(c.useState)(!1),s=Object(l.a)(i,2),o=s[0],j=s[1],d=Object(c.useState)({name:t.name,email:t.email,weight:t.weight}),b=Object(l.a)(d,2),u=b[0],h=b[1];function O(){j(!1)}return Object(x.jsxs)("div",{style:{minHeight:"100vh",minWidth:"100vw"},children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("section",{className:"gradient-custom",children:Object(x.jsx)("div",{className:"container py-5 h-100",children:Object(x.jsx)("div",{className:"row justify-content-center align-items-center h-100",children:Object(x.jsx)("div",{className:"col-12 col-lg-9 col-xl-7",children:Object(x.jsx)("div",{className:"card shadow-2-strong card-registration",style:{borderRadius:"15px"},children:Object(x.jsxs)("div",{className:"card-body p-4 p-md-5",children:[Object(x.jsx)("h3",{className:"mb-4 pb-2 pb-md-0 mb-md-3",children:"Edit FuelRight Profile"}),Object(x.jsxs)(p.a,{onSubmit:function(e){e.preventDefault(),n(u)},children:[Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(x.jsx)(p.a.Label,{children:"Name"}),Object(x.jsx)(p.a.Control,{required:!0,type:"name",placeholder:"Enter name",value:u.name,onChange:function(e){return h(Object(m.a)(Object(m.a)({},u),{},{name:e.target.value}))}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(x.jsx)(p.a.Label,{children:"Email"}),Object(x.jsx)(p.a.Control,{required:!0,type:"email",placeholder:"Enter email",value:u.email,onChange:function(e){return h(Object(m.a)(Object(m.a)({},u),{},{email:e.target.value}))}})]}),Object(x.jsxs)(p.a.Group,{className:"mb-3",controlId:"formBasicWeight",children:[Object(x.jsx)(p.a.Label,{children:"Weight"}),Object(x.jsx)(p.a.Control,{required:!0,type:"text",placeholder:"Weight in lbs.",value:u.weight,onChange:function(e){return h(Object(m.a)(Object(m.a)({},u),{},{weight:e.target.value}))}})]}),Object(x.jsxs)("div",{style:{display:"inline-flex",flexDirection:"row",width:"50%"},children:[Object(x.jsx)(f.a,{variant:"primary",type:"submit",style:{marginRight:"10px"},children:"Save Changes"}),Object(x.jsx)(f.a,{variant:"danger",type:"button",onClick:function(e){e.target.blur(),j(!0)},children:"Delete Account"}),Object(x.jsxs)(k.a,{show:o,onHide:O,backdrop:"static",keyboard:!1,centered:!0,children:[Object(x.jsx)(k.a.Header,{children:Object(x.jsx)(k.a.Title,{children:"You're about to delete your FuelRight profile..."})}),Object(x.jsx)(k.a.Body,{children:"All of your data will be lost - schedules, activities, foods, etc. Are you sure you want to delete?"}),Object(x.jsxs)(k.a.Footer,{children:[Object(x.jsx)(f.a,{variant:"secondary",onClick:O,children:"No, take me back!"}),Object(x.jsx)(f.a,{variant:"danger",onClick:function(){r(),j(!1)},children:"Yes, delete my profile :("})]})]})]}),Object(x.jsx)("br",{}),a!==[]?Object(x.jsx)("div",{children:a.map((function(e,t){return Object(x.jsx)("p",{style:{color:"red",marginBottom:"0px",marginTop:"10px"},children:e},t)}))}):null]})]})})})})})})]})};n(366);var A=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(l.a)(a,2),j=i[0],d=i[1],b=Object(c.useState)(!0),u=Object(l.a)(b,2),h=u[0],m=u[1],p=Object(c.useState)(0),f=Object(l.a)(p,2),v=f[0],C=f[1],k=Object(c.useState)(null),D=Object(l.a)(k,2),S=D[0],L=D[1],F=Object(c.useState)(null),E=Object(l.a)(F,2),R=E[0],B=E[1],A=Object(c.useState)([]),W=Object(l.a)(A,2),_=W[0],I=W[1],q=Object(c.useState)(null),G=Object(l.a)(q,2),H=G[0],U=G[1],Y=Object(c.useState)(null),J=Object(l.a)(Y,2),z=J[0],K=J[1],M=Object(c.useState)(null),Q=Object(l.a)(M,2),V=Q[0],X=Q[1],Z=Object(c.useState)(null),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)(null),ce=Object(l.a)(ne,2),re=ce[0],ae=ce[1],ie=Object(g.f)();function se(e){r(e),oe()}function oe(){fetch("/schedules").then((function(e){return e.json()})).then((function(e){var t;0!==e.length?(d(e),C(e.length-1),L(null),B(null),U(null),K(null),X(null),te(null),ae(null),t=e[e.length-1].id,fetch("schedules/".concat(t)).then((function(e){return e.json()})).then((function(e){L(e),fetch("/favorite_food").then((function(e){return e.json()})).then((function(e){e.error||B(e),le()}))})),console.log(e)):(d([]),C(0),L(null),B(null),U(null),K(null),X(null),te(null),ae(null))}))}function le(){fetch("/sleep_durations").then((function(e){return e.json()})).then((function(e){console.log(e),e.error||U(e),je()}))}function je(){fetch("/performance_food").then((function(e){return e.json()})).then((function(e){e.error||K(e),de()}))}function de(){fetch("/optimal_sleep_duration").then((function(e){return e.json()})).then((function(e){e.error||X(e),be()}))}function be(){fetch("/chart_one_data").then((function(e){return e.json()})).then((function(e){e.error||te(e),ue()}))}function ue(){fetch("/chart_two_data").then((function(e){return e.json()})).then((function(e){e.error?ae(null):ae(e)}))}function he(){return xe.apply(this,arguments)}function xe(){return(xe=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/logout",{method:"DELETE"});case 2:e.sent.ok&&(r(null),d([]),m(!0),C(0),L(null),B(null),I([]),U(null),K(null),X(null),te(null),ae(null),ie.push("/login"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(){return(Oe=Object(o.a)(s.a.mark((function e(t){var c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/users/".concat(n.id),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,c.ok?(r(a),I([]),ie.push("/")):I(a.errors);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(){return(me=Object(o.a)(s.a.mark((function e(t,n){var c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"activity"===t&&(t="activitie"),e.next=3,fetch("/".concat(t,"s"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,console.log(r),c.ok?(m(!1),I([]),oe()):I(r.errors);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){r(e),oe()}))}))}),[]),console.log(n),console.log(H),Object(x.jsxs)("div",{className:"App",children:[n?Object(x.jsx)(O,{user:n,logout:he,setDisplayForm:m,setErrors:I}):null,Object(x.jsxs)(g.c,{children:[Object(x.jsx)(g.a,{exact:!0,path:"/",children:n?Object(x.jsx)(w,{addEntry:function(e,t){return me.apply(this,arguments)},displayForm:h,setDisplayForm:m,errors:_}):Object(x.jsx)(y,{onLogin:se,setDisplayForm:m})}),Object(x.jsx)(g.a,{exact:!0,path:"/day",children:n?Object(x.jsx)(N,{schedules:j,index:v,setIndex:C,handleSchedulesScroll:function(e){fetch("schedules/".concat(e)).then((function(e){return e.json()})).then((function(e){L(e)}))},displayedSchedule:S,handleScheduleDelete:function(e){fetch("/schedules/".concat(e),{method:"DELETE"}).then((function(){return oe()}))}}):Object(x.jsx)(y,{onLogin:se,setDisplayForm:m})}),Object(x.jsx)(g.a,{exact:!0,path:"/history",children:n?Object(x.jsx)(T,{user:n,schedules:j,favFood:R,avgSleepDuration:H,bestPerformanceFood:z,optimalSleepDuration:V,chartOneData:ee,chartTwoData:re}):Object(x.jsx)(y,{onLogin:se,setDisplayForm:m})}),Object(x.jsx)(g.a,{exact:!0,path:"/edit",children:n?Object(x.jsx)(P,{user:n,handleUserUpdate:function(e){return Oe.apply(this,arguments)},handleUserDelete:function(){fetch("/users/".concat(n.id),{method:"DELETE"}).then((function(){return he()}))},errors:_}):Object(x.jsx)(y,{onLogin:se,setDisplayForm:m})}),Object(x.jsx)(g.a,{exact:!0,path:"/login",children:Object(x.jsx)(y,{onLogin:se,setDisplayForm:m})})]})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,387)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};a.a.render(Object(x.jsx)(h.a,{children:Object(x.jsx)(A,{})}),document.getElementById("root")),W()}},[[367,1,2]]]);
//# sourceMappingURL=main.73425ab9.chunk.js.map