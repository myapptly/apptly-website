"use client";

import type { ReactNode } from "react";

const nav = [
  ["Home", "/"],
  ["Our Work", "/work"],
  ["Services & Pricing", "/services"],
  ["Why APPTLY", "/why-apptly"],
  ["Reviews", "/reviews"],
];

export function SiteHeader() {
  const share = async () => {
    const data = { title: "APPTLY", text: "Your business. In their pocket.", url: "https://www.myapptly.com/" };
    if (navigator.share) await navigator.share(data);
    else {
      await navigator.clipboard.writeText(data.url);
      alert("APPTLY link copied!");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 px-4 py-3 backdrop-blur-xl md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3" aria-label="APPTLY home">
          <img src="/apptly-logo.png" alt="APPTLY" className="h-11 w-11 rounded-xl object-cover" />
          <div className="leading-none">
            <div className="text-lg font-black tracking-[0.16em]">APPTLY</div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">Built For You.</div>
          </div>
        </a>
        <nav className="hidden items-center gap-5 text-sm font-bold text-slate-300 lg:flex">
          {nav.map(([label, href]) => <a key={href} href={href} className="transition hover:text-emerald-400">{label}</a>)}
          <button onClick={share} className="transition hover:text-emerald-400">Share</button>
        </nav>
        <a href="/services" className="rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-emerald-300">Start Your Project</a>
      </div>
      <div className="mx-auto mt-3 flex max-w-7xl gap-5 overflow-x-auto border-t border-white/5 pt-2 text-xs font-bold text-slate-400 lg:hidden">
        {nav.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap">{label}</a>)}
        <button onClick={share} className="whitespace-nowrap">Share</button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div><strong className="text-white">APPTLY</strong> · Winston-Salem, NC · Your Business. In Their Pocket.</div>
        <div className="flex flex-wrap gap-5">
          <a href="/work" className="hover:text-emerald-400">Our Work</a>
          <a href="/services" className="hover:text-emerald-400">Services</a>
          <a href="/reviews" className="hover:text-emerald-400">Reviews</a>
          <a href="/privacy" className="hover:text-emerald-400">Privacy</a>
          <a href="/terms" className="hover:text-emerald-400">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-slate-950 text-white"><SiteHeader />{children}<SiteFooter /></main>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-emerald-400">{children}</p>;
}

export function ReviewSpot({ source, score, quote, note }: { source: string; score?: string; quote: string; note?: string }) {
  return (
    <aside className="rounded-3xl border border-emerald-400/25 bg-emerald-400/5 p-7 shadow-xl shadow-black/10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm font-black uppercase tracking-wider text-emerald-400">{source}</span>
        {score && <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">{score}</span>}
      </div>
      <blockquote className="mt-4 text-xl font-bold leading-8 text-white">“{quote}”</blockquote>
      {note && <p className="mt-3 text-sm leading-6 text-slate-400">{note}</p>}
    </aside>
  );
}
