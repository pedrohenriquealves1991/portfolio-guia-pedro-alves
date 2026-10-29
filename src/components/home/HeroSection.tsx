import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { hero } from "@/content/portfolio";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="px-5 pt-14 pb-6 md:px-8 md:pt-20 md:pb-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
            {hero.title[lang]}
          </h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground md:text-2xl">{hero.subtitle[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
