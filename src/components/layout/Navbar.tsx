"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { availabilityStatus } from "@/data/contact";
import { navLinks } from "@/data/navigation";

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
  const [scrolled, setScrolled]       = useState(false);
  const [scrollProgress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [active, setActive]           = useState("");
  const [dark, setDark]               = useState(false);
  const menuRef                        = useRef<HTMLDivElement>(null);

  // Scroll position + progress
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 20);
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector(l.href) as HTMLElement | null)
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive("#" + topmost.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Theme init
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  function close() { setMobileOpen(false); }

  const bg = dark ? "rgba(14,13,12,0.92)" : "rgba(250,249,246,0.92)";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled ? {
          background: bg,
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        } : undefined}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] transition-all duration-100"
          style={{
            width: `${scrollProgress * 100}%`,
            background: "var(--coral)",
            opacity: scrollProgress > 0.01 ? 1 : 0,
          }}
        />

        <div className="site-container h-16 flex items-center justify-between gap-4">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 transition-all duration-200 group-hover:scale-105" style={{ boxShadow: "0 2px 8px rgba(204,87,51,0.3)" }}>
              <Image src="/avatar.jpg" alt="Merouane Amqor" width={32} height={32} className="object-cover object-top w-full h-full" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold leading-tight" style={{ color: "var(--text)" }}>Merouane Amqor</p>
              <p className="text-[10px] leading-tight" style={{ color: "var(--text-muted)" }}>R&D Engineering Lead · Cegid</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 text-sm rounded-md transition-all duration-200 group"
                  style={{ color: isActive ? "var(--text)" : "var(--text-muted)" }}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-md"
                      style={{ background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-px rounded-full"
                      style={{ background: "var(--coral)" }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              <span className="text-emerald-600 dark:text-emerald-400">Available</span>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all btn-coral"
            >
              Start a Project
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-lg border transition-all"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
                background: "transparent",
              }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1.5 shrink-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-lg border transition-all"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-all"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h10"} />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(4px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 250ms ease",
        }}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 bottom-0 z-50 w-[300px] md:hidden flex flex-col"
        style={{
          background: dark ? "rgba(10,13,20,0.98)" : "rgba(252,251,249,0.98)",
          borderLeft: "1px solid var(--border)",
          backdropFilter: "blur(24px)",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms cubic-bezier(0.32, 0.72, 0, 1)",
        }}
      >
        {/* Drawer header */}
        <div className="h-16 flex items-center justify-between px-5 shrink-0" style={{ borderBottom: "1px solid var(--border)" }}>
          <a href="#" className="flex items-center gap-2.5" onClick={close}>
            <div className="w-7 h-7 rounded-md flex items-center justify-center text-white font-bold text-xs" style={{ background: "var(--coral)" }}>
              MA
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight" style={{ color: "var(--text)" }}>Merouane Amqor</p>
              <p className="text-[10px] leading-tight" style={{ color: "var(--text-muted)" }}>R&D Engineering Lead · Cegid</p>
            </div>
          </a>
          <button
            onClick={close}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg transition-all"
            style={{ color: "var(--text-muted)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 px-3 py-4 gap-0.5 overflow-y-auto">
          {navLinks.map((link, i) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => { setActive(link.href); close(); }}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? "var(--coral)" : "var(--text-muted)",
                  background: isActive ? (dark ? "rgba(204,87,51,0.1)" : "rgba(204,87,51,0.06)") : "transparent",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(12px)",
                  transition: `opacity 300ms ease ${80 + i * 40}ms, transform 300ms ease ${80 + i * 40}ms, background 150ms ease, color 150ms ease`,
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div className="px-4 pb-8 pt-4 shrink-0 flex flex-col gap-3" style={{ borderTop: "1px solid var(--border)" }}>
          <div
            className="flex items-center gap-2 text-xs px-1"
            style={{
              color: "var(--text-muted)",
              opacity: mobileOpen ? 1 : 0,
              transition: `opacity 300ms ease ${navLinks.length * 40 + 100}ms`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-emerald-600 dark:text-emerald-400">{availabilityStatus.label}</span>
          </div>
          <a
            href="#contact"
            className="w-full py-3 text-sm font-semibold text-white rounded-xl text-center btn-coral transition-all"
            onClick={close}
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(8px)",
              transition: `opacity 300ms ease ${navLinks.length * 40 + 140}ms, transform 300ms ease ${navLinks.length * 40 + 140}ms`,
            }}
          >
            Start a Project Brief
          </a>
        </div>
      </div>
    </>
  );
}
