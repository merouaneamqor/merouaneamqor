"use client";

import { useEffect, useRef, useState } from "react";

const orgs = [
  {
    name: "Shopify",
    logo: "https://cdn.simpleicons.org/shopify/96BF48",
    type: "PR Merged",
    desc: "Thread-safety fix on identity_cache — 1.9k⭐ gem used in production",
    url: "https://github.com/Shopify/identity_cache",
    color: "from-green-500/10 to-green-600/5 border-green-500/20",
    badge: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    name: "Google",
    logo: "https://cdn.simpleicons.org/google/4285F4",
    type: "PR Merged",
    desc: "Contributed to libphonenumber — the standard phone number library",
    url: "https://github.com/google/libphonenumber",
    color: "from-blue-500/10 to-blue-600/5 border-blue-500/20",
    badge: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "TheAlgorithms",
    logo: "https://cdn.simpleicons.org/github/ffffff",
    type: "PR Merged",
    desc: "Added Ruby algorithm implementations to the community reference repo",
    url: "https://github.com/TheAlgorithms/Ruby",
    color: "from-slate-500/10 to-slate-600/5 border-slate-500/20",
    badge: "text-slate-400 bg-slate-500/10 border-slate-500/20",
  },
  {
    name: "Basecamp",
    logo: "https://cdn.simpleicons.org/basecamp/1D2D35",
    type: "Issue",
    desc: "Opened issues on Omarchy: iOS passkey/MFA support & system upgrade feature",
    url: "https://github.com/basecamp/omarchy",
    color: "from-cyan-500/10 to-cyan-600/5 border-cyan-500/20",
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    name: "X / Twitter",
    logo: "https://cdn.simpleicons.org/x/ffffff",
    type: "Issue",
    desc: "Filed issues on the-algorithm open-source repo",
    url: "https://github.com/twitter/the-algorithm",
    color: "from-slate-500/10 to-slate-600/5 border-white/10",
    badge: "text-slate-300 bg-white/5 border-white/10",
  },
  {
    name: "Cloudflare",
    logo: "https://cdn.simpleicons.org/cloudflare/F38020",
    type: "Issue",
    desc: "Reported iOS polyfill CDN loading bug in cloudflared",
    url: "https://github.com/cloudflare/cloudflared",
    color: "from-orange-500/10 to-orange-600/5 border-orange-500/20",
    badge: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  },
  {
    name: "Deno",
    logo: "https://cdn.simpleicons.org/deno/ffffff",
    type: "Issue",
    desc: "Filed 2 bug reports on the Deno runtime",
    url: "https://github.com/denoland/deno",
    color: "from-slate-500/10 to-slate-600/5 border-slate-500/20",
    badge: "text-slate-400 bg-slate-500/10 border-slate-500/20",
  },
  {
    name: "DabaDoc",
    logo: null,
    type: "Employed",
    desc: "Worked as a developer on the leading MENA health-tech platform",
    url: "https://www.dabadoc.com",
    color: "from-sky-500/10 to-sky-600/5 border-sky-500/20",
    badge: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  },
  {
    name: "Cegid",
    logo: null,
    type: "Employed",
    desc: "Team Leader R&D — building enterprise ERP & SaaS solutions",
    url: "https://www.cegid.com",
    color: "from-indigo-500/10 to-indigo-600/5 border-indigo-500/20",
    badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
];

function OrgCard({ org, index }: { org: typeof orgs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative rounded-xl border bg-gradient-to-br p-5 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg cursor-pointer overflow-hidden ${org.color}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms, scale 0.2s ease, box-shadow 0.2s ease`,
      }}
      onClick={() => window.open(org.url, "_blank")}
    >
      {/* scan beam on hover */}
      <div className="absolute left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)",
          animation: "scan-beam 2s ease-in-out infinite",
        }}
      />

      <div className="flex items-start gap-3">
        {/* Logo / Initials */}
        <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
          {org.logo ? (
            <img src={org.logo} alt={org.name} className="w-5 h-5 object-contain" />
          ) : (
            <span className="text-xs font-bold text-slate-300">{org.name.slice(0, 2).toUpperCase()}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-white font-semibold text-sm">{org.name}</span>
            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${org.badge}`}>
              {org.type}
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">{org.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Contributions() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="site-container">
        <div className="section-header">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/8 text-indigo-400 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-slow" />
            Open Source & Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-3">
            Contributed To
          </h2>
          <p className="text-slate-400 text-base">
            Companies and open-source projects I've shipped code, filed issues, or worked at professionally.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {orgs.map((org, i) => (
            <OrgCard key={org.name} org={org} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
