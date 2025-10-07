import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Check, Phone } from 'lucide-react';

export const PricingSection = () => {
  const { t } = useTranslation();

  const features = [
    t('pricing.feature1'),
    t('pricing.feature2'),
    t('pricing.feature3'),
    t('pricing.feature4'),
    t('pricing.feature5'),
    t('pricing.feature6'),
    t('pricing.feature7'),
    t('pricing.feature8'),
    t('pricing.feature9'),
    t('pricing.feature10'),
  ];

  const pricingPlans = [
    {
      episodes: t('pricing.plan1.episodes'),
      price: t('pricing.plan1.price'),
    },
    {
      episodes: t('pricing.plan2.episodes'),
      price: t('pricing.plan2.price'),
    },
    {
      episodes: t('pricing.plan3.episodes'),
      price: t('pricing.plan3.price'),
    },
    {
      episodes: t('pricing.plan4.episodes'),
      price: t('pricing.plan4.price'),
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('pricing.title')}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
            <div className="bg-primary p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{t('pricing.plan.title')}</h3>
              <h4 className="text-xl mb-4">{t('pricing.plan.subtitle')}</h4>
              <p className="text-lg opacity-90">{t('pricing.plan.description')}</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center border-t border-border pt-8">
                {/* 4 colonnes de prix */}
                

                <Button 
                  asChild
                  variant="hero" 
                  size="lg"
                  className="text-lg px-12 py-6 h-auto mb-4"
                >
                  <a 
                    href="https://cal.com/appsvelocity" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t('pricing.button')}
                  </a>
                </Button>

              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t('pricing.need.more')}</h3>
              <p className="text-muted-foreground mb-6">{t('pricing.contact.title')}</p>
              <Button 
                asChild
                variant="outline" 
                size="lg"
              >
                <a 
                  href="https://cal.com/appsvelocity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('pricing.contact.button')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};