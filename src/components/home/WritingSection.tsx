import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { sections } from "@/content/portfolio";
import { downloadGuideMarkdown } from "@/lib/exportGuide";

const WritingSection = () => {
  const { lang } = useLanguage();
  const t = sections.writing;

  return (
    <section id="writing" className="scroll-mt-20 border-t border-border bg-secondary/40 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 rounded-lg border border-border bg-card p-6 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-brand">{t.label[lang]}</p>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
              {t.title[lang]}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{t.body[lang]}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link
              to="/guia"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background hover:bg-foreground/90 transition-colors"
            >
              {t.read[lang]}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={downloadGuideMarkdown}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-foreground/40 transition-colors"
            >
              <Download className="h-4 w-4" />
              {t.download[lang]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingSection;
