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
- **Work** (`/work`): your two newest projects as small cards, "Deep dive into my recent projects", a photo band, then "All my projects" with the category buttons.
- **Category pages** (`/category/prototyping`, `/category/web-design`): "Prototyping projects", "Web design projects". Only categories with projects get a page and a button.
- **Project pages** (`/work/oakfield-signs-and-graphics`, `/work/cms-filtering-practise`, `/work/maple-grove-therapy-practise`): headline, Client / Service / Year, two photos, introduction, banner photo, "What I did" with the project's photos, "Want a website like this for your business?" (links to your cal.com booking page), and two of your other projects.
- **Contact** (`/contact`): "Let's get to work" on the left, the five-question form on the right. **The form isn't connected yet**: it needs a Formspree ID (see "How to Customize").
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
- **Connect the Contact form:** create a free form at formspree.io that emails charlie@lune-studio.co.uk, then paste its ID into `content/site.ts` (`FORMSPREE_FORM_ID`).
- **Which projects show where:** `content/projects.ts`: `homepageProjects` (homepage), `newestProjects` (top of the Work page and "Find another project…"), and each category's `projects` list.
- **Homepage text:** each section is its own file in `components/home/` (e.g. the three offer steps are at the top of `Offer.tsx`).
