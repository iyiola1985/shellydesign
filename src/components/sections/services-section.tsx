"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

export function ServicesSection({
  showHeading = true,
  detailed = false,
}: {
  showHeading?: boolean;
  detailed?: boolean;
}) {
  return (
    <section className="relative bg-[var(--muted)] py-24 md:py-32">
      <div className="container-px">
        {showHeading && (
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Comprehensive solutions for every{" "}
                <span className="text-gradient-gold">build</span>
              </>
            }
            description="From the first blueprint to the final finish, SHELLYAND LLC offers a full spectrum of construction and design services tailored to your vision."
          />
        )}

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-[var(--card)] shadow-sm transition-shadow duration-300 hover:shadow-luxe"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                  <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-xl bg-gold-400 text-navy-950 shadow-gold-glow">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-navy-900 transition-colors group-hover:text-gold-500 dark:text-white dark:group-hover:text-gold-400">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-500 dark:text-white/60">
                    {service.description}
                  </p>

                  {detailed && (
                    <ul className="mt-5 grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-xs text-navy-600 dark:text-white/65"
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-gold-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-500 transition-colors hover:text-gold-600 dark:text-gold-400"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
