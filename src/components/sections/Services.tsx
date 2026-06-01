"use client";

import { services, serviceHighlights } from "@/data/services";

const ServiceIcon = ({ id }: { id: string }) => {
  const cls = "w-5 h-5";
  if (id === "globe")    return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>;
  if (id === "arrow-up") return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 7 7M12 3v18"/></svg>;
  if (id === "cube")     return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0v10l-8 4m0-14L4 17m8 4V10"/></svg>;
  if (id === "chip")     return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><rect x="7" y="7" width="10" height="10" rx="1"/><path strokeLinecap="round" d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3"/></svg>;
  if (id === "link")     return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path strokeLinecap="round" d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>;
  if (id === "compass")  return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/></svg>;
  return null;
};

const dots: Record<string, string> = {
  blue:    "bg-blue-500",
  indigo:  "bg-indigo-500",
  violet:  "bg-violet-500",
  cyan:    "bg-cyan-500",
  emerald: "bg-emerald-500",
  amber:   "bg-amber-500",
};
const pills: Record<string, string> = {
  blue:    "bg-blue-500/10 text-blue-400 border-blue-500/20",
  indigo:  "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  violet:  "bg-violet-500/10 text-violet-400 border-violet-500/20",
  cyan:    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  amber:   "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--border-strong), transparent)" }} />

      <div className="site-container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <span
              className="self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded"
              style={{ fontFamily: "monospace", background: "var(--coral-dim)", color: "var(--coral)", border: "1px solid rgba(204,87,51,0.2)" }}
            >
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight" style={{ color: "var(--text)" }}>
              Senior-Level Execution<br />
              <span className="text-gradient-coral">Across the Full Stack</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs sm:text-right hidden sm:block" style={{ color: "var(--text-muted)" }}>
            Architecture to delivery — I own the full critical path.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {services.map(s => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl p-5 transition-colors duration-150"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,87,51,0.3)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
            >
              <div className="mb-3" style={{ color: "var(--coral)" }}><ServiceIcon id={s.icon} /></div>
              <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--text)" }}>{s.title}</h3>
              <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>{s.tagline}</p>

              <ul className="flex flex-col gap-1.5 flex-1">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                    <span className={`w-1 h-1 rounded-full shrink-0 ${dots[s.color]}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${pills[s.color]}`} style={{ fontFamily: "monospace" }}>
                  {s.cta}
                </span>
                <a href="#contact" className="text-xs transition-colors hover:underline" style={{ color: "var(--text-muted)" }}>
                  Get a quote →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights bar */}
        <div
          className="rounded-2xl px-6 py-5 grid sm:grid-cols-3 gap-6"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          {serviceHighlights.map(item => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--coral-dim)", color: "var(--coral)" }}>
                {item.icon === "bolt" && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>}
                {item.icon === "globe" && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>}
                {item.icon === "handshake" && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{item.title}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 text-white font-semibold rounded-xl text-sm btn-coral transition-colors">
            Book a Technical Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
}
