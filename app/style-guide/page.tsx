import type { Metadata } from "next";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false },
};

const colors = [
  { name: "ink", value: "#0f1316", role: "Page background", className: "bg-ink" },
  { name: "night", value: "#12171b", role: "Footer, end of section gradients", className: "bg-night" },
  { name: "line", value: "#1a242c", role: "Borders, button outlines, arrow circles", className: "bg-line" },
  { name: "slate", value: "#617481", role: "Button outline on hover", className: "bg-slate" },
  { name: "dim", value: "#627275", role: "Form field focus", className: "bg-dim" },
  { name: "azure", value: "#5ccdfd", role: "Lune Studio blue — Contact submit button", className: "bg-azure" },
  { name: "white", value: "#ffffff", role: "Headings, links", className: "bg-white" },
  { name: "white / 85%", value: "rgba(255,255,255,.85)", role: "Paragraph text", className: "bg-white/85" },
  { name: "white / 70%", value: "rgba(255,255,255,.7)", role: "Footer small print", className: "bg-white/70" },
  { name: "white / 50%", value: "rgba(255,255,255,.5)", role: "Light button outline, tag underline", className: "bg-white/50" },
];

const type = [
  { cls: "heading-xlarge", spec: "4.5rem / 1.25 / 500 → 3.5 → 2.875 → 2.75", sample: "I’m Charlie. I’m building my portfolio" },
  { cls: "heading-large", spec: "3.25rem / 1.45 / 500 → 3 → 2.5", sample: "Think I could help with your website?" },
  { cls: "heading-medium", spec: "2.75rem / 1.35 / 500 → 2.25 → 2", sample: "I’ll build your website for free." },
  { cls: "heading-small", spec: "1.75rem / 1.4 / 500 → 1.25", sample: "Spotify, Senior Designer" },
  { cls: "text-statement", spec: "3rem / 1.5 / 400 → 2.5 → 2.25 → 2", sample: "I’m a Web Development student" },
  { cls: "text-email", spec: "4rem / 1.5 / 500 (all widths)", sample: "charlie@lune-studio.co.uk" },
  { cls: "text-size-xlarge", spec: "2.25rem / 1.5 → 2 → 1.75", sample: "After doing some research and brainstorming" },
  { cls: "text-size-large", spec: "1.75rem / 1.5 → 1.5", sample: "Greenpoint wireframes" },
  { cls: "text-size-regular", spec: "1.25rem / 1.65", sample: "I’m now looking to build my portfolio by creating websites for small businesses." },
  { cls: "text-size-small", spec: "1rem / 1.65", sample: "Navigation" },
  { cls: "text-eyebrow", spec: "0.75rem / 1.5, 2px tracking, uppercase", sample: "About me - Charlie Halls" },
];

const spacing = [
  { name: "page-padding", spec: "7vw sides (box capped at 93vw) → 3rem → 1.5rem" },
  { name: "max-w-page", spec: "94rem content width" },
  { name: "py-section", spec: "9rem → 6rem → 4rem" },
  { name: "py-section-xl", spec: "12rem → 8rem → 4.5rem" },
  { name: "mb-stack-lg", spec: "3.25rem → 2.5rem → 1.5rem" },
  { name: "mb-stack-md", spec: "2.5rem → 1.5rem → 1.25rem" },
  { name: "mb-stack-sm", spec: "1rem" },
];

const motion = [
  { name: "ease-out-cubic", spec: "cubic-bezier(.215,.61,.355,1) · 400ms — button and tag hover" },
  { name: "ease-out-quint", spec: "cubic-bezier(.23,1,.32,1) · 500ms — arrow slide" },
  { name: "ease-out-quad", spec: "cubic-bezier(.25,.46,.45,.94) · 500ms — top bar show/hide, timeline dots" },
  { name: "ease-out-back", spec: "cubic-bezier(.175,.885,.32,1.275) · 500ms — form number → dot" },
  { name: "page fade-in", spec: "page fades in over 400ms after a 500ms pause" },
  { name: "scroll parallax", spec: "photos drift −7% → 7% at 1.1× scale as they pass" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-16">
      <h2 className="text-eyebrow mb-10 font-normal">{title}</h2>
      {children}
    </section>
  );
}

export default function StyleGuide() {
  return (
    <main className="page-padding">
      <div className="mx-auto max-w-page py-24">
        <p className="text-eyebrow mb-4">Charlie Halls · design system</p>
        <h1 className="heading-xlarge mb-6">Style guide</h1>
        <p className="text-size-regular mb-16 max-w-[40rem]">
          Every colour, text style, spacing step and component the site is built from, read from the original
          Webflow site. Text sizes are in rem, and the base size grows with the window (≈15px on a phone, 16px at
          1440px, 18px at 1920px), so everything scales together. Resize the window to see each style step down.
        </p>

        <Section title="Colour">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
            {colors.map((c) => (
              <div key={c.name}>
                <div className={`${c.className} mb-3 h-24 rounded-sm shadow-[inset_0_0_0_1px_var(--color-line)]`} />
                <div className="font-medium">{c.name}</div>
                <div className="text-[0.875rem] text-white/70">{c.value}</div>
                <div className="text-[0.875rem] text-white/70">{c.role}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Typeface">
          <div className="text-size-large">Plus Jakarta Sans</div>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-size-regular">
            <span className="font-extralight">200 ExtraLight</span>
            <span className="font-light">300 Light</span>
            <span className="font-normal">400 Regular</span>
            <span className="font-medium">500 Medium</span>
            <span className="font-bold">700 Bold</span>
            <span className="italic">400 Italic</span>
          </div>
        </Section>

        <Section title="Type scale">
          <div className="flex flex-col gap-12">
            {type.map((t) => (
              <div key={t.cls}>
                <div className="mb-2 text-[0.875rem] text-white/70">
                  <span className="text-white">{t.cls}</span> · {t.spec}
                </div>
                <div className={t.cls}>{t.sample}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Spacing & layout">
          <div className="flex flex-col gap-4">
            {spacing.map((s) => (
              <div key={s.name} className="grid grid-cols-[12rem_1fr] gap-4 max-md:grid-cols-1 max-md:gap-0">
                <span className="font-medium">{s.name}</span>
                <span className="text-white/70">{s.spec}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-white/70">
            Breakpoints: ≤ 991px tablet · ≤ 767px phone landscape · ≤ 479px phone (styles step down, desktop first).
          </div>
        </Section>

        <Section title="Buttons & links">
          <div className="flex flex-wrap items-center gap-6">
            <Button href="/style-guide" current>
              All
            </Button>
            <Button href="/style-guide">Prototyping</Button>
            <Button href="/style-guide" variant="light">
              Learn about me
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-10">
            <ArrowLink href="/style-guide" size="large">
              Get a free website
            </ArrowLink>
            <ArrowLink href="/style-guide">Claim your free website</ArrowLink>
          </div>
          <div className="mt-10 flex gap-6">
            <Tag href="/style-guide">Web design</Tag>
            <Tag href="/style-guide">Interaction</Tag>
          </div>
        </Section>

        <Section title="Motion">
          <div className="flex flex-col gap-4">
            {motion.map((m) => (
              <div key={m.name} className="grid grid-cols-[12rem_1fr] gap-4 max-md:grid-cols-1 max-md:gap-0">
                <span className="font-medium">{m.name}</span>
                <span className="text-white/70">{m.spec}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
