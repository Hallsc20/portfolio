import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

/**
 * The page shell shared by every page: the content sits on a layer above the footer
 * so the footer is uncovered at the end, and the whole page fades in after load.
 */
export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-ink">
      <main className="animate-page-in">
        <div className="flex w-full flex-col">
          <div className="relative z-10 flex flex-1 flex-col bg-ink text-white">
            <Navbar />
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
