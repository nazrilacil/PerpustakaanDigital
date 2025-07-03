<script setup>
import { BookOpen, Search, Info, Mouse } from 'lucide-vue-next';
</script>

<template>
  <section class="relative bg-gradient-to-b from-yellow-100 to-white py-20 px-4 md:px-10 text-center min-h-[90vh] flex flex-col justify-center" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
    <div class="max-w-3xl mx-auto space-y-6">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 flex items-center justify-center gap-2 flex-wrap">
        <BookOpen class="w-8 h-8 text-blue-600" />
        <span class="text-blue-600">Perpustakaan Digital</span>
      </h1>
      <p class="text-gray-600 text-base sm:text-lg">
        Jelajah ribuan buku digital gratis dan tingkatkan literasi kapan saja, di mana saja.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <label for="book" class="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition">
          <Search class="w-4 h-4" /> Jelajah Buku
        </label>
        <a href="#how-to" class="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition">
          <Info class="w-4 h-4" /> Cara Menggunakan
        </a>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <Mouse class="w-6 h-6 text-blue-500" />
    </div>
  </section>
</template>
