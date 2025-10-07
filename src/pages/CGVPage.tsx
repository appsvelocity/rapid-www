import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const CGVPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Remonter en haut de la page quand on arrive sur les CGV
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
              {t('cgv.title')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.object.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.object.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.services.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.services.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.pricing.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.pricing.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.order.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.order.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.pricingOnline.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.pricingOnline.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.clientObligations.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.clientObligations.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.delivery.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.delivery.content')}
                </div>
              </section>


              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.warranty.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.warranty.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.intellectualProperty.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.intellectualProperty.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.termination.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.termination.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.confidentiality.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.confidentiality.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('cgv.jurisdiction.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('cgv.jurisdiction.content')}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
