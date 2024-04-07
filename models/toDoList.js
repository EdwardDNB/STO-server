const mongoose = require('mongoose');

const todolistSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    }
});

const Todolist = mongoose.model('Todolist', todolistSchema);

module.exports = Todolist;

