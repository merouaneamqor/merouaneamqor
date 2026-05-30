"use client";

import { cases } from "@/data/caseStudies";


const colors: Record<string, { badge: string; metric: string }> = {
  cyan:   { badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",     metric: "text-cyan-400" },
  blue:   { badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",     metric: "text-blue-400" },
  indigo: { badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", metric: "text-indigo-400" },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

      <div className="site-container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4" style={{ background: "var(--coral-dim)", color: "var(--coral)", borderColor: "rgba(204,87,51,0.2)" }}>
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ color: "var(--text)" }}>
            Hard Technical Problems,{" "}
            <span className="text-gradient-coral">Quantified Business Impact</span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            Three deep-dives into real production problems — architecture decisions, engineering trade-offs, and the metrics that followed.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {cases.map((c, i) => {
            const col = colors[c.color];
            return (
              <div key={c.title} className="card-surface rounded-2xl overflow-hidden">
                <div className="p-6 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${col.badge}`}>{c.label}</span>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>{c.context}</span>
                    </div>
                    <span className="text-xs font-mono" style={{ color: "var(--border-strong)" }}>#{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{c.desc}</p>
                </div>

                {/* Metrics */}
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                    {c.metrics.map(m => (
                      <div key={m.l} className={`rounded-xl p-4 text-center border ${col.badge}`}>
                        <p className={`text-xl font-bold tabular-nums ${col.metric}`}>{m.v}</p>
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{m.l}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <div className="rounded-xl p-4 border" style={{ background: "var(--bg-card-alt)", borderColor: "var(--border)" }}>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>The Challenge</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{c.challenge}</p>
                    </div>
                    <div className="rounded-xl p-4 border" style={{ background: "var(--bg-card-alt)", borderColor: "var(--border)" }}>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>The Solution</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{c.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {c.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded border" style={{ color: "var(--text-muted)", background: "var(--bg-card-alt)", borderColor: "var(--border)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>Facing a similar architectural or delivery challenge? Let&apos;s get into the specifics.</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 text-white font-semibold rounded-xl transition-colors text-sm btn-coral">
            Discuss Your Technical Problem →
          </a>
        </div>
      </div>
    </section>
  );
}
