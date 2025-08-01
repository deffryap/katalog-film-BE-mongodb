const Movie = require('../models/Movie');
const mongoose = require('mongoose');

exports.getAllMovies = async (req, res) => {
    try {
        const { search, type } = req.query;
        let query = {};
        if (search) query.Title = { $regex: search, $options: 'i' };
        if (type && (type === 'movie' || type === 'series')) {
            query.Type = type;
        }
        const movies = await Movie.find(query); 
        res.json(movies.map(movie => ({ ...movie.toObject(), id: movie._id })));
    } catch (err) { res.status(500).json({ error: "Gagal mengambil data film." }); }
};

exports.getMovieById = async (req, res) => {
    try {
        const movie = await (mongoose.Types.ObjectId.isValid(req.params.id) ? Movie.findById(req.params.id) : null);
        if (!movie) return res.status(404).json({ error: "Film tidak ditemukan." });
        res.json({ ...movie.toObject(), id: movie._id });
    } catch (err) { res.status(500).json({ error: "Gagal mengambil detail film." }); }
};

exports.createMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (err) { res.status(400).json({ error: "Gagal menambahkan film.", details: err.message }); }
};

exports.updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMovie) return res.status(404).json({ error: "Film tidak ditemukan." });
        res.json(updatedMovie);
    } catch (err) { res.status(400).json({ error: "Gagal memperbarui film.", details: err.message }); }
};

exports.deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) return res.status(404).json({ error: "Film tidak ditemukan." });
        res.json({ message: "Film berhasil dihapus." });
    } catch (err) { res.status(500).json({ error: "Gagal menghapus film.", details: err.message }); }
};
