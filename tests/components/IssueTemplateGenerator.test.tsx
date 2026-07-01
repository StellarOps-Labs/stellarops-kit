import { render, screen } from "@testing-library/react";
import { useState } from "react";
import { describe, expect, it } from "vitest";
import { IssueTemplateGenerator } from "@/components/IssueTemplateGenerator";
import { sampleIssueDraft } from "@/utils/sampleData";
import type { IssueDraft } from "@/types/issue";

function Harness() {
  const [draft, setDraft] = useState<IssueDraft>(sampleIssueDraft);
  return <IssueTemplateGenerator draft={draft} setDraft={setDraft} />;
}

describe("IssueTemplateGenerator", () => {
  it("renders the form and generated markdown", () => {
    render(<Harness />);

    expect(screen.getByLabelText("Issue title")).toHaveValue("Add Soroban RPC configuration docs");
    expect(screen.getByText("Generated Markdown")).toBeInTheDocument();
    expect(screen.getByText(/## Stellar\/Soroban relevance/)).toBeInTheDocument();
  });
});
