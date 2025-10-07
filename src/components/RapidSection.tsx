import { useTranslation } from '@/hooks/useTranslation';

export const RapidSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      number: t('rapid.benefit1.number'),
      text: t('rapid.benefit1.text')
    },
    {
      number: t('rapid.benefit2.number'),
      text: t('rapid.benefit2.text')
    },
    {
      number: t('rapid.benefit3.number'),
      text: t('rapid.benefit3.text')
    },
    {
      number: t('rapid.benefit4.number'),
      text: t('rapid.benefit4.text')
    }
  ];

  return (
    <section id="rapid" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">{t('rapid.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t('rapid.subtitle')}
          </p>
        </div>

        {/* RAPID Visual */}
        <div className="bg-primary/10 border-2 border-primary rounded-3xl p-12 text-center mb-12">
          <div className="text-6xl md:text-8xl font-black tracking-widest text-primary mb-8">
            {t('rapid.acronym')}
          </div>
          <div className="text-2xl font-light leading-relaxed">
            <span className="font-bold text-primary">R</span>ecenser → 
            <span className="font-bold text-primary"> A</span>nalyser → 
            <span className="font-bold text-primary"> P</span>iloter → 
            <span className="font-bold text-primary"> I</span>térer → 
            <span className="font-bold text-primary"> D</span>éployer
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-8 bg-card/50 rounded-xl">
              <div className="text-5xl font-black text-primary mb-3">
                {benefit.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {benefit.text}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://cal.com/appsvelocity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            {t('rapid.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};
