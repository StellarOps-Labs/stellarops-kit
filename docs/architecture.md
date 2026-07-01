# Architecture

StellarOps Kit is a local-first Next.js Pages Router application. The MVP intentionally avoids external APIs so maintainers can run it after `npm install` and evaluate workflows without credentials.

## Frontend architecture

Routes live in `src/pages`. `_app.tsx` wraps every page with the shared layout, navigation, and footer. The home page explains positioning and use cases. The toolkit page hosts the interactive maintainer tools.

## Component layer

Components in `src/components` are responsible for rendering forms, cards, dashboards, checklists, and task examples. They receive typed props and defer scoring, labels, readiness summaries, and Markdown generation to `src/lib`.

## Hook layer

Hooks in `src/hooks` provide local state and memoized derived values. `useLocalTemplates` owns the issue draft state used by the toolkit. `useIssueQuality` and `useReadinessScore` wrap reusable logic for components and tests.

## Logic layer

The `src/lib` folder contains deterministic domain logic:

- `issueQuality.ts` scores issue completeness.
- `labelRules.ts` recommends labels.
- `readiness.ts` summarizes repository readiness.
- `templateBuilder.ts` generates Markdown.
- `stellarTaskExamples.ts` stores task examples.

## Template layer

The `templates` folder contains Markdown files maintainers can copy into GitHub issues, pull requests, and readiness reviews.

## Future GitHub API integration

Future versions can import GitHub issues, inspect repository files, recommend labels from existing label sets, and export project board items. API-backed features should keep the current local-first logic as the fallback path.
