
import { Vehicle, Service, ServiceCategory } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: 's-class-s580',
    name: 'Mercedes-Benz S580',
    type: 'Sedan',
    image: 'https://res.cloudinary.com/dwjg0avzx/image/upload/v1733243223/Mercedes_S_Class_Exterior_px7xxk.png',
    passengers: 3,
    luggage: 2,
    features: [
      'Gold Standard of Luxury Sedans',
      'Exclusive Nappa Leather Massage Seating',
      'Burmester® 4D High-End Surround Sound',
      'Magic Body Control Adaptive Suspension',
      'Rear Seat Executive Package with Leg Rests'
    ]
  },
  {
    id: 'cadillac-ct5',
    name: 'Cadillac CT5 Premium Luxury',
    type: 'Sedan',
    image: 'https://res.cloudinary.com/dwjg0avzx/image/upload/v1733243594/Cadillac_CT5_2025_Exterior_1_ljugdm.png',
    passengers: 3,
    luggage: 2,
    features: [
      'Next-Gen 2025 Executive Sedan',
      'Super Cruise™ Hands-Free Technology',
      'AKG™ Premium 15-Speaker Audio',
      'Magnetic Ride Control 4.0',
      'Climate-Controlled Semi-Aniline Leather'
    ]
  },
  {
    id: 'suburban-premier',
    name: 'Chevrolet Suburban Premier',
    type: 'SUV',
    image: 'https://opulentts.com/Suburban%20exterior%203.png',
    passengers: 7,
    luggage: 6,
    features: [
      'The Ultimate Executive SUV',
      'Extended Wheelbase for Maximum Cargo',
      'Bose Centerpoint® Surround Sound',
      'Rear Seat Media Entertainment System',
      'Magnetic Ride Control for Smooth Transit'
    ]
  },
  {
    id: 'sprinter-jet',
    name: 'Mercedes-Benz Sprinter (Jet Style)',
    type: 'Van',
    image: 'https://opulentts.com/Mercedes%20Sprinter%20Jet%20Style%20Exterior.png',
    passengers: 9,
    luggage: 10,
    features: [
      'Private Jet Experience on Wheels',
      'Reclining Italian Leather Captain Chairs',
      'Dual 43" 4K Smart TV Displays',
      'Onboard Refreshment Center & Bar',
      'Privacy Partition & Fiber Optic Lighting'
    ]
  },
  {
    id: 'sprinter-limo',
    name: 'Mercedes-Benz Sprinter (Limo Style)',
    type: 'Van',
    image: 'https://opulentts.com/Mercedes%20Limo%20Sprinter%20Exterior.png',
    passengers: 14,
    luggage: 12,
    features: [
      'Mobile Lounge Perfection',
      'Perimeter Bench Seating Configuration',
      'Dynamic RGB Interior Light Suite',
      'Advanced Multi-Zone Audio System',
      'Extended Rear Luggage Compartment'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 'airport-transfer',
    title: 'Elite Airport Logistics',
    description: 'Specialized coordination for commercial and private aviation. Real-time flight tracking, curbside meet & greet, and baggage handling come standard.',
    category: ServiceCategory.AIRPORT,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'corporate',
    title: 'Executive Roadshows',
    description: 'Precision timing for multi-stop financial roadshows and executive itineraries. Your mobile office is prepared and ready for productivity.',
    category: ServiceCategory.CHAUFFEUR,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'concierge-coordination',
    title: 'Bespoke Concierge',
    description: 'Comprehensive travel management beyond the vehicle. Restaurant bookings, event access, and itinerary planning via our 24/7 VIP desk.',
    category: ServiceCategory.CONCIERGE,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200'
  }
];
