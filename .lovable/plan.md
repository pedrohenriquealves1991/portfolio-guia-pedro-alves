# Atualização de conteúdo das seções 1, 3, 5 e 7

Vou atualizar somente o conteúdo (textos, lista de cursos, grid de ferramentas e bloco de documentos). **Nada de design muda** — mesmas classes, mesmos componentes, mesma paleta.

## Seção 1 — "O que é vibe coding"

**Adicionar antes de "Como fazer isso bem"** um parágrafo curto sobre brainstorming com Claude Code:

> "Tudo começa com brainstorming. Eu crio um **Projeto no Claude** para conversar livremente sobre o que faço no dia a dia, despejar o processo todo por voz e fazer o upload do máximo de documentos possíveis — formulários em Word, planilhas, prints de WhatsApp, fluxos rabiscados. Deixo a IA organizar essa bagunça antes de pensar em escrever uma linha de código."

**Adicionar depois desse parágrafo** uma frase sobre escopo do guia:

> "Importante: este guia é sobre **sistemas com fluxos mais complexos que se conectam** — múltiplos usuários, banco de dados, lógica automática. Não é sobre landing pages ou formuários simples."

**Reescrever a intro do bloco "Aprendendo pela fonte antes de comprar curso"** — adicionar parágrafo antes da lista de links:

> "Antes de pagar qualquer curso na internet, **faça os cursos das próprias plataformas que você escolher usar**. São gratuitos, oficiais e cobrem o básico melhor que a maioria dos infoprodutos. Recomendo estes para aprender os conceitos que abordo no guia:"

**Callout "Sobre o FOMO"** — reescrever a primeira frase para deixar claro o gatilho (busca por tutoriais), mantendo o resto:

> "Quando você começar a procurar tutoriais no YouTube e na internet, vai ser bombardeado com conteúdo de IA todos os dias e parecer que está atrasado. **Você não está atrasado.** Seu uso de IA é para resolver um problema real — no seu trabalho, no seu negócio, na vida de alguém próximo. Escolha uma ou duas ferramentas e vá fundo. O resto é ruído."

## Seção 3 — "As ferramentas"

**Reescrever o parágrafo de abertura:**

> "O essencial é **Claude e Lovable** — com essas duas você já constrói. Mas vale conhecer as outras três da base (Supabase/Lovable Cloud, GitHub e Vercel) para entender onde os dados vivem, como o código fica versionado e onde o site é publicado. Comece pelas duas primeiras e expanda quando fizer sentido."

Mantém o `ToolGrid` igual (claude, lovable, supabase, github, vercel) e o callout "Caminho produto" intacto.

## Seção 5 — "Os conectores"

**Adicionar `lovable-cloud` ao grid de ferramentas.** Inclui um novo card em `src/content/tools.ts`:

- **id**: `lovable-cloud`
- **name**: Lovable Cloud
- **role**: Backend pronto sem configurar nada
- **detail**: "Banco de dados, autenticação, storage e edge functions já integrados ao Lovable. Você descreve a tabela em português e ele cria com RLS na hora. É a forma mais simples de ter backend de verdade — sem precisar abrir o painel do Supabase."

E atualiza o bloco `tools` da seção 5 para: `["lovable-cloud", "resend", "twilio", "firecrawl", "lovable-ai", "lovable-payments"]`.

## Seção 7 — "Os documentos: estrutura e ordem"

### a) Explicação melhor de Markdown

Substituir o parágrafo atual por:

> "**O que é Markdown:** é um formato de texto simples que vira documento formatado. Pense no Word ou Google Docs: você clica em "Negrito" e o texto fica negrito. No Markdown você digita `**negrito**` e ele aparece negrito quando renderizado. `# Título` vira título grande, `- item` vira lista. A diferença é que o arquivo é leve, abre em qualquer editor e — o mais importante — **a IA lê melhor Markdown do que qualquer outro formato**. Os arquivos terminam em `.md`."

### b) Reordenar o bloco `code` (estrutura completa) para refletir a ordem de criação

