/** * @jest-environment jsdom */
import { addTask } from '../utils/index.js';
import { task } from '../utils/sampleData.js';

describe('adding tasks', () => {
  test('add task to the list', () => {
    addTask(task);
    const todoLists = document.querySelectorAll('.draggable');

    expect(todoLists).toHaveLength(1);
  });
});