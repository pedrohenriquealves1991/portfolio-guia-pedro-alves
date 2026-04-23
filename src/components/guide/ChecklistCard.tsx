import { useState } from "react";
import { Check } from "lucide-react";

interface ChecklistCardProps {
  title?: string;
  items: string[];
}

const ChecklistCard = ({ title, items }: ChecklistCardProps) => {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="bg-background/40 backdrop-blur-sm border-2 border-foreground rounded-sm p-5 my-5 shadow-[4px_4px_0_0_hsl(var(--foreground))]">
      {title && (
        <h4 className="font-display font-bold text-foreground uppercase tracking-wider text-sm mb-3">
          {title}
        </h4>
      )}
      <ul className="space-y-2">
        {items.map((item, i) => {
          const isChecked = checked.has(i);
          return (
            <li key={i}>
              <button
                onClick={() => toggle(i)}
                className="flex items-start gap-3 w-full text-left group"
              >
                <span
                  className={`mt-0.5 flex-shrink-0 w-5 h-5 border-2 border-foreground rounded-sm flex items-center justify-center transition-colors ${
                    isChecked ? "bg-primary" : "bg-background/70"
                  }`}
                >
                  {isChecked && <Check className="w-3.5 h-3.5 text-foreground" />}
                </span>
                <span
                  className={`text-sm text-foreground/90 leading-relaxed ${
                    isChecked ? "line-through opacity-60" : ""
                  } group-hover:opacity-80`}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChecklistCard;
