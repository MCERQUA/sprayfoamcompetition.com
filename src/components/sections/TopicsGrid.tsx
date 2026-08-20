import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { topics } from "@/lib/site";

const topicImages: Record<string, string> = {
  "real-spray-foam-industry-awards": "/images/hero-award-ceremony.jpg",
  "what-judges-look-for": "/images/topic-judging-precision.jpg",
  "find-a-top-rated-contractor": "/images/topic-find-contractor.jpg",
  "certification-vs-competition-wins": "/images/topic-certification.jpg",
  "how-top-gun-competition-works": "/images/topic-competition-mechanics.jpg",
  "spray-foam-application-mistakes": "/images/topic-application-mistakes.jpg",
};

export function TopicsGrid() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Real Standard</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            What Competition-Caliber Actually Means
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Six honest guides to the real awards, judging standards, and installer-vetting process
            behind the best spray foam work in the country.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topics.map((topic) => (
            <StaggerItem key={topic.slug}>
              <Link href={`/topics/${topic.slug}`} className="group block h-full">
                <article className="rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/40 transition-colors h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={topicImages[topic.slug]}
                      alt={topic.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                      {topic.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-grow">{topic.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read the guide
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
