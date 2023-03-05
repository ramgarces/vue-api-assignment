import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { 
    path: '/villager/:id',
    name: 'Villager',
    component: () => import('@/views/VillagerDetails.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
