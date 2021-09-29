const addTask = require('../__mocks__/addTask.js');

describe('adding tasks', () => {
  test('add task to the list', () => {
    const task = {
      index: 1,
      description: 'write test for adding tasks',
      completed: false,
    };

    const response = addTask(task);

    expect(response.data).toBe('new task added');
  });

  test('if passed argument is not an object', () => {
    const task = 12;

    const response = () => {
      addTask(task);
    };

    expect(response).toThrowError('Please enter an object as a task');
  });

  test('if the description in not a string', () => {
    const task = {
      index: 1,
      description: 123,
      completed: false,
    };

    const respone = () => {
      addTask(task);
    };

    expect(respone).toThrowError('Task description should be a string');
  });
});
