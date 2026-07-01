import type { IssueDraft, IssueQualityResult } from "@/types/issue";

const checks: Array<{
  label: string;
  weight: number;
  isReady: (draft: IssueDraft) => boolean;
  suggestion: string;
}> = [
  {
    label: "Clear problem statement",
    weight: 18,
    isReady: (draft) => draft.problem.trim().length >= 20,
    suggestion: "Describe the user or maintainer problem with enough context to scope the work.",
  },
  {
    label: "Expected behavior",
    weight: 14,
    isReady: (draft) => draft.expectedBehavior.trim().length >= 15,
    suggestion: "State the outcome a contributor should deliver.",
  },
  {
    label: "Files to update",
    weight: 12,
    isReady: (draft) => draft.filesToUpdate.trim().length > 0,
    suggestion: "Point contributors toward likely files, folders, or docs.",
  },
  {
    label: "Stellar/Soroban relevance",
    weight: 14,
    isReady: (draft) => draft.stellarSorobanRelevance.trim().length >= 12,
    suggestion: "Explain whether the task touches Stellar accounts, wallets, RPC, contracts, or transaction flows.",
  },
  {
    label: "Acceptance criteria",
    weight: 18,
    isReady: (draft) => draft.acceptanceCriteria.filter(Boolean).length >= 2,
    suggestion: "Add at least two verifiable acceptance criteria.",
  },
  {
    label: "Difficulty level",
    weight: 10,
    isReady: (draft) => Boolean(draft.difficulty),
    suggestion: "Choose beginner, intermediate, or advanced so contributors can self-select.",
  },
  {
    label: "Labels",
    weight: 14,
    isReady: (draft) => draft.labels.length > 0,
    suggestion: "Add labels for issue type, difficulty, domain, and review state.",
  },
];

export function scoreIssueQuality(draft: IssueDraft): IssueQualityResult {
  const missingFields: string[] = [];
  const suggestions: string[] = [];
  const score = checks.reduce((total, check) => {
    if (check.isReady(draft)) {
      return total + check.weight;
    }

    missingFields.push(check.label);
    suggestions.push(check.suggestion);
    return total;
  }, 0);

  return {
    score,
    level: score >= 85 ? "Program-ready" : score >= 65 ? "Contributor-ready" : "Needs work",
    missingFields,
    suggestions,
  };
}
