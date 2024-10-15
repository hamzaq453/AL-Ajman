// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dynamically import translation files
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
});

export default i18n;
