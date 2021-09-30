/** * @jest-environment jsdom */
import { addTask } from '../utils/helpers.js';

describe('adding tasks', () => {
  test('add task to the list', () => {
    const task = {
      index: 1,
      description: 'write test for adding tasks',
      completed: false,
    };

    addTask(task);
    const todoLists = document.querySelectorAll('.draggable');

    expect(todoLists).toHaveLength(1);
  });
});