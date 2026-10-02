import { Link, useLocation } from "react-router-dom";
import { Download } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { nav, CV_PATH } from "@/content/portfolio";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const links: { id: string; key: keyof typeof nav }[] = [
  { id: "work", key: "work" },
  { id: "process", key: "process" },
  { id: "background", key: "background" },
  { id: "contact", key: "contact" },
];

const SiteNav = () => {
  const { lang } = useLanguage();
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 md:px-8">
        <Link
          to="/"
          className="font-semibold tracking-tight text-foreground hover:text-brand transition-colors"
        >
          Pedro Alves
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.id}
              href={onHome ? `#${l.id}` : `/#${l.id}`}
              className="hover:text-foreground transition-colors"
            >
              {nav[l.key][lang]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href={CV_PATH}
            download
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-semibold text-background hover:bg-foreground/90 transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            {nav.cv[lang]}
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteNav;
