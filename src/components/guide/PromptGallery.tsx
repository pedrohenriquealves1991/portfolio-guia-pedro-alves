import { motion } from "framer-motion";
import { PROMPTS, KNOWLEDGE_PROMPT } from "@/content/prompts";
import PromptCard from "./PromptCard";

const PromptGallery = () => {
  return (
    <section
      id="galeria-prompts"
      className="py-16 md:py-20 px-6 md:px-12 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 mb-2">
            Galeria
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
            12 prompts prontos para copiar
          </h2>
          <p className="text-foreground/75 text-base md:text-lg max-w-2xl leading-relaxed">
            Copie, ajuste o que está entre colchetes e mande. O bloco de Knowledge fica
            no Project Settings — os outros vão direto no chat do Lovable.
          </p>
        </motion.div>

        {/* Knowledge first, full-width */}
        <div className="mb-6">
          <PromptCard prompt={KNOWLEDGE_PROMPT} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROMPTS.map((p) => (
            <PromptCard key={p.id} prompt={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromptGallery;
