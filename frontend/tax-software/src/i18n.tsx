import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./translations/English/englishTranlation.json"
import translationSpanish from "./translations/Spanish/SpanishTranslation.json"



    const resources = {
        en: {
            main: translationEnglish,
            home: translationEnglish
        },
        es: {
            home : translationSpanish,
        },
    }

    i18next.use(initReactI18next).init({
        resources,
        lng: "en",  // default language
        // lng: localStorage.getItem("lang") || "en"
    });

export default i18next;