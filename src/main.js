import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'

import {firebaseApp} from './firebase'
console.log(firebaseApp)


createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app');
