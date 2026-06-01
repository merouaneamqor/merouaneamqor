"use client";

import { skillGroups as groups, tools } from "@/data/skills";

const bars: Record<string, string>  = { blue: "bg-blue-500",    indigo: "bg-indigo-500", violet: "bg-violet-500", cyan: "bg-cyan-500",    emerald: "bg-emerald-500", amber: "bg-amber-500" };
const texts: Record<string, string> = { blue: "text-blue-400",  indigo: "text-indigo-400", violet: "text-violet-400", cyan: "text-cyan-400", emerald: "text-emerald-400", amber: "text-amber-400" };

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--border-strong), transparent)" }} />

      <div className="site-container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <span
              className="self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded"
              style={{ fontFamily: "monospace", background: "var(--coral-dim)", color: "var(--coral)", border: "1px solid rgba(204,87,51,0.2)" }}
            >
              Skills & Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: "var(--text)" }}>
              Production-Grade Depth,<br />
              <span className="text-gradient-coral">Every Layer of the Stack</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs sm:text-right hidden sm:block" style={{ color: "var(--text-muted)" }}>
            8+ yrs production reps — UI, APIs, infra, LLMs, and leadership.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {groups.map(g => (
            <div
              key={g.cat}
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${texts[g.color]}`} style={{ fontFamily: "monospace" }}>{g.cat}</p>
              <div className="flex flex-col gap-3">
                {g.skills.map(s => (
                  <div key={s.n}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs" style={{ color: "var(--text)" }}>{s.n}</span>
                      <span className="text-[10px] tabular-nums" style={{ color: "var(--text-muted)", fontFamily: "monospace" }}>{s.v}%</span>
                    </div>
                    <div className="h-0.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                      <div className={`h-full rounded-full ${bars[g.color]}`} style={{ width: `${s.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm"
              style={{ fontFamily: "monospace", background: "var(--bg-card-alt)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
            >
              Full Ecosystem
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            <span className="text-[10px]" style={{ color: "var(--text-muted)", fontFamily: "monospace" }}>40+ tools</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tools.map(t => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs rounded-lg border cursor-default transition-colors duration-150"
                style={{ color: "var(--text-muted)", background: "var(--bg-card-alt)", borderColor: "var(--border)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,87,51,0.3)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
