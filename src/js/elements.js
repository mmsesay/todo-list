/* eslint-disable import/prefer-default-export */
export const todoLists = document.querySelector('.todo-lists');
export const checkBoxes = document.querySelectorAll('.checkbox');

const trackDragging = () => {
  document.querySelectorAll('.draggable').forEach((todoElement, idx) => {
    console.log(todoElement, idx);
    todoElement.addEventListener('dragstart', () => {
      todoElement.classList.add('dragging');
      console.log('start:', todoElement, idx);
    });
  
    todoElement.addEventListener('dragend', () => {
      todoElement.classList.remove('dragging');
      console.log('end:', todoElement, idx);
    });
  });
};

export const enableDragging = () =>{
  trackDragging();

  todoLists.addEventListener('dragover', event => {
    event.preventDefault();
    const draggable = document.querySelector('.dragging');
    todoLists.appendChild(draggable);
  });
}