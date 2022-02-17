import { createApp } from 'vue';
import Title from '@/components/Title.vue';

import App from './App.vue';

// import router from './router';
// import store from './store';

const app = createApp(App);
app.component('block-title', Title);
// app.use(store).use(router)
app.mount('#app');
