const docs = [
  ["Architecture", "Frontend, component, hook, logic, template, and future GitHub API integration layers."],
  ["Getting started", "Installation, local development, testing, linting, typechecking, and production build commands."],
  ["Issue quality", "Contributor issue structure, acceptance criteria, labels, difficulty levels, and ecosystem relevance."],
  ["Maintainer guide", "How maintainers prepare repositories before issue-based contribution programs."],
  ["Stellar/Soroban tasks", "Wallet, RPC, transaction status, documentation, and testing task examples."],
  ["Contributor workflows", "How clear issues and pull request checklists speed up contribution and review."],
  ["Roadmap", "MVP, maintainer workflow, and ecosystem tooling phases."],
];

export default function DocsPage() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold">Documentation</h1>
        <p className="mt-3 leading-7 text-slate-700">
          Practical guides for using StellarOps Kit to prepare independent Stellar and Soroban repositories for contributor-driven development.
        </p>
        <div className="mt-8 grid gap-3">
          {docs.map(([title, description]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
