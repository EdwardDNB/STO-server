const express = require('express');
const router = express.Router();
const {addToDoList, getToDoLists, getToDoList, deleteToDoList,getTodolist, updateTodolistTitle} = require("../controllers/toDoLists-controller");
const {updateTaskTitle} = require("../controllers/tasks-controller");

// POST /todolists
// Создать новый тудулист
router.post('/todolists', addToDoList);



// GET /todolists
// Получить все тудулисты
router.get('/todolists', getToDoLists);

// GET /todolists/:id
// Получить тудулист по ID
router.get('/todolists/:id', getTodolist, getToDoList);

// DELETE /todolists/:id
// Удалить тудулист по ID
router.delete('/todolists/:id', deleteToDoList);
router.put('/todolists/updateTitle/:id', updateTodolistTitle);

module.exports = router;
