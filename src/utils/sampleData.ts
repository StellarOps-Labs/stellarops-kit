import type { IssueDraft } from "@/types/issue";
import type { ReadinessItem } from "@/types/readiness";

export const sampleIssueDraft: IssueDraft = {
  title: "Add Soroban RPC configuration docs",
  problem: "Developers cannot easily find which RPC URL values to use for testnet and local Soroban development.",
  expectedBehavior: "The docs should show testnet and local examples with clear environment variable names.",
  filesToUpdate: "README.md, docs/getting-started.md, .env.example",
  acceptanceCriteria: ["Document testnet RPC configuration", "Document local RPC configuration", "Add .env.example entries"],
  difficulty: "beginner",
  labels: ["documentation", "soroban", "good first issue"],
  category: "documentation",
  stellarSorobanRelevance: "This improves Soroban developer setup for RPC-backed contract workflows.",
};

export const readinessItems: ReadinessItem[] = [
  { name: "README", description: "Clear overview, setup, commands, and project purpose.", ready: true },
  { name: "CONTRIBUTING", description: "Contributor expectations and local workflow are documented.", ready: true },
  { name: "CODE_OF_CONDUCT", description: "Community behavior expectations are present.", ready: true },
  { name: "LICENSE", description: "Open-source license is included.", ready: true },
  { name: "docs", description: "Maintainer, contributor, and architecture docs are available.", ready: true },
  { name: "tests", description: "Reusable logic and key components have tests.", ready: true },
  { name: "CI workflow", description: "Lint, typecheck, test, and build run in GitHub Actions.", ready: true },
  { name: "issue templates", description: "Bug, feature, and contributor task templates exist.", ready: true },
  { name: "labels", description: "Suggested labels cover domain, difficulty, and triage.", ready: true },
  { name: "beginner issues", description: "Good first issue examples are ready to publish.", ready: true },
  { name: "Stellar/Soroban relevance", description: "Tasks explain ecosystem-specific context honestly.", ready: true },
];
