"use client";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--border-strong), transparent)" }} />

      <div className="site-container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="flex flex-col gap-3">
            <span
              className="self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded"
              style={{ fontFamily: "monospace", background: "var(--coral-dim)", color: "var(--coral)", border: "1px solid rgba(204,87,51,0.2)" }}
            >
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: "var(--text)" }}>
              IC to Engineering Lead —<br />
              <span className="text-gradient-coral">8 Years of Compounding Depth</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs sm:text-right hidden sm:block" style={{ color: "var(--text-muted)" }}>
            Shipping and scaling — not just seniority.
          </p>
        </div>

        {/* Trajectory strip */}
        <div
          className="rounded-xl px-5 py-4 mb-8 flex flex-col sm:flex-row sm:items-center gap-3"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <span
            className="text-[9px] font-bold uppercase tracking-[0.18em] shrink-0"
            style={{ color: "var(--text-muted)", fontFamily: "monospace" }}
          >
            Trajectory
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { label: "Full-Stack Developer", active: false },
              null,
              { label: "Senior Full-Stack Engineer", active: true },
              null,
              { label: "R&D Engineering Lead · Cegid", active: true, current: true },
            ].map((s, i) =>
              s === null ? (
                <svg key={i} className="w-3.5 h-3.5 shrink-0 hidden sm:block" style={{ color: "var(--border-strong)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              ) : (
                <span
                  key={i}
                  className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                  style={{
                    background: s.active ? "var(--coral-dim)" : "var(--bg-card-alt)",
                    color: s.active ? "var(--coral)" : "var(--text-muted)",
                    border: s.current ? "1px solid rgba(204,87,51,0.3)" : "1px solid transparent",
                  }}
                >
                  {s.label}
                </span>
              )
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[22px] top-6 bottom-0 w-px hidden md:block" style={{ background: `linear-gradient(to bottom, rgba(204,87,51,0.4), var(--border), transparent)` }} />

          <div className="flex flex-col gap-5">
            {experiences.map((e) => (
              <div key={e.role} className="relative md:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-5 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center" style={{ borderColor: "rgba(204,87,51,0.5)", background: "var(--bg)" }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--coral)" }} />
                </div>

                <div
                  className="rounded-2xl p-5 transition-colors duration-150"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,87,51,0.25)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
                >
                  {/* Role header */}
                  <div className="flex flex-wrap justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>{e.role}</h3>
                        {e.current && (
                          <span
                            className="text-[9px] font-bold uppercase tracking-[0.15em] px-1.5 py-0.5 rounded-sm"
                            style={{ fontFamily: "monospace", background: "var(--coral-dim)", color: "var(--coral)", border: "1px solid rgba(204,87,51,0.2)" }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="font-medium" style={{ color: "var(--coral)" }}>{e.company}</span>
                        <span style={{ color: "var(--border-strong)" }}>·</span>
                        <span style={{ color: "var(--text-muted)" }}>{e.type}</span>
                      </div>
                    </div>
                    <span className="text-xs font-medium" style={{ color: "var(--text-muted)", fontFamily: "monospace" }}>{e.period}</span>
                  </div>

                  <p className="text-xs mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>{e.desc}</p>

                  {/* Responsibilities */}
                  <div className="mb-3">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.18em] mb-2"
                      style={{ color: "var(--text-muted)", fontFamily: "monospace" }}
                    >
                      {e.current ? "Responsibilities" : "Contributions"}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-1.5">
                      {e.responsibilities.map(r => (
                        <li key={r} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                          <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: "var(--coral)" }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                    {e.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 text-[10px] rounded border" style={{ color: "var(--text-muted)", background: "var(--bg-card-alt)", borderColor: "var(--border)", fontFamily: "monospace" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 px-4 py-3 rounded-xl text-center" style={{ background: "var(--bg-card-alt)", border: "1px solid var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Full timeline & references on request ·{" "}
            <a href="https://linkedin.com/in/merouane-amqor" target="_blank" rel="noopener noreferrer" className="transition-colors hover:underline" style={{ color: "var(--coral)" }}>
              Verify on LinkedIn →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
