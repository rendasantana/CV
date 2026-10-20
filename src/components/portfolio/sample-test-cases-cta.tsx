import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ScenariosDownloadDialog } from "@/components/portfolio/scenarios-download-dialog";
import { majooScenarioCount } from "@/lib/majoo-scenarios";
import { testSuites, totalTestCases } from "@/lib/test-cases";
import { cn } from "@/lib/utils";
import { ArrowRight, FileSpreadsheet } from "lucide-react";
import Link from "next/link";

export function SampleTestCasesCta() {
  return (
    <section id="sample-test-cases" className="scroll-mt-24">
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            Sample Test Cases
          </h3>
          <p className="mt-2 max-w-xl text-sm text-ink/50 sm:text-base">
            Contoh format test case klasik — daftar lengkap ada di halaman
            terpisah.
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
            Sample / Portfolio examples
          </Badge>
          <span className="text-sm text-ink/45">
            {testSuites.length} suites · {totalTestCases} cases
          </span>
        </div>

        <p className="max-w-3xl text-sm leading-relaxed text-ink/55 sm:text-base">
          Browse the classical QA list (ID, steps, expected result) on a
          dedicated page — so this portfolio stays focused on About, case
          studies, projects, and experience. Includes a{" "}
          <strong className="font-medium text-ink/75">
            Majoo Dashboard — Login & Register
          </strong>{" "}
          sample suite ({majooScenarioCount} scenarios + mapped cases).
        </p>

        <ul className="mt-5 space-y-2 text-sm text-ink/55">
          {testSuites.map((suite) => (
            <li key={suite.id} className="flex gap-2">
              <span aria-hidden className="text-gold/55">
                ·
              </span>
              <span>
                Suite {suite.order}: {suite.title} ({suite.cases.length})
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
            Lihat list test case
            <ArrowRight className="size-4" />
          </Link>
          <ScenariosDownloadDialog triggerLabel="Preview Majoo scenarios">
            <FileSpreadsheet className="size-4" />
            Preview Majoo scenarios
          </ScenariosDownloadDialog>
        </div>
      </div>
    </section>
  );
}
