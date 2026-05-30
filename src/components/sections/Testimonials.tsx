"use client";

import { testimonials, testimonialStats } from "@/data/testimonials";


function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0,1,2,3,4].map(i => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, var(--coral-dim) 0%, transparent 70%)" }} />

      <div className="site-container relative">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4" style={{ background: "var(--coral-dim)", color: "var(--coral)", borderColor: "rgba(204,87,51,0.2)" }}>
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ color: "var(--text)" }}>
            Trusted by{" "}
            <span className="text-gradient-coral">Founders & CTOs</span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            What engineering leaders, founders, and product teams say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div key={t.name} className="card-surface rounded-2xl p-6 flex flex-col">
              <Stars />
              <blockquote className="mt-4 text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t flex items-center gap-3" style={{ borderColor: "var(--border)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: "var(--coral)" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role} · {t.company}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.7 }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 card-surface rounded-2xl p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {testimonialStats.map(s => (
              <div key={s.l}>
                <p className="text-2xl font-bold" style={{ color: "var(--coral)" }}>{s.v}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
