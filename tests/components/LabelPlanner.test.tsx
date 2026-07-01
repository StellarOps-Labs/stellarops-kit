import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LabelPlanner } from "@/components/LabelPlanner";
import { sampleIssueDraft } from "@/utils/sampleData";

describe("LabelPlanner", () => {
  it("renders recommended labels", () => {
    render(<LabelPlanner draft={sampleIssueDraft} />);

    expect(screen.getByText("Label planner")).toBeInTheDocument();
    expect(screen.getByText("good first issue")).toBeInTheDocument();
    expect(screen.getByText("soroban")).toBeInTheDocument();
  });
});
