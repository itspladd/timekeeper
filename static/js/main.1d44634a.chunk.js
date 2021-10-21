(this.webpackJsonpcapensis=this.webpackJsonpcapensis||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},68:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);n(42);var c=n(1),a=n.n(c),r=n(18),s=n.n(r),i=(n(47),n(3)),o=(n(48),n(7)),l=n.n(o),j=n(21),u=n(8),d=(n(68),n(0));function b(e){var t=e.username,n=e.handleLogout;e.currentSession;return Object(d.jsx)("div",{className:"Header navbar navbar-expand-sm navbar-light bg-info",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Capensis"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.c,{className:"nav-link",to:"/schedule",children:"Schedule"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.c,{to:"/projects",className:"nav-link",children:"Projects"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.c,{className:"nav-link",to:"/reports",children:"Reports"})})]})}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsxs)("span",{className:"navbar-text me-2",children:["Logged in as ",t]}),Object(d.jsx)("button",{className:"btn btn-outline-dark",onClick:n,children:"Logout"})]})]})})}n(78);function h(e){var t=e.currentSession,n=e.projects,c=!n,a=t&&n&&n[t.project_id];return Object(d.jsxs)("div",{className:"statusBar mb-2 border-top border-info ".concat(a?"bg-success text-light":a?void 0:"bg-secondary text-light"),children:[c&&"Loading...",a&&"Currently tracking ".concat(n[t.project_id].title),t&&!n[t.project_id]&&"ERROR: Trying to track project ID ".concat(t.project_id,", but it was not found."),!t&&"Not currently tracking"]})}var m=n(16),O=n(2);function f(e){var t=Object(c.useState)(e),n=Object(i.a)(t,2),a=n[0],r=n[1];return[a,function(e){e.preventDefault(),r((function(t){var n=Object(O.a)({},t);return n[e.target.id]=e.target.value,n}))}]}var p=n(12);function x(e){var t=e.login,n=f({formLoginUsername:"",formLoginPassword:""}),c=Object(i.a)(n,2),a=c[0],r=c[1];return Object(d.jsxs)(p.a,{className:"loginForm",children:[Object(d.jsx)("h4",{children:"Login"}),Object(d.jsxs)(p.a.Group,{className:"mb-3",controlId:"formLoginUsername",children:[Object(d.jsx)(p.a.Label,{children:"Username"}),Object(d.jsx)(p.a.Control,{onChange:r,type:"text",placeholder:"Username"})]}),Object(d.jsxs)(p.a.Group,{className:"mb-3",controlId:"formLoginPassword",children:[Object(d.jsx)(p.a.Label,{children:"Password"}),Object(d.jsx)(p.a.Control,{onChange:r,type:"password",placeholder:"Password"})]}),Object(d.jsx)(m.a,{variant:"success",type:"submit",onClick:function(e){e.preventDefault();var n=a.formLoginUsername,c=a.formLoginPassword;l.a.post("/api/login",{username:n,rawPassword:c}).then((function(e){return t(e.data.username)}))},children:"Submit"})]})}function v(e){var t=e.login,n=f({formRegisterUsername:"",formRegisterPassword:""}),c=Object(i.a)(n,2),a=c[0],r=c[1];return Object(d.jsxs)(p.a,{className:"registerForm",children:[Object(d.jsx)("h4",{children:"Register"}),Object(d.jsxs)(p.a.Group,{className:"mb-3",controlId:"formRegisterUsername",children:[Object(d.jsx)(p.a.Label,{children:"Username"}),Object(d.jsx)(p.a.Control,{onChange:r,type:"text",placeholder:"Username"})]}),Object(d.jsxs)(p.a.Group,{className:"mb-3",controlId:"formRegisterPassword",children:[Object(d.jsx)(p.a.Label,{children:"Password"}),Object(d.jsx)(p.a.Control,{onChange:r,type:"password",placeholder:"Password"})]}),Object(d.jsx)(m.a,{variant:"success",type:"submit",onClick:function(e){e.preventDefault();var n=a.formRegisterUsername,c=a.formRegisterPassword;l.a.post("/api/users",{username:n,rawPassword:c}).then((function(e){return t(e.data.username)}))},children:"Create account"})]})}n(79);function g(e){var t=e.login,n=Object(c.useState)(!0),a=Object(i.a)(n,2),r=a[0],s=a[1],o=r?Object(d.jsx)(x,{login:t}):Object(d.jsx)(v,{login:t}),l=r?"Don't have an account yet?":"Already have a Capensis account?",j=r?"Sign up":"Sign in";return Object(d.jsx)("div",{className:"Authentication",children:Object(d.jsxs)("div",{id:"Authentication_background",children:[Object(d.jsxs)("div",{id:"Authentication_welcome",children:[Object(d.jsx)("p",{className:"appName",children:"Capensis"}),Object(d.jsx)("p",{className:"welcomeMessage",children:"A super simple scheduler and time-tracker."})]}),o,Object(d.jsxs)("div",{className:"Authentication_switch",children:[Object(d.jsx)("p",{children:l}),Object(d.jsx)(m.a,{variant:"primary",size:"sm",onClick:function(e){e.preventDefault(),document.activeElement.blur(),s(!r)},children:j})]})]})})}var N=n(29),S=n.n(N),w=n(41),k=n(22);function C(e){var t=864e5*e.getDay(),n=e.valueOf()-t;return new Date(n)}function y(e,t){return 60*e+t}function M(e){var t=e.values,n=e.block;return t?function(e){var t=Number(e.startHour)+Number(e.startAMPM),n=Number(e.startMinute),c=Number(e.endHour)+Number(e.endAMPM),a=Number(e.endMinute);return[y(t,n),y(c,a)]}(t):n?function(e){var t=new Date(e.start_time),n=new Date(e.end_time);return[y(t.getHours(),t.getMinutes()),y(n.getHours(),n.getMinutes())]}(n):void 0}function _(e,t){return new Date(e.start_time).getDate()===t.getDate()}var D={LANGUAGES:{EN_US:"EN_US"}};function P(e){return new Date(e).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}var A={EN_US:{TAG:"EN-US",NEW_BLOCK_VALIDATION:{conflict:function(e){var t=e.block,n=t.title,c=t.start_time,a=t.end_time,r=P(c),s=P(a);return"This time conflicts with another block: ".concat(n,", ").concat(r," - ").concat(s)},noProject:function(){return"You must select a project."},endBeforeStart:function(){return"That block would end on or before its start time."}}}};function E(e){var t=e.show,n=e.handleClose,a=e.currentDay,r=e.projects,s=e.blocks,o=e.refreshBlocks,j=f({project:"",startHour:"6",startMinute:"00",startAMPM:"0",endHour:"6",endMinute:"00",endAMPM:"0"}),u=Object(i.a)(j,2),b=u[0],h=u[1],O=function(e,t,n){var a=Object(c.useState)({}),r=Object(i.a)(a,2),s=r[0],o=r[1],l=Object(c.useState)(!1),j=Object(i.a)(l,2),u=j[0],d=j[1];return Object(c.useEffect)((function(){var c=M({values:e}),a=Object(i.a)(c,2),r=a[0],s=a[1],l=t&&t.filter((function(e){return _(e,n)})).map((function(e){var t=M({block:e}),n=Object(i.a)(t,2),c=n[0],a=n[1];return{block:e,start:r>=c&&r<a,end:s>c&&s<=a}})).filter((function(e){return e.start||e.end}))[0],j={};e.project||(j.noProject=!0),r>=s&&(j.endBeforeStart=!0),l&&(j.conflict=l),o(j)}),[e,t,n]),Object(c.useEffect)((function(){var e=0===Object.values(s).length;d(e)}),[s]),[s,u]}(b,s,a),p=Object(i.a)(O,2),x=p[0],v=p[1],g=Object(c.useState)(!1),N=Object(i.a)(g,2),C=N[0],y=N[1],P=D.LANGUAGES.EN_US,E=a&&a.toDateString(),L=r&&Object.values(r).reverse().map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.title},e.id)})),H=function(){for(var e=[],t=1;t<=12;t++)e.push(Object(d.jsx)("option",{value:12===t?0:t,children:t},12===t?0:t));return e}(),T=Object.keys(x).map((function(e){return Object(d.jsx)("li",{children:A[P].NEW_BLOCK_VALIDATION[e](x[e])},e)})),U=function(){var e=Object(w.a)(S.a.mark((function e(t){var c,r,s,j,u,d,h,m;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),v?(y(!1),c=M({values:b}),r=Object(i.a)(c,2),s=r[0],j=r[1],u=a.valueOf()+60*s*1e3,d=a.valueOf()+60*j*1e3,h=new Date(u).toISOString(),m=new Date(d).toISOString(),l.a.post("/api/blocks",{startTime:h,endTime:m,project:b.project}).then(o).then(n)):y(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(k.a,{show:t,onHide:n,children:[Object(d.jsx)(k.a.Header,{closeButton:!0,children:Object(d.jsx)(k.a.Title,{children:"Schedule a new Block"})}),Object(d.jsxs)(k.a.Body,{children:["Date: ",Object(d.jsx)("strong",{children:E}),Object(d.jsxs)("form",{onSubmit:U,children:[Object(d.jsxs)("div",{className:"row row-cols-sm-auto g-5 align-items-center",children:[Object(d.jsx)("label",{htmlFor:"project",children:"Project"}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("select",{className:"form-select",name:"project",id:"project",value:b.project,onChange:h,children:[Object(d.jsx)("option",{value:"",children:"Select a project"}),L]})})]}),Object(d.jsxs)("div",{className:"row row-cols-lg-auto g-2 mt-1 align-items-center",children:[Object(d.jsx)("label",{htmlFor:"startHour",children:"Starting at:"}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("select",{className:"form-select",name:"startHour",id:"startHour",value:b.startHour,onChange:h,children:H})}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("select",{className:"form-select",name:"startMinute",id:"startMinute",value:b.startMinute,onChange:h,children:[Object(d.jsx)("option",{children:"00"}),Object(d.jsx)("option",{children:"15"}),Object(d.jsx)("option",{children:"30"}),Object(d.jsx)("option",{children:"45"})]})}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("select",{className:"form-select",name:"startAMPM",id:"startAMPM",value:b.startAMPM,onChange:h,children:[Object(d.jsx)("option",{value:"0",children:"AM"}),Object(d.jsx)("option",{value:"12",children:"PM"})]})}),C&&x.conflict&&x.conflict.start&&Object(d.jsx)("small",{id:"passwordHelpBlock",className:"form-text text-muted",children:"That start time conflicts with an existing Block!"})]}),Object(d.jsxs)("div",{className:"row row-cols-lg-auto g-2 mt-1 align-items-center",children:[Object(d.jsx)("label",{children:"Ending at:"}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("select",{className:"form-select",name:"endHour",id:"endHour",value:b.endHour,onChange:h,children:H})}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("select",{className:"form-select",name:"endMinute",id:"endMinute",value:b.endMinute,onChange:h,children:[Object(d.jsx)("option",{children:"00"}),Object(d.jsx)("option",{children:"15"}),Object(d.jsx)("option",{children:"30"}),Object(d.jsx)("option",{children:"45"})]})}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("select",{className:"form-select",name:"endAMPM",id:"endAMPM",value:b.endAMPM,onChange:h,children:[Object(d.jsx)("option",{value:"0",children:"AM"}),Object(d.jsx)("option",{value:"12",children:"PM"})]})}),C&&x.conflict&&x.conflict.end&&Object(d.jsx)("small",{id:"passwordHelpBlock",className:"form-text text-muted",children:"That end time conflicts with an existing Block!"})]})]})]}),C&&0!==T.length&&Object(d.jsx)(k.a.Footer,{children:Object(d.jsx)("ul",{children:T})}),Object(d.jsxs)(k.a.Footer,{children:[Object(d.jsx)(m.a,{variant:"secondary",onClick:n,children:"Close"}),Object(d.jsx)(m.a,{variant:"primary",onClick:U,children:"Submit"})]})]})})}n(81),n(82),n(83);function L(e){var t=e.title,n=e.project_id,c=e.length,a=e.start_time,r=e.end_time,s=P(a),i=P(r),o=-1===n,l=o?"block_placeholder":"block",j=o?"block_placeholder_background":"block_background";return Object(d.jsx)("li",{className:"list-group-item "+j,projectid:n,style:{height:c+"rem"},children:Object(d.jsxs)("div",{className:l,children:[!o&&Object(d.jsx)("h5",{children:t}),s," to ",i]})})}function H(e){var t=e.blocks,n=e.day,a=t&&n&&t.map((function(e){return Object(c.createElement)(L,Object(O.a)(Object(O.a)({},e),{},{key:e.id,length:(t=e.start_time,n=e.end_time,(new Date(n)-new Date(t))/1e3/60/15)}));var t,n}));return Object(d.jsx)("ul",{className:"blockList list-group list-group-flush",children:a})}n(84);function T(e){var t,n,c=function(e){var t=e.hour,n=t<12;return Object(d.jsxs)("li",{className:"ScheduleBarSection list-group-item",children:[n||12===t?t:t-12," ",n?"AM":"PM"]},t)};return Object(d.jsx)("ul",{className:"ScheduleBar list-group list-group-flush",children:(t=6,n=20,new Array(n-t).fill(void 0).map((function(e,n){return Object(d.jsx)(c,{hour:t+n})})))})}function U(e){var t,n,a=A[D.LANGUAGES.EN_US].TAG,r=e.blocks,s=e.day,o=e.goToTomorrow,l=e.goToYesterday,j=e.showForm,u=Object(c.useState)([]),b=Object(i.a)(u,2),h=b[0],O=b[1],f=(n=s,(t=a)&&n?new Date(n).toLocaleDateString(t,{weekday:"long"}):""),p=function(e,t){return e&&t?new Date(t).toLocaleDateString(e,{month:"long",year:"numeric",day:"numeric"}):""}(a,s);return Object(c.useEffect)((function(){var e=[],t=new Date(s);for(t.setHours(6),r.forEach((function(n){for(var c=new Date(n.start_time);t<c;){var a={id:"p".concat(t.getHours()).concat(t.getMinutes()||"00"),title:P(t),project_id:-1,start_time:t.toISOString()};t.setMinutes(t.getMinutes()+15),a.end_time=t.toISOString(),e.push(a)}e.push(n),t=new Date(n.end_time)}));t.getHours()<20;){var n={id:"p".concat(t.getHours()).concat(t.getMinutes()||"00"),title:P(t),project_id:-1,start_time:t.toISOString()};t.setMinutes(t.getMinutes()+15),n.end_time=t.toISOString(),e.push(n)}O(e)}),[r,s]),Object(d.jsxs)("div",{className:"daySchedule",children:[Object(d.jsxs)("div",{className:"dayScheduleHeader",children:[Object(d.jsxs)("div",{className:"dayScheduleHeader_internal",children:[Object(d.jsx)(m.a,{variant:"info",onClick:l,children:"<"}),Object(d.jsx)(m.a,{variant:"info",onClick:o,children:">"}),Object(d.jsxs)("div",{className:"dayScheduleHeader_date",children:[Object(d.jsx)("h3",{children:f}),Object(d.jsx)("small",{className:"text-muted",children:p})]})]}),Object(d.jsx)(m.a,{variant:"primary",onClick:j,children:"New Block"})]}),Object(d.jsxs)("div",{className:"dayScheduleInternal mt-1",children:[Object(d.jsx)(T,{}),Object(d.jsx)(H,{blocks:h,day:s})]})]})}function I(e){return Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"WeekSchedule component"})})}var B=n(11);function F(e){var t=e.id,n=e.title,c=e.selected,a=e.onEditClick,r=e.onCancelClick,s=e.onSubmit,i=e.formValue,o=e.handleChange;return Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between bg-light",children:[Object(d.jsx)("span",{children:Object(d.jsx)("strong",{children:n})}),c&&Object(d.jsxs)("form",{className:"row row-cols-sm-auto g-3 align-items-center",onSubmit:s,children:[Object(d.jsxs)("div",{className:"col-12",children:[Object(d.jsx)("label",{className:"visually-hidden",htmlFor:"newName",children:"New name: "}),Object(d.jsx)("input",{type:"text",className:"form-control form-control-sm",id:"newName",value:i,onChange:o})]}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("button",{className:"btn btn-sm btn-secondary",children:"Submit"})}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:r,children:"Cancel"})})]}),!c&&Object(d.jsx)("button",{className:"btn btn-sm btn-info",onClick:a,children:"Rename"})]},t)}function R(e){var t=e.projects,n=e.setProjects,a=Object(c.useState)(null),r=Object(i.a)(a,2),s=r[0],o=r[1],j=Object(c.useState)(null),u=Object(i.a)(j,2),b=u[0],h=u[1],m=Object(c.useState)(!1),f=Object(i.a)(m,2),p=f[0],x=f[1],v=Object(c.useState)(""),g=Object(i.a)(v,2),N=g[0],S=g[1],w=function(e){e.preventDefault(),o(null)},k=function(e){h(e.target.value)},C=t&&Object.values(t).map((function(e){return Object(d.jsx)(F,Object(O.a)(Object(O.a)({},e),{},{selected:e.id===s,onEditClick:function(){return o(e.id)},onCancelClick:w,onSubmit:function(c){return function(e,c){e.preventDefault();var a=null!==b?b:t[c].title;o(null),h(null);var r=Object(O.a)(Object(O.a)({},t[c]),{},{title:a});n((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(B.a)({},c,r))})),l.a.patch("/api/projects/".concat(c),{title:a})}(c,e.id)},handleChange:k,formValue:null===b?e.title:b}))}));return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"My Projects"}),Object(d.jsx)("ul",{className:"list-group",children:C}),Object(d.jsxs)("div",{className:"newProject",children:[!p&&Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){return x(!0)},children:"Add a Project"}),p&&Object(d.jsxs)("form",{className:"row row-cols-lg-auto g-3",onSubmit:function(e){e.preventDefault(),l.a.post("/api/projects",{projectTitle:N}).then((function(e){var t=e.data;n((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(B.a)({},t.id,t))}))})).then((function(){S(""),x(!1)}))},children:[Object(d.jsxs)("div",{className:"col-12",children:[Object(d.jsx)("label",{className:"visually-hidden",htmlFor:"newProject",children:"New project name:"}),Object(d.jsx)("input",{className:"form-control",type:"text",id:"newProject",value:N,onChange:function(e){S(e.target.value)}})]}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("button",{className:"btn btn-success",type:"submit",children:"Submit"})}),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("button",{className:"btn btn-danger",type:"button",onClick:function(e){e.preventDefault(),S(""),x(!1)},children:"Cancel"})})]})]})]})}function G(e){var t=e.projects,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];Object(c.useEffect)((function(){l.a.get("/api/reports/week").then((function(e){return s(e.data)}))}),[t]);var o=r.map((function(e){var n=e.project_id,c=e.sessions_total,a=e.blocks_total,r=t[n].title,s=1/3600,i=c*s||0,o=a*s||0;return Object(d.jsxs)("li",{children:[r,": ",i.toPrecision(1)," / ",o," hours"]},n)}));return Object(d.jsx)("div",{className:"reports",children:Object(d.jsx)("ul",{children:o})})}function V(){return Object(d.jsx)("div",{className:"Footer",children:"Created by Pladd"})}function W(e){var t,n=new Date;(t=n).setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0);C(n);var a=Object(c.useState)(n),r=Object(i.a)(a,2),s=r[0],o=r[1],j=Object(c.useState)([]),u=Object(i.a)(j,2),d=u[0],b=u[1];Object(c.useEffect)((function(){l.a.get("/api/blocks/week").then((function(e){return b(e.data)}))}),[e]);return[d,function(){l.a.get("/api/blocks/week?date=".concat(s.toISOString())).then((function(e){return b(e.data)}))},s,function(e){var t=864e5*e,n=new Date(s.valueOf()+t);(function(e,t){var n=C(e),c=C(t);return n.getDate()!==c.getDate()})(s,n)&&l.a.get("/api/blocks/week?date=".concat(n.toISOString())).then((function(e){return b(e.data)})),o(n)}]}function Y(){var e=function(){var e=Object(c.useState)(!0),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),o=s[0],j=s[1];return Object(c.useEffect)((function(){console.log("authenticating"),l.a.post("/api/authenticate").then((function(e){j(e.data.username),a(!1)}))}),[]),[n,o,function(e){j(e)},function(e){e.preventDefault(),l.a.post("/api/logout").then((function(e){return j(e.data.username)}))}]}(),t=Object(i.a)(e,4),n=t[0],a=t[1],r=t[2],s=t[3],o=W(a),m=Object(i.a)(o,4),O=m[0],f=m[1],p=m[2],x=m[3],v=function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){l.a.get("/api/sessions/current").then((function(e){e.data[0]&&r(e.data[0])}))}),[e]),[a,function(e){var t=e.target.closest(".block");if(t){var n=Number(t.getAttribute("projectid"));a&&l.a.patch("/api/sessions",{session_id:a.id}),a&&n===a.project_id?r(null):l.a.post("/api/sessions",{project_id:n}).then((function(e){return r(e.data)}))}}]}(a),N=Object(i.a)(v,2),S=N[0],w=N[1],k=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return[function(){return a(!0)},function(){return a(!1)},n]}(),C=Object(i.a)(k,3),y=C[0],M=C[1],D=C[2],P=Object(c.useState)({}),A=Object(i.a)(P,2),L=A[0],H=A[1];return Object(c.useEffect)((function(){l.a.get("/api/projects").then((function(e){var t={};e.data.projects.forEach((function(e){return t[e.id]=e})),H(t)}))}),[a]),Object(d.jsxs)("div",{className:"App",onClick:w,children:[n&&Object(d.jsx)("p",{children:"Currently loading..."}),!n&&!a&&Object(d.jsx)(g,{login:r}),!n&&a&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j.a,{basename:"/capensis",children:[Object(d.jsx)(b,{username:a,handleLogout:s,currentSession:S}),Object(d.jsx)(h,{currentSession:S,projects:L}),Object(d.jsx)(E,{show:D,handleShow:y,handleClose:M,currentDay:p,projects:L,blocks:O,refreshBlocks:f}),Object(d.jsx)("div",{className:"App-body",children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:["/","/schedule"],children:Object(d.jsx)(U,{blocks:O.filter((function(e){return _(e,p)})),day:p,goToTomorrow:function(){return x(1)},goToYesterday:function(){return x(-1)},showForm:y})}),Object(d.jsx)(u.a,{exact:!0,path:"/week",children:Object(d.jsx)(I,{})}),Object(d.jsx)(u.a,{exact:!0,path:"/projects",children:Object(d.jsx)(R,{projects:L,setProjects:H})}),Object(d.jsx)(u.a,{exact:!0,path:"/reports",children:Object(d.jsx)(G,{projects:L})})]})})]})}),Object(d.jsx)(V,{})]})}l.a.defaults.baseURL="https://capensis-api.herokuapp.com",l.a.defaults.withCredentials=!0,s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(Y,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.1d44634a.chunk.js.map