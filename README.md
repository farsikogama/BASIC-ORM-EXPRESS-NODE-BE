# BE-App

## How to contribute?

Langkah-langkah yang harus dilakukan untuk memulai berkontribusi mengembangkan proyek ini:

1. Clone repositori

   ```
    git clone https://gitlab.com/binar-fullstack-web-bootcamp/chapter-9/tim-2-pushajadulu/be-app.git
   ```

   Kemudian masuk ke dalam folder repositorinya

   ```
    cd be-app
   ```

2. Install dependensi

   ```
    npm install
   ```

3. Buat file `.env` di root direktori proyek ini. Kemudian salin kode di file `.env.example` ke dalam file `.env` yang barusan dibuat. Sesuaikan nilainya dengan konfigurasi database di komputer Anda.
   Contohnya:

   ```
    DB_USERNAME=indraarianggi
    DB_PASSWORD=12345
    DB_DATABASE=gamecenter
    DB_HOST=127.0.0.1

    jwtSecret = cat123
   ```

   **Note**: nilai `DB_DATABASE` dan `DB_HOST` tidak perlu dirubah

4. Cek apakah package sequelize-cli sudah terinstall secara global di komputer Anda dengan menjalankan perintah `sequelize-cli --version` di terminal.
   Jika belum terinstall, jalankan perintah ini di terminal untuk menginstalnya:

   ```
    npm install -g sequelize-cli
   ```

5. Pastikan server database postgresql di komputer Anda sudah menyala

6. Jalankan perintah berikut di terminal untuk membuat database postgresql yang dibutuhkan proyek ini

   ```
   sequelize db:create
   ```

7. Jalankan perintah berikut di terminal untuk membuat tabel-tabel database yang dibutuhkan proyek ini

   ```
   sequelize db:migrate
   ```

8. Jalankan perintah berikut di terminal untuk memasukkan data awal (seeder) ke dalam database yang telah terbuat

   ```
   sequelize db:seed:all
   ```

9. Jalankan aplikasi/server dengan perintah berikut

   ```
   npm start
   ```

   Anda juga bisa menjalankan aplikasi/server menggunakan perintah berikut. Perintah ini akan menjalankan aplikasi menggunakan nodemon (script perintahnya bisa dicek di file `package.json`) agar bisa hot reload saat perubahan disimpan, jadi pastikan di komputer Anda sudah terinstall `nodemon` secara global.

   ```
   npm run dev
   ```

10. Selamat mengembangkan proyek ini. Jangan lupa ikuti git flow yang sudah disepakati ;)

tes
