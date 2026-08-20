import { Trophy, ShieldCheck, Ruler, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const points = [
  {
    icon: Trophy,
    title: "We Cover Real Competitions, Honestly",
    text: "SPFA's National Industry Excellence Awards and the Top Gun spray contest are real events with real judging criteria — we're not SPFA, and we don't claim to be.",
  },
  {
    icon: Ruler,
    title: "The Same Standards, Homeowner-Facing",
    text: "Precision, uniform thickness, and pass consistency aren't just contest criteria &mdash; they're exactly what separates a good installation from a mediocre one in your own home.",
  },
  {
    icon: ShieldCheck,
    title: "No Fabricated Claims",
    text: "Every competition and award named on this site is real and sourced from real industry coverage &mdash; not invented for content.",
  },
  {
    icon: Users,
    title: "Backed by Former-Contractor Experience",
    text: "20+ years of Contractors Choice Agency's contractor-side experience behind every guide and every installer match.",
  },
];

export function WhyThisMatters() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why This Site Exists</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Real Recognition, Real Standards</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: point.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
