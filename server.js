const express = require('express');
const mongoose = require("mongoose");

const tasksRoutes = require("./routes/tasks-routes");
const toDoListsRoutes = require("./routes/toDoLists-routes");
const movieRoutes = require("./routes/movie-routes");

const PORT = 3001;
const URL = 'mongodb://127.0.0.1:27017/STO'
const app = express();
app.use(express.json())
app.use(movieRoutes)
app.use(tasksRoutes)
app.use(toDoListsRoutes)

mongoose
    .connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`))


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});


