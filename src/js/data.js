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
            <div class='flex items-center w-full'>
              <input type='checkbox' class='checkbox color-gray' ${todo.completed ? 'checked' : ''}>
              <input type='text' value='${todo.description}' class='text-input editInputField' />
              <p class='description color-gray-dark ${todo.completed ? 'strike-line' : ''}'>${todo.description}</p>
            </div>
            <i class='fas fa-ellipsis-v cursor-move color-gray dragIcon'></i>
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
          return false;
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
              return false;
            });
          }
        });

        // listen for trash icon clicked
        trashIcon.addEventListener('click', () => {
          const updatedArray = this.tasksArray.filter((task, taskIndex) => taskIndex !== index);
          localStorage.setItem('Tasks', JSON.stringify(updatedArray));
          window.location.reload();
        });

        // click event to hide the edit input field and trash icon
        item.addEventListener('click', () => {
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
      localStorage.setItem('Tasks', JSON.stringify(uncompletedTasks));
      window.location.reload();
    });
  }

  clearAllTasks = () => {
    this.refreshIcon.addEventListener('click', () => {
      this.refreshIcon.style.transform = 'rotate(360deg)';
      localStorage.setItem('Tasks', JSON.stringify([]));
      window.location.reload();
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