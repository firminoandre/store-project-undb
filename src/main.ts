import './index.css'
import '@/assets/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import CadidatatuPreset from './presets/candidatatu'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    unstyled: true,
    pt: CadidatatuPreset
  })
app.mount('#app')
