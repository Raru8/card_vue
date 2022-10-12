import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/style.css';

import router from "@/router/index"
import { createPinia } from 'pinia';
import FontAwesomeIcon from '@/components/utilities/FontAwesome';

const pinia = createPinia()

createApp(App)
    .component("FontAwesomeIcon", FontAwesomeIcon)
    .use(pinia)
    .use(router)
    .mount('#app')
