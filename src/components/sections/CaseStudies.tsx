"use client";

import { cases } from "@/data/caseStudies";

const colors: Record<string, { badge: string; metric: string }> = {
  cyan:   { badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",       metric: "text-cyan-400" },
  blue:   { badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",       metric: "text-blue-400" },
  indigo: { badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", metric: "text-indigo-400" },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 relative">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--border-strong), transparent)" }} />

      <div className="site-container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <span
              className="self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded"
              style={{ fontFamily: "monospace", background: "var(--coral-dim)", color: "var(--coral)", border: "1px solid rgba(204,87,51,0.2)" }}
            >
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: "var(--text)" }}>
              Hard Technical Problems,<br />
              <span className="text-gradient-coral">Quantified Business Impact</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs sm:text-right hidden sm:block" style={{ color: "var(--text-muted)" }}>
            Real production problems — decisions, trade-offs, and the metrics after.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {cases.map((c, i) => {
            const col = colors[c.color];
            return (
              <div
                key={c.title}
                className="rounded-2xl overflow-hidden transition-colors duration-150"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,87,51,0.25)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
              >
                {/* Card header */}
                <div className="px-6 pt-5 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${col.badge}`} style={{ fontFamily: "monospace" }}>{c.label}</span>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>{c.context}</span>
                    </div>
                    <span className="text-[10px] font-bold" style={{ color: "var(--border-strong)", fontFamily: "monospace" }}>#{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>{c.title}</h3>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--text-muted)" }}>{c.desc}</p>
                </div>

                {/* Metrics */}
                <div className="px-6 py-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {c.metrics.map(m => (
                      <div key={m.l} className={`rounded-xl p-3 text-center border ${col.badge}`}>
                        <p className={`text-lg font-bold tabular-nums ${col.metric}`}>{m.v}</p>
                        <p className="text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>{m.l}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="rounded-xl p-4 border" style={{ background: "var(--bg-card-alt)", borderColor: "var(--border)" }}>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] mb-1.5" style={{ color: "var(--text-muted)", fontFamily: "monospace" }}>Challenge</p>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{c.challenge}</p>
                    </div>
                    <div className="rounded-xl p-4 border" style={{ background: "var(--bg-card-alt)", borderColor: "var(--border)" }}>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] mb-1.5" style={{ color: "var(--text-muted)", fontFamily: "monospace" }}>Solution</p>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{c.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {c.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 text-[10px] rounded border" style={{ color: "var(--text-muted)", background: "var(--bg-card-alt)", borderColor: "var(--border)", fontFamily: "monospace" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 text-white font-semibold rounded-xl text-sm btn-coral transition-colors">
            Discuss Your Technical Problem →
          </a>
        </div>
      </div>
    </section>
  );
}
