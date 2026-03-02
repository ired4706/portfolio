import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { TechnicalHighlightsSection } from "@/components/sections/technical-highlights";
import { ProjectsSection } from "@/components/sections/projects";
import { ArchitectureCaseStudySection } from "@/components/sections/architecture-case-study";
import { ContactSection } from "@/components/sections/contact";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto flex w-full max-w-5xl flex-col px-4 pb-12 pt-6 sm:px-6 sm:pb-16 lg:px-8">
          <div className="flex flex-col gap-10 sm:gap-12">
            <section className="section-block">
              <HeroSection />
            </section>
            <section className="section-block">
              <TechnicalHighlightsSection />
            </section>
            <section className="section-block">
              <ProjectsSection />
            </section>
            <section className="section-block">
              <ArchitectureCaseStudySection />
            </section>
            <section className="section-block">
              <AboutSection />
            </section>
            <section className="section-block">
              <ContactSection />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

