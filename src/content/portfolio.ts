import type { Language } from "@/i18n/translations";

export type L = Record<Language, string>;
export type LList = Record<Language, string[]>;

export const CV_PATH = "/Pedro_Alves_CV.pdf";
export const EMAIL = "pedrophalves@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/pedrophalves";
export const GITHUB = "https://github.com/pedrohenriquealves1991";

export const nav = {
  work: { pt: "Projetos", en: "Work" },
  process: { pt: "Como trabalho", en: "How I work" },
  background: { pt: "Trajetória", en: "Background" },
  contact: { pt: "Contato", en: "Contact" },
  cv: { pt: "Currículo", en: "CV" },
} satisfies Record<string, L>;

export const hero = {
  eyebrow: {
    pt: "Qualidade e regulatório de dispositivos médicos · fluxos com IA",
    en: "Medical device quality & regulatory · AI workflows",
  },
  title: {
    pt: "Especialista em qualidade e regulatório de dispositivos médicos que constrói as próprias ferramentas de IA.",
    en: "Medtech quality and regulatory expert who builds the AI workflows himself.",
  },
  lead: {
    pt: "Farmacêutico com dez anos na cadeia de dispositivos médicos: fabricante, exportador, importador e distribuidor, classes I a IV. Desde 2024 mapeio o processo com quem o executa, escrevo a especificação e entrego a ferramenta com Claude Code, Lovable e Supabase.",
    en: "Pharmacist with ten years across the medical-device chain: manufacturer, exporter, importer and distributor, Class I to IV. Since 2024 I map a process with the people who run it, write the specification and ship the tool with Claude Code, Lovable and Supabase.",
  },
  facts: {
    pt: [
      "Porto Alegre, Brasil",
      "Aberto a relocação · Berlim",
      "Elegível ao EU Blue Card",
      "Português nativo · Inglês C1 · Espanhol leitura",
    ],
    en: [
      "Porto Alegre, Brazil",
      "Open to relocation · Berlin",
      "EU Blue Card eligible",
      "Portuguese native · English C1 · Spanish reading",
    ],
  } satisfies LList,
  ctaCv: { pt: "Baixar currículo (PDF)", en: "Download CV (PDF)" },
  ctaLinkedin: { pt: "LinkedIn", en: "LinkedIn" },
  ctaEmail: { pt: "E-mail", en: "Email" },
  proof: [
    {
      value: { pt: "1 semana → 4 h", en: "1 week → 4 h" },
      label: {
        pt: "trabalho mensal de qualificação de 75 fornecedores",
        en: "monthly upkeep for 75 supplier qualifications",
      },
    },
    {
      value: { pt: "40 min → 2 min", en: "40 min → 2 min" },
      label: {
        pt: "por carta de comercialização emitida",
        en: "per commercial letter issued",
      },
    },
    {
      value: { pt: "No ar, pago", en: "Live, paid" },
      label: {
        pt: "Mirada Search AI, busca na base Anvisa",
        en: "Mirada Search AI, search over the Anvisa database",
      },
    },
  ],
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
  regulamentei: { pt: "Regulamentei SGQ", en: "Regulamentei SGQ" },
};

