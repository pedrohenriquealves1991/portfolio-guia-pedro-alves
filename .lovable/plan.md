

# Capturar nome + email antes do download do .md

Antes de gerar o arquivo Markdown, mostro um modal pedindo **nome** e **email**. Os dados são salvos no banco (Lovable Cloud) e você é notificado por email a cada download. Sem pagamento, sem login — só o gate.

## Como você vai consultar os dados

Duas formas, em paralelo:

1. **Email automático para você** — toda vez que alguém baixar, você recebe um email em `pedro@regulamentei.com.br` com nome, email e timestamp do download. É o canal "tempo real".
2. **Página `/admin/leads`** — rota protegida por senha simples (você digita uma senha que fica num secret). Lista todos os leads em tabela, com busca, filtro por data e botão "Exportar CSV". É o canal "consulta histórica".

## Arquitetura

```text
[Hero / FinalCTA]
    └─ click "Baixar guia em .md"
        └─ <DownloadGateDialog/>  (nome + email + LGPD checkbox)
            └─ supabase.functions.invoke('register-guide-download')
                ├─ INSERT em guide_downloads (nome, email, ip, ua, lang)
                ├─ envia email pra você via send-transactional-email
                └─ retorna { ok: true }
            └─ exportGuideToMarkdown() → trigger download do .md no browser
```

## Mudanças, arquivo por arquivo

### Banco (migration)

Tabela nova `guide_downloads`:
- `id` uuid pk
- `name` text not null (1-100 chars)
- `email` text not null (validado)
- `language` text ('pt' | 'en')
- `user_agent` text, `ip_hash` text (sha256, sem IP cru — LGPD)
- `created_at` timestamptz default now()
- RLS habilitado: **sem policy de SELECT pública** (só service role lê). INSERT é feito pela edge function com service role, então também não precisa de policy de INSERT pública.
- Índice em `created_at desc` e `email`.

Tabela `admin_settings` (1 linha) com hash da senha de admin — ou simplesmente uso secret `ADMIN_PASSWORD` na edge function (mais simples, sem tabela). **Vou pelo secret.**

### Edge Functions (2 novas)

**`supabase/functions/register-guide-download/index.ts`**
- Valida body com Zod: `name` (1-100), `email` (formato), `language` ('pt'|'en')
- Hash do IP (SHA-256) para LGPD compliance
- INSERT em `guide_downloads`
- Chama `send-transactional-email` para te notificar (template novo `guide-download-notification`)
- Retorna `{ ok: true }` — nunca falha o download por causa do email
- CORS habilitado, sem JWT

**`supabase/functions/list-guide-downloads/index.ts`**
- Recebe header `x-admin-password`
- Valida contra secret `ADMIN_PASSWORD` (timing-safe compare)
- Aceita query params: `from`, `to`, `search` (busca em nome/email), `limit`, `offset`
- Retorna `{ rows: [...], total: N }`
- Também aceita `?format=csv` que retorna CSV pronto pra download

### Email transacional (infraestrutura)

Como você ainda **não tem email infrastructure configurada**, o fluxo correto é:
1. Você precisa configurar um domínio de envio de email (Lovable Cloud → Emails). Posso te mostrar o setup quando aprovar este plano.
2. Depois disso, eu crio o template `guide-download-notification` em `_shared/transactional-email-templates/` — assunto: "Novo download do guia: {nome}", corpo simples com nome, email e timestamp.
3. Edge function `register-guide-download` chama `send-transactional-email` com esse template + `recipientEmail: 'pedro@regulamentei.com.br'`.

**Se você não quiser configurar domínio de email agora**, alternativa: pulo o email e você consulta tudo só pela página `/admin/leads`. Decidimos depois — o plano atual assume que vamos configurar.

### Frontend

**`src/components/guide/DownloadGateDialog.tsx`** (novo)
- Usa `Dialog` do shadcn
- Form com `react-hook-form` + Zod: nome (obrigatório), email (obrigatório, validado), checkbox LGPD ("Concordo em receber atualizações sobre o guia")
- Estilo: card amarelo com borda preta + sombra (mesmo visual do `FinalCTA`)
- Submit: chama edge function → em sucesso, dispara o download e fecha
- i18n PT/EN

**`src/lib/exportGuide.ts`** (novo) — Já estava no plano anterior. Função pura `exportGuideToMarkdown()` que monta o `.md` a partir de `SECTIONS`, `PROMPTS`, `TOOLS` e dispara download via `Blob` + `<a download>`.

**`src/components/Hero.tsx`** e **`src/components/guide/FinalCTA.tsx`** — Trocar o botão de download direto por um que abre o `DownloadGateDialog`. O download real só acontece após o submit do form.

**`src/pages/AdminLeads.tsx`** (novo) — Rota `/admin/leads`:
- Tela de senha (input password + botão "Entrar")
- Senha fica em `sessionStorage` durante a sessão
- Ao logar: tabela com nome, email, idioma, data; busca por texto; filtros de data; botão "Exportar CSV"
- Paginação (50 por página)
- Visual minimalista, no mesmo design system do site

**`src/App.tsx`** — Adicionar rota `/admin/leads`.

### i18n

Adicionar em `src/i18n/translations.ts`:
- `downloadGate.title` — "Antes de baixar..." / "Before downloading..."
- `downloadGate.subtitle` — "Preciso de duas coisas só. Sem spam." / "Just two things. No spam."
- `downloadGate.name`, `downloadGate.email`, `downloadGate.consent`, `downloadGate.submit`
- `downloadGate.success` — "Pronto! O download começou." / "Done! Download started."

## Arquivos modificados / criados

**Criados:**
- `supabase/functions/register-guide-download/index.ts`
- `supabase/functions/list-guide-downloads/index.ts`
- `supabase/functions/_shared/transactional-email-templates/guide-download-notification.tsx`
- `src/components/guide/DownloadGateDialog.tsx`
- `src/lib/exportGuide.ts`
- `src/pages/AdminLeads.tsx`
- migration: `guide_downloads` table + RLS

**Modificados:**
- `src/components/Hero.tsx` — botão abre dialog
- `src/components/guide/FinalCTA.tsx` — botão abre dialog
- `src/App.tsx` — rota `/admin/leads`
- `src/i18n/translations.ts` — chaves novas
- `supabase/functions/_shared/transactional-email-templates/registry.ts` — registrar template novo
- `supabase/config.toml` — `verify_jwt = false` para as 2 edge functions

## Pré-requisitos que você precisa decidir

1. **Configurar domínio de email** para receber as notificações? (recomendo sim — você já tem `pedro@regulamentei.com.br`, posso configurar `notify.regulamentei.com.br` como subdomínio de envio)
2. **Senha de admin** — vou criar um secret `ADMIN_PASSWORD`. Você define o valor quando eu pedir.

## O que NÃO muda

- Design, fontes, paleta — tudo igual.
- Reorganização das seções (plano anterior aprovado) segue valendo, este plano roda em cima daquele.
- Restante do guia (conteúdo, prompts, tools) intacto.
- Rota `/portfolio` e Footer sem mudança.

