import { todoTasks } from './data.js';
import { todoLists, enableDragging } from './elements.js';
import { updateTodos } from './state-management.js';
import '../styles/style.css';

window.onload = () => {
  const renderTodos = () => {
    todoTasks.forEach((todo, index) => {
      todoLists.innerHTML += `
        <div id='${index}' class='draggable' draggable='true'>
          <div class='flex space-between items-center space-x-y'>
            <div class='flex items-center'>
              <input type='checkbox' class='checkbox color-gray' name='${todo.index}'>
              <input type='text' value='${todo.description}' class='text-input editInputField' />
              <p class='description'>${todo.description}</p>
            </div>
            <i class='fas fa-ellipsis-v color-gray dragIcon'></i>
          </div>
          <div class='border-bottom-line'></div>
        </div>
      `;
    });
  };
  // console.log(todoTasks);/
  renderTodos();
  updateTodos(todoTasks);
  enableDragging();
};