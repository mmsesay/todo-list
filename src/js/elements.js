/* eslint-disable import/prefer-default-export */
export const todoLists = document.querySelector('.todo-lists');
export const checkBoxes = document.querySelectorAll('.checkbox');

const trackDragging = () => {
  document.querySelectorAll('.draggable').forEach((todoElement, idx) => {
    todoElement.addEventListener('dragstart', () => {
      todoElement.classList.add('dragging');
    });

    todoElement.addEventListener('dragend', () => {
      todoElement.classList.remove('dragging');
    });
  });
};

export const enableDragging = () => {
  trackDragging();

  todoLists.addEventListener('dragover', event => {
    event.preventDefault();
    const draggable = document.querySelector('.dragging');
    todoLists.appendChild(draggable);
  });
};