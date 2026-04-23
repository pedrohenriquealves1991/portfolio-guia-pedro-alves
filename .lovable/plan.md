

# Unificar portfólio + guia em um único hub com i18n PT/EN

Vou trazer o portfólio (`5c98f8d7-…`) para dentro deste projeto como rota `/portfolio`, re-skinando no visual atual do guia (coral/amarelo + Space Grotesk), adicionar o **Amaro - Gestão Condominial** como projeto destaque, e plugar i18n PT/EN em todo o site (guia + portfólio).

## Arquitetura final

```text
/                → Guia de Vibe Coding (já existe)
/portfolio       → Currículo + projetos (novo)
*                → NotFound
```

Header compartilhado (`Navigation.tsx`) ganha link **"Portfolio"** + toggle **PT | EN** + filtros do guia (estes só aparecem em `/`).

## Mudanças, arquivo por arquivo

### 1. i18n (novo módulo, base de tudo)

- **`src/i18n/LanguageContext.tsx`** (novo) — Provider com detecção automática (navigator.language) + persistência em `localStorage`. Igual ao do portfólio original.
- **`src/i18n/translations.ts`** (novo) — Dicionário com chaves para:
  - Hero do guia, navegação, CTA final, footer, JourneyPicker, FinalCTA — traduzidos para EN.
  - Hero/Timeline/Projects/Stack do portfólio (já vem pronto do projeto original).
  - Labels do TimelineCristina (build/erros) e GuideSection (TOC) — traduzidos.
- **`src/components/LanguageSwitcher.tsx`** (novo) — Botão PT|EN compacto, estilizado para o tema do guia (fundo `primary`, texto `foreground`).

### 2. Conteúdo do guia → migrar para i18n

- **`src/content/guide.ts`** — Refatorar de strings literais para chaves traduzidas (`{ pt: "...", en: "..." }`). Mantém a mesma estrutura `SECTIONS`, mas cada `title`/`body`/`subtitle` vira objeto bilíngue. Componentes que consomem (`GuideSection`, `TableOfContents`, etc.) leem `[lang]`.
- **`src/content/prompts.ts`** e **`src/content/tools.ts`** — Mesmo tratamento.
- **`src/content/journey-store.ts`** — Sem mudança (filtro é estado puro).

### 3. App + Roteamento

- **`src/App.tsx`** — Envolver tudo em `<LanguageProvider>` e adicionar rota `/portfolio`.
- **`src/components/Navigation.tsx`**:
  - Adicionar link **Portfolio** (NavLink para `/portfolio`).
  - Adicionar **LanguageSwitcher** (sempre visível).
  - Esconder os filtros "Tudo / Backoffice / Produto" quando `pathname !== "/"` (eles só fazem sentido no guia).
  - Logo "PEDRO" continua linkando para `/`.

### 4. Página `/portfolio` (re-skin coral/amarelo)

- **`src/pages/Portfolio.tsx`** (novo) — Estrutura: `<Hero />` + `<Timeline />` + `<Projects />` + `<Stack />` + `<Footer />` reaproveitando o `Footer.tsx` existente.
- **`src/components/portfolio/Hero.tsx`** (novo) — Hero do portfólio re-skinado:
  - Fundo: gradiente coral atual do guia (não verde).
  - Título: "AI builder & especialista em automação" em **Space Grotesk bold**, com bloco amarelo destacado em torno de uma palavra-chave (estilo igual ao Hero do guia).
  - Tags em pills brancas com borda preta.
  - CTA secundário: "Ver o guia →" linkando para `/`.
- **`src/components/portfolio/Timeline.tsx`** (novo) — Layout 2 colunas (ano | descrição), bordas e tipografia do guia (Space Grotesk para títulos, Inter para corpo). Sem verde/terra.
- **`src/components/portfolio/Projects.tsx`** (novo) — Cards com borda esquerda colorida (mantém o padrão visual), mas usando `primary` (amarelo) / `foreground` / `secondary` em vez de terra/azul/verde. Badges de tipo (SaaS / Interno / Automação) com cores do tema atual.
- **`src/components/portfolio/Stack.tsx`** (novo) — Grid 2/3 colunas de cards com borda esquerda amarela.

### 5. Adicionar Amaro - Gestão Condominial ao portfólio

Em `translations.ts`, adicionar como **primeiro projeto** (mais recente):
- **typeLabel**: `Software personalizado` (PT) / `Custom software` (EN)
- **title**: `Amaro - Gestão Condominial`
- **desc PT**: "Sistema completo de gestão condominial sob medida para síndica profissional. Multi-condomínio, multi-nível de acesso (admin, assistentes, condôminos), gestão de unidades e moradores, manutenções preventivas, log de ocorrências, tarefas, honorários, documentos e portal do condômino. Construído inteiramente no Lovable, do wizard de onboarding ao portal logado."
- **desc EN**: equivalente.
- **impact PT**: "Substituiu WhatsApp + planilhas por um sistema único · 11 grupos de funcionalidades em produção · construído no Lovable do zero."
- **url**: `https://amarogestaocondominial.lovable.app/`
- Adicionar entrada correspondente em `projectMeta` do `Projects.tsx` com `type: "saas"`, `complexity: 3`.

### 6. Footer (compartilhado)

- **`src/components/Footer.tsx`** — Adicionar e-mail + LinkedIn + linha de localização (vinda do portfólio), tudo via i18n. Mantém layout atual mas com mais conteúdo. Aparece nas duas páginas.

### 7. SEO e meta

- **`index.html`** — Atualizar `<title>` para "Pedro Alves · Hub" e descrição para refletir "guia + portfólio". Adicionar `<link rel="canonical">` apropriado.

## Detalhes técnicos importantes

- **Sem dependências novas** — i18n caseiro (Context + objeto), não vai trazer `i18next`.
- **Persistência de idioma**: `localStorage["lang"]`, com fallback para `navigator.language`.
- **Filtros do guia**: continuam funcionando em `/`, ocultos em `/portfolio` via check de `useLocation()`.
- **Reset de scroll** ao trocar de rota: pequeno hook em `App.tsx` que dá `window.scrollTo(0,0)` no mudança de `pathname`.
- **Tipagem**: `Language = "pt" | "en"`, helper `t(obj)` opcional para reduzir verbosidade `obj[lang]`.
- **Dark mode do portfólio original** descartado (o site atual não usa).
- **Tradução do guia**: vou traduzir todo o conteúdo de `guide.ts`, `prompts.ts`, `tools.ts`, Hero, JourneyPicker, FinalCTA, TimelineCristina (labels build/erros + descrições). É volume considerável de texto, mas é trabalho mecânico de tradução PT→EN; nada conceitualmente complexo.

## O que NÃO vai mudar

- Toda a lógica do guia (filtros, prompts, gerador, timeline da Amaro) permanece.
- Edge function `generate-prompt` segue como está.
- Nenhuma alteração de backend ou banco.
- Visual do guia (cores, fontes, layout) intacto.

