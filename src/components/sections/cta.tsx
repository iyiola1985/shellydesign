"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function CTA() {
  return (
    <section className="relative section-pad-sm">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-2xl px-5 py-12 shadow-luxe sm:rounded-3xl sm:px-8 sm:py-16 md:px-16 md:py-20">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/70" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full bg-gold-400/20 blur-3xl" />

          <div className="relative max-w-2xl">
            <Reveal direction="up">
              <span className="heading-eyebrow">
                <span className="h-px w-6 bg-gold-400" />
                Let&rsquo;s Build Together
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
                Ready to start your next project with{" "}
                <span className="text-gradient-gold">SHELLYAND?</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                Get a free, no-obligation consultation and quote. Our team is ready to turn your
                vision into a landmark.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Link href="/contact" className="btn-gold group w-full sm:w-auto">
                  Request a Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a href={`tel:${company.phoneRaw}`} className="btn-outline w-full sm:w-auto">
                  <Phone className="h-4 w-4" />
                  {company.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
