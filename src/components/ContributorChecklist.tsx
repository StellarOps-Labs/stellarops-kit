const items = ["Can understand the problem", "Can find likely files", "Can run tests locally", "Can verify acceptance criteria"];

export function ContributorChecklist() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Contributor checklist</h2>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {items.map((item) => <li key={item}>- [ ] {item}</li>)}
      </ul>
    </section>
  );
}
