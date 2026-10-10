import { CvSections } from "@/components/portfolio/cv-sections";
import { Hero } from "@/components/portfolio/hero";
import { SectionNav } from "@/components/portfolio/section-nav";
import { SiteFooter } from "@/components/portfolio/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-sand text-ink">
      <Hero />
      <SectionNav />
      <main className="flex-1">
        <CvSections />
      </main>
      <SiteFooter />
    </div>
  );
}
