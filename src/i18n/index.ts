import { createI18n } from 'vue-i18n'
import en from './en'
import zhtw from './zhtw'

const options = {
  locale: 'en',
  fallback: 'en',
  legacy: false,
  messages: {
    zhtw,
    en
  }
}

const i18n = createI18n(options)

export default i18n
