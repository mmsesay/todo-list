import { todoLists } from './elements.js';
import { updateTodos } from './state-management.js';
import '../styles/style.css';

window.onload = () => {
  const todoTasks = [
    {
      index: 1,
      description: 'wash the dishes',
      completed: false,
    },
    {
      index: 2,
      description: 'complete To Do list project',
      completed: false,
    },
  ];

  let template = '';
  const renderTodos = () => {
    todoTasks.forEach((todo) => {
      template += `
        <div class='draggable' draggable='true'>
          <div class='flex space-between items-center space-x-y'>
            <div class='flex items-center'>
              <input type='checkbox' name='${todo.index}' class='checkbox color-gray'>
              <input type='text' value='${todo.description}' class='text-input editInputField' />
              <p class='description'>${todo.description}</p>
            </div>
            <i class='fas fa-ellipsis-v color-gray dragIcon'></i>
          </div>
          <div class='border-bottom-line'></div>
        </div>
      `;
    });

    todoLists.innerHTML = template;
  };

  renderTodos();
  updateTodos(todoTasks);
};