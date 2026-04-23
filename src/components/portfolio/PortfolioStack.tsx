import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const PortfolioStack = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <span className="mb-7 inline-block border-b-2 border-foreground pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70">
          {translations.sections.dailyStack[lang]}
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
          {translations.stack.map((item) => (
            <div
              key={item.name}
              className="rounded-sm border-2 border-foreground border-l-[8px] border-l-primary bg-background/40 px-4 py-3"
            >
              <p className="font-display text-[14px] font-bold text-foreground">
                {item.name}
              </p>
              <p className="text-[12px] text-foreground/70 leading-snug mt-0.5">
                {item.role[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStack;
