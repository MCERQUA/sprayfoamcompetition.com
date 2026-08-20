import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FindInstallerForm } from "@/components/forms/FindInstallerForm";
import { TrustBar } from "@/components/shared/TrustBar";
import { FadeIn } from "@/components/animations/FadeIn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find an Award-Caliber Installer",
  description: `Get matched with a vetted, award-caliber spray foam installer from CCA's network — free, no obligation.`,
};

const steps = [
  "We match your project to an insured, certified installer in CCA's network near you.",
  "You get a call within one business day to schedule a free on-site walkthrough.",
  "You receive a written quote held to the same standard the real competitions judge against.",
];

export default function FindAnInstallerPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-10 md:pt-44 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Free Installer Match</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">Find an Award-Caliber Installer</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Now that you know the real standard, get connected with an installer who already
              meets it &mdash; free, and with no obligation.
            </p>
          </FadeIn>
        </div>
        <TrustBar />
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <FadeIn direction="left">
              <h2 className="text-2xl font-heading font-bold">What Happens Next</h2>
              <ol className="mt-6 space-y-6">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-muted-foreground">
                Prefer to skip the form? Call{" "}
                <a href={`tel:${site.phoneDigits}`} className="text-primary font-semibold">{site.phone}</a>{" "}
                directly.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-3">
            <FadeIn direction="right" delay={0.1}>
              <FindInstallerForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
