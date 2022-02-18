import { createI18n } from 'vue-i18n';
import zhtw from './zhtw.json';
import en from './en.json';

const i18n = createI18n({
  locale: 'en',
  fallback: 'zhtw',
  messages: {
    zhtw,
    en,
  },
});

export default i18n;
