import { describe, expect, it } from "vitest";
import { scoreIssueQuality } from "@/lib/issueQuality";
import { sampleIssueDraft } from "@/utils/sampleData";

describe("scoreIssueQuality", () => {
  it("scores a complete issue as program-ready", () => {
    const result = scoreIssueQuality(sampleIssueDraft);

    expect(result.score).toBe(100);
    expect(result.level).toBe("Program-ready");
    expect(result.missingFields).toEqual([]);
  });

  it("returns missing fields and suggestions for vague issues", () => {
    const result = scoreIssueQuality({
      title: "Fix thing",
      problem: "",
      expectedBehavior: "",
      filesToUpdate: "",
      acceptanceCriteria: [],
      difficulty: "",
      labels: [],
      category: "",
      stellarSorobanRelevance: "",
    });

    expect(result.score).toBe(0);
    expect(result.missingFields).toContain("Acceptance criteria");
    expect(result.suggestions.length).toBeGreaterThan(3);
  });
});
