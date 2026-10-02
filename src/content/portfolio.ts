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
  writing: { pt: "Guia", en: "Writing" },
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
    pt: "Farmacêutico com dez anos na cadeia de dispositivos médicos: fabricante, exportador, importador e distribuidor, classes I a IV. Desde 2024 eu mapeio o processo com quem o executa, escrevo a especificação, construo a ferramenta com Claude Code, Lovable e Supabase e acompanho o uso real para melhorá-la.",
    en: "Pharmacist with ten years across the medical-device chain: manufacturer, exporter, importer and distributor, Class I to IV. Since 2024 I map a process with the people who run it, write the specification, ship the tool with Claude Code, Lovable and Supabase, and watch real usage to improve it.",
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
  name: string;
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

export const projects: Project[] = [
  {
    id: "mirada",
    name: "Mirada Search AI",
    status: "live",
    statusLabel: { pt: "No ar · produto pago", en: "Live · paid product" },
    role: { pt: "Fundador · produto e build", en: "Founder · product and build" },
    problem: {
      pt: "Os dados de dispositivos médicos da Anvisa ficam espalhados em portais e formatos diferentes. Descobrir quem detém um registro, quem importa um produto e se ele ainda está válido levava horas de trabalho manual.",
      en: "Anvisa medical-device data is spread across portals and formats. Finding who holds a registration, who imports a product and whether it is still valid took hours of manual work.",
    },
    built: {
      pt: "Busca sobre toda a base de dispositivos médicos da Anvisa, atualizada diariamente, com enriquecimento de empresas (CNPJ, site, telefone) via Firecrawl, login com Google, 7 dias de teste e plano pago. Escrevi o PRD, construí em Lovable e Supabase e usei replays de sessão do LogRocket para corrigir o abandono no cadastro e na página de preços.",
      en: "A search over the full Anvisa medical-device database, updated daily, with company enrichment (CNPJ, website, phone) via Firecrawl, Google sign-in, a 7-day trial and a paid plan. I wrote the PRD, built it on Lovable and Supabase, and used LogRocket session replays to fix drop-off at sign-up and pricing.",
    },
    outcome: {
      pt: "Pesquisas que levavam horas em portais separados agora levam segundos. Usado por compradores hospitalares, distribuidores e fabricantes estrangeiros procurando parceiros locais.",
      en: "Research that took hours across portals now takes seconds. Used by hospital buyers, distributors and foreign manufacturers looking for local partners.",
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
    name: { pt: "Inteligência de licitações", en: "Tender intelligence" }.en,
    status: "production",
    statusLabel: { pt: "Em produção · uso diário", en: "In production · daily use" },
    role: {
      pt: "Especificação, build e implantação na Angiolux",
      en: "Spec, build and rollout at Angiolux",
    },
    problem: {
      pt: "Pregões públicos listam dezenas de itens em texto livre. A equipe comercial gastava horas por pregão lendo, cruzando produtos com o catálogo e ainda deixava passar incompatibilidades.",
      en: "Public tenders list dozens of items in free text. The sales team spent hours per tender reading, matching products against the catalogue and still missed mismatches.",
    },
    built: {
      pt: "Um agente lê o texto do pregão, identifica cada produto solicitado, cruza com o catálogo via API e entrega um relatório estruturado, com erros sinalizados, direto no CRM. Um monitor em dias úteis lê o Diário Oficial e os portais dos dois maiores grupos hospitalares públicos de Porto Alegre e envia só os pregões relevantes.",
      en: "An agent reads the tender text, identifies each requested product, matches it against the catalogue through an API and delivers a structured report with flagged errors straight into the CRM. A weekday monitor reads the Diário Oficial and the portals of the two largest public hospital groups in Porto Alegre and sends only the relevant tenders.",
    },
    outcome: {
      pt: "A fase de pesquisa desapareceu; a equipe começa na estratégia de preço. Menos erros nas propostas e adoção imediata.",
      en: "The research phase disappeared; the team starts at pricing strategy. Fewer bidding errors and immediate adoption.",
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
    name: "Supplier qualification platform",
    status: "production",
    statusLabel: { pt: "Em produção", en: "In production" },
    role: {
      pt: "Dono do processo, especificação e build",
      en: "Process owner, spec and build",
    },
    problem: {
      pt: "Qualificar 75 fornecedores conforme a RDC 665/2022 rodava em e-mail e planilha: cobrar certificados, conferir vencimentos, arquivar documentos. Cerca de uma semana de trabalho por mês.",
      en: "Qualifying 75 suppliers under RDC 665/2022 ran on email and spreadsheets: chasing certificates, checking expiry dates, filing documents. About a week of work every month.",
    },
    built: {
      pt: "Um assistente de cadastro em autoatendimento para distribuidores e prestadores de serviço (tipo, CNPJ, dados, documentos, contatos, aceite). A automação detecta documentos vencendo, envia pedidos de renovação com link de upload e atualiza o registro no envio. Integrado ao CRM onde a requalificação de clientes é gerida.",
      en: "A self-service onboarding wizard for distributors and service providers (type, CNPJ, company data, documents, contacts, terms). Automation detects expiring documents, sends renewal requests with upload links and updates the record on submission. Linked to the CRM where client requalification is managed.",
    },
    outcome: {
      pt: "A manutenção mensal caiu de cerca de uma semana para quatro horas. Metade dos fornecedores já sobe os próprios documentos.",
      en: "Monthly upkeep fell from roughly a week to about four hours. Half of the suppliers now upload their own documents.",
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
    name: "Regulamentei SGQ",
    status: "paused",
    statusLabel: { pt: "Pausado · em reconstrução", en: "Paused · being rebuilt" },
    role: { pt: "Fundador", en: "Founder" },
    problem: {
      pt: "Distribuidores pequenos de dispositivos médicos precisam de um sistema da qualidade alinhado à ISO 13485 para atender às RDC 665/2022 e 751/2022, mas operam em papel e planilha.",
      en: "Small device distributors need an ISO 13485-aligned quality system to meet RDC 665/2022 and 751/2022, but run it on paper and spreadsheets.",
    },
    built: {
      pt: "Validei o produto com um protótipo navegável e conversas de descoberta e venda com distribuidores, e então comecei o build: controle de documentos, fluxos de aprovação, CAPA, inspeções e auditorias, com geração de procedimentos em PDF.",
      en: "Validated the product with a clickable prototype and discovery and sales calls with distributors, then started the build: document control, approval workflows, CAPA, inspections and audits, with PDF generation of procedures.",
    },
    outcome: {
      pt: "O desenvolvimento parou por motivos pessoais e por falta de um desenvolvedor. Estou reconstruindo sozinho com desenvolvimento assistido por IA, especificação primeiro. Status honesto: demanda validada, ainda sem clientes pagantes.",
      en: "Development stopped for personal reasons and for lack of a developer. I am now rebuilding it myself with AI-assisted development, specification first. Honest status: validated demand, no paying customers yet.",
    },
    stack: ["Lovable", "Supabase", "Claude Code"],
    url: "https://regulamentei.com.br",
    urlNote: { pt: "site em manutenção", en: "site in maintenance" },
    imageAlt: { pt: "", en: "" },
  },
];

// Localised project names (the `name` field above is the canonical English key)
export const projectNames: Record<string, L> = {
  mirada: { pt: "Mirada Search AI", en: "Mirada Search AI" },
  tenders: {
    pt: "Inteligência de licitações para um distribuidor de dispositivos médicos",
    en: "Tender intelligence for a medical-device distributor",
  },
  suppliers: {
    pt: "Plataforma de qualificação de fornecedores",
    en: "Supplier qualification platform",
  },
  regulamentei: { pt: "Regulamentei SGQ", en: "Regulamentei SGQ" },
};

export const smallerWork = {
  title: { pt: "Automações menores", en: "Smaller automations" },
  items: {
    pt: [
      "Gerador de cartas de comercialização: distribuidor, produto e região entram, carta final sai. De 40 minutos para 2.",
      "Parser Python que converte XML de notas fiscais em CSV para importação no sistema de estoque.",
      "Página de download de catálogo e documentos legais que substituiu o Linktree e captura dados de contato.",
    ],
    en: [
      "Commercial letter generator: distributor, product and region in, final letter out. From 40 minutes to 2.",
      "Python parser that converts fiscal invoice XML into CSV for inventory-system imports.",
      "Catalogue and legal-document download page that replaced Linktree and captures contact data.",
    ],
  } satisfies LList,
};

export const sections = {
  work: {
    label: { pt: "Projetos selecionados", en: "Selected work" },
    title: {
      pt: "Ferramentas que substituíram trabalho manual em operações reguladas.",
      en: "Tools that replaced manual work in regulated operations.",
    },
    intro: {
      pt: "Cada projeto saiu de um processo que eu mesmo executava ou acompanhava de perto. O status é o status real.",
      en: "Each project came out of a process I ran myself or sat next to. The status shown is the real one.",
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
          pt: "Acompanho a rotina, reúno documentos e exceções e combino o que significa “pronto” antes de abrir qualquer ferramenta.",
          en: "I shadow the routine, collect the documents and the exceptions, and agree on what “done” means before any tool is opened.",
        },
      },
      {
        title: { pt: "Escrever a especificação", en: "Write the specification" },
        body: {
          pt: "PRD, modelo de dados, regras de acesso por perfil, regras de negócio e plano de implementação em grupos. A IA lê tudo isso antes de escrever código.",
          en: "PRD, data model, access rules per role, business rules and an implementation plan in groups. The AI reads these before writing code.",
        },
      },
      {
        title: { pt: "Construir em grupos verificáveis", en: "Build in small verified groups" },
        body: {
          pt: "Cada grupo é publicado, testado contra dados reais, e o arquivo de regras cresce a cada bug encontrado.",
          en: "Each group ships, gets tested against real data, and the rules file grows with every bug found.",
        },
      },
      {
        title: { pt: "Observar o uso real", en: "Watch real usage" },
        body: {
          pt: "Replays de sessão, dúvidas de suporte e números de adoção decidem a próxima iteração, não o backlog.",
          en: "Session replays, support questions and adoption numbers decide the next iteration, not the backlog.",
        },
      },
    ],
    failuresLabel: { pt: "Falhas documentadas", en: "Documented failures" },
    failuresIntro: {
      pt: "Amaro é um sistema de gestão condominial que construí de ponta a ponta como caso de aprendizado: 24 tabelas, segurança por linha por perfil, 11 grupos de funcionalidades. Nunca foi adotado pela usuária a quem se destinava. Os três erros abaixo saíram dele, e cada um virou regra no projeto seguinte.",
      en: "Amaro is a condo-management system I built end-to-end as a learning case: 24 tables, row-level security per role, 11 feature groups. It was never adopted by its intended user. The three mistakes below came out of it, and each one became a rule in the next project.",
    },
    failures: [
      {
        title: { pt: "Multi-tenant versus single-tenant", en: "Multi-tenant versus single-tenant" },
        summary: {
          pt: "Uma premissa errada no masterplan criou uma rota pública de cadastro num sistema single-tenant.",
          en: "A wrong assumption in the master plan created a public sign-up route in a single-tenant system.",
        },
        body: {
          pt: "No grupo de autenticação o sistema saiu com uma página pública de cadastro que criava a conta da empresa. Isso é correto em produtos multi-tenant, onde vários clientes compartilham o mesmo banco. Este sistema era single-tenant: uma instância, uma empresa. Qualquer pessoa que achasse a URL poderia criar uma segunda empresa. Causa raiz: o masterplan descrevia o sistema como multi-tenant sem explicitar a decisão. Correção: trocar a rota por um onboarding que se desabilita assim que existe uma empresa. Regra: a decisão de tenancy fica escrita no masterplan e no documento de governança antes de qualquer autenticação ser construída.",
          en: "In the authentication group the system shipped with a public sign-up page that created the company account. That is correct for multi-tenant products, where several customers share one database. This system was single-tenant: one instance, one company. Anyone who found the URL could create a second company. Root cause: the master plan described the system as multi-tenant without making the decision explicit. Fix: replace the route with an onboarding route that disables itself once a company exists. Rule: the tenancy decision is written in the master plan and the governance document before any authentication is built.",
        },
      },
      {
        title: { pt: "Três bugs no primeiro uso real", en: "Three bugs on the first real use" },
        summary: {
          pt: "Um botão sem estado selecionado, uma validação esquecida e uma inserção em várias tabelas sem transação.",
          en: "A button without a selected state, a forgotten validation and a multi-table insert without a transaction.",
        },
        body: {
          pt: "Primeiro login, primeiro cadastro de condomínio, etapa 5: “Não foi possível salvar. Tente novamente.” E nada mais. Bug 1, visual: o botão “Pendente” não mostrava estado selecionado. Bug 2, validação: campos de telefone aceitavam qualquer coisa; a máscara existia, mas era aplicada caso a caso em vez de por um componente compartilhado. Bug 3, arquitetura: o assistente inseria em sete tabelas em sequência sem transação, então uma falha deixava um condomínio pela metade, e o código lia a mensagem de erro de um jeito que sempre caía no texto genérico. Duas regras novas: inserções em várias tabelas passam por uma edge function com transação ou limpeza explícita, e toda mensagem de erro do banco é propagada ao usuário.",
          en: "First login, first condo registration, step 5: “Could not save. Try again.” And nothing else. Bug 1, visual: the “Pending” button had no selected state. Bug 2, validation: phone fields accepted anything; the mask existed but was applied case by case instead of through a shared component. Bug 3, architecture: the wizard inserted into seven tables in sequence without a transaction, so a failure left a half-created condo, and the code read the error in a way that always fell into the generic text. Two new rules: multi-table inserts go through an edge function with a transaction or explicit cleanup, and every database error message is propagated to the user.",
        },
      },
      {
        title: {
          pt: "Cinco divergências entre código e banco",
          en: "Five mismatches between code and database",
        },
        summary: {
          pt: "Constraints no banco e constantes no código eram duas fontes de verdade que ninguém alinhou.",
          en: "Check constraints in the database and constants in the code were two sources of truth nobody aligned.",
        },
        body: {
          pt: "Depois dos três primeiros bugs, o cadastro ainda falhava. Uma revisão completa achou cinco divergências: um valor de frequência que a tabela não aceitava, um status fora do conjunto permitido, um enum escrito diferente no frontend, um slug único por empresa no código mas único globalmente no banco, e uma edge function com mapa interno próprio que ignorava o template. Regra: toda inserção em tabela com CHECK constraint é coberta por teste de ponta a ponta, e antes de escrever uma edge function que toca N tabelas, os checks dessas tabelas ficam listados como constantes no topo do arquivo.",
          en: "After the first three bugs the registration still failed. A full review found five mismatches: a frequency value the table did not accept, a status outside the allowed set, an enum spelled differently in the frontend, a slug unique per company in code but globally unique in the database, and an edge function with its own internal map that ignored the template. Rule: every insert into a table with a CHECK constraint is covered by an end-to-end test, and before writing an edge function that touches N tables, those tables' checks are listed as constants at the top of the file.",
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
        orgNote: {
          pt: "importador e distribuidor de dispositivos médicos",
          en: "medical-device importer and distributor",
        },
        role: {
          pt: "Analista de Assuntos Regulatórios e Qualidade · Farmacêutico Responsável",
          en: "Quality & Regulatory Affairs Analyst · Responsible Pharmacist",
        },
        body: {
          pt: "Registro de dispositivos classes I a IV de fabricantes internacionais: revisão de documentação técnica, arquivos de risco e rotulagem, lista de lacunas antes da submissão à ANVISA. Sistema ISO 13485: CAPA, controle de mudanças, auditorias da ANVISA, reclamações e vigilância pós-mercado. Arquivo e aprovações migrados do papel para SharePoint e Microsoft 365. As ferramentas internas acima.",
          en: "Registration of Class I to IV devices from international manufacturers: technical documentation, risk file and labelling review, gap lists before ANVISA submission. ISO 13485 system: CAPA, change control, ANVISA audits, complaints and post-market surveillance. Paper archive and approvals moved to SharePoint and Microsoft 365. The internal tools above.",
        },
      },
      {
        period: { pt: "2024 – hoje", en: "2024 – present" },
        org: "Regulamentei",
        orgNote: { pt: "consultoria regulatória, remoto", en: "regulatory consulting, remote" },
        role: { pt: "Fundador", en: "Founder" },
        body: {
          pt: "Licenciamento ANVISA e implantação de sistemas da qualidade: análise de lacunas, desenho de processos e documentação. Regulamentei SGQ e Mirada Search AI nasceram aqui.",
          en: "ANVISA licensing and quality-system set-up: gap analysis, process design and documentation. Regulamentei SGQ and Mirada Search AI were born here.",
        },
      },
      {
        period: { pt: "2018 – 2021", en: "2018 – 2021" },
        org: "Fleury · Kley Hertz Farmacêutica · Panvel",
        orgNote: {
          pt: "diagnóstico, indústria farmacêutica e varejo",
          en: "diagnostics, pharma and pharmacy retail",
        },
        role: {
          pt: "Assuntos regulatórios e farmácia",
          en: "Regulatory affairs and pharmacy roles",
        },
        body: {
          pt: "Regulatório em diagnóstico e indústria farmacêutica, depois farmácia.",
          en: "Regulatory work in diagnostics and pharma, then community pharmacy.",
        },
      },
      {
        period: { pt: "2016 – 2018", en: "2016 – 2018" },
        org: "Vision Hitech",
        orgNote: {
          pt: "fabricante de dispositivos médicos, 16 pessoas",
          en: "medical-device manufacturer, 16 people",
        },
        role: {
          pt: "Responsável por Qualidade e Regulatório · Farmacêutico Responsável",
          en: "Quality & Regulatory Affairs Officer · Responsible Pharmacist",
        },
        body: {
          pt: "Qualidade e regulatório de ponta a ponta, no dia a dia da produção: revisões de projeto, documentação de projeto, verificação de produto na linha, transferência para produção e validação de esterilização (ISO 17665). Participei da certificação ISO 13485. Registrei dispositivos para exportação em seis países do Oriente Médio e Norte da África.",
          en: "Quality and regulatory end to end, working daily with production: design reviews, design documentation, product verification on the line, design transfer to production and sterilisation validation (ISO 17665). Took part in the ISO 13485 certification. Registered devices for export in six countries in the Middle East and North Africa.",
        },
      },
    ],
    educationLabel: { pt: "Formação", en: "Education" },
    education: {
      pt: [
        "Farmácia, Universidade Federal do Rio Grande do Sul (UFRGS), 2009 – 2016",
        "Pós-graduação em Assuntos Regulatórios, Instituto Racine, 2018 – 2019",
      ],
      en: [
        "Bachelor's in Pharmacy, Federal University of Rio Grande do Sul (UFRGS), 2009 – 2016",
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
      "ANVISA RDC 665/2022",
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
        "PRD e especificação de casos de uso",
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
  writing: {
    label: { pt: "Guia", en: "Writing" },
    title: {
      pt: "Um guia prático para construir software com agentes de IA.",
      en: "A practical guide to building software with AI agents.",
    },
    body: {
      pt: "21 seções, em português: da especificação ao debug e ao checklist de produção. Escrito para quem quer usar IA no próprio trabalho, com um sistema real como caso recorrente.",
      en: "21 sections, in Portuguese: from writing the specification to debugging and the production checklist. Written for people who want to use AI in their day job, with a real system as the running case.",
    },
    read: { pt: "Ler o guia", en: "Read the guide (PT)" },
    download: { pt: "Baixar em Markdown", en: "Download as Markdown" },
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
