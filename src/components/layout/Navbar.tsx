"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "nav-blur bg-[rgba(8,11,17,0.85)] border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <div className="site-container h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm group-hover:bg-blue-500 transition-colors">
            MA
          </div>
          <span className="text-sm font-semibold text-white/90 hidden sm:block">
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
                  ? "text-white bg-white/10"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-pulse inline-block" />
            Available for projects
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[rgba(8,11,17,0.97)] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-sm text-zinc-300 hover:text-white border-b border-white/[0.04] last:border-0"
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
