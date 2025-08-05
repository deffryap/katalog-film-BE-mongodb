import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Year: { type: String, required: true },
    imdbID: { type: String, required: true, unique: true },
    Type: { type: String, required: true, enum: ['movie', 'series'] },
    Poster: { type: String, default: 'N/A' },
    TrailerURL: { type: String, default: '' },
    Plot: { type: String, default: '' },
    Director: { type: String, default: '' },
    Actors: { type: String, default: '' },
    Genre: { type: String, default: '' },
    Runtime: { type: String, default: '' }
});

export default mongoose.model('Movie', movieSchema);
