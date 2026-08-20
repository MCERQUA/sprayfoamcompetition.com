import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.businessName}.`,
};

export default function TermsPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />
      <section className="pt-36 pb-24 md:pt-44">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
          <div className="post-prose">
            <p>Last updated: 2026-08-20</p>
            <h2>Use of This Website</h2>
            <p>
              This website provides editorial coverage of real spray foam industry competitions and
              awards programs, including the Spray Polyurethane Foam Alliance (SPFA) National
              Industry Excellence Awards and the Top Gun spray application contest. {site.businessName}{" "}
              is not affiliated with, endorsed by, or operated by SPFA or any competition organizer,
              and does not administer or judge any competition. Content is offered for general
              informational purposes.
            </p>
            <h2>Installer Matching</h2>
            <p>
              Submitting a form constitutes a request to be contacted and does not create a binding
              agreement for services. Matched installers are independent businesses within CCA&apos;s
              network.
            </p>
            <h2>Contact</h2>
            <p>Questions about these terms can be directed to {site.email} or {site.phone}.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
