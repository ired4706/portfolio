import { SectionShell } from "@/components/ui/section-shell";
import { Tag } from "@/components/ui/tag";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      label="Experience"
      eyebrow="Background"
      className="space-y-5"
    >
      <ul className="space-y-4">
        {experience.map((role) => (
          <li
            key={`${role.company}-${role.role}`}
            className="rounded-lg border border-border/70 bg-card p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-medium">
                  {role.role} · {role.company}
                </p>
                {role.location && (
                  <p className="text-xs text-muted-foreground">
                    {role.location}
                  </p>
                )}
              </div>
              <Tag className="text-[10px]">{role.period}</Tag>
            </div>
            <ul className="mt-3 list-dash text-xs text-muted-foreground sm:text-sm">
              {role.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

