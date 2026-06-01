"use client";

import { orgs } from "@/data/contributions";

const featured = orgs.filter(o => o.wordmark);
const community = orgs.filter(o => !o.wordmark);

const DESCRIPTIONS: Record<string, { metric: string; body: string }> = {
  Cegid: {
    metric: "700k+ businesses",
    body: "Leading R&D engineering teams at Europe's top enterprise SaaS platform — finance, HR & retail verticals.",
  },
  DabaDoc: {
    metric: "MENA-scale platform",
    body: "Built scalable healthcare infrastructure connecting patients with doctors across Africa & MENA.",
  },
  ByteDance: {
    metric: "MENA market entry",
    body: "Established MENA engineering workflows and culturally-adapted productivity systems for regional scale.",
  },
  Solocal: {
    metric: "400k+ French SMBs",
    body: "Shipped digital presence stack — websites, SEO, and local marketing platforms for French businesses.",
  },
};

export default function Contributions() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--border-strong), transparent)" }} />

      <div className="site-container">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded"
                style={{ background: "var(--coral-dim)", color: "var(--coral)", border: "1px solid rgba(204,87,51,0.2)", fontFamily: "monospace" }}
              >
                Track Record
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "monospace" }}>
                8+ yrs · 4 companies · 80+ products
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-none" style={{ color: "var(--text)" }}>
              Companies &amp; Projects<br />
              <span className="text-gradient-coral">I've Shaped</span>
            </h2>
          </div>
          <p className="text-sm max-w-xs text-right hidden sm:block" style={{ color: "var(--text-muted)" }}>
            Enterprise SaaS leadership to open-source contributions across the Rails &amp; JS ecosystem.
          </p>
        </div>

        {/* ── Employer cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {featured.map((org) => {
            const info = DESCRIPTIONS[org.name];
            return (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between gap-6 rounded-2xl p-6 overflow-hidden transition-all duration-200"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  boxShadow: "inset 3px 0 0 var(--coral)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,87,51,0.35)";
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-card-alt)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-2">
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="h-7 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <svg
                    className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "var(--coral)" }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                {/* Bottom block */}
                <div className="flex flex-col gap-2">
                  {/* Role tag */}
                  <span
                    className="self-start text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-sm"
                    style={{ fontFamily: "monospace", background: "var(--coral-dim)", color: "var(--coral)" }}
                  >
                    {org.tag}
                  </span>
                  {/* Metric */}
                  {info && (
                    <p className="text-[11px] font-semibold" style={{ color: "var(--coral)" }}>{info.metric}</p>
                  )}
                  {/* Description */}
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {info?.body ?? ""}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── Open source roster ── */}
        <div
          className="rounded-2xl px-6 py-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm"
              style={{ fontFamily: "monospace", background: "var(--bg-card-alt)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
            >
              Field Contributions
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            <span className="text-[10px]" style={{ color: "var(--text-muted)", fontFamily: "monospace" }}>
              {community.length} repositories
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {community.map(org => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-colors duration-150"
                style={{ borderColor: "var(--border)", background: "var(--bg-card-alt)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,87,51,0.35)";
                  (e.currentTarget as HTMLElement).style.background = "var(--coral-dim)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-card-alt)";
                }}
              >
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-4 h-4 object-contain shrink-0 grayscale group-hover:grayscale-0 transition-all duration-200"
                />
                <span className="text-[11px] font-medium truncate" style={{ color: "var(--text-muted)" }}>{org.name}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
