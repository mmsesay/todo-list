import LocalStorage from '../__mocks__/localStorage.js';

const localStorage = new LocalStorage();

export const addTask = (task) => {
  localStorage.setItem('todos', task);
  document.body.innerHTML = '<div class="draggable" draggable="true"></div>';
};
