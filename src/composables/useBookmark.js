import { ref, watch } from 'vue'

const STORAGE_KEY = 'bookmarks'

const loadBookmarks = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

const bookmarks = ref(loadBookmarks())

watch(bookmarks, (val) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
}, { deep: true })

const isBookmarked = (id) => bookmarks.value.some(b => b.id === id)

const toggleBookmark = (book) => {
  if (isBookmarked(book.id)) {
    bookmarks.value = bookmarks.value.filter(b => b.id !== book.id)
  } else {
    bookmarks.value.push(book)
  }
}

export function useBookmark() {
  return {
    bookmarks,
    toggleBookmark,
    isBookmarked
  }
}
