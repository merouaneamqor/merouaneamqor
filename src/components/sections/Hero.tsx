"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { stats, badges, heroServices } from "@/data/hero";
import { availabilityStatus } from "@/data/contact";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        let n = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const id = setInterval(() => {
          n += step;
          if (n >= target) { setCount(target); clearInterval(id); }
          else setCount(n);
        }, 20);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}


const ServiceIcon = ({ id }: { id: string }) => {
  const cls = "w-3.5 h-3.5";
  if (id === "globe") return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>;
  if (id === "arrow-up") return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 7 7M12 3v18"/></svg>;
  if (id === "cube") return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0v10l-8 4m0-14L4 17m8 4V10"/></svg>;
  if (id === "chip") return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="7" y="7" width="10" height="10" rx="1"/><path strokeLinecap="round" d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3"/></svg>;
  if (id === "users") return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path strokeLinecap="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
  if (id === "link") return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path strokeLinecap="round" d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>;
  return null;
};

const services = heroServices;

const TYPEWRITER_TEXT = "That Convert";

function TypewriterText() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setDisplayed(TYPEWRITER_TEXT.slice(0, i));
        if (i >= TYPEWRITER_TEXT.length) { clearInterval(id); setDone(true); }
      }, 60);
      return () => clearInterval(id);
    }, 900);
    return () => clearTimeout(delay);
  }, []);
  return (
    <span className="text-gradient-coral inline-flex items-baseline gap-0.5">
      {displayed}
      {!done && (
        <span className="animate-cursor inline-block w-0.5 h-[0.85em] ml-0.5 align-baseline" style={{ background: "var(--coral)" }} />
      )}
    </span>
  );
}

