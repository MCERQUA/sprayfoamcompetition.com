import type { FAQItem } from "@/components/sections/FAQ";

export interface TopicSection {
  heading: string;
  paragraphs: string[];
}

export interface TopicContent {
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  sections: TopicSection[];
  keyTakeaways: string[];
  faqs: FAQItem[];
}

export const topicContent: Record<string, TopicContent> = {
  "real-spray-foam-industry-awards": {
    slug: "real-spray-foam-industry-awards",
    heroImage: "/images/hero-award-ceremony.jpg",
    heroImageAlt: "A contractor being recognized at a real spray foam industry event",
    intro: [
      "The spray foam insulation industry has real, established competitions and awards programs — not a marketing invention. If you've heard a contractor mention a national award or a spray-off win, here's what's actually behind that claim, and who's actually running it.",
    ],
    sections: [
      {
        heading: "The SPFA National Industry Excellence Awards",
        paragraphs: [
          "The Spray Polyurethane Foam Alliance (SPFA) — a real trade association of contractors, manufacturers, and distributors founded in the late 1980s — runs an annual industry excellence awards program recognizing standout completed projects across insulation, roofing, and coatings applications. Winners are selected from submitted project entries, judged by industry peers on technical execution and application quality.",
          "This is a real, ongoing program that has run for well over a decade. It is not something Spray Foam Competition administers or judges — we cover it as trade journalism, the same way a trade publication would.",
        ],
      },
      {
        heading: "The Top Gun Spray Competition",
        paragraphs: [
          "The Top Gun competition is a live application contest held at the annual SprayFoam Convention & Expo, the largest yearly gathering of spray foam professionals in the country. Unlike the SPFA excellence awards (which judge finished projects), Top Gun judges applicators in real time, spraying in front of industry peers and judges on the convention floor.",
          "It's a genuinely public, in-person event — not a closed-door or online-only competition — which is part of why it carries real credibility within the trade.",
        ],
      },
      {
        heading: "Regional Competitions",
        paragraphs: [
          "Beyond the two national-level events above, regional spray-off competitions and championships happen at the state and local level, organized by regional trade groups, distributors, or manufacturer networks. These tend to have smaller footprints but follow similar judging logic — real-time application quality assessed by industry peers.",
        ],
      },
      {
        heading: "Why This Matters If You're Hiring",
        paragraphs: [
          "None of these competitions certify a company for life, and a past win doesn't guarantee the crew showing up at your house today applies the same standard. But understanding that these are real, judged events — with real, checkable criteria — gives you a much better framework for evaluating a contractor's claims than just taking “award-winning” at face value.",
        ],
      },
    ],
    keyTakeaways: [
      "SPFA's National Industry Excellence Awards is a real, long-running program judging completed projects.",
      "The Top Gun competition is a real, public, live spray-application contest at the annual SprayFoam Convention & Expo.",
      "Regional spray-off competitions exist at the state and local level with similar judging logic.",
      "This site covers these events as trade journalism — we don't run or judge any competition ourselves.",
    ],
    faqs: [
      {
        question: "Is the Top Gun spray foam competition a real event?",
        answer: "Yes — it's a real, live spray application contest held at the annual SprayFoam Convention & Expo, judged in real time by industry peers on precision, thickness, and consistency.",
      },
      {
        question: "What is SPFA?",
        answer: "The Spray Polyurethane Foam Alliance is a real trade association of spray foam contractors, manufacturers, and distributors that runs an annual National Industry Excellence Awards program recognizing standout completed projects.",
      },
      {
        question: "Does Spray Foam Competition run or judge these awards?",
        answer: "No. We cover the real competitions and awards as trade journalism — we're not SPFA and don't administer any competition ourselves.",
      },
    ],
  },

  "what-judges-look-for": {
    slug: "what-judges-look-for",
    heroImage: "/images/topic-judging-precision.jpg",
    heroImageAlt: "Close-up of precise spray foam application technique",
    intro: [
      "Competition judges at events like Top Gun evaluate spray foam application on specific, technical criteria — the same criteria, it turns out, that separate a well-installed job in your own home from a mediocre one.",
    ],
    sections: [
      {
        heading: "Precision and Coverage Uniformity",
        paragraphs: [
          "Judges look for even, consistent coverage across the sprayed surface — no thin spots, no missed sections, no obvious drips or sagging. In a home installation, uneven coverage translates directly to inconsistent R-value across the assembly and potential gaps in air sealing.",
        ],
      },
      {
        heading: "Uniform Thickness",
        paragraphs: [
          "Hitting a consistent, specified thickness across the whole application area is one of the hardest technical skills to execute well, and it's a core judging criterion. In your own home, thickness variance means parts of your wall or attic are underperforming relative to what you were quoted and paid for.",
        ],
      },
      {
        heading: "Pass Consistency",
        paragraphs: [
          "Spray foam is applied in passes (layers), and maintaining a consistent pattern, speed, and overlap between passes is what produces a clean, professional-looking (and correctly performing) final surface. Inconsistent passes are visually obvious to a trained eye and often correlate with inconsistent chemistry mixing as well.",
        ],
      },
      {
        heading: "Overall Application Quality",
        paragraphs: [
          "Beyond the technical measurements, judges assess overall finish quality — clean edges, appropriate trimming around penetrations, no overspray damage to surrounding surfaces. This is the category most directly visible to a homeowner without any special equipment: a genuinely skilled applicator leaves a clean, professional-looking job site and finished surface.",
        ],
      },
      {
        heading: "How to Use This as a Homeowner",
        paragraphs: [
          "You don't need a judge's clipboard to apply these same standards. When a job is finished, look for: consistent coverage with no visible gaps or thin spots, a clean, professional-looking surface without excessive overspray on nearby materials, and ask the installer directly what thickness they targeted and how they verified it was achieved.",
        ],
      },
    ],
    keyTakeaways: [
      "Competition judging criteria — coverage uniformity, thickness consistency, pass consistency, overall finish — map directly onto real installation quality.",
      "Thickness variance in your own home means parts of the assembly underperform relative to what you paid for.",
      "A clean, professional-looking finished surface is a visible, no-equipment-needed quality signal.",
      "Ask your installer what thickness they targeted and how they verified it — a confident, specific answer is a good sign.",
    ],
    faqs: [
      {
        question: "What do spray foam competition judges actually evaluate?",
        answer: "Precision and coverage uniformity, consistent application thickness, pass consistency, and overall finish quality — assessed in real time by industry peers.",
      },
      {
        question: "How can I tell if my own spray foam job was done well?",
        answer: "Look for consistent coverage with no visible gaps or thin spots, a clean finished surface without excessive overspray on nearby materials, and ask the installer what thickness they targeted and how they confirmed it.",
      },
      {
        question: "Why does application thickness matter so much?",
        answer: "Thickness directly determines R-value and, for closed-cell foam, vapor-barrier performance. Inconsistent thickness means parts of your home are underperforming relative to what was quoted.",
      },
    ],
  },

  "find-a-top-rated-contractor": {
    slug: "find-a-top-rated-contractor",
    heroImage: "/images/topic-find-contractor.jpg",
    heroImageAlt: "A contractor and homeowner reviewing completed spray foam work together",
    intro: [
      "Finding a spray foam contractor who actually applies competition-caliber quality standards takes more than a Google search and a five-star review count. Here's a practical, checkable process.",
    ],
    sections: [
      {
        heading: "Start With Real Credentials, Not Just Reviews",
        paragraphs: [
          "Ask specifically whether the installer or their crew holds manufacturer certification for the product they're using, and confirm it through the manufacturer's own certified-applicator directory. This is a separate, more reliably checkable signal than online reviews, which can be curated or manipulated.",
        ],
      },
      {
        heading: "Ask About Their Process, Not Just Their Price",
        paragraphs: [
          "A contractor who applies competition-level discipline to their work should be able to describe their process specifically: how they verify mix ratio, what thickness they target and how they confirm it, and how they handle substrate prep. Vague answers (“we do great work, don't worry”) are a real signal, just not a reassuring one.",
        ],
      },
      {
        heading: "Get Multiple Quotes and Compare Specifics",
        paragraphs: [
          "Get at least two or three written quotes specifying the same foam type, thickness, and coverage area, so you're comparing like-for-like. A quote that's meaningfully cheaper for the same specified scope is worth a direct question about how they're able to offer that price.",
        ],
      },
      {
        heading: "Check License and Insurance Independently",
        paragraphs: [
          "Verify the contractor's license through your state's licensing board lookup, and confirm insurance via a Certificate of Insurance you can independently check with the carrier. Neither of these requires trusting the contractor's own claims.",
        ],
      },
      {
        heading: "The Fastest Path: A Vetted Referral",
        paragraphs: [
          "If you'd rather skip the research and go straight to a pre-vetted option, CCA's installer network connects homeowners with certified, insured spray foam installers held to the same quality standards covered throughout this site — free, with no obligation to move forward.",
        ],
      },
    ],
    keyTakeaways: [
      "Verify manufacturer certification through the manufacturer's own directory, not just the contractor's claim.",
      "A contractor who applies real quality discipline can describe their process specifically — vague answers are a real signal.",
      "Get multiple quotes for the same specified scope (foam type, thickness, coverage) to compare fairly.",
      "Verify license and insurance independently, and consider a pre-vetted referral to skip the research.",
    ],
    faqs: [
      {
        question: "How do I find a top-rated spray foam contractor near me?",
        answer: "Verify manufacturer certification through the manufacturer's directory, ask specific process questions, get multiple quotes for the same specified scope, and independently verify license and insurance — or use a pre-vetted installer network.",
      },
      {
        question: "Are online reviews enough to judge a spray foam contractor?",
        answer: "Not on their own — reviews can be curated or manipulated. Weight them alongside checkable credentials like manufacturer certification, license status, and insurance verification.",
      },
      {
        question: "Should I get more than one quote?",
        answer: "Yes — get at least two or three quotes specifying the same foam type, thickness, and coverage area so you're comparing equivalent scopes of work, not just bottom-line prices.",
      },
    ],
  },

  "certification-vs-competition-wins": {
    slug: "certification-vs-competition-wins",
    heroImage: "/images/topic-certification.jpg",
    heroImageAlt: "A certification document alongside spray foam work",
    intro: [
      "\"Certified\" and \"award-winning\" get used almost interchangeably in contractor marketing, but they're genuinely different credentials that tell you different things. Here's the real distinction.",
    ],
    sections: [
      {
        heading: "What Manufacturer Certification Means",
        paragraphs: [
          "Certification is a training credential — an installer or company completed a manufacturer's program covering correct mixing ratios, application technique, and safety procedures for a specific product line, and often must maintain it through periodic recertification. It reflects baseline competence and training, verified against a manufacturer's own standard.",
        ],
      },
      {
        heading: "What a Competition Win Means",
        paragraphs: [
          "A competition win (or an SPFA excellence award) reflects a specific, judged performance — either a live application judged in real time (Top Gun-style events) or a completed project judged against peer submissions (SPFA's excellence awards). It demonstrates a high level of skill at a specific point in time, judged against other entrants, not an ongoing credential status the way certification is.",
        ],
      },
      {
        heading: "Neither One Alone Tells You Everything",
        paragraphs: [
          "A certified installer without competition recognition may still do excellent, consistent work — certification is the more directly relevant credential for day-to-day quality assurance, since it's tied to training standards rather than a one-time contest result. A competition winner from several years ago tells you about a specific team's skill at that specific event, not necessarily about the crew working on your project today.",
          "The strongest signal combines both: current manufacturer certification (verifiable today) plus a track record that includes real recognition (context, not the whole picture).",
        ],
      },
      {
        heading: "How to Ask About Both, Specifically",
        paragraphs: [
          "Ask which manufacturer certified them and confirm it in that manufacturer's public directory. If they mention a competition win or award, ask which one, when, and who the crew was — a specific, verifiable answer is a good sign; vague name-dropping (“we've won awards”) without specifics is worth a follow-up question.",
        ],
      },
    ],
    keyTakeaways: [
      "Certification is a training credential tied to a manufacturer's standard, often requiring recertification.",
      "A competition win reflects a specific, judged performance at a specific point in time — not an ongoing credential.",
      "Certification is more directly relevant to day-to-day quality assurance; a past win is context, not proof of current standards.",
      "Ask for specifics on both — verifiable answers are a good sign, vague name-dropping is not.",
    ],
    faqs: [
      {
        question: "Is a certified spray foam installer better than an award-winning one?",
        answer: "They're different signals. Certification reflects current, verifiable training standards; a competition win reflects a specific judged performance at a point in time. Ideally you want a contractor who can speak specifically to both.",
      },
      {
        question: "Does a past competition win guarantee my job will be done well?",
        answer: "No — it tells you about a specific team's skill at a specific event, not necessarily about the crew working on your project today. Current, verifiable certification is a more directly relevant day-to-day signal.",
      },
      {
        question: "How do I verify a manufacturer certification claim?",
        answer: "Ask which manufacturer certified the installer, then check that manufacturer's own public certified-applicator directory to confirm.",
      },
    ],
  },

  "how-top-gun-competition-works": {
    slug: "how-top-gun-competition-works",
    heroImage: "/images/topic-competition-mechanics.jpg",
    heroImageAlt: "A live application area at a trade convention setting",
    intro: [
      "The Top Gun competition is one of the most visible events in the spray foam trade — a live, in-person spray-off held at the annual SprayFoam Convention & Expo. Here's how it actually works.",
    ],
    sections: [
      {
        heading: "A Live, Public Format",
        paragraphs: [
          "Unlike judged project submissions, Top Gun is a real-time application contest — competitors spray foam on a test surface in front of industry peers and judges on the convention floor, rather than submitting photos or documentation of past work. This live format is a meaningful part of its credibility: there's no opportunity to submit only your best-looking project.",
        ],
      },
      {
        heading: "What's Being Judged",
        paragraphs: [
          "Consistent with the criteria covered on our judging-standards page, competitors are evaluated on precision, uniform application thickness, pass consistency, and overall finish quality — assessed by industry experts watching the application happen in real time.",
        ],
      },
      {
        heading: "Why It's Held at the Convention",
        paragraphs: [
          "The SprayFoam Convention & Expo is described as the largest annual gathering of spray foam professionals in the country — holding the competition there means it happens in front of the industry's actual peer group, not a closed panel. Winners have historically received prizes including new equipment, reflecting both the competition's visibility and its significance within the trade.",
        ],
      },
      {
        heading: "What This Means for the Industry",
        paragraphs: [
          "Events like Top Gun function as a visible benchmark for the trade — a public demonstration that application skill is real, measurable, and can be directly compared between competitors. That same benchmark logic is what homeowners can borrow: the qualities that win a live competition are the same qualities that produce a well-installed job in a real home.",
        ],
      },
    ],
    keyTakeaways: [
      "Top Gun is a live, real-time spray application contest, not a judged-photo or documentation submission.",
      "It's held at the annual SprayFoam Convention & Expo, the largest yearly gathering of spray foam professionals.",
      "Judging criteria mirror what matters in a real home installation: precision, thickness, pass consistency, finish quality.",
      "The competition's public, real-time format is part of what gives it credibility within the trade.",
    ],
    faqs: [
      {
        question: "Where is the Top Gun spray foam competition held?",
        answer: "At the annual SprayFoam Convention & Expo, described as the largest yearly gathering of spray foam professionals in the country.",
      },
      {
        question: "Is Top Gun judged on submitted photos or live application?",
        answer: "It's a live, real-time application contest — competitors spray in front of judges and industry peers on the convention floor, not a submitted-documentation competition.",
      },
      {
        question: "What do Top Gun winners typically receive?",
        answer: "Prizes have historically included new equipment, reflecting the competition's significance within the trade, alongside industry recognition.",
      },
    ],
  },

  "spray-foam-application-mistakes": {
    slug: "spray-foam-application-mistakes",
    heroImage: "/images/topic-application-mistakes.jpg",
    heroImageAlt: "Close-up detail of spray foam surface texture",
    intro: [
      "The mistakes that cost a competitor points at Top Gun are, unsurprisingly, the same mistakes that cost homeowners money and performance. Here are the most common ones, and how to spot them.",
    ],
    sections: [
      {
        heading: "Uneven Thickness",
        paragraphs: [
          "The single most common quality issue: thickness that varies noticeably across the sprayed area. This is often invisible without measurement, which is exactly why asking your installer how they verify thickness matters — a confident, specific answer (a depth gauge, consistent pass counting) is a real signal; \"we can just tell\" is not.",
        ],
      },
      {
        heading: "Missed Spots and Gaps",
        paragraphs: [
          "Corners, tight framing bays, and areas around penetrations are the most common places to find missed coverage — exactly the places where air sealing matters most. A rushed job is more likely to leave these gaps than a careful one.",
        ],
      },
      {
        heading: "Off-Ratio Mixing",
        paragraphs: [
          "Covered in more depth on our sister site's building-science content, but worth noting here: improperly mixed foam (from equipment miscalibration or rushed application) shrinks, pulls away from framing, or produces persistent odor — a direct application-quality failure, not a material defect.",
        ],
      },
      {
        heading: "Overspray and Poor Site Protection",
        paragraphs: [
          "Foam on surfaces that weren't supposed to be sprayed — trim, flooring, fixtures — is a visible sign of a rushed or careless application, even if the actual insulation performance is fine. A crew that takes the time to properly mask and protect the work area is signaling the same discipline that shows up in the harder-to-see technical work.",
        ],
      },
      {
        heading: "How to Catch These Before It's Too Late",
        paragraphs: [
          "Ask to be present, or to see photos, at key points during the job — not just before and after. A contractor confident in their work has no reason to object to a homeowner checking in during application.",
        ],
      },
    ],
    keyTakeaways: [
      "Uneven thickness is the most common quality issue and is often invisible without measurement — ask how it's verified.",
      "Corners and tight framing bays are the most common places to find missed coverage.",
      "Off-ratio mixing causes shrinkage, gaps, and odor — an application failure, not a material defect.",
      "Overspray and poor site protection are a visible proxy for the same carelessness that affects harder-to-see technical work.",
    ],
    faqs: [
      {
        question: "What's the most common spray foam application mistake?",
        answer: "Uneven application thickness — often invisible without measurement, which is why asking your installer how they verify thickness (not just claim it) matters.",
      },
      {
        question: "Where do spray foam installers most commonly miss coverage?",
        answer: "Corners, tight framing bays, and areas around penetrations — exactly the spots where air sealing matters most.",
      },
      {
        question: "Is overspray on nearby surfaces a sign of bad work?",
        answer: "It's a visible warning sign of a rushed or careless job, even though it doesn't directly affect insulation performance — it's a reasonable proxy for overall attention to detail.",
      },
    ],
  },
};
