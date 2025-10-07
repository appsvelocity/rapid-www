import { useTranslation } from '@/hooks/useTranslation';
import { 
  Globe, 
  FileText, 
  Shield, 
  CheckCircle, 
  Award, 
  Users 
} from 'lucide-react';

export const SecuritySection = () => {
  const { t } = useTranslation();

  const securityItems = [
    {
      icon: Globe,
      title: t('security.sovereignty.title'),
      description: t('security.sovereignty.desc')
    },
    {
      icon: FileText,
      title: t('security.compliance.title'),
      description: t('security.compliance.desc')
    },
    {
      icon: Shield,
      title: t('security.privacy.title'),
      description: t('security.privacy.desc')
    },
    {
      icon: CheckCircle,
      title: t('security.ethics.title'),
      description: t('security.ethics.desc')
    },
    {
      icon: Award,
      title: t('security.certifications.title'),
      description: t('security.certifications.desc')
    },
    {
      icon: Users,
      title: t('security.intellectual.title'),
      description: t('security.intellectual.desc')
    }
  ];

  return (
    <section id="security" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t('security.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t('security.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityItems.map((item, index) => (
            <div key={index} className="bg-muted/50 p-8 rounded-xl border-l-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
