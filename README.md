# StellarOps Kit

Contributor-ready workflows for independent Stellar and Soroban maintainers.

StellarOps Kit is an open-source toolkit from StellarOps Labs for preparing repositories for issue-based contribution. It helps maintainers write clearer GitHub issues, acceptance criteria, label plans, contributor checklists, pull request checklists, and repository readiness reviews.

This is independent maintainer tooling. It is not official Stellar, Soroban, Drips Wave, or GrantFox tooling.

## Why this exists

Many open-source Stellar and Soroban projects need contributors, but contributors often find vague issues, missing setup instructions, unclear review expectations, or labels that do not signal difficulty. StellarOps Kit gives maintainers a practical workflow for turning backlog ideas into contributor-ready tasks.

## Features

- Issue template generator for scoped contributor tasks
- Issue quality score from 0 to 100
- Label planner for type, domain, triage, and difficulty labels
- Acceptance criteria builder
- Contributor onboarding checklist
- Pull request checklist
- Repository readiness dashboard
- Stellar/Soroban-specific task examples
- Reusable Markdown templates

## Tech stack

Next.js, React, TypeScript, Tailwind CSS, Vitest, React Testing Library, ESLint, and GitHub Actions CI.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Development commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
```

## Testing commands

```bash
npm run test
npm run test:watch
```

## Project structure

- `src/pages` contains the Pages Router routes.
- `src/components` contains toolkit UI.
- `src/hooks` contains local state and derived data hooks.
- `src/lib` contains scoring, labels, readiness, templates, and task examples.
- `templates` contains reusable maintainer Markdown templates.
- `docs` contains architecture, setup, issue quality, maintainer, contributor, and roadmap docs.
- `.github` contains issue templates and CI.

## Toolkit workflow

1. Draft an issue title, problem, expected behavior, likely files, acceptance criteria, difficulty, labels, category, and Stellar/Soroban relevance.
2. Review the generated Markdown.
3. Check the issue quality score and missing fields.
4. Use recommended labels to improve discoverability.
5. Confirm repository readiness before publishing contributor tasks.

## Maintainer use case

A maintainer preparing for a contribution campaign can use the toolkit to convert internal backlog notes into public issues with testable outcomes, ecosystem context, and review checklists.

## Contributor use case

A contributor can choose tasks by difficulty and domain, understand what must change, and submit pull requests that map directly to acceptance criteria.

## Stellar/Soroban task examples

Examples include wallet connection error states, Soroban RPC configuration docs, transaction status tests, contract ID validation helpers, network selector persistence, and mock contract adapter examples.

## Roadmap

Phase 1 covers the MVP toolkit, templates, docs, tests, and CI. Phase 2 focuses on maintainer workflow improvements such as GitHub issue import, repository readiness scans, saved templates, and accessibility improvements. Phase 3 explores ecosystem tooling such as GitHub API integration, project board export, contributor analytics, organization-level readiness dashboards, and campaign-specific flows.

## Contributing

See `CONTRIBUTING.md`. Issues should include clear acceptance criteria, labels, and expected behavior before being marked maintainer-approved.

## License

MIT.

## Maintainer note

Keep the positioning honest: this project supports Stellar/Soroban maintainers, but it does not claim endorsement or official status from ecosystem organizations or funding programs.
