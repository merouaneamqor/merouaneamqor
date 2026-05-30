import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contributions from "@/components/sections/Contributions";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080B11]">
      <Navbar />
      <Hero />
      <Contributions />
      <About />
      <Services />
      <Skills />
      <Experience />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
