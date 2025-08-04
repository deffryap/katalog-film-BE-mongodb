require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('./src/models/Movie');
const User = require('./src/models/User');
const connectDB = require('./src/config/db');

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