/* Animated background orbs — Anthropic coral/warm palette */
function BgOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute rounded-full blur-[140px] opacity-[0.18] dark:opacity-25"
        style={{
          width: 600, height: 600,
          top: "-15%", left: "30%",
          background: "radial-gradient(circle, #CC5733 0%, #E8774A 60%, transparent 100%)",
          animation: "orb-drift-1 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full blur-[100px] opacity-[0.12] dark:opacity-20"
        style={{
          width: 400, height: 400,
          top: "20%", right: "-5%",
          background: "radial-gradient(circle, #E8774A 0%, #CC5733 70%, transparent 100%)",
          animation: "orb-drift-2 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full blur-[160px] opacity-[0.08] dark:opacity-12"
        style={{
          width: 500, height: 500,
          bottom: "-10%", left: "-5%",
          background: "radial-gradient(circle, #CC5733 0%, transparent 70%)",
          animation: "orb-drift-1 26s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(204,87,51,0.35), rgba(232,119,74,0.5), rgba(204,87,51,0.35), transparent)",
          animation: "scan-beam 6s ease-in-out infinite",
        }}
      />
    </div>
  );
}

/* Corner bracket decoration */
function Corners({ className = "" }: { className?: string }) {
  const c = "border-blue-500/40";
  return (
    <>
      <span className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${c} ${className}`} />
      <span className={`absolute top-0 right-0 w-3 h-3 border-t border-r ${c} ${className}`} />
      <span className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l ${c} ${className}`} />
      <span className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${c} ${className}`} />
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      <BgOrbs />

      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(204,87,51,0.1) 0%, transparent 70%)" }} />

      <div className="site-container pt-28 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left ── */}
          <div className="flex flex-col gap-6">

            {/* Availability chip */}
            <div
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-600 dark:text-emerald-400 text-xs font-medium animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-pulse shrink-0" />
              {availabilityStatus.label} — {availabilityStatus.period}
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              <span className="text-gradient">I Build Websites,</span>
              <br />
              <span style={{ color: "var(--text)" }}>SaaS Products &</span>
              <br />
              <span className="text-gradient-coral">Digital Experiences</span>
              <br />
              <TypewriterText />
            </h1>

            {/* Sub */}
            <p
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <span className="font-semibold" style={{ color: "var(--text)" }}>Team Leader R&D</span> at Cegid Atlas
              with 8+ years of experience. I help founders, startups, and businesses ship
              beautiful products — from landing pages to complex SaaS platforms.
            </p>

            {/* What I build */}
            <div
              className="flex flex-wrap gap-2 animate-fade-up"
              style={{ animationDelay: "340ms" }}
            >
              {services.map((s, i) => (
                <span
                  key={s.label}
                  className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 group overflow-hidden"
                  style={{ background: "var(--bg-card-alt)", border: "1px solid var(--border)", color: "var(--text-muted)", animationDelay: `${i * 40}ms` }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--coral)"; (e.currentTarget as HTMLElement).style.color = "var(--coral)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
                >
                  {/* shimmer on hover */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                  <span className="relative"><ServiceIcon id={s.icon} /></span>
                  <span className="relative">{s.label}</span>
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: "440ms" }}
            >
              <a
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded-xl transition-all animate-neon-cta overflow-hidden group btn-coral"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                <svg className="relative w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="relative">Book a Free Call</span>
              </a>
              <a href="#case-studies" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border-strong)] hover:border-[var(--coral)] text-[var(--text-muted)] hover:text-[var(--coral)] text-sm font-semibold rounded-xl transition-all hover:bg-[var(--coral-dim)]">
                See My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Social */}
            <div
              className="flex items-center gap-4 pt-1 animate-fade-up"
              style={{ animationDelay: "540ms" }}
            >
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/merouane-amqor", icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { label: "GitHub",   href: "https://github.com/merouaneamqor",          icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors">
                  {s.icon}{s.label}
                </a>
              ))}
              <span className="text-slate-700">·</span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Casablanca, Morocco
              </span>
            </div>
          </div>

          {/* ── Right ── */}
          <div
            className="flex flex-col gap-4 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >

            {/* Profile card */}
            <div className="card-surface relative rounded-2xl p-5 animate-glow-card overflow-hidden">
              <Corners />


              <div className="flex items-start gap-4 mb-4">
                <div className="relative shrink-0 w-14 h-14">
                  <div className="absolute inset-[-8px] rounded-full border border-dashed animate-orbit" style={{ borderColor: "rgba(204,87,51,0.25)", animationDuration: "10s" }} />
                  <div className="absolute inset-[-3px] rounded-full border animate-orbit-rev" style={{ borderColor: "rgba(204,87,51,0.15)", animationDuration: "7s" }} />
                  <div className="w-14 h-14 rounded-xl overflow-hidden relative z-10" style={{ boxShadow: "0 4px 16px rgba(204,87,51,0.3)" }}>
                    <Image src="/avatar.jpg" alt="Merouane Amqor" fill className="object-cover object-top" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[var(--bg-card)] status-pulse z-20" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--text)]">Merouane Amqor</p>
                  <p className="text-sm font-medium" style={{ color: "var(--coral)" }}>Research & Development Expert</p>
                  <p className="text-[var(--text-muted)] text-xs mt-0.5">@ Cegid · Casablanca, Morocco</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pb-4 mb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                {badges.map(b => (
                  <span key={b.label} className="relative px-2 py-0.5 text-xs rounded-md font-medium border overflow-hidden transition-all duration-300 hover:scale-105 group" style={{ borderColor: "var(--border-strong)", color: "var(--coral)", background: "var(--coral-dim)" }}>
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                    <span className="relative">{b.label}</span>
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { v: "Rails", l: "Primary Stack" },
                  { v: "GMT+1", l: "Timezone" },
                  { v: "5★", l: "Avg Rating" },
                ].map(t => (
                  <div key={t.l} className="rounded-lg py-2.5 transition-all duration-300" style={{ background: "var(--bg-card-alt)", border: "1px solid var(--border)" }}>
                    <p className="font-bold text-base" style={{ color: "var(--coral)" }}>{t.v}</p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="card-surface relative rounded-xl px-4 py-3 overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <Corners />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />
                  <p className="text-xl font-bold tabular-nums relative" style={{ color: "var(--text)", textShadow: "0 0 20px rgba(204,87,51,0.2)" }}>
                    <CountUp target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 relative">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
