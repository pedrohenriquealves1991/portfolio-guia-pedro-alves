export type Language = "pt" | "en";

export const translations = {
  // ============ NAVIGATION ============
  nav: {
    guide: { pt: "Guia", en: "Guide" },
    portfolio: { pt: "Portfólio", en: "Portfolio" },
    showing: { pt: "Mostrando:", en: "Showing:" },
    filterAll: { pt: "Tudo", en: "All" },
    filterBackoffice: { pt: "Backoffice", en: "Backoffice" },
    filterProduto: { pt: "Produto", en: "Product" },
    email: { pt: "EMAIL", en: "EMAIL" },
    guideSubtitle: {
      pt: "Guia de Vibe Coding",
      en: "A Vibe Coding Guide",
    },
  },

  // ============ GUIDE HERO ============
  guideHero: {
    eyebrow: {
      pt: "Guia pessoal · em construção",
      en: "Personal guide · in progress",
    },
    title1: { pt: "Meu Guia", en: "An Honest" },
    title2: { pt: "Sincero de", en: "Guide to" },
    titleHighlight: { pt: "Vibe Coding", en: "Vibe Coding" },
    bodyA: {
      pt: "Para quem quer usar IA no seu emprego CLT ou criar uma ferramenta como profissional liberal — sem promessas de produtos revolucionários nem renda passiva milionária. Só fluxos melhores que os quais você provavelmente utiliza hoje.",
      en: "For people who want to use AI in their <strong>day job</strong> or build a tool as a <strong>freelancer</strong> — no revolutionary product promises, no millionaire passive income claims. Just better workflows than the ones you have today.",
    },
    bodyB: {
      pt: "Este projeto é onde organizo meus pensamentos e aprendizado. É feito para enviar a amigos, melhorar com o tempo, e talvez monetizar mais para frente. O fio condutor é o sistema Amaro - Gestão Condominial que fiz para minha Dinda.",
      en: "This project is where I organise my thoughts and what I learn. It's meant to be shared with friends, improved over time, and maybe monetised later. The recurring case study is a real system: <strong>Amaro - Gestão Condominial</strong>.",
    },
    cta: {
      pt: "Começar pelo caminho certo",
      en: "Start on the right path",
    },
  },

  // ============ JOURNEY PICKER ============
  journey: {
    eyebrow: { pt: "Bifurcação de jornada", en: "Choose your path" },
    title: {
      pt: "O que você está tentando fazer?",
      en: "What are you trying to do?",
    },
    sub: {
      pt: "Escolha um caminho para filtrar as seções. Você pode alternar a qualquer momento.",
      en: "Pick a path to filter the sections. You can switch at any time.",
    },
    optAllTitle: { pt: "Mostrar tudo", en: "Show everything" },
    optAllSub: {
      pt: "Sigo todo o guia, dos dois caminhos",
      en: "I'll follow the whole guide, both paths",
    },
    optBackTitle: {
      pt: "Organizar processo interno",
      en: "Organise an internal process",
    },
    optBackSub: {
      pt: "Backoffice, uso pessoal ou da equipe — ninguém de fora acessa",
      en: "Back office, personal or team use — no external access",
    },
    optProdTitle: {
      pt: "Criar produto com usuários externos",
      en: "Build a product with external users",
    },
    optProdSub: {
      pt: "Clientes, parceiros ou público vão acessar",
      en: "Customers, partners or the public will access it",
    },
    selected: { pt: "✓ Selecionado", en: "✓ Selected" },
  },

  // ============ FINAL CTA ============
  finalCTA: {
    eyebrow: { pt: "Este guia é vivo", en: "This guide is alive" },
    title: {
      pt: "Vai melhorar com o tempo.",
      en: "It will keep getting better.",
    },
    body: {
      pt: "Cada etapa concluída no Amaro vira conteúdo novo aqui. Manda para um amigo que está começando — ou abre o e-mail se tem uma sugestão.",
      en: "Every milestone shipped on Amaro becomes new content here. Share it with a friend who's starting out — or open an email if you have a suggestion.",
    },
    share: { pt: "Enviar para um amigo", en: "Send to a friend" },
    suggest: { pt: "Mandar sugestão", en: "Send a suggestion" },
    shareTitle: {
      pt: "Um Guia Sincero de Vibe Coding",
      en: "An Honest Guide to Vibe Coding",
    },
    shareText: {
      pt: "Guia pessoal sobre usar IA para construir sistemas reais.",
      en: "A personal guide on using AI to build real systems.",
    },
    copied: {
      pt: "Link copiado para a área de transferência!",
      en: "Link copied to the clipboard!",
    },
    emailSubject: {
      pt: "Sugestão para o Guia de Vibe Coding",
      en: "Suggestion for the Vibe Coding Guide",
    },
  },

  // ============ TIMELINE (Amaro / Cristina) ============
  timelineCristina: {
    eyebrow: {
      pt: "Caso real — fio condutor do guia",
      en: "Real case — the guide's recurring story",
    },
    intro: {
      pt: "Sistema construído <strong>no Lovable</strong> para a minha Dinda, síndica profissional em Curitiba. A linha do tempo abaixo é atualizada conforme o projeto avança.",
      en: "System built <strong>on Lovable</strong> for my godmother, a professional condo manager in Curitiba. The timeline below is updated as the project moves forward.",
    },
    liveLink: {
      pt: "Ver o sistema ao vivo →",
      en: "See the live system →",
    },
    colPlanning: {
      pt: "Planejamento (concluído)",
      en: "Planning (done)",
    },
    colBuild: { pt: "Build no Lovable", en: "Build on Lovable" },
    errorsTitle: { pt: "Erros documentados", en: "Documented errors" },
    errorBadge: {
      pt: "Erro #{n} documentado",
      en: "Documented error #{n}",
    },
  },

  // ============ FOOTER ============
  footer: {
    tagline: {
      pt: "© Pedro · Um Guia Sincero de Vibe Coding",
      en: "© Pedro · An Honest Guide to Vibe Coding",
    },
    builtWith: {
      pt: "Feito no Brasil · Construído com Lovable",
      en: "Made in Brazil · Built with Lovable",
    },
    location: {
      pt: "Porto Alegre, Brasil · mudando para Europa · cidadania portuguesa em fase final de decisão",
      en: "Porto Alegre, Brazil · relocating to Europe · Portuguese citizenship in final decision stage",
    },
  },

  // ============ PORTFOLIO HERO ============
  hero: {
    subtitle: {
      pt: "Portfólio · Pedro Henrique Vieira Alves",
      en: "Portfolio · Pedro Henrique Vieira Alves",
    },
    title1: { pt: "AI builder", en: "AI builder" },
    title2: {
      pt: "& especialista em automação",
      en: "& automation specialist",
    },
    intro: {
      pt: "Farmacêutico que virou construtor AI-native. Sete anos aprendendo como operações complexas realmente funcionam. Os últimos dois construindo sistemas que eliminam as partes manuais.",
      en: "Pharmacist turned AI-native builder. Seven years learning how complex operations actually work. The last two building systems that eliminate the manual parts.",
    },
    tags: {
      pt: ["Lovable", "Claude Code", "n8n · Make", "Supabase", "REST APIs", "Prompt engineering"],
      en: ["Lovable", "Claude Code", "n8n · Make", "Supabase", "REST APIs", "Prompt engineering"],
    },
    seeGuide: { pt: "Ver o guia →", en: "See the guide →" },
  },

  // ============ PORTFOLIO SECTIONS ============
  sections: {
    evolution: { pt: "Evolução", en: "Evolution" },
    projects: { pt: "Projetos", en: "Projects" },
    dailyStack: { pt: "Stack Diária", en: "Daily Stack" },
  },

  // ============ TIMELINE ============
  timeline: [
    {
      year: { pt: "2016 – 2021", en: "2016 – 2021" },
      title: {
        pt: "Operações reguladas — dispositivos médicos",
        en: "Regulated operations — medical devices",
      },
      desc: {
        pt: "Qualidade, registro internacional de produtos em 6 países, gestão de fornecedores. Aprendi a mapear processos complexos antes de tocá-los e a construir sistemas que funcionam sob pressão regulatória.",
        en: "Quality, international product registration across 6 countries, supplier management. Learned to map complex processes before touching them and to build systems that work under regulatory pressure.",
      },
    },
    {
      year: {
        pt: "2021 – presente\nAngiomed",
        en: "2021 – present\nAngiomed",
      },
      title: {
        pt: "Primeiras automações — ferramentas internas",
        en: "First automations — internal tools",
      },
      desc: {
        pt: "Comecei a substituir fluxos manuais por ferramentas digitais: motor de licitações, qualificação de fornecedores, cartas de comercialização, geração de leads, conversão XML-para-CSV. Construído sem equipe de engenharia.",
        en: "Started replacing manual workflows with digital tools: bid-matching engine, supplier qualification, commercialization letters, lead generation, XML-to-CSV conversion. Built without an engineering team.",
      },
    },
    {
      year: {
        pt: "2024 – presente\nRegulamentei",
        en: "2024 – present\nRegulamentei",
      },
      title: {
        pt: "Primeiro SaaS — do zero a clientes pagantes",
        en: "First SaaS product — from zero to paying customers",
      },
      desc: {
        pt: "Sistema digital de gestão da qualidade para distribuidores de dispositivos médicos. Propriedade total: produto, crescimento e operações.",
        en: "Digital quality management system for medical device distributors. Full ownership: product, growth, and operations.",
      },
    },
    {
      year: {
        pt: "2025 – presente\nMirada Search",
        en: "2025 – present\nMirada Search",
      },
      title: {
        pt: "Plataforma de inteligência regulatória com IA",
        en: "AI-powered regulatory intelligence platform",
      },
      desc: {
        pt: "Agrega dados regulatórios fragmentados de múltiplas APIs governamentais em inteligência pesquisável. Usuários reais, monitoramento em produção.",
        en: "Aggregates fragmented regulatory data from multiple government APIs into searchable intelligence. Real users, production monitoring.",
      },
    },
    {
      year: {
        pt: "2025 – presente\nAmaro",
        en: "2025 – present\nAmaro",
      },
      title: {
        pt: "Software personalizado — gestão condominial",
        en: "Custom software — condo management",
      },
      desc: {
        pt: "Sistema completo de gestão condominial para a minha Dinda, síndica profissional. Construído inteiramente no Lovable como caso real do Guia de Vibe Coding.",
        en: "Full condo-management system for my godmother, a professional condo manager. Built entirely on Lovable as the real case study for the Vibe Coding Guide.",
      },
    },
  ],

  // ============ PROJECTS ============
  // Amaro is the most recent project, listed first
  projects: [
    {
      typeLabel: {
        pt: "Software personalizado",
        en: "Custom software",
      },
      title: {
        pt: "Amaro - Gestão Condominial",
        en: "Amaro - Condo Management",
      },
      desc: {
        pt: "Sistema completo de gestão condominial sob medida para síndica profissional. Multi-condomínio, multi-nível de acesso (admin, assistentes, condôminos), gestão de unidades e moradores, manutenções preventivas, log de ocorrências, tarefas, honorários, documentos e portal do condômino. Construído inteiramente no Lovable, do wizard de onboarding ao portal logado.",
        en: "Full custom condo-management system for a professional condo manager. Multi-building, multi-level access (admin, assistants, residents), unit and resident management, preventive maintenance, incident log, tasks, fees, documents, and resident portal. Built entirely on Lovable, from onboarding wizard to authenticated portal.",
      },
      impact: {
        pt: "Substituiu WhatsApp + planilhas por um sistema único · 11 grupos de funcionalidades em produção · construído no Lovable do zero.",
        en: "Replaced WhatsApp + spreadsheets with a single system · 11 feature groups in production · built on Lovable from scratch.",
      },
    },
    {
      typeLabel: { pt: "SaaS", en: "SaaS" },
      title: { pt: "Mirada Search AI", en: "Mirada Search AI" },
      desc: {
        pt: "Agrega dados regulatórios fragmentados de múltiplas APIs governamentais em uma interface de busca inteligente. Normaliza automaticamente estruturas de dados inconsistentes. Usado por distribuidores de dispositivos médicos para pesquisas de registros, validade de produtos e conformidade.",
        en: "Aggregates fragmented regulatory data from multiple government APIs into a smart search interface. Automatically normalizes inconsistent data structures. Used by medical device distributors for record searches, product validity, and compliance.",
      },
      impact: {
        pt: "Pesquisas que levavam horas em portais separados reduzidas a segundos · usuários reais em produção",
        en: "Research that took hours across separate portals reduced to seconds · real users in production",
      },
    },
    {
      typeLabel: { pt: "SaaS", en: "SaaS" },
      title: { pt: "Regulamentei", en: "Regulamentei" },
      desc: {
        pt: "SGQ digital para distribuidores de dispositivos médicos. Controle de documentos automatizado, fluxos de aprovação e registros de conformidade alinhados com ISO 13485 e regulamentação brasileira. Fundado e crescido do zero.",
        en: "Digital QMS for medical device distributors. Automated document control, approval workflows, and compliance records aligned with ISO 13485 and Brazilian regulation. Founded and grown from scratch.",
      },
      impact: {
        pt: "Do zero a clientes pagantes · clientes dependem dele diariamente",
        en: "Zero to paying customers · clients depend on it daily",
      },
    },
    {
      typeLabel: { pt: "Ferramenta interna", en: "Internal tool" },
      title: { pt: "Motor de Licitações", en: "Bid-Matching Engine" },
      desc: {
        pt: "Agente que processa dados brutos de compras públicas, cruza com o catálogo de produtos via API e entrega um relatório estruturado direto no CRM. A equipe comercial parou de fazer pesquisa e foi direto para estratégia de preços.",
        en: "Agent that processes raw public procurement data, cross-references it with the product catalog via API, and delivers a structured report directly to CRM. The sales team stopped touching the research phase and moved to pricing strategy.",
      },
      impact: {
        pt: "Horas de pesquisa manual eliminadas por licitação · erros reduzidos · adoção imediata",
        en: "Hours of manual research eliminated per bid · errors reduced · immediate adoption",
      },
    },
    {
      typeLabel: { pt: "Ferramenta interna", en: "Internal tool" },
      title: {
        pt: "Qualificação de Fornecedores",
        en: "Supplier Qualification",
      },
      desc: {
        pt: "Substituiu um processo totalmente manual baseado em e-mail. Fornecedores se cadastram via autoatendimento. Automação detecta documentos vencendo, envia solicitações de renovação com links de upload e atualiza o registro após envio.",
        en: "Replaced a fully manual email-based process. Suppliers onboard themselves via self-service. Automation detects expiring documents, sends renewal requests with upload links, and updates the record upon submission.",
      },
      impact: {
        pt: "3 dias de trabalho mensal reduzidos a minutos · zero acompanhamento manual",
        en: "3 days of monthly work reduced to minutes · zero manual follow-up",
      },
    },
    {
      typeLabel: { pt: "Automação", en: "Automation" },
      title: {
        pt: "Gerador de Cartas de Comercialização",
        en: "Commercialization Letter Generator",
      },
      desc: {
        pt: "Fluxo que emite cartas de comercialização personalizadas com base na seleção de distribuidor, produto e região. Dados estruturados da base de clientes transformados em documentos finais com poucos cliques, sem digitação. Demonstra como dados organizados multiplicam possibilidades operacionais.",
        en: "Flow that issues personalized commercialization letters based on distributor, product, and region selection. Structured data from the client base transformed into final documents with a few clicks, zero typing. Demonstrates how organized data multiplies operational possibilities.",
      },
      impact: {
        pt: "Processo que exigia redação manual substituído por cliques · zero erros de dados",
        en: "Process that required manual drafting replaced by clicks · zero data errors",
      },
    },
    {
      typeLabel: { pt: "Automação", en: "Automation" },
      title: { pt: "Conversor XML para CSV", en: "XML to CSV Converter" },
      desc: {
        pt: "Parser Python que converte XMLs de notas fiscais em CSV estruturado, eliminando redigitação manual para importações no sistema de estoque. Construído para um colega sem nenhuma solicitação formal.",
        en: "Python parser that converts fiscal invoice XML files to structured CSV, eliminating manual data re-entry for inventory system imports. Built for a teammate without any formal request.",
      },
      impact: {
        pt: "Horas de digitação manual eliminadas por mês",
        en: "Hours of manual data entry eliminated per month",
      },
    },
    {
      typeLabel: { pt: "Automação", en: "Automation" },
      title: { pt: "Página de Captura de Leads", en: "Lead Capture Page" },
      desc: {
        pt: "Landing page para downloads de catálogo e documentos legais que substituiu o Linktree como ferramenta de distribuição. Captura dados de contato antes do download, alimentando diretamente a base de prospects.",
        en: "Landing page for catalog and legal document downloads that replaced Linktree as a distribution tool. Captures contact data before download, feeding directly into the prospect database.",
      },
      impact: {
        pt: "Geração de leads integrada ao fluxo de compartilhamento de documentos · ferramenta externa eliminada",
        en: "Lead generation integrated into document sharing flow · external tool eliminated",
      },
    },
  ],

  // ============ STACK ============
  stack: [
    {
      name: "Claude + Claude Code",
      role: {
        pt: "Raciocínio, parceiro de build, design de sistemas",
        en: "Reasoning, build partner, system design",
      },
    },
    {
      name: "Lovable",
      role: {
        pt: "Desenvolvimento rápido de produto",
        en: "Rapid product development",
      },
    },
    {
      name: "Supabase",
      role: {
        pt: "Banco de dados, auth, storage",
        en: "Database, auth, storage",
      },
    },
    {
      name: "n8n / Make",
      role: {
        pt: "Orquestração de workflows",
        en: "Workflow orchestration",
      },
    },
    {
      name: "Firecrawl",
      role: {
        pt: "Extração estruturada de dados web",
        en: "Structured web data extraction",
      },
    },
    {
      name: "Python",
      role: {
        pt: "Scripting, parsing, automação ad-hoc",
        en: "Scripting, parsing, ad-hoc automation",
      },
    },
  ],

  // ============ MISC ============
  impactLabel: { pt: "Impacto:", en: "Impact:" },

  // ============ PARTS ============
  parts: {
    I: {
      label: { pt: "Parte I", en: "Part I" },
      title: { pt: "Teoria", en: "Theory" },
      desc: {
        pt: "Entenda o terreno antes de abrir qualquer ferramenta: o que é vibe coding, ferramentas, banco de dados, segurança, SEO e como dar contexto à IA.",
        en: "Understand the terrain before opening any tool: what vibe coding is, tools, databases, security, SEO, and how to give context to AI.",
      },
    },
    II: {
      label: { pt: "Parte II", en: "Part II" },
      title: { pt: "Prática", en: "Practice" },
      desc: {
        pt: "Mão na massa, na ordem real de execução: do desenho dos fluxos até os prompts prontos para construir o sistema.",
        en: "Hands-on, in the real order of execution: from designing flows to ready-made prompts to build the system.",
      },
    },
    III: {
      label: { pt: "Parte III", en: "Part III" },
      title: { pt: "Depois do build", en: "After the build" },
      desc: {
        pt: "O que fazer quando o sistema já existe: changelog, debug, segurança em produção, GitHub e checklist final antes de publicar.",
        en: "What to do once the system exists: changelog, debug, production security, GitHub, and final checklist before publishing.",
      },
    },
  },

  // ============ DOWNLOAD GATE ============
  downloadGate: {
    heroButton: { pt: "Baixar guia em .md", en: "Download guide (.md)" },
    ctaTitle: {
      pt: "Use o guia inteiro como referência no seu projeto",
      en: "Use the whole guide as a reference in your project",
    },
    ctaBody: {
      pt: "Baixe o guia em Markdown e cole dentro do Claude, Lovable ou qualquer ferramenta de IA. A IA vai ler tudo e te ajudar com base nesse conteúdo.",
      en: "Download the guide in Markdown and paste it into Claude, Lovable or any AI tool. The AI will read it and help you based on this content.",
    },
    ctaButton: {
      pt: "Baixar o guia completo (.md)",
      en: "Download the full guide (.md)",
    },
    title: { pt: "Antes de baixar...", en: "Before downloading..." },
    subtitle: {
      pt: "Preciso de duas coisas só. Sem spam, prometo.",
      en: "Just two things. No spam, promise.",
    },
    name: { pt: "Nome", en: "Name" },
    namePlaceholder: { pt: "Como te chamo?", en: "What's your name?" },
    nameError: { pt: "Diz aí teu nome", en: "Tell me your name" },
    email: { pt: "Email", en: "Email" },
    emailError: { pt: "Email inválido", en: "Invalid email" },
    consent: {
      pt: "Concordo em receber atualizações do guia, eventualmente. Posso descadastrar quando quiser.",
      en: "I agree to occasionally receive updates about the guide. I can unsubscribe anytime.",
    },
    consentError: {
      pt: "Precisa marcar para continuar",
      en: "You need to check this to continue",
    },
    submit: { pt: "Baixar agora", en: "Download now" },
    submitting: { pt: "Preparando...", en: "Preparing..." },
    success: {
      pt: "Pronto! O download começou.",
      en: "Done! The download has started.",
    },
    errorGeneric: {
      pt: "Algo deu errado. Tenta de novo?",
      en: "Something went wrong. Try again?",
    },
  },
} as const;
