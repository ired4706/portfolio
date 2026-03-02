import { SectionShell } from "@/components/ui/section-shell";
import { Button } from "@/components/ui/button";
import { links } from "@/data/links";

export function ContactSection() {
  const primary = links[0];
  const secondary = links.slice(1);

  return (
    <SectionShell
      id="contact"
      label="Contact"
      eyebrow="Let’s build scalable frontend systems"
      className="space-y-4"
    >
      <p className="text-sm text-muted-foreground">
        I’m open to frontend engineering roles where system design, scalable
        architecture, and product collaboration matter. If you’re building
        complex products and need reliable UI infrastructure, feel free to reach
        out.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {primary && (
          <Button asChild>
            <a href={primary.href}>{primary.label}</a>
          </Button>
        )}

        {secondary.length > 0 && (
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground sm:text-sm">
            {secondary.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </SectionShell>
  );
}