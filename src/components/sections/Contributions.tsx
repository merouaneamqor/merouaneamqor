"use client";

import { useRef, useState } from "react";
import { orgs } from "@/data/contributions";

function OrgItem({ org }: { org: typeof orgs[number] }) {
  return (
    <a
      href={org.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 group shrink-0 px-8"
    >
      <img
        src={org.logo!}
        alt={org.name}
        className="h-5 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      />
      {!org.wordmark && (
        <span className="text-sm font-medium whitespace-nowrap select-none" style={{ color: "var(--text-muted)" }}>
          {org.name}
        </span>
      )}
    </a>
  );
}

export default function Contributions() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setDragging(true);
    setPaused(true);
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const el = trackRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = scrollLeft.current - (x - startX.current);
  };

  const onMouseUp = () => {
    setDragging(false);
    const el = trackRef.current;
    if (el) el.style.cursor = "grab";
  };

  const onMouseEnter = () => setPaused(true);
  const onMouseLeave = () => { setDragging(false); setPaused(false); };

  return (
    <section className="relative py-8 border-y border-[var(--border)] overflow-hidden">
      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />

      <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6 font-medium">
        Contributed to &amp; worked with
      </p>

      <div
        ref={trackRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{
          cursor: "grab",
          animation: paused ? "none" : "marquee 28s linear infinite",
          userSelect: "none",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
      >
        {[...orgs, ...orgs, ...orgs].map((org, i) => (
          <OrgItem key={`${org.name}-${i}`} org={org} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        @media (prefers-reduced-motion: reduce) {
          @keyframes marquee { 0%, 100% { transform: translateX(0); } }
        }
      `}</style>
    </section>
  );
}
