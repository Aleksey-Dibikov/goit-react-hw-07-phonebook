(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={TaskList:"ContactList_TaskList__Cf-7W",TaskList_item:"ContactList_TaskList_item__YuNTi",TaskList_button:"ContactList_TaskList_button__3Fwnr"}},34:function(t,e,n){t.exports={TaskEditor_input:"Filter_TaskEditor_input__6pNn2"}},66:function(t,e,n){},67:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),s=n(4),u=n(32),o=n(17),l=n(3),b=n(7),d=n(33),j=n.n(d),f=n(5),p=n(2),O=Object(l.b)("contact/filter"),m=n(8),h=n.n(m),_=n(18),k=n(11),v=n.n(k);v.a.defaults.baseURL="https://6196b1abaf46280017e7e242.mockapi.io/";var x,T,C=Object(l.c)("contact/fetchContacts",function(){var t=Object(_.a)(h.a.mark((function t(e,n){var a,r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,v.a.get("/contact");case 4:return r=t.sent,c=r.data,t.abrupt("return",c);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),E=Object(l.c)("contact/addContact",function(){var t=Object(_.a)(h.a.mark((function t(e,n){var a,r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,v.a.post("/contacts",e);case 4:return r=t.sent,c=r.data,t.abrupt("return",c);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),g=Object(l.c)("contact/deleteContact",function(){var t=Object(_.a)(h.a.mark((function t(e,n){var a,r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,v.a.delete("/contacts/".concat(e));case 4:return r=t.sent,c=r.data.id,t.abrupt("return",c);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),w=Object(l.d)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(x={},Object(f.a)(x,C.fulfilled,(function(t,e){return e.payload})),Object(f.a)(x,E.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(o.a)(t),[n])})),Object(f.a)(x,g.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),x)),y=Object(l.d)(!1,(T={},Object(f.a)(T,C.pending,(function(){return!0})),Object(f.a)(T,C.fulfilled,(function(){return!1})),Object(f.a)(T,C.rejected,(function(){return!1})),Object(f.a)(T,E.pending,(function(){return!0})),Object(f.a)(T,E.fulfilled,(function(){return!1})),Object(f.a)(T,E.rejected,(function(){return!1})),Object(f.a)(T,g.pending,(function(){return!0})),Object(f.a)(T,g.fulfilled,(function(){return!1})),Object(f.a)(T,g.rejected,(function(){return!1})),T)),L=Object(l.d)("",Object(f.a)({},O,(function(t,e){return e.payload}))),N=Object(l.d)(null,{}),F=Object(p.b)({items:w,filter:L,loading:y,error:N}),A={key:"root",storage:j.a,blacklist:["filter"]},z=Object(l.a)({reducer:{contacts:Object(b.g)(A,F)},middleware:Object(o.a)(Object(l.e)({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}})),devTools:!1}),S=Object(b.h)(z),I=(n(66),n(67),n(15)),W=function(t){return t.contacts.loading},q=function(t){return t.contacts.filter},B=Object(I.a)([function(t){return t.contacts.items},q],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),J=n(19),M=n.n(J),V=n(1);function Z(){var t=Object(s.c)(B),e=Object(s.b)();return Object(V.jsx)("ul",{className:M.a.TaskList,children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(V.jsxs)("li",{className:M.a.TaskList_item,children:[a," : ",r,Object(V.jsx)("button",{className:M.a.TaskList_button,onClick:function(){return e(g.fulfilled(n))},children:"Delete"})]},n)}))})}var D=n(22),H=n(71),R=n(9),G=n.n(R);function K(){var t=Object(a.useState)(""),e=Object(D.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),i=Object(D.a)(c,2),u=i[0],o=i[1],l=Object(s.c)((function(t){return t})).contacts,b=Object(s.b)(),d=Object(H.a)(),j=Object(H.a)(),f=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":o(a)}};return Object(V.jsxs)("form",{onSubmit:function(t){t.preventDefault();if(function(t){return l.items.map((function(t){return t.name})).includes(t)}(n))return alert("".concat(n," is already in contacts"));b(E({name:n,number:u})),r(""),o("")},className:G.a.TaskEditor,children:[Object(V.jsx)("label",{id:d,className:G.a.TaskEditor_label,children:Object(V.jsx)("input",{className:G.a.TaskEditor_input,id:d,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432,\r \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432.\r \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer,\r Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:f})}),Object(V.jsx)("label",{id:j,className:G.a.TaskEditor_label,children:Object(V.jsx)("input",{className:G.a.TaskEditor_input,id:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:f})}),Object(V.jsx)("button",{className:G.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}var P=n(34),U=n.n(P);function X(){var t=Object(s.c)(q),e=Object(s.b)();return Object(V.jsxs)("div",{children:[Object(V.jsx)("h3",{children:"Find contacts by name"}),Object(V.jsx)("input",{className:U.a.TaskEditor_input,type:"text",value:t,onChange:function(t){return e(O(t.target.value))}})]})}var Y=function(){var t=Object(s.c)(W),e=Object(s.b)();return Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)("h1",{children:"Phonebook"}),Object(V.jsx)(K,{}),Object(V.jsx)("h2",{children:"Contacts"}),Object(V.jsx)(X,{}),Object(V.jsx)(Z,{onFetchContacts:function(){return e(C.fulfilled())}}),t&&Object(V.jsx)("h1",{children:"loading ..."})]})};i.a.render(Object(V.jsx)(r.a.StrictMode,{children:Object(V.jsx)(s.a,{store:z,children:Object(V.jsx)(u.a,{loading:"please wait",persistor:S,children:Object(V.jsx)(Y,{})})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={TaskEditor:"ContactsForm_TaskEditor__2iMiv",TaskEditor_label:"ContactsForm_TaskEditor_label__1BveE",TaskEditor_input:"ContactsForm_TaskEditor_input__2EIIq",TaskEditorinput:"ContactsForm_TaskEditorinput__36bnX",TaskEditor_button:"ContactsForm_TaskEditor_button__1HIGF"}}},[[69,1,2]]]);
//# sourceMappingURL=main.e522c863.chunk.js.map