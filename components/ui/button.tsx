import type {
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
  MouseEventHandler
} from "react";
import { isValidElement, cloneElement } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost";

type BaseButtonProps = {
  variant?: ButtonVariant;
  asChild?: boolean;
  children: ReactNode;
};

export type ButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps>;

export function Button({
  variant = "primary",
  asChild = false,
  className,
  children,
  onClick,
  ...props
}: ButtonProps): JSX.Element {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-60";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 shadow-soft",
    ghost:
      "bg-transparent text-muted-foreground hover:text-foreground hover:bg-slate-900/60 px-3 py-2"
  };

  const classes = cn(base, variants[variant], className);

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string; onClick?: MouseEventHandler<unknown> }>;

    return cloneElement(child, {
      className: cn(classes, child.props.className),
      onClick,
      ...props
    });
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
