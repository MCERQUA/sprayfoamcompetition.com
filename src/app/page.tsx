import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TopicsGrid } from "@/components/sections/TopicsGrid";
import { WhyThisMatters } from "@/components/sections/WhyThisMatters";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

const homeFAQs = [
  {
    question: "Is the Top Gun spray foam competition a real event?",
    answer:
      "Yes — it's a real, live spray application contest held at the annual SprayFoam Convention & Expo, judged in real time by industry peers on precision, thickness, and consistency.",
  },
  {
    question: "What is SPFA?",
    answer:
      "The Spray Polyurethane Foam Alliance is a real trade association of spray foam contractors, manufacturers, and distributors that runs an annual National Industry Excellence Awards program recognizing standout completed projects.",
  },
  {
    question: "Does this site run or judge these competitions?",
    answer:
      "No. We cover the real competitions and awards as trade journalism — we're not SPFA and don't administer any competition ourselves.",
  },
  {
    question: "How do I find a top-rated spray foam contractor near me?",
    answer:
      "Verify manufacturer certification through the manufacturer's directory, ask specific process questions, get multiple quotes for the same specified scope, and independently verify license and insurance — or use a pre-vetted installer network.",
  },
  {
    question: "What's the difference between certification and a competition win?",
    answer:
      "Certification reflects current, verifiable training standards; a competition win reflects a specific judged performance at a point in time. Ideally, a contractor can speak specifically to both.",
  },
  {
    question: "What's the most common spray foam application mistake?",
    answer:
      "Uneven application thickness — often invisible without measurement, which is why asking your installer how they verify thickness matters.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <Hero
        title="The Real Industry Standard for Spray Foam Excellence"
        subtitle="SPFA's National Industry Excellence Awards. The Top Gun spray competition. Real events, real judging standards. We cover them honestly, and connect you with installers held to that same standard — backed by Contractors Choice Agency's 20+ years of contractor experience."
        image="/images/hero-competition-spray.jpg"
        imageAlt="A technician spray-applying foam insulation at a professional job site"
      />

      <TopicsGrid />
      <WhyThisMatters />
      <ProcessSteps />
      <Stats />
      <TrustSignals />

      <FAQ
        title="Real Competitions, Real Questions"
        subtitle="What people ask before hiring a spray foam contractor."
        faqs={homeFAQs}
      />

      <CTA />
      <Footer />
    </main>
  );
}
