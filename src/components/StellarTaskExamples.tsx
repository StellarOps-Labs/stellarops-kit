import { stellarTaskExamples } from "@/lib/stellarTaskExamples";

export function StellarTaskExamples() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Stellar/Soroban task examples</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {stellarTaskExamples.map((task) => (
          <article key={task.title} className="rounded-lg border border-slate-200 p-4">
            <h3 className="font-semibold">{task.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{task.category} · {task.difficulty}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {task.labels.map((label) => <span key={label} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">{label}</span>)}
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {task.acceptanceCriteria.map((criterion) => <li key={criterion}>{criterion}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
