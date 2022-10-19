import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home'
import Menu from '../views/Menu'
import Careers from '../views/Careers'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router