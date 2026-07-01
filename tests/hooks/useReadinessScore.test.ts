import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useReadinessScore } from "@/hooks/useReadinessScore";
import { readinessItems } from "@/utils/sampleData";

describe("useReadinessScore", () => {
  it("summarizes ready repository checks", () => {
    const { result } = renderHook(() => useReadinessScore(readinessItems));

    expect(result.current.score).toBe(100);
    expect(result.current.totalCount).toBe(11);
  });
});
