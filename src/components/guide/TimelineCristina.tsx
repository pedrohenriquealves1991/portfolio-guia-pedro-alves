import { motion } from "framer-motion";
import { Check, Circle } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

interface PhaseItem {
  text: string;
  done: boolean;
}

const planejamento: PhaseItem[] = [
  { text: "Dois áudios da Dinda → transcrição → análise do diferencial real", done: true },
  { text: "Perguntas de descoberta → respostas → perfil do negócio definido", done: true },
  { text: "Mensagem para a Dinda validando os módulos do sistema", done: true },
  { text: "Masterplan v1 → v2 → v3", done: true },
  { text: "Entidades e relacionamentos definidos", done: true },
  { text: "15 fluxos de UX mapeados", done: true },
  { text: "RULES.md com 13 seções de regras de código", done: true },
  { text: "05-dados.md com 24 tabelas, triggers e edge functions", done: true },
  { text: "06-seguranca.md com RLS por perfil e procedimentos LGPD", done: true },
  { text: "07-governanca.md com 26 regras de negócio e 9 decisões", done: true },
  { text: "08-implementacao.md com 15 fases e ~65 tarefas", done: true },
  { text: "04-jornadas.md com 3 jornadas e mapa de navegação", done: true },
  { text: "CLAUDE.md", done: true },
  { text: "Identidade visual com Claude Design + 03-design.md", done: true },
  { text: "13 documentos de processo (02-processos/)", done: true },
];

const build: PhaseItem[] = [
  { text: "Criar projeto + conectar GitHub", done: true },
  { text: "Subir 22 documentos", done: true },
  { text: "Configurar Knowledge", done: true },
  { text: "Grupo 0: banco + auth + layout (com erro corrigido)", done: true },
  { text: "Grupo 1: condomínios (wizard 5 etapas)", done: true },
  { text: "Grupo 2: unidades, moradores e autocadastro", done: true },
  { text: "Grupo 3: funcionários", done: true },
  { text: "Grupo 4: fornecedores e contratos", done: true },
  { text: "Grupo 5: manutenções preventivas", done: true },
  { text: "Grupo 6: log de ocorrências", done: true },
  { text: "Grupo 7: tarefas", done: true },
  { text: "Grupo 8: honorários", done: true },
  { text: "Grupo 9: documentos", done: true },
  { text: "Grupo 10: comunicados (Twilio + Resend)", done: false },
  { text: "Grupo 11: portal do condômino", done: true },
  { text: "Grupos 12–15: refinamentos e relatórios", done: true },
  { text: "Configuração de domínio e Resend", done: false },
  { text: "Testes com a usuária real (a Dinda)", done: false },
  { text: "Deploy final", done: false },
];

interface ErrorCardProps {
  title: string;
  summary: string;
  body: string;
}

