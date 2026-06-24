import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { AboutSection } from "@/components/sections/about-section";
import { WhyChoose } from "@/components/sections/why-choose";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { company, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SHELLYAND LLC — a premium construction, interior decoration, and equipment supply company led by CEO Shelly Anderson, building excellence across Nebraska.",
};

const timeline = [
  {
    year: "2009",
    title: "The Foundation",
    text: "SHELLYAND LLC was founded with a single crew and a commitment to honest, quality craftsmanship.",
  },
  {
    year: "2014",
    title: "Commercial Expansion",
    text: "We expanded into commercial construction, delivering our first multi-story office development.",
  },
  {
    year: "2019",
    title: "Design & Supply",
    text: "Launched dedicated interior decoration and equipment supply divisions to serve clients end-to-end.",
  },
  {
    year: "2025",
    title: "Regional Leader",
    text: "Now a recognized leader with 320+ completed projects and a reputation for excellence across the region.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About SHELLYAND LLC"
        title="Building excellence since 2009"
        subtitle="A trusted partner in construction, interior decoration, and equipment supply — driven by craftsmanship, integrity, and a passion for building the future."
        crumb="About Us"
        image="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-[var(--background)] py-16">
        <div className="container-px grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.label} direction="up">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-gold-500 dark:text-gold-400 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-navy-500 dark:text-white/60">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <AboutSection />

      <section className="bg-[var(--muted)] py-24 md:py-32">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Journey"
            title={
              <>
                A timeline of <span className="text-gradient-gold">growth and trust</span>
              </>
            }
            description="From humble beginnings to a regional leader, every milestone reflects our dedication to quality."
          />
          <StaggerGroup className="mx-auto mt-16 max-w-3xl">
            {timeline.map((item) => (
              <StaggerItem key={item.year}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy-900 font-display text-sm font-bold text-gold-400">
                      {item.year}
                    </div>
                    <div className="mt-2 w-px flex-1 bg-gradient-to-b from-gold-400/50 to-transparent" />
                  </div>
                  <div className="card-surface flex-1 rounded-2xl p-6">
                    <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-white/60">
                      {item.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--background)] py-24 md:py-32">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative h-[460px] overflow-hidden rounded-2xl shadow-luxe">
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80"
                alt={`${company.ceo}, CEO of ${company.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal direction="up">
              <span className="heading-eyebrow">
                <span className="h-px w-6 bg-gold-400" />
                Message from the CEO
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 text-balance dark:text-white sm:text-4xl">
                Leadership built on vision and values
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-500 dark:text-white/65">
                <p>
                  &ldquo;When I founded SHELLYAND LLC, I set out to build more than structures — I
                  wanted to build relationships rooted in trust and a reputation for uncompromising
                  quality.
                </p>
                <p>
                  Today, our team brings that same passion to every residential home, commercial
                  development, interior space, and equipment partnership. We treat every project as
                  if it were our own, because your success is our legacy.
                </p>
                <p>
                  Thank you for considering us as your building partner. We look forward to bringing
                  your vision to life.&rdquo;
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 font-display text-lg font-bold text-gold-400">
                  SA
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-navy-900 dark:text-white">
                    {company.ceo}
                  </div>
                  <div className="text-sm text-gold-500 dark:text-gold-400">
                    Founder &amp; Chief Executive Officer
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WhyChoose />
      <Process />
      <CTA />
    </>
  );
}
