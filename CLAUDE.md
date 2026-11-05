# Ship Studio Project

This is a Next.js 14+ project with Tailwind CSS. You're helping a **non-developer** build a website. Keep explanations simple and jargon-free.

---

## Environment: Ship Studio App

You are running inside the **Ship Studio app**, which handles the development environment automatically.

**Important things to know:**
- The dev server is **already running** - you don't need to start it
- The user sees a live preview of their site in the app
- You don't need to run `npm run dev` or any server commands
- Changes to files are reflected automatically in the preview

**If the user says they can't see their site or the preview isn't working:**
> "Try clicking the **Projects** button in the top right corner to go back to the project list, then reopen your project. This restarts the preview."

---

## FIRST: Check for Onboarding

**Before doing anything else**, check if `SITE.md` exists.

- If `SITE.md` **does NOT exist**: Run the `/onboarding` skill immediately to learn about their business and create a personalized plan.
- If `SITE.md` **exists**: Read it to understand the project before making changes.

---

## Your Skills

You have specialized skills in `.claude/skills/`. **Use them constantly:**

| Skill | When to Use | Invocable |
|-------|-------------|-----------|
| **onboarding** | New project setup, no SITE.md exists | `/onboarding` |
| **page-remake** | User provides URL to remake/rebuild/recreate | `/page-remake` |
| **brand-identity** | Choosing colors, fonts, visual direction | Auto |
| **copywriting** | Writing any text for the site | Auto |
| **marketing-site-design** | Planning page layouts, sections | Auto |
| **sanity-cms** | User wants editable content/CMS | `/sanity-cms` |
| **documentation-writer** | After EVERY code change - update SITE.md | Auto |
| **react-nextjs-expert** | Writing any React/Next.js code | Auto |
| **frontend-design** | Creating any visual component | Auto |
| **animations** | Adding micro-interactions and motion | Auto |
| **react-best-practices** | Performance optimization | Auto |

### Workflow for Every Build Task

1. Check `SITE.md` for brand personality and preferences
2. Use `marketing-site-design` to plan section architecture
3. Use `brand-identity` to select colors/fonts (follow design principles)
4. Use `copywriting` to write specific, human-sounding text
5. Use `frontend-design` + `react-nextjs-expert` for implementation
6. Use `documentation-writer` to update SITE.md after changes

---

## Human-First Design Principles

Great design feels intentional and distinctive. These guidelines help create sites that stand out and feel memorable.

### The Goal

Sites should feel:
- **Intentional** - Every choice has a reason
- **Distinctive** - Not a copy of common patterns
- **Memorable** - Something visitors remember
- **Human** - Warm and approachable

### Typography Guidance

Common fonts like Inter, Roboto, and system fonts work well but are everywhere. For distinction, explore alternatives:

**Modern & Clean:**
- Space Grotesk + DM Sans
- Outfit + Source Sans 3
- Sora + Nunito

**Elegant & Refined:**
- Playfair Display + Lato
- Cormorant Garamond + Montserrat
- Fraunces + Work Sans

**Warm & Approachable:**
- Poppins + Nunito Sans
- Quicksand + Open Sans
- Comfortaa + Mulish

These aren't rules—they're starting points. The right font depends on the brand.

### Color Guidance

**Think twice about these common defaults:**
- `#3B82F6` (Tailwind blue-500) as primary accent - it's everywhere
- Purple-to-blue gradients on white backgrounds - very common
- Pure black `#000000` on pure white `#FFFFFF` - can feel harsh

**Consider instead:**
- Off-black (`#1C1917`) on off-white (`#FAFAF9`) for softer contrast
- Custom accent colors that reflect the brand's personality
- The 60-30-10 rule: 60% dominant, 30% secondary, 10% accent

### Layout Guidance

**Common patterns to use thoughtfully:**
- 3-column feature grids with generic icons - try alternatives like 2-column, asymmetric, or bento layouts
- Centered everything - vary alignment for visual interest
- Equal spacing throughout - vary spacing for rhythm

**Background patterns that feel dated:**
- Abstract blob SVGs
- Wave section dividers
- Gradient mesh backgrounds

Alternatives: geometric shapes, grain textures, solid colors with intentional variation, or high-quality photography.

### Writing Guidance

**Overused words to consider alternatives for:**
revolutionize, leverage, synergy, cutting-edge, seamless, empower, game-changer, next-generation, best-in-class, world-class, unlock, elevate, transform, streamline, robust, scalable, innovative, disrupt, holistic, ecosystem, paradigm, optimize, dynamic, curated, bespoke

