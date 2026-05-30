"use client";

import { skillGroups as groups, tools } from "@/data/skills";


const bars: Record<string, string> = {
  blue:    "bg-blue-500",
  indigo:  "bg-indigo-500",
  violet:  "bg-violet-500",
  cyan:    "bg-cyan-500",
  emerald: "bg-emerald-500",
  amber:   "bg-amber-500",
};
const texts: Record<string, string> = {
  blue:    "text-blue-400",
  indigo:  "text-indigo-400",
  violet:  "text-violet-400",
  cyan:    "text-cyan-400",
  emerald: "text-emerald-400",
  amber:   "text-amber-400",
};


export default function Skills() {
  return (
    <section id="skills" className="py-16 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

      <div className="site-container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4" style={{ background: "var(--coral-dim)", color: "var(--coral)", borderColor: "rgba(204,87,51,0.2)" }}>
            Skills & Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ color: "var(--text)" }}>
            Production-Grade Depth,{" "}
            <span className="text-gradient-coral">Every Layer of the Stack</span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            8+ years of production reps across UI, APIs, databases, cloud infra, LLM pipelines, and engineering leadership — not tutorial experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {groups.map(g => (
            <div key={g.cat} className="card-surface rounded-2xl p-5">
              <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${texts[g.color]}`}>{g.cat}</p>
              <div className="flex flex-col gap-3.5">
                {g.skills.map(s => (
                  <div key={s.n}>
                    <div className="mb-1.5">
                      <span className="text-sm" style={{ color: "var(--text)" }}>{s.n}</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                      <div className={`h-full rounded-full ${bars[g.color]}`} style={{ width: `${s.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card-surface rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Full Ecosystem — 40+ Battle-Tested Tools</p>
          <div className="flex flex-wrap gap-2">
            {tools.map(t => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-lg border transition-all cursor-default hover:border-[var(--border-strong)]" style={{ color: "var(--text-muted)", background: "var(--bg-card-alt)", borderColor: "var(--border)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
