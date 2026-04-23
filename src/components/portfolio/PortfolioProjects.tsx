import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

type ProjectType = "custom" | "saas" | "internal" | "automation";

// Order matches translations.projects (Amaro is index 0)
const projectMeta: { type: ProjectType; complexity: number; url?: string }[] = [
  { type: "custom", complexity: 3, url: "https://amarogestaocondominial.lovable.app/" },
  { type: "saas", complexity: 3, url: "https://miradasearch.com" },
  { type: "saas", complexity: 3, url: "https://regulamentei.com.br" },
  { type: "internal", complexity: 3, url: "https://angiolux.com.br/consulta-licitacao" },
  { type: "internal", complexity: 2, url: "https://angiolux.com.br/qualificacao" },
  { type: "automation", complexity: 2 },
  { type: "automation", complexity: 1 },
  { type: "automation", complexity: 2 },
];

// Re-skinned to use guide tokens (primary = yellow, foreground = ink, etc.)
const typeStyles: Record<ProjectType, { border: string; badge: string }> = {
  custom: {
    border: "border-l-primary",
    badge: "bg-primary text-foreground",
  },
  saas: {
    border: "border-l-foreground",
    badge: "bg-foreground text-background",
  },
  internal: {
    border: "border-l-secondary",
    badge: "bg-secondary text-foreground",
  },
  automation: {
    border: "border-l-foreground/40",
    badge: "bg-background/60 text-foreground border border-foreground/40",
  },
};

const ComplexityDots = ({ level }: { level: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className={`h-1.5 w-1.5 rounded-full ${
          i <= level ? "bg-foreground" : "bg-foreground/20"
        }`}
      />
    ))}
  </div>
);

const PortfolioProjects = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <span className="mb-7 inline-block border-b-2 border-foreground pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70">
          {translations.sections.projects[lang]}
        </span>

        <div className="space-y-3 mt-2">
          {translations.projects.map((p, i) => {
            const meta = projectMeta[i];
            const style = typeStyles[meta.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`group cursor-pointer rounded-sm bg-background/40 border-2 border-foreground border-l-[8px] ${style.border} p-5 transition-all hover:bg-background/70 hover:translate-x-[-2px] shadow-[4px_4px_0_0_hsl(var(--foreground))]`}
                onClick={() => meta.url && window.open(meta.url, "_blank")}
              >
                <div className="mb-2.5 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-2.5 flex-wrap">
                      <span
                        className={`rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.badge}`}
                      >
                        {p.typeLabel[lang]}
                      </span>
                      <ComplexityDots level={meta.complexity} />
                    </div>
                    <h3 className="font-display text-xl font-bold leading-tight text-foreground">
                      {p.title[lang]}
                    </h3>
                  </div>
                  {meta.url && (
                    <a
                      href={meta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex-shrink-0 text-foreground/60 hover:text-foreground"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Open project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="mb-3 text-[14px] leading-relaxed text-foreground/80">
                  {p.desc[lang]}
                </p>

                <div className="border-t-2 border-foreground/15 pt-2.5 text-[12px] text-foreground/70">
                  <strong className="font-bold text-foreground uppercase tracking-wider text-[10px]">
                    {translations.impactLabel[lang]}
                  </strong>{" "}
                  {p.impact[lang]}
                </div>

                {meta.url && (
                  <p className="mt-1.5 font-mono text-[11px] text-foreground/50">
                    {meta.url.replace("https://", "")}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
