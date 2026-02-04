# Ecommerce Paket Data ✅

**Sebuah dashboard sederhana untuk manajemen pelanggan dan transaksi pembelian paket data internet.**
Dibangun dengan React + TypeScript + Vite, menggunakan JSON Server sebagai backend dummy untuk pengembangan.

---

## 📌 Ringkasan

- UI: Ant Design + Tailwind CSS
- Router: TanStack Router
- State & data: TanStack React Query, Zustand, Axios
- Validasi: Zod + React Hook Form
- Mock API: JSON Server (db.json)

---

## ✨ Fitur Utama

- Manajemen Customer: list, tambah, edit, hapus, filter berdasarkan tanggal
- Transaksi: buat transaksi, pilih provider & paket, lihat detail dan status
- Authentication: login berbasis token (disimpan di cookie)
- Penggunaan paket & provider yang disimpan di `db.json`

---

## 🧰 Tech Stack

- React 19, TypeScript, Vite
- Ant Design, Tailwind CSS
- @tanstack/react-query, @tanstack/react-router
- react-hook-form, zod
- axios, js-cookie, zustand
- json-server (dev)

---

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18
- npm atau yarn

### Install

```bash
git clone <repository-url>
cd ecommerce-paket-data
npm install
```

### Menjalankan mock API (JSON Server)

```bash
npm run server
```

- API: `http://localhost:3000`
- Contoh endpoint: `/customers`, `/transactions`, `/packages`, `/providers`

### Menjalankan Frontend

```bash
npm run dev
```

- Frontend: `http://localhost:5173` (default Vite port)

### Build & Preview

```bash
npm run build
npm run preview
```

---

## 🔧 Script Penting

| Command           | Deskripsi                        |
| ----------------- | -------------------------------- |
| `npm run dev`     | Jalankan frontend (Vite)         |
| `npm run server`  | Jalankan JSON Server (`db.json`) |
| `npm run build`   | Build aplikasi (tsc + vite)      |
| `npm run preview` | Preview hasil build              |
| `npm run lint`    | Jalankan ESLint                  |

---

## 🌐 Environment Variables

File environment menggunakan `import.meta.env`. Variabel yang dipakai ada di `src/configs/constants/env.ts`:

- `VITE_API_URL` — base URL API (default: `http://localhost:3000` saat pakai JSON Server)
- `VITE_SIGN_KEY` — (opsional) API sign key
- `VITE_SIGN_SECRET_KEY` — (opsional) secret key

Tambahkan file `.env` di root jika perlu:

```
VITE_API_URL=http://localhost:3000
VITE_SIGN_KEY=your_key
VITE_SIGN_SECRET_KEY=your_secret
```

---

## 🔁 Autentikasi & Token

- Token disimpan di cookie `token` (`src/utils/token.ts`)
- Middleware proteksi route ada pada konfigurasi router (tanstack)

---

## 📁 Struktur Ringkas

```
src/
├─ pages/            # Pages (home, auth, customer, transaction)
├─ fragments/        # Feature fragments (customer, transaction, login)
├─ components/       # Reusable UI components
├─ repositories/     # Layer akses data / API client
├─ store/            # Zustand stores (e.g., auth)
├─ utils/            # Axios instance, helpers
└─ public/
```

---

## 🧪 Data Sampel

`db.json` berisi resource contoh: `users`, `customers`, `providers`, `packages`, `transactions`.
Gunakan `npm run server` untuk melihat dan memodifikasi data tersebut di runtime.

---

## 🔍 Tips Pengembangan

- Gunakan `npm run lint` sebelum commit
- Untuk menambahkan fitur baru, letakkan logic API di `repositories/` dan state di `fragments/*/hooks` agar konsisten
- Validasi form memakai `zod` & `react-hook-form`

---

## 🤝 Contributing

- Fork → branch feature → PR
- Ikuti gaya codebase (TypeScript, lint)

---

## 📎 Author

## M. Dika Pratana Putra — Frontend Developer

If you'd like, I can also:

- Add a short CONTRIBUTING.md
- Add examples for API calls (curl / Postman)
- Add a `.env.example` file
