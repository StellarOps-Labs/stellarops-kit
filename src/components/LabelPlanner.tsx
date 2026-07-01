import { recommendLabels } from "@/lib/labelRules";
import type { IssueDraft } from "@/types/issue";

export function LabelPlanner({ draft }: { draft: IssueDraft }) {
  const labels = recommendLabels({
    category: draft.category,
    difficulty: draft.difficulty,
    stellarSorobanRelevance: draft.stellarSorobanRelevance,
  });

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Label planner</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {labels.map((label) => (
          <span key={label} className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-800">
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
