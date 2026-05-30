export const availabilityStatus = {
  available: true,
  label: "Available for new projects",
  period: "Q3 2026",
};

export const channels = [
  {
    label: "Email",
    value: "merouane@amqor.dev",
    href: "mailto:merouane@amqor.dev",
    desc: "Best for project inquiries",
    icon: "email" as const,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/merouaneamqor",
    href: "https://linkedin.com/in/merouaneamqor",
    desc: "Connect professionally",
    icon: "linkedin" as const,
  },
  {
    label: "GitHub",
    value: "github.com/merouaneamqor",
    href: "https://github.com/merouaneamqor",
    desc: "See my open-source work",
    icon: "github" as const,
  },
];

export const availability = [
  ["Availability",          "Part-time & Full-time"],
  ["Time Zone",             "GMT+1 (Morocco)"],
  ["Response Time",         "Within 24 hours"],
  ["Preferred Engagement",  "3–6+ months"],
] as const;
