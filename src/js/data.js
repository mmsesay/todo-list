/* eslint-disable import/prefer-default-export */
class DataStore {
  constructor() {
    this.tasksArray = JSON.parse(localStorage.getItem('Tasks') || '[]');
    this.addTodoInputField = document.getElementById('add-todo-input-field');
    this.todoLists = document.querySelector('.todo-lists');
  }

  addTask = () => {
    this.addTodoInputField.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const value = this.addTodoInputField.value;
        const newTaskObject = {
          index: this.tasksArray.length +1,
          description: value,
          completed: false,
        };
        this.saveTask(newTaskObject);
      }
    });
  }

  saveTask = (object) => {
    this.tasksArray.push(object);
    localStorage.setItem('Tasks', JSON.stringify(this.tasksArray));
    this.addTodoInputField.value = '';
    window.location.reload();
  }

  readTasks = () => {
    this.tasksArray.forEach((todo, index) => {
      this.todoLists.innerHTML += `
        <div id='${index}' class='draggable' draggable='true'>
          <div class='flex space-between items-center space-x-y'>
            <div class='flex items-center'>
              <input type='checkbox' class='checkbox color-gray' ${todo.completed? 'checked' : ''}>
              <input type='text' value='${todo.description}' class='text-input editInputField' />
              <p class='description ${todo.completed? 'strike-line': ''}'>${todo.description}</p>
            </div>
            <i class='fas fa-ellipsis-v color-gray dragIcon'></i>
          </div>
          <div class='border-bottom-line'></div>
        </div>
      `;
    });
  }

  updateTaskStatus = (taskIndex, task) => {
    this.tasksArray.splice(taskIndex, 1, task);
    localStorage.setItem('Tasks', JSON.stringify(this.tasksArray));
    window.location.reload();
  }

  handleStatusChange = () => {
    document.querySelectorAll('.checkbox').forEach((checkbox, checkboxIndex) => {
      checkbox.addEventListener('change', () => {
        this.tasksArray.filter((task, taskIndex) => {
          if (checkboxIndex === taskIndex) {
            if (checkbox.checked) {
              task.completed = true;
              this.updateTaskStatus(taskIndex, task);
            } else {
              task.completed = false;
              this.updateTaskStatus(taskIndex, task);
            }
          }
        });
      });
    });
  }

  getTasksArray = () => {
    return this.tasksArray;
  }

}

export const dataStore = new DataStore();
dataStore.addTask();
dataStore.readTasks();
dataStore.handleStatusChange();