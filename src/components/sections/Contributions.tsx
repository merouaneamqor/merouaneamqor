"use client";

import { orgs } from "@/data/contributions";

function OrgItem({ org }: { org: typeof orgs[number] }) {
  return (
    <a
      href={org.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group shrink-0 px-8"
    >
      {org.wordmark ? (
        <img
          src={org.logo!}
          alt={org.name}
          className="h-5 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <>
          <img
            src={org.logo!}
            alt={org.name}
            className="h-5 w-5 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          />
          <span className="text-base font-medium whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
            {org.name}
          </span>
        </>
      )}
    </a>
  );
}

export default function Contributions() {
  return (
    <section className="relative py-8 border-y border-[var(--border)] overflow-hidden">
      {/* Fade masks on edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />

      <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6 font-medium relative z-20">
        Contributed to &amp; worked with
      </p>

      {/* Marquee track */}
      <div className="flex" style={{ animation: "marquee 28s linear infinite" }}>
        {[...orgs, ...orgs].map((org, i) => (
          <OrgItem key={`${org.name}-${i}`} org={org} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes marquee { 0%, 100% { transform: translateX(0); } }
        }
      `}</style>
    </section>
  );
}
