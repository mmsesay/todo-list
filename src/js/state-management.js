/* eslint-disable import/prefer-default-export */
export const updateTask = (todoTasks, checkboxIndex, currentState) => {
  todoTasks.forEach((todo, todoIndex) => {
    if (checkboxIndex === todoIndex) {
      todo.completed = currentState;
    } 
  });
};

export const updateTodos = (todoTasks) => {
  document.querySelectorAll('.checkbox').forEach((checkbox, checkboxIndex) => {
    checkbox.addEventListener('change', (event) => {
      if (checkbox.checked) {
        updateTask(todoTasks, checkboxIndex, true);
      } else {
        updateTask(todoTasks, checkboxIndex, false);
      }
    });
  });
};