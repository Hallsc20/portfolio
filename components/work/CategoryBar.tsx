import { Button } from "@/components/ui/Button";
import { categories } from "@/content/projects";

/** "All" + one pill per category. `current` is the category slug, or "all" on /work. */
export function CategoryBar({ current }: { current?: string }) {
  return (
    <div className="flex items-center justify-between max-md:flex-col-reverse max-md:items-start max-md:gap-10">
      <div className="flex items-start gap-4 max-md:gap-2">
        <Button href="/work" current={current === "all"}>
          All
        </Button>
        <div className="flex flex-wrap gap-4 max-md:gap-2">
          {categories.map((c) => (
            <Button key={c.slug} href={`/category/${c.slug}`} current={current === c.slug}>
              {c.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
