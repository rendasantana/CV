"use client";

import { navSections } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function SectionNav() {
  return (
    <nav
      aria-label="CV sections"
      className="sticky top-0 z-30 border-b border-ink/8 bg-sand/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:px-10 [&::-webkit-scrollbar]:hidden">
        {navSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium text-ink/55 transition-colors",
              "hover:bg-ink/8 hover:text-ink",
            )}
          >
            {section.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
