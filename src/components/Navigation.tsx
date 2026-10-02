import { Link } from "react-router-dom";
import { useJourney, type Filter } from "@/content/journey-store";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";

/** Navigation bar of the guide (/guia). The portfolio home has its own SiteNav. */
const Navigation = () => {
  const [filter, setFilter] = useJourney();
  const { lang } = useLanguage();
  const t = translations.nav;

  const labels: Record<Filter, string> = {
    all: t.filterAll[lang],
    backoffice: t.filterBackoffice[lang],
    produto: t.filterProduto[lang],
  };

  return (
    <nav className="nav-bar fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Link
            to="/"
            className="font-semibold tracking-tight text-foreground hover:text-brand transition-colors whitespace-nowrap"
          >
            Pedro Alves
          </Link>
          <span className="text-foreground/40">/</span>
          <Link
            to="/guia"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-medium text-foreground/70 hover:text-foreground transition-colors truncate"
          >
            <span className="hidden sm:inline">{t.guideSubtitle[lang]}</span>
            <span className="sm:hidden">{t.guide[lang]}</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <span className="hidden lg:inline text-[11px] uppercase tracking-widest text-foreground/60 font-bold">
            {t.showing[lang]}
          </span>
          <div className="flex items-center gap-1 bg-foreground/5 border border-border rounded-full p-0.5">
            {(["all", "backoffice", "produto"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors ${
                  filter === f
                    ? "bg-foreground text-background"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {labels[f]}
              </button>
            ))}
          </div>

          <LanguageSwitcher />

          <Link
            to="/"
            className="hidden sm:inline px-3 py-1 text-xs md:text-sm font-semibold rounded-full border border-border text-foreground hover:border-foreground/40 transition-colors"
          >
            {t.portfolio[lang]}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