Vou trocar a árvore de pastas para que **a ordem visual = ordem de criação**, eliminando a confusão:

```text
docs/
 
   RULES.md              ← 0. como o código deve ser escrito
  01-masterplan.md       ← 1. visão geral, entidades, módulos, fluxos
  02-dados.md            ← 2. todas as tabelas, campos, relacionamentos
  03-design.md           ← 3. paleta, fontes, componentes (após identidade)
  04-seguranca.md        ← 4. RLS por perfil, LGPD, retenção
  05-jornadas.md         ← 5. jornadas dos usuários e mapa de navegação
  06-governanca.md       ← 6. regras de negócio fixas e decisões
  07-implementacao.md    ← 7. ordem de build + tasks.md embutido
  08-processos/          ← 8. sob demanda, antes de cada módulo
    auth.md
    condominios.md
    unidades-moradores.md
  CLAUDE/LOVABLE.md              ← 8. arquivo raiz lido automaticamente
 
```

&nbsp;

A lista numerada "Ordem de criação" abaixo será removida (vira redundante com a árvore já numerada).

### c) Adicionar 2 linhas explicando cada documento

Substituo a lista numerada por uma `list` (não ordenada) onde cada item já é o nome **+ explicação curta**:

- **RULES.md** — Regras de como o código deve ser escrito: padrões de nome, estrutura de pastas, o que nunca fazer. Sem isso o Lovable toma atalhos que viram bug semanas depois.
- **01. masterplan.md** — Visão geral do produto: o que ele faz, para quem, quais módulos existem e como se conectam. É o mapa que o Lovable consulta para entender o todo antes de mexer numa parte.
- **02-dados.md** — Todas as tabelas do banco, campos, tipos e relacionamentos. Define a fundação. Mudar depois custa caro, por isso vem antes do build.
- **03-design.md** — Paleta, fontes, componentes, tom de voz. Criado depois da identidade visual estar pronta (Seção 10).
- **04-seguranca.md** — Quem pode ver e fazer o quê (RLS por perfil), regras de LGPD e retenção de dados. Vem junto com `dados.md` porque segurança nasce com a tabela, não depois.
- **05-jornadas.md** — Os caminhos que cada tipo de usuário percorre no sistema. Ajuda o Lovable a entender o contexto de cada tela.
- **06-governanca.md** — Regras de negócio fixas e decisões já tomadas (ex.: "comunicado é imutável depois de enviado"). Evita que a IA reinvente regra a cada sessão.
- **07-implementacao.md** — A ordem em que cada módulo será construído, com `tasks.md` embutido. É o cronograma que o Lovable executa passo a passo.
- **08-processos/[modulo].md** — Especificação detalhada de um módulo específico (auth, condomínios, etc.). Cria sob demanda, antes de mandar o Lovable construir aquele módulo.
- **CLAUDE/LOVABLE.md** — Arquivo raiz lido automaticamente em toda sessão. Resumo de onde estão as informações importantes nos outros documentos.
  &nbsp;

### d) Adicionar parágrafo final explicando o "porquê" do método

Antes do callout `RULES.md é o mais ignorado…`, adicionar:

> "Cada documento desses faz com que o Lovable execute uma tarefa de cada vez, sem se perder. É igual ao ser humano: você não aprende tudo de uma vez nem executa um projeto inteiro num dia — você divide, aprende um pedaço, executa, valida e segue. Os documentos são a forma de impor esse ritmo à IA."

## Arquivos modificados

- `src/content/guide.ts` — edições nas seções `o-que-e-vibe-coding`, `ferramentas`, `conectores` e `documentos`.
- `src/content/tools.ts` — novo card `lovable-cloud`.

## O que NÃO muda

- Design, cores, fontes, componentes, layout — tudo igual.
- Demais seções (2, 4, 6, 8, 9, 10, 11, 12+) — intactas.
- i18n EN — mantido como está (textos novos só em PT por enquanto, igual ao restante do guia).
- Filtros de jornada, Hero, Footer, rota `/portfolio` — sem mudança.