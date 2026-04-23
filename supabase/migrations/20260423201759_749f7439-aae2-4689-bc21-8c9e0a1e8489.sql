-- Tabela de downloads do guia
CREATE TABLE public.guide_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  language text NOT NULL DEFAULT 'pt' CHECK (language IN ('pt', 'en')),
  user_agent text,
  ip_hash text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Índices
CREATE INDEX idx_guide_downloads_created_at ON public.guide_downloads (created_at DESC);
CREATE INDEX idx_guide_downloads_email ON public.guide_downloads (email);

-- RLS habilitado, sem policies públicas — só service role acessa
ALTER TABLE public.guide_downloads ENABLE ROW LEVEL SECURITY;

-- Bloqueia explicitamente qualquer acesso anon/authenticated
-- (sem policies = nega tudo, mas deixo explícito por clareza)
REVOKE ALL ON public.guide_downloads FROM anon, authenticated;