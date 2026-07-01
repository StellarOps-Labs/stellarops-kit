import type { Difficulty, IssueCategory } from "./issue";

export interface LabelPlanInput {
  category: IssueCategory | "";
  difficulty: Difficulty | "";
  stellarSorobanRelevance?: string;
}
