import { scoreIssueQuality } from "@/lib/issueQuality";
import type { IssueDraft } from "@/types/issue";

export function IssueQualityScore({ draft }: { draft: IssueDraft }) {
  const result = scoreIssueQuality(draft);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Issue quality score</h2>
          <p className="text-sm text-slate-600">{result.level}</p>
        </div>
        <strong className="text-4xl text-teal-700">{result.score}</strong>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-teal-600" style={{ width: `${result.score}%` }} />
      </div>
      {result.missingFields.length > 0 ? (
        <div className="mt-4">
          <h3 className="text-sm font-semibold">Missing fields</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {result.missingFields.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-4 text-sm text-slate-700">This issue is ready for contributors.</p>
      )}
      {result.suggestions.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold">Suggestions</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {result.suggestions.map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
