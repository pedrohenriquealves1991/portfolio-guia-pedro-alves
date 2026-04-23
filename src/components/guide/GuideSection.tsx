import { motion } from "framer-motion";
import type { GuideSectionData } from "@/content/types";
import PathBadge from "./PathBadge";
import PromptCard from "./PromptCard";
import ToolGrid from "./ToolGrid";
import ChecklistCard from "./ChecklistCard";
import CalloutCard from "./CalloutCard";
import { getPrompt } from "@/content/prompts";
import { renderInline } from "./inline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface GuideSectionProps {
  section: GuideSectionData;
  index: number;
}

const GuideSection = ({ section, index }: GuideSectionProps) => {
  return (
    <motion.section
      id={section.slug}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="scroll-mt-24 py-12 md:py-16 border-b border-foreground/10"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* number + path */}
        <div className="flex items-baseline gap-4 mb-3 flex-wrap">
          {section.number !== null && (
            <span className="font-display text-6xl md:text-7xl font-bold text-foreground/15 leading-none">
              {String(section.number).padStart(2, "0")}
            </span>
          )}
          <PathBadge path={section.path} />
          {section.pathNote && (
            <span className="text-xs text-foreground/60 italic">
              {section.pathNote}
            </span>
          )}
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-6 leading-tight">
          {section.title}
        </h2>

        <div className="space-y-2">
          {section.blocks.map((block, i) => {
            switch (block.kind) {
              case "paragraph":
                return (
                  <p
                    key={i}
                    className="text-foreground/85 leading-relaxed text-base md:text-lg my-3"
                  >
                    {renderInline(block.text)}
                  </p>
                );
              case "subheading":
                return (
                  <h3
                    key={i}
                    className="font-display text-xl md:text-2xl font-bold text-foreground mt-8 mb-2"
                  >
                    {block.text}
                  </h3>
                );
              case "list":
                return block.ordered ? (
                  <ol
                    key={i}
                    className="list-decimal list-outside pl-6 space-y-2 my-4 marker:text-foreground/50 marker:font-bold"
                  >
                    {block.items.map((it, j) => (
                      <li key={j} className="text-foreground/85 leading-relaxed pl-1">
                        {renderInline(it)}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul
                    key={i}
                    className="list-disc list-outside pl-6 space-y-2 my-4 marker:text-foreground/50"
                  >
                    {block.items.map((it, j) => (
                      <li key={j} className="text-foreground/85 leading-relaxed pl-1">
                        {renderInline(it)}
                      </li>
                    ))}
                  </ul>
                );
              case "callout":
                return (
                  <CalloutCard
                    key={i}
                    title={block.title}
                    text={block.text}
                    variant={block.variant}
                  />
                );
              case "code":
                return (
                  <pre
                    key={i}
                    className="bg-foreground text-background p-4 rounded-sm overflow-x-auto my-5 text-[13px] leading-relaxed border-2 border-foreground shadow-[5px_5px_0_0_hsl(var(--primary))]"
                    style={{
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    }}
                  >
                    <code>{block.text}</code>
                  </pre>
                );
              case "prompt": {
                const p = getPrompt(block.id);
                if (!p) return null;
                return (
                  <div key={i} className="my-5">
                    <PromptCard prompt={p} />
                  </div>
                );
              }
              case "tools":
                return <ToolGrid key={i} ids={block.ids} />;
              case "checklist":
                return (
                  <ChecklistCard key={i} title={block.title} items={block.items} />
                );
              case "links":
                return (
                  <ul key={i} className="space-y-1 my-3">
                    {block.items.map((l, j) => (
                      <li key={j}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-foreground underline underline-offset-4 decoration-2 decoration-foreground/40 hover:decoration-foreground transition-colors font-medium"
                        >
                          → {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default GuideSection;
