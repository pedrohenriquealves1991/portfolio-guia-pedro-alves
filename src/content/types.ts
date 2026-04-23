export type Path = "comum" | "backoffice" | "produto";

export type Block =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "subheading"; text: string }
  | { kind: "callout"; title?: string; text: string; variant?: "info" | "warn" | "case" }
  | { kind: "code"; lang?: string; text: string }
  | { kind: "prompt"; id: string }
  | { kind: "tools"; ids: string[] }
  | { kind: "checklist"; title?: string; items: string[] }
  | { kind: "links"; items: { label: string; href: string }[] }
  | { kind: "faq"; items: { q: string; a: string }[] };

export interface GuideSectionData {
  number: number | null; // null = INTRO
  slug: string;
  title: string;
  path: Path;
  pathNote?: string;
  blocks: Block[];
}

export interface PromptData {
  id: string;
  number: number;
  title: string;
  when?: string;
  body: string;
}

export interface ToolData {
  id: string;
  name: string;
  role: string;
  detail: string;
  link?: string;
}
