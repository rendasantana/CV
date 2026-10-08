import { Hero } from "@/components/portfolio/hero";
import { PortfolioSections } from "@/components/portfolio/portfolio-sections";
import { SectionNav } from "@/components/portfolio/section-nav";
import { SiteFooter } from "@/components/portfolio/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-sand text-ink">
      <Hero />
      <SectionNav />
      <main className="flex-1">
        <PortfolioSections />
      </main>
      <SiteFooter />
    </div>
  );
}
