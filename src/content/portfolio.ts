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
    pt: "Melhoria de processos e adoção de IA · Operações · Ferramentas internas",
    en: "Process improvement & AI adoption · Business operations · Internal tools",
  },
  lead: {
    pt: "Encontro a rotina manual, mapeio com quem a executa, meço o tempo que ela custa, construo a automação com IA e low-code e acompanho o uso depois do lançamento. Sete anos em operações, qualidade e governança de um distribuidor de dispositivos médicos.",
    en: "I find the manual routine, map it with the people who run it, measure the time it costs, build the automation with AI and low-code tools and follow real usage after launch. Seven years in operations, quality and governance at a medical-device distributor.",
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

export type ProjectStatus = "live" | "production" | "partial";

export interface Project {
  id: string;
  status: ProjectStatus;
  statusLabel: L;
  role: L;
  problem: L;
  built: L;
  outcome: L;
  url?: string;
  image?: string;
  video?: string;
  imageAlt: L;
}

export const projectNames: Record<string, L> = {
  suppliers: {
    pt: "Qualificação de fornecedores",
    en: "Supplier qualification platform",
  },
  cubage: { pt: "Calculadora de cubagem", en: "Shipping cubage calculator" },
  tenders: {
    pt: "Inteligência de licitações",
    en: "Tender intelligence",
  },
  mirada: { pt: "Mirada Search AI", en: "Mirada Search AI" },
};

export const projects: Project[] = [
  {
    id: "suppliers",
    status: "production",
    statusLabel: { pt: "Em produção", en: "In production" },
    role: { pt: "Dono do processo, especificação e build · Angiolux", en: "Process owner, spec and build · Angiolux" },
    problem: {
      pt: "Documentos de 75 fornecedores eram cobrados por e-mail e planilha: cerca de uma semana de trabalho por mês.",
      en: "Documents for 75 suppliers were chased by email and spreadsheet: about one working week every month.",
    },
    built: {
      pt: "Plataforma que sinaliza documentos vencendo, envia pedidos de renovação com link de upload e atualiza o registro no envio.",
      en: "A platform that flags expiring documents, sends renewal requests with upload links and updates the record on submission.",
    },
    outcome: {
      pt: "De cerca de uma semana por mês para um turno de quatro horas. 50 a 60% dos fornecedores sobem os próprios documentos.",
      en: "From about a week a month to a four-hour shift. 50 to 60% of suppliers now upload their own documents.",
    },
    url: "https://angiolux.com.br/qualificacao",
    image: "/work/suppliers.png",
    video: "/work/suppliers.mp4",
    imageAlt: {
      pt: "Assistente de qualificação de fornecedores em seis etapas",
      en: "Six-step supplier qualification wizard",
    },
  },
  {
    id: "cubage",
    status: "production",
    statusLabel: { pt: "Em produção · em implantação", en: "In production · rolling out" },
    role: { pt: "Catalogação, especificação e build · Angiolux", en: "Cataloguing, spec and build · Angiolux" },
    problem: {
      pt: "Toda cotação de frete precisa do número de volumes e do peso. A equipe montava as caixas na mão: cerca de 15 minutos por pedido, em uns 50 pedidos por mês.",
      en: "Every freight quote needs the package count and weight. The team fitted boxes by hand: about 15 minutes per order, on roughly 50 orders a month.",
    },
    built: {
      pt: "Cataloguei dimensões e peso de todos os produtos e caixas. Sobre esse catálogo, um app lê o PDF do pedido e devolve caixas, peso total e volumes, prontos para a transportadora.",
      en: "I catalogued the dimensions and weight of every product and box. On that catalogue, a web app reads the order PDF and returns boxes, total weight and package count, ready for the carrier.",
    },
    outcome: {
      pt: "Economia estimada de 15 minutos por pedido. Em implantação com quem cobre a expedição.",
      en: "An estimated 15 minutes saved per order. Rolling out to the people who cover shipping.",
    },
    image: "/work/cubage.png",
    video: "/work/cubage.mp4",
    imageAlt: {
      pt: "Calculadora de cubagem lendo o PDF de um pedido e devolvendo caixas, peso e volumes",
      en: "Cubage calculator reading an order PDF and returning boxes, weight and package count",
    },
  },
  {
    id: "tenders",
    status: "partial",
    statusLabel: { pt: "Monitor em uso · cruzamento sem adoção", en: "Monitor in use · matching not adopted" },
    role: { pt: "Especificação, build e implantação · Angiolux", en: "Spec, build and rollout · Angiolux" },
    problem: {
      pt: "Pregões listam dezenas de itens em texto livre. O comercial gastava horas por pregão cruzando itens com o catálogo.",
      en: "Tenders list dozens of items in free text. Sales spent hours per tender matching them against the catalogue.",
    },
    built: {
      pt: "Um motor dentro do CRM cruza o pregão com o catálogo e sinaliza incompatibilidades. Uma automação diária varre o Diário Oficial e os portais de dois grupos hospitalares e envia os pregões novos por e-mail toda manhã.",
      en: "A matching engine inside the CRM checks the tender against the catalogue and flags mismatches. A daily automation scans the official gazette and two hospital groups' portals and emails new tenders every morning.",
    },
    outcome: {
      pt: "O monitor diário segue em uso. O cruzamento deixou de ser usado quando a novidade passou, porque ninguém com autoridade pediu o uso. Desde então, garanto um dono do processo e uma medida de sucesso antes de construir.",
      en: "The daily monitor is still in use. The matching was dropped once the novelty faded, because nobody with authority asked for it to be used. Since then I secure a business owner and a success measure before building.",
    },
    url: "https://angiolux.com.br/consulta-licitacao",
    image: "/work/tenders.png",
    video: "/work/tenders.mp4",
    imageAlt: {
      pt: "Formulário público da ferramenta de licitações no site da Angiolux",
      en: "Public form of the tender-matching tool on the Angiolux website",
    },
  },
  {
    id: "mirada",
    status: "live",
    statusLabel: { pt: "No ar · em validação de mercado", en: "Live · in market validation" },
    role: { pt: "Fundador · produto e build · Regulamentei", en: "Founder · product and build · Regulamentei" },
    problem: {
      pt: "Os dados de dispositivos médicos da Anvisa ficam espalhados em portais. Descobrir quem detém um registro ou importa um produto levava horas.",
      en: "Anvisa device data is scattered across portals. Finding who holds a registration or imports a product took hours.",
    },
    built: {
      pt: "Várias fontes públicas numa busca só, atualizada diariamente. Escrevi a descoberta, a arquitetura e o PRD. Depois do lançamento, revisei sessões de usuários, achei a perda no cadastro e no preço e refiz as chamadas.",
      en: "Several public data sources in one search, updated daily. I wrote the discovery, architecture and PRD. After launch I reviewed user sessions, found drop-off at sign-up and pricing and reworked the calls to action.",
    },
    outcome: {
      pt: "Uma busca substitui horas de pesquisa em portais. Em validação de mercado, ainda sem clientes pagantes.",
      en: "One search replaces hours of portal research. In market validation, no paying customers yet.",
    },
    url: "https://miradasearch.com",
    image: "/work/mirada.png",
    imageAlt: {
      pt: "Página inicial do Mirada Search com a busca na base da Anvisa",
      en: "Mirada Search home page with the Anvisa database search",
    },
  },
];

export const smallerWork = {
  title: { pt: "Automações menores", en: "Smaller automations" },
  items: [
    {
      title: { pt: "Gerador de cartas de comercialização", en: "Commercial letter generator" },
      body: {
        pt: "Distribuidor, produto e região escolhidos por clique; a carta final sai pronta.",
        en: "Distributor, product and region chosen by click; the final letter comes out ready.",
      },
      metric: { pt: "De 40 para 2 minutos por carta, cerca de 10 por mês", en: "From 40 to 2 minutes per letter, about 10 a month" },
    },
    {
      title: { pt: "Sistema da qualidade na nuvem", en: "Quality system in the cloud" },
      body: {
        pt: "SGQ ISO 13485 com controle de documentos e aprovação automatizada; arquivo físico migrado para o SharePoint.",
        en: "ISO 13485 QMS with document control and approval automation; physical archive moved to SharePoint.",
      },
      metric: { pt: "Acesso remoto para toda a empresa", en: "Remote access for the whole company" },
    },
    {
      title: { pt: "Página de documentos e catálogo", en: "Catalogue and documents page" },
      body: {
        pt: "Captura o contato antes do download e substituiu o Linktree.",
        en: "Captures contact data before download and replaced Linktree.",
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
      pt: "Rotinas manuais que viraram ferramentas, com o tempo medido antes e depois.",
      en: "Manual routines turned into tools, with the time measured before and after.",
    },
    problem: { pt: "Problema", en: "Problem" },
    built: { pt: "O que construí", en: "What I built" },
    outcome: { pt: "Resultado", en: "Outcome" },
    open: { pt: "Abrir", en: "Open" },
  },
  background: {
    label: { pt: "Trajetória", en: "Background" },
    title: {
      pt: "Sete anos em operações, qualidade e governança.",
      en: "Seven years in operations, quality and governance.",
    },
    timeline: [
      {
        period: { pt: "nov 2021 a hoje", en: "Nov 2021 to present" },
        org: "Angiolux",
        orgNote: { pt: "importador e distribuidor de dispositivos médicos", en: "medical-device importer and distributor" },
        role: {
          pt: "Analista de Processos e Qualidade (Qualidade e Regulatório)",
          en: "Process & Quality Analyst (Quality and Regulatory Affairs)",
        },
        body: {
          pt: "Rotinas de fornecedores, licitações, cubagem e documentos comerciais automatizadas. Sistema da qualidade ISO 13485 refeito na nuvem. Auditorias, CAPA e controle de mudanças. Área de estoque ampliada quatro vezes.",
          en: "Supplier, tender, cubage and commercial-document routines automated. ISO 13485 quality system rebuilt in the cloud. Audits, CAPA and change control. Stock area expanded fourfold.",
        },
      },
      {
        period: { pt: "mar 2024 a hoje", en: "Mar 2024 to present" },
        org: "Regulamentei",
        orgNote: { pt: "produtos de automação e IA", en: "process automation and AI products" },
        role: { pt: "Fundador", en: "Founder" },
        body: {
          pt: "Mirada Search AI, busca unificada de dados públicos. Regulamentei SGQ, sistema da qualidade digital para distribuidores, com conversas de venda e retorno de prospects.",
          en: "Mirada Search AI, a unified search over public data. Regulamentei SGQ, a digital quality system for distributors, with sales calls and prospect feedback.",
        },
      },
      {
        period: { pt: "2018 a 2021", en: "2018 to 2021" },
        org: "Fleury · Kley Hertz · Panvel",
        orgNote: { pt: "diagnóstico, farmacêutica e varejo", en: "diagnostics, pharma and pharmacy retail" },
        role: { pt: "Funções de regulatório e qualidade", en: "Regulatory and quality roles" },
        body: {
          pt: "Regulatório em diagnóstico e indústria farmacêutica, depois farmácia.",
          en: "Regulatory work in diagnostics and pharma, then community pharmacy.",
        },
      },
      {
        period: { pt: "dez 2016 a nov 2018", en: "Dec 2016 to Nov 2018" },
        org: "Vision Hitech",
        orgNote: { pt: "fabricante", en: "manufacturer" },
        role: {
          pt: "Qualidade e Processos",
          en: "Quality & Process Officer",
        },
        body: {
          pt: "Certificação ISO 13485 com equipe de quatro pessoas: revisões de projeto, verificação na linha, documentação e transferência para produção. Registros para exportação em seis países.",
          en: "ISO 13485 certification with a quality team of four: design reviews, verification on the line, documentation and design transfer. Export registrations in six countries.",
        },
      },
    ],
    educationLabel: { pt: "Formação", en: "Education" },
    education: {
      pt: [
        "Farmácia, UFRGS, 2009 a 2016",
        "Pós-graduação em Assuntos Regulatórios e Registro de Produtos, Instituto Racine, 2018 a 2019",
      ],
      en: [
        "Bachelor's in Pharmacy, UFRGS, 2009 to 2016",
        "Postgraduate in Regulatory Affairs and Product Registration, Instituto Racine, 2018 to 2019",
      ],
    } satisfies LList,
    skills: [
      {
        label: { pt: "Mudança e adoção", en: "Change and adoption" },
        items: {
          pt: [
            "Mapeamento de processos com os donos do negócio",
            "Medida de sucesso: tempo poupado por tarefa",
            "Implantação e retorno dos usuários",
            "Revisão de usabilidade de produtos no ar",
          ],
          en: [
            "Process mapping with business owners",
            "Success measure: time saved per task",
            "Rollout and user feedback",
            "Usability review of live products",
          ],
        } satisfies LList,
      },
      {
        label: { pt: "IA e low-code", en: "AI and low-code" },
        items: {
          pt: ["Claude", "Claude Code", "Codex", "Lovable", "v0", "ChatGPT", "Especificação e PRD"],
          en: ["Claude", "Claude Code", "Codex", "Lovable", "v0", "ChatGPT", "Spec and PRD writing"],
        } satisfies LList,
      },
      {
        label: { pt: "Build e integração", en: "Build and integrate" },
        items: {
          pt: ["Supabase (edge functions, auth, storage)", "APIs REST", "Webhooks", "Firecrawl", "Scripts em Python", "SharePoint e Microsoft 365"],
          en: ["Supabase (edge functions, auth, storage)", "REST APIs", "Webhooks", "Firecrawl", "Python scripts", "SharePoint and Microsoft 365"],
        } satisfies LList,
      },
      {
        label: { pt: "Análise", en: "Analytics" },
        items: {
          pt: ["LogRocket", "Google Trends"],
          en: ["LogRocket", "Google Trends"],
        } satisfies LList,
      },
    ],
  },
  contact: {
    label: { pt: "Contato", en: "Contact" },
    title: {
      pt: "Procuro funções entre o negócio e quem constrói.",
      en: "I'm looking for roles between the business and the people who build.",
    },
    body: {
      pt: "Melhoria de processos, adoção de IA, operações e ferramentas internas. Em inglês ou português, presencial com relocação ou remoto.",
      en: "Process improvement, AI adoption, business operations and internal tools. In English or Portuguese, on site with relocation or remote.",
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
