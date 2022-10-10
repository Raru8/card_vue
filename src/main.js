import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/style.css';

import FontAwesomeIcon from '@/components/utilities/FontAwesome'

createApp(App)
    .component("FontAwesomeIcon", FontAwesomeIcon)
    .mount('#app')
