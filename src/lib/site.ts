export const site = {
  businessName: "Spray Foam Competition",
  tagline: "The Real Industry Standard for Spray Foam Excellence",
  domain: "sprayfoamcompetition.com",
  url: "https://www.sprayfoamcompetition.com",
  phone: "844-967-5247",
  phoneDigits: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  addressFull: "12220 E Riggs Rd, Chandler, AZ 85249",
} as const;

export interface Topic {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
}

export const topics: Topic[] = [
  {
    slug: "real-spray-foam-industry-awards",
    name: "The Real Awards & Competitions in Spray Foam",
    shortName: "Real Awards & Competitions",
    summary: "SPFA's National Industry Excellence Awards, the Top Gun spray competition, and regional championships — what they actually are.",
  },
  {
    slug: "what-judges-look-for",
    name: "What Competition Judges Actually Look For",
    shortName: "What Judges Look For",
    summary: "Precision, uniform thickness, and pass consistency — the same standards that should show up in your own installation.",
  },
  {
    slug: "find-a-top-rated-contractor",
    name: "How to Find a Top-Rated Spray Foam Contractor Near You",
    shortName: "Find a Contractor",
    summary: "A practical guide to finding an installer held to competition-caliber quality standards.",
  },
  {
    slug: "certification-vs-competition-wins",
    name: "SPFA Certification vs. Competition Wins",
    shortName: "Certification vs. Wins",
    summary: "Two different credentials that mean two different things — what each one actually tells you.",
  },
  {
    slug: "how-top-gun-competition-works",
    name: "Behind the Scenes: How the Top Gun Competition Works",
    shortName: "How Top Gun Works",
    summary: "A look inside the live spray application contest held at the annual SprayFoam Convention & Expo.",
  },
  {
    slug: "spray-foam-application-mistakes",
    name: "Common Spray Foam Application Mistakes (and How to Avoid Them)",
    shortName: "Application Mistakes",
    summary: "The same mistakes that cost competitors points are the ones that cost homeowners money.",
  },
] as const;
