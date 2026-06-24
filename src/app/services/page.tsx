import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ServicesSection } from "@/components/sections/services-section";
import { Process } from "@/components/sections/process";
import { WhyChoose } from "@/components/sections/why-choose";
import { CTA } from "@/components/sections/cta";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SHELLYAND LLC services: residential and commercial construction, interior decoration, renovation, equipment supply, and full project management.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="End-to-end construction & design services"
        subtitle="Whatever you're building, our integrated teams deliver quality at every phase — from foundation to finishing touch."
        crumb="Services"
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      <ServicesSection detailed />

      <section className="bg-[var(--background)] py-24 md:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="In Detail"
            title={
              <>
                Specialized expertise for{" "}
                <span className="text-gradient-gold">every requirement</span>
              </>
            }
            description="Each service is backed by dedicated specialists, premium materials, and rigorous quality standards."
          />

          <div className="mt-16 space-y-20">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                <Reveal direction={i % 2 === 0 ? "right" : "left"} className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-80 overflow-hidden rounded-2xl shadow-luxe">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                  </div>
                </Reveal>
                <Reveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400/15 text-gold-500 dark:text-gold-400">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-navy-900 dark:text-white sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-navy-500 dark:text-white/65">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid grid-cols-2 gap-3">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-navy-700 dark:text-white/70"
                        >
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-400/20 text-gold-500 dark:text-gold-400">
                            <Check className="h-3 w-3" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-dark mt-8">
                      Request this service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <WhyChoose />
      <CTA />
    </>
  );
}
