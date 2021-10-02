import { showTasks } from './data.js';
import { enableDragging } from './dragging.js';
import '../styles/style.css';

window.onload = () => {
  showTasks();// invoke the data store class
  enableDragging(); // enable element dragging

  const todoLists = document.querySelector('.todo-lists');
  console.log(todoLists.offsetHeight);
};