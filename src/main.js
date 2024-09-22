import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue'

import App from './App.vue'
import router from './router'

/* Global css code */
import './css/main.css'

/* Init Vue app */
const app = createApp(App)

/* Init Iconify component */
app.component('Icon', Icon)

/* Create Vue app */
app.use(router)
app.use(createPinia())

app.mount('#app')