import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-teal-900/10 bg-teal-950 text-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-10">
        <div>
          <p className="font-display text-2xl tracking-tight sm:text-3xl">
            {profile.shortName}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-sand/70">
            Open to QA Engineer roles — manual, automation, API, and performance.
            Mari bicarakan kebutuhan kualitas produkmu.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-sand text-teal-950 hover:bg-white",
            )}
          >
            Email
          </a>
          <a
            href="#portfolio"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-sand/30 bg-transparent text-sand hover:bg-sand/10 hover:text-sand",
            )}
          >
            Kembali ke portfolio
          </a>
        </div>
      </div>
      <div className="border-t border-sand/10 px-6 py-4 text-center text-xs text-sand/45 sm:px-10 sm:text-left">
        © 2026 {profile.name}. CV / portfolio page.
      </div>
    </footer>
  );
}
