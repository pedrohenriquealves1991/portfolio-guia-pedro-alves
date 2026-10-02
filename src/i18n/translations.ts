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
  },

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
