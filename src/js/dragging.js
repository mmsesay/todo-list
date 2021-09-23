/* eslint-disable import/prefer-default-export */
import { dataStore } from "./data.js";
export const todoLists = document.querySelector('.todo-lists');
export const checkBoxes = document.querySelectorAll('.checkbox');

const todoTasks = dataStore.getTasksArray();
let dragItem = null;
let dragItemIndex = null;
let nextItemIndex = null;
let nextElement = null;
const dragStart = (event) => {
  dragItem = event.target;
  dragItemIndex = +dragItem.id;
};

const dragOver = (event) => {
  event.preventDefault();
  const hoveredElement = event.target.parentNode;
  nextElement = (
    hoveredElement === dragItem.nextSibling) ? 
  hoveredElement.nextSibling : 
  hoveredElement;

  nextItemIndex = +nextElement.id;
  if (nextItemIndex) {
    const object = todoTasks[dragItemIndex];

    todoTasks.splice(dragItemIndex, 1);
    todoTasks.splice(nextItemIndex, 0, object);
  }
  // localStorage.setItem('Tasks', JSON.stringify(todoTasks));
  todoLists.insertBefore(dragItem, nextElement);
};

const dragEnter = (event) => {
  event.preventDefault();
  event.target.classList.add('drag-over');
};

const dragLeave = (event) => {
  event.preventDefault();
  event.target.classList.remove('drag-over');
};

const dragDrop = (event) => {
  event.preventDefault();
  event.target.classList.remove('drag-over');
  localStorage.setItem('Tasks', JSON.stringify(todoTasks));
  window.location.reload();
};

const trackDragging = () => {
  document.querySelectorAll('.draggable').forEach((todoElement) => {
    todoElement.addEventListener('dragstart', dragStart);
    todoElement.addEventListener('dragover', dragOver);
    todoElement.addEventListener('dragleave', dragLeave);
    todoElement.addEventListener('dragenter', dragEnter);
    todoElement.addEventListener('drop', dragDrop);
  });
};

export const enableDragging = () => {
  trackDragging();
};