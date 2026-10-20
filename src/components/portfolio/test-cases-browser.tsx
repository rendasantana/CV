"use client";

import { Badge } from "@/components/ui/badge";
import { testSuites, totalTestCases, type SampleTestCase } from "@/lib/test-cases";
import { ChevronDown } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

function CaseCard({ testCase }: { testCase: SampleTestCase }) {
  const [open, setOpen] = useState(false);
  const panelId = `case-${testCase.id}`;

  return (
    <article className="border-t border-ink/10 first:border-t-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-3 py-4 text-left transition-colors hover:bg-ink/3"
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs tracking-wide text-gold/70">
              {testCase.id}
            </span>
            <Badge
              variant="secondary"
              className="rounded-full border border-ink/10 bg-ink/5 text-ink/70 hover:bg-ink/5"
            >
              {testCase.priority}
            </Badge>
            <Badge
              variant="secondary"
              className="rounded-full border border-ink/10 bg-ink/5 text-ink/70 hover:bg-ink/5"
            >
              {testCase.type}
            </Badge>
            {testCase.scenarioId ? (
              <span className="font-mono text-[11px] text-ink/40">
                {testCase.scenarioId}
              </span>
            ) : null}
          </div>
          <h4 className="mt-2 font-display text-lg tracking-tight text-ink sm:text-xl">
            {testCase.title}
          </h4>
          <p className="mt-1 text-sm text-ink/40">{testCase.titleId}</p>
          <p className="mt-1 text-xs text-ink/45">{testCase.module}</p>
        </div>
        <ChevronDown
          className={`mt-1 size-5 shrink-0 text-ink/40 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div id={panelId} className="space-y-5 pb-6 text-sm">
          {testCase.environment ? (
            <Field label="Environment" body={testCase.environment} />
          ) : null}
          <Field
            label="Preconditions"
            body={
              <ul className="list-disc space-y-1 pl-5 text-ink/65">
                {testCase.preconditions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
          <Field
            label="Test Data"
            body={
              <ul className="list-disc space-y-1 pl-5 font-mono text-xs text-ink/65 sm:text-sm">
                {testCase.testData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          />
          <Field
            label="Steps"
            body={
              <ol className="list-decimal space-y-1.5 pl-5 text-ink/65">
                {testCase.steps.map((step, i) => (
                  <li key={`${i}-${step.slice(0, 24)}`}>{step}</li>
                ))}
              </ol>
            }
          />
          <Field label="Expected Result" body={testCase.expectedResult} />
          <div className="overflow-x-auto rounded-lg border border-ink/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-ink/5 text-ink/45">
                <tr>
                  <th className="px-3 py-2 font-medium">Actual Result</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                  <th className="px-3 py-2 font-medium">Defect ID</th>
                  <th className="px-3 py-2 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-ink/10 text-ink/35">
                  <td className="px-3 py-3">—</td>
                  <td className="px-3 py-3">—</td>
                  <td className="px-3 py-3">—</td>
                  <td className="px-3 py-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </article>
  );
}

function Field({
  label,
  body,
}: {
  label: string;
  body: ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-medium tracking-wider text-gold/50 uppercase">
        {label}
      </p>
      <div className="mt-2 text-ink/65">{body}</div>
    </div>
  );
}

export function TestCasesBrowser() {
  const [activeSuite, setActiveSuite] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeSuite === "all") return testSuites;
    return testSuites.filter((s) => s.id === activeSuite);
  }, [activeSuite]);

  const shownCount = filtered.reduce((n, s) => n + s.cases.length, 0);

  const filterLabel = (id: string, title: string) => {
    if (id === "web-crm") return "Web CRM";
    if (id === "api-dashboard") return "API";
    if (id === "mobile-perf-smoke") return "Mobile / Perf";
    if (id === "majoo-dashboard-auth") return "Majoo Auth";
    return title;
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-3">
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

      <div
        role="tablist"
        aria-label="Filter by suite"
        className="mb-10 flex flex-wrap gap-2"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeSuite === "all"}
          onClick={() => setActiveSuite("all")}
          className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
            activeSuite === "all"
              ? "bg-gold text-teal-950"
              : "border border-ink/15 bg-ink/5 text-ink/65 hover:bg-ink/10 hover:text-ink"
          }`}
        >
          All suites ({totalTestCases})
        </button>
        {testSuites.map((suite) => (
          <button
            key={suite.id}
            type="button"
            role="tab"
            aria-selected={activeSuite === suite.id}
            onClick={() => setActiveSuite(suite.id)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              activeSuite === suite.id
                ? "bg-gold text-teal-950"
                : "border border-ink/15 bg-ink/5 text-ink/65 hover:bg-ink/10 hover:text-ink"
            }`}
          >
            {filterLabel(suite.id, suite.title)} ({suite.cases.length})
          </button>
        ))}
      </div>

      <p className="mb-8 text-sm text-ink/40" aria-live="polite">
        Showing {shownCount} case{shownCount === 1 ? "" : "s"}
        {activeSuite === "all"
          ? " across all suites"
          : ` in ${filterLabel(activeSuite, filtered[0]?.title ?? "")}`}
        .
      </p>

      <div className="space-y-16">
        {filtered.map((suite) => (
          <section key={suite.id} id={suite.id} className="scroll-mt-28">
            <p className="text-xs font-medium tracking-[0.18em] text-gold/55 uppercase">
              Suite {suite.order} · {suite.cases.length} cases
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-ink sm:text-3xl">
              {suite.title}
            </h2>
            <p className="mt-1 text-sm text-ink/40">{suite.titleId}</p>
            <p className="mt-1 text-xs font-medium tracking-wider text-gold/45 uppercase">
              {suite.label}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/55">
              {suite.description}
            </p>
            <div className="mt-6 border-t border-ink/10">
              {suite.cases.map((testCase) => (
                <CaseCard key={testCase.id} testCase={testCase} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
