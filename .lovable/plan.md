

# Reorganizar fluxo do guia em 3 partes (Teoria → Prática → Pós-build)

A reorganização ficou pendente do plano anterior (foi sobrescrita pelo escopo do download .md). Vou aplicá-la agora — só conteúdo e ordem, **sem mexer em design**.

## Nova ordem das 22 seções

```text
PARTE I — TEORIA (entender antes de abrir qualquer ferramenta)
  1. O que é vibe coding                         (atual 1)
  2. Antes de abrir qualquer ferramenta          (atual 2)
  3. As ferramentas                              (atual 3)
  4. Os conectores                               (atual 5)
  5. Preciso de domínio?                         (atual 4)
  6. Banco de dados e segurança                  (atual 12 → sobe)
  7. SEO e rastreamento                          (atual 14 → sobe)
  8. PRDs e context engineering                  (fusão de atuais 6 + 8)

PARTE II — PRÁTICA (na ordem de execução)
  9.  Desenhando fluxos antes de construir       (atual 9)
  10. Identidade visual com Claude Design        (atual 10)
  11. Os documentos: estrutura e ordem           (atual 7 → desce)
  12. Configurando o Lovable com documentos      (atual 11)
  13. Domínio, DNS e e-mail transacional         (atual 13)
  14. Prompts prontos para copiar e colar        (atual 17 → âncora do PromptGallery)

PARTE III — DEPOIS DO BUILD
  15. CHANGELOG: documentando o que foi feito    (atual 15)
  16. Segurança e performance nativas            (atual 16)
  17. Debug: protocolo quando travar             (atual 18)
  18. GitHub e Claude Code                       (atual 19)
  19. Caso real: Amaro - Gestão Condominial      (atual 20 → âncora do TimelineCristina)
  20. Antes de publicar: checklist de produção   (atual 21)
  21. FAQ                                        (atual 22)
```

### Costuras necessárias

- **Fundir Seções 6 ("Quando planejar") + 8 ("Context engineering") na nova Seção 8** — hoje a 6 termina anunciando "context engineering" e a 8 só explica o conceito 2 seções depois, com a 7 perdida no meio. A nova Seção 8 vira **"PRDs e context engineering"**: começa com o tema "quando planejar", define PRD, define context engineering e explica o Knowledge do Lovable. Mantém os prompts `knowledge` e `p2` e todos os parágrafos atuais — só une e remove a frase de gancho duplicada.
- **Subir Seção 12 (banco/segurança) e 14 (SEO)** para a Parte I — são teoria que precede o build.
- **Renumerar `number` de 1 a 21**. **Slugs permanecem iguais** (TOC, links e âncoras seguem funcionando).
- `PromptGallery` + `PromptGenerator` continuam ancorados em `prompts-prontos` (agora seção 14, fim da Parte II — onde o usuário está pronto para executar).
- `TimelineCristina` continua ancorado em `caso-cristina` (agora seção 19).
- `JourneyPicker` migra de "depois da seção 2" para "início da Parte II" (faz mais sentido escolher caminho quando vai pôr a mão na massa).

### Separadores visuais entre as partes

Componente novo `src/components/guide/PartHeader.tsx` — bloco grande com etiqueta "PARTE I/II/III", título ("Teoria" / "Prática" / "Depois do build") e uma linha de descrição. Mesmo design do guia (coral/amarelo/preto, Space Grotesk, borda preta + sombra). Renderizado 3x no `Index.tsx` antes do primeiro item de cada parte.

## Arquivos modificados / criados

**Modificados:**
- `src/content/guide.ts` — reordenar `SECTIONS`, renumerar campo `number`, fundir seções 6+8 em uma só com slug `context-engineering` (preservando conteúdo dos 2 atuais).
- `src/pages/Index.tsx` — agrupar seções por parte, inserir 3 `<PartHeader>`, mover `JourneyPicker` para o início da Parte II.
- `src/i18n/translations.ts` — chaves novas: `parts.I.label/title/desc`, `parts.II.*`, `parts.III.*` (PT/EN).

**Criados:**
- `src/components/guide/PartHeader.tsx`

## O que NÃO muda

- Design, cores, fontes, componentes, layout — intactos.
- Conteúdo de cada seção — só **ordem** muda. A única edição textual é a fusão das seções 6+8 (sem perder texto, só removendo a frase-gancho duplicada).
- Slugs — TOC, âncoras e links externos continuam válidos.
- Filtros de jornada (comum/backoffice/produto) por seção — mantidos.
- Hero, Footer, Navigation, rota `/portfolio`, `/admin/leads` — sem mudança.
- Download .md, `DownloadGateDialog`, edge functions, `exportGuide.ts` — sem mudança (o export passa a refletir a nova ordem automaticamente, já que lê de `SECTIONS`).
- i18n EN do conteúdo do guia — segue só PT (igual hoje).

