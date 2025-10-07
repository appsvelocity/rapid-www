import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const LegalPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Remonter en haut de la page quand on arrive sur les mentions légales
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
              {t('legal.title')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8 text-center">
                {t('legal.intro')}
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.editor.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.editor.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.conditions.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.conditions.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.responsible.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.responsible.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.limitation.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.limitation.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.disputes.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.disputes.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.dataProtection.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.dataProtection.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.accessRights.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.accessRights.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.confidentiality.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.confidentiality.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.intellectualProperty.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.intellectualProperty.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.hosting.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.hosting.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.serviceConditions.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.serviceConditions.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.information.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.information.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.cookies.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.cookies.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.hyperlinks.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.hyperlinks.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.search.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.search.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.precautions.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.precautions.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.responsibility.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.responsibility.content')}
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {t('legal.contact.title')}
                </h2>
                <div className="whitespace-pre-line">
                  {t('legal.contact.content')}
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
