import type { Path } from "@/content/types";

const labelMap: Record<Path, string> = {
  comum: "Comum",
  backoffice: "Backoffice",
  produto: "Produto",
};

const styleMap: Record<Path, string> = {
  comum: "bg-foreground text-background",
  backoffice: "bg-secondary text-secondary-foreground border-2 border-foreground",
  produto: "bg-primary text-primary-foreground border-2 border-foreground",
};

interface PathBadgeProps {
  path: Path;
  className?: string;
}

const PathBadge = ({ path, className = "" }: PathBadgeProps) => (
  <span
    className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${styleMap[path]} ${className}`}
  >
    {labelMap[path]}
  </span>
);

export default PathBadge;
