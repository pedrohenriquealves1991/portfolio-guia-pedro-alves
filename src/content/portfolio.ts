import type { Language } from "@/i18n/translations";

export type L = Record<Language, string>;
export type LList = Record<Language, string[]>;

export const EMAIL = "pedrophalves@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/pedrophalves";
export const GITHUB = "https://github.com/pedrohenriquealves1991";

export const nav = {
  work: { pt: "Projetos", en: "Work" },
  background: { pt: "Trajetória", en: "Background" },
  contact: { pt: "Contato", en: "Contact" },
} satisfies Record<string, L>;

export const hero = {
  title: {
    pt: "Pedro Alves",
    en: "Pedro Alves",
  },
  subtitle: {
    pt: "AI & Automation Specialist · Experiência em qualidade e regulatório",
    en: "AI & Automation Specialist · Quality and regulatory background",
  },
  lead: {
    pt: "Construo ferramentas internas que tiram o trabalho manual das rotinas de backoffice e governança e ajudam o time comercial a vender mais. Exemplos recentes: qualificação de fornecedores, análise de licitações, documentos comerciais e captação de leads. Sete anos em qualidade e regulatório de dispositivos médicos.",
    en: "I build internal tools that take manual work out of back-office and governance routines and help sales teams sell more. Recent examples: supplier qualification, tender analysis, commercial documents and lead capture. Seven years in medical-device quality and regulatory affairs.",
  },
  facts: {
    pt: [
      "Porto Alegre, Brasil",
      "Aberto a relocação",
      "Português nativo · Inglês C1 · Espanhol leitura",
    ],
    en: [
      "Porto Alegre, Brazil",
      "Open to relocation",
      "Portuguese native · English C1 · Spanish reading",
    ],
  } satisfies LList,
  links: {
    work: { pt: "Ver projetos", en: "See work" },
    contact: { pt: "Contato", en: "Contact" },
  },
};

export type ProjectStatus = "live" | "production" | "paused";

export interface Project {
  id: string;
  status: ProjectStatus;
  statusLabel: L;
  role: L;
  problem: L;
  built: L;
  outcome: L;
  stack: string[];
  url?: string;
  urlNote?: L;
  image?: string;
  video?: string;
  imageAlt: L;
}

export const projectNames: Record<string, L> = {
  mirada: { pt: "Mirada Search AI", en: "Mirada Search AI" },
  tenders: {
    pt: "Inteligência de licitações",
    en: "Tender intelligence",
  },
  suppliers: {
    pt: "Qualificação de fornecedores",
    en: "Supplier qualification platform",
  },
  cubage: { pt: "Calculadora de cubagem", en: "Shipping cubage calculator" },
};

