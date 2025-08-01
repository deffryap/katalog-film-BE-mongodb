const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Berhasil terhubung ke MongoDB");
    } catch (err) {
        console.error("Gagal terhubung ke MongoDB:", err.message);
        process.exit(1); // Keluar dari proses jika gagal terhubung
    }
};

module.exports = connectDB;
