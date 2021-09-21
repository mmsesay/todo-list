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
        <div class='flex space-between items-center space-x-y'>
          <div class='flex items-center'>
            <input type='checkbox' name='${todo.index}' value='checked' class='checkbox color-gray'>
            <p class=${todo.completed === true? 'strike-line' : ''}>${todo.description}</p>
          </div>
          <i class='fas fa-ellipsis-v color-gray'></i>
        </div>
        <div class='border-bottom-line'></div>
      `;
    });

    todoLists.innerHTML = template;
  };

  renderTodos();
  updateTodos(todoTasks);

}