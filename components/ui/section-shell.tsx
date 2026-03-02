import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Card } from "./card";

type SectionShellProps = {
  id: string;
  label: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  label,
  eyebrow,
  children,
  className
}: SectionShellProps) {
  return (
    <Card id={id} className={cn("space-y-4", className)}>
      <header className="flex items-center justify-between gap-4">
        <div>
          {eyebrow && (
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h2 className="type-h2">{label}</h2>
        </div>
      </header>
      <div className="prose prose-invert prose-sm max-w-none prose-muted">
        {children}
      </div>
    </Card>
  );
}
