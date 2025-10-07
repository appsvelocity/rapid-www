import { useTranslation } from '@/hooks/useTranslation';
import { Check } from 'lucide-react';

export const FoundersSection = () => {
  const { t } = useTranslation();

  return (
    <section id="founders" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t('founders.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t('founders.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Patrick */}
          <div className="bg-card rounded-2xl p-10 border-l-4 border-primary">
            <div className="text-center mb-8">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img 
                  src="/assets/DeCarvalhoPatrick.png" 
                  alt="Patrick DE CARVALHO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('founders.patrick.name')}</h3>
              <p className="text-primary font-semibold mb-4">{t('founders.patrick.title')}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('founders.patrick.bio')}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{t('founders.highlight1')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{t('founders.highlight2')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{t('founders.highlight3')}</span>
              </div>
            </div>
          </div>

          {/* Pascal */}
          <div className="bg-card rounded-2xl p-10 border-l-4 border-primary">
            <div className="text-center mb-8">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img 
                  src="/assets/RochePascal.png" 
                  alt="Pascal ROCHE"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('founders.pascal.name')}</h3>
              <p className="text-primary font-semibold mb-4">{t('founders.pascal.title')}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('founders.pascal.bio')}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{t('founders.highlight4')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{t('founders.highlight5')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{t('founders.highlight3')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://cal.com/appsvelocity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            {t('founders.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};
