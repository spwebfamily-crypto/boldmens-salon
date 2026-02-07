import { createContext, useContext, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const useTranslation = () => {
  const { language } = useLanguage();
  return translations[language] ?? translations.PT;
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("PT");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
