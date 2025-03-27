
export interface Shop {
  id: string;
  name: string;
  category: Category;
  logo: string;
  description: string;
  openingHours: {
    days: string;
    hours: string;
  }[];
  contact: {
    phone?: string;
    email?: string;
    address?: string;
  };
}

export type Category = 'restaurant' | 'clothing' | 'pharmacy' | 'grocery' | 'electronics' | 'all';

export const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Shops' },
  { value: 'restaurant', label: 'Restaurants' },
  { value: 'clothing', label: 'Clothing' },
  { value: 'pharmacy', label: 'Pharmacy' },
  { value: 'grocery', label: 'Grocery' },
  { value: 'electronics', label: 'Electronics' },
];

export const shops: Shop[] = [
  {
    id: '1',
    name: 'Gourmet Haven',
    category: 'restaurant',
    logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Fine dining with international cuisine and exquisite service.',
    openingHours: [
      { days: 'Monday - Friday', hours: '11:00 AM - 10:00 PM' },
      { days: 'Saturday - Sunday', hours: '10:00 AM - 11:00 PM' }
    ],
    contact: {
      phone: '(555) 123-4567',
      email: 'info@gourmethaven.com',
      address: '123 Culinary Avenue, Downtown'
    }
  },
  {
    id: '2',
    name: 'Urban Threads',
    category: 'clothing',
    logo: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Contemporary fashion for the modern individual.',
    openingHours: [
      { days: 'Monday - Saturday', hours: '10:00 AM - 9:00 PM' },
      { days: 'Sunday', hours: '12:00 PM - 6:00 PM' }
    ],
    contact: {
      phone: '(555) 234-5678',
      email: 'hello@urbanthreads.com',
      address: '456 Fashion Street, Uptown'
    }
  },
  {
    id: '3',
    name: 'QuickCare Pharmacy',
    category: 'pharmacy',
    logo: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: '24/7 pharmacy with personalized care and quick service.',
    openingHours: [
      { days: 'Monday - Sunday', hours: 'Open 24 hours' }
    ],
    contact: {
      phone: '(555) 345-6789',
      email: 'care@quickcarepharmacy.com',
      address: '789 Health Boulevard, Midtown'
    }
  },
  {
    id: '4',
    name: 'Fresh Market',
    category: 'grocery',
    logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Organic produce and local goods for health-conscious shoppers.',
    openingHours: [
      { days: 'Monday - Friday', hours: '8:00 AM - 9:00 PM' },
      { days: 'Saturday - Sunday', hours: '8:00 AM - 7:00 PM' }
    ],
    contact: {
      phone: '(555) 456-7890',
      email: 'hello@freshmarket.com',
      address: '101 Organic Lane, Eastside'
    }
  },
  {
    id: '5',
    name: 'Tech World',
    category: 'electronics',
    logo: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Cutting-edge electronics and expert tech advice.',
    openingHours: [
      { days: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
      { days: 'Saturday', hours: '10:00 AM - 7:00 PM' },
      { days: 'Sunday', hours: '11:00 AM - 6:00 PM' }
    ],
    contact: {
      phone: '(555) 567-8901',
      email: 'support@techworld.com',
      address: '202 Digital Drive, Westside'
    }
  },
  {
    id: '6',
    name: 'Café Bliss',
    category: 'restaurant',
    logo: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Artisanal coffee and homemade pastries in a cozy setting.',
    openingHours: [
      { days: 'Monday - Friday', hours: '7:00 AM - 8:00 PM' },
      { days: 'Saturday - Sunday', hours: '8:00 AM - 9:00 PM' }
    ],
    contact: {
      phone: '(555) 678-9012',
      email: 'hello@cafebliss.com',
      address: '303 Coffee Street, Downtown'
    }
  },
  {
    id: '7',
    name: 'Elegance Boutique',
    category: 'clothing',
    logo: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'High-end fashion with personalized styling services.',
    openingHours: [
      { days: 'Monday - Saturday', hours: '10:00 AM - 8:00 PM' },
      { days: 'Sunday', hours: 'Closed' }
    ],
    contact: {
      phone: '(555) 789-0123',
      email: 'style@eleganceboutique.com',
      address: '404 Luxury Avenue, Uptown'
    }
  },
  {
    id: '8',
    name: 'Wellness Pharmacy',
    category: 'pharmacy',
    logo: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Holistic health solutions and traditional remedies.',
    openingHours: [
      { days: 'Monday - Friday', hours: '8:00 AM - 10:00 PM' },
      { days: 'Saturday', hours: '9:00 AM - 9:00 PM' },
      { days: 'Sunday', hours: '10:00 AM - 8:00 PM' }
    ],
    contact: {
      phone: '(555) 890-1234',
      email: 'health@wellnesspharmacy.com',
      address: '505 Natural Way, Midtown'
    }
  },
];
