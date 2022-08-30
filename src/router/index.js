import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../pages/HomePage.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../pages/404.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../pages/CategoriesPage.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/CartPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
