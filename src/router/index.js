import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{requiresAuth: false}
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/AboutView.vue')
  },
  {
    path:'/basket',
    name:'basket',
    component: ()=>import('@/views/basket/BasketView.vue')
  },
  {
    path:'/products',
    name:'products',
    component: ()=>import('@/views/products/ProductsView.vue')
  },
  {
    path:'/:notfound(.*)*',
    name:'404',
    redirect:{name:'home'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
