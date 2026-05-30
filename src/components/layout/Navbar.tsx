"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Skills",       href: "#skills" },
  { label: "Experience",   href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact",      href: "#contact" },
];

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState("");
  const [dark, setDark]             = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "nav-blur border-b border-[var(--border)]"
          : "bg-transparent"
      )}
      style={scrolled ? { background: dark ? "rgba(8,11,17,0.85)" : "rgba(248,250,252,0.85)" } : undefined}
    >
      <div className="site-container h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-opacity group-hover:opacity-80" style={{ background: "var(--coral)" }}>
            MA
          </div>
          <span className="text-sm font-semibold text-slate-800 dark:text-white/90 hidden sm:block">
            Merouane Amqor
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={cn(
                "px-3 py-1.5 text-sm rounded-md transition-all duration-200",
                active === link.href
                  ? "text-slate-900 bg-slate-100 dark:text-white dark:bg-white/10"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-white/[0.06]"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-pulse inline-block" />
            Available for projects
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-all btn-coral"
          >
            Book a Call
          </a>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--border)] text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--border)] text-slate-500 dark:text-slate-400 transition-all"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="p-2 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={cn("h-0.5 bg-current transition-all", mobileOpen && "rotate-45 translate-y-1.5")} />
              <span className={cn("h-0.5 bg-current transition-all", mobileOpen && "opacity-0")} />
              <span className={cn("h-0.5 bg-current transition-all", mobileOpen && "-rotate-45 -translate-y-1.5")} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-[var(--border)] px-6 py-4 flex flex-col gap-1"
          style={{ background: dark ? "rgba(8,11,17,0.97)" : "rgba(248,250,252,0.97)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-sm text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white border-b border-[var(--border)] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 px-4 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-lg text-center"
            onClick={() => setMobileOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
