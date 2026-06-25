import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollProgress } from "@/components/scroll-progress";
import { company } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://shellyand.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Premium Construction, Interior & Equipment Supply`,
    template: `%s | ${company.name}`,
  },
  description:
    "SHELLYAND LLC delivers premium residential and commercial construction, interior decoration, and equipment supply solutions. Building excellence, designing the future.",
  keywords: [
    "construction company",
    "commercial construction",
    "residential construction",
    "interior decoration",
    "renovation",
    "equipment supply",
    "Grand Island Nebraska construction",
    "SHELLYAND LLC",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Building Excellence. Designing the Future.`,
    description:
      "Premium construction, interior decoration, and equipment supply across residential and commercial projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Building Excellence`,
    description:
      "Premium construction, interior decoration, and equipment supply solutions.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#060c17" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <Navbar />
          <main className="overflow-x-clip">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
