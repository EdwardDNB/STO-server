const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

const tasksRoutes = require("./routes/tasks-routes");
const toDoListsRoutes = require("./routes/toDoLists-routes");
const movieRoutes = require("./routes/movie-routes");

const PORT = 3001;
const URL = 'mongodb://127.0.0.1:27017/STO'
const app = express();
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())
app.use(movieRoutes)
app.use(tasksRoutes)
app.use(toDoListsRoutes)
// Прямое указание заголовка 'Access-Control-Allow-Origin'
/*app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});*/



mongoose
    .connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`))


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});


