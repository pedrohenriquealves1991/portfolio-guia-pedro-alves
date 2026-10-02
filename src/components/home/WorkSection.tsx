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

const WorkSection = () => {
  const { lang } = useLanguage();
  const t = sections.work;

  return (
    <section id="work" className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={t.label[lang]} title={t.title[lang]} intro={t.intro[lang]} />

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className={`grid grid-cols-1 ${p.image ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}>
                {p.image && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[16/10] overflow-hidden border-b border-border bg-muted lg:border-b-0 lg:border-r"
                    aria-label={`${t.open[lang]}: ${projectNames[p.id][lang]}`}
                  >
                    <img
                      src={p.image}
                      alt={p.imageAlt[lang]}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                )}

                <div className="flex flex-col p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyles[p.status]}`}
                    >
                      {p.statusLabel[lang]}
                    </span>
                    <span className="text-xs text-muted-foreground">{p.role[lang]}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
                    {projectNames[p.id][lang]}
                  </h3>

                  <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {t.problem[lang]}
                      </dt>
                      <dd className="mt-1 text-foreground/85">{p.problem[lang]}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {t.built[lang]}
                      </dt>
                      <dd className="mt-1 text-foreground/85">{p.built[lang]}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {t.outcome[lang]}
                      </dt>
                      <dd className="mt-1 font-medium text-foreground">{p.outcome[lang]}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                    <ul className="flex flex-wrap gap-1.5" aria-label={t.stack[lang]}>
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                        >
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

        <div className="mt-10 rounded-lg border border-dashed border-border px-6 py-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {smallerWork.title[lang]}
          </p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-foreground/85">
            {smallerWork.items[lang].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/50" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
