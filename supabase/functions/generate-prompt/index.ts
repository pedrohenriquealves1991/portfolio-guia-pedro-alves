import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Você é um assistente que escreve PROMPTS em português (pt-BR) para serem usados no chat do Lovable.dev.

Os prompts que você gera devem seguir o estilo do guia "Um Guia Sincero de Vibe Coding":
- Diretos, sem floreio, sem motivacional.
- Usam vocabulário concreto: tasks.md, RULES.md, /docs, CHANGELOG.md, RLS, edge function, soft delete.
- Sempre pedem para identificar causa raiz antes de corrigir.
- Sempre pedem para registrar o que foi feito (CHANGELOG ou tasks).
- Quando houver lacuna em documento, pedem para avisar antes de seguir.

Você recebe três entradas:
1. problema: descrição em linguagem natural do que o usuário faz na mão hoje, ou do bug, ou do contexto.
2. caminho: "comum" | "backoffice" | "produto"
3. tipo: "knowledge" | "build" | "debug" | "seguranca"

Sua resposta deve ser APENAS JSON válido com este formato exato:
{
  "title": "<título curto, 4–8 palavras, sem aspas dentro>",
  "prompt": "<o prompt pronto para colar — sem aspas em volta, sem prefixo 'Prompt:' nada>"
}

Regras por tipo:
- knowledge: configuração para Project Settings → Knowledge. Comece com "Antes de começar qualquer resposta, diga: 'Lendo documentação'". Inclua regras sobre /docs, RULES.md, CHANGELOG.
- build: tarefa de construção referenciando tasks.md e RULES.md. Pede para executar, atualizar CHANGELOG e tasks, e dizer o que testar.
- debug: pede investigação ampla antes de corrigir, consulta de logs do Supabase, RLS, triggers, e relato antes de corrigir.
- seguranca: começa por "A ferramenta de segurança do Lovable identificou: [contexto]" e pede correção seguindo 06-seguranca.md + RULES.md, com registro [SECURITY] no CHANGELOG.

Quando houver caminho "produto", pode mencionar Resend, domínio, LGPD, Twilio se fizer sentido.
Quando "backoffice", evite essas integrações.
Não invente módulos que o usuário não citou — use placeholders [entre colchetes] quando faltar contexto.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { problema, caminho, tipo } = await req.json();

    if (typeof problema !== "string" || problema.trim().length < 5) {
      return new Response(
        JSON.stringify({ error: "Campo 'problema' inválido." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(
        JSON.stringify({ error: "LOVABLE_API_KEY ausente." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const userMsg = `problema: ${problema}\ncaminho: ${caminho ?? "comum"}\ntipo: ${tipo ?? "build"}`;

    const aiResp = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userMsg },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "emit_prompt",
                description: "Retorna o título e o prompt gerado.",
                parameters: {
                  type: "object",
                  properties: {
                    title: { type: "string" },
                    prompt: { type: "string" },
                  },
                  required: ["title", "prompt"],
                  additionalProperties: false,
                },
              },
            },
          ],
          tool_choice: { type: "function", function: { name: "emit_prompt" } },
        }),
      },
    );

    if (!aiResp.ok) {
      if (aiResp.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit (429). Tente em alguns segundos." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (aiResp.status === 402) {
        return new Response(
          JSON.stringify({ error: "Créditos esgotados (402)." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      const t = await aiResp.text();
      console.error("AI gateway error:", aiResp.status, t);
      return new Response(
        JSON.stringify({ error: "Erro no gateway de IA." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const data = await aiResp.json();
    const toolCall =
      data?.choices?.[0]?.message?.tool_calls?.[0]?.function?.arguments;

    let title = "Prompt personalizado";
    let prompt = "";

    if (toolCall) {
      try {
        const parsed = JSON.parse(toolCall);
        title = parsed.title ?? title;
        prompt = parsed.prompt ?? "";
      } catch (e) {
        console.error("Failed to parse tool args:", e);
      }
    }

    if (!prompt) {
      // fallback: try plain content
      prompt = data?.choices?.[0]?.message?.content ?? "";
    }

    return new Response(
      JSON.stringify({ title, prompt }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("generate-prompt error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
