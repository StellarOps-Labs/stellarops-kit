import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReadinessDashboard } from "@/components/ReadinessDashboard";

describe("ReadinessDashboard", () => {
  it("renders readiness cards and score", () => {
    render(<ReadinessDashboard />);

    expect(screen.getByText("Repository readiness")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("CI workflow")).toBeInTheDocument();
  });
});
