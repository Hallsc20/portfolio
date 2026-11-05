"use client";

import { useState } from "react";
import { MouseFollow } from "@/components/motion/MouseFollow";
import { NumberDot } from "@/components/ui/NumberDot";
import { CONTACT_EMAIL, FORMSPREE_FORM_ID } from "@/content/site";

const fields = [
  { n: "01", name: "name", label: "What's your name?", placeholder: "Jane Doe", type: "text" },
  { n: "02", name: "email", label: "What's your email?", placeholder: "Jane@example.com", type: "email" },
  { n: "03", name: "phone", label: "What's your phone number?", placeholder: "(555) 555-5555", type: "tel" },
  { n: "04", name: "service", label: "What service do you need?", placeholder: "Web design, Logo design...", type: "text" },
] as const;

// Same look as the original's Webflow inputs: no border, transparent, text slides right on focus.
const fieldClass =
  "block w-full bg-transparent px-10 pt-3 pb-16 align-middle text-[1.25rem] leading-[1.42857] text-white outline-none transition-[padding] focus-visible:outline-3 focus-visible:outline-dim focus-visible:outline-solid duration-[350ms] ease-out-cubic placeholder:text-white/55 focus:pl-12";

type Status = "idle" | "sending" | "sent" | "error" | "not-connected";

/** Five numbered questions and "Send message". Submissions go to Formspree (see content/site.ts). */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_FORM_ID) {
      setStatus("not-connected");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-y border-line px-5 py-48 text-center">
        <div className="text-size-regular">Thank you! Your message has been received!</div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <form onSubmit={submit} className="flex h-full flex-col border-t border-line">
        {[...fields, { n: "05", name: "details", label: "More details", placeholder: "I need help with...", type: "textarea" } as const].map(
          (f) => (
            <MouseFollow
              key={f.name}
              as="div"
              x={1.25}
              y={1.25}
              target="[data-dot]"
              minWidth={992}
              className="group flex flex-col gap-3 border-b border-line pt-16"
            >
              <div className="flex items-center">
                <NumberDot n={f.n} />
                {/* On the original only questions 2–5 are real labels (medium weight, small gap
                    below); question 1 is plain text. All are labels here, styled to match. */}
                <label
                  htmlFor={`contact-${f.name}`}
                  className={`text-size-regular ${f.n === "01" ? "" : "mb-1 block font-medium"}`}
                >
                  {f.label}
                </label>
              </div>
              {f.type === "textarea" ? (
                <textarea
                  id={`contact-${f.name}`}
                  name={f.name}
                  placeholder={f.placeholder}
                  maxLength={5000}
                  className={`${fieldClass} min-h-40`}
                />
              ) : (
                <input
                  id={`contact-${f.name}`}
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  maxLength={256}
                  className={`${fieldClass} h-24`}
                />
              )}
            </MouseFollow>
          ),
        )}
        <input
          type="submit"
          value={status === "sending" ? "Please wait..." : "Send message"}
          disabled={status === "sending"}
          className="mt-11 ml-auto cursor-pointer rounded-full bg-azure px-8 py-[1.4rem] leading-none text-white"
        />
      </form>
      {status === "error" && (
        <div className="mt-3 bg-[#aa1b1b] px-6 py-4">
          <div className="text-size-small">Oops! Something went wrong while submitting the form.</div>
        </div>
      )}
      {status === "not-connected" && (
        <div className="mt-3 bg-[#aa1b1b] px-6 py-4">
          <div className="text-size-small">
            This form isn&apos;t connected yet. Please email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
              {CONTACT_EMAIL}
            </a>{" "}
            instead.
          </div>
        </div>
      )}
    </div>
  );
}
