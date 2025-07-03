<script setup>
import { ref, nextTick, computed } from 'vue'
import HomeView from './views/HomeView.vue'
import HeroSection from './components/HeroSection.vue'
import Header from './components/Header.vue'
import CaraPenggunaan from './components/CaraPenggunaan.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isHome = computed(() => route.path === '/')

const searchQuery = ref('')
const handleSearch = (query) => {
  searchQuery.value = query

  nextTick(() => {
    const bs = document.getElementById("book-section")
    const bd = document.getElementById("BookDetail")

    if (bs) {
      bs.scrollIntoView({ behavior: 'smooth'})
    }
    if (bd) {
      bd.scrollIntoView({ behavior: 'smooth'})
    }
  })
}
</script>

<template>
    <Header @search="handleSearch" />
    <HeroSection />
    <router-view />
    <HomeView :searchQuery="searchQuery" v-if="isHome"/>
    <CaraPenggunaan v-if="isHome"/>
    <Footer />
</template>
