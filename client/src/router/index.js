import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import ('../views/ServiceView.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import ('../views/CalendarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  hashbang: false,
  routes
})

export default router
