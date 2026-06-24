"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, company } from "@/lib/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-black/5 py-2 shadow-sm dark:border-white/10"
          : "border-b border-transparent py-4"
      )}
    >
      <nav className="container-px flex items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={cn(
              "grid h-11 w-11 place-items-center rounded-xl border text-lg font-bold transition-colors duration-300",
              onDark
                ? "border-white/25 bg-white/10 text-white"
                : "border-gold-400/40 bg-gold-400/10 text-gold-500 dark:text-gold-400"
            )}
          >
            S
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-lg font-bold tracking-tight transition-colors duration-300",
                onDark ? "text-white" : "text-navy-900 dark:text-white"
              )}
            >
              {company.shortName}
            </span>
            <span
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300",
                onDark ? "text-gold-300" : "text-gold-500 dark:text-gold-400"
              )}
            >
              LLC
            </span>
          </span>
        </Link>

        <ul
          className={cn(
            "hidden items-center gap-1 lg:flex",
            onDark ? "text-white/90" : "text-navy-700 dark:text-white/85"
          )}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-gold-400",
                    active && "text-gold-400"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-400 transition-transform duration-300 group-hover:scale-x-100",
                      active && "scale-x-100"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle
            className={cn(onDark ? "text-white" : "text-navy-800 dark:text-white")}
          />
          <Link
            href="/contact"
            className="hidden rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300 md:inline-flex md:items-center md:gap-2"
          >
            <Phone className="h-4 w-4" />
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full border border-current/20 lg:hidden",
              onDark ? "text-white" : "text-navy-900 dark:text-white"
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-navy-950 p-7 text-white shadow-luxe"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-display text-xl font-bold">{company.shortName}</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold transition-colors",
                          active ? "text-gold-400" : "text-white hover:text-gold-300"
                        )}
                      >
                        {link.label}
                        <span className="text-xs font-sans text-white/40">0{i + 1}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-auto space-y-4">
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <Phone className="h-4 w-4 text-gold-400" />
                  {company.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-navy-950"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
