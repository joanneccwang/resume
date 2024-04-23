import { createRouter, createWebHistory } from 'vue-router'

import Resume from '@/views/Resume.vue'

const routes = [
  {
    path: '/',
    name: 'Resume',
    component: Resume
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
