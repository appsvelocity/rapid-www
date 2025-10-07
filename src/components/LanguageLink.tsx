import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

interface LanguageLinkProps {
  language: string;
  children: React.ReactNode;
  className?: string;
}

const LanguageLink: React.FC<LanguageLinkProps> = ({ language, children, className }) => {
  const { currentLanguage } = useTranslation();
  const location = useLocation();

  const getLanguagePath = (lang: string) => {
    if (lang === 'en') {
      return '/';
    }
    return `/${lang}`;
  };

  const isActive = currentLanguage === language;

  return (
    <Link
      to={getLanguagePath(language)}
      className={`${className || ''} ${isActive ? 'active' : ''}`}
    >
      {children}
    </Link>
  );
};

export default LanguageLink;
