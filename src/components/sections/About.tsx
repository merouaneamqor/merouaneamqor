"use client";

import { values, helps, languages } from "@/data/about";

const ValueIcon = ({ id }: { id: string }) => {
  if (id === "target") return (
    <svg className="w-6 h-6" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
  if (id === "layers") return (
    <svg className="w-6 h-6" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
  if (id === "cpu") return (
    <svg className="w-6 h-6" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="7" y="7" width="10" height="10" rx="1" /><path strokeLinecap="round" d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3" />
    </svg>
  );
  if (id === "bolt") return (
    <svg className="w-6 h-6" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
  return null;
};


export default function About() {
  return (
    <section id="about" className="py-16 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4" style={{ background: "var(--coral-dim)", color: "var(--coral)", borderColor: "rgba(204,87,51,0.2)" }}>
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--text)" }}>
                The Developer Who{" "}
                <span className="text-gradient-coral">Builds & Ships</span>
              </h2>
              <div className="flex flex-col gap-3 text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  I&apos;m Merouane — a{" "}
                  <span style={{ color: "var(--text)" }}>Full-Stack Developer & Team Leader R&D</span> based in{" "}
                  <span style={{ color: "var(--text)" }}>Casablanca, Morocco</span> with 8+ years building
                  websites, SaaS products, and digital experiences that convert. Currently leading
                  R&D engineering teams at{" "}
                  <span style={{ color: "var(--text)", fontWeight: 600 }}>Cegid</span>, one of Europe&apos;s leading enterprise SaaS companies.
                </p>
                <p>
                  I work with <span style={{ color: "var(--text)" }}>founders, startups, and growing businesses</span> to
                  build everything from a single landing page to complete SaaS platforms. My stack covers
                  the full spectrum — pixel-perfect React/Next.js frontends, robust Rails/Node backends,
                  cloud infrastructure, AI integrations, and third-party API connections.
                </p>
                <p>
                  What sets me apart is the combination of{" "}
                  <span style={{ color: "var(--text)" }}>senior-level craftsmanship</span> and{" "}
                  <span style={{ color: "var(--text)" }}>product-minded thinking</span> — I don&apos;t just write code,
                  I help you ship the right product, fast, and built to grow.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>How I Can Help You</p>
              <ul className="flex flex-col gap-2">
                {helps.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                    <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href="#contact" className="px-5 py-2.5 text-white text-sm font-semibold rounded-xl transition-colors btn-coral">
                Work with me →
              </a>
              <a href="https://linkedin.com/in/merouaneamqor" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 border text-sm font-medium rounded-xl transition-all hover:bg-white/5" style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }}>
                View LinkedIn
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map(v => (
              <div key={v.title} className="card-surface rounded-xl p-5 group">
                <div className="mb-3"><ValueIcon id={v.icon} /></div>
                <h3 className="font-semibold text-sm mb-1.5 transition-colors" style={{ color: "var(--text)" }}>{v.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{v.desc}</p>
              </div>
            ))}

            <div className="card-surface rounded-xl p-5 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>Languages</p>
              <div className="flex flex-wrap gap-3">
                {languages.map(l => (
                  <div key={l.lang} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <span className="w-7 h-5 rounded flex items-center justify-center text-[9px] font-bold tracking-wide" style={{ background: "var(--bg-card-alt)", color: "var(--coral)" }}>{l.code}</span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{l.lang}</p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{l.level}</p>
                    </div>
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
