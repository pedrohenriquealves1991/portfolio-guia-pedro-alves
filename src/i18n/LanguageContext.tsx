import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Language } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  setLang: () => {},
});

function detectLanguage(): Language {
  if (typeof window === "undefined") return "pt";
  const stored = localStorage.getItem("lang");
  if (stored === "pt" || stored === "en") return stored;
  const browserLang = navigator.language || "";
  return browserLang.startsWith("pt") ? "pt" : "en";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(detectLanguage);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
