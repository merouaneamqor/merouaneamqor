"use client";

const services = [
  {
    emoji: "🌐",
    color: "blue",
    title: "Website Design & Development",
    tagline: "Stunning, fast, conversion-focused websites",
    features: [
      "Custom design from scratch or Figma",
      "Responsive across all devices",
      "Performance-first (Core Web Vitals)",
      "SEO-optimized structure",
      "CMS integration (Contentful, Sanity)",
      "Animations & interactive UI",
    ],
    cta: "From $1,500 / project",
  },
  {
    emoji: "🚀",
    color: "emerald",
    title: "Landing Pages",
    tagline: "Pages that turn visitors into customers",
    features: [
      "High-converting copywriting structure",
      "A/B testing ready",
      "Fast delivery (3–7 days)",
      "Lead capture & form integrations",
      "Analytics & tracking setup",
      "Mobile-perfect pixel precision",
    ],
    cta: "From $600 / page",
  },
  {
    emoji: "⚙️",
    color: "indigo",
    title: "SaaS Product Development",
    tagline: "Full-stack SaaS from idea to production",
    features: [
      "Rails / Next.js architecture",
      "Authentication & billing (Stripe)",
      "Multi-tenancy & role-based access",
      "API design & third-party integrations",
      "Subscription & onboarding flows",
      "Scalable from day 1",
    ],
    cta: "From $5,000 / MVP",
  },
  {
    emoji: "✨",
    color: "cyan",
    title: "AI Integration",
    tagline: "Practical AI with measurable ROI",
    features: [
      "OpenAI / GPT-4 & Claude integration",
      "RAG knowledge bases",
      "AI-powered internal tools",
      "Chatbots & virtual assistants",
      "Workflow & process automation",
      "Custom LLM pipelines",
    ],
    cta: "From $140 / hr",
  },
  {
    emoji: "🔗",
    color: "violet",
    title: "API & SaaS Integrations",
    tagline: "Connect any tools your business needs",
    features: [
      "REST & GraphQL API development",
      "Zapier / Make / n8n automations",
      "CRM & ERP integrations",
      "Payment gateway setup",
      "Webhook pipelines",
      "Third-party API consumption",
    ],
    cta: "From $120 / hr",
  },
  {
    emoji: "🧭",
    color: "amber",
    title: "Tech Leadership & Advisory",
    tagline: "Fractional CTO & Engineering Lead",
    features: [
      "Fractional CTO for startups",
      "Architecture audits & roadmap",
      "Engineering team mentoring",
      "Agile coaching & delivery velocity",
      "Code reviews & best practices",
      "Hiring & onboarding support",
    ],
    cta: "From $150 / hr",
  },
];

const colors: Record<string, { pill: string; dot: string; glow: string }> = {
  blue:    { pill: "bg-blue-500/10 text-blue-300 border-blue-500/20",     dot: "bg-blue-500",    glow: "group-hover:shadow-blue-500/10" },
  indigo:  { pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",  dot: "bg-indigo-500",  glow: "group-hover:shadow-indigo-500/10" },
  violet:  { pill: "bg-violet-500/10 text-violet-300 border-violet-500/20",  dot: "bg-violet-500",  glow: "group-hover:shadow-violet-500/10" },
  cyan:    { pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",     dot: "bg-cyan-500",    glow: "group-hover:shadow-cyan-500/10" },
  emerald: { pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20", dot: "bg-emerald-500", glow: "group-hover:shadow-emerald-500/10" },
  amber:   { pill: "bg-amber-500/10 text-amber-300 border-amber-500/20",   dot: "bg-amber-500",   glow: "group-hover:shadow-amber-500/10" },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="site-container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Everything You Need to{" "}
            <span className="text-gradient-blue">Build & Grow Online</span>
          </h2>
          <p className="text-slate-400 text-base">
            From a single landing page to a full SaaS platform — I deliver end-to-end across design, development, integrations, and leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(s => {
            const c = colors[s.color];
            return (
              <div key={s.title} className={`card-surface rounded-2xl p-6 flex flex-col group transition-shadow duration-300 hover:shadow-xl ${c.glow}`}>
                <div className="text-2xl mb-3">{s.emoji}</div>
                <h3 className="text-white font-semibold text-base mb-1">{s.title}</h3>
                <p className="text-slate-500 text-xs mb-4">{s.tagline}</p>

                <ul className="flex flex-col gap-2 flex-1">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${c.pill}`}>
                    {s.cta}
                  </span>
                  <a href="#contact" className="text-xs text-slate-600 hover:text-slate-300 transition-colors">
                    Get a quote →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 card-surface rounded-2xl p-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "⚡", title: "Fast Turnaround", desc: "Landing pages in 3–7 days. MVPs in 4–8 weeks." },
              { icon: "🌍", title: "Remote-First", desc: "Serving clients in France, UK, Germany, Morocco, and beyond." },
              { icon: "🤝", title: "Transparent Pricing", desc: "Fixed-price projects or hourly — no surprises, ever." },
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm mb-4">Not sure what you need? Let&apos;s figure it out together — free 30-min call.</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm">
            Book a Free Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
}
