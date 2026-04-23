import { Info, AlertTriangle, BookOpen } from "lucide-react";

interface CalloutCardProps {
  title?: string;
  text: string;
  variant?: "info" | "warn" | "case";
}

const config = {
  info: {
    icon: Info,
    bg: "bg-secondary",
    border: "border-foreground",
    label: "Nota",
  },
  warn: {
    icon: AlertTriangle,
    bg: "bg-primary",
    border: "border-foreground",
    label: "Atenção",
  },
  case: {
    icon: BookOpen,
    bg: "bg-card",
    border: "border-foreground",
    label: "Caso real",
  },
};

const CalloutCard = ({ title, text, variant = "info" }: CalloutCardProps) => {
  const c = config[variant];
  const Icon = c.icon;
  return (
    <div
      className={`${c.bg} border-2 ${c.border} rounded-sm p-4 md:p-5 my-5 shadow-[5px_5px_0_0_hsl(var(--foreground))] flex gap-3`}
    >
      <Icon className="w-5 h-5 mt-1 flex-shrink-0 text-foreground" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 mb-1">
          {c.label}
        </p>
        {title && (
          <h4 className="font-display font-bold text-foreground text-base mb-1">
            {title}
          </h4>
        )}
        <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
          {text.split("**").map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i}>{part}</strong>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>
      </div>
    </div>
  );
};

export default CalloutCard;
