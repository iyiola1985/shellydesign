import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SHELLYAND LLC. Call, email, or visit us in Grand Island, Nebraska. Request a free quote for construction, interior, or equipment supply.",
};

const details = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: [company.address],
    href: company.mapLink,
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: [company.phone, company.phoneAlt],
    href: `tel:${company.phoneRaw}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: [company.email],
    href: `mailto:${company.email}`,
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Sat: 9:00 AM – 2:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's build something great together"
        subtitle="Have a project in mind? Reach out for a free consultation and quote. Our team is ready to help bring your vision to life."
        crumb="Contact"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-[var(--background)] section-pad-sm">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {details.map((d, i) => {
              const content = (
                <div className="card-surface group h-full rounded-2xl p-7 transition-shadow duration-300 hover:shadow-luxe">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400/15 text-gold-500 transition-colors duration-300 group-hover:bg-gold-400 group-hover:text-navy-950 dark:text-gold-400">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900 dark:text-white">
                    {d.label}
                  </h3>
                  <div className="mt-2 space-y-1">
                    {d.lines.map((line) => (
                      <p key={line} className="text-sm text-navy-500 dark:text-white/60">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
              return (
                <Reveal key={d.label} direction="up" delay={i * 0.08}>
                  {d.href ? (
                    <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block h-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 grid gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-10">
            <Reveal direction="right">
              <ContactForm />
            </Reveal>

            <Reveal direction="left">
              <div className="flex h-full flex-col gap-6">
                <div className="overflow-hidden rounded-2xl border shadow-luxe">
                  <iframe
                    title="SHELLYAND LLC location"
                    src={company.mapEmbed}
                    className="h-[280px] w-full grayscale-[0.2] sm:h-[320px] md:h-[360px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-[#25D366] p-7 text-white">
                  <MessageCircle className="absolute -right-4 -top-4 h-28 w-28 opacity-15" />
                  <h3 className="font-display text-xl font-bold">Prefer to chat instantly?</h3>
                  <p className="mt-2 max-w-sm text-sm text-white/90">
                    Message us on WhatsApp for a quick response to your project questions.
                  </p>
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#128C7E] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
