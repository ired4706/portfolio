import { SectionShell } from "@/components/ui/section-shell";
import { Tag } from "@/components/ui/tag";
import { Disclosure } from "@/components/ui/disclosure";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const main = projects[0];

  if (!main) {
    return null;
  }

  return (
    <SectionShell
      id="projects"
      label="Projects"
      eyebrow="Unified e-commerce management platform"
      className="space-y-5"
    >
      <article
        aria-labelledby="project-title"
        className="relative overflow-hidden rounded-xl border border-border/70 bg-card p-5 shadow-[0_18px_45px_rgba(15,23,42,0.75)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.9)] sm:p-6"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-border/60" />
        <div className="relative space-y-4">
        <header className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 id="project-title" className="text-sm font-semibold sm:text-base">
              {main.title}
            </h3>
            <span className="text-[11px] text-muted-foreground">
              {main.period}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {main.stack.map((tech) => (
              <Tag key={tech} className="text-[10px]">
                {tech}
              </Tag>
            ))}
          </div>
        </header>

        <div className="grid gap-4 pt-1 md:grid-cols-2">
          <p className="text-xs text-muted-foreground sm:text-sm">
            {main.problem}
          </p>
          <p className="text-xs text-muted-foreground sm:text-sm">
            <span className="font-medium text-foreground">My role: </span>
            {main.role}
          </p>
        </div>

        <section aria-label="Case study details" className="space-y-3 text-sm">
          <Disclosure title="What I built">
            <p>
              {main.whatIBuilt}
            </p>
          </Disclosure>

          <Disclosure title="Technical decisions">
            <ul className="list-dash">
              {main.technicalDecisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Disclosure>

          <Disclosure title="Impact">
            <ul className="list-dash">
              {main.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Disclosure>
        </section>
        </div>
      </article>
    </SectionShell>
  );
}

