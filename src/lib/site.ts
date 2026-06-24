import {
  Building2,
  Home,
  Paintbrush,
  Hammer,
  Truck,
  ClipboardCheck,
  Users,
  Gem,
  Clock,
  BadgeDollarSign,
  HeartHandshake,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "SHELLYAND LLC",
  shortName: "SHELLYAND",
  tagline: "Building Excellence. Designing the Future.",
  ceo: "Shelly Anderson",
  address: "4934 Fort Kearney Rd, Grand Island, NE 68801",
  addressShort: "Grand Island, Nebraska",
  phone: "+1 (308) 370-3202",
  phoneAlt: "+1 (404) 458-9724",
  phoneRaw: "+13083703202",
  whatsapp: "13083703202",
  email: "shellyanderson0073@gmail.com",
  foundedYear: 2009,
  mapEmbed:
    "https://www.google.com/maps?q=4934+Fort+Kearney+Rd,+Grand+Island,+NE+68801&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=4934+Fort+Kearney+Rd,+Grand+Island,+NE+68801",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Equipment", href: "/equipment" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  title: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    title: "Residential Construction",
    slug: "residential-construction",
    description:
      "Custom homes and residential developments crafted with precision, comfort, and lasting value at the core of every build.",
    icon: Home,
    features: ["Custom home builds", "Multi-family housing", "Foundation to finish", "Smart-home ready"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial Construction",
    slug: "commercial-construction",
    description:
      "From offices to retail and industrial facilities, we deliver commercial spaces engineered for performance and built on schedule.",
    icon: Building2,
    features: ["Office & retail", "Industrial facilities", "Tenant build-outs", "LEED-conscious design"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Interior Decoration",
    slug: "interior-decoration",
    description:
      "Sophisticated interiors that balance aesthetics and function — bespoke finishes, furnishings, and curated material palettes.",
    icon: Paintbrush,
    features: ["Space planning", "Bespoke finishes", "Lighting design", "Furniture & styling"],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Renovation & Remodeling",
    slug: "renovation-remodeling",
    description:
      "Transform existing spaces into modern, efficient environments with renovations that respect structure and elevate style.",
    icon: Hammer,
    features: ["Full-home remodels", "Kitchen & bath", "Structural upgrades", "Adaptive reuse"],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Equipment Supply",
    slug: "equipment-supply",
    description:
      "A reliable supply chain of heavy machinery, tools, and construction materials — delivered where and when you need them.",
    icon: Truck,
    features: ["Heavy machinery", "Tools & materials", "Rental & purchase", "On-site logistics"],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Project Management",
    slug: "project-management",
    description:
      "End-to-end project leadership keeping budgets, timelines, and quality aligned from groundbreaking to handover.",
    icon: ClipboardCheck,
    features: ["Budget control", "Scheduling", "Quality assurance", "Stakeholder reporting"],
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
  },
];

export type Project = {
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  span: "tall" | "wide" | "normal";
  description: string;
};

export const projects: Project[] = [
  {
    title: "Skyline Corporate Tower",
    category: "Commercial",
    location: "Omaha, NE",
    year: "2025",
    span: "tall",
    description:
      "A 14-story Class-A office tower featuring a glass curtain wall, smart building systems, and a sculptural lobby.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "The Kearney Residence",
    category: "Residential",
    location: "Grand Island, NE",
    year: "2024",
    span: "normal",
    description:
      "A modern luxury home with warm material palettes, floor-to-ceiling glazing, and resort-style outdoor living.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Aurora Boutique Hotel",
    category: "Interior",
    location: "Lincoln, NE",
    year: "2024",
    span: "wide",
    description:
      "Full interior decoration of a 90-key boutique hotel blending brass accents, walnut, and bespoke lighting.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Meridian Retail Plaza",
    category: "Commercial",
    location: "Kearney, NE",
    year: "2023",
    span: "normal",
    description:
      "A mixed-use retail plaza delivered three weeks ahead of schedule with sustainable building systems.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Lakeside Family Estate",
    category: "Residential",
    location: "Hastings, NE",
    year: "2023",
    span: "tall",
    description:
      "A sprawling family estate with custom millwork, a chef's kitchen, and panoramic lakeside views.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Heritage Loft Renovation",
    category: "Renovation",
    location: "Grand Island, NE",
    year: "2022",
    span: "normal",
    description:
      "Adaptive reuse of a historic warehouse into premium loft apartments preserving original brick and steel.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=80",
  },
];

export type WhyChoose = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseUs: WhyChoose[] = [
  {
    title: "Experienced Team",
    description: "Seasoned architects, engineers, and craftspeople with decades of combined expertise.",
    icon: Users,
  },
  {
    title: "Quality Materials",
    description: "We source only premium, certified materials that stand the test of time.",
    icon: Gem,
  },
  {
    title: "Timely Delivery",
    description: "Disciplined scheduling and proactive management keep your project on track.",
    icon: Clock,
  },
  {
    title: "Competitive Pricing",
    description: "Transparent, fair pricing with no hidden costs and maximum value per dollar.",
    icon: BadgeDollarSign,
  },
  {
    title: "Customer Satisfaction",
    description: "A client-first approach with clear communication at every milestone.",
    icon: HeartHandshake,
  },
  {
    title: "Safety Compliance",
    description: "Rigorous OSHA-aligned safety standards protecting our crews and your investment.",
    icon: ShieldCheck,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Michael Reyes",
    role: "Property Developer",
    rating: 5,
    quote:
      "SHELLYAND delivered our commercial complex ahead of schedule and under budget. Their attention to detail and professionalism is unmatched in the region.",
  },
  {
    name: "Sarah Whitman",
    role: "Homeowner",
    rating: 5,
    quote:
      "From the first sketch to the final walkthrough, the team made building our dream home effortless. The craftsmanship is simply outstanding.",
  },
  {
    name: "David Chen",
    role: "Hotel Operations Director",
    rating: 5,
    quote:
      "The interior decoration of our boutique hotel exceeded every expectation. Guests constantly compliment the design. Truly a world-class firm.",
  },
  {
    name: "Emily Carter",
    role: "Retail Brand Manager",
    rating: 5,
    quote:
      "Reliable, transparent, and genuinely talented. Their equipment supply and project management kept our rollout seamless across multiple sites.",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "15+", label: "Years of Experience" },
  { value: "320+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "75+", label: "Skilled Professionals" },
];

export const equipmentCategories = [
  {
    title: "Earthmoving & Excavation",
    description: "Excavators, bulldozers, backhoes, and loaders for groundwork of any scale.",
    items: ["Hydraulic Excavators", "Bulldozers", "Backhoe Loaders", "Skid-Steer Loaders"],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Lifting & Material Handling",
    description: "Cranes, forklifts, and hoists engineered for safe, efficient heavy lifting.",
    items: ["Tower Cranes", "Mobile Cranes", "Forklifts", "Material Hoists"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Concrete & Compaction",
    description: "Mixers, pumps, and compactors that deliver structural strength and precision.",
    items: ["Concrete Mixers", "Concrete Pumps", "Plate Compactors", "Road Rollers"],
    image:
      "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Power Tools & Materials",
    description: "A complete inventory of professional tools and certified building materials.",
    items: ["Power Tool Kits", "Scaffolding", "Steel & Rebar", "Finishing Materials"],
    image:
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1100&q=80",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We listen to your vision, assess the site, and define goals, scope, and budget.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Our architects and engineers develop detailed designs, timelines, and permits.",
  },
  {
    step: "03",
    title: "Construction",
    description: "Skilled crews bring the plan to life with premium materials and strict quality control.",
  },
  {
    step: "04",
    title: "Handover",
    description: "A final walkthrough, documentation, and ongoing support ensure lasting satisfaction.",
  },
];
