import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StellarTaskExamples } from "@/components/StellarTaskExamples";

describe("StellarTaskExamples", () => {
  it("renders Stellar and Soroban task examples", () => {
    render(<StellarTaskExamples />);

    expect(screen.getByText("Stellar/Soroban task examples")).toBeInTheDocument();
    expect(screen.getByText("Add wallet connection error state")).toBeInTheDocument();
    expect(screen.getByText("Add Soroban RPC configuration docs")).toBeInTheDocument();
  });
});
