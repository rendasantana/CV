import { SampleTestCasesCta } from "@/components/portfolio/sample-test-cases-cta";
import { ScenariosDownloadDialog } from "@/components/portfolio/scenarios-download-dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  about,
  caseStudies,
  education,
  experience,
  projects,
  skills,
} from "@/lib/portfolio";
import { ExternalLink, FileSpreadsheet } from "lucide-react";

const sectionOrder = [
  "about",
  "case-studies",
  "projects",
  "sample-test-cases",
  "experience",
  "skills",
  "education",
] as const;

function SectionHeader({
  index,
  title,
  blurb,
}: {
  index: number;
  title: string;
  blurb: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
          {title}
        </h3>
        <p className="mt-2 max-w-xl text-sm text-ink/50 sm:text-base">{blurb}</p>
      </div>
      <p className="text-xs font-medium tracking-wider text-gold/50 uppercase">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(sectionOrder.length).padStart(2, "0")}
      </p>
    </div>
  );
}

export function CvSections() {
  const sectionIndex = (id: (typeof sectionOrder)[number]) =>
    sectionOrder.indexOf(id);

  return (
    <div id="portfolio" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="space-y-16 sm:space-y-20">
        <section id="about" className="scroll-mt-24">
          <SectionHeader
            index={sectionIndex("about")}
            title="About"
            blurb={about.headline}
          />
          <Separator className="mb-6 bg-ink/10" />
          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-ink/60 sm:text-base">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="case-studies" className="scroll-mt-24">
          <SectionHeader
            index={sectionIndex("case-studies")}
            title="Featured case studies"
            blurb="Dua produk utama: konteks, cakupan uji, tooling, dan hasil — dari CV, tanpa metrik invent."
          />
          <Separator className="mb-8 bg-ink/10" />
          <div className="space-y-12">
            {caseStudies.map((study, studyIndex) => (
              <article
                key={study.id}
                className="case-study border-t border-ink/10 pt-8 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <p className="text-xs font-medium tracking-[0.18em] text-gold/55 uppercase">
                      Case {String(studyIndex + 1).padStart(2, "0")}
                    </p>
                    <h4 className="mt-2 font-display text-2xl tracking-tight text-ink sm:text-3xl">
                      {study.title}
                    </h4>
                  </div>
                  <p className="shrink-0 text-sm text-ink/45">{study.role}</p>
                </div>

                <div className="mt-6 grid gap-8 lg:grid-cols-2">
                  <div className="space-y-5">
                    <div>
                      <h5 className="text-xs font-medium tracking-wider text-gold/50 uppercase">
                        Context
                      </h5>
                      <p className="mt-2 text-sm leading-relaxed text-ink/60 sm:text-base">
                        {study.context}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xs font-medium tracking-wider text-gold/50 uppercase">
                        What I tested
                      </h5>
                      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink/60">
                        {study.tested.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span
                              aria-hidden
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-gold/60"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <h5 className="text-xs font-medium tracking-wider text-gold/50 uppercase">
                        Tools & approach
                      </h5>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {study.tools.map((tool) => (
                          <li key={tool}>
                            <Badge
                              variant="secondary"
                              className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-ink/75 hover:bg-ink/5"
                            >
                              {tool}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-medium tracking-wider text-gold/50 uppercase">
                        Outcome
                      </h5>
                      <p className="mt-2 text-sm leading-relaxed text-ink/60 sm:text-base">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24">
          <SectionHeader
            index={sectionIndex("projects")}
            title="Projects"
            blurb="Daftar produk yang diuji. Slot proof link siap untuk Qase, docs, atau GitHub."
          />
          <Separator className="mb-2 bg-ink/10" />
          <div>
            {projects.map((project) => (
              <article
                key={project.id}
                className="portfolio-item border-t border-ink/10 py-7 first:border-t-0 first:pt-0"
              >
                {project.context ? (
                  <div className="mb-2">
                    <Badge
                      variant="secondary"
                      className="rounded-full border border-ink/10 bg-ink/5 text-ink/75 hover:bg-ink/5"
                    >
                      {project.context}
                    </Badge>
                  </div>
                ) : null}
                <h4 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                  {project.title}
                </h4>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/55 sm:text-base">
                  {project.description}
                </p>
                {project.proofLinks && project.proofLinks.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap items-center gap-3">
                    {project.id === "majoo-dashboard" ? (
                      <li>
                        <ScenariosDownloadDialog
                          triggerClassName="h-8 rounded-full border border-gold/30 bg-transparent px-3 text-sm text-gold hover:bg-gold/10 hover:text-gold"
                          triggerLabel="Preview Login & Register scenarios"
                        >
                          <FileSpreadsheet className="size-3.5" />
                          Preview Login & Register scenarios
                        </ScenariosDownloadDialog>
                      </li>
                    ) : null}
                    {project.proofLinks.map((link) => (
                      <li key={`${link.label}-${link.href}`}>
                        <a
                          href={link.href}
                          {...(link.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="inline-flex items-center gap-1.5 text-sm text-gold/80 transition-colors hover:text-gold"
                        >
                          {link.label}
                          <ExternalLink className="size-3.5 opacity-70" />
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <SampleTestCasesCta />

        <section id="experience" className="scroll-mt-24">
          <SectionHeader
            index={sectionIndex("experience")}
            title="Experience"
            blurb="Perjalanan QA engineering dan operasi web."
          />
          <Separator className="mb-2 bg-ink/10" />
          <div>
            {experience.map((role) => (
              <article
                key={role.id}
                className="portfolio-item border-t border-ink/10 py-7 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <p className="text-xs font-medium tracking-wider text-gold/50 uppercase">
                      {role.company}
                    </p>
                    <h4 className="mt-1 font-display text-xl tracking-tight text-ink sm:text-2xl">
                      {role.title}
                    </h4>
                  </div>
                  <p className="shrink-0 text-sm text-gold/55">{role.period}</p>
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/55 sm:text-base">
                  {role.summary}
                </p>
                <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-relaxed text-ink/60">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-gold/60"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24">
          <SectionHeader
            index={sectionIndex("skills")}
            title="Skills"
            blurb="Tools dan kekuatan yang dipakai sehari-hari di kerja QA."
          />
          <Separator className="mb-8 bg-ink/10" />
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h4 className="text-xs font-medium tracking-[0.18em] text-gold/55 uppercase">
                Technical
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <li key={skill}>
                    <Badge
                      variant="secondary"
                      className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-ink/80 hover:bg-ink/5"
                    >
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium tracking-[0.18em] text-gold/55 uppercase">
                Soft skills
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <li key={skill}>
                    <Badge
                      variant="secondary"
                      className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-ink/80 hover:bg-ink/5"
                    >
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium tracking-[0.18em] text-gold/55 uppercase">
                Languages
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-ink/60">
                {skills.languages.map((lang) => (
                  <li key={lang.name} className="border-l border-gold/30 pl-3">
                    <span className="font-medium text-ink">{lang.name}</span>
                    <span className="mt-0.5 block text-ink/40">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-24">
          <SectionHeader
            index={sectionIndex("education")}
            title="Education"
            blurb="Studi formal dan pelatihan programming."
          />
          <Separator className="mb-2 bg-ink/10" />
          <div>
            {education.map((item) => (
              <article
                key={item.id}
                className="portfolio-item border-t border-ink/10 py-7 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <p className="text-xs font-medium tracking-wider text-gold/50 uppercase">
                      {item.institution}
                    </p>
                    <h4 className="mt-1 font-display text-xl tracking-tight text-ink sm:text-2xl">
                      {item.program}
                    </h4>
                  </div>
                  <p className="shrink-0 text-sm text-gold/55">{item.period}</p>
                </div>
                {item.detail ? (
                  <p className="mt-2 text-sm text-ink/55">{item.detail}</p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
