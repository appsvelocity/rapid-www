import { useTranslation } from '@/hooks/useTranslation';
import { Mic } from 'lucide-react';

export const PodcastsSection = () => {
  const { t } = useTranslation();

  const podcasts = [
    {
      title: t('podcasts.english.title'),
      lang: t('podcasts.english.lang'),
      description: t('podcasts.english.desc'),
      embedUrl: 'https://embed.acast.com/683046d3e57506ea97d1579f?theme=light&feed=true'
    },
    {
      title: t('podcasts.french.title'),
      lang: t('podcasts.french.lang'),
      description: t('podcasts.french.desc'),
      embedUrl: 'https://embed.acast.com/68305a56e57506ea97d834e9?theme=light&feed=true'
    }
  ];

  return (
    <section id="podcasts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t('podcasts.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t('podcasts.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {podcasts.map((podcast, index) => (
            <div key={index} className="bg-card rounded-2xl p-10 border-t-4 border-primary shadow-lg">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{podcast.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{podcast.lang}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {podcast.description}
              </p>
              
              <div className="mt-6">
                <iframe 
                  src={podcast.embedUrl}
                  frameBorder="0" 
                  width="100%" 
                  height="380px" 
                  className="rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
