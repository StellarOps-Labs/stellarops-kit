import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IssueQualityScore } from "@/components/IssueQualityScore";
import { sampleIssueDraft } from "@/utils/sampleData";

describe("IssueQualityScore", () => {
  it("renders the issue score and level", () => {
    render(<IssueQualityScore draft={sampleIssueDraft} />);

    expect(screen.getByText("Issue quality score")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("Program-ready")).toBeInTheDocument();
  });
});
