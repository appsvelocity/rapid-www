import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PricingSection } from '@/components/PricingSection';

export const AboutPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Remonter en haut de la page quand on arrive sur la page About
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Titre principal */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center text-primary">
              {t('aboutPage.title')}
            </h1>
            
            {/* Section des portraits */}
            <div className="mb-16">
              {/* Grille des images */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-12">
                {/* Patrick DE CARVALHO */}
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="/assets/DeCarvalhoPatrick.png" 
                      alt="Patrick DE CARVALHO"
                      className="w-64 h-64 mx-auto rounded-full border-4 border-pink-500 object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Patrick DE CARVALHO
                  </h2>
                </div>

                {/* Pascal ROCHE */}
                <div className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src="/assets/RochePascal.png" 
                      alt="Pascal ROCHE"
                      className="w-64 h-64 mx-auto rounded-full border-4 border-pink-500 object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Pascal ROCHE
                  </h2>
                </div>
              </div>

              {/* Texte en dessous */}
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-muted-foreground">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Patrick DE CARVALHO</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    {t('aboutPage.patrick.desc1')}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t('aboutPage.patrick.desc2')}
                  </p>
                </div>
              </div>
            </div>

            {/* Section Tarifs */}
            <PricingSection />

            {/* Section ADN */}
            <div className="text-center bg-muted/30 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                {t('aboutPage.dna.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('aboutPage.dna.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
