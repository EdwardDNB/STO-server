const express = require('express');
const router = express.Router();
const {addTask, getTasks, getTask, getMyTask, deleteTask} = require("../controllers/tasks-controller");

// GET /tasks
// Получить все задачи
router.get('/tasks', getTasks);

// POST /tasks
// Создать новую задачу
router.post('/tasks',addTask);

// GET /tasks/:id
// Получить задачу по ID
router.get('/tasks/:id', getTask, getMyTask);

// DELETE /tasks/:id
// Удалить задачу по ID
router.delete('/tasks/:id', getTask, deleteTask);



module.exports = router;
