/* eslint-disable import/prefer-default-export */
import { todoTasks } from './data.js';
const updateTask = (checkboxIndex, currentState) => {
  todoTasks.forEach((todo, todoIndex) => {
    if (checkboxIndex === todoIndex) {
      todo.completed = currentState;
    }
  });
};

const updateDescription = (checkboxIndex, isSelected) => {
  document.querySelectorAll('.description').forEach((description, descriptionIndex) => {
    console.log(description, descriptionIndex);
    // console.log('selectedIndex: ', descriptionIndex);
    if (checkboxIndex === descriptionIndex && isSelected) {
      description.classList.add('strike-line');
    } else {
      description.classList.remove('strike-line');
    }
  });
};

export const updateTodos = () => {
  document.querySelectorAll('.checkbox').forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      const checkboxIndex = +checkbox.getAttribute('name');
      if (checkbox.checked && (index+1 === checkboxIndex)) {
        console.log('check: ', (index));
        updateTask(checkboxIndex, true);
        const description = document.querySelectorAll('.description')[index];
        description.classList.add('strike-line');
        console.log(description);

        console.log(todoTasks);
      } else {
        console.log('uncheck: ', (index));
        updateTask(checkboxIndex, false);
        const description = document.querySelectorAll('.description')[index];
        description.classList.remove('strike-line');
        console.log(description);
      }
    });
  });
};