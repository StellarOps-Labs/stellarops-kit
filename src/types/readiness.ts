export interface ReadinessItem {
  name: string;
  description: string;
  ready: boolean;
}

export interface ReadinessSummary {
  score: number;
  readyCount: number;
  totalCount: number;
}
