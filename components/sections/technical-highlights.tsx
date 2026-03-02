import { SectionShell } from "@/components/ui/section-shell";
import { Tag } from "@/components/ui/tag";
import { technicalHighlights } from "@/data/technical-highlights";

export function TechnicalHighlightsSection() {
  return (
    <SectionShell
      id="technical"
      label="Technical highlights"
      eyebrow="Key strengths"
      className="space-y-5"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {technicalHighlights.map((highlight) => (
          <section
            key={highlight.title}
            aria-label={highlight.title}
            className="relative flex flex-col justify-between rounded-lg border border-slate-800/80 bg-slate-950/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:border-slate-500/70 hover:shadow-[0_18px_45px_rgba(0,0,0,0.7)] sm:p-5"
          >
            <div className="pointer-events-none absolute inset-px rounded-[inherit] border border-slate-900/70" />
            <div className="space-y-2">
              <h3 className="text-sm font-medium">{highlight.title}</h3>
              <p className="text-xs text-muted-foreground">
                {highlight.description}
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {highlight.tags.map((tag) => (
                <Tag key={tag} className="text-[10px]">
                  {tag}
                </Tag>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionShell>
  );
}

