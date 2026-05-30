"use client";

const testimonials = [
  {
    quote: "Merouane completely transformed how our engineering team operates. We went from shipping every month to shipping every day. He brought structure, clarity, and genuine care for both the technical quality and the people on the team.",
    name: "Sophie Laurent", role: "Co-founder & CEO", company: "Flowie", location: "Paris, France", initials: "SL", color: "bg-blue-600",
  },
  {
    quote: "We hired Merouane to audit our Rails codebase and he delivered a comprehensive report that saved us from a very expensive scaling crisis. His AI integration work that followed was equally impressive — we now save 15+ hours a week.",
    name: "James Harrington", role: "CTO", company: "Pronto.io", location: "London, UK", initials: "JH", color: "bg-indigo-600",
  },
  {
    quote: "I've worked with many freelancers but Merouane is in a different league. He thinks like a CTO, communicates like a product manager, and codes like a senior engineer. He delivered our platform rebuild 2 weeks ahead of schedule.",
    name: "Nadia El Fassi", role: "Product Director", company: "TalentBridge", location: "Casablanca, Morocco", initials: "NE", color: "bg-violet-600",
  },
  {
    quote: "Our legacy Rails app had 6+ second page loads. Merouane came in, identified the root causes in days, and over 6 weeks rebuilt the performance layer. We're now at sub-second loads and our infrastructure bill dropped by half.",
    name: "Marcus Stein", role: "Head of Engineering", company: "Docspace GmbH", location: "Berlin, Germany", initials: "MS", color: "bg-cyan-600",
  },
  {
    quote: "Merouane mentored our entire engineering team for 6 months and the improvement has been remarkable. Engineers who were struggling are now confidently delivering features independently. He has a rare ability to explain complex things simply.",
    name: "Amira Benali", role: "VP Engineering", company: "Yassir", location: "Algiers, Algeria", initials: "AB", color: "bg-emerald-600",
  },
  {
    quote: "We brought Merouane in for what we thought was a 2-month Rails project. He's now been our fractional CTO for over a year. His depth of knowledge in both technical architecture and team dynamics is exactly what we needed.",
    name: "Thomás Ferreira", role: "Founder", company: "Gestão360", location: "Lisbon, Portugal", initials: "TF", color: "bg-blue-600",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[0,1,2,3,4].map(i => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(59,130,246,0.05) 0%, transparent 70%)" }} />

      <div className="site-container relative">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Trusted by{" "}
            <span className="text-gradient-blue">Founders & CTOs</span>
          </h2>
          <p className="text-slate-400 text-base">
            What engineering leaders, founders, and product teams say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div key={t.name} className="card-surface rounded-2xl p-6 flex flex-col">
              <Stars />
              <blockquote className="mt-4 text-slate-400 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                  <p className="text-xs text-slate-600">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 card-surface rounded-2xl p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { v: "50+",  l: "Projects Delivered" },
              { v: "10+",  l: "Years Experience" },
              { v: "4.9★", l: "Average Rating" },
              { v: "12+",  l: "Countries Served" },
            ].map(s => (
              <div key={s.l}>
                <p className="text-2xl font-bold text-white">{s.v}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
