import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { PortfolioItem as Item } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { ExternalLink, FileText, Bot, Wrench } from "lucide-react";

const kindMeta = {
  doc: { label: "Dokumentasi", icon: FileText },
  automation: { label: "Automation", icon: Bot },
  tool: { label: "Tooling", icon: Wrench },
} as const;

export function PortfolioItem({ item }: { item: Item }) {
  const meta = kindMeta[item.kind];
  const Icon = meta.icon;

  return (
    <article className="group portfolio-item flex flex-col gap-4 border-t border-teal-900/10 py-6 first:border-t-0 first:pt-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex items-center gap-2">
          <Badge
            variant="secondary"
            className="rounded-full bg-teal-900/8 text-teal-950 hover:bg-teal-900/8"
          >
            <Icon className="size-3" />
            {meta.label}
          </Badge>
        </div>
        <h3 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65 sm:text-base">
          {item.description}
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
        {item.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded-full border-teal-900/15 bg-white/50 text-teal-950 hover:border-teal-900/30 hover:bg-white",
            )}
          >
            {link.label}
            <ExternalLink className="size-3.5 opacity-60" />
          </a>
        ))}
      </div>
    </article>
  );
}
