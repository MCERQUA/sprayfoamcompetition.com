import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.businessName} — The Real Industry Standard for Spray Foam Excellence`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "Covering the real spray foam industry competitions and awards — SPFA's National Industry Excellence Awards, the Top Gun spray contest — and connecting homeowners to award-caliber, vetted installers.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.businessName,
    title: `${site.businessName} — The Real Industry Standard for Spray Foam Excellence`,
    description:
      "Covering the real spray foam industry competitions and awards, and connecting homeowners to award-caliber, vetted installers.",
    images: [
      {
        url: "/images/hero-competition-spray.jpg",
        width: 1200,
        height: 630,
        alt: site.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} — The Real Industry Standard`,
    description:
      "Covering the real spray foam industry competitions and awards, and connecting homeowners to award-caliber, vetted installers.",
    images: ["/images/hero-competition-spray.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.businessName,
  description:
    "A content hub covering real spray foam insulation industry competitions and awards, connecting homeowners to award-caliber, vetted installers. Backed by Contractors Choice Agency.",
  url: site.url,
  telephone: site.phoneDigits,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: "US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          {children}
          <StickyMobileCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
