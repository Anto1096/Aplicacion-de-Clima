import { createContext, useState, useCallback, useEffect } from "react";
import { translations } from "../i18n";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const translate = useCallback(
    (key) => {
      const keys = key.split(".");
      let value = translations[language];

      for (const k of keys) {
        value = value?.[k];
      }

      return value || key;
    },
    [language],
  );

  const switchLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, translate, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
