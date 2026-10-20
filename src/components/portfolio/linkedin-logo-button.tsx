"use client";

import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LinkedInLogoButtonProps = {
  className?: string;
};

/**
 * Horizontal LinkedIn wordmark button (wide logo asset, light pill on dark UI).
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
        "group inline-flex h-11 max-w-[11.5rem] items-center justify-center overflow-hidden rounded-full border border-ink/15 bg-white px-3.5 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all sm:h-12 sm:max-w-[13rem] sm:px-4",
        "hover:border-ink/25 hover:bg-[#f4f4f4] hover:shadow-[0_8px_24px_-14px_rgba(0,0,0,0.55)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sand",
        "active:translate-y-px",
        className,
      )}
    >
      <Image
        src="/linkedin-logo.webp"
        alt=""
        width={224}
        height={102}
        className="h-5 w-auto max-w-full object-contain object-center sm:h-6"
        sizes="(max-width: 640px) 140px, 180px"
        priority={false}
      />
      <span className="sr-only">LinkedIn</span>
    </a>
  );
}
