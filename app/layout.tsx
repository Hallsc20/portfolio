import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";

// Plus Jakarta Sans — the same open-licensed files the original site serves.
const jakarta = localFont({
  src: [
    { path: "./fonts/PlusJakartaSans-ExtraLight.woff", weight: "200", style: "normal" },
    { path: "./fonts/PlusJakartaSans-ExtraLightItalic.woff", weight: "200", style: "italic" },
    { path: "./fonts/PlusJakartaSans-Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/PlusJakartaSans-LightItalic.woff", weight: "300", style: "italic" },
    { path: "./fonts/PlusJakartaSans-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/PlusJakartaSans-Italic.woff", weight: "400", style: "italic" },
    { path: "./fonts/PlusJakartaSans-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/PlusJakartaSans-MediumItalic.woff", weight: "500", style: "italic" },
    { path: "./fonts/PlusJakartaSans-Bold.woff", weight: "700", style: "normal" },
    { path: "./fonts/PlusJakartaSans-BoldItalic.woff", weight: "700", style: "italic" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

// Each page sets its own title and link-preview tags (see content/metadata.ts).
export const metadata: Metadata = {
  title: "Charlie Halls | Junior Web Developer in Leicester",
  // Draft site: tells Google and other search engines not to list it.
  // Delete this line when the site is ready to launch.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
