import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Mic, Zap, Target, ArrowRight, Star, Shield, TrendingUp } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Star,
      title: t('about.benefits.reputation.title'),
      description: t('about.benefits.reputation.desc'),
    },
    {
      icon: Shield,
      title: t('about.benefits.trust.title'),
      description: t('about.benefits.trust.desc'),
    },
    {
      icon: TrendingUp,
      title: t('about.benefits.leads.title'),
      description: t('about.benefits.leads.desc'),
    },
  ];



  const features = [
    {
      icon: Mic,
      title: t('about.feature1.title'),
      description: t('about.feature1.desc'),
      categories: [
        t('about.categories.0.0'),
        t('about.categories.0.1'),
        t('about.categories.0.2'),
      ]
    },
    {
      icon: Zap,
      title: t('about.feature2.title'),
      description: t('about.feature2.desc'),
      categories: [
        t('about.categories.1.0'),
        t('about.categories.1.1'),
        t('about.categories.1.2'),
        t('about.categories.1.3'),
        t('about.categories.1.4'),
      ]
    },
    {
      icon: Target,
      title: t('about.feature3.title'),
      description: t('about.feature3.desc'),
      categories: [
        t('about.categories.2.0'),
        t('about.categories.2.1'),
        t('about.categories.2'),
        t('about.categories.3'),
        t('about.categories.4'),
      ]
    },
  ];


  return (
    <>
      {/* Benefits Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 group text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="mt-2 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center">
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
                <div className="text-lg opacity-90">{t('stats.projects')}</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">{t('stats.satisfaction')}</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">75+</div>
                <div className="text-lg opacity-90">{t('stats.episodes')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section id="about-features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('about.features.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.features.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 group text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="text-base px-8 py-6 h-auto group"
            >
              {t('hero.cta.primary')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};