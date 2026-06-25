import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { company, navLinks, services } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/social-icons";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: FacebookIcon, href: company.social.facebook, label: "Facebook" },
    { icon: InstagramIcon, href: company.social.instagram, label: "Instagram" },
    { icon: LinkedinIcon, href: company.social.linkedin, label: "LinkedIn" },
    { icon: XIcon, href: company.social.x, label: "X" },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark [background-size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-navy-500/20 blur-3xl" />

      <div className="container-px relative">
        <div className="grid gap-10 border-b border-white/10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold-400/40 bg-gold-400/10 text-xl font-bold text-gold-400">
                S
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold">{company.shortName}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                  LLC
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Premium construction, interior decoration, and equipment supply solutions.
              Building excellence and designing the future across residential and commercial
              projects.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:text-gold-400"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="flex flex-col">
                  <a href={`tel:${company.phoneRaw}`} className="transition-colors hover:text-white">
                    {company.phone}
                  </a>
                  <a href="tel:+14044589724" className="transition-colors hover:text-white">
                    {company.phoneAlt}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center text-sm text-white/50 sm:flex-row sm:py-7 sm:text-left">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p>
            Led by <span className="text-gold-400">{company.ceo}</span>, CEO &middot; Grand Island,
            Nebraska
          </p>
        </div>
      </div>
    </footer>
  );
}
