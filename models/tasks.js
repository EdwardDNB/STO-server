const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true
    },
    todolistId: {
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    isDone: {
        type:Boolean,
        required:true
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
