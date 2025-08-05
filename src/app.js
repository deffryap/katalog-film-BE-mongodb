import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Import routes
import movieRoutes from './routes/movieRoutes.js';
import authRoutes from './routes/authRoutes.js';

// Load env vars
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Konfigurasi CORS yang lebih kuat dan fleksibel
const whitelist = process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',') : [];

const corsOptions = {
  origin: function (origin, callback) {
    // Izinkan permintaan tanpa origin (seperti dari Postman atau mobile apps)
    // atau jika origin ada di dalam whitelist.
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Akses diblokir oleh kebijakan CORS'));
    }
  },
  // Tentukan metode HTTP yang diizinkan
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  // Tentukan header yang diizinkan
  allowedHeaders: 'Content-Type, Authorization',
  // Izinkan kredensial (jika Anda menggunakan cookies atau session)
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Mount routers
app.use('/api/movies', movieRoutes);
app.use('/api/auth', authRoutes);

export default app;