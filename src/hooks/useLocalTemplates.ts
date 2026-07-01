import { useMemo, useState } from "react";
import { buildIssueMarkdown } from "@/lib/templateBuilder";
import { sampleIssueDraft } from "@/utils/sampleData";
import type { IssueDraft } from "@/types/issue";

export function useLocalTemplates(initialDraft: IssueDraft = sampleIssueDraft) {
  const [draft, setDraft] = useState<IssueDraft>(initialDraft);
  const markdown = useMemo(() => buildIssueMarkdown(draft), [draft]);

  return { draft, setDraft, markdown };
}
