
export interface Shop {
  id: string;
  name: string;
  category: Category;
  logo: string;
  description: string;
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
  },
  {
    id: '2',
    name: 'Urban Threads',
    category: 'clothing',
    logo: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Contemporary fashion for the modern individual.',
  },
  {
    id: '3',
    name: 'QuickCare Pharmacy',
    category: 'pharmacy',
    logo: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: '24/7 pharmacy with personalized care and quick service.',
  },
  {
    id: '4',
    name: 'Fresh Market',
    category: 'grocery',
    logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Organic produce and local goods for health-conscious shoppers.',
  },
  {
    id: '5',
    name: 'Tech World',
    category: 'electronics',
    logo: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Cutting-edge electronics and expert tech advice.',
  },
  {
    id: '6',
    name: 'Café Bliss',
    category: 'restaurant',
    logo: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Artisanal coffee and homemade pastries in a cozy setting.',
  },
  {
    id: '7',
    name: 'Elegance Boutique',
    category: 'clothing',
    logo: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'High-end fashion with personalized styling services.',
  },
  {
    id: '8',
    name: 'Wellness Pharmacy',
    category: 'pharmacy',
    logo: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Holistic health solutions and traditional remedies.',
  },
];
