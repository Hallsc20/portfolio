import { ArrowLink } from "@/components/ui/ArrowLink";

/** Course facts. From what Charlie gave on 2026-11-12 (course code Q03144). */
const facts = [
  { label: "Course", value: "T Level in Digital Software Development" },
  { label: "College", value: "Leicester College" },
  { label: "Years", value: "2025 – 2027" },
];

/** Languages Charlie has learned on the course; `now` marks the one in progress. */
const languages = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "PHP", now: true },
];

/** The T Level's core topics, in plain words. */
const topics = [
  {
    title: "Problem solving",
    text: "Breaking a problem into smaller steps and planning a solution before writing any code.",
  },
  {
    title: "Programming",
    text: "Writing, reading and fixing code, from the basics up to complete programs.",
  },
  {
    title: "Testing",
    text: "Checking that software does what it should, and finding and fixing what doesn’t.",
  },
  {
    title: "Data",
    text: "How data is collected, stored, organised and used, and how to keep it accurate.",
  },
  {
    title: "Security",
    text: "The common threats to websites and systems, and how to protect people and their data.",
  },
  {
    title: "Laws and regulations",
    text: "Data protection (GDPR), accessibility and copyright, and what they mean for a website.",
  },
  {
    title: "Digital environments",
    text: "How computers, networks and cloud services fit together and talk to each other.",
  },
  {
    title: "Planning",
    text: "Working out what a project needs, setting priorities and managing time.",
  },
  {
    title: "Tools and communication",
    text: "Working as part of a team, and explaining technical ideas to people who aren’t technical.",
  },
  {
    title: "Business context",
    text: "How digital work supports a business and its customers.",
  },
  {
    title: "New technology",
    text: "Emerging technology and the effect it has on people, businesses and society.",
  },
];

/**
 * Intro on the left (stays in view on desktop), the course on the right; stacked below
 * 992px. Same layout as the About page.
 */
export function CollegeContent() {
  return (
    <section className="bg-gradient-to-b from-ink/0 to-night">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="grid grid-cols-2 gap-x-16 pt-40 pb-36 max-lg:grid-cols-1 max-lg:gap-y-16 max-lg:pb-24 max-md:pt-32 max-md:pb-16">
            <div className="self-start lg:sticky lg:top-32">
              <div className="mb-stack-md">
                <h1 className="heading-xlarge lg:text-[length:min(4.5rem,5.6vw)]">What I’m learning at college</h1>
              </div>
              <p className="text-size-large max-w-[30rem]">
                I’m in the second year of a T Level in Digital Software Development at Leicester College, finishing in
                2027.
              </p>
            </div>

            <div className="mx-auto flex w-full max-w-[30rem] flex-col gap-20 lg:pt-4 max-lg:mx-0 max-md:gap-14">
              {/* The course */}
              <div className="flex flex-col gap-10 max-md:gap-8">
                <div className="text-eyebrow">The course</div>
                <dl className="flex flex-col">
                  {facts.map((f) => (
                    <div key={f.label} className="flex justify-between gap-6 border-b border-line py-4 first:pt-0">
                      <dt className="text-size-small text-white/70">{f.label}</dt>
                      <dd className="text-size-small text-right">{f.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-size-regular">
                  A T Level is a two-year course that mixes classroom learning with time working in the industry. My
                  second year focuses on software development.
                </p>
              </div>

              {/* Languages */}
              <div className="flex flex-col gap-8">
                <h2 className="heading-small tracking-[-0.01rem]">Languages I’ve learned</h2>
                <ul className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <li
                      key={l.name}
                      className="rounded-full px-5 py-2.5 text-[0.875rem] shadow-[inset_0_0_0_1px_var(--color-line)]"
                    >
                      {l.name}
                      {l.now && <span className="text-white/55"> · learning now</span>}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div className="flex flex-col gap-8">
                <h2 className="heading-small tracking-[-0.01rem]">What the course covers</h2>
                <ol className="flex flex-col">
                  {topics.map((t, i) => (
                    <li key={t.title} className="flex gap-6 border-t border-line py-6 last:border-b">
                      <span className="text-eyebrow w-6 shrink-0 pt-[0.35rem]">{String(i + 1).padStart(2, "0")}</span>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-size-regular font-medium text-white">{t.title}</h3>
                        <p className="text-size-small">{t.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-col gap-6">
                <p className="text-size-regular">
                  Alongside the course, I put what I learn into practice on real websites as a Junior Developer Intern
                  at Lune Studio.
                </p>
                <ArrowLink href="/work">See my work</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
