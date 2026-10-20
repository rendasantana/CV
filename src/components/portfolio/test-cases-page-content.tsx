"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { ScenariosDownloadDialog } from "@/components/portfolio/scenarios-download-dialog";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { TestCasesBrowser } from "@/components/portfolio/test-cases-browser";
import { Separator } from "@/components/ui/separator";
import { formatMessage } from "@/lib/i18n/messages";
import { majooScenarioCount, majooScenariosMeta } from "@/lib/majoo-scenarios";
import { FileSpreadsheet } from "lucide-react";
import Link from "next/link";

export function TestCasesPageContent() {
  const { t } = useLocale();

  return (
    <div className="flex flex-1 flex-col bg-sand text-ink">
      <header className="sticky top-0 z-30 border-b border-ink/8 bg-sand/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-10">
          <Link
            href="/"
            className="text-sm font-medium text-ink/55 transition-colors hover:text-ink"
          >
            {t.testCasesPage.back}
          </Link>
          <p className="text-xs font-medium tracking-[0.18em] text-gold/55 uppercase">
            {t.testCasesPage.badge}
          </p>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
          <p className="text-xs font-medium tracking-[0.2em] text-gold/55 uppercase">
            {t.testCasesPage.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            {t.testCasesPage.title}
          </h1>
          <p className="mt-2 text-sm text-ink/45 sm:text-base">
            {t.testCasesPage.subtitle}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/40">
            {t.testCasesPage.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-xl border border-ink/10 bg-ink/3 px-4 py-4 sm:px-5">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium tracking-wider text-gold/50 uppercase">
                {t.testCasesPage.majooBannerTitle}
              </p>
              <p className="mt-1 text-sm text-ink/55">
                {formatMessage(t.testCasesPage.majooBannerBody, {
                  count: majooScenarioCount,
                  path: majooScenariosMeta.xlsxPath,
                })}
              </p>
            </div>
            <ScenariosDownloadDialog
              triggerLabel={t.scenariosDialog.previewDownload}
            >
              <FileSpreadsheet className="size-4" />
              {t.scenariosDialog.previewDownload}
            </ScenariosDownloadDialog>
          </div>

          <Separator className="my-10 bg-ink/10" />
          <TestCasesBrowser />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
