import LocalStorage from '../__mocks__/localStorage.js';

const localStorage = new LocalStorage();

export const addTask = (task) => {
  localStorage.setItem('todos', task);
  document.body.innerHTML = '<div class="draggable" draggable="true"></div>';
};

export const deleteTask = (removeAtIndex) => {
  const tasksArray = localStorage.getItem('todos');
  const filtered = tasksArray.filter((task, taskIndex) => taskIndex !== removeAtIndex);
  localStorage.setItem('todos', filtered);
  document.body.innerHTML = '';
};

export const editTask = (task, updateText) => {
  task.description = updateText;
  localStorage.setItem('todos', task);
};