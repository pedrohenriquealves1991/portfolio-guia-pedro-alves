import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations.footer;

  return (
    <footer className="border-t-2 border-foreground/20 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-foreground/80">
          <a
            href="mailto:pedro@regulamentei.com.br"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" /> pedro@regulamentei.com.br
          </a>
          <a
            href="https://linkedin.com/in/pedrophalves"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" /> linkedin.com/in/pedrophalves
          </a>
        </div>
        <p className="text-xs text-foreground/60 text-center max-w-2xl mx-auto leading-relaxed">
          {t.location[lang]}
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-4 border-t border-foreground/10">
          <p className="text-xs text-foreground/55">{t.tagline[lang]}</p>
          <p className="text-xs text-foreground/55">{t.builtWith[lang]}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