export const projects: Project[] = [
  {
    id: "mirada",
    status: "live",
    statusLabel: { pt: "No ar · em validação de mercado", en: "Live · in market validation" },
    role: { pt: "Fundador · produto e build", en: "Founder · product and build" },
    problem: {
      pt: "Os dados de dispositivos médicos da Anvisa ficam espalhados em portais. Descobrir quem detém um registro, quem importa um produto e se ele ainda vale levava horas.",
      en: "Anvisa device data is scattered across portals. Finding who holds a registration, who imports a product and whether it is still valid took hours.",
    },
    built: {
      pt: "Toda a base de dispositivos da Anvisa numa busca, atualizada diariamente, com dados de empresas via Firecrawl, login Google e 7 dias de teste. Escrevi o PRD, construí em Lovable e Supabase e usei replays do LogRocket para corrigir o abandono no cadastro.",
      en: "The full Anvisa device database in one search, updated daily, with company data from Firecrawl, Google sign-in and a 7-day trial. I wrote the PRD, built it on Lovable and Supabase and used LogRocket replays to fix sign-up drop-off.",
    },
    outcome: {
      pt: "Uma busca substitui horas de pesquisa em portais. Lancei no LinkedIn; está em validação de mercado, ainda sem clientes pagantes.",
      en: "One search replaces hours of portal research. I launched it on LinkedIn; it is in market validation, no paying customers yet.",
    },
    stack: ["Lovable", "Supabase", "Firecrawl", "LogRocket", "Claude Code"],
    url: "https://miradasearch.com",
    image: "/work/mirada.png",
    imageAlt: {
      pt: "Página inicial do Mirada Search com a busca na base da Anvisa",
      en: "Mirada Search home page with the Anvisa database search",
    },
  },
  {
    id: "tenders",
    status: "production",
    statusLabel: { pt: "Em produção", en: "In production" },
    role: { pt: "Especificação, build e implantação · Angiolux", en: "Spec, build and rollout · Angiolux" },
    problem: {
      pt: "Pregões listam dezenas de itens em texto livre. O comercial gastava horas por pregão cruzando itens com o catálogo e ainda deixava passar incompatibilidades.",
      en: "Tenders list dozens of items in free text. Sales spent hours per tender matching them against the catalogue and still missed mismatches.",
    },
    built: {
      pt: "Um agente lê o pregão, cruza cada item com o catálogo via API e publica no CRM um relatório estruturado com erros sinalizados. Um monitor em dias úteis varre o Diário Oficial e os portais de dois grupos hospitalares públicos e envia só o que é relevante.",
      en: "An agent reads the tender, matches each item against the catalogue via API and posts a structured report with flagged errors in the CRM. A weekday monitor scans the official gazette and two public hospital-group portals and sends only relevant tenders.",
    },
    outcome: {
      pt: "A etapa manual de cruzamento acabou: o relatório aponta incompatibilidades antes do lance e a equipe começa pela precificação.",
      en: "The manual matching step is gone: the report flags mismatches before the bid, so the team starts at pricing.",
    },
    stack: ["Claude", "Lovable", "Supabase", "CRM integration"],
    url: "https://angiolux.com.br/consulta-licitacao",
    image: "/work/tenders.png",
    video: "/work/tenders.mp4",
    imageAlt: {
      pt: "Formulário público da IA de Pregões no site da Angiolux",
      en: "Public form of the tender-matching tool on the Angiolux website",
    },
  },
  {
    id: "suppliers",
    status: "production",
    statusLabel: { pt: "Em produção", en: "In production" },
    role: { pt: "Dono do processo, especificação e build · Angiolux", en: "Process owner, spec and build · Angiolux" },
    problem: {
      pt: "Qualificar 75 fornecedores conforme a RDC 665/2022 rodava em e-mail e planilha: cerca de uma semana de trabalho por mês.",
      en: "Qualifying 75 suppliers under RDC 665/2022 ran on email and spreadsheets: about a week of work every month.",
    },
    built: {
      pt: "Assistente de cadastro em autoatendimento, detecção automática de documentos vencendo, pedidos de renovação com link de upload, registro atualizado no envio, integrado ao CRM.",
      en: "Self-service onboarding wizard, automatic detection of expiring documents, renewal requests with upload links, records updated on submission, linked to the CRM.",
    },
    outcome: {
      pt: "De cerca de uma semana por mês para umas quatro horas. 50 a 60% dos fornecedores já sobem os próprios documentos.",
      en: "From roughly a week a month to about four hours. 50 to 60% of suppliers now upload their own documents.",
    },
    stack: ["Lovable", "Supabase", "Automation", "CRM integration"],
    url: "https://angiolux.com.br/qualificacao",
    image: "/work/suppliers.png",
    video: "/work/suppliers.mp4",
    imageAlt: {
      pt: "Assistente de qualificação de agentes em seis etapas",
      en: "Six-step agent qualification wizard",
    },
  },
  {
    id: "cubage",
    status: "production",
    statusLabel: { pt: "Em produção · em implantação", en: "In production · rolling out" },
    role: { pt: "Catalogação, especificação e build · Angiolux", en: "Cataloguing, spec and build · Angiolux" },
    problem: {
      pt: "Toda cotação de frete precisa do número de volumes e do peso do pedido. A equipe calculava por tentativa e erro, montando as caixas na mão: cerca de 15 minutos por pedido, em uns 50 pedidos por mês.",
      en: "Every freight quote needs the order's package count and weight. The team worked them out by trial and error, fitting products into boxes by hand: about 15 minutes per order, on roughly 50 orders a month.",
    },
    built: {
      pt: "Primeiro catalogei as dimensões e o peso de todos os produtos e de todas as caixas secundárias e terciárias padronizadas. Sobre esse catálogo, um app lê o PDF do pedido, mostra os itens extraídos para conferência e devolve as caixas, o peso total e os volumes, em texto pronto para a transportadora do cliente.",
      en: "First I catalogued the dimensions and weight of every product and every standard secondary and tertiary box. On that catalogue, a web app reads the order PDF, shows the extracted items for confirmation and returns which boxes to use, total weight and package count, as text ready for the customer's carrier.",
    },
    outcome: {
      pt: "Economiza cerca de 15 minutos por pedido (estimativa). Em implantação com quem cobre a expedição.",
      en: "Saves about 15 minutes per order (estimate). Now rolling out to the people who cover shipping.",
    },
    stack: ["Claude Code", "Lovable", "Supabase"],
    image: "/work/cubage.png",
    video: "/work/cubage.mp4",
    imageAlt: {
      pt: "Calculadora de cubagem lendo o PDF de um pedido e devolvendo caixas, peso e volumes",
      en: "Cubage calculator reading an order PDF and returning boxes, weight and package count",
    },
  },
];

