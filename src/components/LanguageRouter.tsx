import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import Index from '../pages/Index';
import { LegalPage } from '../pages/LegalPage';
import { CGVPage } from '../pages/CGVPage';
import { AboutPage } from '../pages/AboutPage';
import ContactFormPage from '../pages/ContactFormPage';

const LanguageRouter: React.FC = () => {
  const { currentLanguage, changeLanguage } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Détecter la langue depuis l'URL
    const path = location.pathname;
    const langFromPath = path.split('/')[1];
    
    // Liste des langues supportées
    const supportedLanguages = ['en', 'fr'];
    
    if (langFromPath && supportedLanguages.includes(langFromPath)) {
      // Si la langue dans l'URL est différente de la langue actuelle, la changer
      if (langFromPath !== currentLanguage) {
        changeLanguage(langFromPath);
      }
    } else if (path === '/' || path === '/legals' || path === '/cgv' || path === '/about' || path === '/contact') {
      // Si on est sur la racine, /legals, /cgv, /about ou /contact sans préfixe, utiliser l'anglais par défaut
      if (currentLanguage !== 'en') {
        changeLanguage('en');
      }
    } else if (path.startsWith('/fr/')) {
      // Si on est sur une page avec préfixe de langue, détecter la langue depuis l'URL
      const langFromPath = path.split('/')[1];
      if (supportedLanguages.includes(langFromPath) && langFromPath !== currentLanguage) {
        changeLanguage(langFromPath);
      }
    }
  }, [location.pathname, currentLanguage, changeLanguage]);

  return (
    <Routes>
      {/* Routes pour chaque langue */}
      <Route path="/" element={<Index />} />
      <Route path="/fr" element={<Index />} />
      
      {/* Routes pour les mentions légales */}
      <Route path="/legals" element={<LegalPage />} />
      <Route path="/fr/legals" element={<LegalPage />} />
      
      {/* Routes pour les CGV */}
      <Route path="/cgv" element={<CGVPage />} />
      <Route path="/fr/cgv" element={<CGVPage />} />
      
      {/* Routes pour la page About */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/fr/about" element={<AboutPage />} />
      
      {/* Routes pour la page de contact */}
      <Route path="/contact" element={<ContactFormPage />} />
      <Route path="/fr/contact" element={<ContactFormPage />} />
      
      {/* Redirection par défaut */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default LanguageRouter;
