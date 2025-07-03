import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookDetail from '@/components/BookDetail.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/book/:id', name: 'BookDetai', component: BookDetail, props: true },
    { path: '/bookmark', name: 'Bookmark', component: () => import('@/views/BookmarkView.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router