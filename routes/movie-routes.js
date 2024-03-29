const express = require("express");
const {getMovies, getMovieFromId, deleteMovieFromId, addMovie, redactMovie} = require("../controllers/movie-controller");
const router = express.Router();


router.get('/movies', getMovies)
router.get('/movies/:id', getMovieFromId)
router.delete('/movies/:id', deleteMovieFromId)
router.post('/movies', addMovie)
router.patch('/movies/:id', redactMovie)
    module.exports=router