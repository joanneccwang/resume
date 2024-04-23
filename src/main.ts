// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import {
  faMobileScreenButton,
  faEnvelope,
  faLocationDot,
  faLanguage,
  faCaretDown,
  faSquareUpRight
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Box from '@/components/Box.vue'
import Flex from '@/components/Flex.vue'
import Title from '@/components/Title.vue'

/* add icons to the library */
library.add(
  faMobileScreenButton,
  faEnvelope,
  faLocationDot,
  faLanguage,
  faCaretDown,
  faSquareUpRight,
  faLinkedin,
  faGithub,
  faCodepen
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Box', Box)
app.component('Flex', Flex)
app.component('block-title', Title)

app.use(router)
app.use(i18n)
app.mount('#app')
