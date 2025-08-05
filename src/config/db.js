import mongoose from 'mongoose';

const connectDB = async () => {
    // Cek jika sudah ada koneksi, gunakan kembali (penting untuk serverless)
    if (mongoose.connections[0].readyState) {
        console.log("Menggunakan koneksi MongoDB yang sudah ada.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Berhasil terhubung ke MongoDB");
    } catch (err) {
        console.error("Gagal terhubung ke MongoDB:", err.message);
        process.exit(1);
    }
};

export default connectDB;
