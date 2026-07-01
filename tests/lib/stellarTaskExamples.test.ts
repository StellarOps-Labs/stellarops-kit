import { describe, expect, it } from "vitest";
import { stellarTaskExamples } from "@/lib/stellarTaskExamples";

describe("stellarTaskExamples", () => {
  it("includes practical Stellar and Soroban contributor tasks", () => {
    expect(stellarTaskExamples).toHaveLength(6);
    expect(stellarTaskExamples.map((task) => task.title)).toEqual(
      expect.arrayContaining([
        "Add wallet connection error state",
        "Add Soroban RPC configuration docs",
        "Add mock contract adapter examples",
      ]),
    );
  });

  it("gives every example acceptance criteria", () => {
    expect(stellarTaskExamples.every((task) => task.acceptanceCriteria.length >= 2)).toBe(true);
  });
});
