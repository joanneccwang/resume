import { createApp } from 'vue';
import i18n from '@/i18n';
// import '@/assets/scss/variable.scss';

import Title from '@/components/Title.vue';
import App from './App.vue';

// import router from './router';
// import store from './store';

const app = createApp(App);
app.component('block-title', Title);
// app.use(store).use(router)
app.use(i18n);
app.mount('#app');
