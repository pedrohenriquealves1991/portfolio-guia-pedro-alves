import { motion } from "framer-motion";
import { Download, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { hero, CV_PATH, EMAIL, LINKEDIN } from "@/content/portfolio";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="px-5 pt-16 pb-12 md:px-8 md:pt-24 md:pb-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-brand">
            {hero.eyebrow[lang]}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
            {hero.title[lang]}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {hero.lead[lang]}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/80">
            {hero.facts[lang].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CV_PATH}
              download
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              {hero.ctaCv[lang]}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:border-foreground/40 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              {hero.ctaLinkedin[lang]}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:border-foreground/40 transition-colors"
            >
              <Mail className="h-4 w-4" />
              {hero.ctaEmail[lang]}
            </a>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3"
        >
          {hero.proof.map((p) => (
            <div key={p.value.en} className="bg-card px-5 py-5">
              <dt className="text-xs text-muted-foreground">{p.label[lang]}</dt>
              <dd className="mt-1 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {p.value[lang]}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default HeroSection;
