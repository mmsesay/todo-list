/** * @jest-environment jsdom */
import {
  addTask, deleteTask, editTask, changeTaskStatus,
} from '../utils/index.js';
import { task } from '../utils/sampleData.js';

describe('adding tasks', () => {
  test('add task to the list', () => {
    addTask(task);
    const todoLists = document.querySelectorAll('.draggable');

    expect(todoLists).toHaveLength(1);
  });

  test('delete a task', () => {
    const removeAtIndex = 1;

    deleteTask(removeAtIndex);
    const todoLists = document.querySelectorAll('.draggable');

    expect(todoLists).toMatchObject({});
  });

  test('edit a task description', () => {
    const updateText = 'write test for editing tasks';

    editTask(task, updateText);
    expect(task.description).toEqual(updateText);
  });

  test('update a task\'s status', () => {
    const updatedStatus = true;

    changeTaskStatus(task, updatedStatus);
    expect(task.completed).toEqual(updatedStatus);
  });
});