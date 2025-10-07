import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { Menu, X, Brain, Zap, Cpu, Target, TrendingUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, currentLanguage } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    
    // Si on n'est pas sur la page d'accueil, rediriger vers la page d'accueil
    const isHomePage = location.pathname === '/' || /^\/[a-z]{2}$/.test(location.pathname);
    
    if (!isHomePage) {
      // Extraire la langue de l'URL actuelle
      const pathParts = location.pathname.split('/');
      const firstPart = pathParts[1] || '';
      
      // Vérifier si le premier segment est une langue (2 lettres)
      const supportedLanguages = ['en', 'fr'];
      const currentLang = supportedLanguages.includes(firstPart) ? firstPart : '';
      
      // Construire le chemin vers la page d'accueil
      const homePath = currentLang ? `/${currentLang}` : '/';
      
      // Stocker l'ID de la section à scroller dans sessionStorage
      sessionStorage.setItem('scrollToSection', id);
      
      // Naviguer vers la page d'accueil
      navigate(homePath);
    } else {
      // Comportement normal sur la page d'accueil
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('Element not found with id:', id);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              // Extraire la langue de l'URL actuelle
              const pathParts = location.pathname.split('/');
              const firstPart = pathParts[1] || '';
              
              // Vérifier si le premier segment est une langue (2 lettres)
              const supportedLanguages = ['en', 'fr'];
              const currentLang = supportedLanguages.includes(firstPart) ? firstPart : '';
              
              // Construire le chemin vers la page d'accueil
              const homePath = currentLang ? `/${currentLang}` : '/';
              
              // Nettoyer le sessionStorage pour éviter le scroll vers une section
              sessionStorage.removeItem('scrollToSection');
              
              // Naviguer vers la page d'accueil
              navigate(homePath);
            }}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Apps Velocity</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary"
            >
              {t('nav.about')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary"
            >
              {t('nav.features')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('process')}
              className="text-foreground hover:text-primary"
            >
              {t('nav.process')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-primary"
            >
              {t('nav.reviews')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary"
            >
              {t('nav.pricing')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => {
                const currentLang = location.pathname.split('/')[1] || '';
                const aboutPath = currentLang ? `/${currentLang}/about` : '/about';
                navigate(aboutPath);
              }}
              className={`${location.pathname.includes('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              {t('nav.whoWeAre')}
            </Button>
          </nav>

          {/* Language Selector, RDV Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            
            {/* RDV Button */}
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg"
            >
              <a 
                href="https://cal.com/appsvelocity" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('hero.cta.secondary')}
              </a>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border relative z-50">
            <div className="flex flex-col gap-2 pt-4">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about')}
                className="justify-start text-foreground hover:text-primary"
              >
                {t('nav.about')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('features')}
                className="justify-start text-foreground hover:text-primary"
              >
                {t('nav.features')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('process')}
                className="justify-start text-foreground hover:text-primary"
              >
                {t('nav.process')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('reviews')}
                className="justify-start text-foreground hover:text-primary"
              >
                {t('nav.reviews')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('pricing')}
                className="justify-start text-foreground hover:text-primary"
              >
                {t('nav.pricing')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => {
                  const currentLang = location.pathname.split('/')[1] || '';
                  const aboutPath = currentLang ? `/${currentLang}/about` : '/about';
                  navigate(aboutPath);
                }}
                className={`justify-start ${location.pathname.includes('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
              >
                {t('nav.whoWeAre')}
              </Button>
              
              {/* RDV Button in Mobile Menu */}
              <Button
                asChild
                className="justify-start bg-orange-500 hover:bg-orange-600 text-white font-semibold mt-2"
              >
                <a 
                  href="https://cal.com/appsvelocity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('hero.cta.secondary')}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};