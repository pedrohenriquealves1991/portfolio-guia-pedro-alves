import { useEffect, useState } from "react";
import type { Path } from "@/content/types";

export type Filter = "all" | "backoffice" | "produto";

let state: Filter = "all";
const listeners = new Set<() => void>();

export function getJourney(): Filter {
  return state;
}

export function setJourney(f: Filter) {
  state = f;
  listeners.forEach((l) => l());
}

export function useJourney(): [Filter, (f: Filter) => void] {
  const [, force] = useState(0);
  useEffect(() => {
    const l = () => force((n) => n + 1);
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);
  return [state, setJourney];
}

export function shouldShow(sectionPath: Path, filter: Filter): boolean {
  if (filter === "all") return true;
  if (sectionPath === "comum") return true;
  return sectionPath === filter;
}
