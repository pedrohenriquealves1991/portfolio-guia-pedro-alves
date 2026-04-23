

# Um Guia Sincero de Vibe Coding — Site de Página Única

Vou transformar o template atual (portfólio Maya Chen) num site de guia pessoal em português, mantendo **toda a linguagem visual** existente: gradiente coral/pêssego de fundo, navegação amarela com borda preta, tipografia Space Grotesk + Inter, cards inclinados estilo zine, animações framer-motion.

## Estrutura da página

```text
[NAV] Pedro / Guia de Vibe Coding              [EMAIL]  [TOPO]

[HERO]
  H1: Um Guia Sincero de Vibe Coding
  Subtítulo: Para quem quer usar IA no emprego CLT ou criar
  uma ferramenta como profissional liberal — sem promessas
  de produtos revolucionários, só fluxos melhores que os de hoje.
  Mini-descrição: projeto vivo, em construção, baseado num caso real
  (Cristina Gestão Condominial).

[BIFURCAÇÃO DE JORNADA — 2 cards grandes amarelos rotacionados]
  → Organizar processo interno (backoffice)
  → Criar produto com usuários externos
  (filtragem visual: seções marcadas mostram badge do caminho;
   um pill "Mostrando: Tudo / Backoffice / Produto" no topo)

[ÍNDICE LATERAL] — sticky na lateral direita em desktop,
  drawer no mobile, com 22 seções numeradas + scroll-spy.

[SEÇÕES 1–22]  Cada uma renderizada como GuideSection:
  - número grande em estilo display
  - badge de caminho (Comum/Backoffice/Produto)
  - título + corpo em prosa (markdown leve: parágrafos, listas, negrito)
  - blocos especiais quando aplicável:
      • PromptCard (com botão "Copiar")
      • ToolCard (Claude, Lovable, Supabase…)
      • ChecklistCard (lista marcável visualmente)
      • CalloutCard (caso real / erro documentado)
      • LinkCard (cursos, ferramentas)

[SEÇÃO PROMPTS — destaque especial]
  Galeria dos 12 prompts da seção 17, cada um num card
  com fundo amarelo, fonte mono, botão "Copiar" no canto
  e contador de cliques visual (toast de confirmação).

[GERADOR DE PROMPT PERSONALIZADO — Lovable AI]
  Bloco interativo: usuário descreve o problema dele
  ("o que você faz na mão hoje?"), escolhe o caminho
  (backoffice/produto) e o tipo de prompt desejado
  (Knowledge / Build / Debug / Segurança).
  → chama Lovable AI Gateway (google/gemini-2.5-flash)
  → retorna um prompt customizado já formatado, copiável.
  Requer Lovable Cloud ativado.

[CASO REAL — Cristina Gestão Condominial]
  Linha do tempo visual com fases concluídas / pendentes,
  + os 3 "erros documentados" como cards expansíveis.

[CTA FINAL]
  "Este guia é vivo. Vai melhorar com o tempo."
  Links: enviar para um amigo (compartilhar), email do autor.

[FOOTER]  © Pedro · Feito no Brasil · Construído com Lovable
```

## Componentes novos a criar

| Componente | Função |
|---|---|
| `Hero.tsx` (refatorado) | Título do guia + subtítulo + descrição |
| `JourneyPicker.tsx` | Bifurcação backoffice/produto, controla filtro global |
| `TableOfContents.tsx` | Índice lateral sticky com scroll-spy |
| `GuideSection.tsx` | Wrapper genérico para cada uma das 22 seções |
| `PromptCard.tsx` | Bloco de prompt copiável (botão + toast sonner) |
| `ToolCard.tsx` | Card de ferramenta (Claude, Lovable, Resend…) |
| `ChecklistCard.tsx` | Lista visual de checklist (Seção 21) |
| `CalloutCard.tsx` | Caso real / erro documentado (expansível) |
| `PromptGenerator.tsx` | Formulário + edge function Lovable AI |
| `TimelineCristina.tsx` | Linha do tempo do caso real |
| `PathBadge.tsx` | Selo "Comum / Backoffice / Produto" |

## Conteúdo

Vou extrair todas as 22 seções do markdown enviado e estruturá-las num único arquivo `src/content/guide.ts` (tipado) que alimenta os componentes. Isso facilita a edição futura sem mexer em JSX.

Os 12 prompts ficam em `src/content/prompts.ts` para ser fácil adicionar novos.

## Backend (Lovable Cloud + Lovable AI)

Para o gerador de prompt personalizado:
1. Ativar **Lovable Cloud** (necessário para edge functions).
2. Criar edge function `generate-prompt` que recebe `{ problema, caminho, tipo }` e chama o **Lovable AI Gateway** (`google/gemini-2.5-flash`, gratuito até 13/out/2025) com um system prompt que ensina o modelo a gerar prompts no estilo dos 12 da Seção 17.
3. Retorna o prompt customizado em texto. O frontend exibe num PromptCard já com botão de copiar.

## Decisões de design (mantendo o template)

- **Paleta**: mantida (coral/pêssego no fundo, amarelo `--primary` nos destaques, preto no texto e bordas).
- **Tipografia**: Space Grotesk para títulos (já no projeto) + Inter para corpo. Adicionar **JetBrains Mono** (Google Font) só nos blocos de prompt/código.
- **Cards**: reaproveitar o padrão de rotação leve (`rotate-1`, `-rotate-2`) e sombras do `image-card`.
- **Navegação**: barra amarela mantida, mas sem links de portfólio (substituídos por "Topo" e "Email").
- **Animações**: framer-motion fade-up igual ao template atual.

## Rotas a remover

`/projects/form`, `/projects/verve`, `/projects/spotify`, `/projects/figma` e a referência a `/resume` saem do `App.tsx` e do `Navigation.tsx` — não fazem parte do guia. Os arquivos de página antigos podem ser deletados.

## Idioma

Tudo em português (pt-BR). Os meta tags em `index.html`, título e descrição também são reescritos para o guia.

## Entrega em fases (para você ir vendo)

1. **Fase 1** — Reestrutura: novo Hero, JourneyPicker, TOC, render das 22 seções como prosa com PathBadge. Remoção das páginas de projeto. Atualização de meta tags.
2. **Fase 2** — Cards especiais: PromptCard com botão copiar, ToolCard, ChecklistCard, CalloutCard. Galeria dos 12 prompts.
3. **Fase 3** — TimelineCristina + erros documentados expansíveis + CTA final.
4. **Fase 4** — Lovable Cloud + edge function `generate-prompt` + componente PromptGenerator integrado com Lovable AI.

Cada fase é testável e o site fica funcional já no fim da Fase 1.

