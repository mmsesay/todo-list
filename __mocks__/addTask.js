const _ = require('lodash');

const addTask = (task) => {
  const todoList = [];
  if (task !== undefined && _.isObject(task)) {
    if (_.isString(task.description)) {
      todoList.push(task);

      return { data: 'new task added' };
    }
    throw new Error('Task description should be a string');
  }
  throw new Error('Please enter an object as a task');
};

module.exports = addTask;