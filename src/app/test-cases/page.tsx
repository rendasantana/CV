import { ScenariosDownloadDialog } from "@/components/portfolio/scenarios-download-dialog";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { TestCasesBrowser } from "@/components/portfolio/test-cases-browser";
import { Separator } from "@/components/ui/separator";
import { majooScenarioCount, majooScenariosMeta } from "@/lib/majoo-scenarios";
import { FileSpreadsheet } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Test Cases — Renda Arya Santana",
  description:
    "These are illustrative QA examples in classical test-case format — not confidential client documents. Real suite links (Qase, docs, GitHub) can be added later.",
};

export default function TestCasesPage() {
  return (
    <div className="flex flex-1 flex-col bg-sand text-ink">
      <header className="sticky top-0 z-30 border-b border-ink/8 bg-sand/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-10">
          <Link
            href="/"
            className="text-sm font-medium text-ink/55 transition-colors hover:text-ink"
          >
            ← Back to portfolio
          </Link>
          <p className="text-xs font-medium tracking-[0.18em] text-gold/55 uppercase">
            Sample / Portfolio examples
          </p>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
          <p className="text-xs font-medium tracking-[0.2em] text-gold/55 uppercase">
            QA documentation samples
          </p>
          <h1 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Sample Test Cases
          </h1>
          <p className="mt-2 text-sm text-ink/45 sm:text-base">
            Contoh sampel portfolio
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/40">
            Ini contoh format test case klasik untuk portfolio — bukan dokumen
            rahasia klien. Link suite asli (Qase, docs, GitHub) bisa
            ditambahkan kemudian. Filter by suite below to browse the list.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-xl border border-ink/10 bg-ink/3 px-4 py-4 sm:px-5">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium tracking-wider text-gold/50 uppercase">
                Majoo Dashboard scenarios (XLSX)
              </p>
              <p className="mt-1 text-sm text-ink/55">
                {majooScenarioCount} illustrative login & register scenarios —
                preview table in a popup, then download{" "}
                <span className="font-mono text-xs text-ink/45">
                  {majooScenariosMeta.xlsxPath}
                </span>
              </p>
            </div>
            <ScenariosDownloadDialog triggerLabel="Preview & download XLSX">
              <FileSpreadsheet className="size-4" />
              Preview & download XLSX
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
