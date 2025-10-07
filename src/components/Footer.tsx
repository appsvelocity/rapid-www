import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const { t, currentLanguage } = useTranslation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToLegals = () => {
    const legalsPath = currentLanguage === 'en' ? '/legals' : `/${currentLanguage}/legals`;
    navigate(legalsPath);
  };

  const navigateToCGV = () => {
    const cgvPath = currentLanguage === 'en' ? '/cgv' : `/${currentLanguage}/cgv`;
    navigate(cgvPath);
  };

  return (
    <footer className="bg-background">
      {/* Ready to Launch CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Brain className="w-8 h-8 text-white" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                {t('footer.ready')}
              </h2>
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 h-auto text-lg"
            >
              {t('hero.cta.primary')}
            </Button>
          </div>
        </div>
      </section>

      {/* Agency Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('footer.agency.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('footer.agency.desc')}
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => scrollToSection('pricing')}
                className="text-base px-8 py-6 h-auto"
              >
                {t('hero.cta.primary')}
              </Button>
              
              <a 
                href="https://cal.com/appsvelocity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-primary/30 bg-background text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-6 h-auto group"
              >
                {t('hero.cta.secondary')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">Apps Velocity</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={navigateToLegals}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {t('footer.legal')}
                </button>
                <button 
                  onClick={navigateToCGV}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {t('footer.cgv')}
                </button>
              </div>
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {t('footer.copyright')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};