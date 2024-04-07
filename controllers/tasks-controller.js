const Task = require('../models/tasks');

// GET /tasks
// Получить все задачи
const getTasks= async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /tasks
// Создать новую задачу
const addTask=async (req, res) => {
    const task = new Task({
        id:req.body.id,
        todolistId: req.body.todolistId,
        title: req.body.title,
        isDone: req.body.isDone
    });
    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET /tasks/:id
// Получить задачу по ID
const getMyTask= (req, res) => {
    res.json(res.task);
};

// DELETE /tasks/:id
// Удалить задачу по ID
const deleteTask = async (req, res) => {
    try {
        await Task.deleteOne({ id: req.params.id }); // или deleteMany(), в зависимости от вашего использования
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Промежуточное ПО для получения задачи по ID
async function getTask(req, res, next) {
    let task;
    try {
        task = await Task.findOne({ id: req.params.id });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.task = task;
    next();
}


module.exports={getTasks,
    addTask,getTask,getMyTask,deleteTask
}

