import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import * as echarts from 'echarts'

import './assets/style/index.css'
import './assets/iconFont/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.config.globalProperties.$echarts = echarts

app.mount('#app')
