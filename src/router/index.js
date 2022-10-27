import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import HomeAlt from '../views/HomeAlt.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  { 
    path: '/',
    component: Welcome,
    name: 'Welcome',
  },
  { 
    path: '/home',
    name: 'homeAlt',
    component: HomeAlt
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