export const projects: Project[] = [
  {
    id: "mirada",
    status: "live",
    statusLabel: { pt: "No ar · produto pago", en: "Live · paid product" },
    role: { pt: "Fundador · produto e build", en: "Founder · product and build" },
    problem: {
      pt: "Os dados de dispositivos médicos da Anvisa ficam espalhados em portais. Descobrir quem detém um registro, quem importa um produto e se ele ainda vale levava horas.",
      en: "Anvisa device data is scattered across portals. Finding who holds a registration, who imports a product and whether it is still valid took hours.",
    },
    built: {
      pt: "Toda a base da Anvisa numa busca, atualizada diariamente, com enriquecimento de empresas via Firecrawl, login Google, 7 dias de teste e plano pago. PRD, build em Lovable e Supabase, replays do LogRocket para corrigir o abandono no cadastro.",
      en: "The full Anvisa database in one search, updated daily, with company enrichment via Firecrawl, Google sign-in, a 7-day trial and a paid plan. PRD, build on Lovable and Supabase, LogRocket replays to fix sign-up drop-off.",
    },
    outcome: {
      pt: "Horas de pesquisa viraram segundos. Usado por compradores hospitalares, distribuidores e fabricantes estrangeiros buscando parceiros locais.",
      en: "Hours of research became seconds. Used by hospital buyers, distributors and foreign manufacturers looking for local partners.",
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
    statusLabel: { pt: "Em produção · uso diário", en: "In production · daily use" },
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
      pt: "A fase de pesquisa sumiu; a equipe começa na estratégia de preço. Menos erros nas propostas, adoção imediata.",
      en: "Research phase gone; the team starts at pricing. Fewer bidding errors, immediate adoption.",
    },
    stack: ["Claude", "Lovable", "Supabase", "CRM integration"],
    url: "https://angiolux.com.br/consulta-licitacao",
    image: "/work/tenders.png",
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
      pt: "De cerca de uma semana por mês para quatro horas. Metade dos fornecedores já sobe os próprios documentos.",
      en: "From roughly a week a month to about four hours. Half of the suppliers now upload their own documents.",
    },
    stack: ["Lovable", "Supabase", "Automation", "CRM integration"],
    url: "https://angiolux.com.br/qualificacao",
    image: "/work/suppliers.png",
    imageAlt: {
      pt: "Assistente de qualificação de agentes em seis etapas",
      en: "Six-step agent qualification wizard",
    },
  },
  {
    id: "regulamentei",
    status: "paused",
    statusLabel: { pt: "Pausado · em reconstrução", en: "Paused · being rebuilt" },
    role: { pt: "Fundador", en: "Founder" },
    problem: {
      pt: "Distribuidores pequenos precisam de um sistema da qualidade alinhado à ISO 13485 para as RDC 665/2022 e 751/2022, mas operam em papel e planilha.",
      en: "Small device distributors need an ISO 13485-aligned quality system for RDC 665/2022 and 751/2022, but run it on paper and spreadsheets.",
    },
    built: {
      pt: "Validado com protótipo navegável e conversas de descoberta; build iniciado: controle de documentos, aprovações, CAPA, inspeções, auditorias e procedimentos em PDF.",
      en: "Validated with a clickable prototype and discovery calls; build started: document control, approvals, CAPA, inspections, audits and PDF procedures.",
    },
    outcome: {
      pt: "Pausado por motivos pessoais e falta de desenvolvedor; em reconstrução com desenvolvimento assistido por IA, especificação primeiro. Demanda validada, ainda sem clientes pagantes.",
      en: "Paused for personal reasons and lack of a developer; being rebuilt with AI-assisted development, specification first. Validated demand, no paying customers yet.",
    },
    stack: ["Lovable", "Supabase", "Claude Code"],
    url: "https://regulamentei.com.br",
    urlNote: { pt: "site em manutenção", en: "site in maintenance" },
    imageAlt: { pt: "", en: "" },
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
      metric: { pt: "40 min → 2 min por carta", en: "40 min → 2 min per letter" },
    },
    {
      title: { pt: "XML de nota fiscal → CSV", en: "Invoice XML → CSV" },
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
      metric: { pt: "Leads direto na base", en: "Leads straight into the CRM" },
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
  process: {
    label: { pt: "Como trabalho", en: "How I work" },
    title: {
      pt: "Processo primeiro, especificação depois, código por último.",
      en: "Process first, specification second, code last.",
    },
    steps: [
      {
        title: { pt: "Mapear com quem executa", en: "Map it with the people who run it" },
        body: {
          pt: "Acompanho a rotina, reúno documentos e exceções e combino o que é “pronto” antes de abrir qualquer ferramenta.",
          en: "Shadow the routine, collect documents and exceptions, agree on what “done” means before opening any tool.",
        },
      },
      {
        title: { pt: "Escrever a especificação", en: "Write the specification" },
        body: {
          pt: "PRD, modelo de dados, acesso por perfil, regras de negócio e plano em grupos. A IA lê isso antes de escrever código.",
          en: "PRD, data model, access per role, business rules and a plan in groups. The AI reads these before writing code.",
        },
      },
      {
        title: { pt: "Construir em grupos verificáveis", en: "Build in verified groups" },
        body: {
          pt: "Cada grupo é publicado e testado com dados reais; o arquivo de regras cresce a cada bug.",
          en: "Each group ships and is tested on real data; the rules file grows with every bug.",
        },
      },
      {
        title: { pt: "Observar o uso real", en: "Watch real usage" },
        body: {
          pt: "Replays de sessão, dúvidas de suporte e adoção decidem a próxima iteração.",
          en: "Session replays, support questions and adoption decide the next iteration.",
        },
      },
    ],
  },
  background: {
    label: { pt: "Trajetória", en: "Background" },
    title: {
      pt: "Dez anos dentro de qualidade e regulatório de dispositivos médicos.",
      en: "Ten years inside medical-device quality and regulatory.",
    },
    timeline: [
      {
        period: { pt: "2021 – hoje", en: "2021 – present" },
        org: "Angiolux",
        orgNote: { pt: "importador e distribuidor", en: "importer and distributor" },
        role: {
          pt: "Analista de Regulatório e Qualidade · Farmacêutico Responsável",
          en: "Quality & Regulatory Affairs Analyst · Responsible Pharmacist",
        },
        body: {
          pt: "Registro de dispositivos classes I a IV: documentação técnica, arquivos de risco, rotulagem e lista de lacunas antes da ANVISA. Sistema ISO 13485: CAPA, controle de mudanças, auditorias, reclamações e pós-mercado. As ferramentas internas acima.",
          en: "Registration of Class I to IV devices: technical documentation, risk files, labelling and gap lists before ANVISA. ISO 13485 system: CAPA, change control, audits, complaints and post-market surveillance. The internal tools above.",
        },
      },
      {
        period: { pt: "2024 – hoje", en: "2024 – present" },
        org: "Regulamentei",
        orgNote: { pt: "consultoria regulatória", en: "regulatory consulting" },
        role: { pt: "Fundador", en: "Founder" },
        body: {
          pt: "Licenciamento ANVISA e implantação de sistemas da qualidade. Origem do Regulamentei SGQ e do Mirada Search AI.",
          en: "ANVISA licensing and quality-system set-up. Where Regulamentei SGQ and Mirada Search AI started.",
        },
      },
      {
        period: { pt: "2018 – 2021", en: "2018 – 2021" },
        org: "Fleury · Kley Hertz · Panvel",
        orgNote: { pt: "diagnóstico, farmacêutica e varejo", en: "diagnostics, pharma and pharmacy retail" },
        role: { pt: "Assuntos regulatórios e farmácia", en: "Regulatory affairs and pharmacy roles" },
        body: {
          pt: "Regulatório em diagnóstico e indústria farmacêutica, depois farmácia.",
          en: "Regulatory work in diagnostics and pharma, then community pharmacy.",
        },
      },
      {
        period: { pt: "2016 – 2018", en: "2016 – 2018" },
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
        "Farmácia, UFRGS, 2009 – 2016",
        "Pós-graduação em Assuntos Regulatórios, Instituto Racine, 2018 – 2019",
      ],
      en: [
        "Bachelor's in Pharmacy, UFRGS, 2009 – 2016",
        "Postgraduate in Regulatory Affairs, Instituto Racine, 2018 – 2019",
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
      pt: "Procuro funções onde domínio e construção se encontram.",
      en: "Looking for roles where domain expertise and hands-on building meet.",
    },
    body: {
      pt: "Transformação de P&D e qualidade em medtech, fluxos regulatórios com IA, entrega junto ao cliente. Em inglês ou português, em Berlim ou remoto.",
      en: "Medtech R&D and quality transformation, AI-enabled regulatory workflows, customer-facing delivery. In English or Portuguese, in Berlin or remote.",
    },
    location: {
      pt: "Porto Alegre, Brasil · aberto a relocação para Berlim · elegível ao EU Blue Card",
      en: "Porto Alegre, Brazil · open to relocation to Berlin · EU Blue Card eligible",
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
