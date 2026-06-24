"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Eye, Quote, ArrowRight } from "lucide-react";
import { company } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="container-px grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <Reveal direction="right">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-luxe sm:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                alt="SHELLYAND construction team at work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-8 -left-4 hidden w-52 rounded-2xl bg-navy-900 p-6 text-white shadow-luxe sm:block"
          >
            <div className="font-display text-5xl font-bold text-gold-400">15+</div>
            <div className="mt-1 text-sm text-white/70">Years building trust across Nebraska</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="absolute -right-3 top-8 hidden rounded-xl border bg-[var(--card)] px-5 py-4 shadow-luxe sm:block"
          >
            <div className="font-display text-2xl font-bold text-navy-900 dark:text-white">320+</div>
            <div className="text-xs text-navy-500 dark:text-white/60">Projects delivered</div>
          </motion.div>
        </div>

        <div>
          <Reveal direction="up">
            <span className="heading-eyebrow">
              <span className="h-px w-6 bg-gold-400" />
              Who We Are
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy-900 text-balance dark:text-white sm:text-4xl">
              A legacy of building with{" "}
              <span className="text-gradient-gold">integrity and precision</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-navy-500 dark:text-white/60">
              Founded in {company.foundedYear}, SHELLYAND LLC has grown into a trusted name in
              construction, interior decoration, and equipment supply. We combine craftsmanship,
              cutting-edge methods, and an unwavering commitment to quality to bring ambitious
              visions to life — on time and on budget.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Reveal direction="up" delay={0.15}>
              <div className="card-surface h-full rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-400/15 text-gold-500 dark:text-gold-400">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900 dark:text-white">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-white/60">
                  To deliver superior construction and design solutions that exceed expectations,
                  built on quality, safety, and lasting client relationships.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="card-surface h-full rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-400/15 text-gold-500 dark:text-gold-400">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900 dark:text-white">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500 dark:text-white/60">
                  To be the most respected and innovative building partner in the region, shaping
                  skylines and spaces that stand the test of time.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.25}>
            <div className="mt-8 rounded-2xl border-l-4 border-gold-400 bg-[var(--muted)] p-6">
              <Quote className="h-7 w-7 text-gold-400" />
              <p className="mt-3 font-display text-lg italic leading-relaxed text-navy-800 dark:text-white/85">
                &ldquo;We don&rsquo;t just build structures — we build trust, communities, and a
                future our clients are proud of.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-navy-900 font-display font-bold text-gold-400">
                  SA
                </div>
                <div>
                  <div className="font-semibold text-navy-900 dark:text-white">{company.ceo}</div>
                  <div className="text-xs text-navy-500 dark:text-white/55">
                    Founder &amp; CEO, {company.name}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <Link href="/about" className="btn-dark mt-8">
              More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
