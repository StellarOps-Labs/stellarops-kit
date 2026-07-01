import type { ReadinessItem, ReadinessSummary } from "@/types/readiness";

export function summarizeReadiness(items: ReadinessItem[]): ReadinessSummary {
  const readyCount = items.filter((item) => item.ready).length;

  return {
    readyCount,
    totalCount: items.length,
    score: Math.round((readyCount / items.length) * 100),
  };
}
