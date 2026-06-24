import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { WhyChoose } from "@/components/sections/why-choose";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChoose />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
