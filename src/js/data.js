class DataStore {
  constructor() {
    this.tasksArray = JSON.parse(localStorage.getItem('Tasks') || '[]');
    this.addTodoInputField = document.getElementById('add-todo-input-field');
    this.todoLists = document.querySelector('.todo-lists');
    this.btnClearAllCompleted = document.getElementById('clear-all-completed');
    this.countPara = document.querySelector('.count-para');
    this.refreshIcon = document.querySelector('.refreshIcon');
  }

  addTask = () => {
    this.addTodoInputField.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const newTaskObject = {
          index: this.tasksArray.length + 1,
          description: this.addTodoInputField.value,
          completed: false,
        };
        this.saveTask(newTaskObject);
        this.addTodoInputField.value = '';
      }
    });
    // resends out the count of total todos
    if (this.tasksArray.length > 0) {
      this.countPara.innerHTML = +this.tasksArray.length;
      this.countPara.parentNode.style.display = 'flex';
    } else {
      this.countPara.parentNode.style.display = 'none';
    }
  }

  readTasks = () => {
    this.tasksArray.forEach((todo, index) => {
      this.todoLists.innerHTML += `
        <div id='${index}' class='todoItem flex items-center space-between' draggable='true'>
          <div class='flex items-center space-x-y'>
            <input type='checkbox' class='checkbox color-gray' ${todo.completed ? 'checked' : ''}>
            <input type='text' value='${todo.description}' class='text-input editInputField' />
            <p class='description color-gray-dark ${todo.completed ? 'strike-line' : ''}'>${todo.description}</p>
          </div>
          <div class="space-x-y">
            <i class='fas fa-ellipsis-v cursor-move color-gray dragIcon'></i>
            <i class="fas fa-trash-alt cursor-pointer color-gray trashIcon"></i>
          </div>
        </div>
        <div class='border-bottom-line'></div>
      `;
    });
  }

  saveTask = (object) => {
    this.tasksArray.push(object);
    localStorage.setItem('Tasks', JSON.stringify(this.tasksArray));
    window.location.reload();
  }

  localCache = (array = null) => {
    localStorage.setItem('Tasks', JSON.stringify(array));
    window.location.reload();
  }

  updateTask = (taskIndex, task) => {
    this.tasksArray.splice(taskIndex, 1, task);
    this.localCache(this.tasksArray);
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
          return false;
        });
      });
    });
  }

  removeTask = (index) => {
    const updatedArray = this.tasksArray.filter((task, taskIndex) => taskIndex !== index);
    updatedArray.forEach((item, index) => {
      item.index = index + 1;
    });
    this.localCache(updatedArray);
  }

  editTask = () => {
    document.querySelectorAll('.todoItem').forEach((item, index) => {
      item.addEventListener('dblclick', () => {
        item.classList.add('bg-yellow');
        const editTodoInputField = item.childNodes[1].childNodes[3];
        const description = item.childNodes[1].childNodes[5];
        const dragIcon = item.childNodes[3].childNodes[1];
        const trashIcon = item.childNodes[3].childNodes[3];

        this.showElements([editTodoInputField, trashIcon]);
        this.hideElements([description, dragIcon]);

        // listen for enter key press to edit item
        editTodoInputField.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            const { value } = editTodoInputField;
            this.tasksArray.filter((task, taskIndex) => {
              if (index === taskIndex) {
                task.description = value;
                this.updateTask(taskIndex, task);
              }
              return false;
            });
          }
        });

        // listen for trash icon clicked
        trashIcon.addEventListener('click', () => {
          this.removeTask(index);
        });

        // click event to hide the edit input field and trash icon
        item.addEventListener('mouseleave', () => {
          item.classList.remove('bg-yellow');
          this.showElements([description, dragIcon]);
          this.hideElements([editTodoInputField, trashIcon]);
        });
      });
    });
  }

  clearAllCompleted = () => {
    const uncompletedTasks = this.tasksArray.filter((task) => task.completed !== true);
    this.btnClearAllCompleted.addEventListener('click', () => {
      this.localCache(uncompletedTasks);
    });
  }

  clearAllTasks = () => {
    this.refreshIcon.addEventListener('click', () => {
      this.refreshIcon.style.transform = 'rotate(360deg)';
      this.localCache([]);
    });
  }

  getTasksArray = () => {
    const data = this.tasksArray;
    return data;
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
instance.clearAllTasks();