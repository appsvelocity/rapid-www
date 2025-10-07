import { useTranslation } from '@/hooks/useTranslation';
import { 
  Clock, 
  Bot, 
  Zap, 
  Layers, 
  Shield, 
  Rocket 
} from 'lucide-react';

export const ExpertiseSection = () => {
  const { t } = useTranslation();

  const expertiseItems = [
    {
      icon: Clock,
      title: t('expertise.consulting.title'),
      description: t('expertise.consulting.desc'),
      features: [
        'Audit de maturité IA',
        'Stratégie & roadmap 18 mois',
        'Identification quick wins',
        'Business cases chiffrés'
      ]
    },
    {
      icon: Bot,
      title: t('expertise.agents.title'),
      description: t('expertise.agents.desc'),
      features: [
        'Chatbots & assistants conversationnels',
        'Agents autonomes métier',
        'Systèmes de recommandation',
        'IA prédictive & analytique'
      ]
    },
    {
      icon: Zap,
      title: t('expertise.automation.title'),
      description: t('expertise.automation.desc'),
      features: [
        'Workflows intelligents n8n/Make',
        'Intégration multi-outils',
        'Traitement automatique documents',
        'Orchestration LLMs'
      ]
    },
    {
      icon: Layers,
      title: t('expertise.transformation.title'),
      description: t('expertise.transformation.desc'),
      features: [
        'Méthode RAPID™',
        'Change management',
        'Formation & coaching',
        'Support post-déploiement'
      ]
    },
    {
      icon: Shield,
      title: t('expertise.security.title'),
      description: t('expertise.security.desc'),
      features: [
        'Conformité RGPD & AI Act',
        'Charte éthique IA',
        'Souveraineté des données',
        'Audit sécurité & privacy'
      ]
    },
    {
      icon: Rocket,
      title: t('expertise.rapid.title'),
      description: t('expertise.rapid.desc'),
      features: [
        'POC & prototypes en 15 jours',
        'Automatisations express',
        'Sprints agiles courts',
        'Time-to-market optimisé'
      ]
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t('expertise.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t('expertise.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {expertiseItems.map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border-t-4 border-primary shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <ul className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-bold">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://cal.com/appsvelocity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            {t('expertise.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};
