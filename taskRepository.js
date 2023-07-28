// repository.js
const pool = require('./database');
const queries = require('./queries');
const { v4: uuidv4 } = require('uuid');

class TaskRepository {
  async getTasks(username) {
    try {
      const tasks = await pool.query(queries.getTasks, [username]);
      return tasks.rows;
    } catch (err) {
      throw new Error('An error occurred while fetching tasks.');
    }
  }

  async addTask(task) {
    try {
      const { task_name, due_date, username, category, description } = task;
      const task_id = uuidv4();
      await pool.query(queries.addTask, [task_id, task_name, due_date, username, category, description]);
    } catch (err) {
      throw new Error('An error occurred while adding the task.');
    }
  }

  async editTask(task) {
    const { task_id, task_name, due_date, username, category, completed, description } = task;
    try {
      await pool.query(queries.editTask, [task_name, due_date, username, category, completed, description, task_id]);
    } catch (err) {
      throw new Error('An error occurred while editing the task.');
    }
  }

  async deleteTask(task_id) {
    try {
      await pool.query(queries.deleteTask, [task_id]);
    } catch (err) {
      throw new Error('An error occurred while deleting the task.');
    }
  }
  
}

module.exports = TaskRepository;
