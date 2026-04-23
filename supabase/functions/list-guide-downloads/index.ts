import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-admin-password",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function toCsv(rows: Array<Record<string, unknown>>): string {
  if (rows.length === 0) return "name,email,language,created_at\n";
  const headers = ["name", "email", "language", "created_at"];
  const escape = (v: unknown) => {
    const s = String(v ?? "");
    if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };
  const head = headers.join(",");
  const body = rows
    .map((r) => headers.map((h) => escape(r[h])).join(","))
    .join("\n");
  return `${head}\n${body}\n`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const adminPassword = Deno.env.get("ADMIN_PASSWORD");
  if (!adminPassword) {
    return new Response(
      JSON.stringify({ error: "admin_password_not_configured" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  const provided = req.headers.get("x-admin-password") ?? "";
  if (!timingSafeEqual(provided, adminPassword)) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search")?.trim() ?? "";
    const from = url.searchParams.get("from");
    const to = url.searchParams.get("to");
    const format = url.searchParams.get("format");
    const limit = Math.min(
      Math.max(parseInt(url.searchParams.get("limit") ?? "50", 10), 1),
      500
    );
    const offset = Math.max(
      parseInt(url.searchParams.get("offset") ?? "0", 10),
      0
    );

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    let query = supabase
      .from("guide_downloads")
      .select("id, name, email, language, created_at", { count: "exact" })
      .order("created_at", { ascending: false });

    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%`);
    }
    if (from) query = query.gte("created_at", from);
    if (to) query = query.lte("created_at", to);

    if (format === "csv") {
      const { data, error } = await query.limit(10000);
      if (error) throw error;
      const csv = toCsv(data ?? []);
      return new Response(csv, {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="guide-downloads-${new Date().toISOString().slice(0, 10)}.csv"`,
        },
      });
    }

    const { data, count, error } = await query.range(
      offset,
      offset + limit - 1
    );
    if (error) throw error;

    return new Response(
      JSON.stringify({ rows: data ?? [], total: count ?? 0 }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("List error:", err);
    return new Response(JSON.stringify({ error: "server_error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
