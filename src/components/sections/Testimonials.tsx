"use client";

import { testimonials, testimonialStats } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--border-strong), transparent)" }} />

      <div className="site-container relative">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <span
              className="self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded"
              style={{ fontFamily: "monospace", background: "var(--coral-dim)", color: "var(--coral)", border: "1px solid rgba(204,87,51,0.2)" }}
            >
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: "var(--text)" }}>
              What CTOs &amp; Founders<br />
              <span className="text-gradient-coral">Say After Shipping Together</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs sm:text-right hidden sm:block" style={{ color: "var(--text-muted)" }}>
            Engineering leaders who brought me in for the hard problems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl p-5 transition-colors duration-150"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,87,51,0.25)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[0,1,2,3,4].map(i => (
                  <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-4 pt-4 flex items-center gap-3" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: "var(--coral)" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "var(--text)" }}>{t.name}</p>
                  <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>{t.role} · {t.company}</p>
                  <p className="text-[10px]" style={{ color: "var(--text-muted)", opacity: 0.6 }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          {testimonialStats.map(s => (
            <div key={s.l} className="text-center">
              <p className="text-2xl font-bold tabular-nums" style={{ color: "var(--coral)" }}>{s.v}</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
