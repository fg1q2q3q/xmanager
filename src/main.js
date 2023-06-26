import { createApp } from 'vue'
import pinia from './store'
import routes from './router'
import App from './App.vue'

const app = createApp(App)
app.use(pinia).use(routes).mount('#app')
