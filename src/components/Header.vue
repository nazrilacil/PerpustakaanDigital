<template>
    <header class="bg-white/50 backdrop-blur sticky top-0 z-50">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex-1 md:flex md:items-center md:gap-12">
                    <a class="block text-blue-600" href="#">
                        <span class="sr-only">Home</span>
                        <BookOpen class="w-8 h-8" />
                    </a>
                </div>
                <div class="flex items-center max-w-sm mx-auto gap-2">
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <BookCopy class="w-4 h-4 text-gray-500" />
                        </div>
                        <input v-model="search" @keyup.enter="submit" type="text" placeholder="Cari Buku ..." id="book"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" />
                    </div>
                    <button @click="submit"
                        class="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <Search class="w-4 h-4" />
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref } from 'vue'
import { Search, BookOpen, BookCopy, Bookmark } from 'lucide-vue-next'
const search = ref('')

const emit = defineEmits(['search'])

const submit = () => {
    if (search.value.trim()) {
        emit('search', search.value)
    }
}
</script>
