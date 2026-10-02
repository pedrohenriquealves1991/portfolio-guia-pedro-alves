import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { sections, hero, CV_PATH, EMAIL, GITHUB, LINKEDIN } from "@/content/portfolio";

const ContactSection = () => {
  const { lang } = useLanguage();
  const t = sections.contact;

  const items = [
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Linkedin, label: "linkedin.com/in/pedrophalves", href: LINKEDIN, external: true },
    { icon: Github, label: "github.com/pedrohenriquealves1991", href: GITHUB, external: true },
    { icon: Download, label: hero.ctaCv[lang], href: CV_PATH, download: true },
  ];

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">{t.label[lang]}</p>
        <h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          {t.title[lang]}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{t.body[lang]}</p>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={it.href}
                {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(it.download ? { download: true } : {})}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-foreground/40 transition-colors"
              >
                <it.icon className="h-4 w-4 text-brand" />
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-muted-foreground">{t.location[lang]}</p>
      </div>
    </section>
  );
};

export default ContactSection;
