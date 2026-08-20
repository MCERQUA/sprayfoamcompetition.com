import { Space_Grotesk, Work_Sans } from "next/font/google";

// Font pairing locked by the Stitch design system (ai/research/design-system.md)
export const bodyFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});
