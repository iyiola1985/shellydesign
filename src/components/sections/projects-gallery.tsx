"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects, type Project } from "@/lib/site";
import { cn } from "@/lib/utils";

const aspect: Record<Project["span"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  normal: "aspect-[4/3]",
};

export function ProjectsGallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="bg-[var(--background)] py-20 md:py-28">
      <div className="container-px">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                active === cat
                  ? "border-gold-400 bg-gold-400 text-navy-950 shadow-gold-glow"
                  : "border-[var(--border)] text-navy-600 hover:border-gold-400 hover:text-gold-500 dark:text-white/70"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
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
                    <h3 className="mt-2 font-display text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                      {project.description}
                    </p>
                    <span className="mt-4 inline-flex translate-y-2 items-center gap-1 text-sm font-semibold text-gold-400 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      View Project <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
