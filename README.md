# 🎬 Katalog Film - Backend (MongoDB)

Ini adalah bagian **Backend** dari aplikasi **Katalog Film**, dibangun menggunakan **Node.js**, **Express**, dan **MongoDB** dengan Mongoose. Server ini menyediakan RESTful API untuk mengelola data film, serial TV, dan autentikasi admin.

## ✨ Fitur Utama

- **RESTful API** - Menyediakan endpoint untuk operasi CRUD (Create, Read, Update, Delete) pada konten
- **Autentikasi JWT** - Mengamankan rute admin menggunakan JSON Web Tokens untuk memastikan hanya admin yang terotentikasi yang dapat mengubah data
- **Enkripsi Password** - Kata sandi admin di-*hash* menggunakan `bcryptjs` sebelum disimpan di database untuk keamanan maksimal
- **Struktur Profesional** - Kode diorganisir ke dalam folder `models`, `routes`, `controllers`, dan `middleware` untuk kemudahan pemeliharaan
- **Filter & Pencarian** - API mendukung filter berdasarkan tipe (film/series) dan pencarian dinamis berdasarkan judul
- **Skrip Seeder** - Termasuk skrip untuk mengisi dan membersihkan database dengan data awal secara otomatis

## 🚀 Teknologi yang Digunakan

- **Node.js**
- **Express.js**
- **MongoDB** (dengan Mongoose ODM)
- **JSON Web Token (JWT)** untuk autentikasi
- **Bcrypt.js** untuk hashing password
- **Dotenv** untuk manajemen environment variables

## 📂 Struktur Direktori

```
backend-mongodb/
├── src/
│   ├── config/
│   │   └── db.js             # Konfigurasi koneksi database
│   ├── controllers/
│   │   ├── movieController.js  # Logika untuk rute film
│   │   └── userController.js   # Logika untuk rute autentikasi
│   ├── middleware/
│   │   └── authMiddleware.js # Middleware untuk proteksi rute
│   ├── models/
│   │   ├── Movie.js          # Skema data film
│   │   └── User.js           # Skema data admin
│   └── routes/
│       ├── movieRoutes.js    # Definisi endpoint film
│       └── authRoutes.js     # Definisi endpoint autentikasi
├── .env                      # File environment variables (wajib dibuat)
├── package.json
└── server.js                 # Titik masuk utama aplikasi
```

## 🛠️ Setup Lokal

### Prasyarat

- **Node.js** (versi 18 atau lebih tinggi)
- Akses ke database **MongoDB** (disarankan menggunakan MongoDB Atlas)

### Langkah-langkah Instalasi

#### 1. Clone Repositori

```bash
git clone https://github.com/NAMA_ANDA/NAMA_REPO_BACKEND_MONGO.git
cd NAMA_REPO_BACKEND_MONGO
```

#### 2. Instal Dependensi

```bash
npm install
```

#### 3. Konfigurasi Environment Variables

Buat file `.env` di folder root dan isi dengan kredensial Anda:

```env
# Ganti dengan koneksi string MongoDB Atlas Anda
MONGO_URI=mongodb+srv://<username>:<password>@cluster...

# Kunci rahasia untuk menandatangani token JWT
JWT_SECRET=kunci-rahasia-yang-sangat-aman
```

#### 4. Jalankan Server

```bash
node server.js
```

Server akan berjalan di `http://localhost:3000`.

## 📋 API Endpoints

### Autentikasi
- `POST /api/auth/login` - Login admin
- `POST /api/auth/register` - Registrasi admin (opsional)

### Movies/Series
- `GET /api/movies` - Mendapatkan semua film/series
- `GET /api/movies/:id` - Mendapatkan detail film/series
- `POST /api/movies` - Menambah film/series baru (protected)
- `PUT /api/movies/:id` - Update film/series (protected)
- `DELETE /api/movies/:id` - Hapus film/series (protected)

## 🔧 Scripts

```bash
# Menjalankan server dalam mode development
npm run dev

# Menjalankan server dalam mode production
npm start

# Menjalankan seeder untuk data awal
npm run seed

# Membersihkan database
npm run seed:clean
```

## 🔒 Keamanan

- Password di-hash menggunakan bcrypt dengan salt rounds 10
- JWT tokens digunakan untuk autentikasi
- Middleware proteksi rute admin
- Environment variables untuk data sensitif

## 🧪 Testing

Gunakan tools seperti Postman atau Insomnia untuk testing API endpoints. Pastikan untuk menyertakan JWT token dalam header Authorization untuk endpoint yang dilindungi.

## 🤝 Kontribusi

Silakan buat pull request atau buka issue jika Anda menemukan bug atau ingin menambahkan fitur baru.

## 📄 Lisensi

Proyek ini menggunakan lisensi MIT.