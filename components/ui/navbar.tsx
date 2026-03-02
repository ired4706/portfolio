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

  useEffect(() => {
    if (typeof window === "undefined") return;

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

  return (
    <header className="sticky top-0 z-40 mb-5 border-b border-border/60 bg-slate-950/80 backdrop-blur-md sm:mb-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Tran Tien Anh
        </Link>
        <nav className="flex items-center gap-1.5 rounded-full border border-border/70 bg-slate-950/80 px-2.5 py-1.5 text-[11px] text-muted-foreground">
          {items.map((item) => {
            const isActive = activeId === item.sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-1.5 transition-colors transition-transform duration-150 hover:text-foreground hover:-translate-y-0.5",
                  isActive &&
                    "bg-slate-800/80 text-foreground shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

