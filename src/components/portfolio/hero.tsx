"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Download, Mail } from "lucide-react";

export function Hero() {
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
            {profile.role}
          </p>
          <h1 className="reveal delay-1 mt-3 font-display text-[clamp(2.4rem,6.5vw,4.6rem)] leading-[0.98] tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="reveal delay-2 mt-5 max-w-lg text-sm leading-relaxed text-ink/70 sm:text-base">
            {profile.tagline}
          </p>
          <p className="reveal delay-2 mt-3 text-sm text-ink/45">{profile.location}</p>
          <div className="reveal delay-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.cvPdf}
              download
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-gold px-6 text-teal-950 hover:bg-[#e0c9a8]",
              )}
            >
              <Download className="size-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-ink/20 bg-ink/5 text-ink hover:bg-ink/10",
              )}
            >
              <Mail className="size-4" />
              Hubungi saya
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "rounded-full text-ink/70 hover:bg-ink/8 hover:text-ink",
              )}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-photo order-1 relative mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-teal-900/40 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)] ring-1 ring-ink/10">
            <Image
              src="/renda.webp"
              alt={`${profile.name}, Software QA Engineer`}
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
