import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

var authorized = false

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
    component: () => import('@/views/admin/AdminLogin.vue')
  },
  {
    path: '/admin/home',
    name: 'adminDashboard',
    component: () => import('@/views/admin/AdminDashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/services',
    name: 'adminServices',
    component: () => import('@/views/admin/AdminServices.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/services/:id',
    name: 'adminService',
    component: () => import('@/views/admin/AdminService.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/services/:id/edit',
    name: 'adminServiceEdit',
    component: () => import('@/views/admin/AdminServiceEdit.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/calendar',
    name: 'adminCalendar',
    component: () => import('@/views/admin/AdminCalendar.vue'),
    meta: {
      requiresAuth: true
    }
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
  {
    path: '/book/brows',
    name: 'bookBrows',
    component: () => import('@/views/booking/BrowsView.vue')
  },
  {
    path: '/book/nails',
    name: 'bookNails',
    component: () => import('@/views/booking/NailsView.vue')
  },
  {
    path: '/book/schedule',
    name: 'scheduleView',
    component: () => import('@/views/booking/ScheduleView.vue')
  },
  {
    path: '/book/checkout',
    name: 'checkoutView',
    component: () => import('@/views/booking/CheckoutView.vue')
  },

  // ERROR PAGE
  {
    path: '/:pathMatch(.*)*',
    name: 'pageNotFound',
    component: () => import('@/views/error/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  hashbang: false,
  routes
})

router.beforeEach(async (to, from , next) => {
  authorized = false
  if (to.matched.some(record => record.meta.requiresAuth)){
    await axios.get(`http://localhost:3000/api/getAuthentication`)
    .then(function(response){
    authorized = response.data
    })
    console.log(authorized)
    if(!authorized){
      next({name: 'admin'})
    }
    else{
      next()
    }
  }
  else{
    next()
  }
})

export default router
