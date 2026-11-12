# Charlie Halls — Portfolio

> I'm Charlie. I'm building my portfolio by creating free websites for small businesses.

This site is being **rebuilt in code from the existing Webflow site** (charlie-halls.webflow.io). The look stays the same; the difference is that you own the code and it no longer depends on Webflow. Progress is tracked in `MIGRATION.md`.

## Brand Identity
- **Personality:** calm, dark and photographic. Big friendly headlines, plenty of space, photos doing the talking.
- **Colours:** near-black background (`#0f1316`), white text, dark blue-grey outlines (`#1a242c`). Lune Studio blue (`#5ccdfd`) appears only on the Contact form's send button.
- **Font:** Plus Jakarta Sans (the same font files as the Webflow site).
- See every colour, text size and button at **/style-guide** in the preview.

## Pages
- **Style guide** (`/style-guide`): a reference page showing the design system. Not linked from the site; search engines are told to ignore it.
- **Homepage** (`/`) — the big "I'm Charlie…" intro with a strip of photos that slides sideways as you scroll; the "About me" paragraph; the three-step offer (free website · supported by Lune Studio · limited availability) with a photo that stays on screen; a "Think I could help…" box over a dark photo linking to your cal.com booking page; and four featured projects with the category buttons.
- **About** (`/about`): "Learning web development on real projects" on the left (stays in view as you scroll on desktop), and "My story" on the right (Leicester College, your internship at Lune Studio, the free-website offer, your two practice projects) with a "Get a free website" link. *Check the wording: it was written from what the site already said about you.*
- **College** (`/college`): "What I'm learning at college" on the left (stays in view on desktop). On the right: your course details (T Level in Digital Software Development, Leicester College, 2025–2027), the languages you've learned (HTML, CSS, JavaScript, Python, and PHP marked "learning now"), the 11 topics the course covers, each in one plain sentence, and a "See my work" link. Below that, **"From my coursework: Planning and building"** shows your college work: four pictures of **TechZone Electronics** (the five-page group website: home, promotions and products pages, and the JavaScript for the search and accordions, taken from your project report's screenshots), then your planning work redrawn from your Word documents and diagrams: four pictures from the ToKo Fitness brief (sitemap, empathy map, user stories, registration data flow diagram) and the requirements table from your Netheret IT Support proposal. It's in the top bar and the phone menu, and the About page links to it. *The topics are the T Level's official ones in plain words. Change any that don't match your lessons.*
- **Work** (`/work`): your two newest projects as small cards, "Deep dive into my recent projects", a photo band, then "All my projects" with the category buttons.
- **Category pages** (`/category/prototyping`, `/category/web-design`): "Prototyping projects", "Web design projects". Only categories with projects get a page and a button.
- **Project pages** (`/work/oakfield-signs-and-graphics`, `/work/cms-filtering-practise`, `/work/maple-grove-therapy-practise`): headline, Client / Service / Year, two photos, introduction, banner photo, "What I did" with the project's photos, "Want a website like this for your business?" (links to your cal.com booking page), and two of your other projects.
- **Contact** (`/contact`): "Let's get to work" on the left, the five-question form on the right. Messages are sent by Formspree (form `mrpqbkal`) to charlie@lune-studio.co.uk.
- **Page not found**: shown for any address that doesn't exist, in the site's own dark style.

