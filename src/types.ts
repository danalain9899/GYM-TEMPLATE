export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  instagram?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface TimetableEntry {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}
