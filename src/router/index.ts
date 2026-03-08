import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import ProductsPage from '../pages/ProductsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/products',
    component: ProductsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router