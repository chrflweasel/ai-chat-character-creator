import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Initialization of i18next
i18n
    .use(HttpBackend) // Loads translations via HTTP
    .use(LanguageDetector) // Detects user's language
    .use(initReactI18next) // Integration with React
    .init({
        fallbackLng: 'en', // Default language if user's language couldn't be detected
        supportedLngs: ['en', 'ru'], // Supported languages
        interpolation: {
            escapeValue: false, // React already escapes strings
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
        },
    });

export default i18n;
