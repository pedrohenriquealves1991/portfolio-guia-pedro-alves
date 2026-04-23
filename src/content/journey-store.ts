import { create } from "zustand";

// simple lightweight store without zustand dependency

import type { Path } from "@/content/types";

type Filter = "all" | "backoffice" | "produto";

interface JourneyState {
  filter: Filter;
  setFilter: (f: Filter) => void;
}

// fallback simple store
let state: Filter = "all";
const listeners = new Set<() => void>();

export function getJourney(): Filter {
  return state;
}

export function setJourney(f: Filter) {
  state = f;
  listeners.forEach((l) => l());
}

export function subscribeJourney(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function shouldShow(sectionPath: Path, filter: Filter): boolean {
  if (filter === "all") return true;
  if (sectionPath === "comum") return true;
  return sectionPath === filter;
}

export type { Filter };
