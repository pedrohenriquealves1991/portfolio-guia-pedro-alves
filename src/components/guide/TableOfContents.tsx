import { useEffect, useState } from "react";
import { SECTIONS } from "@/content/guide";
import { useJourney, shouldShow } from "@/content/journey-store";
import { List, X } from "lucide-react";

const TableOfContents = () => {
  const [active, setActive] = useState<string>("");
  const [filter] = useJourney();
  const [open, setOpen] = useState(false);

  const visible = SECTIONS.filter((s) => shouldShow(s.path, filter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visibleEntry) setActive(visibleEntry.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );
    visible.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [filter, visible]);

  const items = (
    <nav aria-label="Índice do guia" className="space-y-1">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/60 mb-3">
        Índice
      </p>
      {visible.map((s) => {
        const isActive = active === s.slug;
        return (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            onClick={() => setOpen(false)}
            className={`block py-1.5 px-2 text-sm leading-snug rounded-sm transition-colors ${
              isActive
                ? "bg-foreground text-background font-semibold"
                : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
            }`}
          >
            <span className="font-mono text-[11px] mr-2 opacity-70">
              {s.number === null ? "—" : String(s.number).padStart(2, "0")}
            </span>
            {s.title}
          </a>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* desktop sticky */}
      <aside className="hidden xl:block fixed right-6 top-24 w-64 max-h-[calc(100vh-7rem)] overflow-y-auto bg-background/40 backdrop-blur-md border-2 border-foreground rounded-sm p-4 shadow-[5px_5px_0_0_hsl(var(--foreground))] z-30">
        {items}
      </aside>

      {/* mobile floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir índice"
        className="xl:hidden fixed bottom-6 right-6 z-40 bg-primary border-2 border-foreground rounded-full w-14 h-14 flex items-center justify-center shadow-[4px_4px_0_0_hsl(var(--foreground))] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_hsl(var(--foreground))] transition-all"
      >
        <List className="w-6 h-6 text-foreground" />
      </button>

      {/* mobile drawer */}
      {open && (
        <div
          className="xl:hidden fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-background border-l-2 border-foreground p-5 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar índice"
              className="ml-auto block mb-3 p-2 hover:bg-foreground/10 rounded-sm"
            >
              <X className="w-5 h-5" />
            </button>
            {items}
          </div>
        </div>
      )}
    </>
  );
};

export default TableOfContents;
