"use client";

import { experiences } from "@/data/experience";


export default function Experience() {
  return (
    <section id="experience" className="py-16 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

      <div className="site-container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4" style={{ background: "var(--coral-dim)", color: "var(--coral)", borderColor: "rgba(204,87,51,0.2)" }}>
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ color: "var(--text)" }}>
            From Developer to{" "}
            <span className="text-gradient-coral">R&D Team Leader</span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            From Full-Stack Developer to Senior Engineer to R&D Team Leader at Cegid — a career built on shipping quality software and growing great teams.
          </p>
        </div>

        {/* Career progression indicator */}
        <div className="mb-10 card-surface rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Career Progression</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {[
              { label: "Full-Stack Developer",      bg: "var(--bg-card-alt)", color: "var(--text-muted)" },
              { label: "→",                          bg: "",                    color: "var(--border-strong)" },
              { label: "Senior Full-Stack Engineer", bg: "var(--coral-dim)",   color: "var(--coral)" },
              { label: "→",                          bg: "",                    color: "var(--border-strong)" },
              { label: "Team Leader R&D @ Cegid",   bg: "var(--coral-dim)",   color: "var(--coral)" },
            ].map((s, i) => (
              s.label === "→"
                ? <span key={i} className="text-lg font-light hidden sm:block" style={{ color: s.color }}>→</span>
                : <span key={i} className="text-xs font-semibold px-3 py-1.5 rounded-lg" style={{ background: s.bg, color: s.color }}>{s.label}</span>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-6 bottom-0 w-px hidden md:block" style={{ background: `linear-gradient(to bottom, rgba(204,87,51,0.4), var(--border), transparent)` }} />

          <div className="flex flex-col gap-6">
            {experiences.map((e) => (
              <div key={e.role} className="relative md:pl-14">
                {/* dot */}
                <div className="absolute left-3.5 top-5 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center" style={{ borderColor: "rgba(204,87,51,0.6)", background: "var(--bg)" }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--coral)" }} />
                </div>

                <div className="card-surface rounded-2xl p-6">
                  <div className="flex flex-wrap justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold" style={{ color: "var(--text)" }}>{e.role}</h3>
                        {e.current && (
                          <span className="px-2 py-0.5 text-xs rounded-full font-medium border" style={{ background: "var(--coral-dim)", color: "var(--coral)", borderColor: "rgba(204,87,51,0.2)" }}>Current</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm" style={{ color: "var(--coral)" }}>{e.company}</span>
                        <span style={{ color: "var(--border-strong)" }}>·</span>
                        <span className="text-xs px-2 py-0.5 rounded font-medium bg-white/[0.04]" style={{ color: "var(--text-muted)" }}>{e.type}</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{e.period}</span>
                  </div>

                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>{e.desc}</p>

                  <div className="mb-1">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>
                      {e.current ? "Key Responsibilities" : "Key Contributions"}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {e.responsibilities.map(r => (
                        <li key={r} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                          <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t mt-4" style={{ borderColor: "var(--border)" }}>
                    {e.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded border bg-white/[0.03]" style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note about exact dates */}
        <div className="mt-8 p-4 rounded-xl border text-center" style={{ borderColor: "var(--border)", background: "var(--bg-card-alt)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Exact dates and company names available upon request during a discovery call.{" "}
            <a href="https://linkedin.com/in/merouane-amqor" target="_blank" rel="noopener noreferrer" className="transition-colors hover:underline" style={{ color: "var(--coral)" }}>
              View LinkedIn profile →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