**Instead:** Be specific. Use numbers. Focus on outcomes. Write like a human talking to another human.

---

## CRITICAL: Maintain Documentation

**You MUST keep documentation updated.** This is essential for non-technical users.

### Files to Maintain

1. **`SITE.md`** - The main documentation file. Update EVERY time you make changes:
   ```markdown
   # [Site Name]

   > [One-sentence tagline]

   ## Brand Identity
   - Personality: [from onboarding]
   - Colors: [what we're using]
   - Fonts: [what we're using]

   ## Pages
   - **Homepage** (`/`) - [description of what's on it]
   - **About** (`/about`) - [description]

   ## Components
   - **Navbar** - [what it contains, how to customize]
   - **Footer** - [what it contains]

   ## Recent Changes
   - [Date]: Added hero section with [description]
   - [Date]: Created contact page

   ## How to Customize
   - To change colors: [simple instructions]
   - To add a new page: [simple instructions]
   ```

2. **Create `SITE.md` immediately** if it doesn't exist (via onboarding).

3. **Update `SITE.md` after EVERY change** - no exceptions.

4. **Use simple language** - Say "the main page" not "the root route". Say "the navigation bar at the top" not "the header component".

---

## Project Structure

```
app/
├── layout.tsx       # The wrapper around all pages (has <html>, <body>)
├── page.tsx         # Homepage - EDIT THIS for the main page
├── globals.css      # Global styles + Tailwind
└── [folders]/page.tsx  # Other pages (about/, contact/, etc.)
components/          # Reusable pieces (Navbar, Footer, etc.) - create if needed
public/              # Images and static files
lib/                 # Helper functions (Sanity client, etc.)
sanity/              # CMS configuration (if added via /sanity-cms)
```

---

## Rules for Building

### DO:
- Run `/onboarding` for new projects without SITE.md
- Check SITE.md before every task for brand context
- Use skills for visual decisions and code patterns
- Edit `app/page.tsx` for the homepage
- Use Tailwind CSS classes for ALL styling
- Create a `components/` folder for reusable pieces
- Put images in `public/` folder
- Update `SITE.md` after every change
- Explain what you did in simple terms
- Make intentional, distinctive design choices

### DON'T:
- NEVER create `.html` files - this is React/Next.js
- NEVER create separate `.css` files - use Tailwind
- NEVER use `<script>` tags - this is React
- NEVER leave the user confused about what changed
- NEVER use technical jargon without explaining it
- NEVER skip updating SITE.md

---

## File-Based Routing

Each folder in `app/` becomes a page:
- `app/page.tsx` → Homepage (yoursite.com)
- `app/about/page.tsx` → About page (yoursite.com/about)
- `app/contact/page.tsx` → Contact page (yoursite.com/contact)
- `app/pricing/page.tsx` → Pricing page (yoursite.com/pricing)

---

## Example: Creating a New Page

If the user asks for an "About" page:

1. Check `SITE.md` for brand personality
2. Use `marketing-site-design` skill to plan sections
3. Use `brand-identity` skill for visual consistency
4. Create `app/about/page.tsx` using `react-nextjs-expert` patterns
5. Write copy using `copywriting` skill guidelines
6. **Update `SITE.md`** using `documentation-writer` skill
7. Tell the user: "I created an About page. You can see it by going to /about in the preview."

---

## After Every Task

1. Make the requested changes (using your skills, following design principles)
2. Update `SITE.md` with what changed
3. Tell the user what you did in plain English
4. Let them know how to see the changes

---

## Adding CMS (When Requested)

When the user wants to edit content themselves, run the `/sanity-cms` skill. This will:
1. Set up Sanity CMS in the project
2. Create schemas for editable content
3. Connect the frontend to fetch CMS data
4. Give them a friendly editing dashboard

The `.mcp.json` file is already configured for Sanity. User authenticates via OAuth when first using Sanity tools.

---

## Remember

The user is NOT a developer. They're using Ship Studio to build a website without coding knowledge. Your job is to:

1. **Onboard them properly** (if no SITE.md)
2. **Build what they ask for** (using your skills)
3. **Make it feel distinctive and intentional** (not generic)
4. **Keep everything documented** so they understand their site
5. **Explain things simply**
6. **Make them feel confident** about their project

**Always use your skills. Always follow design principles. Always update SITE.md.**

---

## Visual language

