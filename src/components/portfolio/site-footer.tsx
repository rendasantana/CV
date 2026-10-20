import { CvDownloadDialog } from "@/components/portfolio/cv-download-dialog";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-ink/10 bg-teal-950 text-ink"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-10">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-gold/55 uppercase">
            Hubungi saya
          </p>
          <p className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
            {profile.shortName}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/55">
            {profile.role} based in {profile.location}. Open to roles in
            functional, regression, and performance testing for web and mobile.
          </p>
          <p className="mt-3 text-sm text-ink/40">{profile.phone}</p>
          <p className="mt-1 text-sm text-ink/40">{profile.email}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CvDownloadDialog />
          <a
            href={`mailto:${profile.email}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-ink/20 bg-transparent text-ink hover:bg-ink/10",
            )}
          >
            Email
          </a>
          <a
            href={profile.phoneHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-ink/20 bg-transparent text-ink hover:bg-ink/10",
            )}
          >
            Call
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-ink/20 bg-transparent text-ink hover:bg-ink/10",
            )}
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-ink/10 px-6 py-4 text-center text-xs text-ink/35 sm:px-10 sm:text-left">
        © 2026 {profile.name}. CV / portfolio page.
      </div>
    </footer>
  );
}
