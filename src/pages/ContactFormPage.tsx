import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface DealerInfo {
  name: string;
  company: string;
  message: string;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const ContactFormPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [dealerInfo, setDealerInfo] = useState<DealerInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  // Récupérer le code d'affiliation depuis l'URL
  const affiliateCode = searchParams.get('ref') || searchParams.get('affiliate');

  useEffect(() => {
    if (affiliateCode) {
      fetchDealerInfo(affiliateCode);
    } else {
      setError(t('contact.error.missingCode'));
      setLoading(false);
    }
  }, [affiliateCode]);

  // Simulation de l'API pour récupérer les infos du revendeur
  const fetchDealerInfo = async (code: string) => {
    try {
      setLoading(true);
      
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulation de données de revendeurs
      const mockDealers: Record<string, DealerInfo> = {
        'PASCAL001': {
          name: 'Pascal Roche',
          company: 'Apps Velocity',
          message: 'Pascal m\'a parlé de votre service et j\'aimerais pouvoir en parler avec vous.'
        },
        'MARIE002': {
          name: 'Marie Dubois',
          company: 'Digital Solutions',
          message: 'Marie m\'a recommandé vos services et je souhaite en savoir plus.'
        },
        'JEAN003': {
          name: 'Jean Martin',
          company: 'Content Agency',
          message: 'Jean m\'a fait découvrir votre expertise'
        }
      };

      const dealer = mockDealers[code];
      if (dealer) {
        setDealerInfo(dealer);
      } else {
        setError(t('contact.error.invalidCode'));
      }
    } catch (err) {
      setError(t('contact.error.loading'));
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Simulation de l'envoi des coordonnées
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulation de l'API d'envoi
      const response = {
        success: true,
        message: 'Vos coordonnées ont été transmises avec succès'
      };

      if (response.success) {
        setSubmitted(true);
      } else {
        setError(t('contact.error.submit'));
      }
    } catch (err) {
      setError(t('contact.error.submit'));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>{t('contact.loading')}</span>
        </div>
      </div>
    );
  }

  if (error && !dealerInfo) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-red-600">{t('contact.error.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-green-600 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                {t('contact.success.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                {t('contact.success.message')} {dealerInfo?.name}.
              </p>
              <p className="text-sm text-muted-foreground">
                {t('contact.success.submessage')}
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 pt-8">
            <h1 className="text-3xl font-bold mb-4">{t('contact.title')}</h1>
            {dealerInfo && (
              <div className="bg-muted p-6 rounded-lg mb-8">
                <p className="text-lg mb-2">
                  <strong>{dealerInfo.name}</strong> {t('contact.dealerMessage')}
                </p>
              </div>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('contact.formTitle')}</CardTitle>
              <CardDescription>
                {t('contact.subtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('contact.form.firstName')} *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.form.firstNamePlaceholder')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('contact.form.lastName')} *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.form.lastNamePlaceholder')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.form.email')} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t('contact.form.phone')} *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    t('contact.form.submit')
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactFormPage;
