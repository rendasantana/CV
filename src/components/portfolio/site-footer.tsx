"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { ContactIcons } from "@/components/portfolio/contact-icons";
import { CvDownloadDialog } from "@/components/portfolio/cv-download-dialog";
import { formatMessage } from "@/lib/i18n/messages";
import { profile } from "@/lib/portfolio";

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-ink/10 bg-teal-950 text-ink"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-10">
        <div>
          <p className="text-xs font-medium tracking-[0.2em] text-gold/55 uppercase">
            {t.contact.eyebrow}
          </p>
          <p className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
            {profile.shortName}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/55">
            {formatMessage(t.contact.openTo, {
              role: t.profile.role,
              location: t.profile.location,
            })}
          </p>
          <p className="mt-3 text-sm text-ink/40">{profile.phone}</p>
          <p className="mt-1 text-sm text-ink/40">{profile.email}</p>
        </div>
        <div className="flex flex-col items-start gap-5 sm:items-end">
          <CvDownloadDialog />
          <ContactIcons className="sm:items-end" />
        </div>
      </div>
      <div className="border-t border-ink/10 px-6 py-4 text-center text-xs text-ink/35 sm:px-10 sm:text-left">
        {formatMessage(t.contact.footer, {
          year: 2026,
          name: profile.name,
        })}
      </div>
    </footer>
  );
}
