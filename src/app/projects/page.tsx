import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectsGallery } from "@/components/sections/projects-gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Projects Portfolio",
  description:
    "Browse the SHELLYAND LLC portfolio of residential, commercial, interior, and renovation projects across Nebraska — built with precision and pride.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Portfolio"
        title="Projects that speak for themselves"
        subtitle="Explore a selection of our finest work across residential, commercial, interior, and renovation projects."
        crumb="Projects"
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
      />
      <ProjectsGallery />
      <Testimonials />
      <CTA />
    </>
  );
}
