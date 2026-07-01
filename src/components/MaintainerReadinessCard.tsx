import type { ReadinessItem } from "@/types/readiness";

export function MaintainerReadinessCard({ item }: { item: ReadinessItem }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold">{item.name}</h3>
        <span className={item.ready ? "text-sm font-semibold text-green-700" : "text-sm font-semibold text-amber-700"}>
          {item.ready ? "ready" : "needs work"}
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
    </article>
  );
}
