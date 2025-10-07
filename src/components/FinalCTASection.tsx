import { useTranslation } from '@/hooks/useTranslation';
import { Calendar, Clock, Shield, MessageCircle } from 'lucide-react';

export const FinalCTASection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Calendar,
      text: t('cta.availability')
    },
    {
      icon: Clock,
      text: t('cta.free')
    },
    {
      icon: Shield,
      text: t('cta.confidentiality')
    },
    {
      icon: MessageCircle,
      text: t('cta.personal')
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8">{t('cta.title')}</h2>
        <p className="text-2xl mb-12 opacity-95">{t('cta.subtitle')}</p>
        
        <a 
          href="https://cal.com/appsvelocity" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-background text-primary px-12 py-6 rounded-lg font-bold text-xl hover:bg-background/90 transition-colors shadow-2xl"
        >
          {t('cta.button')}
        </a>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <feature.icon className="w-5 h-5" />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
