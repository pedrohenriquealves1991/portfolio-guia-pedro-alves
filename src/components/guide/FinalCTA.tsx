import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Share2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import DownloadGateDialog from "@/components/guide/DownloadGateDialog";

const FinalCTA = () => {
  const { lang } = useLanguage();
  const t = translations.finalCTA;
  const dl = translations.downloadGate;
  const [dlOpen, setDlOpen] = useState(false);

  const handleShare = async () => {
    const url = window.location.origin + "/";
    try {
      if (navigator.share) {
        await navigator.share({
          title: t.shareTitle[lang],
          text: t.shareText[lang],
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success(t.copied[lang]);
      }
    } catch {
      // user cancelled
    }
  };

  return (
    <section id="cta-final" className="py-20 px-6 md:px-12 scroll-mt-24 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-secondary border-2 border-foreground rounded-sm p-8 md:p-12 shadow-[8px_8px_0_0_hsl(var(--foreground))] text-center rotate-1"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/70 mb-3">
          {dl.heroButton[lang]}
        </p>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-tight mb-4 leading-tight">
          {dl.ctaTitle[lang]}
        </h2>
        <p className="text-foreground/85 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          {dl.ctaBody[lang]}
        </p>
        <button
          onClick={() => setDlOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-bold uppercase text-sm tracking-wider rounded-sm hover:bg-foreground/85 transition-colors"
        >
          <Download className="w-4 h-4" /> {dl.ctaButton[lang]}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-primary border-2 border-foreground rounded-sm p-8 md:p-12 shadow-[8px_8px_0_0_hsl(var(--foreground))] text-center -rotate-1"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/70 mb-3">
          {t.eyebrow[lang]}
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4 leading-tight">
          {t.title[lang]}
        </h2>
        <p className="text-foreground/85 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          {t.body[lang]}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background font-bold uppercase text-sm tracking-wider rounded-sm hover:bg-foreground/85 transition-colors"
          >
            <Share2 className="w-4 h-4" /> {t.share[lang]}
          </button>
          <a
            href={`mailto:pedro@regulamentei.com.br?subject=${encodeURIComponent(
              t.emailSubject[lang]
            )}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-background/60 border-2 border-foreground text-foreground font-bold uppercase text-sm tracking-wider rounded-sm hover:bg-background/80 transition-colors"
          >
            <Mail className="w-4 h-4" /> {t.suggest[lang]}
          </a>
        </div>
      </motion.div>

      <DownloadGateDialog open={dlOpen} onOpenChange={setDlOpen} />
    </section>
  );
};

export default FinalCTA;
