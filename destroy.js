import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Movie from './src/models/Movie.js';
import User from './src/models/User.js';
import connectDB from './src/config/db.js';

// Load env vars
dotenv.config();

const destroyData = async () => {
    try {
        await connectDB();

        // Hapus semua film
        await Movie.deleteMany();
        console.log('Semua data film berhasil dihapus.');

        // Hapus semua user admin
        await User.deleteMany();
        console.log('Semua data user admin berhasil dihapus.');

        console.log('Pembersihan data selesai!');
        process.exit();
    } catch (error) {
        console.error(`Error saat menghapus data: ${error}`);
        process.exit(1);
    }
};

const deleteAdminOnly = async () => {
     try {
        await connectDB();

        // Hapus semua user admin
        await User.deleteMany();
        console.log('Semua data user admin berhasil dihapus.');

        console.log('Pembersihan data admin selesai!');
        process.exit();
    } catch (error) {
        console.error(`Error saat menghapus data admin: ${error}`);
        process.exit(1);
    }
}


// --- PILIH FUNGSI YANG INGIN DIJALANKAN ---

// Untuk menghapus SEMUA data (film dan admin), jalankan fungsi ini:
destroyData();

// Untuk menghapus HANYA admin, beri komentar pada destroyData() di atas,
// dan hapus komentar pada baris di bawah ini:
// deleteAdminOnly();
