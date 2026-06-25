"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

export function Testimonials() {
  return (
    <section className="relative bg-[var(--muted)] section-pad">
      <div className="container-px">
        <SectionHeading
          eyebrow="Client Voices"
          title={
            <>
              Trusted by clients who demand{" "}
              <span className="text-gradient-gold">excellence</span>
            </>
          }
          description="Our reputation is built on relationships. Here's what our clients say about working with SHELLYAND LLC."
        />

        <StaggerGroup className="mt-10 grid gap-5 sm:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.figure
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex h-full flex-col rounded-2xl border bg-[var(--card)] p-7 shadow-sm transition-shadow duration-300 hover:shadow-luxe"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-gold-400/20" />
                <div className="flex gap-1 text-gold-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-navy-600 dark:text-white/70">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-navy-900 font-display font-bold text-gold-400">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-navy-500 dark:text-white/55">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
