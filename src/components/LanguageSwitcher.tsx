import { useLanguage } from "@/i18n/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  const btn = (code: "pt" | "en") => (
    <button
      type="button"
      onClick={() => setLang(code)}
      aria-pressed={lang === code}
      className={`px-2 py-1 rounded-full text-xs font-semibold transition-colors ${
        lang === code ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {code.toUpperCase()}
    </button>
  );

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-card p-0.5" aria-label="Language">
      {btn("pt")}
      {btn("en")}
    </div>
  );
};

export default LanguageSwitcher;
