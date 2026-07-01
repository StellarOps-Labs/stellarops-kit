import { useMemo } from "react";
import { scoreIssueQuality } from "@/lib/issueQuality";
import type { IssueDraft } from "@/types/issue";

export function useIssueQuality(draft: IssueDraft) {
  return useMemo(() => scoreIssueQuality(draft), [draft]);
}