## Components
- **Button**: rounded outline button (e.g. "Learn about me", the category filters).
- **Arrow link**: round dark button with an arrow that slides on hover, followed by text (e.g. "Get a free website").
- **Tag**: small capitals label on project cards (e.g. "WEB DESIGN").
- **Top bar** (`components/layout/Navbar.tsx`): logo + About / Work / Contact. Hides once you scroll down. On desktop it comes back at the top of the page; on tablets and phones it also slides back in as soon as you scroll up.
- **Phone menu** (`components/layout/MobileMenu.tsx`): on tablets and phones the links are replaced by a round menu button. It opens a dark panel from the right with Home / Work / About / Contact (numbered 01–04; the page you're on shows a dot). Closes with the X, a tap outside, the Escape key, or choosing a page.
- **Footer** (`components/layout/Footer.tsx`): "Connect with me" and your email, then "Charlie Halls © 2026". It's revealed underneath the page as you reach the end.
- **Project card** (`components/work/ProjectCard.tsx`): photo, category tag, project name and arrow.
- **Work card** (`components/work/WorkCard.tsx`): the smaller cards on the Work page and under "Find another project…".
- **Project listing** (`components/work/ProjectListing.tsx`): heading + category buttons + project grid (Home, Work, Category pages).
- **Call-to-action box** (`components/sections/ActionBanner.tsx`) and **photo band** (`components/sections/PhotoBand.tsx`).
- **Contact form** (`components/contact/ContactForm.tsx`).

## Recent Changes
- 2026-10-15: Surveyed the Webflow site and wrote `MIGRATION.md` (what's there, what can't come across).
- 2026-10-15: Set up the design system: colours, Plus Jakarta Sans font, text sizes that scale with the window, spacing, buttons, and the `/style-guide` page. Removed the Ship Studio starter fonts.
- 2026-10-15: Built the homepage, the top bar and the footer, and moved your 10 projects and 4 categories into `content/projects.ts` (images in `public/images/`). The footer email link now goes to your real address instead of the template's placeholder.

- 2026-10-15: Built the About, Work, Category, Project, Contact and "Page Not Found" pages, so every page of the Webflow site is now rebuilt and checked against it (see `MIGRATION.md`). Added your "CHARLIE" browser-tab icon and the link-preview tags.
- 2026-10-15: Added a menu for tablets and phones (the Webflow site had none). It's styled on the template's own hidden menu. On tablets and phones the top bar now also slides back in when you scroll up.
- 2026-10-15: Tidied up the template leftovers: removed the 8 sample projects (and the Branding, Interaction and Web design categories, which only had samples), rewrote the About page from your real details, removed the footer's "Made with ❤️ for the webflow community" and empty Terms/Privacy links, pointed the project pages' booking button at your cal.com link, fixed the tab titles ("… | Charlie Halls"), typos and headings, gave form fields a visible keyboard outline, and restyled the "Page not found" page. Unused photos were deleted.
- 2026-10-15: Removed the template's stock portraits from the About and Contact pages (visitors would have taken them for you); both pages are now two text columns. Send a photo of yourself to bring a portrait back.
- 2026-10-15: The footer email now shrinks to fit on tablets and phones (it used to run off the edge on phones, as it did on the Webflow site).
- 2026-10-15: Added the Oakfield Signs & Graphics website (your Lune Studio work-experience brief) as a project, in a new "Web design" category. Its photos are screenshots of the Oakfield site from your oakfield project folder. It's first on the Work page and on the homepage, which now shows your two newest projects (Oakfield, CMS & Filtering).
- 2026-10-15: The Oakfield project page now says plainly that it was a fake brief: headline "A full website for a made-up sign maker, from a practice brief", Client "Fictional business (practice brief)", and the introduction opens "Oakfield is not a real company".
- 2026-11-05: Put the site on GitHub (https://github.com/Hallsc20/portfolio) and published it at https://hallsc20.github.io/portfolio/. Pushing changes to GitHub updates the live site by itself. The Ship Studio preview works as before. On the live site, photos are served at their original size because GitHub Pages can't resize them. The site asks search engines not to list it until you're ready to launch.
- 2026-11-05: Fixed two spacing problems on the About page. On tablets and phones, "My story" now lines up with the headline instead of being indented. On desktop, the darker stripe above the footer is gone.
- 2026-11-05: Fixed the About headline running into the second column on small desktop and laptop windows (about 992–1250px wide). The headline now shrinks just enough to fit there, and is the usual size on larger screens.
- 2026-11-12: Replaced every template stock photo (the fashion photos in the homepage strip, the two "offer" photos, the "PreLaw" laptop behind "Think I could help…", and the photo band on the Work and project pages) with new images made from your own projects: Oakfield, Maple Grove and the film library, shown in browser windows and phones on coloured backgrounds. The Lune Studio step shows real code from the Oakfield site next to the finished page. The old stock photos were deleted. The new files are the `work-…`, `offer-…`, `cta-project-wall` and `band-recent-work` pictures in `public/images/`.
- 2026-11-12: Gave all three project pages a new, matching set of pictures in the same style: the project card, the two photos under the headline, the wide banner and the "What I did" pictures. Each project uses its own colours (Oakfield navy and yellow, Maple Grove sage and cream, the film library charcoal and Lune blue). The raw screenshots they replaced were deleted. The new files are named `project-oak-…`, `project-mg-…` and `project-film-…` in `public/images/`.
- 2026-11-12: Added the College page (`/college`) about your T Level, and put "College" in the top bar and phone menu. The About page now names the course and links to it.
- 2026-11-12: Added "From my coursework" to the College page. Your college folder had documents and diagrams but no pictures, so the strongest pieces were redrawn as clean visuals in your own words, shortened to fit (`college-…` pictures in `public/images/`). Nothing private (names, logins) was used.
- 2026-11-12: Added TechZone Electronics (your group website) to the College page, using the screenshots in your project report. The browser tabs were cropped off because they showed classmates' names, and classmates aren't named on the site. Corrected the gym brief's name to ToKo Fitness. The Precious Primates slides weren't used (animal photos from the web, not your own work) and neither were your marks.
- 2026-11-12: Connected the Contact form to Formspree. A test message was sent and accepted.

## Where the Site Lives
- **Live site:** https://hallsc20.github.io/portfolio/
- **Code:** https://github.com/Hallsc20/portfolio (public, so anyone can read it)
- **To update the live site:** ask Claude to push your changes to GitHub. It rebuilds and goes live a couple of minutes later.
- **Hidden from search engines:** the site is a draft for now, so it asks Google and others not to list it. Anyone with the link can still open it. When you're ready to launch, ask Claude to remove the "robots" line from `app/layout.tsx`.
- **Pictures:** if you add a plain picture (not one using the site's usual image component), its address needs the `/portfolio` folder in front. Claude handles this.

## How to Customize
- **Colours, text sizes, spacing:** all live in `app/globals.css` (top section). Change a value there and it updates everywhere.
- **Fonts:** `app/layout.tsx` loads Plus Jakarta Sans from `app/fonts/`.
- **To see the system:** open `/style-guide` in the preview.
- **Projects:** each project's text and photos are in `content/projects.ts`. To add a project, copy one of the two entries and change it (put its photos in `public/images/`). To add a category, add it to `categories` with its projects listed; its button and page appear automatically.
- **Contact form:** messages go through Formspree (free plan: 50 a month) to the email set up in your Formspree account. The form's ID is in `content/site.ts` (`FORMSPREE_FORM_ID`). To change where messages go, change it in your Formspree account, not in the code.
- **Which projects show where:** `content/projects.ts`: `homepageProjects` (homepage), `newestProjects` (top of the Work page and "Find another project…"), and each category's `projects` list.
- **College page coursework:** the two briefs, their descriptions and pictures are listed at the top of `components/college/Coursework.tsx`.
- **College page:** the course details, languages and topics are lists at the top of `components/college/CollegeContent.tsx`. When you finish PHP, remove `now: true` from it; to add a language, add a line like `{ name: "SQL" },`.
- **Homepage text:** each section is its own file in `components/home/` (e.g. the three offer steps are at the top of `Offer.tsx`).
