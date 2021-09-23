/* eslint-disable import/prefer-default-export */
class DataStore {
  constructor() {
    this.tasksArray = JSON.parse(localStorage.getItem('Tasks') || '[]');
    this.addTodoInputField = document.getElementById('add-todo-input-field');
    this.todoLists = document.querySelector('.todo-lists');
    this.btnClearAllCompleted = document.getElementById('clear-all-completed');
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
        <div id='${index}' class='draggable cursor-move' draggable='true'>
          <div class='flex space-between items-center space-x-y'>
            <div class='flex items-center w-full'>
              <input type='checkbox' class='checkbox color-gray' ${todo.completed? 'checked' : ''}>
              <input type='text' value='${todo.description}' class='text-input editInputField' />
              <p class='description ${todo.completed? 'strike-line': ''}'>${todo.description}</p>
            </div>
            <i class='fas fa-ellipsis-v color-gray dragIcon'></i>
            <i class="fas fa-trash-alt cursor-pointer color-gray trashIcon"></i>
          </div>
          <div class='border-bottom-line'></div>
        </div>
      `;
    });
  }

  updateTask = (taskIndex, task) => {
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
              this.updateTask(taskIndex, task);
            } else {
              task.completed = false;
              this.updateTask(taskIndex, task);
            }
          }
        });
      });
    });
  }

  editTask = () => {
    let updateText = '';
    document.querySelectorAll('.draggable').forEach((item, index) => {
      item.addEventListener('dblclick', () => {
        item.classList.add('bg-yellow');
        const editTodoInputField = item.childNodes[1].childNodes[1].childNodes[3];
        const description = item.childNodes[1].childNodes[1].childNodes[5];
        const dragIcon = item.childNodes[1].childNodes[3];
        const trashIcon = item.childNodes[1].childNodes[5];

        this.showElements([editTodoInputField, trashIcon]);
        this.hideElements([description, dragIcon]);

        // listen for enter key press to edit item
        editTodoInputField.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            updateText = editTodoInputField.value;
            this.tasksArray.filter((task, taskIndex) => {
              if (index === taskIndex) {
                task.description = updateText;
                this.updateTask(taskIndex, task);
              }
            });
          }
        });

        // listen for trash icon clicked
        trashIcon.addEventListener('click', () => {
          const updatedArray = this.tasksArray.filter((task, taskIndex) => taskIndex != index);
          localStorage.setItem('Tasks', JSON.stringify(updatedArray));
          window.location.reload();
        });
      });
    });
  }

  clearAllCompleted = () => {
    const uncompletedTasks = this.tasksArray.filter((task) => task.completed != true);
    this.btnClearAllCompleted.addEventListener('click', () => {
      localStorage.setItem('Tasks', JSON.stringify(uncompletedTasks));
      window.location.reload();
    });
  }

  getTasksArray = () => {
    return this.tasksArray;
  }

  hideElements = (args) => {
    args.forEach((element) => {
      element.style.display = 'none';
    });
  }

  showElements = (args) => {
    args.forEach((element) => {
      element.style.display = 'flex';
    });
  }
}

const instance = new DataStore();
export const showTasks = instance.readTasks();
export const tasksArray = instance.getTasksArray();
instance.addTask();
instance.handleStatusChange();
instance.clearAllCompleted();
instance.editTask();