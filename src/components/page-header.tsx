"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  image,
  crumb,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative flex min-h-[52vh] items-center overflow-hidden pt-20 sm:min-h-[58vh] sm:pt-24 md:min-h-[60vh]">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-950/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [background-size:56px_56px] opacity-20" />

      <div className="container-px relative py-12 sm:py-16">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-eyebrow"
          >
            <span className="h-px w-6 bg-gold-400" />
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 max-w-4xl font-display text-3xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center gap-2 text-sm text-white/60"
        >
          <Link href="/" className="transition-colors hover:text-gold-400">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gold-400">{crumb}</span>
        </motion.nav>
      </div>
    </section>
  );
}
