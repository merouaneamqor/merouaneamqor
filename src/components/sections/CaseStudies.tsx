"use client";

const cases = [
  {
    label: "AI Integration",
    color: "cyan",
    title: "AI Knowledge Assistant for Enterprise",
    context: "Internal Tool · Enterprise SaaS",
    desc: "Built an AI-powered knowledge management system that lets employees find answers across thousands of internal documents in seconds, reducing reliance on support teams.",
    challenge: "Employees spent 2–3 hours daily searching for internal documentation and process guides. Tribal knowledge was locked in people's heads.",
    solution: "Designed a RAG-based assistant using Ruby on Rails, OpenAI Embeddings, pgvector, and GPT-4. Documents are ingested, chunked, vectorized, and stored. Queries retrieve semantically relevant chunks and synthesize answers.",
    metrics: [
      { v: "60%", l: "Fewer support tickets" },
      { v: "3×",  l: "Faster info retrieval" },
      { v: "2h",  l: "Saved per employee/day" },
      { v: "92%", l: "Answer accuracy" },
    ],
    tech: ["Ruby on Rails", "OpenAI API", "pgvector", "PostgreSQL", "Sidekiq"],
  },
  {
    label: "SaaS Development",
    color: "blue",
    title: "Multi-Tenant SaaS Platform Scaling",
    context: "B2B SaaS · 50k+ Users",
    desc: "Architected and led the re-engineering of a legacy Rails monolith into a scalable multi-tenant SaaS platform, improving performance by 4× while reducing infrastructure costs.",
    challenge: "A growing SaaS platform was experiencing serious scalability issues — slow page loads (4–8s), frequent downtime during peak hours, and a codebase too tightly coupled to evolve quickly.",
    solution: "Conducted a full architecture audit, identified 12 critical bottlenecks. Introduced database indexing, query optimization, Redis caching, and modular Rails engines. Led a team of 6 through a 4-month refactor.",
    metrics: [
      { v: "4×",       l: "Performance improvement" },
      { v: "99.9%",    l: "Uptime achieved" },
      { v: "45%",      l: "Infrastructure cost reduction" },
      { v: "8s→0.8s", l: "Page load time" },
    ],
    tech: ["Ruby on Rails", "PostgreSQL", "Redis", "Docker", "AWS", "GitHub Actions"],
  },
  {
    label: "Engineering Leadership",
    color: "indigo",
    title: "Engineering Process Transformation",
    context: "Scale-up · Team of 15 Engineers",
    desc: "Joined a 15-person engineering team with broken delivery processes and chronic missed deadlines. Transformed them into a high-performing Agile team shipping on time.",
    challenge: "Releasing once per month with frequent rollbacks. Engineers were context-switching constantly, sprint planning took 4+ hours, and there was no visibility into progress or blockers.",
    solution: "Implemented Scrum with 2-week sprints, proper backlog grooming, and clear Definition of Done. Introduced DORA metrics, 1-on-1 culture, automated CI/CD, and feature flags for safe deploys.",
    metrics: [
      { v: "Daily", l: "Deployment frequency" },
      { v: "3×",   l: "More features shipped" },
      { v: "70%",  l: "Fewer rollbacks" },
      { v: "89%",  l: "Engineer satisfaction" },
    ],
    tech: ["GitHub Actions", "Linear", "Datadog", "Docker", "Feature Flags", "Agile"],
  },
];

const colors: Record<string, { badge: string; metric: string; border: string }> = {
  cyan:   { badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",     metric: "text-cyan-400",   border: "bg-cyan-500/8 border-cyan-500/20" },
  blue:   { badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",     metric: "text-blue-400",   border: "bg-blue-500/8 border-blue-500/20" },
  indigo: { badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20", metric: "text-indigo-400", border: "bg-indigo-500/8 border-indigo-500/20" },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="site-container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Real Problems,{" "}
            <span className="text-gradient-blue">Measurable Results</span>
          </h2>
          <p className="text-slate-400 text-base">
            Three in-depth case studies showing how I approach complex challenges and deliver quantifiable business impact.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {cases.map((c, i) => {
            const col = colors[c.color];
            return (
              <div key={c.title} className="card-surface rounded-2xl overflow-hidden">
                <div className="p-6 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${col.badge}`}>{c.label}</span>
                      <span className="text-xs text-slate-500">{c.context}</span>
                    </div>
                    <span className="text-xs text-slate-700 font-mono">#{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>

                {/* Metrics */}
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                    {c.metrics.map(m => (
                      <div key={m.l} className={`rounded-xl p-4 text-center border ${col.border}`}>
                        <p className={`text-xl font-bold tabular-nums ${col.metric}`}>{m.v}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{m.l}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-5">
                    <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">The Challenge</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">The Solution</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{c.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {c.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 text-xs text-slate-500 bg-white/[0.03] border border-white/[0.05] rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-4">Want similar results for your project?</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-sm">
            Let&apos;s Discuss Your Challenge →
          </a>
        </div>
      </div>
    </section>
  );
}
