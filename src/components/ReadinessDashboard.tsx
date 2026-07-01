import { summarizeReadiness } from "@/lib/readiness";
import { readinessItems } from "@/utils/sampleData";
import { MaintainerReadinessCard } from "./MaintainerReadinessCard";

export function ReadinessDashboard() {
  const summary = summarizeReadiness(readinessItems);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Repository readiness</h2>
          <p className="text-sm text-slate-600">{summary.readyCount} of {summary.totalCount} checks ready</p>
        </div>
        <strong className="text-3xl text-teal-700">{summary.score}%</strong>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {readinessItems.map((item) => <MaintainerReadinessCard key={item.name} item={item} />)}
      </div>
    </section>
  );
}
