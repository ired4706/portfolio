import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/60 bg-card px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}

