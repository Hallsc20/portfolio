import Image from "next/image";

type Piece = { src: string; alt: string };
type Brief = { name: string; summary: string; pieces: Piece[] };

/**
 * Coursework from Charlie's college folders (received 2026-11-12).
 * TechZone: screenshots from his group's project report, cropped to the page (the
 * browser tabs showed classmates' names) and framed. Classmates are not named.
 * ToKo and Netheret: the folder held Word documents and diagrams, not pictures, so each
 * image is a redrawing of his own work in his own words (shortened).
 */
const briefs: Brief[] = [
  {
    name: "TechZone Electronics",
    summary:
      "A five-page website for a made-up electronics shop, built in HTML, CSS and JavaScript as a group project. It has a product search and fold-out accordions, both written in JavaScript.",
    pieces: [
      { src: "/images/college-techzone-home.jpg", alt: "TechZone home page: a dark hero with “Upgrade Your Digital Life” over a gaming desk setup." },
      { src: "/images/college-techzone-promo.jpg", alt: "TechZone promotions page: “High Quality Devices” with a 30% off sale banner." },
      { src: "/images/college-techzone-products.jpg", alt: "TechZone products page: a search bar and a list of computers, each with a price and a Purchase button." },
      { src: "/images/college-techzone-code.jpg", alt: "The site’s JavaScript, with comments: the accordion toggle and the product search function." },
    ],
  },
  {
    name: "ToKo Fitness",
    summary:
      "Planning a website for a gym where customers can book personal trainers: who uses it, what they need, and how the pages and data fit together. Redrawn from my college documents.",
    pieces: [
      { src: "/images/college-toko-sitemap.jpg", alt: "Sitemap: Home Page leads to Login, Register, Booking, Dashboard and Blogs & Articles, with the fields on the Login and Register pages listed." },
      { src: "/images/college-toko-empathy.jpg", alt: "Empathy map for a customer: what they say, think, do and feel, such as “I hope my data is secure”." },
      { src: "/images/college-toko-stories.jpg", alt: "Three user stories with acceptance criteria, for a visually impaired customer, the client and an employee." },
      { src: "/images/college-toko-dataflow.jpg", alt: "Data flow diagram for registration: the customer registers, the password is hashed and saved to the login database, and the email is checked." },
    ],
  },
  {
    name: "Netheret IT Support",
    summary:
      "A project proposal for a staff system at an IT support company, so employees can manage their support requests, schedule on-site jobs and share a knowledge base. Redrawn from my proposal document.",
    pieces: [
      { src: "/images/college-netheret-proposal.jpg", alt: "Table of functional requirements with priorities: log in, managing support requests, scheduling on-site jobs and accessibility." },
    ],
  },
];

/** "From my coursework": each brief's name and summary, then its pictures in a 2-column grid. */
export function Coursework() {
  return (
    <section className="bg-night">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="py-section">
            <div className="mb-stack-lg flex flex-col gap-6">
              <div className="text-eyebrow">From my coursework</div>
              <h2 className="heading-large max-w-[40rem] tracking-[-0.01rem]">Planning and building</h2>
              <p className="text-size-regular max-w-[36rem]">
                A website I built with my class group, and the planning the course has us do before any code gets
                written: researching the people who’ll use a site, writing down what it needs to do, and mapping out how
                it works.
              </p>
            </div>

            <div className="flex flex-col gap-24 max-md:gap-16">
              {briefs.map((b) => (
                <div key={b.name} className="flex flex-col gap-8 border-t border-line pt-10">
                  <div className="grid grid-cols-[1fr_1.4fr] gap-x-16 gap-y-4 max-lg:grid-cols-1">
                    <h3 className="heading-small tracking-[-0.01rem]">{b.name}</h3>
                    <div className="flex flex-col gap-8">
                      <p className="text-size-regular max-w-[36rem]">{b.summary}</p>
                      {/* A single picture sits under the summary instead of alone in a half-empty grid. */}
                      {b.pieces.length === 1 && (
                        <Image
                          src={b.pieces[0].src}
                          alt={b.pieces[0].alt}
                          width={1600}
                          height={1200}
                          sizes="(max-width: 991px) 95vw, 55vw"
                          className="h-auto w-full"
                        />
                      )}
                    </div>
                  </div>
                  {b.pieces.length > 1 && <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
                    {b.pieces.map((p) => (
                      <Image
                        key={p.src}
                        src={p.src}
                        alt={p.alt}
                        width={1600}
                        height={1200}
                        sizes="(max-width: 767px) 95vw, 45vw"
                        className="h-auto w-full"
                      />
                    ))}
                  </div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
