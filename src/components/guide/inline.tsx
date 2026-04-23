import React from "react";

// minimal markdown-ish inline renderer:
// - **bold**
// - `code`
// (used for paragraph blocks)
export function renderInline(text: string): React.ReactNode {
  // first split on backticks for inline code
  const parts: React.ReactNode[] = [];
  const codeSplit = text.split(/(`[^`]+`)/g);
  codeSplit.forEach((seg, i) => {
    if (seg.startsWith("`") && seg.endsWith("`") && seg.length > 1) {
      parts.push(
        <code
          key={`c-${i}`}
          className="px-1.5 py-0.5 bg-foreground/10 border border-foreground/20 rounded text-[0.9em]"
          style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}
        >
          {seg.slice(1, -1)}
        </code>,
      );
    } else {
      const boldSplit = seg.split(/(\*\*[^*]+\*\*)/g);
      boldSplit.forEach((s, j) => {
        if (s.startsWith("**") && s.endsWith("**")) {
          parts.push(<strong key={`b-${i}-${j}`}>{s.slice(2, -2)}</strong>);
        } else if (s) {
          parts.push(<React.Fragment key={`t-${i}-${j}`}>{s}</React.Fragment>);
        }
      });
    }
  });
  return parts;
}