export const smallerWork = {
  title: { pt: "Automações menores", en: "Smaller automations" },
  items: [
    {
      title: { pt: "Gerador de cartas de comercialização", en: "Commercial letter generator" },
      body: {
        pt: "Distribuidor, produto e região entram; a carta final sai, sem digitação.",
        en: "Distributor, product and region in; the final letter out, no typing.",
      },
      metric: { pt: "De 40 min para 2 min por carta", en: "From 40 min to 2 min per letter" },
    },
    {
      title: { pt: "XML de nota fiscal para CSV", en: "Invoice XML to CSV" },
      body: {
        pt: "Parser em Python que alimenta a importação do sistema de estoque.",
        en: "Python parser feeding the inventory-system import.",
      },
      metric: { pt: "Zero redigitação", en: "Zero manual re-entry" },
    },
    {
      title: { pt: "Página de documentos e catálogo", en: "Catalogue and documents page" },
      body: {
        pt: "Substituiu o Linktree e captura o contato antes do download.",
        en: "Replaced Linktree and captures contact data before download.",
      },
      metric: {
        pt: "Leads orgânicos que o comercial converteu em vendas",
        en: "Organic leads that sales turned into orders",
      },
    },
  ],
};

export const sections = {
  work: {
    label: { pt: "Projetos selecionados", en: "Selected work" },
    title: {
      pt: "Ferramentas que substituíram trabalho manual em operações reguladas.",
      en: "Tools that replaced manual work in regulated operations.",
    },
    problem: { pt: "Problema", en: "Problem" },
    built: { pt: "O que construí", en: "What I built" },
    outcome: { pt: "Resultado", en: "Outcome" },
    stack: { pt: "Stack", en: "Stack" },
    open: { pt: "Abrir", en: "Open" },
  },
  background: {
    label: { pt: "Trajetória", en: "Background" },
    title: {
      pt: "Sete anos em qualidade e regulatório de dispositivos médicos.",
      en: "Seven years in medical-device quality and regulatory.",
    },
    timeline: [
      {
        period: { pt: "2021 a hoje", en: "2021 to present" },
        org: "Angiolux",
        orgNote: { pt: "importador e distribuidor", en: "importer and distributor" },
        role: {
          pt: "Analista de Regulatório e Qualidade · Farmacêutico Responsável",
          en: "Quality & Regulatory Affairs Analyst · Responsible Pharmacist",
        },
        body: {
          pt: "Registro de dispositivos classes I a IV, sistema ISO 13485, CAPA, auditorias, reclamações e pós-mercado.",
          en: "Registration of Class I to IV devices, ISO 13485 quality system, CAPA, audits, complaints and post-market surveillance.",
        },
      },
      {
        period: { pt: "2024 a hoje", en: "2024 to present" },
        org: "Regulamentei",
        orgNote: { pt: "consultoria regulatória", en: "regulatory consulting" },
        role: { pt: "Fundador", en: "Founder" },
        body: {
          pt: "Licenciamento ANVISA e implantação de sistemas da qualidade para empresas clientes. Origem do Mirada Search AI.",
          en: "ANVISA licensing and quality-system set-up for client companies. Mirada Search AI started here.",
        },
      },
      {
        period: { pt: "2018 a 2021", en: "2018 to 2021" },
        org: "Fleury · Kley Hertz · Panvel",
        orgNote: { pt: "diagnóstico, farmacêutica e varejo", en: "diagnostics, pharma and pharmacy retail" },
        role: { pt: "Assuntos regulatórios e farmácia", en: "Regulatory affairs and pharmacy roles" },
        body: {
          pt: "Regulatório em diagnóstico e indústria farmacêutica, depois farmácia.",
          en: "Regulatory work in diagnostics and pharma, then community pharmacy.",
        },
      },
      {
        period: { pt: "2016 a 2018", en: "2016 to 2018" },
        org: "Vision Hitech",
        orgNote: { pt: "fabricante, 16 pessoas", en: "manufacturer, 16 people" },
        role: {
          pt: "Qualidade e Regulatório · Farmacêutico Responsável",
          en: "Quality & Regulatory Affairs Officer · Responsible Pharmacist",
        },
        body: {
          pt: "Revisões de projeto, documentação de projeto, verificação na linha, transferência para produção e validação de esterilização (ISO 17665). Certificação ISO 13485. Registros para exportação em seis países.",
          en: "Design reviews, design documentation, verification on the line, design transfer and sterilisation validation (ISO 17665). ISO 13485 certification. Export registrations in six countries.",
        },
      },
    ],
    educationLabel: { pt: "Formação", en: "Education" },
    education: {
      pt: [
        "Farmácia, UFRGS, 2009 a 2016",
        "Pós-graduação em Assuntos Regulatórios, Instituto Racine, 2018 a 2019",
      ],
      en: [
        "Bachelor's in Pharmacy, UFRGS, 2009 to 2016",
        "Postgraduate in Regulatory Affairs, Instituto Racine, 2018 to 2019",
      ],
    } satisfies LList,
    domainLabel: { pt: "Domínio", en: "Domain" },
    domain: [
      "ISO 13485",
      "ISO 14971",
      "ISO 15223-1",
      "ISO 17665",
      "GMP",
      "RDC 665/2022",
      "RDC 751/2022",
      "EU MDR (working knowledge)",
      "Design controls",
      "Technical files",
      "CAPA",
      "Supplier qualification",
      "Post-market surveillance",
    ],
    toolsLabel: { pt: "Ferramentas", en: "Tools" },
    tools: [
      "Claude Code",
      "Claude",
      "Codex",
      "Lovable",
      "Supabase (Postgres, RLS, edge functions)",
      "Python",
      "Firecrawl",
      "LogRocket",
      "Microsoft 365 / SharePoint",
    ],
    methodsLabel: { pt: "Métodos", en: "Methods" },
    methods: {
      pt: [
        "Levantamento de requisitos",
        "Mapeamento de processos",
        "Análise de lacunas",
        "PRD e casos de uso",
        "Gestão de stakeholders",
        "Revisão de usabilidade",
      ],
      en: [
        "Requirements gathering",
        "Process mapping",
        "Gap analysis",
        "PRD and use-case specs",
        "Stakeholder management",
        "Usability review",
      ],
    } satisfies LList,
  },
  contact: {
    label: { pt: "Contato", en: "Contact" },
    title: {
      pt: "Procuro funções que juntem conhecimento de domínio e construção de ferramentas.",
      en: "I'm looking for roles that combine domain expertise and hands-on building.",
    },
    body: {
      pt: "Automação e enablement com IA, backoffice e governança, apoio ao comercial, qualidade e regulatório. Em inglês ou português, presencial com relocação ou remoto.",
      en: "AI automation and enablement, back-office and governance, sales enablement, quality and regulatory. In English or Portuguese, on site with relocation or remote.",
    },
  },
  footer: {
    rights: { pt: "© 2026 Pedro Henrique Vieira Alves", en: "© 2026 Pedro Henrique Vieira Alves" },
    built: {
      pt: "Construído com Lovable, Claude Code e Supabase · código no GitHub",
      en: "Built with Lovable, Claude Code and Supabase · source on GitHub",
    },
  },
};
