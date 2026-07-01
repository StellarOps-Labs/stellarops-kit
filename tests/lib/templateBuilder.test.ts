import { describe, expect, it } from "vitest";
import { buildIssueMarkdown } from "@/lib/templateBuilder";
import { sampleIssueDraft } from "@/utils/sampleData";

describe("buildIssueMarkdown", () => {
  it("generates the expected contributor issue sections", () => {
    const markdown = buildIssueMarkdown(sampleIssueDraft);

    expect(markdown).toContain("## Problem");
    expect(markdown).toContain("## Expected behavior");
    expect(markdown).toContain("## Files to update");
    expect(markdown).toContain("## Stellar/Soroban relevance");
    expect(markdown).toContain("## Acceptance criteria");
    expect(markdown).toContain("- [ ] Document testnet RPC configuration");
  });
});
