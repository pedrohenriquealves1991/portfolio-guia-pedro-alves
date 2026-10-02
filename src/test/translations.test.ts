import { describe, it, expect } from "vitest";
import { translations } from "@/i18n/translations";
import * as portfolio from "@/content/portfolio";

/**
 * Every bilingual string must exist in both languages and be non-empty,
 * so the EN/PT switch never shows a blank or a missing key.
 */
function collectIssues(value: unknown, path: string, issues: string[]) {
  if (Array.isArray(value)) {
    value.forEach((v, i) => collectIssues(v, `${path}[${i}]`, issues));
    return;
  }
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    const keys = Object.keys(obj);
    const isBilingual = keys.includes("pt") || keys.includes("en");
    if (isBilingual) {
      for (const l of ["pt", "en"]) {
        const v = obj[l];
        const ok =
          (typeof v === "string" && v.trim().length > 0) ||
          (Array.isArray(v) && v.length > 0);
        // Image alt for cards without image is intentionally empty
        if (!ok && !path.endsWith("imageAlt")) issues.push(`${path}.${l}`);
      }
      return;
    }
    for (const k of keys) collectIssues(obj[k], `${path}.${k}`, issues);
  }
}

describe("i18n coverage", () => {
  it("guide chrome translations have PT and EN", () => {
    const issues: string[] = [];
    collectIssues(translations, "translations", issues);
    expect(issues).toEqual([]);
  });

  it("portfolio content has PT and EN", () => {
    const issues: string[] = [];
    collectIssues(
      { hero: portfolio.hero, nav: portfolio.nav, sections: portfolio.sections, projects: portfolio.projects, names: portfolio.projectNames, smaller: portfolio.smallerWork },
      "portfolio",
      issues,
    );
    expect(issues).toEqual([]);
  });

  it("every project has a localised name", () => {
    for (const p of portfolio.projects) {
      expect(portfolio.projectNames[p.id]).toBeDefined();
    }
  });
});
