"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { CvDownloadDialog } from "@/components/portfolio/cv-download-dialog";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { FileText, Mail } from "lucide-react";
import type { ReactNode } from "react";

/** Shared chip look for Reach me row (View CV + social/contact). */
export const contactChipClassName = cn(
  "group inline-flex h-11 cursor-pointer items-center gap-2 rounded-full",
  "border border-ink/15 bg-ink/[0.03] px-3.5 text-sm font-medium text-ink/80",
  "transition-[color,background-color,border-color,transform] duration-200 ease-out",
  "hover:-translate-y-0.5 hover:border-gold/40 hover:bg-ink/[0.07] hover:text-gold",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-950",
  "active:translate-y-px",
);

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.86 11.86 0 0 0 5.74 1.46h.01c6.54 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.16-3.41-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.28c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.45-4.44 9.9-9.89 9.9Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77A1.75 1.75 0 0 0 0 1.73v20.54C0 23.24.76 24 1.77 24h20.45c.98 0 1.78-.76 1.78-1.73V1.73C24 .76 23.2 0 22.23 0Z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

type ContactLink = {
  id: string;
  href: string;
  label: string;
  external: boolean;
  icon: ReactNode;
};

export function ContactIcons({ className }: { className?: string }) {
  const { t } = useLocale();

  const links: ContactLink[] = [
    {
      id: "whatsapp",
      href: profile.whatsapp,
      label: t.contact.whatsapp,
      external: true,
      icon: <WhatsAppIcon className="size-[18px]" />,
    },
    {
      id: "email",
      href: `mailto:${profile.email}`,
      label: t.contact.email,
      external: false,
      icon: <Mail className="size-[18px]" strokeWidth={1.75} />,
    },
    {
      id: "linkedin",
      href: profile.linkedin,
      label: t.contact.linkedin,
      external: true,
      icon: <LinkedInIcon className="size-[18px]" />,
    },
    {
      id: "github",
      href: profile.github,
      label: t.contact.github,
      external: true,
      icon: <GitHubIcon className="size-[18px]" />,
    },
  ];

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="text-xs font-medium tracking-[0.18em] text-ink/40 uppercase">
        {t.contact.reachVia}
      </p>
      <ul className="flex flex-wrap items-center gap-2.5">
        <li>
          <CvDownloadDialog
            triggerVariant="chip"
            triggerLabel={t.hero.downloadCv}
            triggerClassName={contactChipClassName}
          >
            <span className="text-gold/90 transition-colors group-hover:text-gold">
              <FileText className="size-[18px]" strokeWidth={1.75} />
            </span>
            <span>{t.hero.downloadCv}</span>
          </CvDownloadDialog>
        </li>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={link.label}
              title={link.label}
              className={contactChipClassName}
            >
              <span className="text-gold/90 transition-colors group-hover:text-gold">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
