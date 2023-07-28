const { v4: uuidv4 } = require('uuid');
const TaskRepository = require('./taskRepository');

class TaskService {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async getTasks(username) {
    return this.taskRepository.getTasks(username);
  }

  async addTask(taskData) {
    const task = { ...taskData, task_id: uuidv4() };
    return this.taskRepository.addTask(task);
  }

  async editTask(taskData) {
    return this.taskRepository.editTask(taskData);
  }

  async deleteTask(task_id) {
    return this.taskRepository.deleteTask(task_id);
  }
}

module.exports = TaskService;
