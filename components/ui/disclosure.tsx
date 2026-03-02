import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type DisclosureProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Disclosure({
  title,
  children,
  className
}: DisclosureProps): JSX.Element {
  return (
    <details
      className={cn(
        "group rounded-md border border-border/70 bg-slate-950/80 p-3 sm:p-3.5",
        className
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors group-open:text-foreground">
        <span>{title}</span>
        <span className="ml-2 text-[11px] text-muted-foreground group-open:hidden">
          Show
        </span>
        <span className="ml-2 hidden text-[11px] text-muted-foreground group-open:inline">
          Hide
        </span>
      </summary>
      <div className="mt-2 overflow-hidden text-xs text-muted-foreground sm:text-sm transition-all duration-200 ease-out max-h-0 opacity-0 translate-y-1 group-open:max-h-[800px] group-open:opacity-100 group-open:translate-y-0">
        {children}
      </div>
    </details>
  );
}

