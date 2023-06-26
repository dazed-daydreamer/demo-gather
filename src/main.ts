import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import * as echarts from 'echarts'
import registerComponents from './common/register-components'

import './assets/style/index.scss'
import './assets/iconFont/index.scss'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(registerComponents)
app.config.globalProperties.$echarts = echarts

app.mount('#app')
