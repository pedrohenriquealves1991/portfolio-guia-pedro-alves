import { useLanguage } from "@/i18n/LanguageContext";
import { sections } from "@/content/portfolio";
import SectionHeader from "./SectionHeader";

const TagList = ({ label, items }: { label: string; items: string[] }) => (
  <div>
    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((i) => (
        <li key={i} className="rounded-md border border-border bg-card px-2.5 py-1 text-sm text-foreground/85">
          {i}
        </li>
      ))}
    </ul>
  </div>
);

const BackgroundSection = () => {
  const { lang } = useLanguage();
  const t = sections.background;

  return (
    <section id="background" className="scroll-mt-20 border-t border-border px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={t.label[lang]} title={t.title[lang]} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ol className="space-y-8">
            {t.timeline.map((item) => (
              <li key={item.org} className="grid grid-cols-1 gap-2 sm:grid-cols-[130px_1fr] sm:gap-6">
                <p className="pt-0.5 font-mono text-xs text-muted-foreground">{item.period[lang]}</p>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.org}
                    {item.orgNote[lang] && (
                      <span className="font-normal text-muted-foreground"> · {item.orgNote[lang]}</span>
                    )}
                  </h3>
                  <p className="mt-0.5 text-sm text-foreground/80">{item.role[lang]}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.body[lang]}</p>
                </div>
              </li>
            ))}
            <li className="grid grid-cols-1 gap-2 sm:grid-cols-[130px_1fr] sm:gap-6">
              <p className="pt-0.5 font-mono text-xs text-muted-foreground">{t.educationLabel[lang]}</p>
              <ul className="space-y-1 text-[15px] leading-relaxed text-muted-foreground">
                {t.education[lang].map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>
          </ol>

          <div className="space-y-7">
            <TagList label={t.domainLabel[lang]} items={t.domain} />
            <TagList label={t.toolsLabel[lang]} items={t.tools} />
            <TagList label={t.methodsLabel[lang]} items={t.methods[lang]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
