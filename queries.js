const getTasks = 'SELECT * FROM tasks WHERE username = $1';
const addTask = "INSERT INTO tasks(task_id,task_name,due_date,username,category ) VALUES ($1,$2,$3,$4,$5)";
const editTask = "UPDATE tasks SET task_name = $1, due_date = $2,username = $3,category=$4 WHERE task_id = $5;"
const deleteTask = "DELETE FROM tasks WHERE task_id = $1;"
const register = "INSERT INTO users (username) VALUES($1);"
const getCategory ="SELECT category FROM categories";

module.exports={
    getTasks,
    addTask,
    editTask,
    deleteTask,
    register,
    getCategory
}