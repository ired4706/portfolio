import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { TechnicalHighlightsSection } from "@/components/sections/technical-highlights";
import { ProjectsSection } from "@/components/sections/projects";
import { ArchitectureCaseStudySection } from "@/components/sections/architecture-case-study";
import { ContactSection } from "@/components/sections/contact";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto flex w-full max-w-page flex-col px-4 pb-12 pt-6 sm:px-6 sm:pb-16 lg:px-8">
          <div className="flex flex-col gap-10 sm:gap-12">
            <AnimatedSection>
              <HeroSection />
            </AnimatedSection>
            <AnimatedSection>
              <TechnicalHighlightsSection />
            </AnimatedSection>
            <AnimatedSection>
              <ProjectsSection />
            </AnimatedSection>
            <AnimatedSection>
              <ArchitectureCaseStudySection />
            </AnimatedSection>
            <AnimatedSection>
              <AboutSection />
            </AnimatedSection>
            <AnimatedSection>
              <ContactSection />
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

