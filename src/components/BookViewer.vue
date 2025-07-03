<template>
  <div class="aspect-w-16 aspect-h-9 mt-4">
    <iframe
      :src="viewUrl"
      width="100%"
      height="600"
      allowfullscreen
      class="rounded border"
    ></iframe>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props untuk menerima volumeId dari komponen luar
const props = defineProps({
  volumeId: {
    type: String,
    required: true
  }
})

// Pastikan return URL dari computed
const viewUrl = computed(() => {
  return `https://books.google.com/books?id=${props.volumeId}&printsec=frontcover&output=embed`
})
</script>
