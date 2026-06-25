"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects, type Project } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const aspect: Record<Project["span"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  normal: "aspect-[4/3]",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl border shadow-sm"
    >
      <div className={cn("relative w-full overflow-hidden", aspect[project.span])}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

        <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {project.category}
        </span>

        <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 transition-transform duration-500 group-hover:translate-y-0">
          <div className="flex items-center gap-2 text-xs font-medium text-gold-300">
            <MapPin className="h-3.5 w-3.5" />
            {project.location} &middot; {project.year}
          </div>
          <h3 className="mt-2 font-display text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
            {project.description}
          </p>
          <span className="mt-4 inline-flex translate-y-2 items-center gap-1 text-sm font-semibold text-gold-400 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            View Project <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] section-pad">
      <div className="container-px">
        {showHeading && (
          <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:mt-16 md:flex-row md:items-end md:gap-8">
            <SectionHeading
              align="left"
              eyebrow="Selected Work"
              title={
                <>
                  Projects that define our{" "}
                  <span className="text-gradient-gold">craftsmanship</span>
                </>
              }
              description="A curated portfolio of residential, commercial, and interior projects delivered with precision and pride."
              className="md:max-w-xl"
            />
            <Link
              href="/projects"
              className="btn-dark shrink-0"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="mt-10 columns-1 gap-6 sm:mt-16 sm:columns-2 lg:columns-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
