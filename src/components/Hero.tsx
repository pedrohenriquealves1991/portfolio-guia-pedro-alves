import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const Hero = () => {
  const { lang } = useLanguage();
  const t = translations.guideHero;

  return (
    <section className="pt-32 pb-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-foreground/60 mb-5">
            {t.eyebrow[lang]}
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight mb-6">
            {t.title1[lang]}
            <br />
            {t.title2[lang]}
            <br />
            <span className="bg-primary px-3 py-1 inline-block border-2 border-foreground -rotate-1">
              {t.titleHighlight[lang]}
            </span>
          </h1>

          <p
            className="text-lg md:text-2xl text-foreground/85 max-w-2xl font-medium leading-relaxed mb-5"
            dangerouslySetInnerHTML={{ __html: t.bodyA[lang] }}
          />

          <p
            className="text-base md:text-lg text-foreground/65 max-w-2xl leading-relaxed mb-10"
            dangerouslySetInnerHTML={{ __html: t.bodyB[lang] }}
          />

          <a
            href="#bifurcacao"
            className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background font-display font-bold uppercase text-sm tracking-wider rounded-sm hover:bg-foreground/85 transition-colors"
          >
            {t.cta[lang]}
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
