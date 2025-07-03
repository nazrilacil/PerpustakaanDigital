<template>
  <div class="max-w-5xl mx-auto p-4">
  <router-link
      to="/"
      class="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium mb-6 transition">
      <SquareArrowLeft class="w-5 h-5" />
      Kembali ke Beranda
    </router-link>
    <h1 class="text-2xl font-bold mb-4">Bookmark Saya</h1>
    <div v-if="bookmarks.length === 0" class="text-gray-500 italic">Belum ada buku ditandai.</div>
    <div v-else class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <BookCard v-for="book in bookmarks" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BookCard from '@/components/BookCard.vue'
import axios from 'axios'

const bookmarks = ref([])

onMounted(async () => {
  const ids = JSON.parse(localStorage.getItem('bookmarks') || '[]')
  if (!ids.length) return

  // Ambil detail buku berdasarkan ID dari Google Books API
  const promises = ids.map(id =>
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then(res => res.data)
  )

  try {
    const results = await Promise.all(promises)
    bookmarks.value = results
  } catch (err) {
    console.error('Gagal memuat bookmark:', err)
  }
})
</script>
