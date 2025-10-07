import { useTranslation } from '@/hooks/useTranslation';

export const ResultsSection = () => {
  const { t } = useTranslation();

  const results = [
    {
      number: t('results.years'),
      label: t('results.yearsLabel')
    },
    {
      number: t('results.projects'),
      label: t('results.projectsLabel')
    },
    {
      number: t('results.savings'),
      label: t('results.savingsLabel')
    },
    {
      number: t('results.success'),
      label: t('results.successLabel')
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t('results.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {results.map((result, index) => (
            <div key={index}>
              <div className="text-6xl font-black text-primary mb-3">
                {result.number}
              </div>
              <div className="text-lg text-muted-foreground">
                {result.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
