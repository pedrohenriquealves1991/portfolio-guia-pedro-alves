import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import type { PromptData } from "@/content/types";

interface PromptCardProps {
  prompt: PromptData;
  compact?: boolean;
}

const PromptCard = ({ prompt, compact = false }: PromptCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.body);
      setCopied(true);
      toast.success("Prompt copiado!", {
        description: `${prompt.title}`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Não foi possível copiar — copie manualmente.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="relative bg-primary border-2 border-foreground rounded-sm shadow-[6px_6px_0_0_hsl(var(--foreground))] hover:shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 p-4 border-b-2 border-foreground">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            {prompt.number > 0 && (
              <span className="font-display font-bold text-sm text-foreground/60">
                #{String(prompt.number).padStart(2, "0")}
              </span>
            )}
            <h4 className="font-display font-bold text-foreground text-base md:text-lg leading-tight">
              {prompt.title}
            </h4>
          </div>
          {prompt.when && (
            <p className="text-xs text-foreground/70 mt-1 italic">{prompt.when}</p>
          )}
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copiar prompt"
          className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-foreground text-background text-xs font-bold uppercase tracking-wider hover:bg-foreground/85 transition-colors rounded-sm"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre
        className={`px-4 py-3 text-foreground/90 whitespace-pre-wrap font-mono text-[13px] leading-relaxed ${
          compact ? "max-h-40 overflow-hidden" : ""
        }`}
        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace" }}
      >
        {prompt.body}
      </pre>
    </motion.div>
  );
};

export default PromptCard;
