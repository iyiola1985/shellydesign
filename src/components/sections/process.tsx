"use client";

import { processSteps } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

export function Process() {
  return (
    <section className="relative bg-[var(--background)] section-pad">
      <div className="container-px">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A proven process from concept to{" "}
              <span className="text-gradient-gold">completion</span>
            </>
          }
          description="Every project follows a transparent, structured approach designed to keep you informed and in control."
        />

        <StaggerGroup className="relative mt-10 grid gap-8 sm:mt-16 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent md:block" />
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="relative text-center md:text-left">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 font-display text-lg font-bold text-gold-400 shadow-luxe md:mx-0">
                  {step.step}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-white/60">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
