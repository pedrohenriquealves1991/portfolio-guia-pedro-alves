import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { hero } from "@/content/portfolio";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="px-5 pt-14 pb-10 md:px-8 md:pt-20 md:pb-14">
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

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
