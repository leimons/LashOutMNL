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
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/CategoriesView.vue')
  },
  {
    path: '/services/lashes',
    name: 'lashes',
    component: () => import('@/views/services/LashesView.vue')
  },
  {
    path: '/services/brows',
    name: 'brows',
    component: () => import('@/views/services/BrowsView.vue')
  },
  {
    path: '/services/nails',
    name: 'nails',
    component: () => import('@/views/services/NailsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  hashbang: false,
  routes
})

export default router
