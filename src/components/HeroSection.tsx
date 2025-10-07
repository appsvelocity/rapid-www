import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowRight, Star, Users, Check, Zap } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-radial from-gray-900 via-gray-950 to-black">
      <div className="container mx-auto px-4 py-4">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-gray-800 text-white rounded-full px-6 py-3 border border-orange-500">
            <Zap className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold">
              {t('hero.badge.recording')}
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                {t('hero.title')}
                <br />
                <span className="text-orange-500">
                  {t('hero.title.highlight')}
                </span>
              </h1>
              
              <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 text-base">
                {t('hero.promise').split(' • ').map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-orange-500" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('hero.cta.primary')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};