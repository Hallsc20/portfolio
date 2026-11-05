import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { pageMeta } from "@/content/metadata";

export const metadata: Metadata = pageMeta("Contact | Charlie Halls");

/**
 * Intro on the left (stays in view on desktop), form on the right; stacked below 992px.
 * The template's stock portrait was removed on 2026-10-15 until there's a real photo.
 */
export default function ContactPage() {
  return (
    <section className="mb-[4.5rem] bg-gradient-to-b from-ink/0 to-night">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="grid grid-cols-2 gap-20 pt-40 pb-36 max-lg:grid-cols-1 max-lg:gap-12 max-lg:pb-12 max-md:pt-32">
            <div className="max-w-[30rem] self-start lg:sticky lg:top-32">
              <div className="mb-stack-md">
                <h1 className="heading-xlarge">Let&apos;s get to work</h1>
              </div>
              <p className="text-size-large">Fill out the form and I&apos;ll respond within 48 hours.</p>
            </div>
            <div id="scroll" className="flex w-full max-w-[45rem] flex-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
