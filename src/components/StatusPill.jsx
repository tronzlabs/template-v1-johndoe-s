import { site } from '../data/site';

export default function StatusPill() {
  if (!site.available) return null;
  return (
    <a
      href={`mailto:${site.email}`}
      className="fixed bottom-5 left-5 z-30 hidden items-center gap-2.5 rounded-full border border-current/20 bg-bone-200/70 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-md md:flex dark:bg-ink-900/70"
      data-cursor-label="Email"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      Available · 2026
    </a>
  );
}
