import { motion } from "framer-motion";
import { Mail, Share2 } from "lucide-react";
import { toast } from "sonner";

const FinalCTA = () => {
  const handleShare = async () => {
    const url = window.location.origin + "/";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Um Guia Sincero de Vibe Coding",
          text: "Guia pessoal sobre usar IA para construir sistemas reais.",
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("Link copiado para a área de transferência!");
      }
    } catch {
      // user cancelled
    }
  };

  return (
    <section id="cta-final" className="py-20 px-6 md:px-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-primary border-2 border-foreground rounded-sm p-8 md:p-12 shadow-[8px_8px_0_0_hsl(var(--foreground))] text-center -rotate-1"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/70 mb-3">
          Este guia é vivo
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4 leading-tight">
          Vai melhorar com o tempo.
        </h2>
        <p className="text-foreground/85 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Cada etapa concluída no SíndicaPro vira conteúdo novo aqui.
          Manda para um amigo que está começando — ou abre o e-mail se tem
          uma sugestão.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background font-bold uppercase text-sm tracking-wider rounded-sm hover:bg-foreground/85 transition-colors"
          >
            <Share2 className="w-4 h-4" /> Enviar para um amigo
          </button>
          <a
            href="mailto:pedro@regulamentei.com.br?subject=Sugestão para o Guia de Vibe Coding"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-background/60 border-2 border-foreground text-foreground font-bold uppercase text-sm tracking-wider rounded-sm hover:bg-background/80 transition-colors"
          >
            <Mail className="w-4 h-4" /> Mandar sugestão
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
