import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowRight, Star, Users } from 'lucide-react';
import heroImage from '@/assets/hero.jpg';

export const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 py-20">
        {/* Reviews Badge */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-border">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              {t('hero.reviews')}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">{t('hero.title')}</span>
                <br />
                <span className="text-primary">
                  {t('hero.title.highlight')}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
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
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-primary/30 bg-background text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-6 h-auto group w-full"
              >
                {t('hero.cta.secondary')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">{t('hero.stats.projectsLaunched')}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt={t('hero.image.alt')}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-xl border border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">{t('hero.badge.recording')}</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{t('hero.badge.deliveryTime1')}</div>
                <div className="text-xs text-muted-foreground">{t('hero.badge.deliveryTime2')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};