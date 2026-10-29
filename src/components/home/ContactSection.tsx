import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { sections, EMAIL, GITHUB, LINKEDIN } from "@/content/portfolio";

const ContactSection = () => {
  const { lang } = useLanguage();
  const t = sections.contact;

  const items = [
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Linkedin, label: "linkedin.com/in/pedrophalves", href: LINKEDIN, external: true },
    { icon: Github, label: "github.com/pedrohenriquealves1991", href: GITHUB, external: true },
  ];

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">{t.label[lang]}</p>
        <h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          {t.title[lang]}
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={it.href}
                {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-foreground/40 transition-colors"
              >
                <it.icon className="h-4 w-4 shrink-0 text-brand" />
                <span className="truncate">{it.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
