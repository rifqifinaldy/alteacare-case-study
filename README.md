## Techincal Test - Rifqi Finaldy - Frontend Developer

Project dibuat menggunakan React dan framework Next JS, dan di bootstrap oleh [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
disisi lain Styling yang digunakan menggunakan Tailwind CSS.

## Getting Started

- clone repository
- ubah file .env.example menjadi .env.local
- jalankan perintah "npm install" atau "yarn" pada terminal untuk melakukan proses instalasi dependencies
- setelah selesai terinstall jalankan perintah "npm run dev" atau "yarn dev" untuk menjalankan aplikasi secara lokal
- secara default aplikasi akan berjalan pada localhost dengan port:3000 
- buka browser dan kunjungi url http://localhost:3000 untuk melihat hasilnya

## Project Structure

Struktur Folder dan direktori-direktori pada aplikasi yang dibuat :

- Folder Config merupakan folder untuk menyimpan konfigurasi semua keperluan setup awal seperti melakukan setup axios instance dan penyimpanan endpoint-endpoint yang digunakan
- Folder Public merupakan folder untuk menyimpan asset asset seperti logo maupun gambar yang bersifat statis
- Folder Types menyimpan interface atau deklarasi type data yang dapat digunakan secara global
- Folder SRC merupakan folder yang menyimpan fungsi dan component. Berikut merupakan penjelasan lebih rincinya :
- SubFolder "components" menyimpan komponen / ui global yang dapat dipakai untuk seluruh applikasi. pada setiap component memiliki css.module tersendiri untuk digunakan hanya pada component tersebut
- SubFolder "helpers" menyimpan fungsi fungsi penolong yang dapat digunakan secara global
- SubFolder "layouts" menyimpan komponent layout yang merupakan struktur html dan css utama pembentuk UI dan halaman
- SubFolder "pages" menyimpan komponen halaman dan sekaligus menjadi route / url yang digunakan aplikasi, pada komponen komponen ini juga dilakukan proses data interchange menggunakan axios secara server-side
