"use client";

import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LinkedInLogoButtonProps = {
  className?: string;
};

/**
 * Transparent LinkedIn wordmark link — no white pill.
 * Height aligned with sibling lg CTAs (h-9); width from logo aspect.
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
        "group inline-flex h-9 shrink-0 items-center justify-center rounded-full px-1.5 transition-opacity",
        "hover:opacity-85",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sand",
        "active:translate-y-px",
        className,
      )}
    >
      <Image
        src="/linkedin-logo.webp"
        alt=""
        width={136}
        height={40}
        className="h-[22px] w-auto object-contain object-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
        sizes="140px"
        priority={false}
      />
      <span className="sr-only">LinkedIn</span>
    </a>
  );
}
