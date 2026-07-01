import { describe, expect, it } from "vitest";
import { recommendLabels } from "@/lib/labelRules";

describe("recommendLabels", () => {
  it("recommends beginner documentation labels for Soroban docs", () => {
    expect(
      recommendLabels({
        category: "documentation",
        difficulty: "beginner",
        stellarSorobanRelevance: "Soroban RPC setup docs",
      }),
    ).toEqual(expect.arrayContaining(["documentation", "good first issue", "soroban", "needs triage"]));
  });

  it("adds wallet and stellar labels from relevance text", () => {
    expect(
      recommendLabels({
        category: "frontend",
        difficulty: "intermediate",
        stellarSorobanRelevance: "Wallet transaction signing",
      }),
    ).toEqual(expect.arrayContaining(["wallet", "stellar", "help wanted"]));
  });
});
