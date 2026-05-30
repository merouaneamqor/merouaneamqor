"use client";

const orgs = [
  { name: "Shopify",       logo: "https://cdn.simpleicons.org/shopify/6B7280",      url: "https://github.com/Shopify/identity_cache" },
  { name: "Google",        logo: "https://cdn.simpleicons.org/google/6B7280",       url: "https://github.com/google/libphonenumber" },
  { name: "Cloudflare",    logo: "https://cdn.simpleicons.org/cloudflare/6B7280",   url: "https://github.com/cloudflare/cloudflared" },
  { name: "Basecamp",      logo: "https://cdn.simpleicons.org/basecamp/6B7280",     url: "https://github.com/basecamp/omarchy" },
  { name: "X / Twitter",   logo: "https://cdn.simpleicons.org/x/6B7280",            url: "https://github.com/twitter/the-algorithm" },
  { name: "TheAlgorithms", logo: "https://cdn.simpleicons.org/github/6B7280",       url: "https://github.com/TheAlgorithms/Ruby" },
  { name: "Deno",          logo: "https://cdn.simpleicons.org/deno/6B7280",         url: "https://github.com/denoland/deno" },
  { name: "Cegid",         logo: null,                                               url: "https://www.cegid.com" },
  { name: "DabaDoc",       logo: null,                                               url: "https://www.dabadoc.com" },
];

export default function Contributions() {
  return (
    <section className="relative py-10 border-y border-white/[0.05]">
      {/* subtle top/bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080B11] via-transparent to-[#080B11] pointer-events-none z-10" />

      <div className="site-container relative z-20">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-600 mb-8 font-medium">
          Contributed to &amp; worked with
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
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
                <span className="w-5 h-5 rounded bg-slate-700 flex items-center justify-center text-[8px] font-bold text-slate-400">
                  {org.name.slice(0, 2).toUpperCase()}
                </span>
              )}
              <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {org.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
