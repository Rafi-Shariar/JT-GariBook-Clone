import { createContext, useState } from "react";
import { translations } from "../data/translations";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en"); 

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "bn" : "en"));
  };

  const t = translations[lang]; 

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      <div className={lang === "bn" ? "font-bangla" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}


