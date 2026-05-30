"use client";

const groups = [
  {
    cat: "Frontend & UI",  color: "blue",
    skills: [{ n: "Next.js / React", v: 92 }, { n: "TypeScript", v: 88 }, { n: "Tailwind CSS", v: 90 }, { n: "HTML & CSS", v: 95 }],
  },
  {
    cat: "Backend",        color: "indigo",
    skills: [{ n: "Ruby on Rails", v: 95 }, { n: "Node.js", v: 80 }, { n: "REST APIs", v: 95 }, { n: "GraphQL", v: 80 }],
  },
  {
    cat: "Databases",      color: "violet",
    skills: [{ n: "PostgreSQL", v: 90 }, { n: "MySQL", v: 82 }, { n: "Redis", v: 85 }, { n: "Elasticsearch", v: 70 }],
  },
  {
    cat: "DevOps & Cloud", color: "cyan",
    skills: [{ n: "Docker", v: 88 }, { n: "AWS", v: 80 }, { n: "GitHub Actions", v: 92 }, { n: "CI/CD Pipelines", v: 92 }],
  },
  {
    cat: "AI & Automation", color: "amber",
    skills: [{ n: "OpenAI / GPT-4", v: 88 }, { n: "RAG & Embeddings", v: 80 }, { n: "LLM Integration", v: 85 }, { n: "Workflow Automation", v: 82 }],
  },
  {
    cat: "Leadership",     color: "emerald",
    skills: [{ n: "Technical Leadership", v: 95 }, { n: "Agile / Scrum", v: 93 }, { n: "Product Delivery", v: 90 }, { n: "Engineering Culture", v: 88 }],
  },
];

const bars: Record<string, string> = {
  blue:    "bg-blue-500",
  indigo:  "bg-indigo-500",
  violet:  "bg-violet-500",
  cyan:    "bg-cyan-500",
  emerald: "bg-emerald-500",
  amber:   "bg-amber-500",
};
const texts: Record<string, string> = {
  blue:    "text-blue-400",
  indigo:  "text-indigo-400",
  violet:  "text-violet-400",
  cyan:    "text-cyan-400",
  emerald: "text-emerald-400",
  amber:   "text-amber-400",
};

const tools = [
  "Next.js","React","TypeScript","Tailwind CSS","Shadcn/ui","Framer Motion",
  "Ruby on Rails","Node.js","GraphQL","REST APIs","WebSockets","Hotwire","Turbo","Stimulus",
  "Sidekiq","RSpec","Minitest","Devise","Stripe","Twilio",
  "PostgreSQL","MySQL","Redis","Elasticsearch","Prisma",
  "Docker","AWS S3","AWS EC2","AWS Lambda","Vercel","Render","Heroku","GitHub Actions",
  "OpenAI","Claude API","LangChain","n8n","Zapier","Make",
  "Figma","Notion","Linear","Sentry","Datadog","New Relic",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="site-container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Skills & Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Full-Stack Expertise,{" "}
            <span className="text-gradient-blue">Front to Back</span>
          </h2>
          <p className="text-slate-400 text-base">
            From pixel-perfect frontends to high-performance backends, cloud infrastructure, AI integrations, and engineering leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {groups.map(g => (
            <div key={g.cat} className="card-surface rounded-2xl p-5">
              <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${texts[g.color]}`}>{g.cat}</p>
              <div className="flex flex-col gap-3.5">
                {g.skills.map(s => (
                  <div key={s.n}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-slate-300">{s.n}</span>
                      <span className="text-xs text-slate-600">{s.v}%</span>
                    </div>
                    <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${bars[g.color]}`} style={{ width: `${s.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card-surface rounded-2xl p-5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Full Ecosystem — 40+ Tools & Libraries</p>
          <div className="flex flex-wrap gap-2">
            {tools.map(t => (
              <span key={t} className="px-2.5 py-1 text-xs text-slate-400 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:border-white/[0.12] hover:text-slate-200 transition-all cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
