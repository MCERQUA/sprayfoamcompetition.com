import { Trophy, ShieldCheck, Users, MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const signals = [
  {
    icon: Trophy,
    title: "Real Competitions, Named Accurately",
    text: "SPFA's National Industry Excellence Awards and the Top Gun spray contest are covered as real trade-industry events, sourced from real coverage.",
  },
  {
    icon: ShieldCheck,
    title: "No Fabricated Affiliation",
    text: "We're not SPFA and don't claim to run or judge any competition &mdash; we cover the real ones honestly.",
  },
  {
    icon: Users,
    title: "Free Installer Matching",
    text: "Get connected to a vetted installer from CCA's network at no cost, with no obligation to move forward.",
  },
  {
    icon: MapPin,
    title: "Backed by Contractors Choice Agency",
    text: "20+ years of former-contractor experience behind every guide and every installer match.",
  },
];

/** Real, verifiable trust markers — deliberately no fabricated star ratings or named testimonials. */
export function TrustSignals() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Trust This Site</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Accuracy First, Referral Second</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {signals.map((signal) => (
            <StaggerItem key={signal.title}>
              <div className="p-6 rounded-xl bg-card border border-border h-full text-center">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{signal.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: signal.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
