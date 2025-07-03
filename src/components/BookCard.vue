<template>
  <div
    class="relative bg-white rounded-xl shadow-lg border p-4 transform rotate-x-2 rotate-y-3 scale-[1.01] perspective-[800px] transition-all duration-300 hover:shadow-xl"
  >
    <!-- Bookmark button -->
    <button
      @click.stop="toggleBookmark"
      class="absolute top-2 right-2 bg-white shadow rounded-full p-1 hover:bg-blue-100 transition"
    >
      <Bookmark :class="bookmarked ? 'text-blue-600' : 'text-gray-400'" class="w-5 h-5" />
    </button>

    <div class="flex flex-col items-center">
      <!-- Gambar & Judul bisa diklik -->
      <div @click="goToDetail(book.id)" class="cursor-pointer flex flex-col items-center">
        <img
          v-if="book.volumeInfo.imageLinks"
          :src="book.volumeInfo.imageLinks.thumbnail"
          class="w-28 h-40 object-cover rounded shadow"
          alt="Book cover"
        />
        <h2 class="mt-4 line-clamp-2 font-bold text-center text-blue-700">
          {{ book.volumeInfo.title }}
        </h2>
      </div>

      <p class="text-sm text-gray-600 italic text-center">
        {{ book.volumeInfo.authors?.[0] || 'Nazril Acil' }}
      </p>

      <router-link
        :to="`/book/${book.id}`"
        class="inline-block mt-2 text-blue-600 hover:underline text-sm"
      >
        Baca Sekarang
      </router-link>
    </div>

    <div class="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-gray-300 to-gray-100 rounded-r-xl shadow-inner"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Bookmark } from 'lucide-vue-next'

const props = defineProps({
  book: Object
})

const bookmarked = ref(false)
const router = useRouter()

const goToDetail = (id) => {
  router.push({ name: 'BookDetail', params: { id } })
}

const toggleBookmark = () => {
  bookmarked.value = !bookmarked.value
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')

  if (bookmarked.value) {
    if (!bookmarks.includes(props.book.id)) bookmarks.push(props.book.id)
  } else {
    bookmarks = bookmarks.filter(id => id !== props.book.id)
  }

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}

</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
