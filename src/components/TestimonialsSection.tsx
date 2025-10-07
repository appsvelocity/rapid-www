import { useTranslation } from '@/hooks/useTranslation';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [0,1,2,3,4,5].map((idx) => ({
    name: t(`testimonials.items.${idx}.name`),
    role: t(`testimonials.items.${idx}.role`),
    text: t(`testimonials.items.${idx}.text`),
    image: [
      '/assets/testimonials/1.jpg',
      '/assets/testimonials/2.jpg',
      '/assets/testimonials/3.jpg',
      '/assets/testimonials/4.jpg',
      '/assets/testimonials/5.jpg',
      '/assets/testimonials/6.jpg',
    ][idx]
  }));

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};