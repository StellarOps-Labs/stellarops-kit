import { AcceptanceCriteriaBuilder } from "@/components/AcceptanceCriteriaBuilder";
import { ContributorChecklist } from "@/components/ContributorChecklist";
import { IssueQualityScore } from "@/components/IssueQualityScore";
import { IssueTemplateGenerator } from "@/components/IssueTemplateGenerator";
import { LabelPlanner } from "@/components/LabelPlanner";
import { PullRequestChecklist } from "@/components/PullRequestChecklist";
import { ReadinessDashboard } from "@/components/ReadinessDashboard";
import { StellarTaskExamples } from "@/components/StellarTaskExamples";
import { useLocalTemplates } from "@/hooks/useLocalTemplates";
import { TODO_NOTES } from "@/utils/constants";

export default function ToolkitPage() {
  const { draft, setDraft } = useLocalTemplates();

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold">Maintainer toolkit</h1>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Generate issue templates, score issue quality, plan labels, and review repository readiness using local sample data.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]">
          <IssueTemplateGenerator draft={draft} setDraft={setDraft} />
          <div className="space-y-6">
            <IssueQualityScore draft={draft} />
            <LabelPlanner draft={draft} />
            <AcceptanceCriteriaBuilder draft={draft} />
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ContributorChecklist />
          <PullRequestChecklist />
        </div>
        <div className="mt-6">
          <ReadinessDashboard />
        </div>
        <div className="mt-6">
          <StellarTaskExamples />
        </div>
        <div className="sr-only">{TODO_NOTES.join(" ")}</div>
      </div>
    </div>
  );
}
