"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-navy-950 section-pad text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-950" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [background-size:54px_54px] opacity-25" />

      <div className="container-px relative">
        <SectionHeading
          light
          eyebrow="Why Choose Us"
          title={
            <>
              The SHELLYAND difference is in every{" "}
              <span className="text-gradient-gold">detail</span>
            </>
          }
          description="We earn our clients' trust through consistency, transparency, and an obsession with quality at every stage."
        />

        <StaggerGroup className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-dark group h-full rounded-2xl p-7"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400/15 text-gold-400 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-950">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
