import app from './src/app.js';

const PORT = process.env.PORT || 3000;

// Jalankan Server
app.listen(PORT, () => console.log(`Server MongoDB berjalan di http://localhost:${PORT}`));
