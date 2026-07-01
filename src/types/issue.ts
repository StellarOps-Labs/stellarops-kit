export type Difficulty = "beginner" | "intermediate" | "advanced";

export type IssueCategory =
  | "bug"
  | "documentation"
  | "frontend"
  | "backend"
  | "testing"
  | "wallet"
  | "soroban"
  | "stellar";

export interface IssueDraft {
  title: string;
  problem: string;
  expectedBehavior: string;
  filesToUpdate: string;
  acceptanceCriteria: string[];
  difficulty: Difficulty | "";
  labels: string[];
  category: IssueCategory | "";
  stellarSorobanRelevance: string;
}

export interface IssueQualityResult {
  score: number;
  level: "Needs work" | "Contributor-ready" | "Program-ready";
  missingFields: string[];
  suggestions: string[];
}
