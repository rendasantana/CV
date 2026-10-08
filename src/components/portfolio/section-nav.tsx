"use client";

import { sections } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function SectionNav() {
  return (
    <nav
      aria-label="Portfolio sections"
      className="sticky top-0 z-30 border-b border-teal-900/8 bg-sand/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-10">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium text-teal-950/70 transition-colors",
              "hover:bg-teal-900/8 hover:text-teal-950",
            )}
          >
            <span className="mr-1.5" aria-hidden>
              {section.emoji}
            </span>
            {section.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
