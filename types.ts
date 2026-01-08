
export enum ServiceCategory {
  CHAUFFEUR = 'Chauffeur',
  CONCIERGE = 'Concierge',
  AIRPORT = 'Airport',
  EVENT = 'Event'
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'Sedan' | 'SUV' | 'Van';
  image: string;
  passengers: number;
  luggage: number;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}
