import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/detect',
    name: 'Detect',
    component: () => import('../pages/Detect.vue')
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../pages/History.vue')
  },
  {
    path: '/history/:id',
    name: 'Detail',
    component: () => import('../pages/Detail.vue')
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import('../pages/Recommend.vue')
  },
  {
    path: '/assist',
    name: 'Assist',
    component: () => import('../pages/Assist.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router