import { useEffect, useMemo, useState } from "react";
import { Download, Loader2, Lock, Search } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LeadRow {
  id: string;
  name: string;
  email: string;
  language: string;
  created_at: string;
}

const STORAGE_KEY = "admin_pwd_v1";
const PAGE_SIZE = 50;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export default function AdminLeads() {
  const [password, setPassword] = useState<string>(
    () => sessionStorage.getItem(STORAGE_KEY) ?? ""
  );
  const [authed, setAuthed] = useState(false);
  const [tryingAuth, setTryingAuth] = useState(false);
  const [pwdInput, setPwdInput] = useState("");

  const [rows, setRows] = useState<LeadRow[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [page, setPage] = useState(0);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / PAGE_SIZE)),
    [total]
  );

  const buildUrl = (extra?: Record<string, string>) => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (from) params.set("from", new Date(from).toISOString());
    if (to) {
      const end = new Date(to);
      end.setHours(23, 59, 59, 999);
      params.set("to", end.toISOString());
    }
    params.set("limit", String(PAGE_SIZE));
    params.set("offset", String(page * PAGE_SIZE));
    if (extra) for (const [k, v] of Object.entries(extra)) params.set(k, v);
    return `${SUPABASE_URL}/functions/v1/list-guide-downloads?${params.toString()}`;
  };

  const fetchRows = async (pwd: string) => {
    setLoading(true);
    try {
      const res = await fetch(buildUrl(), {
        headers: { "x-admin-password": pwd },
      });
      if (res.status === 401) {
        sessionStorage.removeItem(STORAGE_KEY);
        setPassword("");
        setAuthed(false);
        toast.error("Senha inválida");
        return;
      }
      if (!res.ok) {
        toast.error("Erro ao carregar leads");
        return;
      }
      const data = await res.json();
      setRows(data.rows ?? []);
      setTotal(data.total ?? 0);
      setAuthed(true);
    } catch (err) {
      console.error(err);
      toast.error("Erro de rede");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (password) {
      fetchRows(password);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pwdInput) return;
    setTryingAuth(true);
    try {
      const res = await fetch(
        `${SUPABASE_URL}/functions/v1/list-guide-downloads?limit=1`,
        { headers: { "x-admin-password": pwdInput } }
      );
      if (res.status === 401) {
        toast.error("Senha inválida");
        return;
      }
      if (!res.ok) {
        toast.error("Erro");
        return;
      }
      sessionStorage.setItem(STORAGE_KEY, pwdInput);
      setPassword(pwdInput);
      setAuthed(true);
      await fetchRows(pwdInput);
    } finally {
      setTryingAuth(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(0);
    fetchRows(password);
  };

  const exportCsv = async () => {
    const url = buildUrl({ format: "csv" });
    const res = await fetch(url, { headers: { "x-admin-password": password } });
    if (!res.ok) {
      toast.error("Erro ao exportar");
      return;
    }
    const blob = await res.blob();
    const a = document.createElement("a");
    const dlUrl = URL.createObjectURL(blob);
    a.href = dlUrl;
    a.download = `guide-downloads-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(dlUrl), 1000);
  };

  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setPassword("");
    setAuthed(false);
    setRows([]);
    setTotal(0);
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-primary border-2 border-foreground rounded-sm p-8 shadow-[8px_8px_0_0_hsl(var(--foreground))]"
        >
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-5 h-5" />
            <h1 className="font-display text-2xl font-bold text-foreground">
              Admin · Leads
            </h1>
          </div>
          <p className="text-sm text-foreground/75 mb-6">
            Digite a senha de admin para ver os downloads do guia.
          </p>
          <Label
            htmlFor="pwd"
            className="text-xs font-bold uppercase tracking-wider"
          >
            Senha
          </Label>
          <Input
            id="pwd"
            type="password"
            value={pwdInput}
            onChange={(e) => setPwdInput(e.target.value)}
            className="bg-background border-2 border-foreground rounded-sm mt-1.5"
            autoFocus
          />
          <button
            type="submit"
            disabled={tryingAuth}
            className="w-full mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-foreground text-background font-display font-bold uppercase text-sm tracking-wider rounded-sm hover:bg-foreground/85 transition-colors disabled:opacity-60"
          >
            {tryingAuth ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Lock className="w-4 h-4" />
            )}
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Leads do Guia
            </h1>
            <p className="text-sm text-foreground/60 mt-1">
              {total} {total === 1 ? "download" : "downloads"} no total
            </p>
          </div>
          <button
            onClick={logout}
            className="text-xs font-bold uppercase tracking-wider text-foreground/60 hover:text-foreground"
          >
            Sair
          </button>
        </div>

        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-3 mb-6"
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nome ou email"
              className="bg-background border-2 border-foreground rounded-sm pl-9"
            />
          </div>
          <Input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="bg-background border-2 border-foreground rounded-sm md:w-44"
          />
          <Input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="bg-background border-2 border-foreground rounded-sm md:w-44"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-foreground text-background font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-foreground/85 transition-colors"
          >
            Filtrar
          </button>
          <button
            type="button"
            onClick={exportCsv}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-background border-2 border-foreground text-foreground font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-muted transition-colors"
          >
            <Download className="w-4 h-4" /> CSV
          </button>
        </form>

        <div className="border-2 border-foreground rounded-sm overflow-hidden bg-background">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-foreground text-background">
                <tr>
                  <th className="text-left px-4 py-3 font-bold uppercase text-xs tracking-wider">
                    Nome
                  </th>
                  <th className="text-left px-4 py-3 font-bold uppercase text-xs tracking-wider">
                    Email
                  </th>
                  <th className="text-left px-4 py-3 font-bold uppercase text-xs tracking-wider">
                    Idioma
                  </th>
                  <th className="text-left px-4 py-3 font-bold uppercase text-xs tracking-wider">
                    Data
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="text-center py-12">
                      <Loader2 className="w-5 h-5 animate-spin inline" />
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center py-12 text-foreground/50"
                    >
                      Nenhum lead encontrado.
                    </td>
                  </tr>
                ) : (
                  rows.map((r) => (
                    <tr
                      key={r.id}
                      className="border-t border-foreground/10 hover:bg-muted/50"
                    >
                      <td className="px-4 py-3 font-medium">{r.name}</td>
                      <td className="px-4 py-3 text-foreground/80">
                        {r.email}
                      </td>
                      <td className="px-4 py-3 text-foreground/60 uppercase text-xs">
                        {r.language}
                      </td>
                      <td className="px-4 py-3 text-foreground/60 text-xs">
                        {new Date(r.created_at).toLocaleString("pt-BR")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4 text-sm">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="px-4 py-2 border-2 border-foreground rounded-sm font-bold uppercase text-xs tracking-wider disabled:opacity-40"
            >
              Anterior
            </button>
            <span className="text-foreground/60">
              Página {page + 1} de {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="px-4 py-2 border-2 border-foreground rounded-sm font-bold uppercase text-xs tracking-wider disabled:opacity-40"
            >
              Próxima
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
