/**
 ******************
 * LIST OF ROUTES *
 ******************
 * homepage as /
 * menu
 * reservation
 * about
 * contact
 * blog
 * single blog article as blog/:article
*/

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', 
    name: 'Homepage',
    component: () => import('@/views/Homepage.vue')
  },
  {
    path: '/menu', 
    name: 'Menu',
    component: () => import('@/views/Menupage.vue')
  },
  {
    path: '/reservation', 
    name: 'Reservation',
    component: () => import('@/views/Reservationpage.vue')
  },
  {
    path: '/about', 
    name: 'About',
    component: () => import('./RouterView.vue'),
  },
  {
    path: '/contact', 
    name: 'Contact',
    component: () => import('./RouterView.vue'),
  },
  {
    path: '/blog', 
    name: 'Blog',
    component: () => import('./RouterView.vue'),
  },

  // 404 not found page
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: () => import('./RouterView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  },
})

export default router