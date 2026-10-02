# Pedro Alves · portfolio and guide

Personal site of Pedro Henrique Vieira Alves: medical-device quality and regulatory
professional who builds his own AI workflows.

- **Live:** https://portfolio-guia-pedro-alves.lovable.app
- `/` portfolio (English and Portuguese)
- `/guia` a practical guide, in Portuguese, to building software with AI agents

## What is in here

| Path | Purpose |
| --- | --- |
| `src/pages/Home.tsx` | Portfolio page: hero, selected work, how I work, background, writing, contact |
| `src/content/portfolio.ts` | All portfolio copy, bilingual (`pt` / `en`) |
| `src/pages/Index.tsx` | The guide, assembled from `src/content/guide.ts` |
| `src/content/guide.ts`, `prompts.ts`, `tools.ts` | Guide content (Portuguese) |
| `src/i18n/` | Language detection and the guide's interface strings |
| `src/lib/exportGuide.ts` | Renders the guide as a Markdown download |
| `public/work/` | Screenshots of the projects shown on the portfolio |
| `public/Pedro_Alves_CV.pdf` | CV linked from the portfolio |

## Stack

Vite, React 18, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, React Router.
Supabase is used only by the guide's prompt generator (edge function `generate-prompt`).

## Development

```sh
npm install
npm run dev      # http://localhost:8080
npm test         # vitest: checks PT/EN parity of every bilingual string
npm run build
```

The project is also connected to Lovable; pushes to `main` sync into the Lovable
editor and are published from there.
