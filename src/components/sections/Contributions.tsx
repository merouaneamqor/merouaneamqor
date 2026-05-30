"use client";

import { orgs } from "@/data/contributions";

export default function Contributions() {
  return (
    <section className="relative py-8 border-y border-[var(--border)]">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-[var(--bg)] pointer-events-none z-10" />

      <div className="site-container relative z-20">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6 font-medium">
          Contributed to &amp; worked with
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {orgs.map((org) => (
            <a
              key={org.name}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity duration-300 group"
            >
              {org.logo ? (
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="w-5 h-5 rounded flex items-center justify-center text-[8px] font-bold" style={{ background: "var(--bg-card-alt)", color: "var(--text-muted)" }}>
                  {org.name.slice(0, 2).toUpperCase()}
                </span>
              )}
              <span className="text-sm font-medium transition-colors duration-300 whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                {org.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
