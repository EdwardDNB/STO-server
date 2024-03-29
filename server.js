const express = require('express');
const mongoose = require("mongoose");

const movieRoutes = require("./routes/movie-routes");

const PORT = 3000;
const URL = 'mongodb+srv://edvarddnbs:zPS8klVwWyRQwejb@cluster0.ktt6iky.mongodb.net/movie-box?retryWrites=true&w=majority&appName=Cluster0';
const app = express();
app.use(express.json())
app.use(movieRoutes)

mongoose
    .connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`))


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});


