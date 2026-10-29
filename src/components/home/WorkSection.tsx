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
 * Every card has the same shape: a media band of fixed height on top, text below.
 * The media keeps its native proportion inside the band (no cropping), so a
 * 16:9 recording and a near-square one sit in the same frame without
 * stretching the card.
 */
const mediaFrame = "flex h-[260px] items-center justify-center border-b border-border bg-muted sm:h-[340px] md:h-[420px]";
const mediaItem = "h-full w-auto max-w-full";

const WorkSection = () => {
  const { lang } = useLanguage();
  const t = sections.work;

  return (
    <section id="work" className="scroll-mt-20 px-5 py-12 md:px-8 md:py-16">
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
              {p.video ? (
                <div className={mediaFrame}>
                  <ProjectVideo
                    src={p.video}
                    poster={p.image}
                    label={p.imageAlt[lang]}
                    playLabel={lang === "pt" ? "Reproduzir vídeo" : "Play video"}
                    pauseLabel={lang === "pt" ? "Pausar vídeo" : "Pause video"}
                    className={mediaItem}
                  />
                </div>
              ) : (
                p.image && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mediaFrame}
                    aria-label={`${t.open[lang]}: ${projectNames[p.id][lang]}`}
                  >
                    <img src={p.image} alt={p.imageAlt[lang]} loading="lazy" className={`${mediaItem} object-contain`} />
                  </a>
                )
              )}

              <div className="p-5 md:p-7">
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

                <dl className="mt-5 grid grid-cols-1 gap-5 text-[14px] leading-relaxed md:grid-cols-3 md:gap-8 md:text-[15px]">
                  <Field label={t.problem[lang]} value={p.problem[lang]} />
                  <Field label={t.built[lang]} value={p.built[lang]} />
                  <Field label={t.outcome[lang]} value={p.outcome[lang]} strong />
                </dl>

                {p.url && (
                  <div className="mt-5 border-t border-border pt-4">
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
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
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
