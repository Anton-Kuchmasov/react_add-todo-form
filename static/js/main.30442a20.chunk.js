(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),s=a(2),c=a(7),o=(a(13),a(1)),l=a(0),d=function(e){var t=e.user;if(!t)return null;var a=t.email,n=t.name;return Object(l.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},u=function(e){var t=e.todo,a=t.id,n=t.title,i=t.user;return Object(l.jsxs)("article",{"data-id":a,className:"TodoInfo ".concat(t.completed?"TodoInfo--completed":""),children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:n}),Object(l.jsx)(d,{user:i})]})},m=function(e){var t=e.todos;return Object(l.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(l.jsx)(u,{todo:e},e.id)}))})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function b(e){return j.find((function(t){return t.id===e}))}var h=function(e){var t=e.onSubmit,a=e.todoId,n=e.users,i=Object(o.useState)(0),r=Object(s.a)(i,2),c=r[0],d=r[1],u=Object(o.useState)(!1),m=Object(s.a)(u,2),j=m[0],h=m[1],O=Object(o.useState)(""),f=Object(s.a)(O,2),p=f[0],x=f[1],v=Object(o.useState)(!1),S=Object(s.a)(v,2),y=S[0],I=S[1],g=function(e){e.preventDefault(),p.trim()||I(!0),c||h(!0),0!==p.trim().length&&c&&(t({id:a,title:p,completed:!1,userId:c,user:b(c)}),x(""),d(0))};return Object(l.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:g,children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{htmlFor:"text-input",children:"Title:\xa0"}),Object(l.jsx)("input",{type:"text",id:"text-input","data-cy":"titleInput",placeholder:"Enter a title",value:p,onChange:function(e){x(e.target.value),I(!1)}}),y&&Object(l.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{htmlFor:"select-list",children:"User:\xa0"}),Object(l.jsxs)("select",{"data-cy":"userSelect",id:"select-list",value:c,onChange:function(e){d(+e.target.value),h(!1)},children:[Object(l.jsx)("option",{value:"0",disabled:!0,defaultValue:"0",children:"Choose a user"}),n.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),j&&Object(l.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",onChange:g,children:"Add"})]})},O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:b(e.userId)})})),f=function(){var e=Object(o.useState)(O),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsx)(h,{onSubmit:function(e){n([].concat(Object(r.a)(a),[e]))},todoId:0===a.length?1:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,users:j}),Object(l.jsx)(m,{todos:a})]})};i.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.30442a20.chunk.js.map