/* eslint-disable import/prefer-default-export */
import { tasksArray } from './data.js';

export const todoLists = document.querySelector('.todo-lists');
export const checkBoxes = document.querySelectorAll('.checkbox');

let dragItem = null;
let dragItemIndex = null;
let nextItemIndex = null;
let nextElement = null;
class Dragging {
  constructor() {
    this.todoTasks = tasksArray;
  }

  dragStart = (event) => {
    dragItem = event.target;
    dragItemIndex = +dragItem.id;
    dragItem.classList.add('bg-white');
  };

  dragOver = (event) => {
    event.preventDefault();
    event.target.classList.add('drag-over');
    const hoveredElement = event.target.parentNode;
    nextElement = (hoveredElement === dragItem.nextSibling) ? hoveredElement.nextSibling : hoveredElement;

    nextItemIndex = +nextElement.id;
    if (nextItemIndex) {
      const object = this.todoTasks[dragItemIndex];

      this.todoTasks.splice(dragItemIndex, 1);
      this.todoTasks.splice(nextItemIndex, 0, object);
    }
    localStorage.setItem('Tasks', JSON.stringify(this.todoTasks));
    // this.todoLists.insertBefore(dragItem, nextElement);
  };

  dragEnter = (event) => {
    event.preventDefault();
    event.target.classList.add('drag-over');
  };

  dragLeave = (event) => {
    event.preventDefault();
    event.target.classList.remove('drag-over');
  };

  dragDrop = (event) => {
    event.preventDefault();
    event.target.classList.remove('drag-over');
    localStorage.setItem('Tasks', JSON.stringify(this.todoTasks));
    window.location.reload();
  };

  trackDragEvent = () => {
    document.querySelectorAll('.draggable').forEach((todoElement) => {
      todoElement.addEventListener('dragstart', this.dragStart);
      todoElement.addEventListener('dragover', this.dragOver);
      todoElement.addEventListener('dragleave', this.dragLeave);
      todoElement.addEventListener('dragenter', this.dragEnter);
      todoElement.addEventListener('drop', this.dragDrop);
    });
  };
}

const instance = new Dragging();
export const enableDragging = instance.trackDragEvent();
