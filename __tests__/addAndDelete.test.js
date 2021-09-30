/** * @jest-environment jsdom */
import { addTask, deleteTask } from '../utils/index.js';
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
});