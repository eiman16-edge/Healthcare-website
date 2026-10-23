import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations.js";

const LanguageContext = createContext(null);
const RTL_LANGUAGES = new Set(["fa", "ps"]);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = window.localStorage.getItem("site-language");
      return saved in translations ? saved : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    const direction = RTL_LANGUAGES.has(language) ? "rtl" : "ltr";
    document.documentElement.lang = language === "fa" ? "fa-AF" : language === "ps" ? "ps-AF" : "en";
    document.documentElement.dir = direction;
    try { window.localStorage.setItem("site-language", language); } catch { /* storage may be unavailable */ }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, direction: RTL_LANGUAGES.has(language) ? "rtl" : "ltr", t: translations[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
