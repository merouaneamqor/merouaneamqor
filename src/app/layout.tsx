import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://merouaneamqor.dev"),
  title: {
    default: "Merouane Amqor — Team Leader R&D @ Cegid | Ruby on Rails Expert | AI & SaaS Consultant",
    template: "%s | Merouane Amqor",
  },
  description:
    "Experienced Software Engineering Team Lead specializing in Ruby on Rails, AI integration, and technical leadership. Helping startups and enterprises build scalable software.",
  keywords: [
    "Ruby on Rails developer",
    "Team Lead",
    "Full-Stack Developer",
    "AI Integration",
    "Technical Leadership",
    "SaaS development",
    "Freelance Ruby developer",
    "Engineering consultant",
    "Casablanca Morocco",
    "Merouane Amqor",
  ],
  authors: [{ name: "Merouane Amqor" }],
  creator: "Merouane Amqor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://merouaneamqor.dev",
    title: "Merouane Amqor — Team Leader R&D @ Cegid | Ruby on Rails Expert | AI & SaaS Consultant",
    description:
      "Experienced Software Engineering Team Lead specializing in Ruby on Rails, AI integration, and technical leadership.",
    siteName: "Merouane Amqor",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Merouane Amqor — Software Engineering Team Lead" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merouane Amqor — Team Leader R&D @ Cegid | Ruby on Rails Expert | AI & SaaS Consultant",
    description: "Experienced Software Engineering Team Lead specializing in Ruby on Rails, AI integration, and technical leadership.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Merouane Amqor",
  jobTitle: "Software Engineering Team Lead",
  description: "Experienced Software Engineering Team Lead specializing in Ruby on Rails, AI integration, and technical leadership.",
  url: "https://merouaneamqor.dev",
  sameAs: ["https://linkedin.com/in/merouaneamqor", "https://github.com/merouaneamqor"],
  address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
  knowsAbout: ["Ruby on Rails", "Software Architecture", "AI Integration", "Technical Leadership", "DevOps"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent flash: apply stored theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');})()` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
