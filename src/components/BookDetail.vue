<template>
  <div class="max-w-3xl mx-auto px-4 py-6" id="BookDetail">
    <router-link
      to="/"
      class="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium mb-6 transition"
    >
      <SquareArrowLeft class="w-5 h-5" />
      Kembali ke Beranda
    </router-link>

    <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 leading-snug">
      {{ book.volumeInfo?.title || 'Judul Tidak Ditemukan' }}
    </h2>

    <p class="text-gray-600 mb-4 italic">
      {{ book.volumeInfo?.authors?.join(', ') || 'Nazril Acil' }}
    </p>

    <div
      v-if="book.volumeInfo?.description"
      class="prose prose-sm sm:prose-base prose-blue max-w-none mb-6 text-justify"
    >
      <p v-html="book.volumeInfo.description"></p>
    </div>

    <BookViewer v-if="book.id" :volumeId="book.id" />
  </div>
</template>

<script setup>
import { SquareArrowLeft } from 'lucide-vue-next'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import BookViewer from '@/components/BookViewer.vue'

const route = useRoute()
const book = ref({})

// Fungsi ambil data buku berdasarkan ID dari API Google Books
const fetchBook = async (id) => {
  try {
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    book.value = res.data
  } catch (err) {
    console.error('Gagal memuat buku:', err)
  }
}

// Saat halaman dimuat
onMounted(() => {
  fetchBook(route.params.id)
})

// Saat route berubah, ambil ulang
watch(() => route.params.id, (newId) => {
  fetchBook(newId)
})
</script>

<style scoped>
.prose p {
  line-height: 1.7;
}
</style>
