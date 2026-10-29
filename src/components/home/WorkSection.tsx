import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { projects, projectNames, sections, smallerWork, type ProjectStatus } from "@/content/portfolio";
import SectionHeader from "./SectionHeader";
import ProjectVideo from "./ProjectVideo";

const statusStyles: Record<ProjectStatus, string> = {
  live: "bg-brand/10 text-brand ring-brand/30",
  production: "bg-brand/10 text-brand ring-brand/30",
  partial: "bg-muted text-muted-foreground ring-border",
};

const Field = ({ label, value, strong }: { label: string; value: string; strong?: boolean }) => (
  <div>
    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
    <dd className={`mt-1 ${strong ? "font-medium text-foreground" : "text-foreground/85"}`}>{value}</dd>
  </div>
);

/**
 * Media on the left, text on the right (stacked on small screens). The media
 * keeps its native proportion and is never cropped: the recordings were
 * trimmed to their content, so they fill the column with little margin.
 */
const mediaColumn =
  "flex items-center justify-center border-b border-border bg-muted lg:border-b-0 lg:border-r";

const WorkSection = () => {
  const { lang } = useLanguage();
  const t = sections.work;

  return (
    <section id="work" className="scroll-mt-20 px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={t.label[lang]} title={t.title[lang]} />

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,11fr)_minmax(0,10fr)]">
                {p.video ? (
                  <ProjectVideo
                    src={p.video}
                    poster={p.image}
                    label={p.imageAlt[lang]}
                    playLabel={lang === "pt" ? "Reproduzir vídeo" : "Play video"}
                    pauseLabel={lang === "pt" ? "Pausar vídeo" : "Pause video"}
                    className={mediaColumn}
                  />
                ) : (
                  p.image && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={mediaColumn}
                      aria-label={`${t.open[lang]}: ${projectNames[p.id][lang]}`}
                    >
                      <img src={p.image} alt={p.imageAlt[lang]} loading="lazy" className="block h-auto w-full" />
                    </a>
                  )
                )}

                <div className="flex flex-col justify-center p-5 md:p-7">
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

                  {p.url && (
                    <div className="mt-4 border-t border-border pt-3">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline underline-offset-4"
                      >
                        {p.url.replace(/^https?:\/\/(www\.)?/, "")}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {smallerWork.title[lang]}
          </p>
          <p className="mt-1 mb-4 text-sm text-muted-foreground">{smallerWork.note[lang]}</p>
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {smallerWork.items.map((item) => (
              <li key={item.title.en} className="flex flex-col bg-card p-5 md:p-6">
                <h3 className="text-base font-semibold text-foreground">{item.title[lang]}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.body[lang]}</p>
                <p className="mt-4 text-sm font-medium text-brand">{item.metric[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
