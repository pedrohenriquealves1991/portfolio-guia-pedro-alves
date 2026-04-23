import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import PromptCard from "./PromptCard";
import type { PromptData } from "@/content/types";

type Caminho = "backoffice" | "produto" | "comum";
type Tipo = "knowledge" | "build" | "debug" | "seguranca";

const tipos: { id: Tipo; label: string; desc: string }[] = [
  { id: "knowledge", label: "Knowledge", desc: "Configuração inicial do agente" },
  { id: "build", label: "Build", desc: "Construir um módulo / executar tarefas" },
  { id: "debug", label: "Debug", desc: "Diagnosticar e corrigir um problema" },
  { id: "seguranca", label: "Segurança", desc: "Corrigir achado da ferramenta nativa" },
];

const caminhos: { id: Caminho; label: string }[] = [
  { id: "comum", label: "Comum" },
  { id: "backoffice", label: "Backoffice" },
  { id: "produto", label: "Produto" },
];

const PromptGenerator = () => {
  const [problema, setProblema] = useState("");
  const [caminho, setCaminho] = useState<Caminho>("comum");
  const [tipo, setTipo] = useState<Tipo>("build");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PromptData | null>(null);

  const handleGenerate = async () => {
    if (!problema.trim() || problema.trim().length < 10) {
      toast.error("Descreva o problema com pelo menos uma frase.");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke("generate-prompt", {
        body: { problema: problema.trim(), caminho, tipo },
      });

      if (error) {
        const msg = (error as { message?: string }).message ?? "";
        if (msg.includes("429")) {
          toast.error("Muitas requisições — aguarde um momento e tente de novo.");
        } else if (msg.includes("402")) {
          toast.error("Créditos de IA esgotados. Adicione créditos em Settings → Workspace → Usage.");
        } else {
          toast.error("Não consegui gerar agora. Tente de novo em instantes.");
        }
        return;
      }

      const generated = (data as { prompt?: string; title?: string })?.prompt;
      const title = (data as { title?: string })?.title ?? "Prompt personalizado";
      if (!generated) {
        toast.error("Resposta vazia da IA — tente reformular.");
        return;
      }
      setResult({
        id: "custom",
        number: 0,
        title,
        when: `Caminho: ${caminho} · Tipo: ${tipo}`,
        body: generated,
      });
      toast.success("Prompt gerado!");
    } catch (e) {
      console.error(e);
      toast.error("Erro inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="gerador"
      className="py-16 md:py-20 px-6 md:px-12 scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 mb-2 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> Gerador com Lovable AI
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
            Gere um prompt sob medida
          </h2>
          <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
            Descreva o que você faz na mão hoje. Em segundos a IA monta um prompt
            no estilo dos 12 acima — pronto para colar no chat do Lovable.
          </p>
        </motion.div>

        <div className="bg-background/50 backdrop-blur-sm border-2 border-foreground rounded-sm p-5 md:p-7 shadow-[6px_6px_0_0_hsl(var(--foreground))] space-y-5">
          <div>
            <label className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
              O que você faz hoje na mão?
            </label>
            <textarea
              value={problema}
              onChange={(e) => setProblema(e.target.value)}
              placeholder="Ex: toda sexta copio dados de 3 planilhas e mando relatório por e-mail para 12 condomínios. Sempre esqueço de algum."
              rows={4}
              className="w-full px-3 py-2 bg-background/70 border-2 border-foreground rounded-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary text-sm leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                Caminho
              </label>
              <div className="flex flex-wrap gap-2">
                {caminhos.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCaminho(c.id)}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm border-2 border-foreground transition-colors ${
                      caminho === c.id
                        ? "bg-foreground text-background"
                        : "bg-background/40 text-foreground hover:bg-foreground/10"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                Tipo de prompt
              </label>
              <div className="flex flex-wrap gap-2">
                {tipos.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTipo(t.id)}
                    title={t.desc}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm border-2 border-foreground transition-colors ${
                      tipo === t.id
                        ? "bg-primary text-foreground"
                        : "bg-background/40 text-foreground hover:bg-primary/40"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background font-display font-bold uppercase tracking-wider rounded-sm hover:bg-foreground/85 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Gerando…
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" /> Gerar prompt personalizado
              </>
            )}
          </button>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6"
          >
            <PromptCard prompt={result} />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PromptGenerator;
