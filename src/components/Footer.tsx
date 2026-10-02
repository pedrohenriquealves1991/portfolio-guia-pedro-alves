import { useLanguage } from "@/i18n/LanguageContext";
import { sections, EMAIL, GITHUB, LINKEDIN } from "@/content/portfolio";

const Footer = () => {
  const { lang } = useLanguage();
  const t = sections.footer;

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p>{t.rights[lang]}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground transition-colors">
            {EMAIL}
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
        </div>
        <p>{t.built[lang]}</p>
      </div>
    </footer>
  );
};

export default Footer;
