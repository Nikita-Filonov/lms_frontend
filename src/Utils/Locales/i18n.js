import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import ru from './ru.json';
import en from './en.json';
import {LOCALE_BACKUP} from "../Constants/Backup";

export const SUPPORTED_LOCALES = {
  ru: 'ru-RU',
  en: 'en-US'
};

const resources = {
  en: {translation: en},
  ru: {translation: ru}
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem(LOCALE_BACKUP) || SUPPORTED_LOCALES.ru,
    returnObjects: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
