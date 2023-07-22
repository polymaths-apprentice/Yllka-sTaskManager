const getTasks = 'SELECT * FROM tasks WHERE username = $1';
const addTask = "INSERT INTO tasks(task_id,task_name,due_date,username,category,description ) VALUES ($1,$2,$3,$4,$5,$6)";
const editTask = "UPDATE tasks SET task_name = $1, due_date = $2,username = $3,category=$4, completed=$5,description=$6 WHERE task_id = $7;";
const deleteTask = "DELETE FROM tasks WHERE task_id = $1;";
const register = "INSERT INTO users (username) VALUES($1);";
const getCategory ="SELECT category FROM categories";

module.exports={
    getTasks,
    addTask,
    editTask,
    deleteTask,
    register,
    getCategory
};