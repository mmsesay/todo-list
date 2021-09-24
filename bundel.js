(()=>{"use strict";var e={890:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),s=t.n(a)()(o());s.push([e.id,"body {\n  background-color: #fff;\n  overflow-x: hidden;\n  font-family: 'Roboto', sans-serif;\n  font-size: 18px;\n}\n\nmain {\n  padding: 10% 0;\n}\n\n.list-none {\n  list-style: none;\n}\n\n.color-gray {\n  color: rgb(175, 172, 172);\n}\n\n.color-gray-dark {\n  color: rgb(122, 122, 122);\n}\n\n.bg-gray-light {\n  background-color: #f6f6f6;\n}\n\n.flex {\n  display: flex;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.font-roboto {\n  font-family: 'Roboto', sans-serif;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.text-md {\n  font-size: 18px;\n}\n\n.space-x-y {\n  padding: 8px 15px;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.card {\n  height: 50%;\n  background-color: #fff;\n  box-shadow: 5px 5px 20px 5px rgba(212, 212, 212, 0.466);\n}\n\n.text-input {\n  height: 13px;\n  width: 100%;\n  border: none;\n  padding: 20px 0;\n  font-style: italic;\n  font-size: 18px;\n}\n\n.strike-line {\n  text-decoration: line-through;\n}\n\n.bg-yellow {\n  background-color: #fef9ce !important;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.editInputField {\n  display: none;\n  font-style: normal;\n  width: 85%;\n  background-color: transparent;\n}\n\n.description {\n  display: flex;\n}\n\n.enterIcon {\n  position: absolute;\n  transform: rotate(90deg);\n  right: 4%;\n}\n\n.border-bottom-line {\n  border-bottom: 1px solid rgb(175, 172, 172);\n}\n\n.checkbox {\n  margin-right: 20px;\n}\n\n.drag-over {\n  background-color: rgb(63, 63, 63);\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.draggable {\n  background-color: white;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.cursor-move {\n  cursor: move;\n}\n\n.dragging {\n  border: 1px solid rgba(60, 103, 245, 0.842);\n  background-color: rgb(77, 77, 77);\n}\n\n.dragElement:hover {\n  cursor: move;\n}\n\n.dragIcon {\n  display: flex;\n}\n\n.trashIcon {\n  display: none;\n}\n\n.refreshIcon {\n  margin-right: 10px;\n  margin-top: 10px;\n  transition: transform 0.5s ease-in-out;\n}\n\n#clear-all-completed {\n  cursor: pointer;\n  font-size: 20px;\n  transition: all 0.5s ease-in-out;\n}\n\n#clear-all-completed:hover,\n.refreshIcon:hover {\n  color: rgb(26, 26, 148);\n}\n\n.card-top-icons {\n  width: 100px;\n  height: 40px;\n  justify-content: flex-end;\n  position: relative;\n}\n\n.count {\n  position: absolute;\n  background-color: red;\n  height: 15px;\n  width: auto;\n  padding: 2px;\n  border-radius: 100%;\n  margin-top: -20px;\n  margin-right: -3px;\n  border: 4px solid #fff;\n  flex: 1;\n  color: #fff;\n  text-align: center;\n  display: none;\n}\n\n.count > p {\n  font-size: 13px;\n  padding: 2px;\n  font-weight: bold;\n}\n\n@media (min-width: 768px) {\n  main {\n    padding: 10% 20%;\n  }\n\n  .enterIcon {\n    right: 22%;\n  }\n}\n",""]);const i=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&s[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var l=e[i],d=r.base?l[0]+r.base:l[0],c=a[d]||0,u="".concat(d," ").concat(c);a[d]=c+1;var p=t(u),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(n[p].references++,n[p].updater(h)):n.push({identifier:u,updater:o(h,r),references:1}),s.push(u)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=t(a[s]);n[i].references--}for(var l=r(e,o),d=0;d<a.length;d++){var c=t(a[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=new class{constructor(){this.tasksArray=JSON.parse(localStorage.getItem("Tasks")||"[]"),this.addTodoInputField=document.getElementById("add-todo-input-field"),this.todoLists=document.querySelector(".todo-lists"),this.btnClearAllCompleted=document.getElementById("clear-all-completed"),this.countPara=document.querySelector(".count-para"),this.refreshIcon=document.querySelector(".refreshIcon")}addTask=()=>{this.addTodoInputField.addEventListener("keydown",(e=>{if("Enter"===e.key){const e={index:this.tasksArray.length+1,description:this.addTodoInputField.value,completed:!1};this.saveTask(e)}})),this.tasksArray.length>0?(this.countPara.innerHTML=+this.tasksArray.length,this.countPara.parentNode.style.display="flex"):this.countPara.parentNode.style.display="none"};saveTask=e=>{this.tasksArray.push(e),localStorage.setItem("Tasks",JSON.stringify(this.tasksArray)),this.addTodoInputField.value="",window.location.reload()};localCache=(e=null)=>{localStorage.setItem("Tasks",JSON.stringify(e)),window.location.reload()};readTasks=()=>{this.tasksArray.forEach(((e,n)=>{this.todoLists.innerHTML+=`\n        <div id='${n}' class='draggable' draggable='true'>\n          <div class='flex space-between items-center space-x-y'>\n            <div class='flex items-center w-full'>\n              <input type='checkbox' class='checkbox color-gray' ${e.completed?"checked":""}>\n              <input type='text' value='${e.description}' class='text-input editInputField' />\n              <p class='description color-gray-dark ${e.completed?"strike-line":""}'>${e.description}</p>\n            </div>\n            <i class='fas fa-ellipsis-v cursor-move color-gray dragIcon'></i>\n            <i class="fas fa-trash-alt cursor-pointer color-gray trashIcon"></i>\n          </div>\n          <div class='border-bottom-line'></div>\n        </div>\n      `}))};updateTask=(e,n)=>{this.tasksArray.splice(e,1,n),this.localCache(this.tasksArray)};handleStatusChange=()=>{document.querySelectorAll(".checkbox").forEach(((e,n)=>{e.addEventListener("change",(()=>{this.tasksArray.filter(((t,r)=>(n===r&&(e.checked?(t.completed=!0,this.updateTask(r,t)):(t.completed=!1,this.updateTask(r,t))),!1)))}))}))};editTask=()=>{let e="";document.querySelectorAll(".draggable").forEach(((n,t)=>{n.addEventListener("dblclick",(()=>{n.classList.add("bg-yellow");const r=n.childNodes[1].childNodes[1].childNodes[3],o=n.childNodes[1].childNodes[1].childNodes[5],a=n.childNodes[1].childNodes[3],s=n.childNodes[1].childNodes[5];this.showElements([r,s]),this.hideElements([o,a]),r.addEventListener("keydown",(n=>{"Enter"===n.key&&(e=r.value,this.tasksArray.filter(((n,r)=>(t===r&&(n.description=e,this.updateTask(r,n)),!1))))})),s.addEventListener("click",(()=>{const e=this.tasksArray.filter(((e,n)=>n!==t));this.localCache(e)})),n.addEventListener("mouseleave",(()=>{n.classList.remove("bg-yellow"),this.showElements([o,a]),this.hideElements([r,s])}))}))}))};clearAllCompleted=()=>{const e=this.tasksArray.filter((e=>!0!==e.completed));this.btnClearAllCompleted.addEventListener("click",(()=>{this.localCache(e)}))};clearAllTasks=()=>{this.refreshIcon.addEventListener("click",(()=>{this.refreshIcon.style.transform="rotate(360deg)",this.localCache([])}))};getTasksArray=()=>this.tasksArray;hideElements=e=>{e.forEach((e=>{e.style.display="none"}))};showElements=e=>{e.forEach((e=>{e.style.display="flex"}))}},n=e.readTasks(),r=e.getTasksArray();e.addTask(),e.handleStatusChange(),e.clearAllCompleted(),e.editTask(),e.clearAllTasks(),document.querySelector(".todo-lists"),document.querySelectorAll(".checkbox");let o=null,a=null,s=null,i=null;const l=(new class{constructor(){this.todoTasks=r}dragStart=e=>{o=e.target,a=+o.id,o.classList.add("bg-white")};dragOver=e=>{e.preventDefault(),e.target.classList.add("drag-over");const n=e.target.parentNode;if(i=n===o.nextSibling?n.nextSibling:n,s=+i.id,s){const e=this.todoTasks[a];this.todoTasks.splice(a,1),this.todoTasks.splice(s,0,e)}localStorage.setItem("Tasks",JSON.stringify(this.todoTasks))};dragEnter=e=>{e.preventDefault(),e.target.classList.add("drag-over")};dragLeave=e=>{e.preventDefault(),e.target.classList.remove("drag-over")};dragDrop=e=>{e.preventDefault(),e.target.classList.remove("drag-over"),localStorage.setItem("Tasks",JSON.stringify(this.todoTasks)),window.location.reload()};trackDragEvent=()=>{document.querySelectorAll(".draggable").forEach((e=>{e.addEventListener("dragstart",this.dragStart),e.addEventListener("dragover",this.dragOver),e.addEventListener("dragleave",this.dragLeave),e.addEventListener("dragenter",this.dragEnter),e.addEventListener("drop",this.dragDrop)}))}}).trackDragEvent();var d=t(379),c=t.n(d),u=t(795),p=t.n(u),h=t(569),f=t.n(h),g=t(565),v=t.n(g),m=t(216),y=t.n(m),b=t(589),k=t.n(b),x=t(890),w={};w.styleTagTransform=k(),w.setAttributes=v(),w.insert=f().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=y(),c()(x.Z,w),x.Z&&x.Z.locals&&x.Z.locals,window.onload=()=>{n(),l()}})()})();