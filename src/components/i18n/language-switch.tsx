"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { cn } from "@/lib/utils";

/**
 * Fixed bottom-left language toggle.
 * At rest: mostly transparent; hover/focus/active: clearer for discoverability.
 * Touch-friendly tap target while staying visually quiet.
 */
export function LanguageSwitch() {
  const { locale, toggleLocale, t } = useLocale();
  const nextIsId = locale === "en";
  const aria = nextIsId ? t.langSwitch.toId : t.langSwitch.toEn;

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-40 sm:bottom-6 sm:left-6">
      <button
        type="button"
        onClick={toggleLocale}
        aria-label={aria}
        title={aria}
        className={cn(
          "pointer-events-auto group inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-full border px-3.5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200",
          /* rest: clear / subtle */
          "border-ink/10 bg-sand/25 text-ink/35 backdrop-blur-[2px]",
          /* hover + focus + keyboard */
          "hover:border-gold/45 hover:bg-teal-950/85 hover:text-gold hover:shadow-[0_8px_28px_-12px_rgba(0,0,0,0.65)]",
          "focus-visible:border-gold/55 focus-visible:bg-teal-950/90 focus-visible:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40",
          /* touch / pressed */
          "active:border-gold/40 active:bg-teal-950/80 active:text-gold",
        )}
      >
        <span
          className={cn(
            "transition-opacity",
            locale === "en" ? "text-gold/90 opacity-90" : "opacity-40",
          )}
        >
          {t.langSwitch.currentEn}
        </span>
        <span className="opacity-30" aria-hidden>
          /
        </span>
        <span
          className={cn(
            "transition-opacity",
            locale === "id" ? "text-gold/90 opacity-90" : "opacity-40",
          )}
        >
          {t.langSwitch.currentId}
        </span>
      </button>
    </div>
  );
}
