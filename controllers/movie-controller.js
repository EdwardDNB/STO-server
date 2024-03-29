const Movie = require("../models/movie");

const handleError = (res, error) => {
    res
        .status(500)
        .json({error})
}

const getMovies=(req,res)=>{
    Movie
        .find()
        .then((movies) => {
            res
                .status(200)
                .json(movies)
        })
        .catch((error) => {
            handleError(res, error)
        })
}
const getMovieFromId=(req,res)=>{
    Movie
        .findById(req.params.id)
        .then((movie) => {
            res
                .status(200)
                .json(movie)
        })
        .catch((error) => {
            handleError(res,error)
        })
}
const deleteMovieFromId=(req,res)=>{
    Movie
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res
                .status(201)
                .json(result)
        })
        .catch((error) => {
            handleError(res, error)
        })
}
const addMovie=(req,res)=>{
    let movie=new Movie(req.body);
    movie
        .save()
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((error) => {
            handleError(res, error)
        })
}
const updateMovie=(req, res)=>{
    let movie=new Movie(req.body);
    movie
        .save()
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((error) => {
            handleError(res, error)
        })
}
module.exports={
    getMovies,
    getMovieFromId,
    deleteMovieFromId,
    addMovie,
    redactMovie: updateMovie
}