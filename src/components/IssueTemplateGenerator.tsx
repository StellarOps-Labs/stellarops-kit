import type { Dispatch, SetStateAction } from "react";
import { buildIssueMarkdown } from "@/lib/templateBuilder";
import type { Difficulty, IssueCategory, IssueDraft } from "@/types/issue";

const difficulties: Difficulty[] = ["beginner", "intermediate", "advanced"];
const categories: IssueCategory[] = ["bug", "documentation", "frontend", "backend", "testing", "wallet", "soroban", "stellar"];

export function IssueTemplateGenerator({
  draft,
  setDraft,
}: {
  draft: IssueDraft;
  setDraft: Dispatch<SetStateAction<IssueDraft>>;
}) {
  const markdown = buildIssueMarkdown(draft);

  const update = (field: keyof IssueDraft, value: string | string[]) => {
    setDraft((current) => ({ ...current, [field]: value }) as IssueDraft);
  };

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Issue template generator</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium">
          Issue title
          <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" value={draft.title} onChange={(event) => update("title", event.target.value)} />
        </label>
        <label className="text-sm font-medium">
          Difficulty
          <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" value={draft.difficulty} onChange={(event) => update("difficulty", event.target.value)}>
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          Task category
          <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" value={draft.category} onChange={(event) => update("category", event.target.value)}>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium">
          Labels
          <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" value={draft.labels.join(", ")} onChange={(event) => update("labels", event.target.value.split(",").map((label) => label.trim()).filter(Boolean))} />
        </label>
        <label className="text-sm font-medium md:col-span-2">
          Problem
          <textarea className="mt-1 min-h-24 w-full rounded-md border border-slate-300 px-3 py-2" value={draft.problem} onChange={(event) => update("problem", event.target.value)} />
        </label>
        <label className="text-sm font-medium md:col-span-2">
          Expected behavior
          <textarea className="mt-1 min-h-20 w-full rounded-md border border-slate-300 px-3 py-2" value={draft.expectedBehavior} onChange={(event) => update("expectedBehavior", event.target.value)} />
        </label>
        <label className="text-sm font-medium md:col-span-2">
          Files to update
          <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" value={draft.filesToUpdate} onChange={(event) => update("filesToUpdate", event.target.value)} />
        </label>
        <label className="text-sm font-medium md:col-span-2">
          Stellar/Soroban relevance
          <textarea className="mt-1 min-h-20 w-full rounded-md border border-slate-300 px-3 py-2" value={draft.stellarSorobanRelevance} onChange={(event) => update("stellarSorobanRelevance", event.target.value)} />
        </label>
        <label className="text-sm font-medium md:col-span-2">
          Acceptance criteria
          <textarea className="mt-1 min-h-24 w-full rounded-md border border-slate-300 px-3 py-2" value={draft.acceptanceCriteria.join("\n")} onChange={(event) => update("acceptanceCriteria", event.target.value.split("\n"))} />
        </label>
      </div>
      <h3 className="mt-5 text-sm font-semibold">Generated Markdown</h3>
      <pre className="mt-2 max-h-96 overflow-auto rounded-md bg-slate-950 p-4 text-xs leading-5 text-slate-100">{markdown}</pre>
    </section>
  );
}
