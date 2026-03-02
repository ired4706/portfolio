"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type NavItem = {
  label: string;
  href: string;
  sectionId: string;
};

const items: NavItem[] = [
  { label: "Technical", href: "#technical", sectionId: "technical" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Architecture", href: "#architecture", sectionId: "architecture" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Contact", href: "#contact", sectionId: "contact" }
];

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("about");
  const activeIdRef = useRef<string>("about");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Init theme from localStorage or system preference
    const stored = window.localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial: "light" | "dark" =
      stored === "light" || stored === "dark"
        ? (stored as "light" | "dark")
        : prefersDark
        ? "dark"
        : "light";

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const offset = 96; // approx header height
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      let closestId = activeIdRef.current;
      let smallestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item) => {
        const el = document.getElementById(item.sectionId);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // Only consider sections that are at least partially in view
        if (sectionBottom < 0 || sectionTop > viewportHeight) {
          return;
        }

        const distance = Math.abs(sectionTop - offset);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestId = item.sectionId;
        }
      });

      // If user is very close to bottom, force last section as active
      const nearBottom = scrollY + viewportHeight >= docHeight - 64;
      if (nearBottom) {
        closestId = items[items.length - 1]?.sectionId ?? closestId;
      }

      if (closestId && closestId !== activeIdRef.current) {
        activeIdRef.current = closestId;
        setActiveId(closestId);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", next === "dark");
        window.localStorage.setItem("theme", next);
      }
      return next;
    });
  };

  return (
    <header className="sticky top-0 z-40 mb-5 border-b border-border/60 bg-background/90 backdrop-blur-md sm:mb-8">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Tran Tien Anh
        </Link>
        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-1.5 rounded-full border border-border/70 bg-card/80 px-2.5 py-1.5 text-[11px] text-muted-foreground">
            {items.map((item) => {
              const isActive = activeId === item.sectionId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("nav-link", isActive && "nav-link-active")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
            className="flex h-7 w-11 items-center rounded-full border border-border bg-card/80 px-0.5 text-[10px] text-muted-foreground transition-colors"
          >
            <span
              className={cn(
                "inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-[9px] text-foreground shadow-soft transition-transform duration-200",
                theme === "dark" ? "translate-x-4" : "translate-x-0"
              )}
            >
              {theme === "dark" ? "D" : "L"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

