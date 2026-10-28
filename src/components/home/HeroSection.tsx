import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
            {hero.title[lang]}
          </h1>

          <p className="mt-4 text-lg font-medium text-muted-foreground md:text-2xl">
            {hero.subtitle[lang]}
          </p>

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

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            <a href="#work" className="inline-flex items-center gap-1 text-brand hover:underline underline-offset-4">
              {hero.links.work[lang]}
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
            <a href="#contact" className="inline-flex items-center gap-1 text-brand hover:underline underline-offset-4">
              {hero.links.contact[lang]}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
