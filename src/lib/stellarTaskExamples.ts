import type { Difficulty, IssueCategory } from "@/types/issue";

export interface StellarTaskExample {
  title: string;
  category: IssueCategory;
  difficulty: Difficulty;
  labels: string[];
  acceptanceCriteria: string[];
}

export const stellarTaskExamples: StellarTaskExample[] = [
  {
    title: "Add wallet connection error state",
    category: "wallet",
    difficulty: "beginner",
    labels: ["wallet", "frontend", "good first issue"],
    acceptanceCriteria: ["Show a readable error when wallet connection fails", "Add a component test for the error state"],
  },
  {
    title: "Add Soroban RPC configuration docs",
    category: "documentation",
    difficulty: "beginner",
    labels: ["documentation", "soroban", "good first issue"],
    acceptanceCriteria: ["Document testnet and local RPC configuration", "Include environment variable examples"],
  },
  {
    title: "Add transaction status component tests",
    category: "testing",
    difficulty: "intermediate",
    labels: ["testing", "stellar", "frontend"],
    acceptanceCriteria: ["Cover pending, success, and failed states", "Use accessible assertions for visible status text"],
  },
  {
    title: "Add contract ID validation helper",
    category: "soroban",
    difficulty: "intermediate",
    labels: ["soroban", "backend", "testing"],
    acceptanceCriteria: ["Validate expected contract ID length and prefix constraints", "Add unit tests for valid and invalid IDs"],
  },
  {
    title: "Add network selector persistence",
    category: "frontend",
    difficulty: "intermediate",
    labels: ["frontend", "stellar", "enhancement"],
    acceptanceCriteria: ["Persist selected network locally", "Restore the selected network on reload"],
  },
  {
    title: "Add mock contract adapter examples",
    category: "soroban",
    difficulty: "advanced",
    labels: ["soroban", "testing", "maintainer-approved"],
    acceptanceCriteria: ["Provide a mock adapter for contract reads", "Document how contributors can use it in tests"],
  },
];
