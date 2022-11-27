import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },

  // ADMIN PAGES
  {

    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminLogin.vue')
  },

  // SERVICE PAGES
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/services/CategoriesView.vue')
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
  },

  // BOOKING PAGES
  {
    path: '/book',
    name: 'book',
    component: () => import('@/views/booking/CategoriesView.vue')
  },
  {
    path: '/book/lashes',
    name: 'bookLashes',
    component: () => import('@/views/booking/LashesView.vue')
  },

  // ERROR PAGE
  {
    path: '/:pathMatch(.*)*',
    name: 'pageNotFound',
    component: () => import('@/views/error/PageNotFound.vue')
  },

  // PLACEHOLDER PAGES
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
