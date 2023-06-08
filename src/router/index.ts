import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []

const viewsFile = import.meta.glob('../views/**/*.vue')
for (const path in viewsFile) {
  const reg = /..\/views\/(.*)\/index\.vue/g
  const isMatch = path.match(reg)
  if (isMatch) {
    const reducedPath = path.split(reg)[1]
    const pathArr = reducedPath.split('/')
    // 根据文件路径生成路由路径
    const routerPath = reducedPath === 'home' ? '/' : `/${reducedPath}`
    let routerName = ''
    pathArr.forEach((item) => {
      routerName += item.replace(item[0], item[0].toUpperCase())
    })
    routes.push({
      path: routerPath,
      name: routerName,
      component: viewsFile[path]
    })
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
