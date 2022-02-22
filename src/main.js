import { createApp } from 'vue';
import i18n from '@/i18n';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import specific icons */
import {
  faMobileScreenButton, faEnvelope, faLocationDot, faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Title from '@/components/Title.vue';
import App from './App.vue';

/* add icons to the library */
library.add(
  faMobileScreenButton, faEnvelope, faLocationDot, faLanguage,
  faLinkedin, faGithub, faCodepen,
);

// import router from './router';
// import store from './store';

const app = createApp(App);
/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('block-title', Title);
// app.use(store).use(router)
app.use(i18n);
app.mount('#app');
