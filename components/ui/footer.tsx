export function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-800/80 bg-slate-950/95 pt-4 text-xs text-muted-foreground sm:mt-12 sm:pt-5">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2 sm:px-6 lg:px-8">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Portfolio
          </p>
          <p>© {new Date().getFullYear()} Tran Tien Anh. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
          <span className="rounded-full border border-slate-800/80 bg-slate-900/70 px-2.5 py-1">
            Next.js
          </span>
          <span className="rounded-full border border-slate-800/80 bg-slate-900/70 px-2.5 py-1">
            TypeScript
          </span>
          <span className="rounded-full border border-slate-800/80 bg-slate-900/70 px-2.5 py-1">
            Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}

