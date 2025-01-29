import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

/** 导入自定义样式 */
import './static/main.css'

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

app.mount('#app')
