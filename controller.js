const { query } = require('express');
const pool = require('./database');
const queries = require('./queries');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getTasks = async (req, res) => {
  const { username } = req.params;
  try {
    const tasks = await pool.query(queries.getTasks, [username]);
    res.json(tasks.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching tasks.' });
  }
};

const addTask = async (req, res) => {
  try {
    const { task_name, due_date, username, category } = req.body;

    const task_id = uuidv4();

    await pool.query(queries.addTask, [task_id, task_name, due_date, username,category]);

    res.status(200).json({ message: 'Task added successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while adding the task.' });
  }
};

const editTask = async (req, res) => {
  const { task_id } = req.params;
  const { task_name, due_date, username ,category} = req.body;
  try {
    await pool.query(queries.editTask, [task_name, due_date, username, category,task_id]);
    res.json({ message: 'Task updated successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while editing the task.' });
  }
};

const deleteTask = async (req, res) => {
  const { task_id } = req.params;
  try {
    await pool.query(queries.deleteTask, [task_id]);
    res.json({ message: 'Task deleted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while deleting the task.' });
  }
};

const register = async (req, res) => {
  const { username } = req.body;
  try {
    await pool.query(queries.register, [username]);

    const token = jwt.sign({ username }, 'secret', { expiresIn: '1hr' });
    res.json({ username, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred during registration.' });
  }
};

const getCategories = async (req, res) => {
  try {
    const result = await pool.query(queries.getCategory);
    const categories = result.rows.map(row => row.category);
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching categories.' });
  }
};

module.exports = { register };




module.exports = {
  getTasks,
  addTask,
  editTask,
  deleteTask,
  register,
  getCategories
};
