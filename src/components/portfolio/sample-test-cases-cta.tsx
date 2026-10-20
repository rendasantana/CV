"use client";

import { useLocale } from "@/components/i18n/locale-provider";
import { ScenariosDownloadDialog } from "@/components/portfolio/scenarios-download-dialog";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { formatMessage } from "@/lib/i18n/messages";
import { majooScenarioCount } from "@/lib/majoo-scenarios";
import { testSuites, totalTestCases } from "@/lib/test-cases";
import { cn } from "@/lib/utils";
import { ArrowRight, FileSpreadsheet } from "lucide-react";
import Link from "next/link";

export function SampleTestCasesCta() {
  const { locale, t } = useLocale();

  return (
    <section id="sample-test-cases" className="scroll-mt-24">
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            {t.sampleCta.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm text-ink/50 sm:text-base">
            {t.sampleCta.blurb}
          </p>
        </div>
        <p className="text-xs font-medium tracking-wider text-gold/50 uppercase">
          04 / 07
        </p>
      </div>

      <div className="border-t border-ink/10 pt-8">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Badge
            variant="secondary"
            className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-gold hover:bg-gold/10"
          >
            {t.sampleCta.badge}
          </Badge>
          <span className="text-sm text-ink/45">
            {formatMessage(t.sampleCta.suitesCases, {
              suites: testSuites.length,
              cases: totalTestCases,
            })}
          </span>
        </div>

        <p className="max-w-3xl text-sm leading-relaxed text-ink/55 sm:text-base">
          {formatMessage(t.sampleCta.body, {
            suite: t.sampleCta.majooSuiteName,
            scenarios: majooScenarioCount,
          })
            .split(t.sampleCta.majooSuiteName)
            .flatMap((part, i, arr) =>
              i < arr.length - 1
                ? [
                    part,
                    <strong
                      key={`suite-${i}`}
                      className="font-medium text-ink/75"
                    >
                      {t.sampleCta.majooSuiteName}
                    </strong>,
                  ]
                : [part],
            )}
        </p>

        <ul className="mt-5 space-y-2 text-sm text-ink/55">
          {testSuites.map((suite) => (
            <li key={suite.id} className="flex gap-2">
              <span aria-hidden className="text-gold/55">
                ·
              </span>
              <span>
                {formatMessage(t.sampleCta.suiteLine, {
                  order: suite.order,
                  title: locale === "id" ? suite.titleId : suite.title,
                  count: suite.cases.length,
                })}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/test-cases"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-gold px-6 text-teal-950 hover:bg-[#e0c9a8]",
            )}
          >
            {t.sampleCta.viewList}
            <ArrowRight className="size-4" />
          </Link>
          <ScenariosDownloadDialog triggerLabel={t.sampleCta.previewMajoo}>
            <FileSpreadsheet className="size-4" />
            {t.sampleCta.previewMajoo}
          </ScenariosDownloadDialog>
        </div>
      </div>
    </section>
  );
}
