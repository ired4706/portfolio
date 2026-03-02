import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell id="about" label="About" eyebrow="Profile">
      <div className="space-y-3 text-sm">
        <p>
          Frontend engineer with 4+ years of experience working primarily in the
          React and Next.js ecosystem. I focus on building maintainable frontend
          architectures for complex e-commerce and internal systems.
        </p>
        <p>
          I’ve contributed to unified commerce systems, live chat platforms, and
          delivery management tools, integrating with Shopify, WooCommerce,
          payment gateways, logistics providers, and internal services. I enjoy
          designing maintainable UI systems that handle complex business flows
          while remaining predictable and easy to evolve.
        </p>
      </div>

      <div className="space-y-3 text-xs text-muted-foreground">
        <section className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Core strengths
          </h4>
          <ul className="list-dash text-xs text-muted-foreground sm:text-sm">
            <li>Modular frontend architecture</li>
            <li>Clear server vs client state separation</li>
            <li>Reusable UI infrastructure</li>
            <li>Performance optimization for data-heavy interfaces</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Growth focus
          </h4>
          <ul className="list-dash text-xs text-muted-foreground sm:text-sm">
            <li>Frontend system design at scale</li>
            <li>Improving engineering standards and developer experience</li>
          </ul>
        </section>
      </div>
    </SectionShell>
  );
}
