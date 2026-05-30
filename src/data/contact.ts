function availabilityPeriod(): string {
  const now = new Date();
  const q = Math.ceil((now.getMonth() + 1) / 3);
  const year = now.getFullYear();
  const nextQ = q === 4 ? 1 : q + 1;
  const nextYear = q === 4 ? year + 1 : year;
  const suffix = year === nextYear ? ` ${year}` : "";
  return nextYear !== year
    ? `Q${q} ${year} & Q${nextQ} ${nextYear}`
    : `Q${q} & Q${nextQ} ${year}`;
}

export const availabilityStatus = {
  available: true,
  label: "Available for new projects",
  period: availabilityPeriod(),
};

export const channels = [
  {
    label: "Email",
    value: "marouaneamqor@gmail.com",
    href: "mailto:marouaneamqor@gmail.com",
    desc: "For scoped project briefs & RFPs",
    icon: "email" as const,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/merouaneamqor",
    href: "https://linkedin.com/in/merouaneamqor",
    desc: "Professional background & endorsements",
    icon: "linkedin" as const,
  },
  {
    label: "GitHub",
    value: "github.com/merouaneamqor",
    href: "https://github.com/merouaneamqor",
    desc: "Production code & open-source contributions",
    icon: "github" as const,
  },
];

export const availability = [
  ["Engagement Model",      "Project · Retainer · Fractional"],
  ["Time Zone",             "GMT+1 — overlap-friendly"],
  ["Response SLA",          "< 24 hours"],
  ["Preferred Duration",    "3–6+ months"],
] as const;
