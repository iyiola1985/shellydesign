import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Truck, ShieldCheck, Wrench, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CTA } from "@/components/sections/cta";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { equipmentCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipment Supplies",
  description:
    "SHELLYAND LLC supplies heavy machinery, tools, and certified construction materials for rent or purchase, with reliable on-site logistics across Nebraska.",
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "Certified & Maintained",
    text: "Every machine is regularly inspected, serviced, and certified for safe, reliable performance.",
  },
  {
    icon: Truck,
    title: "On-Site Delivery",
    text: "Fast, dependable delivery and pickup logistics that keep your project schedule on track.",
  },
  {
    icon: Wrench,
    title: "Rent or Purchase",
    text: "Flexible rental and purchase options tailored to your project size, duration, and budget.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    text: "Around-the-clock support and rapid replacements to minimize any downtime on site.",
  },
];

export default function EquipmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Equipment Supplies"
        title="Premium equipment, ready when you are"
        subtitle="A complete inventory of heavy machinery, professional tools, and certified materials — available for rent or purchase with reliable logistics."
        crumb="Equipment"
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-[var(--background)] section-pad">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Inventory"
            title={
              <>
                Equipment for projects of{" "}
                <span className="text-gradient-gold">any scale</span>
              </>
            }
            description="From earthmoving to finishing, we supply the right equipment and materials to get the job done safely and efficiently."
          />

          <div className="mt-10 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2">
            {equipmentCategories.map((cat, i) => (
              <Reveal key={cat.title} direction="up" delay={(i % 2) * 0.1}>
                <article className="group overflow-hidden rounded-2xl border bg-[var(--card)] shadow-sm transition-shadow duration-300 hover:shadow-luxe">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
                    <h3 className="absolute bottom-5 left-6 font-display text-2xl font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="p-7">
                    <p className="text-sm leading-relaxed text-navy-500 dark:text-white/60">
                      {cat.description}
                    </p>
                    <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-navy-700 dark:text-white/70"
                        >
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-400/20 text-gold-500 dark:text-gold-400">
                            <Check className="h-3 w-3" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 section-pad text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark [background-size:54px_54px] opacity-25" />
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="container-px relative">
          <SectionHeading
            light
            eyebrow="Why Our Supply"
            title={
              <>
                A supply partner you can{" "}
                <span className="text-gradient-gold">rely on</span>
              </>
            }
            description="We make sourcing equipment effortless so you can focus on building."
          />
          <StaggerGroup className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="glass-dark h-full rounded-2xl p-7">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400/15 text-gold-400">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{b.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-14 flex justify-center">
            <Link href="/contact" className="btn-gold group">
              Request Equipment Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
