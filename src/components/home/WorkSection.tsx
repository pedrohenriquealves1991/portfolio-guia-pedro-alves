import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { projects, projectNames, sections, smallerWork, type ProjectStatus } from "@/content/portfolio";
import SectionHeader from "./SectionHeader";

const statusStyles: Record<ProjectStatus, string> = {
  live: "bg-brand/10 text-brand ring-brand/30",
  production: "bg-brand/10 text-brand ring-brand/30",
  paused: "bg-muted text-muted-foreground ring-border",
};

const Field = ({ label, value, strong }: { label: string; value: string; strong?: boolean }) => (
  <div>
    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
    <dd className={`mt-0.5 ${strong ? "font-medium text-foreground" : "text-foreground/85"}`}>{value}</dd>
  </div>
);

const WorkSection = () => {
  const { lang } = useLanguage();
  const t = sections.work;

  return (
    <section id="work" className="scroll-mt-20 px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={t.label[lang]} title={t.title[lang]} />

        <div className="space-y-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className={`grid grid-cols-1 ${p.image ? "lg:grid-cols-[2fr_3fr]" : ""}`}>
                {p.image && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[16/10] overflow-hidden border-b border-border bg-muted lg:aspect-auto lg:min-h-[260px] lg:border-b-0 lg:border-r"
                    aria-label={`${t.open[lang]}: ${projectNames[p.id][lang]}`}
                  >
                    <img
                      src={p.image}
                      alt={p.imageAlt[lang]}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                )}

                <div className="flex flex-col p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
                      {projectNames[p.id][lang]}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyles[p.status]}`}
                    >
                      {p.statusLabel[lang]}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{p.role[lang]}</p>

                  <dl className="mt-4 space-y-3 text-[14px] leading-relaxed md:text-[15px]">
                    <Field label={t.problem[lang]} value={p.problem[lang]} />
                    <Field label={t.built[lang]} value={p.built[lang]} />
                    <Field label={t.outcome[lang]} value={p.outcome[lang]} strong />
                  </dl>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
                    <ul className="flex flex-wrap gap-1.5" aria-label={t.stack[lang]}>
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                          {s}
                        </li>
                      ))}
                    </ul>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline underline-offset-4"
                      >
                        {p.url.replace(/^https?:\/\/(www\.)?/, "")}
                        {p.urlNote && (
                          <span className="font-normal text-muted-foreground"> · {p.urlNote[lang]}</span>
                        )}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {smallerWork.title[lang]}
          </p>
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {smallerWork.items.map((item) => (
              <li key={item.title.en} className="bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground">{item.title[lang]}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body[lang]}</p>
                <p className="mt-3 text-sm font-medium text-brand">{item.metric[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
