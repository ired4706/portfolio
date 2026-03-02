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
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em]">
            Core strengths
          </p>
          <ul className="mt-1 space-y-1">
            <li>Modular frontend architecture</li>
            <li>Clear server vs client state separation</li>
            <li>Reusable UI infrastructure</li>
            <li>Performance optimization for data-heavy interfaces</li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.16em]">
            Growth focus
          </p>
          <ul className="mt-1 space-y-1">
            <li>Frontend system design at scale</li>
            <li>Improving engineering standards and developer experience</li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
