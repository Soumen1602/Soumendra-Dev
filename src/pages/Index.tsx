import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import MouseGlow from "@/components/MouseGlow";
import SectionDivider from "@/components/SectionDivider";
import TechMarquee from "@/components/TechMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <MouseGlow />
      
      {/* Fixed animated gradient mesh overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-primary/[0.05] rounded-full blur-[180px] animate-float" />
        <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[160px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute -bottom-20 right-1/3 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[140px] animate-float" style={{ animationDelay: "6s" }} />
        <div className="absolute top-1/4 left-1/2 w-[350px] h-[350px] bg-accent/[0.03] rounded-full blur-[120px] animate-float" style={{ animationDelay: "9s" }} />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <SectionDivider variant="wave" />
        <TechMarquee />
        <SectionDivider variant="dots" />
        <AboutSection />
        <SectionDivider variant="wave" flip />
        <SkillsSection />
        <SectionDivider variant="slant" />
        <ProjectsSection />

        <SectionDivider variant="wave" />
        <EducationSection />
        <SectionDivider variant="slant" flip />
        <CertificationsSection />

        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
