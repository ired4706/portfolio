import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <section
      className={cn(
        "glass relative overflow-hidden rounded-lg border-border/80 p-5 sm:p-6 scroll-mt-24",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
