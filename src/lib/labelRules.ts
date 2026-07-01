import type { LabelPlanInput } from "@/types/label";

const categoryLabels = {
  bug: ["bug", "needs triage"],
  documentation: ["documentation", "maintainer-approved"],
  frontend: ["frontend", "enhancement"],
  backend: ["backend", "enhancement"],
  testing: ["testing", "maintainer-approved"],
  wallet: ["wallet", "frontend"],
  soroban: ["soroban", "backend"],
  stellar: ["stellar", "enhancement"],
} as const;

export function recommendLabels(input: LabelPlanInput): string[] {
  const labels = new Set<string>(["needs triage"]);

  if (input.category) {
    categoryLabels[input.category].forEach((label) => labels.add(label));
  }

  if (input.difficulty === "beginner") {
    labels.add("good first issue");
  }

  if (input.difficulty === "intermediate") {
    labels.add("help wanted");
  }

  const relevance = input.stellarSorobanRelevance?.toLowerCase() ?? "";
  if (relevance.includes("soroban") || relevance.includes("contract") || relevance.includes("rpc")) {
    labels.add("soroban");
  }
  if (relevance.includes("stellar") || relevance.includes("wallet") || relevance.includes("transaction")) {
    labels.add("stellar");
  }
  if (relevance.includes("wallet")) {
    labels.add("wallet");
  }

  return Array.from(labels);
}
