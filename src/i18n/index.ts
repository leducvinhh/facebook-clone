import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageVi from '~/locales/vi.json'
import languageEN from '~/locales/en.json'

export const resources = {
  vi: languageVi,
  en: languageEN
}

export const defaultNS = 'translations'
const language = localStorage.getItem('lang') || 'vi'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    ns: ['translations'],
    defaultNS,
    lng: language,
    fallbackLng: 'vi',

    interpolation: {
      escapeValue: false, // react already safes from xss
      formatSeparator: ',' // use comma as separator
    }
  })

export default i18n
