/**
 * @swagger
 * /tasks/{username}:
 *   get:
 *     summary: Get tasks by username
 *     description: Retrieve tasks for a specific username.
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         description: Username of the user to retrieve tasks for.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: An error occurred while fetching tasks.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

////////////////////////////////////////////////

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Add a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewTask'
 *     responses:
 *       200:
 *         description: Task added successfully
 *       500:
 *         description: An error occurred while adding the task
 */

//////////////////////////////////////////

/**
 * @swagger
 * /tasks/{task_id}:
 *   put:
 *     summary: Update a task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: task_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTask'
 *     responses:
 *       200:
 *         description: Task updated successfully
 *       500:
 *         description: An error occurred while editing the task
 */

//////////////////////////////////////////////////

/**
 * @swagger
 * /tasks/{task_id}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: task_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the task to delete
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       500:
 *         description: An error occurred while deleting the task
 */

/////////////////////////////////////////////////

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *             example:
 *               username: john_doe
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 token:
 *                   type: string
 *       500:
 *         description: An error occurred during registration
 */

/////////////////////////////////////////////////////

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */


const { Router} = require('express');
const controller = require("./controller");

const router = Router();

router.get('/tasks/:username',controller.getTasks);
router.post('/tasks',controller.addTask);
router.put('/tasks/:task_id',controller.editTask);
router.delete('/tasks/:task_id',controller.deleteTask);
router.post('/register',controller.register);
router.get('/categories', controller.getCategories);

module.exports =router;