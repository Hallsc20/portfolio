# Migration: charlie-halls.webflow.io → this project

> **Status (2026-10-15): every page rebuilt and verified.** Worst score on any page at any width: 98.65% (About, phone). One thing needs you before the new site can replace the Webflow one: the Contact form's Formspree ID. See "Remainder" at the bottom.

**Source:** https://charlie-halls.webflow.io/ (Webflow, built from the "Booked" template by TyCreated)
**Target:** Next.js 16 + Tailwind CSS 4 (this project)
**Status file:** `migration.json` (phase, what's in progress, what needs you)

## Where things stand

| Phase | Status |
|---|---|
| 0. Survey | ✅ done |
| 1. Design system | ✅ done (see `/style-guide`) |
| 2. Homepage | ✅ done — approved 2026-10-15 |
| 3. Other templates | ✅ done — Project, About, Work, Category, Contact, Page Not Found |
| 4. Remainder | ✅ written up below |

---

## Survey

### Pages → templates

There are 21 live pages, but only **7 templates** (page layouts):

| # | Template | Pages | What's on it |
|---|---|---|---|
| T1 | **Home** | `/` | Big intro headline + "Get a free website" link · strip of 6 photos that slides sideways as you scroll · "About me" centred paragraph · 3-step "offer" timeline (sticky photo on the left, dot markers on the far left, text cards on the right) · "Think I could help…" call-to-action over a sticky darkened photo · "Explore some of my recent projects" with category buttons and 4 project cards |
| T2 | **About** | `/about` | Tall portrait + "Creating great digital experiences" + "My story" · 3 numbered services · "My experience…" 4-step zig-zag timeline over a background photo |
| T3 | **Work (all projects)** | `/work` | 2 newest projects as small floating cards + "Deep dive into my recent projects" · category buttons · grid of all 10 project cards |
| T4 | **Category** | `/category/branding`, `/category/interaction`, `/category/prototyping`, `/category/web-design` | "Unique designs at one solid price" + category buttons + project cards in that category |
| T5 | **Project** | 10 pages under `/work/…` | Headline + Client / Service / Year · 2 photos side by side · "Introduction" paragraph · full-width banner photo · "What I did" with a hover list of photos · "Schedule a call with me" call-to-action · "Find another project…" with 2 more projects |
| T6 | **Contact** | `/contact` | "Let's get to working" + 5-question form (name, email, phone, service, details) · portrait photo |
| — | **old-home** | `/old-home` | Not linked anywhere. A leftover note from the template about the Finsweet "Client-first" system. Recommend **not** rebuilding. |

### Shared parts (on every page)

- **Top bar** — "charliehalls.portfolio" logo (an SVG image) on the left; About · Work · Contact on the right. It is **not** sticky.
- **Footer** — "Connect with me" + large email address, then a bottom row: "Charlie Halls © 2026" · "Made with ❤️ for the webflow community" · Terms · Privacy. The footer is **revealed underneath the page** as you scroll to the end (the page slides up off it).
- **Project card** — photo, dark overlay, category tag top-left, title + arrow bottom; used on Home, Work, Category and Project pages.
- **Category buttons** — "All" + the 4 categories, rounded outline buttons.
- **Arrow link** — round dark circle with a ">" arrow that slides on hover, plus text.

### Collections (content that repeats)

| Collection | Items | Fields |
|---|---|---|
| **Projects** | 10 | name, slug, category, card image, headline, client, service, year, 2 header photos, introduction, banner photo, "What I did" text, ~6 showcase photos |
| **Categories** | 4 | Branding, Interaction, Prototyping, Web design |

Only **2 projects have your own words** — *CMS & Filtering (Practise)* and *Maple Grove Therapy (Practise)*. The other 8 still have the template's sample text (all share the same "After doing some research and brainstorming with my team…" introduction).

### Breakpoints (read from the site's own stylesheet)

| Name | Width | What changes |
|---|---|---|
| Wide | > 1440px | text scales with window width (`0.625rem + 0.4167vw`) |
| Desktop | 992–1440px | text scales more gently (`0.8127rem + 0.2081vw`) |
| Tablet | 768–991px | nav links disappear; layouts start stacking |
| Phone (landscape) | 480–767px | single column |
| Phone | ≤ 479px | text scale changes again (`0.7495rem + 0.8368vw`) |

The whole site's text and spacing **grow and shrink with the window width** (the base font size is fluid), so measurements will be taken at: **1920, 1440, 1200, 991, 767, 390**.

### Fonts

- **Plus Jakarta Sans** — the only typeface. It's open-licensed (SIL OFL), so the exact same font files can be self-hosted. No substitute needed.

### Interactions and motion

- Hero photo strip slides horizontally as you scroll.
- "Offer" timeline: sticky photo, dot markers that track which step you're on, text fading in.
- Call-to-action sections: sticky, darkened background photo.
- Footer revealed underneath the page.
- Hover: arrow slides inside the round button; project card image/arrow movement.
- Project page: hovering the "What I did" list shows photos.

### Things to know (template leftovers on the live site)

These are on the live site today. The plan is to copy them as they are and list them here, not fix them quietly. (See the questions in `migration.json`.)

- **No menu on tablet or phone.** Below 992px the About/Work/Contact links disappear and nothing replaces them.
- **Footer email link is wrong:** it shows `charlie@lune-studio.co.uk` but clicking it emails `example@template.com`.
- **About page is template sample content** ("Hello, I'm a creative director living in Brooklyn…", "Sarah was born and raised in New York…", Spotify/Webflow/Apple/Airtable job history), and the services links point at `booked.webflow.io`.
- **8 of 10 projects are sample content** (see Collections).
- **Page titles** on About, Work, Contact and Category pages read "… | Booked TyCreated Webflow Template".
- **Contact page typo:** "I'lll respond within 48 hours." Headline "Let's get to working".
- **Category pages** all share the headline "Unique designs at one solid price".
- **Hidden template parts** (present in the code, never shown): a slide-out sidebar menu, social links (TW/IG/YT/FB, all pointing at the template author's Twitter), an FAQ block. These won't be rebuilt, because visitors never see them.

### Cannot come across as-is

| Item | Why | Plan |
|---|---|---|
| **Contact form submissions** | They go to Webflow's form backend, which only works on Webflow hosting | Needs a new destination; see question in `migration.json` |
| **"Made in Webflow" badge** | Webflow's free-plan badge | Dropped |
| **Webflow CMS editing** | Content will no longer live in Webflow | Depends on the content decision |
| **Cal.com booking link** | External service; it's just a link | Kept as a link, works unchanged |
| **Exact animation timing** | Webflow's animation engine isn't available outside Webflow | Rebuilt by hand to match; a screenshot score can't measure motion, so it gets checked separately |

---

## Measurement

Comparison tool: screenshots of the original and the rebuild, scrolled one screen at a time and joined, then compared pixel by pixel. **A page's score is its worst breakpoint.**

| Page | 1920 | 1440 | 1200 | 991 | 767 | 390 | Score |
|---|---|---|---|---|---|---|---|
| Starter (baseline, before any work) | | 5.66% | | | | | 5.66% (one width, only to prove the tool works) |
| **Homepage** `/` | 99.67% | 99.79% | 99.67% | 99.56% | 99.94% | 99.91% | **99.56%** |

Page heights match the original exactly at every width. In-between widths checked too: 1100px 99.81%, 850px 99.63%, 600px 99.94%, 320px 99.89%.

**What the last ~0.4% is:** the "offer" cards are captured mid-fade, and mine sit a few percent of opacity away from the original at that instant (timing of the smoothing), plus photo re-encoding. Layout and positions are identical.

### Homepage — checked beyond the score
- **Hover states** (screenshotted while hovered, both sides): arrow link 100%, project card 100%, tag 100%, category button 100%, light button 99.3%.
- **Headings, links, keyboard tab order** — identical to the original (focus rings visible on every stop). Only intentional link difference: the footer email now goes to charlie@lune-studio.co.uk.
- **Top bar** — hides past 10% of a screen's scroll and returns at the top, same as the original.
- **Motion** — values taken from Webflow's own animation data and compared at fixed scroll positions: offer cards and photo parallax match to within 0.1%. The offer-card fade runs only at ≥768px, as on the original.
- **Not exactly copyable:** Webflow's smoothing curve is approximated; motion *feel* while scrolling is very close but not frame-identical. Users who've turned on "reduce motion" in their device settings get the scroll effects without the smoothing lag (the original ignores that setting).

### Homepage — things I noticed and matched rather than fixed
- The hero text sits ~50px further right than every other section (the template centres the hero's padded box). Kept.
- Headings skip from H1 to H3, and the page has two H1s ("I'm Charlie…" and "Explore some of my recent projects"). Kept — worth tidying in the follow-up.
- No menu below 992px (agreed: phone menu is the first follow-up).

### How the homepage was brought to a match (for the record)
| Pass | Width | Score | Fix |
|---|---|---|---|
| 1 | 1440 | 93.70% | first build |
| 2 | 1440 | 99.43% | scroll animations weren't applied (stale stylesheet in the preview) + project card height (the original's inline-block gap) |
| 3 | 1440 | 99.79% | card fade start measured against the section's height, not the screen's |
| 4 | 991 | 92.28% → 99.43% | photo centred in its column on tablet |
| 5 | 390 / 767 | 96.61% → 99.90% / 98.74% → 99.94% | card fade switched off below 768px, as on the original |


## Decisions (agreed 2026-10-15)

- **Content:** projects and categories live as files in this project.
- **Contact form:** emailed to charlie@lune-studio.co.uk via Formspree. *Needs your Formspree form ID* when the Contact page is built.
- **Template leftovers:** copied exactly, **except** the footer email link, which now goes to charlie@lune-studio.co.uk. The rest is tidied up after the migration.
- **Phone menu:** matched (none) during migration; a phone menu is the first follow-up.
- **Fonts:** Plus Jakarta Sans, self-hosted.
- **/old-home:** not rebuilt.

## Design system (Phase 1)

Read from the original's stylesheet and computed styles; implemented in `app/globals.css`; shown at `/style-guide`; recorded for future sessions in `CLAUDE.md` → "Visual language".

- **Check:** type sizes and line heights in the rebuild compute to the same pixel values as the original at 1440px (e.g. hero headline 72px/90px) and 390px (41.95px/52.44px).
- **Interactions captured from Webflow's own animation data** (exact values, for Phase 2 onwards): top bar shown only near the top; page fade-in; hero strip slides 33.33% sideways across the hero; "offer" cards fade in and out as they pass (20% → −25%); photo parallax (−7% → 7% at 1.1×); background parallax (−10% → 10%); arrow slide on hover; nav link and footer email follow the mouse slightly; form numbers turn into dots on hover.

## Phase 3 — templates

### T5 Project page (`/work/[slug]`, 10 pages) — ✅ done

| Page | 1920 | 1440 | 1200 | 991 | 767 | 390 | Score |
|---|---|---|---|---|---|---|---|
| greenpoint-studio-wireframes (full check) | 99.87% | 99.83% | 99.56% | 99.96% | 99.87% | 99.66% | **99.56%** |
| maple-grove-therapy-practise | | 99.94% | | 99.93% | | 99.76% | **99.76%** |
| cms-filtering-practise | | 99.84% | | 99.97% | | 99.71% | **99.71%** |
| bronx-books-profile-design | | 99.54% | | | | | 99.54% (1 width) |
| super-soda-digital-campaign | | 99.48% | | | | | 99.48% (1 width) |
| tribeca-flowers-app-design | | 99.57% | | | | | 99.57% (1 width) |
| soho-law-filter-design | | 99.64% | | | | | 99.64% (1 width) |
| brooklyn-bakery-landing-page | | 99.77% | | | | | 99.77% (1 width) |
| fulton-factory-global-branding | | 99.08% | | | | | 99.08% (1 width) |
| harlem-fashion-superbowl-campaign | | 99.49% | | | | | 99.49% (1 width) |

All ten share one template; one was checked at all six widths, your own two at three, the rest at desktop. Heights match to within 1px everywhere.

**Found and matched along the way**
- "Find another project…" shows the two **newest** projects (CMS & Filtering, Maple Grove, then Brooklyn), not the Work-page order.
- "What I did" photos: 500px-wide-or-more files fill the column; smaller files (the Maple Grove card and the film card) show at their own size — exactly as Webflow renders them.
- Below 992px the "Find another project…" row scrolls sideways (cards keep 80% of the screen width).
- The Client/Service/Year rows have a fixed 16px gap on the original; kept.

**Template leftovers kept as-is (agreed)**: "Schedule a call with me → Go to my calendar" opens calendly.com's front page, not a real booking link; browser tab titles end "| Booked @tycreated Webflow Template"; 8 projects carry sample text.

**Regression check:** homepage re-measured after this template landed — 1440px 99.79% (unchanged).

### T2 About (`/about`) — ✅ done

| Page | 1920 | 1440 | 1200 | 991 | 767 | 390 | Score |
|---|---|---|---|---|---|---|---|
| About | 99.79% | 99.72% | 99.96% | 99.53% | 99.21% | 98.65% | **98.65%** |

Heights identical at every width. **What the last 1.35% on phones is:** the "My story" text block moves as you scroll and sits at a fractional pixel position, so letter edges anti-alias differently; every line is in the same place (checked text block by text block).

**Found and matched along the way**
- The "My story" text sinks by up to 35% as you scroll. Webflow measures it *including* its own movement and only on scroll events, so the amount depends on how you scroll — reproduced exactly (same values for both a single jump and step-by-step scrolling).
- The services' number → dot hover (and its drift towards the mouse) only exists at 992px and up; on smaller screens there's no dot, as on the original.
- The portrait uses the same 500/800px pre-shrunk copies Webflow serves, so it renders identically.

**Template leftovers kept as-is (agreed)**: the whole page is the template's sample person ("creative director living in Brooklyn", "Sarah was born and raised in New York City…", Spotify/Webflow/Apple/Airtable job history); the "My story" paragraph ends mid-sentence ("…her websites are used by"); "my Services" lower-case "my"; tab title "About | Booked TyCreated Webflow Template".
**Left out on purpose:** each service paragraph on the original ends with an invisible, empty link to `booked.webflow.io` (the template author's site). It shows nothing but is a keyboard stop to someone else's website, so it isn't carried over. Also not rebuilt: the hidden FAQ block.

**Regression checks:** homepage 1440px 99.79% / 390px 99.90%, project page 1440px 99.83% — unchanged.

### T3 Work (`/work`) and T4 Category (`/category/[slug]`, 4 pages) — ✅ done

| Page | 1920 | 1440 | 1200 | 991 | 767 | 390 | Score |
|---|---|---|---|---|---|---|---|
| Work | 99.93% | 99.92% | 99.81% | 99.79% | 99.90% | 99.70% | **99.70%** |
| Category: web-design (full check) | 99.96% | 99.94% | 99.85% | 99.88% | 99.94% | 99.74% | **99.74%** |
| Category: prototyping | | 99.95% | | | | | 99.95% (1 width) |
| Category: branding | | 99.95% | | | | | 99.95% (1 width) |
| Category: interaction | | 99.95% | | | | | 99.95% (1 width) |

Both matched on the first pass, because they're built from parts already verified (project cards, category buttons, the small "work cards", the photo band). Heights identical everywhere.

**Found and matched:** each category page lists its projects in its own order (e.g. Branding shows Brooklyn before Soda, the Work page the other way round) — stored per category. Category pages have a fixed 9rem gap above the heading at every width; Work/Home step down.
**Template leftovers kept as-is (agreed):** the Work and every Category page use the template heading "Unique designs at one solid price"; tab titles "… | Booked TyCreated Webflow Template".
**Regression checks:** homepage 1440px 99.79%, project page 390px 99.66% — unchanged (the homepage's project section and the project banner now use the same shared parts as these pages).

### T6 Contact (`/contact`) — ✅ done

| Page | 1920 | 1440 | 1200 | 991 | 767 | 390 | Score |
|---|---|---|---|---|---|---|---|
| Contact | 99.86% | 99.83% | 99.80% | 99.81% | 99.73% | 99.29% | **99.29%** |

**Checked beyond the score:** focusing a field slides the text right with no outline, exactly as the original (focused-field screenshot 99.2% match); each question's number turns into a dot on hover (and drifts towards the mouse at 992px+); pressing "Send message" with no Formspree ID shows "This form isn't connected yet. Please email charlie@lune-studio.co.uk instead."
**Found and matched:** questions 2–5 are medium-weight labels with a small gap below; question 1 is plain text (as on the original).
**Changed on purpose (invisible):** on Webflow every field had the same internal name ("name-2") and the labels pointed at a field that didn't exist, so the form couldn't send usable data anywhere else. Each field now has its own name (name, email, phone, service, details) and its label is linked to it (also helps screen readers). Looks identical.
**Template leftovers kept as-is (agreed):** "Let's get to working", "I'lll respond within 48 hours", tab title "Contact | Booked TyCreated Webflow Template".

### Page Not Found — ✅ done
100% at 1440 / 767 / 390px. The original's 404 is Webflow's unstyled default (white, system font, blue button); copied as-is. **One change:** its "Go Home" button went to `/old-home` (not carried over), so it now goes to the homepage.

### Also carried over
- **Browser-tab icons** (the "CHARLIE" icon at 32/48/192/512px + Apple touch icon), replacing the Ship Studio starter icon.
- **Link-preview tags:** homepage title / description / large-image card; About, Work and Contact titles with the template's preview image (leftover, see below). Project and category pages had none, so have none. Small difference: Next.js adds a "large image card" tag automatically wherever a preview image exists (About/Work/Contact); harmless.
- **Production build** passes (26 static pages), lint clean, no errors in the browser console on any page.

### Final check — every page (latest saved report re-read, not from memory)
| Page | Worst width | Score |
|---|---|---|
| Homepage | 991px | 99.43% (varies 99.43–99.56% between identical runs: a card is mid-fade at capture) |
| Project (10 pages) | Fulton, 1440px | 99.08% |
| About | 390px | 98.65% |
| Work | 390px | 99.70% |
| Category (4 pages) | web-design, 390px | 99.74% |
| Contact | 390px | 99.29% |
| Page Not Found | — | 100% |

---

## Phase 4 — Remainder: what did *not* come across, and what changed

### Needs you before going live
1. **Contact form → Formspree ID** *(skipped for now, 2026-10-15)*. Create a free form at formspree.io sending to charlie@lune-studio.co.uk, then put its ID in `content/site.ts` (`FORMSPREE_FORM_ID`). Until then the form shows a message asking people to email you.
2. **Hosting / domain.** This migration rebuilds the site; it doesn't publish it. The Webflow site is untouched and still live.

### Could not come across
| Item | Why | What happens now |
|---|---|---|
| Webflow form handling | Only works on Webflow hosting | Formspree (needs the ID above) |
| Webflow CMS editor | Content no longer lives in Webflow | Edit `content/projects.ts` (or ask me); can move to Sanity CMS later |
| Exact animation timing | Webflow's animation engine isn't available outside Webflow | Rebuilt from Webflow's own settings; positions match to 0.1% once settled; the smoothing "feel" is a close hand-made match, not frame-identical |
| Webflow's image resizing | Next.js resizes images itself | Tiny compression differences in photos (part of the last ~0.3% on most pages). The two portraits use Webflow's own resized copies |

### Deliberately not carried over
- **"Made in Webflow" badge.**
- **`/old-home`**: unlinked template note page (Finsweet "Client-first" text).
- **Hidden template parts** never shown to visitors: slide-out sidebar menu, social links (TW/IG/YT/FB → the template author's Twitter), FAQ block, logo strip, hidden testimonials.
- **Invisible empty links** at the end of each About service paragraph, pointing at the template author's site.

### Changed on purpose
- Footer email link now goes to charlie@lune-studio.co.uk (was example@template.com), as agreed.
- Contact form fields have their own names and linked labels (looks identical).
- 404 "Go Home" goes to `/` (was `/old-home`).
- People who've switched on "reduce motion" on their device get the scroll effects without the easing lag.

### Copied exactly, worth tidying next (agreed to leave until after the migration)
- ~~No menu on phones/tablets~~ — **done 2026-10-15** (see "After the migration" below).
- **Template sample content:** the whole About page ("creative director in Brooklyn", "Sarah…", Spotify/Webflow/Apple/Airtable history, and the story ends mid-sentence); 8 of 10 projects.
- **Tab titles** "… | Booked TyCreated Webflow Template" / "… | Booked @tycreated Webflow Template" on every page except Home.
- **Link previews** for About/Work/Contact show the template author's product image.
- **Headings:** Work and every Category page say "Unique designs at one solid price".
- **"Schedule a call with me → Go to my calendar"** on project pages opens calendly.com's front page, not a booking link (your homepage uses cal.com/lune-studio/free-website).
- **Terms / Privacy** footer links go nowhere (`#`).
- **"Made with ❤️ for the webflow community"** in the footer.
- **Typos / wording:** "I'lll", "my Services".
- **Heading levels** out of order (H1 → H3; two H1s on the homepage).
- **No visible keyboard focus ring** on form fields (the text slides instead), as on the original.

---

## After the migration

### Phone menu — added 2026-10-15
Below 992px the top bar now has a round menu button (right-hand side) that opens a dark panel from the right with Home / Work / About / Contact. It's styled on the template's own menu, which exists in the original's code but was never switched on: numbered items 01–04, "Navigation" heading, panel colour #141a1f, dimmed page behind.
- **Choices made:** the button is the dark circle used by the site's arrow buttons rather than the template's Lune-blue one (the blue appears nowhere else on the site except the Contact button); the top bar hides as you scroll down, as before; **below 992px it now also slides back in when you scroll up** (added at your request, 2026-10-15), so the menu is always in reach. Desktop keeps the original behaviour (shown only near the top).
- **Checked:** opens and closes with the button, a tap outside, Escape, and choosing a page; focus moves into the menu when it opens; the page behind doesn't scroll while it's open; the button is hidden on desktop. Desktop unchanged (homepage 1440px 99.79%); phone/tablet scores unchanged within measurement (homepage 390px 99.90%, 991px 99.55%) — the button is the only visible difference from the original there.

### Template leftovers tidied — 2026-10-15
Decided with you: remove sample projects; rewrite About from facts already on the site; remove the footer's Webflow line and empty links; point the project pages' booking button at cal.com.

- **Projects:** the template's 8 sample projects are gone; CMS & Filtering and Maple Grove remain. The homepage shows both. Branding, Interaction and Web design had only samples, so their buttons and pages are gone; `/category/prototyping` remains. Old addresses (e.g. `/work/greenpoint-studio-wireframes`) now show "Page not found".
- **About:** new heading "Learning web development on real projects" and a "My story" written only from what the site already says (Leicester College, Junior Developer Intern at Lune Studio, free websites with hosting at cost, Lune Studio reviewing the work, the two practice projects). The fake services and job history (Spotify / Webflow / Apple / Airtable) are removed.
- **Footer:** "Charlie Halls © 2026" only.
- **Project pages:** "Want a website like this for your business?" → "Apply for a free website" (cal.com/lune-studio/free-website).
- **Wording:** tab titles now "… | Charlie Halls"; Work heading "All my projects"; category heading "Prototyping projects"; Contact "Let's get to work" / "I'll respond within 48 hours".
- **Link previews:** the template author's preview image is gone.
- **Accessibility:** one main heading per page with section headings beneath (looks identical); form fields show a 3px outline when reached by keyboard — the value Webflow's styles intended but never showed.
- **Page not found:** now in the site's own dark style (was Webflow's white default).
- **Clean-up:** 38 unused photos deleted (66 → 28 files).

**Still template material (needs your own content):**
- **Photos.** Every photo outside your two projects is the template's stock photography — the homepage photo strip and "offer" photos, and the banners. Send your own photos to replace them.
- **Portraits removed (2026-10-15):** the stock portraits on About and Contact are gone; both pages are now two text columns (heading/intro left, story/form right; stacked on phones). A portrait can come back once there is a real photo.
- **Your two projects** list Client and Service as "N/A".

### Footer email fits on phones — 2026-10-15
The footer email now steps down in size (3rem below 992px, 2.25rem below 768px, 1.5rem below 480px — the sizes the template's styles intended but never applied) and is centred if it wraps. On the original, and until now here, "charlie@lune-" ran off the right edge on phones. Checked at 320–1440px: fits on one line from 390px up, wraps neatly at 320px; desktop unchanged.
