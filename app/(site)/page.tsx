import type { Metadata } from "next";
import { AboutIntro } from "@/components/home/AboutIntro";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { HomeHero } from "@/components/home/HomeHero";
import { Offer } from "@/components/home/Offer";
import { ActionBanner } from "@/components/sections/ActionBanner";

const TITLE = "Charlie Halls | Junior Web Developer in Leicester";
const DESCRIPTION =
  "Junior Web Developer Intern at Lune Studio and Web Development student at Leicester College, building free websites for small businesses while gaining real-world experience.";

// Same tags as the original homepage.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutIntro />
      <Offer />
      <ActionBanner
        heading="Think I could help with your website?"
        body={
          <>
            I’m focusing on learning and building the website itself, so all enquiries, project communication and
            client management are handled through Lune Studio.
            <br />
            <br /> They’ll oversee the project, support me throughout and make sure everything is delivered
            professionally and properly.
          </>
        }
        button={{ href: "https://cal.com/lune-studio/free-website", label: "Apply for a free website", newTab: true }}
        image="/images/2aqm52pfb.png"
      />
      <FeaturedWork />
    </>
  );
}
