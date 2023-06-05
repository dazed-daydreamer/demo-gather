import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeEcharts',
    component: () => import('@/views/echarts/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
