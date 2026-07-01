const items = ["Linked issue", "Tests added or updated", "Docs updated when needed", "Screenshots or logs included for UI/CLI changes"];

export function PullRequestChecklist() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Pull request checklist</h2>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {items.map((item) => <li key={item}>- [ ] {item}</li>)}
      </ul>
    </section>
  );
}
