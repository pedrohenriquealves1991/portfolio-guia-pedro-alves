import { SECTIONS } from "@/content/guide";
import { PROMPTS, KNOWLEDGE_PROMPT } from "@/content/prompts";
import { TOOLS } from "@/content/tools";
import type { Block } from "@/content/types";

const promptById = (id: string) =>
  [KNOWLEDGE_PROMPT, ...PROMPTS].find((p) => p.id === id);
const toolById = (id: string) => TOOLS.find((t) => t.id === id);

function blockToMarkdown(block: Block): string {
  switch (block.kind) {
    case "paragraph":
      return block.text + "\n";
    case "subheading":
      return `#### ${block.text}\n`;
    case "list": {
      const marker = (i: number) => (block.ordered ? `${i + 1}.` : "-");
      return block.items.map((it, i) => `${marker(i)} ${it}`).join("\n") + "\n";
    }
    case "callout": {
      const label = block.title ? `**${block.title}** — ` : "";
      const tag =
        block.variant === "warn"
          ? "⚠️ "
          : block.variant === "case"
            ? "📌 "
            : "💡 ";
      return `> ${tag}${label}${block.text}\n`;
    }
    case "code":
      return `\`\`\`${block.lang ?? ""}\n${block.text}\n\`\`\`\n`;
    case "checklist":
      return (
        (block.title ? `**${block.title}**\n\n` : "") +
        block.items.map((it) => `- [ ] ${it}`).join("\n") +
        "\n"
      );
    case "links":
      return (
        block.items.map((it) => `- [${it.label}](${it.href})`).join("\n") + "\n"
      );
    case "prompt": {
      const p = promptById(block.id);
      if (!p) return "";
      return [
        `##### Prompt ${p.number}: ${p.title}`,
        p.when ? `_${p.when}_` : "",
        "",
        "```text",
        p.body,
        "```",
        "",
      ]
        .filter(Boolean)
        .join("\n");
    }
    case "tools": {
      const items = block.ids
        .map((id) => toolById(id))
        .filter((t): t is NonNullable<typeof t> => Boolean(t));
      return (
        items
          .map(
            (t) =>
              `- **${t.name}** — ${t.role}\n  ${t.detail}${t.link ? `\n  Link: ${t.link}` : ""}`
          )
          .join("\n") + "\n"
      );
    }
    case "faq": {
      return (
        block.items
          .map((it) => `**${it.q}**\n\n${it.a}\n`)
          .join("\n") + "\n"
      );
    }
  }
}

export function buildGuideMarkdown(): string {
  const lines: string[] = [];
  lines.push("# Meu Guia Sincero de Vibe Coding");
  lines.push("");
  lines.push(
    "_Por Pedro Alves · https://portfolio-guia-pedro-alves.lovable.app/guia_"
  );
  lines.push("");
  lines.push(
    "> Use este arquivo como referência dentro do seu projeto no Claude, Lovable ou qualquer ferramenta de IA."
  );
  lines.push("");
  lines.push("---");
  lines.push("");

  for (const section of SECTIONS) {
    const heading =
      section.number === null
        ? `## ${section.title}`
        : `## ${section.number}. ${section.title}`;
    lines.push(heading);
    lines.push("");
    for (const block of section.blocks) {
      lines.push(blockToMarkdown(block));
    }
    lines.push("---");
    lines.push("");
  }

  return lines.join("\n");
}

export function downloadGuideMarkdown() {
  const md = buildGuideMarkdown();
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "guia-vibe-coding.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
