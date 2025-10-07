import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '@/data/translations';
import type { Language } from '@/types';

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

type TranslationContextValue = {
  currentLanguage: string;
  changeLanguage: (languageCode: string) => void;
  t: (key: string) => string;
  languages: Language[];
};

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const changeLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('language', languageCode);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
  };

  // Sync document language and SEO metas on language change
  useEffect(() => {
    // lang attribute
    document.documentElement.lang = currentLanguage;

    // title
    const title = t('seo.title');
    if (title) document.title = title;

    // helper to set meta content
    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el && content) el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', t('seo.description'));
    setMeta('meta[name="keywords"]', t('seo.keywords'));
    setMeta('meta[property="og:title"]', t('seo.ogTitle'));
    setMeta('meta[property="og:description"]', t('seo.ogDescription'));

    // Open Graph locale mapping
    const ogLocaleMap: Record<string, string> = {
      en: 'en_US',
      fr: 'fr_FR',
    };
    const ogLocale = ogLocaleMap[currentLanguage] || 'en_US';
    setMeta('meta[property="og:locale"]', ogLocale);

    // Twitter metas
    setMeta('meta[name="twitter:title"]', t('seo.title'));
    setMeta('meta[name="twitter:description"]', t('seo.description'));
    // twitter:image left as default; can be localized later if needed
  }, [currentLanguage]);

  const value = useMemo<TranslationContextValue>(() => ({
    currentLanguage,
    changeLanguage,
    t,
    languages,
  }), [currentLanguage]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const ctx = useContext(TranslationContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return ctx;
};



