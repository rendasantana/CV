"use client";

import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LinkedInLogoButtonProps = {
  className?: string;
};

/**
 * Peer CTA to Download CV / Contact: same h-9 height, auto width from logo aspect.
 */
export function LinkedInLogoButton({ className }: LinkedInLogoButtonProps) {
  return (
    <a
      href={profile.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
      className={cn(
        // Match buttonVariants size lg (h-9) + rounded-full CTA rhythm
        "group inline-flex h-9 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-white px-3 transition-colors",
        "hover:bg-[#f0f0f0] hover:border-ink/25",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sand",
        "active:translate-y-px",
        className,
      )}
    >
      <Image
        src="/linkedin-logo.webp"
        alt=""
        width={168}
        height={58}
        className="h-[18px] w-auto object-contain object-center"
        sizes="120px"
        priority={false}
      />
      <span className="sr-only">LinkedIn</span>
    </a>
  );
}
