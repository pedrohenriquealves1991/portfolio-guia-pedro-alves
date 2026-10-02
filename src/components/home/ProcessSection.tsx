import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { sections } from "@/content/portfolio";
import SectionHeader from "./SectionHeader";

const ProcessSection = () => {
  const { lang } = useLanguage();
  const t = sections.process;

  return (
    <section id="process" className="scroll-mt-20 border-t border-border bg-secondary/40 px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={t.label[lang]} title={t.title[lang]} />

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <motion.li
              key={s.title.en}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="bg-card p-5"
            >
              <p className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-sm font-semibold text-foreground md:text-base">{s.title[lang]}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body[lang]}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
