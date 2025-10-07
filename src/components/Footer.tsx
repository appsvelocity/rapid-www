import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const { t, currentLanguage } = useTranslation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToLegals = () => {
    const legalsPath = currentLanguage === 'en' ? '/legals' : `/${currentLanguage}/legals`;
    navigate(legalsPath);
  };

  const navigateToCGV = () => {
    const cgvPath = currentLanguage === 'en' ? '/cgv' : `/${currentLanguage}/cgv`;
    navigate(cgvPath);
  };

  return (
    <footer className="bg-background">
      {/* Ready to Launch CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Brain className="w-8 h-8 text-white" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                {t('footer.ready')}
              </h2>
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 h-auto text-lg"
            >
              {t('hero.cta.primary')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Apps Velocity */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">{t('footer.agency.title')}</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('footer.agency.desc')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">{t('footer.contact.email')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">{t('footer.contact.phone')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">{t('footer.contact.address')}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">{t('footer.services.title')}</h4>
              <ul className="space-y-3">
                <li><a href="#expertise" className="text-sm text-muted-foreground hover:text-primary transition-colors">Conseil Stratégique IA</a></li>
                <li><a href="#expertise" className="text-sm text-muted-foreground hover:text-primary transition-colors">Agents IA sur-mesure</a></li>
                <li><a href="#expertise" className="text-sm text-muted-foreground hover:text-primary transition-colors">Automatisation Intelligente</a></li>
                <li><a href="#rapid" className="text-sm text-muted-foreground hover:text-primary transition-colors">Framework RAPID™</a></li>
                <li><a href="#security" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gouvernance & Sécurité</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">{t('footer.resources.title')}</h4>
              <ul className="space-y-3">
                <li><a href="#podcasts" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI... to be or not to be (EN)</a></li>
                <li><a href="#podcasts" className="text-sm text-muted-foreground hover:text-primary transition-colors">Les derniers Hommes (FR)</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Les Chroniques de l'IA (livre)</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog & Actualités</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Études de cas</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Livre blanc RAPID</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Toolkit gratuit</a></li>
              </ul>
            </div>

            {/* Team */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">{t('footer.team.title')}</h4>
              <ul className="space-y-3">
                <li><a href="#founders" className="text-sm text-muted-foreground hover:text-primary transition-colors">Patrick De Carvalho</a></li>
                <li><a href="#founders" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pascal Roche</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Notre histoire</a></li>
                <li><a href="https://cal.com/appsvelocity" className="text-sm text-muted-foreground hover:text-primary transition-colors">Prendre RDV</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nous rejoindre</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">Apps Velocity</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={navigateToLegals}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {t('footer.legal')}
                </button>
                <button 
                  onClick={navigateToCGV}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {t('footer.cgv')}
                </button>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.ethics')}
                </a>
              </div>
              <div className="text-sm text-muted-foreground">
                {t('footer.copyright')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};