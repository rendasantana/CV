import { PortfolioItem } from "@/components/portfolio/portfolio-item";
import { Separator } from "@/components/ui/separator";
import { sections } from "@/lib/portfolio";

export function PortfolioSections() {
  return (
    <div id="portfolio" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <header className="mb-14 max-w-2xl">
        <p className="font-sans text-sm font-medium tracking-[0.2em] text-teal-900/60 uppercase">
          Portfolio
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Bukti kerja QA — kasus, automation, dan performa
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          Ringkasan artefak pengujian dari web, Android, API, hingga performance —
          disusun agar mudah ditinjau oleh hiring manager dan tim engineering.
        </p>
      </header>

      <div className="space-y-16 sm:space-y-20">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                  <span aria-hidden className="mr-2">
                    {section.emoji}
                  </span>
                  {section.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 sm:text-base">{section.blurb}</p>
              </div>
              <p className="text-xs font-medium tracking-wider text-teal-900/45 uppercase">
                {String(index + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
              </p>
            </div>
            <Separator className="mb-2 bg-teal-900/10" />
            <div>
              {section.items.map((item) => (
                <PortfolioItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
