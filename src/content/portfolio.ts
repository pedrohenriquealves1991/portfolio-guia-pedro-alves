import type { Language } from "@/i18n/translations";

export type L = Record<Language, string>;
export type LList = Record<Language, string[]>;

export const EMAIL = "pedrophalves@gmail.com";
export const LINKEDIN = "https://linkedin.com/in/pedrophalves";
export const GITHUB = "https://github.com/pedrohenriquealves1991";

export const nav = {
  work: { pt: "Projetos", en: "Work" },
  contact: { pt: "Contato", en: "Contact" },
} satisfies Record<string, L>;

export const hero = {
  title: {
    pt: "Pedro Alves",
    en: "Pedro Alves",
  },
  subtitle: {
    pt: "Portfólio",
    en: "Portfolio",
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
  note: {
    pt: "Por motivos de privacidade, estas automações não podem ser mostradas aqui.",
    en: "For privacy reasons, these automations cannot be shown here.",
  },
  items: [
    {
      title: { pt: "Gerador de cartas de comercialização", en: "Commercial letter generator" },
      body: {
        pt: "As cartas eram feitas uma a uma no Word e guardadas em pastas, sem histórico nem base de quais produtos cada cliente podia vender em cada região do Brasil. A ferramenta, no backoffice do site, monta a carta a partir do CRM de clientes criado na plataforma de qualificação e do catálogo de produtos da ferramenta de pregões: escolhe-se a região e o PDF sai pronto para assinatura digital. Agora existe um histórico que mapeia a distribuição das cartas, e uma mesma carta pode ser reemitida com validade nova.",
        en: "Letters were written one by one in Word and filed in folders, with no history and no record of which products each customer could sell in each region of Brazil. The tool, in the website's back office, builds the letter from the customer CRM created for the qualification platform and the product catalogue built for the tender tool: pick the region and the PDF comes out ready for digital signature. There is now a history that maps where the letters went, and a letter can be reissued with a new validity date.",
      },
      metric: { pt: "De 40 para 2 minutos por carta", en: "From 40 to 2 minutes per letter" },
    },
    {
      title: { pt: "XML de nota fiscal para CSV", en: "Invoice XML to CSV" },
      body: {
        pt: "O ERP da empresa não conseguia internalizar produtos com lote e validade a partir do XML emitido pelo despachante. Mapeei os campos e criei no backoffice uma automação que gera um CSV no formato do ERP e internaliza o pedido com todos os dados necessários.",
        en: "The company's ERP could not import products with batch and expiry date from the XML issued by the customs broker. I mapped the fields and built a back-office automation that generates a CSV in the ERP's format and imports the order with every field it needs.",
      },
      metric: { pt: "De até 4 horas para 2 minutos por nota fiscal", en: "From up to 4 hours to 2 minutes per invoice" },
    },
    {
      title: { pt: "Captação de leads pelo catálogo comercial", en: "Lead capture through the commercial catalogue" },
      body: {
        pt: "Construí o site da empresa com os produtos listados e SEO otimizado, para que os clientes nos encontrem organicamente. Os catálogos comerciais completos, com desenhos, só são baixados depois de informar nome e e-mail. Com a lista de quem baixou os arquivos, ajudei o comercial a converter vendas.",
        en: "I built the company website with the products listed and SEO in place, so customers find us organically. The full commercial catalogues, with drawings, are downloaded only after leaving a name and email. With the list of people who downloaded the files, I helped the sales team convert orders.",
      },
      metric: { pt: "Leads orgânicos convertidos em vendas", en: "Organic leads converted into orders" },
    },
    {
      title: { pt: "Página de documentos", en: "Documents page" },
      body: {
        pt: "Todos os clientes precisam dos documentos legais da empresa. Antes eu anexava todos os documentos a cada e-mail. Agora envio um link permanente, onde todos ficam disponíveis para download.",
        en: "Every customer needs the company's legal documents. I used to attach all of them to every email. Now I send one permanent link where all of them are available for download.",
      },
      metric: { pt: "De cerca de 8 horas para no máximo 30 minutos por mês", en: "From about 8 hours to at most 30 minutes a month" },
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
  contact: {
    label: { pt: "Contato", en: "Contact" },
    title: {
      pt: "Se tiver interesse, entre em contato!",
      en: "If you are interested, please contact!",
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
