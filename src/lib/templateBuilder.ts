import type { IssueDraft } from "@/types/issue";

export function buildIssueMarkdown(draft: IssueDraft): string {
  const criteria = draft.acceptanceCriteria
    .filter((item) => item.trim().length > 0)
    .map((item) => `- [ ] ${item.trim()}`)
    .join("\n");

  return `# ${draft.title || "Contributor task"}

## Problem

${draft.problem || "Describe the problem this issue should solve."}

## Expected behavior

${draft.expectedBehavior || "Describe the desired outcome."}

## Files to update

${draft.filesToUpdate || "List likely files or folders."}

## Stellar/Soroban relevance

${draft.stellarSorobanRelevance || "Explain any Stellar or Soroban concepts, flows, or constraints."}

## Acceptance criteria

${criteria || "- [ ] Add clear, testable acceptance criteria."}

## Difficulty

${draft.difficulty || "TBD"}
`;
}
