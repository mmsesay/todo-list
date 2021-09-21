import { todoLists } from './elements';
import '../styles/style.css';

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
  todoTasks.forEach( todo => {
    template += `
      <div class='flex space-between items-center space-x-y'>
        <div class='flex items-center'>
          <input type='checkbox' name='${todo.index}' value='${todo.description}' class="checkbox color-gray">
          <p>${todo.description}</p>
        </div>
        <i class='fas fa-ellipsis-v color-gray'></i>
      </div>
      <div class='border-bottom-line'></div>
    `;
  });

  todoLists.innerHTML = template;
}

window.onload = renderTodos();