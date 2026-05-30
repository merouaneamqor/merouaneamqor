"use client";

import { useState } from "react";
import { channels, availability } from "@/data/contact";

const ChannelIcon = ({ id }: { id: string }) => {
  if (id === "linkedin") return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
  if (id === "github") return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
};

type Form = { name: string; email: string; company: string; budget: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<Form>({ name: "", email: "", company: "", budget: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    setSubmitting(false);
    setDone(true);
  };

  const inputCls = "w-full px-3.5 py-2.5 border rounded-xl text-sm placeholder-[var(--text-muted)] focus:outline-none transition-all";
  const inputStyle = {
    background: "var(--bg-card-alt)",
    borderColor: "var(--border)",
    color: "var(--text)",
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, var(--coral-dim) 0%, transparent 60%)" }} />

      <div className="site-container relative">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4" style={{ background: "var(--coral-dim)", color: "var(--coral)", borderColor: "rgba(204,87,51,0.2)" }}>
            Let&apos;s Work Together
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ color: "var(--text)" }}>
            Ready to Ship{" "}
            <span className="text-gradient-coral">Something Great?</span>
          </h2>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            Whether you need a senior Rails developer, a technical leader, or an AI integration expert — let&apos;s talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <h3 className="font-semibold mb-1" style={{ color: "var(--text)" }}>Let&apos;s build something together</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>Currently accepting new clients for Q3 2026. Response within 24 hours.</p>
            </div>

            <div className="flex flex-col gap-2">
              {channels.map(ch => (
                <a key={ch.label} href={ch.href} target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-3.5 card-surface rounded-xl group">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border" style={{ background: "var(--coral-dim)", borderColor: "rgba(204,87,51,0.2)", color: "var(--coral)" }}>
                    <ChannelIcon id={ch.icon} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>{ch.label}</p>
                    <p className="text-sm font-medium truncate transition-colors" style={{ color: "var(--text)" }}>{ch.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="card-surface rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
                <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>Currently Available</span>
              </div>
              {availability.map(([k, v]) => (
                <div key={k} className="flex justify-between py-1.5 border-b last:border-0 text-xs" style={{ borderColor: "var(--border)" }}>
                  <span style={{ color: "var(--text-muted)" }}>{k}</span>
                  <span className="font-medium" style={{ color: "var(--text)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {done ? (
              <div className="card-surface rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-72">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2" style={{ color: "var(--text)" }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="card-surface rounded-2xl p-6 flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={change} placeholder="Your name" className={inputCls} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={change} placeholder="you@company.com" className={inputCls} style={inputStyle} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Company</label>
                    <input type="text" name="company" value={form.company} onChange={change} placeholder="Your company" className={inputCls} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Budget Range</label>
                    <select name="budget" value={form.budget} onChange={change} className={inputCls} style={inputStyle}>
                      <option value="">Select budget</option>
                      <option value="<5k">&lt; $5,000</option>
                      <option value="5k-15k">$5,000 – $15,000</option>
                      <option value="15k-50k">$15,000 – $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="monthly">Monthly retainer</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-muted)" }}>Message *</label>
                  <textarea name="message" required value={form.message} onChange={change} rows={5} placeholder="Tell me about your project, your team, and what kind of help you need..." className={`${inputCls} resize-none`} style={inputStyle} />
                </div>
                <button type="submit" disabled={submitting}
                  className="w-full py-3 disabled:opacity-50 text-white font-semibold rounded-xl transition-all text-sm flex items-center justify-center gap-2 btn-coral">
                  {submitting ? (
                    <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending…</>
                  ) : (
                    <><span>Send Message</span><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg></>
                  )}
                </button>
                <p className="text-center text-xs" style={{ color: "var(--text-muted)" }}>No spam. Just a genuine conversation about your project.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
