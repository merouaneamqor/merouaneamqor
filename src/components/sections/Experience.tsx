"use client";

const experiences = [
  {
    company: "Cegid",
    role: "Team Leader R&D (Ruby on Rails)",
    period: "Current Role",
    type: "Full-time",
    current: true,
    desc: "Leading R&D engineering teams and driving the development of enterprise software solutions within one of Europe's leading SaaS companies for finance, HR, and retail management.",
    responsibilities: [
      "Technical leadership and decision-making",
      "Team mentoring and developer growth",
      "Agile delivery and sprint management",
      "Architecture discussions and technical strategy",
      "Cross-functional collaboration",
      "Continuous improvement initiatives",
    ],
    tech: ["Ruby on Rails", "PostgreSQL", "Docker", "GitHub Actions", "Redis", "AWS"],
  },
  {
    company: "Previous Experience",
    role: "Senior Full-Stack Engineer (Ruby on Rails)",
    period: "Previous Role",
    type: "Full-time",
    current: false,
    desc: "Designed and delivered scalable web applications and business-critical features as a senior individual contributor, also providing technical guidance to junior engineers.",
    responsibilities: [
      "Ruby on Rails application development",
      "API design and integration",
      "Database optimization and query tuning",
      "Performance improvements",
      "Feature delivery and maintenance",
      "Code reviews and technical guidance",
    ],
    tech: ["Ruby on Rails", "React", "PostgreSQL", "Redis", "REST APIs", "RSpec"],
  },
  {
    company: "Early Career",
    role: "Full-Stack Developer",
    period: "Foundation",
    type: "Full-time",
    current: false,
    desc: "Built and maintained web applications across frontend and backend stacks, growing expertise in modern web development practices and agile methodologies.",
    responsibilities: [
      "Ruby on Rails backend development",
      "JavaScript frontend development",
      "SQL database design and management",
      "REST API development and consumption",
      "Git-based version control and collaboration",
      "Agile / Scrum methodologies",
    ],
    tech: ["Ruby on Rails", "JavaScript", "MySQL", "REST APIs", "Git", "Agile"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="site-container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            From Developer to{" "}
            <span className="text-gradient-blue">R&D Team Leader</span>
          </h2>
          <p className="text-slate-400 text-base">
            From Full-Stack Developer to Senior Engineer to R&D Team Leader at Cegid — a career built on shipping quality software and growing great teams.
          </p>
        </div>

        {/* Career progression indicator */}
        <div className="mb-10 card-surface rounded-2xl p-5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Career Progression</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {[
              { label: "Full-Stack Developer", color: "text-slate-400", bg: "bg-slate-700/40" },
              { label: "→", color: "text-slate-600", bg: "" },
              { label: "Senior Full-Stack Engineer", color: "text-blue-300", bg: "bg-blue-500/10" },
              { label: "→", color: "text-slate-600", bg: "" },
              { label: "Team Leader R&D @ Cegid", color: "text-cyan-300", bg: "bg-cyan-500/10" },
            ].map((s, i) => (
              s.label === "→"
                ? <span key={i} className={`text-lg font-light ${s.color} hidden sm:block`}>→</span>
                : <span key={i} className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${s.bg} ${s.color}`}>{s.label}</span>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-6 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/[0.06] to-transparent hidden md:block" />

          <div className="flex flex-col gap-6">
            {experiences.map((e) => (
              <div key={e.role} className="relative md:pl-14">
                {/* dot */}
                <div className="absolute left-3.5 top-5 w-4 h-4 rounded-full border-2 border-blue-500/60 bg-[#080B11] hidden md:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>

                <div className="card-surface rounded-2xl p-6">
                  <div className="flex flex-wrap justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold">{e.role}</h3>
                        {e.current && (
                          <span className="px-2 py-0.5 text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full font-medium">Current</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 font-medium text-sm">{e.company}</span>
                        <span className="text-slate-700">·</span>
                        <span className="text-xs text-slate-500 bg-white/[0.04] px-2 py-0.5 rounded font-medium">{e.type}</span>
                      </div>
                    </div>
                    <span className="text-sm text-slate-500 font-medium">{e.period}</span>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{e.desc}</p>

                  <div className="mb-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      {e.current ? "Key Responsibilities" : "Key Contributions"}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {e.responsibilities.map(r => (
                        <li key={r} className="flex items-start gap-2 text-xs text-slate-400">
                          <svg className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05] mt-4">
                    {e.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 text-xs text-slate-500 bg-white/[0.03] border border-white/[0.05] rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note about exact dates */}
        <div className="mt-8 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center">
          <p className="text-xs text-slate-500">
            Exact dates and company names available upon request during a discovery call.{" "}
            <a href="https://linkedin.com/in/merouane-amqor" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              View LinkedIn profile →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
