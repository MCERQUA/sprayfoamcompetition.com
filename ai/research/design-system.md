# Design System — sprayfoamcompetition.com

Generated via real Google Stitch AI mockups (`stitch-mcp.sh`, raw-HTTP path), called directly by
the main build process (not a fork, to avoid tonight's recurring fork-scope-drift issue). 4/4
screens generated on the first attempt, zero quota issues, no hand-authored fallback needed.

- Stitch project: `projects/5654343829269363301` ("Spray Foam Competition — site design")
- Design system asset: `assets/16266569676201261858`
- Model: `GEMINI_3_1_PRO`, `deviceType: DESKTOP`

## Palette (strict warm earth tones + natural green — no purple/pink/blue/cyan)

| Role | Name | Hex |
|---|---|---|
| Primary / brand | Bronze / Amber | `#B8722A` |
| Secondary | Clay / Copper | `#8B4A28` |
| Accent | Medal Gold | `#D4A03C` |
| Natural accent | Sage Green | `#6B7A4C` |
| Background (base) | Warm off-white | `#FAF6F0` |
| Text | Charcoal-brown | `#2B2015` |
| Inverted dark band | Deep bronze-brown | `#4A2E1A` |

Bronze/gold read naturally as medal/award tones for this theme while staying strictly within the
warm-earth-only mandate — no literal gold-neon or trophy-yellow, no purple/pink/blue anywhere.

## Typography

- Headline: **Space Grotesk**
- Body: **Work Sans**
- Roundness: `ROUND_TWELVE`

## Motif / image style

Real photojournalism-style photography of spray foam application and trade events — technicians in
PPE, competition-style application settings, real award/recognition moments. Explicitly NOT generic
trophy clipart, NOT stock corporate-handshake photos. Hero scrim held to >=50% opacity per hard rule.

## Section rhythm

No two adjacent sections share a background: white/off-white base <-> sand-tinted band <-> inverted
dark bronze-brown band (trust bar / stats / final CTA) <-> full-bleed photo band with scrim.

## Screens generated (`.stitch-pages/`)

| File | Stitch title | Notes |
|---|---|---|
| `home.html` | Spray Foam Competition - Home Page | Hero, trust bar, 6-topic grid, credibility band, process, inverted stats, FAQ, final CTA, footer |
| `find-a-top-rated-contractor.html` | How to Find a Top-Rated Spray Foam Contractor Near You | Representative long-form pillar template — the site's real-demand money page (1,900/mo keyword) |
| `about.html` | About / Credibility | Team/credibility split hero, values band, inverted stats, footer |
| `find-an-installer.html` | Find an Award-Caliber Installer | Soft-conversion contact/form page |

## Honesty confirmation

Every screen's design-director prompt explicitly named the real competitions covered (SPFA National
Industry Excellence Awards, Top Gun spray competition) and explicitly instructed against fabricated
official affiliation with SPFA, fabricated testimonials, or invented statistics.

## Downstream build note

Screens are art-direction references — the Next.js build applies these as the locked style
contract (palette, type pairing, section rhythm, motif) via Tailwind CSS variables, not by
transplanting the raw HTML.
