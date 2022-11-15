import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  hashbang: false,
  routes
})

export default router
