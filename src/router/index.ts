import { createRouter, createWebHistory } from 'vue-router'

import HomeOnePage from "@/views/IndexView.vue"
import about from '@/views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeOnePage,
    },

    
    {
      path: '/about',
      name: 'about',
      component:about,
    },
  ],
})

export default router
