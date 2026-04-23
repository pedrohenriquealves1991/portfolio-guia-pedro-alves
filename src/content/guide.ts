import type { GuideSectionData } from "./types";

export const SECTIONS: GuideSectionData[] = [
  {
    number: null,
    slug: "intro",
    title: "Intro",
    path: "comum",
    blocks: [
      {
        kind: "callout",
        variant: "info",
        text: "Você tem um processo que funciona no WhatsApp, no Excel ou na memória. Dá para virar um sistema. Eu fiz isso para a minha tia.",
      },
      {
        kind: "paragraph",
        text: "Este guia é pessoal, direto, sem motivacional. Quem fala é alguém que errou, aprendeu e documenta o que funciona. O caso real que atravessa o guia inteiro é o sistema **Cristina Gestão Condominial** — construído para a minha tia, síndica profissional em Curitiba.",
      },
      {
        kind: "paragraph",
        text: "Não vou prometer produto revolucionário, milhões em renda passiva ou \"larga seu emprego\". O que este guia entrega é uma forma sincera de melhorar fluxos que você já tem hoje — seja no seu CLT, seja como profissional liberal.",
      },
    ],
  },
  {
    number: 1,
    slug: "o-que-e-vibe-coding",
    title: "O que é vibe coding",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "Vibe coding é um novo nível de abstração no uso de programação. Antes você precisava de um desenvolvedor. Agora é possível usar IA para criar sistemas integrados — com banco de dados, múltiplos usuários e lógica automática — sem escrever código. Você descreve o que quer. A IA escreve o código. Você dirige por meio de linguagem humana.",
      },
      {
        kind: "paragraph",
        text: "Mas vai além de conversar com um chat e pedir para revisar um e-mail. É usar IA para transformar um processo que você conhece em software funcional.",
      },
      { kind: "subheading", text: "Como fazer isso bem" },
      {
        kind: "paragraph",
        text: "**Dando contexto.** A IA não sabe do seu negócio. Você precisa explicar com detalhes. Use digitação por voz para descrever sua ideia. Envie documentos, fotos, prints de e-mails, fluxos desenhados à mão. A IA é ótima para organizar o que você fala de forma vaga.",
      },
      {
        kind: "paragraph",
        text: "**Usando linguagem clara.** Fale como se estivesse explicando para um colega que você está treinando. Esqueça \"engenharia de prompt\" — o que importa é transmitir sua ideia com clareza.",
      },
      { kind: "subheading", text: "Aprendendo pela fonte antes de comprar curso" },
      {
        kind: "links",
        items: [
          { label: "Cursos Claude", href: "https://anthropic.skilljar.com/" },
          { label: "Lovable Academy", href: "https://academy.lovable.app/academy" },
          { label: "Showcase Lovable", href: "https://february.lovable.app/showcase" },
          { label: "AI Starter (go9x)", href: "https://academy.go9x.com/c/ai-starter/" },
        ],
      },
      {
        kind: "callout",
        variant: "warn",
        title: "Sobre o FOMO",
        text: "A cada dia surge uma ferramenta nova e parece que você está ficando para trás. Mas seu uso de IA é para resolver um problema real — no seu trabalho, no seu negócio, na vida de alguém próximo. Escolha uma ou duas ferramentas e vá fundo. O resto é ruído.",
      },
    ],
  },
  {
    number: 2,
    slug: "antes-de-abrir-ferramenta",
    title: "Antes de abrir qualquer ferramenta",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "O trabalho mais importante acontece antes de abrir qualquer ferramenta.",
      },
      {
        kind: "callout",
        variant: "info",
        title: "A pergunta certa",
        text: "Não é \"qual é a sua dor?\" — é: \"o que você faz hoje que te dá trabalho, que você faz na mão, que você esquece ou que alguém te cobra que você não tem registrado?\"",
      },
      { kind: "subheading", text: "Exemplos reais e mundanos" },
      {
        kind: "list",
        items: [
          "Enviar relatório toda sexta copiando dados de 3 planilhas diferentes",
          "Controlar validade de contratos de fornecedores no calendário do celular",
          "Responder as mesmas 5 perguntas de clientes por WhatsApp toda semana",
          "Não saber quais clientes pagaram e quais estão em atraso",
        ],
      },
      { kind: "subheading", text: "Quando este tutorial não se aplica" },
      {
        kind: "list",
        items: [
          "Landing page para captar contato",
          "Formulário simples",
          "Portfólio de projetos",
          "Qualquer coisa que o Google Forms ou Notion resolve em 20 minutos",
        ],
      },
      { kind: "subheading", text: "Quando você precisa de um sistema" },
      {
        kind: "list",
        items: [
          "Múltiplos tipos de usuário (gestor, assistente, cliente final)",
          "Dados que se relacionam (condomínio tem moradores, moradores recebem comunicados)",
          "Lógica automática (avisa quando contrato vence, gera relatório mensal)",
          "Histórico e rastreabilidade em banco de dados",
          "Pessoas de fora vão acessar com login próprio",
        ],
      },
      {
        kind: "callout",
        variant: "case",
        title: "Cristina Gestão Condominial",
        text: "A síndica precisava de múltiplos usuários, dados relacionados (condomínio → moradores → documentos → contratos), lógica automática (alerta de vencimento), histórico rastreável (log de ocorrências com valor jurídico) e portal público para condôminos. Claramente precisava de sistema.",
      },
    ],
  },
  {
    number: 3,
    slug: "ferramentas",
    title: "As ferramentas",
    path: "comum",
    pathNote: "Backoffice usa as 5 primeiras. Produto adiciona Resend, Twilio etc.",
    blocks: [
      {
        kind: "paragraph",
        text: "Cinco ferramentas formam a base. Não tente aprender tudo. Comece por elas.",
      },
      {
        kind: "tools",
        ids: ["claude", "lovable", "supabase", "github", "vercel"],
      },
      {
        kind: "callout",
        variant: "info",
        title: "Caminho produto",
        text: "Você vai precisar também de domínio, Resend (e-mail), possivelmente Twilio (WhatsApp). Essas integrações têm custo e configuração. Detalhes nas seções seguintes.",
      },
    ],
  },
  {
    number: 4,
    slug: "preciso-de-dominio",
    title: "Preciso de domínio?",
    path: "produto",
    pathNote: "Backoffice pode pular. Produto lê obrigatoriamente.",
    blocks: [
      {
        kind: "paragraph",
        text: "**O que é um domínio:** é o endereço do seu site na internet. Ao criar um projeto no Lovable, ele te dá automaticamente um endereço no formato `[seuprojeto].lovable.app`. Para a maioria dos usos internos, isso basta.",
      },
      { kind: "subheading", text: "Quando não precisa" },
      {
        kind: "list",
        items: ["Backoffice interno", "Protótipo para validar com usuários", "Projeto de aprendizado"],
      },
      { kind: "subheading", text: "Quando precisa" },
      {
        kind: "list",
        items: [
          "Mandar e-mails automáticos (confirmação, alertas, senha esquecida)",
          "Apresentar para clientes como produto profissional",
          "Usar login com Google",
        ],
      },
      { kind: "subheading", text: "Onde comprar" },
      {
        kind: "list",
        items: [
          "**.com.br**: registro.br — órgão oficial brasileiro, mais barato",
          "**.com / .dev / .app**: IONOS tem integração direta com o Lovable",
        ],
      },
    ],
  },
  {
    number: 5,
    slug: "conectores",
    title: "Os conectores (integrações)",
    path: "produto",
    pathNote: "Produto principalmente. Backoffice pode precisar de alguns.",
    blocks: [
      {
        kind: "paragraph",
        text: "Conectores são parcerias entre empresas para facilitar a vida de quem constrói. Você não precisa saber como funcionam por dentro — só o que cada um faz e quando usar.",
      },
      {
        kind: "tools",
        ids: ["resend", "twilio", "firecrawl", "lovable-ai", "lovable-payments"],
      },
      {
        kind: "callout",
        variant: "warn",
        title: "Login com Google: cuidado",
        text: "Sem os ajustes corretos, a tela de login mostra o endereço técnico do banco de dados em vez do nome do seu projeto — parece vírus. Já perdi turnos resolvendo isso. Documente o passo a passo. Recomendo deixar para quando o projeto já estiver estável.",
      },
    ],
  },
  {
    number: 6,
    slug: "quando-planejar",
    title: "Quando planejar e quando não planejar",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "Esta é a seção que a maioria dos tutoriais ignora — e por isso os projetos viram bagunça depois de 3 semanas.",
      },
      {
        kind: "paragraph",
        text: "Para projetos simples (landing page, formulário, página de apresentação): vai direto no Lovable. Não precisa de documento nenhum.",
      },
      {
        kind: "paragraph",
        text: "Para projetos com banco de dados, múltiplos usuários ou lógica automática: planeja antes. Não porque é obrigatório, mas porque sem planejamento o Lovable vai tomar decisões que você vai querer desfazer mais tarde — e desfazer custa mais do que planejar.",
      },
      {
        kind: "callout",
        variant: "info",
        title: "O problema real que os documentos resolvem",
        text: "A IA tem memória limitada. Pense assim: você está contratando um funcionário novo toda vez que abre o chat. Ele é competente, mas não sabe nada da sua empresa ainda. Os documentos são o manual de integração que você dá para ele antes de começar.",
      },
      {
        kind: "paragraph",
        text: "O nome técnico para isso é **context engineering** — você está engenheirando o contexto que o modelo vai consumir antes de escrever uma linha de código.",
      },
    ],
  },
  {
    number: 7,
    slug: "documentos",
    title: "Os documentos: estrutura e ordem",
    path: "comum",
    pathNote: "Para projetos com banco de dados",
    blocks: [
      {
        kind: "paragraph",
        text: "**O que é Markdown:** formato de texto simples que vira documento formatado. Você escreve `## Título` e vira título. Arquivos `.md`. É o formato que a IA lê melhor.",
      },
      {
        kind: "paragraph",
        text: "**O que é um PRD:** Product Requirements Document. Descreve o que o sistema deve fazer — não como o código deve ser escrito.",
      },
      { kind: "subheading", text: "A estrutura completa que uso" },
      {
        kind: "code",
        lang: "text",
        text: `docs/
  masterplan.md          ← visão geral, entidades, módulos, fluxos
  RULES.md               ← como o código deve ser escrito
  03-design.md           ← paleta, fontes, componentes, tom de voz
  04-jornadas.md         ← jornadas dos usuários e mapa de navegação
  05-dados.md            ← todas as tabelas, campos, relacionamentos
  06-seguranca.md        ← RLS por perfil, LGPD, retenção
  07-governanca.md       ← regras de negócio fixas e decisões
  08-implementacao.md    ← ordem de build + tasks.md embutido
  CLAUDE.md              ← arquivo raiz lido automaticamente
  02-processos/
    auth.md
    condominios.md
    unidades-moradores.md
    ...`,
      },
      { kind: "subheading", text: "Ordem de criação" },
      {
        kind: "list",
        ordered: true,
        items: [
          "masterplan.md",
          "RULES.md",
          "05-dados.md (antes de qualquer build)",
          "06-seguranca.md (antes de qualquer build)",
          "04-jornadas.md",
          "07-governanca.md",
          "08-implementacao.md + tasks",
          "CLAUDE.md",
          "03-design.md (após criar identidade visual)",
          "02-processos/[modulo].md (sob demanda, antes de cada módulo)",
        ],
      },
      {
        kind: "callout",
        variant: "warn",
        title: "RULES.md é o mais ignorado e o mais importante",
        text: "Sem ele, o Lovable toma atalhos ruins que aparecem como bugs complexos semanas depois.",
      },
    ],
  },
  {
    number: 8,
    slug: "context-engineering",
    title: "Context engineering: o conceito que muda tudo",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "A IA tem dois problemas simultâneos: ela tem memória limitada por sessão (context window) e você tem memória limitada depois de horas de trabalho. Os documentos resolvem os dois.",
      },
      {
        kind: "paragraph",
        text: "**O Knowledge do Lovable:** em Project Settings → Knowledge, você configura instruções que o agente lê antes de cada resposta. Assim ele sempre sabe o que deve fazer, independentemente de quantas mensagens já aconteceram.",
      },
      { kind: "prompt", id: "knowledge" },
      {
        kind: "paragraph",
        text: "A frase \"Lendo documentação...\" é sua confirmação visual de que o agente leu as instruções antes de agir.",
      },
      { kind: "subheading", text: "O prompt de autopilot" },
      { kind: "prompt", id: "p2" },
      {
        kind: "callout",
        variant: "info",
        text: "Você não está mais prompting. Está lendo o output e testando. O agente prompta a si mesmo.",
      },
    ],
  },
  {
    number: 9,
    slug: "fluxos",
    title: "Desenhando fluxos antes de construir",
    path: "comum",
    pathNote: "Mais crítico no produto",
    blocks: [
      {
        kind: "paragraph",
        text: "Antes de escrever qualquer documento ou abrir o Lovable, desenhe os processos. Quando você coloca um processo no papel, seu cérebro começa a enxergar os casos que não pensou.",
      },
      { kind: "subheading", text: "Como desenhar" },
      {
        kind: "list",
        items: [
          "Papel e caneta — funciona perfeitamente, fotografa e envia para a IA",
          "Excalidraw — gratuito, no navegador, sem cadastro",
          "Miro ou FigJam — mais completos, plano gratuito",
        ],
      },
      {
        kind: "callout",
        variant: "case",
        title: "Exemplo real",
        text: "Ao desenhar o fluxo de autocadastro do condômino, descobrimos que precisávamos de uma etapa de aprovação pela síndica antes de o condômino aparecer na lista ativa. Sem esse desenho, teríamos construído sem proteção e descoberto o problema só quando um morador errado se cadastrasse.",
      },
    ],
  },
  {
    number: 10,
    slug: "identidade-visual",
    title: "Identidade visual com Claude Design",
    path: "produto",
    pathNote: "Produto principalmente. Backoffice pode pular.",
    blocks: [
      {
        kind: "paragraph",
        text: "O Claude tem um modo específico para criação de identidade visual. Você descreve o negócio, o público e o tom, e ele gera: logotipo em SVG, paleta com uso definido, par tipográfico, especificações de componentes.",
      },
      { kind: "subheading", text: "O que pedir" },
      {
        kind: "list",
        items: [
          "Nome da marca e variações",
          "Logotipo: horizontal, empilhado e ícone isolado",
          "Paleta com hex e uso de cada cor",
          "Tipografia: uma para títulos, uma para corpo (Google Fonts)",
          "Templates de comunicado",
          "Guia de estilo resumido em formato para desenvolvedor",
        ],
      },
      {
        kind: "paragraph",
        text: "Depois de criar, converta o resultado em `03-design.md` com variáveis CSS, escala tipográfica e especificações de componentes.",
      },
    ],
  },
  {
    number: 11,
    slug: "configurando-lovable",
    title: "Configurando o Lovable com documentos",
    path: "comum",
    blocks: [
      { kind: "subheading", text: "Criando o projeto" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Novo projeto em lovable.dev",
          "Conectar ao GitHub imediatamente — dois cliques",
          "Subir todos os documentos `.md` na pasta `/docs`",
        ],
      },
      {
        kind: "paragraph",
        text: "**Configurando o Knowledge:** Project Settings → Knowledge → cole o texto da Seção 8.",
      },
      { kind: "subheading", text: "A ordem de construção importa" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Fundação: banco de dados + autenticação + layout base",
          "Entidades centrais (a entidade mais importante do sistema)",
          "Módulos que dependem das entidades centrais",
          "Módulos que dependem de outros módulos",
          "Por último: relatórios, exportações, integrações externas",
        ],
      },
      { kind: "prompt", id: "p1" },
      { kind: "prompt", id: "p3" },
    ],
  },
  {
    number: 12,
    slug: "banco-seguranca",
    title: "Banco de dados e segurança",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "**O que é um banco de dados:** onde as informações ficam guardadas permanentemente. Pense como uma planilha inteligente onde cada linha tem um ID único e as planilhas se conectam.",
      },
      {
        kind: "paragraph",
        text: "**O que é RLS (Row Level Security):** define quem pode ver o quê. Sem isso, qualquer usuário logado vê os dados de todos os outros. O Lovable configura quando você descreve os perfis de acesso nos documentos.",
      },
      { kind: "subheading", text: "Regras que valem para qualquer projeto" },
      {
        kind: "list",
        items: [
          "Nunca deletar registros fisicamente — usar soft delete (campo `deleted_at`)",
          "Toda tabela tem id, created_at, updated_at, deleted_at",
          "Chaves secretas apenas em Edge Functions, nunca no frontend",
          "Dados sensíveis nunca em localStorage ou URL",
        ],
      },
      { kind: "subheading", text: "LGPD na prática" },
      {
        kind: "list",
        items: [
          "Colete o mínimo: nome, e-mail, telefone",
          "Evite: CPF, RG, data de nascimento, dados bancários — exceto obrigação legal",
          "Tenha: tela de consentimento com linguagem simples, checkbox não pré-marcado",
          "Ofereça: botão de exclusão de dados (anonimização, não deleção física)",
        ],
      },
    ],
  },
  {
    number: 13,
    slug: "dominio-dns-email",
    title: "Domínio, DNS e e-mail transacional",
    path: "produto",
    pathNote: "Só produto, quando precisar de e-mail",
    blocks: [
      {
        kind: "paragraph",
        text: "**O que é DNS:** a agenda de endereços da internet. Quando você compra um domínio, você acessa um painel onde diz para onde cada subendereço aponta. Configurar o Resend é adicionar três entradas nessa agenda que provam que você é dono do domínio.",
      },
      { kind: "subheading", text: "Resend — passo a passo" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Criar conta em resend.com (gratuito até 1.000 e-mails/mês)",
          "Adicionar seu domínio no painel",
          "O Resend fornece 3 registros DNS",
          "Copiar cada registro para o painel do registro.br ou IONOS",
          "Aguardar propagação (geralmente menos de 1h, pode levar até 48h)",
          "Verificar no Resend que foi reconhecido",
          "Pedir ao Lovable: \"Configure envio de e-mails usando Resend com a chave [sua chave API]\"",
        ],
      },
    ],
  },
  {
    number: 14,
    slug: "seo-rastreamento",
    title: "SEO e rastreamento",
    path: "produto",
    blocks: [
      {
        kind: "paragraph",
        text: "**SEO:** conjunto de práticas que influencia em qual posição seu site aparece quando alguém pesquisa no Google. O Lovable já gera estrutura básica.",
      },
      { kind: "subheading", text: "Ferramentas de rastreamento" },
      {
        kind: "list",
        items: [
          "**Lovable Analytics** — nativo, simples, sem configuração. Começa aqui.",
          "**LogRocket** — mostra exatamente como cada usuário navegou. Sessões com 1 segundo são robôs — ignore.",
          "**Google Analytics** — mais completo, mais complexo. Deixe para quando o projeto estiver maduro.",
        ],
      },
    ],
  },
  {
    number: 15,
    slug: "changelog",
    title: "CHANGELOG: documentando o que foi feito",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "Este é o documento mais ignorado e o mais útil quando algo quebra. *Forward documentation* (PRDs, tasks) faz o projeto andar. *Backward documentation* (CHANGELOG) faz o projeto sobreviver.",
      },
      {
        kind: "callout",
        variant: "case",
        title: "Caso real — SíndicaPro",
        text: "O CHANGELOG não foi configurado desde o início. Resolver no meio da obra exigiu um prompt específico para criar o arquivo e reconstruir o histórico. Se você cometeu o mesmo erro, use o Prompt 6.",
      },
      {
        kind: "code",
        lang: "markdown",
        text: `# CHANGELOG.md

## [2025-XX-XX]

### Adicionado
- [ADD] Módulo de autenticação — login, cadastro, recuperação de senha

### Corrigido
- [FIX] RLS da tabela condominios não filtrava deleted_at
       — causa raiz: trigger set_updated_at ausente
       — corrigido conforme 05-dados.md seção triggers

### Segurança
- [SECURITY] Chave Resend passada pelo frontend — movida para Edge Function

### Documentação
- [DOC] RULES.md atualizado: regra sobre Edge Functions`,
      },
      { kind: "prompt", id: "p6" },
    ],
  },
  {
    number: 16,
    slug: "seguranca-performance",
    title: "Segurança e performance: ferramentas nativas do Lovable",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "O Lovable tem duas ferramentas nativas que você usa **depois que o build estiver completo** — não módulo a módulo. Usar no meio do build interrompe o fluxo sem necessidade.",
      },
      { kind: "subheading", text: "O ciclo correto" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Build completo (todos os grupos do tasks.md)",
          "Teste humano como usuário real",
          "Ferramenta de segurança nativa do Lovable",
          "Ferramenta de performance nativa do Lovable",
          "Corrigir o que falhou via chat (use o Prompt 5)",
          "Publica",
        ],
      },
      {
        kind: "callout",
        variant: "warn",
        title: "Três regras desde o início",
        text: "RLS ativo em todas as tabelas desde o Grupo 0. Soft delete desde o primeiro modelo de dados. Chaves de API nunca no frontend, sempre em Edge Functions.",
      },
      { kind: "prompt", id: "p5" },
    ],
  },
  {
    number: 17,
    slug: "prompts-prontos",
    title: "Prompts prontos para copiar e colar",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "Esta seção existe para você não precisar pensar no prompt certo na hora errada. A galeria completa fica logo abaixo desta seção, com botão de copiar em cada um. Mais embaixo tem também um **gerador de prompt personalizado** que usa Lovable AI para construir um prompt sob medida para o seu problema.",
      },
    ],
  },
  {
    number: 18,
    slug: "debug",
    title: "Debug: protocolo quando travar",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "Todo sistema trava. Não importa quem construiu. O desespero vai bater e isso é normal. O que importa é saber a ordem certa de escalação.",
      },
      { kind: "subheading", text: "Escalonamento — pare assim que resolver" },
      {
        kind: "list",
        ordered: true,
        items: [
          "**Try to fix do Lovable** — até 3 vezes. Se não resolveu, pare.",
          "**Investigação via chat** — print do erro + contexto + Prompt 7",
          "**Claude Code ou Codex** — projeto inteiro via GitHub",
          "**Pedir ao Lovable para refatorar o módulo** específico",
          "**Chamar um desenvolvedor** com acesso ao repositório",
        ],
      },
      {
        kind: "callout",
        variant: "warn",
        title: "O que nunca fazer",
        text: "Deletar o projeto. Você perde o domínio, o banco de dados, o histórico e tudo que foi construído. Não existe situação em que deletar é a resposta certa para um projeto em andamento.",
      },
      { kind: "prompt", id: "p7" },
      { kind: "prompt", id: "p8" },
    ],
  },
  {
    number: 19,
    slug: "github-claude-code",
    title: "GitHub e Claude Code",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "**GitHub** é onde o código fica guardado com histórico completo. Pense no Google Docs com histórico de versões, mas para código. Você não precisa entender tudo. A função principal: guardar histórico + conectar ao Claude Code.",
      },
      { kind: "subheading", text: "Quando usar Claude Code" },
      {
        kind: "list",
        items: [
          "Quando o Lovable não resolve um bug após 3 tentativas",
          "Quando precisa de lógica complexa (PDF personalizado, integrações avançadas)",
          "Quando quer revisar o projeto inteiro de uma vez",
        ],
      },
      { kind: "subheading", text: "Como conectar Claude Code ao projeto" },
      {
        kind: "code",
        lang: "bash",
        text: `# 1. Instale o Git: git-scm.com
# 2. Instale o Claude Code:
npm install -g @anthropic-ai/claude-code

# 3. No terminal, navegue até a pasta do projeto
git clone [URL do repositório]
cd [nome-do-projeto]

# 4. Execute o Claude Code (lê CLAUDE.md automaticamente)
claude`,
      },
    ],
  },
  {
    number: 20,
    slug: "caso-cristina",
    title: "Caso real: Cristina Gestão Condominial",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "Esta seção é o fio condutor de todo o guia. Veja a linha do tempo abaixo, com tudo que foi concluído na fase de planejamento, o que está em build no Lovable e os três erros documentados que viraram regras novas no RULES.md.",
      },
    ],
  },
  {
    number: 21,
    slug: "checklist-producao",
    title: "Antes de publicar: checklist de produção",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "Esta seção nasceu de uma revisão real do projeto Cristina Gestão Condominial feita pelo próprio Lovable depois do primeiro deploy. Ele identificou lacunas que nenhum documento havia coberto.",
      },
      {
        kind: "checklist",
        title: "Infraestrutura",
        items: [
          "Domínio próprio configurado e apontando para o Lovable",
          "Subdomínio de e-mail configurado no Resend (DNS validado)",
          "Instância Supabase paga (se precisar de backups automáticos)",
        ],
      },
      {
        kind: "checklist",
        title: "Integrações",
        items: [
          "RESEND_API_KEY configurada nas variáveis de ambiente",
          "TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE configurados",
          "Templates WhatsApp submetidos e aprovados pela Meta",
        ],
      },
      {
        kind: "checklist",
        title: "Segurança",
        items: [
          "Scan de segurança nativo do Lovable sem erros críticos",
          "RLS ativo e validado em todas as tabelas",
          "Nenhuma chave de API exposta no frontend",
        ],
      },
      {
        kind: "checklist",
        title: "Funcional",
        items: [
          "Checklist de aceite de todos os grupos executado e registrado",
          "Fluxo ponta-a-ponta testado com usuário real (não o desenvolvedor)",
          "Dados de demonstração disponíveis para onboarding",
        ],
      },
      {
        kind: "callout",
        variant: "info",
        text: "Itens não concluídos não bloqueiam o build — mas bloqueiam o go-live com usuários reais.",
      },
    ],
  },
  {
    number: 22,
    slug: "faq",
    title: "FAQ",
    path: "comum",
    blocks: [
      {
        kind: "paragraph",
        text: "A desenvolver com base nas dúvidas reais que aparecerem durante o build. Perguntas previstas:",
      },
      {
        kind: "list",
        items: [
          "Preciso saber programar para usar o Lovable?",
          "Quanto custa construir um sistema assim?",
          "O que acontece se o Lovable fechar amanhã?",
          "Preciso de CNPJ para publicar um produto?",
          "Quanto tempo leva para construir um sistema como o SíndicaPro?",
          "Consigo migrar para fora do Lovable depois?",
          "Qual a diferença entre Lovable e Bubble?",
          "Posso usar o mesmo sistema para vários clientes?",
          "O que é o Supabase exatamente?",
          "Por que o processo de documentos parece muito trabalho?",
        ],
      },
    ],
  },
];
