"use client";

import { orgs } from "@/data/contributions";

const featured = orgs.filter(o => o.wordmark);
const community = orgs.filter(o => !o.wordmark);

export default function Contributions() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

      <div className="site-container">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4" style={{ background: "var(--coral-dim)", color: "var(--coral)", borderColor: "rgba(204,87,51,0.2)" }}>
            Experience & Contributions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ color: "var(--text)" }}>
            Companies &{" "}
            <span className="text-gradient-coral">Projects I've Shaped</span>
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            From enterprise SaaS leadership to open-source contributions across the Rails & JS ecosystem.
          </p>
        </div>

        {/* Featured — employer cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {featured.map(org => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-surface rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:scale-[1.02]"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" style={{ color: "var(--coral)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--coral)" }}>{org.tag}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {org.name === "Cegid"
                    ? "Leading R&D engineering teams at one of Europe's top enterprise SaaS companies — 700,000+ businesses across finance, HR & retail."
                    : "Senior Full-Stack Engineer building scalable healthcare platforms connecting patients with doctors across Africa & MENA."}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Open source grid */}
        <div className="card-surface rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: "var(--text-muted)" }}>Open Source Contributions</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {community.map(org => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 hover:border-[var(--coral)] hover:bg-[var(--coral-dim)]"
                style={{ borderColor: "var(--border)", background: "var(--bg-card-alt)" }}
              >
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-xs font-medium text-center leading-tight" style={{ color: "var(--text-muted)" }}>{org.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
