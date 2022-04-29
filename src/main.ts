import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import native from 'naive-ui'
import 'vfonts/Lato.css'

const app = createApp(App)
app.use(router).use(createPinia()).use(native)

app.mount('#app')
