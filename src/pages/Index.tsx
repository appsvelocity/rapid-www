import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ImageCarousel } from '@/components/ImageCarousel';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
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
        <AboutSection />
        <FeaturesSection />
        <ProcessSection />
        <ImageCarousel />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
