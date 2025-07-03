<template>
  <div class="relative max-w-6xl mx-auto p-4 h-full" id="book-section">
    <!-- Loading -->
    <div v-if="loading" class="absolute top-1/2 left-1/2 transform -translate-x-1/2">
      <LoaderCircle class="animate-spin w-16 h-16 text-blue-600 mx-auto" />
      <p class="text-center text-sm mt-2 text-gray-500">Memuat buku...</p>
    </div>

    <!-- Book List -->
    <div v-else class="grid grid-cols-2 lg:grid-cols-3 gap-6">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import BookCard from '@/components/BookCard.vue'
import { LoaderCircle } from 'lucide-vue-next'

const props = defineProps({
  searchQuery: String
})

const books = ref([])
const loading = ref(false)

watch(() => props.searchQuery, async (query) => {
  if (!query.trim()) {
    books.value = []
    return
  }
  loading.value = true
  try {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
    )
    books.value = res.data.items || []
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>
