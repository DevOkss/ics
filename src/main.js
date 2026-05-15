import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'    
import AOS from 'aos'
import 'aos/dist/aos.css'


const app = createApp(App)

AOS.init({
  once: true,
})

app.use(router)
app.mount('#app')
