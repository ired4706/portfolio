import { SectionShell } from "@/components/ui/section-shell";
import { projects } from "@/data/projects";

export function ArchitectureCaseStudySection() {
  const featured = projects[0];

  if (!featured) {
    return null;
  }

  return (
    <SectionShell
      id="architecture"
      label="Architecture case study"
      eyebrow="System design & technical decisions"
      className="space-y-6"
    >
      <article
        aria-labelledby="architecture-case-study-title"
        className="space-y-4 text-sm"
      >
        <header className="space-y-1">
          <h3
            id="architecture-case-study-title"
            className="text-base font-semibold"
          >
            {featured.title}
          </h3>
          <p className="text-xs text-muted-foreground">{featured.period}</p>
        </header>

        {/* Context */}
        <section className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            System context
          </h4>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {featured.problem}
          </p>
        </section>

        {/* Architecture approach */}
        <section className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Frontend architecture approach
          </h4>

          <ul className="space-y-1.5 text-xs text-muted-foreground sm:text-sm">
            <li>
              Structured the application by business domains (orders, catalog,
              CRM, logistics, analytics) to avoid cross-module coupling.
            </li>
            <li>
              Built shared UI libraries to standardise patterns across products
              and reduce duplication.
            </li>
            <li>
              Separated server state (React Query) from client state (Redux) to
              maintain predictable data flow and avoid unnecessary re-renders.
            </li>
            <li>
              Designed integration layers to abstract third-party commerce and
              logistics APIs behind stable frontend contracts.
            </li>
          </ul>
        </section>

        {/* Performance */}
        <section className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Performance strategy
          </h4>

          <ul className="space-y-1.5 text-xs text-muted-foreground sm:text-sm">
            <li>
              Optimised heavy dashboards and tables using memoisation,
              pagination, and lazy loading.
            </li>
            <li>
              Applied feature flag strategies for controlled rollouts and safer
              production deployments.
            </li>
          </ul>
        </section>
      </article>
    </SectionShell>
  );
}