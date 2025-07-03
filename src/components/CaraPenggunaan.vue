<template>
  <section class="max-w-4xl mx-auto px-4 py-10 space-y-8" id="how-to" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
    <div class="text-center">
      <BookOpen class="mx-auto w-12 h-12 text-blue-600 mb-4" />
      <h2 class="text-2xl font-bold text-gray-800">Cara Menggunakan Perpustakaan Digital</h2>
      <p class="text-gray-600">Ikuti langkah-langkah berikut untuk memanfaatkan fitur perpustakaan online.</p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div class="flex items-start gap-4">
        <Search class="w-6 h-6 text-green-600 mt-1" />
        <div>
          <h3 class="font-semibold text-lg">1. Cari Buku</h3>
          <p class="text-gray-600 text-sm">Gunakan fitur pencarian di bagian atas halaman untuk menemukan buku yang kamu butuhkan.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <Book class="w-6 h-6 text-indigo-600 mt-1" />
        <div>
          <h3 class="font-semibold text-lg">2. Baca Buku</h3>
          <p class="text-gray-600 text-sm">Klik tombol <strong>Baca Sekarang</strong> untuk melihat isi buku langsung di website.</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <Bookmark class="w-6 h-6 text-yellow-500 mt-1" />
        <div>
          <h3 class="font-semibold text-lg">3. Simpan Favorit</h3>
          <p class="text-gray-600 text-sm">Tambahkan buku ke daftar favorit untuk membacanya nanti (fitur opsional).</p>
        </div>
      </div>

      <div class="flex items-start gap-4">
        <Users class="w-6 h-6 text-pink-600 mt-1" />
        <div>
          <h3 class="font-semibold text-lg">4. Terhubung dengan Siswa Lain</h3>
          <p class="text-gray-600 text-sm">Diskusikan buku favoritmu bersama siswa lain melalui fitur komunitas <strong>(Fitur akan muncul segera)</strong>.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  BookOpen,
  Search,
  Book,
  Bookmark,
  Users
} from 'lucide-vue-next'
</script>
