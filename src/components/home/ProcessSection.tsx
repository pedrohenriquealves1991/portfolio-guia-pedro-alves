import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { sections } from "@/content/portfolio";
import SectionHeader from "./SectionHeader";

const FailureCard = ({
  index,
  title,
  summary,
  body,
}: {
  index: number;
  title: string;
  summary: string;
  body: string;
}) => {
  const [open, setOpen] = useState(false);
  const id = `failure-${index}`;
  return (
    <div className="rounded-lg border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
      >
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h4 className="mt-1 text-base font-semibold text-foreground md:text-lg">{title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{summary}</p>
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div id={id} className="border-t border-border px-5 pb-5 pt-4 md:px-6">
          <p className="text-[15px] leading-relaxed text-foreground/85">{body}</p>
        </div>
      )}
    </div>
  );
};

const ProcessSection = () => {
  const { lang } = useLanguage();
  const t = sections.process;

  return (
    <section id="process" className="scroll-mt-20 border-t border-border bg-secondary/40 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={t.label[lang]} title={t.title[lang]} />

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <motion.li
              key={s.title.en}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card p-5 md:p-6"
            >
              <p className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">{s.title[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body[lang]}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">{t.failuresLabel[lang]}</p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/85 md:text-lg">
            {t.failuresIntro[lang]}
          </p>
          <div className="mt-6 space-y-3">
            {t.failures.map((f, i) => (
              <FailureCard
                key={f.title.en}
                index={i}
                title={f.title[lang]}
                summary={f.summary[lang]}
                body={f.body[lang]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
