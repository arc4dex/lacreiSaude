import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en-us/common.json";
import br from "./pt-br/common.json";

i18n

  .use(initReactI18next)

  .init({
    fallbackLng: "en-US",
    debug: false,
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      "en-US": {
        common: en,
      },
      "pt-BR": {
        common: br,
      },
    },
  });

export default i18n;
