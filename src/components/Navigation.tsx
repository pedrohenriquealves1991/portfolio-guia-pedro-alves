import { Link, useLocation } from "react-router-dom";
import { useJourney, type Filter } from "@/content/journey-store";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const [filter, setFilter] = useJourney();
  const { lang } = useLanguage();
  const { pathname } = useLocation();
  const t = translations.nav;

  const labels: Record<Filter, string> = {
    all: t.filterAll[lang],
    backoffice: t.filterBackoffice[lang],
    produto: t.filterProduto[lang],
  };

  const isGuide = pathname === "/";

  const scrollTopOrLink = () => {
    if (isGuide) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="nav-bar fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <Link
          to="/"
          onClick={scrollTopOrLink}
          className="font-display font-bold text-base md:text-lg tracking-wide text-foreground hover:opacity-70 transition-opacity text-left"
        >
          PEDRO
          <span className="mx-2 text-foreground/50">/</span>
          <span className="font-medium text-foreground/70 hidden sm:inline">
            {t.guideSubtitle[lang]}
          </span>
          <span className="font-medium text-foreground/70 sm:hidden">
            {t.guide[lang]}
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/portfolio"
            className={`hidden sm:inline px-3 py-1 font-display font-bold text-xs md:text-sm tracking-wide rounded-full transition-colors border-2 ${
              pathname === "/portfolio"
                ? "bg-foreground text-background border-foreground"
                : "border-foreground/30 text-foreground hover:bg-foreground/10"
            }`}
          >
            {t.portfolio[lang]}
          </Link>

          {isGuide && (
            <>
              <span className="hidden lg:inline text-[10px] uppercase tracking-widest text-foreground/60 font-bold">
                {t.showing[lang]}
              </span>
              <div className="flex items-center gap-1 bg-foreground/10 border border-foreground/30 rounded-full p-0.5">
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
            </>
          )}

          <LanguageSwitcher />

          {/* Mobile portfolio link */}
          <Link
            to="/portfolio"
            className={`sm:hidden text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-full transition-colors ${
              pathname === "/portfolio"
                ? "bg-foreground text-background"
                : "text-foreground/70"
            }`}
          >
            {t.portfolio[lang]}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
