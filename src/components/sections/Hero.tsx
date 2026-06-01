"use client";

import Image from "next/image";
import { stats, badges, heroServices } from "@/data/hero";
import { availabilityStatus } from "@/data/contact";

const ServiceIcon = ({ id }: { id: string }) => {
  const cls = "w-3.5 h-3.5 shrink-0";
  if (id === "globe")    return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>;
  if (id === "arrow-up") return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 7 7M12 3v18"/></svg>;
  if (id === "cube")     return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0v10l-8 4m0-14L4 17m8 4V10"/></svg>;
  if (id === "chip")     return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="7" y="7" width="10" height="10" rx="1"/><path strokeLinecap="round" d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3"/></svg>;
  if (id === "users")    return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path strokeLinecap="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
  if (id === "link")     return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path strokeLinecap="round" d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>;
  return null;
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">

      {/* Subtle radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 55% at 60% -5%, rgba(204,87,51,0.08) 0%, transparent 65%)" }}
      />

      <div className="site-container pt-28 pb-20 relative">
        <div className="grid lg:grid-cols-[1fr_420px] gap-14 xl:gap-20 items-start">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-7 lg:pt-4">

            {/* Role + availability row */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase"
                style={{ background: "var(--coral-dim)", color: "var(--coral)", border: "1px solid rgba(204,87,51,0.2)" }}
              >
                R&D Engineering Lead
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-emerald-500/20 bg-emerald-500/8 text-emerald-600 dark:text-emerald-400"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                {availabilityStatus.label} · {availabilityStatus.period}
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[2.75rem] sm:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-tight" style={{ color: "var(--text)" }}>
                I Build & Ship
                <br />
                <span className="text-gradient-coral">SaaS Products</span>
                <br />
                At Enterprise Scale.
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-px w-12 shrink-0" style={{ background: "var(--coral)", opacity: 0.5 }} />
                <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                  Cegid · Europe's enterprise SaaS leader · 700 000+ active users
                </p>
              </div>
            </div>

            {/* Body */}
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-[520px]">
              8+ years leading production systems for founders, CTOs, and engineering teams —
              from zero-to-one MVPs to multi-tenant platforms serving hundreds of thousands of users.
              Focused on <span style={{ color: "var(--text)", fontWeight: 600 }}>Rails · Next.js · AI integration</span>.
            </p>

            {/* Service tags */}
            <div className="flex flex-wrap gap-2">
              {heroServices.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 cursor-default"
                  style={{ background: "var(--bg-card-alt)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,87,51,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "var(--coral)";
                    (e.currentTarget as HTMLElement).style.background = "var(--coral-dim)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card-alt)";
                  }}
                >
                  <ServiceIcon id={s.icon} />
                  {s.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded-xl btn-coral transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Start a Project Brief
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-colors"
                style={{ border: "2px solid var(--border-strong)", color: "var(--text-muted)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--coral)";
                  (e.currentTarget as HTMLElement).style.color = "var(--coral)";
                  (e.currentTarget as HTMLElement).style.background = "var(--coral-dim)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                View Case Studies
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-4 pt-1" style={{ borderTop: "1px solid var(--border)" }}>
              <div className="flex items-center gap-4 pt-4">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/in/merouane-amqor", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { label: "GitHub",   href: "https://github.com/merouaneamqor",          icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--coral)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
                  >
                    {s.icon}{s.label}
                  </a>
                ))}
                <span style={{ color: "var(--border-strong)" }}>·</span>
                <span className="text-xs flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                  <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  Casablanca, Morocco
                </span>
              </div>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-4">

            {/* Profile card */}
            <div className="card-surface rounded-2xl overflow-hidden">
              {/* Header band */}
              <div className="px-5 pt-5 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden" style={{ boxShadow: "0 0 0 2px var(--border-strong)" }}>
                      <Image src="/avatar.jpg" alt="Merouane Amqor" fill className="object-cover object-top" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[var(--bg-card)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>Merouane Amqor</p>
                    <p className="text-xs font-medium mt-0.5" style={{ color: "var(--coral)" }}>R&D Engineering Lead</p>
                    <p className="text-xs mt-0.5 truncate" style={{ color: "var(--text-muted)" }}>Cegid · Enterprise SaaS · 700k+ users</p>
                  </div>
                </div>
              </div>

              {/* Stack badges */}
              <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Core Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {badges.map(b => (
                    <span
                      key={b.label}
                      className={`px-2 py-0.5 text-xs rounded-md font-medium border ${b.color}`}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engagement metadata */}
              <div className="px-5 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Engagement</p>
                <div className="flex flex-col gap-2">
                  {[
                    { k: "Model",    v: "Project · Retainer · Fractional" },
                    { k: "SLA",      v: "< 24 h response" },
                    { k: "Duration", v: "3–6+ months preferred" },
                    { k: "TZ",       v: "GMT+1 — overlap-friendly" },
                  ].map(row => (
                    <div key={row.k} className="flex items-baseline justify-between gap-4 text-xs">
                      <span style={{ color: "var(--text-muted)" }}>{row.k}</span>
                      <span className="font-medium text-right" style={{ color: "var(--text)" }}>{row.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card-surface rounded-xl px-4 py-4 flex flex-col gap-1"
                >
                  <p
                    className="text-2xl font-bold tabular-nums leading-none"
                    style={{ color: "var(--coral)" }}
                  >
                    {s.value}{s.suffix}
                  </p>
                  <p className="text-xs leading-snug" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
