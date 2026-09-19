import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { FeaturedCaseStudy } from './components/FeaturedCaseStudy';
import { ProjectPortfolio } from './components/ProjectPortfolio';
import { HealthcareShowcase } from './components/HealthcareShowcase';
import { EcommerceShowcase } from './components/EcommerceShowcase';
import { IndustriesSection } from './components/IndustriesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationSection } from './components/EducationSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { FEATURED_PROJECT_SACVIN } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Header */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      <main>
        {/* Hero Slideshow (Lenus fade + City Smiles layout) */}
        <HeroSlider
          onExploreWork={() => scrollToSection('work')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Experience & Trust Statistics Strip */}
        <TrustStats />

        {/* About Section: Engineering with a Business Perspective */}
        <AboutSection
          onExploreWork={() => scrollToSection('work')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* What I Can Build: Client-Friendly Capabilities */}
        <CapabilitiesSection />

        {/* Featured Case Study: SACVIN Flagship E-Commerce */}
        <FeaturedCaseStudy
          onOpenDetails={() => setSelectedProject(FEATURED_PROJECT_SACVIN)}
        />

        {/* Main Work / Project Portfolio with Interactive Filtering */}
        <ProjectPortfolio
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Dedicated Healthcare & Professional Website Showcase */}
        <HealthcareShowcase
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Dedicated Shopify & E-Commerce Showcase */}
        <EcommerceShowcase
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Industries I've Worked With (20 Domain Sectors) */}
        <IndustriesSection />

        {/* Professional Journey / Experience Timeline */}
        <ExperienceTimeline />

        {/* Grouped Skills */}
        <SkillsSection />

        {/* Certifications (Completed & In Progress) */}
        <CertificationsSection />

        {/* Formal Education */}
        <EducationSection />

        {/* Why Clients Explore My Work / 4 Pillars */}
        <WhyWorkWithMe
          onExploreWork={() => scrollToSection('work')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Final CTA & Direct Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal (Layer 1 Client-Friendly & Layer 2 Tech Details) */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
