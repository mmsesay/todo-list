/* eslint-disable import/prefer-default-export */
const updateTask = (todoTasks, checkboxIndex, currentState) => {
  todoTasks.forEach((todo, todoIndex) => {
    if (checkboxIndex === todoIndex) {
      todo.completed = currentState;
    }
  });
};

const updateDescription = (selectedIndex, isSelected) => {
  document.querySelectorAll('.description').forEach((description, descriptionIndex) => {
    if (selectedIndex === descriptionIndex) {
      if (isSelected) {
        description.classList.add('strike-line');
      } else {
        description.classList.remove('strike-line');
      }
    }
  });
};

export const updateTodos = (todoTasks) => {
  document.querySelectorAll('.checkbox').forEach((checkbox, checkboxIndex) => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        updateTask(todoTasks, checkboxIndex, true);
        updateDescription(checkboxIndex, true);
      } else {
        updateTask(todoTasks, checkboxIndex, false);
        updateDescription(checkboxIndex, false);
      }
    });
  });
};