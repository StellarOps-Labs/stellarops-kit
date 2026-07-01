import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useIssueQuality } from "@/hooks/useIssueQuality";
import { sampleIssueDraft } from "@/utils/sampleData";

describe("useIssueQuality", () => {
  it("returns issue quality output", () => {
    const { result } = renderHook(() => useIssueQuality(sampleIssueDraft));

    expect(result.current.score).toBe(100);
  });
});
