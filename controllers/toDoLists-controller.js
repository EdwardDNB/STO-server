const express = require('express');
const Todolist = require('../models/toDoList');
const Task = require("../models/tasks");

// POST /todolists
// Создать новый тудулист
const addToDoList=async (req, res) => {
    const todolist = new Todolist({
        id: req.body.id,
        title: req.body.title
    });

    try {
        const newTodolist = await todolist.save();
        res.status(201).json(newTodolist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET /todolists
// Получить все тудулисты
const getToDoLists= async (req, res) => {
    try {
        const todolists = await Todolist.find();
        //res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.json(todolists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /todolists/:id
// Получить тудулист по ID
const getToDoList= (req, res) => {
    res.json(res.todolist);
};

// DELETE /todolists/:id
// Удалить тудулист по ID
const deleteToDoList= async (req, res) => {
    try {
        await Todolist.deleteOne({ id: req.params.id });
            res.json({ message: 'Todolist deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Промежуточное ПО для получения тудулиста по ID
async function getTodolist(req, res, next) {
    let todolist;
    try {
        todolist = await Todolist.findOne({ id: req.params.id });
        if (todolist == null) {
            return res.status(404).json({ message: 'Todolist not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.todolist = todolist;
    next();
}

module.exports={addToDoList,getToDoLists,getToDoList,deleteToDoList,getTodolist}
