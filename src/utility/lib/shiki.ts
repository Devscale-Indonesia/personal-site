import type { HighlighterCore } from "shiki";

export function getShiki() {
  // @ts-expect-error Only work when instrumentation file ran
  return global["shiki"] as HighlighterCore;
}
