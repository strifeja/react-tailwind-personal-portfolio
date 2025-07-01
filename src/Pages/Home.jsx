import { AboutSection } from "../Components/AboutSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import { Navbar } from "../Components/Navbar";
import { ProjectsSection } from "../Components/ProjectsSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ThemeToggle } from "../Components/ThemeToggle";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Theme Toggle and Background Effects*/}
      <ThemeToggle />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
