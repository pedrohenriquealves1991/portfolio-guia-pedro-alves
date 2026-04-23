import { useJourney, type Filter } from "@/content/journey-store";

const labels: Record<Filter, string> = {
  all: "Tudo",
  backoffice: "Backoffice",
  produto: "Produto",
};

const Navigation = () => {
  const [filter, setFilter] = useJourney();

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="nav-bar fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <button
          onClick={scrollTop}
          className="font-display font-bold text-base md:text-lg tracking-wide text-foreground hover:opacity-70 transition-opacity text-left"
        >
          PEDRO
          <span className="mx-2 text-foreground/50">/</span>
          <span className="font-medium text-foreground/70 hidden sm:inline">
            Guia de Vibe Coding
          </span>
          <span className="font-medium text-foreground/70 sm:hidden">Guia</span>
        </button>

        <div className="flex items-center gap-2 md:gap-4">
          <span className="hidden md:inline text-[10px] uppercase tracking-widest text-foreground/60 font-bold">
            Mostrando:
          </span>
          <div className="flex items-center gap-1 bg-foreground/10 border border-foreground/30 rounded-full p-0.5">
            {(["all", "backoffice", "produto"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-colors ${
                  filter === f
                    ? "bg-foreground text-background"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {labels[f]}
              </button>
            ))}
          </div>
          <a
            href="mailto:pedro@regulamentei.com.br"
            className="hidden sm:inline font-display font-semibold text-xs md:text-sm tracking-wide text-foreground hover:opacity-70 transition-opacity"
          >
            EMAIL
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
