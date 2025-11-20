import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import thTranslation from './locales/th/translation.json';
import hiTranslation from './locales/hi/translation.json';
import msTranslation from './locales/ms/translation.json';
import zhTranslation from './locales/zh/translation.json';
import jaTranslation from './locales/ja/translation.json';
import ruTranslation from './locales/ru/translation.json';
import heTranslation from './locales/he/translation.json';
import deTranslation from './locales/de/translation.json';
import frTranslation from './locales/fr/translation.json';
import esTranslation from './locales/es/translation.json';

export const languageOptions = [
  { code: 'th', label: 'TH', name: 'ไทย' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ms', label: 'MS', name: 'Melayu' },
  { code: 'zh', label: 'ZH', name: '中文' },
  { code: 'ja', label: 'JA', name: '日本語' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'he', label: 'HE', name: 'עברית' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'hi', label: 'HI', name: 'हिन्दी' }
];

const resources = {
  en: { translation: enTranslation },
  th: { translation: thTranslation },
  hi: { translation: hiTranslation },
  ms: { translation: msTranslation },
  zh: { translation: zhTranslation },
  ja: { translation: jaTranslation },
  ru: { translation: ruTranslation },
  he: { translation: heTranslation },
  de: { translation: deTranslation },
  fr: { translation: frTranslation },
  es: { translation: esTranslation }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'th',
    fallbackLng: 'en',
    supportedLngs: languageOptions.map((lang) => lang.code),
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
