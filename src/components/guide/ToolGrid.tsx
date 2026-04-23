import { ExternalLink } from "lucide-react";
import { getTool } from "@/content/tools";

interface ToolGridProps {
  ids: string[];
}

const ToolGrid = ({ ids }: ToolGridProps) => {
  const tools = ids.map((id) => getTool(id)).filter(Boolean);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      {tools.map((tool, idx) => {
        if (!tool) return null;
        const rotate = idx % 2 === 0 ? "rotate-[-0.6deg]" : "rotate-[0.6deg]";
        return (
          <div
            key={tool.id}
            className={`bg-card border-2 border-foreground rounded-sm p-5 shadow-[5px_5px_0_0_hsl(var(--foreground))] hover:shadow-[2px_2px_0_0_hsl(var(--foreground))] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 ${rotate} hover:rotate-0`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h4 className="font-display font-bold text-lg text-card-foreground">
                {tool.name}
              </h4>
              {tool.link && (
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground/70 hover:text-card-foreground"
                  aria-label={`Abrir ${tool.name}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-sm font-medium text-card-foreground/80 mb-2">
              {tool.role}
            </p>
            <p className="text-sm text-card-foreground/70 leading-relaxed">
              {tool.detail}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ToolGrid;
