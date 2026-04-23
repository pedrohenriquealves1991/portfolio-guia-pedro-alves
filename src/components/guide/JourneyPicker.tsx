import { motion } from "framer-motion";
import { Briefcase, Globe, Sparkles } from "lucide-react";
import { useJourney, type Filter } from "@/content/journey-store";

const options: { id: Filter; title: string; sub: string; icon: typeof Briefcase; rotate: string }[] = [
  {
    id: "all",
    title: "Mostrar tudo",
    sub: "Sigo todo o guia, dos dois caminhos",
    icon: Sparkles,
    rotate: "-rotate-1",
  },
  {
    id: "backoffice",
    title: "Organizar processo interno",
    sub: "Backoffice, uso pessoal ou da equipe — ninguém de fora acessa",
    icon: Briefcase,
    rotate: "rotate-[1deg]",
  },
  {
    id: "produto",
    title: "Criar produto com usuários externos",
    sub: "Clientes, parceiros ou público vão acessar",
    icon: Globe,
    rotate: "-rotate-[1.5deg]",
  },
];

const JourneyPicker = () => {
  const [current, setFilter] = useJourney();

  return (
    <section id="bifurcacao" className="py-16 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 mb-2">
            Bifurcação de jornada
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            O que você está tentando fazer?
          </h2>
          <p className="mt-3 text-foreground/70 text-base md:text-lg max-w-xl mx-auto">
            Escolha um caminho para filtrar as seções. Você pode alternar a qualquer momento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {options.map((opt, idx) => {
            const Icon = opt.icon;
            const active = current === opt.id;
            return (
              <motion.button
                key={opt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setFilter(opt.id)}
                className={`text-left ${opt.rotate} hover:rotate-0 transition-all duration-300 p-6 border-2 border-foreground rounded-sm shadow-[6px_6px_0_0_hsl(var(--foreground))] hover:shadow-[3px_3px_0_0_hsl(var(--foreground))] hover:translate-x-[3px] hover:translate-y-[3px] ${
                  active
                    ? "bg-primary"
                    : "bg-card hover:bg-primary/80"
                }`}
              >
                <Icon className="w-7 h-7 mb-3 text-foreground" />
                <h3 className="font-display font-bold text-xl text-foreground mb-1 leading-tight">
                  {opt.title}
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{opt.sub}</p>
                {active && (
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/70 mt-3">
                    ✓ Selecionado
                  </p>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyPicker;
