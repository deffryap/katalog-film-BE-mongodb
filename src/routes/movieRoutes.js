const express = require('express');
const router = express.Router();
const { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', authMiddleware, createMovie);
router.put('/:id', authMiddleware, updateMovie);
router.delete('/:id', authMiddleware, deleteMovie);

module.exports = router;
