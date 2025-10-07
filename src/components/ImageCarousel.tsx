import { useTranslation } from '@/hooks/useTranslation';

export const ImageCarousel = () => {
  const { t } = useTranslation();

  // Images de démonstration - vous pourrez les remplacer par vos vraies images
  const carouselImages = [
    {
      id: 1,
      src: '/assets/customers/1.jpg',
      alt: 'Je ne perds jamais'
    },
    {
      id: 2,
      src: '/assets/customers/2.jpg',
      alt: 'Clés de croissance'
    },
    {
      id: 3,
      src: '/assets/customers/3.jpg',
      alt: 'Le prod cast'
    },
    {
      id: 4,
      src: '/assets/customers/4.jpg',
      alt: 'All in'
    },
    {
      id: 5,
      src: '/assets/customers/5.jpg',
      alt: 'Les derniers hommes'
    },
    {
      id: 6,
      src: '/assets/customers/6.jpg',
      alt: 'AI to be or not to be'
    },
    {
      id: 7,
      src: '/assets/customers/7.jpg',
      alt: 'Les pionniers du web'
    },
    {
      id: 8,
      src: '/assets/customers/8.jpg',
      alt: 'Le quantique c\'est pas magique'
    },
    {
      id: 9,
      src: '/assets/customers/9.jpg',
      alt: 'Robots and co'
    },
    {
      id: 10,
      src: '/assets/customers/10.jpg',
      alt: 'Do you speak crypto ?'
    },
    {
      id: 11,
      src: '/assets/customers/11.jpg',
      alt: 'Podcast et mode'
    },
    {
      id: 12,
      src: '/assets/customers/12.jpg',
      alt: 'Business is business'
    },
    {
      id: 13,
      src: '/assets/customers/13.jpg',
      alt: 'FormAssista'
    },
    {
      id: 14,
      src: '/assets/customers/14.jpg',
      alt: 'The i\'mpossible'
    },
    {
      id: 15,
      src: '/assets/customers/15.jpg',
      alt: 'Fertility boost'
    },
    {
      id: 16,
      src: '/assets/customers/16.jpg',
      alt: 'A voz da provençào '
    },
    {
      id: 17,
      src: '/assets/customers/17.jpg',
      alt: 'Nature et compagnons  '
    }
  ];

  // Dupliquer les images pour un défilement continu
  const duplicatedImages = [...carouselImages, ...carouselImages];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('carousel.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('carousel.subtitle')}
          </p>
        </div>

        {/* Carrousel avec défilement continu */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-slow hover:pause-animation">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 mx-4 group cursor-pointer"
              >
                <div className="relative w-80 h-80 bg-white rounded-2xl shadow-lg overflow-hidden border border-primary/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Image de fond */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image.src})` }}
                  />

                  {/* Effet hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
