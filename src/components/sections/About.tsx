"use client";

const values = [
  { icon: "🎯", title: "Delivery-First Mindset", desc: "I ship working software on time. Every decision is weighed against its impact on delivery speed and quality." },
  { icon: "🌐", title: "Full-Stack Coverage",    desc: "From Figma to deployment — I handle frontend, backend, infrastructure, and integrations with equal depth." },
  { icon: "🤖", title: "AI-Native Approach",     desc: "Integrating AI into workflows and products since before it became mainstream. Practical implementations, real ROI." },
  { icon: "🚀", title: "Team Multiplier",        desc: "I don't just write code — I make entire engineering teams faster, happier, and more effective." },
];

const helps = [
  "Design and build websites that convert visitors to clients",
  "Create high-performance landing pages in days, not weeks",
  "Build full SaaS products from 0 to production",
  "Integrate any third-party API or SaaS tool",
  "Implement AI solutions with measurable business impact",
  "Lead engineering teams and establish best practices",
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                The Developer Who{" "}
                <span className="text-gradient-blue">Builds & Ships</span>
              </h2>
              <div className="flex flex-col gap-3 text-slate-400 text-sm leading-relaxed">
                <p>
                  I&apos;m Merouane — a{" "}
                  <span className="text-slate-200">Full-Stack Developer & Team Leader R&D</span> based in{" "}
                  <span className="text-slate-200">Casablanca, Morocco</span> with 10+ years building
                  websites, SaaS products, and digital experiences that convert. Currently leading
                  R&D engineering teams at{" "}
                  <span className="text-white font-semibold">Cegid</span>, one of Europe&apos;s leading enterprise SaaS companies.
                </p>
                <p>
                  I work with <span className="text-slate-200">founders, startups, and growing businesses</span> to
                  build everything from a single landing page to complete SaaS platforms. My stack covers
                  the full spectrum — pixel-perfect React/Next.js frontends, robust Rails/Node backends,
                  cloud infrastructure, AI integrations, and third-party API connections.
                </p>
                <p>
                  What sets me apart is the combination of{" "}
                  <span className="text-slate-200">senior-level craftsmanship</span> and{" "}
                  <span className="text-slate-200">product-minded thinking</span> — I don&apos;t just write code,
                  I help you ship the right product, fast, and built to grow.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">How I Can Help You</p>
              <ul className="flex flex-col gap-2">
                {helps.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href="#contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-colors">
                Work with me →
              </a>
              <a href="https://linkedin.com/in/merouaneamqor" target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all hover:bg-white/5">
                View LinkedIn
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map(v => (
              <div key={v.title} className="card-surface rounded-xl p-5 group">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1.5 group-hover:text-blue-300 transition-colors">{v.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}

            <div className="card-surface rounded-xl p-5 sm:col-span-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Languages</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { lang: "Arabic",  level: "Native",       flag: "🇲🇦" },
                  { lang: "French",  level: "Fluent",       flag: "🇫🇷" },
                  { lang: "English", level: "Professional", flag: "🇬🇧" },
                ].map(l => (
                  <div key={l.lang} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                    <span className="text-lg">{l.flag}</span>
                    <div>
                      <p className="text-sm font-medium text-slate-300">{l.lang}</p>
                      <p className="text-xs text-slate-600">{l.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
