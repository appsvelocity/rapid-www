import { useTranslation } from '@/hooks/useTranslation';

export const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
    },
    {
      number: '02',
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
    },
    {
      number: '03',
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
    },
    {
      number: '04',
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
    },
    {
      number: '05',
      title: t('process.step5.title'),
      description: t('process.step5.desc'),
    },
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('process.title')}
          </h2>
        </div>

        {/* First 4 steps in 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {steps.slice(0, 4).map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Connector line for desktop - only between first 4 steps */}
              {index < 3 && index % 2 === 0 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>

        {/* 5th step centered below */}
        {steps.length > 4 && (
          <div className="flex justify-center">
            <div className="max-w-md">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{steps[4].number}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {steps[4].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {steps[4].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};