This site is a code rebuild of **charlie-halls.webflow.io**. The values below were read from that site's stylesheet and computed styles, and are implemented in `app/globals.css`; `/style-guide` shows all of them. For this site they **override the generic suggestions above** (fonts, "avoid near-black", layout ideas). Match the original and don't redesign. See `MIGRATION.md` for migration status.

**Theme:** dark only. There is no light mode, so don't add `prefers-color-scheme` styles.

### Colours (Tailwind tokens: use `bg-ink`, `border-line`, etc., not hex)
| Token | Hex | Role |
|---|---|---|
| `ink` | #0f1316 | Page background |
| `night` | #12171b | Footer background; end colour of section gradients |
| `line` | #1a242c | Borders, button outlines, arrow-button circles |
| `slate` | #617481 | Outline button on hover |
| `dim` | #627275 | Form field focus |
| `azure` | #5ccdfd | Lune Studio blue: **only** the Contact submit button |
| `white` | #fff | Headings and links |

Text opacities in use: paragraphs `white/85` (base `p` style), footer small print `white/70`, light-button outline and tag underline `white/50`, placeholders `white/55`. Photo overlays: `ink/30` on cards, `ink/75` behind call-to-action sections.

### Type
- **Plus Jakarta Sans** only, self-hosted from `app/fonts/` via `next/font/local` (`--font-jakarta`). Weights in use: 300 (footer small print), 400 (body), 500 (all headings, tags, card titles).
- **The root font size is fluid** (`html` in `globals.css`): about 15px on phones, 16px at 1440px, 18px at 1920px. Size everything in **rem** so it scales with it. Never use px for type or spacing.
- Type styles are utilities with their breakpoint steps built in: `heading-xlarge` (4.5rem), `heading-large` (3.25rem), `heading-medium` (2.75rem), `heading-small` (1.75rem), `text-statement` (3rem centred paragraph), `text-email` (4rem), `text-size-xlarge` (2.25rem), `text-size-large` (1.75rem), `text-size-regular` (1.25rem / 1.65), `text-size-medium`, `text-size-small`, `text-eyebrow` (0.75rem caps, 2px tracking). Buttons are 0.875rem, nav links 0.95rem, tags 0.7rem caps with 1px tracking.

### Layout and spacing
- **Desktop first.** Styles step *down*: `max-lg:` (≤991px), `max-md:` (≤767px), `max-sm:` (≤479px). The breakpoints are redefined in `@theme`, so Tailwind's default `sm/md/lg` values don't apply here.
- Page gutter: `page-padding` (7vw, then 3rem, then 1.5rem). Its box is capped at 93vw, so on desktop the right gap is twice the left. That's deliberate; keep it.
- Content width: `max-w-page` (94rem), centred.
- Vertical rhythm: `py-section` (9 → 6 → 4rem), `py-section-xl` (12 → 8 → 4.5rem), `mb-stack-lg/md/sm` (3.25 / 2.5 / 1rem, stepping down).
- Photo grids use a small **0.5rem** gap.

### Shapes, borders, shadows
- Radii: only **pills** (`rounded-full`: buttons, tags-as-buttons) and **circles** (arrow buttons). Photos and cards have **square corners**.
- Borders: 1px `line`, mostly as horizontal dividers.
- Shadows: **none**. Button outlines are inset rings (`inset 0 0 0 1px`, which becomes 2px on hover). There are no drop shadows anywhere.
- Gradients: only one, a subtle vertical fade from `ink` to `night` at the bottom of some sections. No colourful gradients.

### Components (`components/ui/`)
`Button` (pill outline; `light` variant on dark photos; `current` for the active filter) · `MenuButton` / `MobileMenu` in `components/layout/` (below 992px; colours `panel` #141a1f and `shade` #070a0c, from the template's own menu) · `ArrowLink` (dark circle with a sliding chevron + text; `large` in the hero) · `SlidingArrow` · `Tag` · `SmartLink` (internal links use Next `<Link>`).

### Motion
- Easings in `@theme`: `ease-out-cubic` (400ms hovers), `ease-out-quint` (500ms arrow slide), `ease-out-quad` (top bar), `ease-out-back` (form dots).
- Photos drift with scroll (−7% to 7% at 1.1× scale). The hero photo strip slides sideways as you scroll. The top bar is visible only at the very top of the page on desktop; below 992px it also slides back in on scroll-up (post-migration addition, with the phone menu). Pages fade in (400ms after a 500ms pause).
