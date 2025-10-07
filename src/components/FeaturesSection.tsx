import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Clock, Award, Settings, BarChart3, FileText, TrendingUp, ArrowRight } from 'lucide-react';

export const FeaturesSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Clock,
      title: t('services.feature1.title'),
      description: t('services.feature1.desc'),
      cta: t('services.feature1.cta'),
    },
    {
      icon: Award,
      title: t('services.feature2.title'),
      description: t('services.feature2.desc'),
      cta: t('services.feature2.cta'),
    },
    {
      icon: Settings,
      title: t('services.feature3.title'),
      description: t('services.feature3.desc'),
      cta: t('services.feature3.cta'),
    },
    {
      icon: BarChart3,
      title: t('services.feature4.title'),
      description: t('services.feature4.desc'),
      cta: t('services.feature4.cta'),
    },
    {
      icon: FileText,
      title: t('services.feature5.title'),
      description: t('services.feature5.desc'),
      cta: t('services.feature5.cta'),
    },
    {
      icon: TrendingUp,
      title: t('services.feature6.title'),
      description: t('services.feature6.desc'),
      cta: t('services.feature6.cta'),
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 h-full flex flex-col text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    variant="link" 
                    className="p-0 h-auto font-semibold group-hover:text-primary-dark transition-colors"
                    onClick={() => scrollToSection('pricing')}
                  >
                    {feature.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
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
  );
};