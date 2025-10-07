import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FoundersSection } from '@/components/FoundersSection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { RapidSection } from '@/components/RapidSection';
import { SecuritySection } from '@/components/SecuritySection';
import { ProcessSection } from '@/components/ProcessSection';
import { PodcastsSection } from '@/components/PodcastsSection';
import { ResultsSection } from '@/components/ResultsSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Vérifier s'il y a une section à scroller après la navigation
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    if (scrollToSection) {
      // Attendre que tous les composants soient rendus
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Nettoyer le sessionStorage
        sessionStorage.removeItem('scrollToSection');
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FoundersSection />
        <ExpertiseSection />
        <RapidSection />
        <SecuritySection />
        <ProcessSection />
        <PodcastsSection />
        <ResultsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
