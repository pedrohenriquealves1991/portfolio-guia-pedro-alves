import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

type PartId = "I" | "II" | "III";

interface PartHeaderProps {
  part: PartId;
}

const PartHeader = ({ part }: PartHeaderProps) => {
  const { lang } = useLanguage();
  const t = translations.parts[part];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary border-2 border-foreground rounded-sm p-8 md:p-12 shadow-[8px_8px_0_0_hsl(var(--foreground))] -rotate-[0.5deg]"
        >
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-foreground/70 mb-3">
            {t.label[lang]}
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[0.95] mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-foreground/80 text-base md:text-lg max-w-2xl leading-relaxed">
            {t.desc[lang]}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartHeader;
