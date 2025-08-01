const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./src/config/db');
const movieRoutes = require('./src/routes/movieRoutes');
const authRoutes = require('./src/routes/authRoutes');

// Inisialisasi aplikasi Express
const app = express();
const PORT = process.env.PORT || 3000;

// Hubungkan ke Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Gunakan Rute
app.use('/api/movies', movieRoutes);
app.use('/api/auth', authRoutes);

// Jalankan Server
app.listen(PORT, () => console.log(`Server MongoDB berjalan di http://localhost:${PORT}`));
