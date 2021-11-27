(this["webpackJsonpto-do-machine"]=this["webpackJsonpto-do-machine"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),s=n(6),l=n(2);var u=n(0),i=c.a.createContext();function d(e){var t=function(e,t){var n=c.a.useState(!1),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!0),u=Object(l.a)(s,2),i=u[0],d=u[1],j=c.a.useState(t),m=Object(l.a)(j,2),b=m[0],O=m[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),O(n),d(!1)}catch(a){r(a)}}),1e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),O(t)}catch(a){r(a)}},loading:i,error:a}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,d=c.a.useState(""),j=Object(l.a)(d,2),m=j[0],b=j[1],O=c.a.useState(!1),x=Object(l.a)(O,2),h=x[0],f=x[1],p=n.filter((function(e){return!!e.completed})).length,v=n.length,T=[];T=!m.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=m.toLowerCase();return t.includes(n)}));return Object(u.jsx)(i.Provider,{value:{loading:a,error:r,totalTodos:v,completedTodos:p,searchValue:m,setSearchValue:b,searchedTodos:T,addTodo:function(e){var t=Object(s.a)(n);t.push({completed:!1,text:e}),o(t)},completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!c[t].completed,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},openModal:h,setOpenModal:f},children:e.children})}n(13);function j(){var e=c.a.useContext(i),t=e.totalTodos,n=e.completedTodos;return Object(u.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODO's"]})}n(14);function m(){var e=c.a.useContext(i),t=e.searchValue,n=e.setSearchValue;return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsx)("input",{className:"TodoSearch",placeholder:"Cebolla",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})})}n(15);function b(e){return Object(u.jsx)("section",{children:Object(u.jsx)("ul",{children:e.children})})}n(16);function O(e){return Object(u.jsxs)("li",{className:"TodoItem",children:[Object(u.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(u.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(u.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}n(17);function x(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(i),r=a.addTodo,s=a.setOpenModal;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),s(!1)},children:[Object(u.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(u.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Escribe una nueva tarea"}),Object(u.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(u.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){s(!1)},children:"Cancelar"}),Object(u.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}n(18);function h(){var e=c.a.useContext(i),t=e.setOpenModal,n=e.openModal;return Object(u.jsx)("button",{className:"CreateTodoButton",onClick:function(){t(!n)},children:"+"})}n(19);function f(e){var t=e.children;return r.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}function p(e){e.error;return Object(u.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}n(20);function v(){return Object(u.jsx)("li",{className:"TodoItem-loading",children:Object(u.jsxs)("div",{className:"LoaderBalls",children:[Object(u.jsx)("span",{className:"LoaderBalls__item"}),Object(u.jsx)("span",{className:"LoaderBalls__item"}),Object(u.jsx)("span",{className:"LoaderBalls__item"})]})})}function T(){return Object(u.jsx)("p",{children:"\xa1Crea tu primer TODO!"})}function g(){var e=c.a.useContext(i),t=e.error,n=e.loading,o=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(m,{}),Object(u.jsxs)(b,{children:[t&&Object(u.jsx)(p,{error:t}),n&&new Array(8).fill().map((function(e,t){return Object(u.jsx)(v,{},t)})),!n&&!o.length&&Object(u.jsx)(T,{}),o.map((function(e){return Object(u.jsx)(O,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),s&&Object(u.jsx)(f,{children:Object(u.jsx)(x,{})}),Object(u.jsx)(h,{})]})}var C=function(){return Object(u.jsx)(d,{children:Object(u.jsx)(g,{})})};r.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.603c5526.chunk.js.map