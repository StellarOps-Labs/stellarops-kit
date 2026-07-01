import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { StellarTaskExamples } from "@/components/StellarTaskExamples";

const features = [
  ["Contributor issues", "Generate scoped issues with problem statements, expected behavior, files, relevance, acceptance criteria, labels, and difficulty."],
  ["Quality scoring", "Check whether issues are clear enough for contributors before they enter a public backlog or program submission."],
  ["Maintainer readiness", "Review README, docs, CI, templates, labels, beginner issues, and Stellar/Soroban relevance in one place."],
  ["Workflow checklists", "Create onboarding and pull request checklists that reduce reviewer guesswork and contributor churn."],
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold">Issue quality is maintainer infrastructure</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            StellarOps Kit helps independent Stellar and Soroban maintainers turn vague work into contributor-ready tasks with clear outcomes, review expectations, and ecosystem context.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map(([title, body]) => <FeatureCard key={title} title={title}>{body}</FeatureCard>)}
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">For maintainers</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Prepare repositories for issue-driven contribution programs by tightening docs, templates, labels, acceptance criteria, and testing expectations before contributors arrive.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">For contributors</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Clear tasks make it easier to choose work, understand domain context, run the project, and submit pull requests that reviewers can evaluate quickly.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <StellarTaskExamples />
        </div>
      </section>
      <section className="bg-teal-700 px-4 py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Prepare your repository for contributor-driven development</h2>
            <p className="mt-2 text-teal-50">Useful for Drips Wave and GrantFox-style workflows without claiming official affiliation.</p>
          </div>
          <Link href="/toolkit" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-teal-800">Open toolkit</Link>
        </div>
      </section>
    </>
  );
}
