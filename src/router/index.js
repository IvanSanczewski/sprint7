import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import homeAlt from '../views/HomeAlt.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'homeAlt',
    component: homeAlt
  },
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
