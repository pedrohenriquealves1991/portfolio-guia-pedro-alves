import type { ToolData } from "./types";

export const TOOLS: ToolData[] = [
  {
    id: "claude",
    name: "Claude (Anthropic)",
    role: "Onde você pensa e planeja antes de construir",
    detail:
      "Use em Projetos — não em chats avulsos. Num Projeto, os arquivos ficam acessíveis entre sessões e o Claude mantém contexto. Foi consistentemente melhor que ChatGPT, Gemini e DeepSeek em manter contexto longo.",
  },
  {
    id: "lovable",
    name: "Lovable",
    role: "Transforma descrição em código",
    detail:
      "Não é só um gerador — é um ambiente de desenvolvimento controlado por linguagem natural. A integração com banco de dados é o maior ganho. Dois modos: Plan (planeja antes de executar) e Build (vai construindo direto).",
    link: "https://lovable.dev/invite/EY1SRDR",
  },
  {
    id: "supabase",
    name: "Supabase / Lovable Cloud",
    role: "Onde os dados ficam guardados",
    detail:
      "Use o Lovable Cloud — não tente conectar o Supabase manualmente. Configurar tabelas SQL, RLS e relacionamentos é trabalho de DBA. O Lovable faz quando você descreve em português.",
  },
  {
    id: "github",
    name: "GitHub",
    role: "Histórico do código",
    detail:
      "Pense como Google Drive para código: guarda versões, permite voltar atrás, conecta ao Claude Code. Conecte desde o primeiro dia — dois cliques nas configurações do Lovable.",
  },
  {
    id: "vercel",
    name: "Vercel",
    role: "Onde o site fica publicado",
    detail: "O Lovable usa automaticamente. Você não precisa mexer nisso.",
  },
  {
    id: "resend",
    name: "Resend",
    role: "E-mails automáticos",
    detail:
      "Manda e-mails quando algo acontece: cadastro, alerta, senha esquecida. Gratuito até 1.000/mês. Precisa de domínio próprio + DNS configurado, senão e-mails vão para spam.",
  },
  {
    id: "twilio",
    name: "Twilio",
    role: "WhatsApp e SMS",
    detail:
      "Mensagens proativas no WhatsApp exigem templates pré-aprovados pela Meta. Submissão leva dias — planeje antes do lançamento.",
  },
  {
    id: "firecrawl",
    name: "Firecrawl",
    role: "Leitura automática de sites",
    detail:
      "Coleta dados de páginas sem copiar manualmente. Sites com login ou layout que muda quebram o crawler.",
  },
  {
    id: "lovable-ai",
    name: "Lovable AI (agente interno)",
    role: "IA personalizada dentro do seu sistema",
    detail:
      "Você define o que ela sabe e o que faz. Casos de uso reais: chatbot que cruza dados do banco, extração de PDFs para preencher formulários. Uma das funcionalidades mais poderosas e menos exploradas.",
  },
  {
    id: "lovable-payments",
    name: "Lovable Payments",
    role: "Cobrar usuários no sistema",
    detail:
      "Ative pelo chat do Lovable. O CNPJ vinculado é responsabilidade legal sua. MEI com CNAE de TI funciona, mas tem implicações tributárias.",
  },
];

export function getTool(id: string): ToolData | undefined {
  return TOOLS.find((t) => t.id === id);
}
