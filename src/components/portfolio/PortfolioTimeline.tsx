import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const PortfolioTimeline = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-7 inline-block border-b-2 border-foreground pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70"
        >
          {translations.sections.evolution[lang]}
        </motion.span>

        <div className="space-y-7 mt-2">
          {translations.timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-2 sm:gap-5"
            >
              <p className="whitespace-pre-line pt-1 text-[11px] font-bold uppercase tracking-wider text-foreground/60">
                {item.year[lang]}
              </p>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1.5 leading-tight">
                  {item.title[lang]}
                </h3>
                <p className="text-[14px] leading-relaxed text-foreground/75">
                  {item.desc[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTimeline;
