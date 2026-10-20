"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { CvDownloadDialog } from "@/components/portfolio/cv-download-dialog";
import { LinkedInLogoButton } from "@/components/portfolio/linkedin-logo-button";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-16 pt-20 sm:px-10 sm:pb-20 lg:justify-center lg:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-wash absolute inset-0" />
        <div className="hero-orb hero-orb-a absolute -left-24 top-10 h-[42vmax] w-[42vmax] rounded-full" />
        <div className="hero-orb hero-orb-b absolute -right-10 bottom-0 h-[48vmax] w-[48vmax] rounded-full" />
        <div className="hero-grid absolute inset-0 opacity-[0.45]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        <div className="order-2 max-w-xl lg:order-1 lg:max-w-none">
          <p className="reveal font-sans text-sm font-medium tracking-[0.22em] text-gold/80 uppercase">
            {t.profile.role}
          </p>
          <h1 className="reveal delay-1 mt-3 font-display text-[clamp(2.4rem,6.5vw,4.6rem)] leading-[0.98] tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="reveal delay-2 mt-5 max-w-lg text-sm leading-relaxed text-ink/70 sm:text-base">
            {t.profile.tagline}
          </p>
          <p className="reveal delay-2 mt-3 text-sm text-ink/45">
            {t.profile.location}
          </p>
          <div className="reveal delay-3 hero-cta-row mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <div className="hero-cta-pair flex flex-wrap items-center gap-3">
              <CvDownloadDialog
                triggerClassName={cn(
                  "hero-cta hero-cta-primary",
                  "rounded-full bg-gold px-6 text-teal-950",
                  "shadow-[0_1px_0_color-mix(in_oklab,var(--teal-950)_12%,transparent)]",
                  "hover:bg-[#e0c9a8] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-14px_color-mix(in_oklab,var(--gold)_55%,transparent)]",
                  "active:translate-y-px active:shadow-none",
                  "transition-[transform,box-shadow,background-color] duration-200 ease-out",
                  "[&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-out",
                  "hover:[&_svg]:-translate-y-px",
                )}
              />
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "hero-cta hero-cta-secondary",
                  "rounded-full border-ink/25 bg-transparent px-6 text-ink",
                  "hover:-translate-y-0.5 hover:border-gold/45 hover:bg-ink/[0.06]",
                  "hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--gold)_28%,transparent),0_10px_24px_-16px_color-mix(in_oklab,var(--gold)_40%,transparent)]",
                  "active:translate-y-px active:shadow-none",
                  "transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out",
                  "[&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-out",
                  "hover:[&_svg]:translate-x-0.5",
                )}
              >
                <Mail className="size-4" />
                {t.hero.contactCta}
              </a>
            </div>
            <div
              aria-hidden
              className="hidden h-5 w-px bg-ink/15 sm:block"
            />
            <div className="hero-cta-social flex items-center">
              <LinkedInLogoButton className="hero-cta-social-link" />
            </div>
          </div>
        </div>

        <div className="hero-photo order-1 relative mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-teal-900/40 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] ring-1 ring-ink/10">
            <Image
              src="/renda.webp"
              alt={`${profile.name}, ${t.profile.role}`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover object-[center_18%]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sand/80 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
