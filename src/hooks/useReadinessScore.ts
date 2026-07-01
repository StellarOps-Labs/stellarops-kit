import { useMemo } from "react";
import { summarizeReadiness } from "@/lib/readiness";
import type { ReadinessItem } from "@/types/readiness";

export function useReadinessScore(items: ReadinessItem[]) {
  return useMemo(() => summarizeReadiness(items), [items]);
}
