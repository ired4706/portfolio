import { Tag } from "@/components/ui/tag";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <Card className="group flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="space-y-5 transition-transform duration-300">
        <Tag>Frontend Developer · React Architecture</Tag>
        <header className="space-y-2">
          <h1 className="type-h1">
            Tran Tien Anh
          </h1>
          <p className="type-body max-w-lg text-muted-foreground">
            Frontend engineer focused on building scalable React architecture
            for large-scale e-commerce platforms. I design reusable systems,
            optimise performance for data-heavy dashboards, and integrate
            complex third-party services — enabling teams to ship fast while
            maintaining production reliability.
          </p>
        </header>
      </div>
      <aside className="flex flex-col gap-3 text-xs text-muted-foreground md:text-sm">
        <div className="rounded-lg border border-border/70 bg-slate-950/60 px-4 py-3">
          <p className="font-medium text-foreground">Core Expertise</p>
          <p>
            Scalable React architecture · UI libraries · Feature flags ·
            Performance
          </p>
        </div>
        <div className="rounded-lg border border-border/70 bg-slate-950/60 px-4 py-3">
          <p className="font-medium text-foreground">E-commerce Platforms</p>
          <p>
            Unified management systems · Analytics dashboards · Third-party
            integrations
          </p>
        </div>
      </aside>
    </Card>
  );
}

