export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translation {
  [key: string]: string;
}

export interface Translations {
  [languageCode: string]: Translation;
}

export interface TestimonialData {
  name: string;
  text: string;
  image?: string;
  role?: string;
}

export interface FeatureData {
  title: string;
  description: string;
  icon: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  buttonText: string;
  highlight?: boolean;
}