const errorCards: ErrorCardProps[] = [
  {
    title: "Arquitetura multi-tenant vs single-tenant",
    summary: "Premissa errada no masterplan criou rota pública de cadastro num sistema que era single-tenant.",
    body: `Durante o Grupo 0 (autenticação), o sistema foi construído com uma tela pública /cadastro que permitia criar a conta da empresa. Funciona em sistemas multi-tenant — onde vários clientes diferentes usam o mesmo banco. Mas o Amaro é single-tenant: cada instância do projeto é de uma empresa só.

O bug latente: qualquer pessoa que descobrisse a URL /cadastro poderia criar uma segunda empresa no banco. A causa raiz foi uma premissa errada no masterplan — o sistema foi descrito como multi-tenant sem que essa decisão fosse explicitada.

A solução foi elegante: substituir /cadastro por /onboarding-empresa, uma rota que se auto-desabilita. No carregamento, ela verifica se já existe alguma empresa no banco. Se sim, redireciona para /login.

Lição: a decisão de single-tenant vs multi-tenant precisa estar explícita no masterplan e no 07-governanca.md antes de construir qualquer coisa de autenticação.`,
  },
  {
    title: "3 bugs no primeiro uso real",
    summary: "Botão sem destaque visual, validação esquecida, multi-insert sem transação.",
    body: `O sistema foi publicado, o desenvolvedor fez login e tentou cadastrar o primeiro condomínio. Na etapa 5, "Não foi possível salvar. Tente novamente." Sem mais detalhes.

Bug 1 — Visual: o botão "Pendente" não mostrava destaque visual ao ser selecionado. Estilo inconsistente entre os três estados.

Bug 2 — Validação: campos de telefone aceitavam qualquer sequência. A máscara existia mas foi esquecida nesta etapa específica. Causa raiz: máscara implementada caso a caso em vez de via componente reutilizável.

Bug 3 — Arquitetura: o wizard fazia inserções em 7 tabelas em sequência sem transação. Se qualquer etapa falhasse, o condomínio ficava criado parcialmente. Erro mascarado: o código tentava ler err.message diretamente, caindo sempre no fallback genérico.

Duas regras novas no RULES.md:
• Multi-insert sempre via edge function com transação ou cleanup explícito
• Toda mensagem de erro do Supabase deve ser propagada ao usuário`,
  },
  {
    title: "5 divergências entre código e banco",
    summary: "Constraints do banco e constantes de código eram duas fontes de verdade que ninguém alinhou.",
    body: `Depois que os 3 bugs iniciais foram corrigidos, o cadastro ainda falhava. O prompt foi diferente: pedido de revisão extensiva. O Lovable encontrou 5 divergências:

1. Campo com valor inválido — "semanal" enviado para tabela que aceitava apenas mensal | bimestral | trimestral | semestral | anual.
2. Status errado — "aberta" enviado, mas constraint era a_fazer | em_andamento | concluida | cancelada.
3. Enum desalinhado — "botijao_coletivo" no frontend, banco aceitava encanado | botijao | sem_gas.
4. Slug único global vs por empresa — código verificava unicidade por empresa_id, banco tinha UNIQUE GLOBAL.
5. Duas fontes de verdade paralelas — edge function tinha mapa interno e ignorava o template.

Regra nova no RULES.md: toda inserção em tabela com CHECK constraint precisa estar coberta por teste E2E. Antes de criar edge function que escreve em N tabelas, listar todos os checks dessas tabelas no topo do arquivo como constantes.`,
  },
];

const PhaseColumn = ({
  title,
  items,
}: {
  title: string;
  items: PhaseItem[];
}) => (
  <div>
    <h3 className="font-display font-bold text-xl text-foreground mb-4 uppercase tracking-wider">
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center ${
              it.done ? "bg-primary" : "bg-background/40"
            }`}
          >
            {it.done ? (
              <Check className="w-3 h-3 text-foreground" />
            ) : (
              <Circle className="w-2 h-2 text-foreground/40" />
            )}
          </span>
          <span
            className={`text-sm leading-relaxed ${
              it.done ? "text-foreground/85" : "text-foreground/55"
            }`}
          >
            {it.text}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const ErrorCard = ({ title, summary, body, idx }: ErrorCardProps & { idx: number }) => {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();
  const badgeLabel = translations.timelineCristina.errorBadge[lang].replace(
    "{n}",
    String(idx + 1)
  );
  const rotate = idx % 2 === 0 ? "-rotate-[0.4deg]" : "rotate-[0.4deg]";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className={`bg-card border-2 border-foreground rounded-sm shadow-[5px_5px_0_0_hsl(var(--foreground))] ${rotate}`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-5 flex items-start justify-between gap-3"
      >
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 mb-1">
            {badgeLabel}
          </p>
          <h4 className="font-display font-bold text-lg text-card-foreground mb-1">
            {title}
          </h4>
          <p className="text-sm text-card-foreground/75">{summary}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 mt-1 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-foreground/15">
          <pre className="text-sm text-card-foreground/85 leading-relaxed whitespace-pre-wrap font-sans">
            {body}
          </pre>
        </div>
      )}
    </motion.div>
  );
};

const TimelineCristina = () => {
  const { lang } = useLanguage();
  const t = translations.timelineCristina;
  return (
    <section
      id="timeline-cristina"
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
            {t.eyebrow[lang]}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
            Amaro - Gestão Condominial
          </h2>
          <p className="text-foreground/75 text-base md:text-lg max-w-2xl leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: t.intro[lang] }} />{" "}
            <a
              href="https://amarogestaocondominial.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 underline-offset-2 hover:text-primary transition-colors font-semibold"
            >
              {t.liveLink[lang]}
            </a>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <PhaseColumn title={t.colPlanning[lang]} items={planejamento} />
          <PhaseColumn title={t.colBuild[lang]} items={build} />
        </div>

        <div className="space-y-4">
          <h3 className="font-display font-bold text-2xl text-foreground mb-2">
            {t.errorsTitle[lang]}
          </h3>
          {errorCards.map((e, i) => (
            <ErrorCard key={i} {...e} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineCristina;
