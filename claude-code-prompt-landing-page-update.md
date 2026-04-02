# Claude Code Prompt: Humance Landing Page Updates

## Context
You are working on the Humance landing page (www.humance.my). This is a B2B SaaS product — an AI WhatsApp Receptionist platform for Malaysian private clinics. The site is built with Next.js 14 (App Router), Tailwind CSS, and shadcn/ui. Review the current landing page codebase and apply the following copywriting and structural changes section-by-section.

---

## SECTION 1 — Hero Section

### Copy Changes:
- **Headline:** Change `"Helping clinics grow with"` → `"Helping Malaysian clinics grow with"` (add the word "Malaysian")
- **Subheadline/tagline:** Find any text that says `"We're making healthcare..."` and change it to `"We're making Clinics..."` — the word "healthcare" should be replaced with "clinics" (lowercase or title-case to match existing style)

### No layout changes needed, just the text updates.

---

## SECTION 2 — Pain Points / "We Understand You" Section

### Copy Changes:
- **Section heading:** The current heading is something like `"Clinics... we heard and understand you."` — update the copywriting approach to convey: **"Clinics...we understand the struggle with appointments"**
- **Remove ("Buang"):** Remove the subtitle/description text that sits directly below the main heading (the small paragraph under the heading). Keep only the heading and the 3 pain point cards.

### Pain Point Cards (3 cards — keep the numbered 01, 02, 03 layout):
Ensure the 3 pain point cards clearly communicate:
1. **01 — After-hour messages** (patients messaging outside clinic hours)
2. **02 — Scheduling hassle** (back-and-forth booking confusion)
3. **03 — No-shows** (patients not showing up for appointments)

If the current card copy doesn't match these themes, update the card titles and descriptions accordingly.

---

## SECTION 3 — "Feels Familiar" Bridge/Transition Section

### Copy Changes:
- This section should read: **"If any of this feels a bit too familiar....."**
- The design intent behind this section is: **"These are the realities of today's clinics"** — this is the emotional tone, not necessarily visible text. Make sure the copy in this section reflects that sentiment. The word "familiar" should be styled with an accent/highlight color (currently appears to be in a colored/highlighted style — keep or enhance that).

---

## SECTION 4 — "Right Place" CTA Bridge Section

### Copy Changes:
- This section should read: **"then you're at the right place."**
- The words **"right place"** should be styled with an accent/highlight color (green or brand color)
- The design intent is: **"Escape it with our solution"** — this transitions the user from pain points to the product solution. Ensure the flow feels like a natural narrative bridge.

---

## SECTION 5 — Product Showcase / "AI Receptionist on WhatsApp"

### Structural Change:
- **"Buang" (REMOVE)** the subtitle/secondary description paragraph beneath the main heading `"Your clinic's AI receptionist, on WhatsApp"`.
- Keep the main heading and any visual elements (phone mockup, demo screenshots, etc.)
- Remove only the smaller descriptive text/paragraph below the heading.

---

## SECTION 6 — Achievements Section

### Keep Existing:
- Keep the current **"Our achievements"** section as-is with the existing photos/cards.

### ADD New Section Below It:
- Add a **new section** directly below "Our achievements" called **"Our latest activity"**
- This section should display photos from the **SICC event** (Startup & Innovation Competition)
- Layout: Use a similar photo grid/gallery layout as the achievements section for visual consistency
- For now, create placeholder `<img>` tags with `src="/images/sicc-event-1.jpg"`, `"/images/sicc-event-2.jpg"`, `"/images/sicc-event-3.jpg"`, `"/images/sicc-event-4.jpg"` — I will replace these with actual SICC event photos later
- Section heading style should match the "Our achievements" heading (with the accent-colored word pattern, e.g. "Our latest **activity**" where "activity" is in the brand accent color)

---

## General Guidelines

1. **Do NOT change** any layout structure, animations, or component architecture unless explicitly stated above
2. **Maintain** the existing dark theme, brand colors (green accent), typography, and spacing
3. **Preserve** all existing CTA buttons, navigation, and footer — no changes there
4. **Respect** the narrative flow: Hero → Pain Points → "Feels Familiar" → "Right Place" → Product Solution → Achievements → Latest Activity
5. After making changes, verify the page renders correctly with `npm run dev` or equivalent
6. If any section uses CMS data or content arrays, update the content in the data source (not hardcoded in JSX if avoidable)

---

## File Discovery
Start by running `find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" | head -50` and reviewing the landing page component structure. The main page is likely at `app/page.tsx` or `src/app/page.tsx`. Section components may be in a `components/` or `sections/` folder.
