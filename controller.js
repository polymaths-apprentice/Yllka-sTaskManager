const CategoryServices = require('./categoryServices');
const RegisterService = require('./registerService');
const TaskService = require('./taskServices');

const taskService = new TaskService();
const categoryService = new CategoryServices();
const registerService = new RegisterService();

const getTasks = async (req, res) => {
  const { username } = req.params;
  try {
    const tasks = await taskService.getTasks(username);
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const addTask = async (req, res) => {
  try {
    const taskData = req.body;
    await taskService.addTask(taskData);
    res.status(200).json({ message: 'Task added successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const editTask = async (req, res) => {
  const { task_id } = req.params;
  const taskData = req.body;
  try {
    await taskService.editTask({ ...taskData, task_id });
    res.json({ message: 'Task updated successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  const { task_id } = req.params;
  try {
    await taskService.deleteTask(task_id);
    res.json({ message: 'Task deleted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

const register = async (req, res) => {
  const { username } = req.body;
  try {
    await registerService.register(username);
    res.json({ username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred during registration.' });
  }
};

const getCategories = async (req, res) => {
  try {
   const categories = await categoryService.getCategories();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  register,
  getTasks,
  addTask,
  editTask,
  deleteTask,
  getCategories
};
