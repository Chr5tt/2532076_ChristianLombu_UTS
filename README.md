# UTS Lab. Pemrograman Mobile

|                   |                                    |
| ----------------- | ---------------------------------- |
| **Nama**          | Christian Lombu                    |
| **NPM**           | 2532076                            |
| **Program Studi** | Teknologi Informasi / Semester III |
| **Mata Kuliah**   | Lab. Pemrograman Mobile (1 sks)    |
| **Dosen Penguji** | Sandy Putra Effendi, S.Pd          |
| **Kampus**        | Universitas Internasional Batam    |

Aplikasi React Native (Expo) untuk Ujian Tengah Semester Ganjil 2026/2027.

## Cara Menjalankan

### Prasyarat

- [Node.js](https://nodejs.org) versi LTS
- [Git](https://git-scm.com)
- Aplikasi **Expo Go** di HP (Play Store atau App Store)

Cek instalasi:

```bash
node -v
npm -v
git --version
```

### Langkah

1. Clone repositori:

   ```bash
   git clone https://github.com/Chr5tt/2532076_ChristianLombu_UTS.git
   cd 2532076_ChristianLombu_UTS
   ```

2. Pasang dependensi:

   ```bash
   npm install
   ```

3. Jalankan aplikasi:

   ```bash
   npx expo start
   ```

4. Buka di HP: scan QR code yang muncul di terminal dengan Expo Go (Android) atau kamera bawaan (iOS). HP dan laptop harus terhubung ke jaringan Wi-Fi yang sama.

### Pilihan Lain

- **Emulator Android:** tekan `a` di terminal setelah emulator aktif.
- **Browser:** pasang paket web dengan `npx expo install react-native-web react-dom @expo/metro-runtime`, lalu tekan `w`.
- **Jaringan bermasalah:** jalankan `npx expo start --tunnel`.

## Teknologi

- React Native
- Expo
- react-native-safe-area-context
