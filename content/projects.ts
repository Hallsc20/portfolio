// Projects and categories. Originally carried over from the Webflow CMS; edit by hand.
// Order matters: it is the order the Work page lists them in.
// The template's 8 sample projects were removed on 2026-10-15 (see MIGRATION.md).

export type Category = {
  slug: string;
  name: string;
  /** The order this category's page lists its projects in (differs from the Work page). */
  projects: string[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  thumbnail: string;
  headline: string;
  client: string;
  service: string;
  year: string;
  heroImages: string[];
  introduction: string;
  bannerImage: string;
  /** Stacked at their natural shape in "What I did". */
  showcaseImages: { src: string; width: number; height: number }[];
  whatIDid: string;
};

/** In the order the category filter buttons show them. */
export const categories: Category[] = [
  {
    "slug": "prototyping",
    "name": "Prototyping",
    "projects": [
      "cms-filtering-practise",
      "maple-grove-therapy-practise"
    ]
  },
  {
    "slug": "web-design",
    "name": "Web design",
    "projects": [
      "oakfield-signs-and-graphics"
    ]
  }
];

export const projects: Project[] = [
  {
    "slug": "oakfield-signs-and-graphics",
    "name": "Oakfield Signs & Graphics (Practise)",
    "category": "web-design",
    "thumbnail": "/images/oakfield-card-v2.jpg",
    "headline": "A full website for a made-up sign maker, from a practice brief",
    "client": "Fictional business (practice brief)",
    "service": "Website design and build",
    "year": "2026",
    "heroImages": [
      "/images/oakfield-home.jpg",
      "/images/oakfield-our-work.jpg"
    ],
    "introduction": "Oakfield is not a real company: this was a fake brief set by Lune Studio for my work experience. The job was a website for a made-up sign maker in Market Harborough, built to get local businesses to ring or email for a quote within a minute of landing.",
    "bannerImage": "/images/oakfield-banner.jpg",
    "showcaseImages": [
      {
        "src": "/images/oakfield-phone-home.jpg",
        "width": 780,
        "height": 1688
      },
      {
        "src": "/images/oakfield-business-signs.jpg",
        "width": 1440,
        "height": 900
      },
      {
        "src": "/images/oakfield-project-page.jpg",
        "width": 1440,
        "height": 900
      },
      {
        "src": "/images/oakfield-contact.jpg",
        "width": 1440,
        "height": 900
      }
    ],
    "whatIDid": "I built the site from the brief: a homepage, separate pages for business signs, vehicle livery and sign manufacturing, a gallery of their work you can filter by type with a page for every job, plus About, Contact, a privacy page and a 404 page. I wrote the copy for the service tiles, sign groups, FAQs, van comparison table, team and portfolio, and gave every page its own title and Google description. The phone number and a quote form are within reach on every page, including on phones."
  },
  {
    "slug": "maple-grove-therapy-practise",
    "name": "Maple Grove Therapy (Practise)",
    "category": "prototyping",
    "thumbnail": "/images/984a185b-8d7e-4371-9d03-a311f88af20f1.png",
    "headline": "An Introductory Template to learn the basics of Webflow",
    "client": "N/A",
    "service": "N/A",
    "year": "2026",
    "heroImages": [
      "/images/mgt-1-edit.jpg",
      "/images/mgt-2-editjpg.jpg"
    ],
    "introduction": "This was a template that I used alongside a fake project brief in order to introduce myself to Webflow",
    "bannerImage": "/images/woman-playing-with-child-2.jpg",
    "showcaseImages": [
      {
        "src": "/images/984a185b-8d7e-4371-9d03-a311f88af20f1.png",
        "width": 412,
        "height": 627
      },
      {
        "src": "/images/services.png",
        "width": 1536,
        "height": 1024
      },
      {
        "src": "/images/woman-playing-with-child-3.png",
        "width": 1254,
        "height": 1254
      }
    ],
    "whatIDid": "I transformed an existing physiotherapy Webflow template into a bespoke website for Maple Grove Therapy. I updated the branding, typography, imagery, navigation and written content to create a warm and professional paediatric occupational therapy website. I also redesigned the service, team, testimonial, FAQ and contact sections, introduced custom visual assets, and refined the responsive experience. Throughout the project, I focused on accessibility, clear communication, reusable Webflow components and creating a reassuring experience for parents and professionals."
  },
  {
    "slug": "cms-filtering-practise",
    "name": "CMS & Filtering (Practise)",
    "category": "prototyping",
    "thumbnail": "/images/cms-and-filter-practice.jpg",
    "headline": "CMS & Filtering Practise",
    "client": "N/A",
    "service": "N/A",
    "year": "2026",
    "heroImages": [
      "/images/film-library.jpg",
      "/images/cms.jpg"
    ],
    "introduction": "Practising more advanced areas of Webflow",
    "bannerImage": "/images/film-banner.jpg",
    "showcaseImages": [
      {
        "src": "/images/cms.jpg",
        "width": 2428,
        "height": 1160
      },
      {
        "src": "/images/film-card.jpg",
        "width": 320,
        "height": 565
      }
    ],
    "whatIDid": "I used Webflow's built-in CMS to create an easily expandable, modular library of some of my favourite movies, and used Finsweet's Filter to allow the user to sort the films by genre."
  }
];

/** The projects featured on the homepage, in the order shown there (keep an even number: the grid has two columns). */
export const homepageProjects = ["oakfield-signs-and-graphics","cms-filtering-practise"];

/**
 * Newest first. Webflow uses this order for the top of the Work page (first two) and for
 * "Find another project…" (first two that aren't the page you're on). Only the start of
 * the order is visible on the live site, which is all those two places need.
 */
export const newestProjects = ["oakfield-signs-and-graphics","cms-filtering-practise","maple-grove-therapy-practise"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
