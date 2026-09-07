"use client";
import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { site } from "@/lib/site";

const projectTypes = [
  "New Installation Quote",
  "Existing Installation Review",
  "General Question",
];

export function FindInstallerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const srcRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      let src = p.get("utm_source") || p.get("ref") || "";
      if (!src && document.referrer) {
        try {
          src = new URL(document.referrer).hostname;
        } catch {
          src = document.referrer;
        }
      }
      if (srcRef.current) srcRef.current.value = src || "direct";
      if (urlRef.current) urlRef.current.value = window.location.href;
    } catch {
      /* noop */
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!res.ok) throw new Error("Failed to send your request. Please try again or call us directly.");
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold">Request Received</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;ll match you with an award-caliber installer from CCA&apos;s network and follow
              up within one business day. Need to talk sooner? Call{" "}
              <a href={`tel:${site.phoneDigits}`} className="text-primary font-semibold">
                {site.phone}
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <form
      name="findinstaller"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-6 bg-card border border-border rounded-2xl p-6 md:p-8"
    >
      <input type="hidden" name="form-name" value="findinstaller" />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <input type="hidden" name="traffic_source" id="__aeo_src_findinstaller" ref={srcRef} defaultValue="" />
      <input type="hidden" name="landing_url" id="__aeo_url_findinstaller" ref={urlRef} defaultValue="" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fi-name" className="block text-sm font-medium mb-2">Name</label>
          <input id="fi-name" name="name" type="text" required placeholder="Your name"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="fi-phone" className="block text-sm font-medium mb-2">Phone</label>
          <input id="fi-phone" name="phone" type="tel" required placeholder="(555) 555-5555"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fi-email" className="block text-sm font-medium mb-2">Email</label>
          <input id="fi-email" name="email" type="email" required placeholder="you@email.com"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="fi-street" className="block text-sm font-medium mb-2">Job / Property Address</label>
          <input id="fi-street" name="street_address" type="text" required autoComplete="address-line1" placeholder="1234 W Main St"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fi-city" className="block text-sm font-medium mb-2">City</label>
          <input id="fi-city" name="city" type="text" required autoComplete="address-level2" placeholder="Phoenix"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
        </div>
        <div>
          <label htmlFor="fi-state" className="block text-sm font-medium mb-2">State</label>
          <select id="fi-state" name="state" required autoComplete="address-level1" defaultValue=""
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
            <option value="" disabled>Select a state</option>
            <option key="AL" value="AL">Alabama</option>
            <option key="AK" value="AK">Alaska</option>
            <option key="AZ" value="AZ">Arizona</option>
            <option key="AR" value="AR">Arkansas</option>
            <option key="CA" value="CA">California</option>
            <option key="CO" value="CO">Colorado</option>
            <option key="CT" value="CT">Connecticut</option>
            <option key="DE" value="DE">Delaware</option>
            <option key="DC" value="DC">District of Columbia</option>
            <option key="FL" value="FL">Florida</option>
            <option key="GA" value="GA">Georgia</option>
            <option key="HI" value="HI">Hawaii</option>
            <option key="ID" value="ID">Idaho</option>
            <option key="IL" value="IL">Illinois</option>
            <option key="IN" value="IN">Indiana</option>
            <option key="IA" value="IA">Iowa</option>
            <option key="KS" value="KS">Kansas</option>
            <option key="KY" value="KY">Kentucky</option>
            <option key="LA" value="LA">Louisiana</option>
            <option key="ME" value="ME">Maine</option>
            <option key="MD" value="MD">Maryland</option>
            <option key="MA" value="MA">Massachusetts</option>
            <option key="MI" value="MI">Michigan</option>
            <option key="MN" value="MN">Minnesota</option>
            <option key="MS" value="MS">Mississippi</option>
            <option key="MO" value="MO">Missouri</option>
            <option key="MT" value="MT">Montana</option>
            <option key="NE" value="NE">Nebraska</option>
            <option key="NV" value="NV">Nevada</option>
            <option key="NH" value="NH">New Hampshire</option>
            <option key="NJ" value="NJ">New Jersey</option>
            <option key="NM" value="NM">New Mexico</option>
            <option key="NY" value="NY">New York</option>
            <option key="NC" value="NC">North Carolina</option>
            <option key="ND" value="ND">North Dakota</option>
            <option key="OH" value="OH">Ohio</option>
            <option key="OK" value="OK">Oklahoma</option>
            <option key="OR" value="OR">Oregon</option>
            <option key="PA" value="PA">Pennsylvania</option>
            <option key="RI" value="RI">Rhode Island</option>
            <option key="SC" value="SC">South Carolina</option>
            <option key="SD" value="SD">South Dakota</option>
            <option key="TN" value="TN">Tennessee</option>
            <option key="TX" value="TX">Texas</option>
            <option key="UT" value="UT">Utah</option>
            <option key="VT" value="VT">Vermont</option>
            <option key="VA" value="VA">Virginia</option>
            <option key="WA" value="WA">Washington</option>
            <option key="WV" value="WV">West Virginia</option>
            <option key="WI" value="WI">Wisconsin</option>
            <option key="WY" value="WY">Wyoming</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="fi-zip" className="block text-sm font-medium mb-2">ZIP Code</label>
        <input id="fi-zip" name="zip" type="text" required inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" maxLength={10} autoComplete="postal-code" placeholder="Property ZIP code"
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" />
      </div>

      <div>
        <label htmlFor="fi-project" className="block text-sm font-medium mb-2">What Are You Looking For?</label>
        <select id="fi-project" name="project_type" required defaultValue=""
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
          <option value="" disabled>Select an option</option>
          {projectTypes.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="fi-details" className="block text-sm font-medium mb-2">Details (optional)</label>
        <textarea id="fi-details" name="details" rows={4} placeholder="Tell us about your project."
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
      >
        {isSubmitting ? "Submitting..." : (<>Get Matched With an Installer <Send className="w-4 h-4" /></>)}
      </button>

      <p className="text-center text-sm text-muted-foreground">
        Prefer to talk? Call{" "}
        <a href={`tel:${site.phoneDigits}`} className="inline-flex items-center gap-1 text-primary font-semibold">
          <Phone className="w-3.5 h-3.5" />
          {site.phone}
        </a>
      </p>
    </form>
  );
}
