"use client";

import { values, helps, languages } from "@/data/about";

const ICONS: Record<string, React.ReactNode> = {
  target: <svg className="w-5 h-5" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>,
  layers: <svg className="w-5 h-5" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  cpu:    <svg className="w-5 h-5" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><rect x="7" y="7" width="10" height="10" rx="1" /><path strokeLinecap="round" d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3" /></svg>,
  bolt:   <svg className="w-5 h-5" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
};

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--border-strong), transparent)" }} />

      <div className="site-container">
        <div className="grid lg:grid-cols-[1fr_440px] gap-14 items-start">

          {/* ── Left ── */}
          <div className="flex flex-col gap-8">

            {/* Header */}
            <div className="flex flex-col gap-3">
              <span
                className="self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded"
                style={{ fontFamily: "monospace", background: "var(--coral-dim)", color: "var(--coral)", border: "1px solid rgba(204,87,51,0.2)" }}
              >
                Engineering Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: "var(--text)" }}>
                Senior Engineer Who<br />
                <span className="text-gradient-coral">Owns the Outcome</span>
              </h2>
              <p className="text-base leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>
                R&D Engineering Lead at <span style={{ color: "var(--text)", fontWeight: 600 }}>Cegid</span> · 700k+ businesses · 8+ yrs shipping SaaS, growth platforms, and AI systems.
                I scope, architect, and deliver — full stack, no hand-holding.
              </p>
            </div>

            {/* What I deliver — compact list */}
            <div className="flex flex-col gap-1.5">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2"
                style={{ color: "var(--text-muted)", fontFamily: "monospace" }}
              >
                What I deliver
              </p>
              {helps.map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--coral)" }} />
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap pt-1">
              <a href="#contact" className="px-5 py-2.5 text-white text-sm font-semibold rounded-xl transition-colors btn-coral">
                Work with me →
              </a>
              <a
                href="https://linkedin.com/in/merouaneamqor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm font-medium rounded-xl transition-colors"
                style={{ border: "1px solid var(--border-strong)", color: "var(--text-muted)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--coral)"; (e.currentTarget as HTMLElement).style.color = "var(--coral)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="flex flex-col gap-3">

            {/* Value cards */}
            {values.map(v => (
              <div
                key={v.title}
                className="flex items-start gap-4 rounded-xl px-4 py-4 transition-colors duration-150"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,87,51,0.3)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
              >
                <div className="mt-0.5 shrink-0">{ICONS[v.icon]}</div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{v.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.desc}</p>
                </div>
              </div>
            ))}

            {/* Languages strip */}
            <div
              className="rounded-xl px-4 py-3 flex items-center gap-4"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <span
                className="text-[9px] font-bold uppercase tracking-[0.18em] shrink-0"
                style={{ color: "var(--text-muted)", fontFamily: "monospace" }}
              >
                Languages
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                {languages.map(l => (
                  <div key={l.lang} className="flex items-center gap-1.5">
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm"
                      style={{ fontFamily: "monospace", background: "var(--coral-dim)", color: "var(--coral)" }}
                    >
                      {l.code}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{l.lang}</span>
                    <span className="text-[10px]" style={{ color: "var(--border-strong)" }}>·</span>
                    <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{l.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
