import type { IssueDraft } from "@/types/issue";

export function AcceptanceCriteriaBuilder({ draft }: { draft: IssueDraft }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Acceptance criteria</h2>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {draft.acceptanceCriteria.map((item) => (
          <li key={item} className="rounded-md bg-slate-50 px-3 py-2">{item}</li>
        ))}
      </ul>
    </section>
  );
}
