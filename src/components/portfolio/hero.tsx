"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { CvDownloadDialog } from "@/components/portfolio/cv-download-dialog";
import { LinkedInLogoButton } from "@/components/portfolio/linkedin-logo-button";
import { profile } from "@/lib/portfolio";
import { ArrowUpRight, Download } from "lucide-react";
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

          {/* Isak action-group: morphing Let's talk + quiet Download CV + social */}
          <div className="reveal delay-3 hero-cta-row mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href="#contact"
              className="hero-cta-talk"
              aria-label={t.hero.contactCta}
            >
              <span className="hero-cta-talk-ic" aria-hidden>
                <ArrowUpRight className="size-[18px]" strokeWidth={1.75} />
              </span>
              <span className="hero-cta-talk-text">{t.hero.contactCta}</span>
              <span className="hero-cta-talk-ic hero-cta-talk-ic-end" aria-hidden>
                <ArrowUpRight className="size-[18px]" strokeWidth={1.75} />
              </span>
            </a>

            <CvDownloadDialog
              triggerVariant="link"
              triggerClassName="hero-cta-down"
            >
              <Download className="size-[18px]" strokeWidth={1.75} />
              <span>{t.hero.downloadCv}</span>
            </CvDownloadDialog>

            <div
              aria-hidden
              className="hidden h-4 w-px shrink-0 bg-ink/15 sm:block"
            />
            <LinkedInLogoButton className="hero-cta-social-link" />
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
