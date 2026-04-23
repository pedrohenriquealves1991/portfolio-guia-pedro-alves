import { useLanguage } from "@/i18n/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 bg-foreground/10 border border-foreground/30 rounded-full p-0.5 text-[11px] font-bold tracking-wider">
      <button
        onClick={() => setLang("pt")}
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === "pt"
            ? "bg-foreground text-background"
            : "text-foreground/70 hover:text-foreground"
        }`}
        aria-pressed={lang === "pt"}
      >
        PT
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded-full transition-colors ${
          lang === "en"
            ? "bg-foreground text-background"
            : "text-foreground/70 hover:text-foreground"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
