const express = require('express');
const router = express.Router();
const {addTask, getTasks, getTask, getMyTask, deleteTask, deleteTasks, updateTaskTitle, updateTaskStatus} = require("../controllers/tasks-controller");

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
router.delete('/tasks/:id', deleteTask);
router.delete('/tasksclear/:todolistId', deleteTasks);

router.put('/tasks/:id', updateTaskTitle);
router.put('/tasks/changeTaskStatus/:id', updateTaskStatus);

module.exports = router;
