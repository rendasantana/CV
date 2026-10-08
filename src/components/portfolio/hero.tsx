"use client";

import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 py-16 sm:px-10 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-wash absolute inset-0" />
        <div className="hero-orb hero-orb-a absolute -left-24 top-10 h-[42vmax] w-[42vmax] rounded-full" />
        <div className="hero-orb hero-orb-b absolute -right-16 bottom-0 h-[48vmax] w-[48vmax] rounded-full" />
        <div className="hero-grid absolute inset-0 opacity-[0.35]" />
        <div className="hero-visual absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <svg
            viewBox="0 0 640 800"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient
                id="panel"
                x1="80"
                y1="60"
                x2="560"
                y2="740"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1a5c57" stopOpacity="0.18" />
                <stop offset="1" stopColor="#0b3d3a" stopOpacity="0.55" />
              </linearGradient>
              <linearGradient
                id="accent"
                x1="200"
                y1="180"
                x2="480"
                y2="520"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#e8c47a" stopOpacity="0.9" />
                <stop offset="1" stopColor="#f4efe6" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <rect
              x="120"
              y="80"
              width="400"
              height="640"
              rx="40"
              fill="url(#panel)"
              stroke="#1a5c57"
              strokeOpacity="0.25"
            />
            <rect
              x="168"
              y="140"
              width="304"
              height="36"
              rx="10"
              fill="#f4efe6"
              fillOpacity="0.35"
              className="draw-line"
            />
            <rect
              x="168"
              y="200"
              width="220"
              height="18"
              rx="8"
              fill="#f4efe6"
              fillOpacity="0.22"
              className="draw-line delay-1"
            />
            <rect
              x="168"
              y="240"
              width="260"
              height="18"
              rx="8"
              fill="#f4efe6"
              fillOpacity="0.16"
              className="draw-line delay-2"
            />
            <circle
              cx="320"
              cy="420"
              r="88"
              stroke="url(#accent)"
              strokeWidth="2.5"
              className="pulse-ring"
            />
            <circle
              cx="320"
              cy="420"
              r="54"
              fill="#1a5c57"
              fillOpacity="0.2"
              className="float-soft"
            />
            <path
              d="M292 420.5l18.5 18.5 39-42"
              stroke="#e8c47a"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="check-draw"
            />
            <rect
              x="168"
              y="540"
              width="140"
              height="64"
              rx="14"
              fill="#1a5c57"
              fillOpacity="0.18"
              className="float-soft delay-1"
            />
            <rect
              x="328"
              y="540"
              width="140"
              height="64"
              rx="14"
              fill="#e8c47a"
              fillOpacity="0.18"
              className="float-soft delay-2"
            />
            <rect
              x="168"
              y="624"
              width="300"
              height="12"
              rx="6"
              fill="#f4efe6"
              fillOpacity="0.14"
            />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="reveal font-sans text-sm font-medium tracking-[0.22em] text-teal-900/70 uppercase">
            {profile.role}
          </p>
          <h1 className="reveal delay-1 mt-3 font-display text-[clamp(2.25rem,6.5vw,4.5rem)] leading-[0.98] tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="reveal delay-2 mt-5 max-w-md text-sm leading-relaxed text-ink/75 sm:text-base">
            {profile.tagline}
          </p>
          <div className="reveal delay-3 mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-teal-900 px-6 text-sand hover:bg-teal-800",
              )}
            >
              Lihat portfolio
              <ArrowDown className="size-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-teal-900/20 bg-white/40 text-teal-950 backdrop-blur-sm hover:bg-white/70",
              )}
            >
              Hubungi saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
