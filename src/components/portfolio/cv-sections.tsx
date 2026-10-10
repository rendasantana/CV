import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  education,
  experience,
  navSections,
  profile,
  projects,
  skills,
} from "@/lib/portfolio";

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
        <p className="mt-2 text-sm text-ink/60 sm:text-base">{blurb}</p>
      </div>
      <p className="text-xs font-medium tracking-wider text-teal-900/45 uppercase">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(navSections.length).padStart(2, "0")}
      </p>
    </div>
  );
}

export function CvSections() {
  return (
    <div id="portfolio" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <header className="mb-14 max-w-2xl">
        <p className="font-sans text-sm font-medium tracking-[0.2em] text-teal-900/60 uppercase">
          Curriculum Vitae
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Experience, projects, and skills
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          {profile.focus} Based in {profile.location}.
        </p>
      </header>

      <div className="space-y-16 sm:space-y-20">
        <section id="experience" className="scroll-mt-24">
          <SectionHeader
            index={0}
            title="Experience"
            blurb="Roles across QA engineering and web operations."
          />
          <Separator className="mb-2 bg-teal-900/10" />
          <div>
            {experience.map((role) => (
              <article
                key={role.id}
                className="portfolio-item border-t border-teal-900/10 py-6 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h4 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                    {role.title}
                  </h4>
                  <p className="shrink-0 text-sm text-teal-900/55">{role.period}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-teal-900/80">
                  {role.company}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/65 sm:text-base">
                  {role.summary}
                </p>
                <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-relaxed text-ink/70">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-800/50"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24">
          <SectionHeader
            index={1}
            title="Projects"
            blurb="Products covered in functional, API, UI, and performance testing."
          />
          <Separator className="mb-2 bg-teal-900/10" />
          <div>
            {projects.map((project) => (
              <article
                key={project.id}
                className="portfolio-item border-t border-teal-900/10 py-6 first:border-t-0 first:pt-0"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {project.context ? (
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-teal-900/8 text-teal-950 hover:bg-teal-900/8"
                    >
                      {project.context}
                    </Badge>
                  ) : null}
                </div>
                <h4 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                  {project.title}
                </h4>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/65 sm:text-base">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24">
          <SectionHeader
            index={2}
            title="Skills"
            blurb="Tools and strengths used day to day in QA work."
          />
          <Separator className="mb-6 bg-teal-900/10" />
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-medium tracking-wide text-teal-900/55 uppercase">
                Technical
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <li key={skill}>
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-teal-900/8 px-3 py-1 text-teal-950 hover:bg-teal-900/8"
                    >
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium tracking-wide text-teal-900/55 uppercase">
                Soft skills
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <li key={skill}>
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-teal-900/8 px-3 py-1 text-teal-950 hover:bg-teal-900/8"
                    >
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium tracking-wide text-teal-900/55 uppercase">
                Languages
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-ink/70">
                {skills.languages.map((lang) => (
                  <li key={lang.name}>
                    <span className="font-medium text-ink">{lang.name}</span>
                    <span className="text-ink/50"> — {lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-24">
          <SectionHeader
            index={3}
            title="Education"
            blurb="Formal study and focused programming training."
          />
          <Separator className="mb-2 bg-teal-900/10" />
          <div>
            {education.map((item) => (
              <article
                key={item.id}
                className="portfolio-item border-t border-teal-900/10 py-6 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h4 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                    {item.program}
                  </h4>
                  <p className="shrink-0 text-sm text-teal-900/55">{item.period}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-teal-900/80">
                  {item.institution}
                </p>
                {item.detail ? (
                  <p className="mt-2 text-sm text-ink/65">{item.detail}</p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
