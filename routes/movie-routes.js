const Movie = require("../models/movie");
const express = require("express");
const router = express.Router();

const handleError = (res, error) => {
    res
        .status(500)
        .json({error})
}
router.get('/movies', (req, res) => {
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
})

router.get('/movies/:id', (req, res) => {
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

})
router.delete('/movies/:id', (req, res) => {
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

})
router.post('/movies', (req, res) => {

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

})
router.patch('/movies/:id', (req, res) => {
    Movie
        .findByIdAndUpdate(req.params.id,  req.body)
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((error) => {
            handleError(res, error)
        })

})
    module.exports=router