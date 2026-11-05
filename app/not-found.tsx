import { Button } from "@/components/ui/Button";

/**
 * "Page Not Found". The Webflow site used Webflow's unstyled white default here; since
 * 2026-10-15 it uses the site's own look.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 text-white">
      <div className="flex max-w-[30rem] flex-col items-center gap-8 text-center">
        <div className="text-eyebrow">Error 404</div>
        <h1 className="heading-large tracking-[-0.01rem]">Page not found</h1>
        <p className="text-size-regular">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Button href="/" variant="light">
          Go to the homepage
        </Button>
      </div>
    </main>
  );
}
