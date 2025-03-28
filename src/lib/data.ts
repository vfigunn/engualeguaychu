
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
    instagram?: string;
  };
}

export type Category = 'restaurantes' | 'indumentaria' | 'farmacia' | 'optica' | 'electrodomesticos' | 'all';

export const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'restaurantes', label: 'Restaurantes' },
  { value: 'indumentaria', label: 'Indumentaria' },
  { value: 'farmacia', label: 'Farmacias' },
  { value: 'optica', label: 'Opticas' },
  { value: 'electrodomesticos', label: 'Electrodomesticos' },
];

export const shops: Shop[] = [
  {
    id: '1',
    name: 'Optica Figún',
    category: 'optica',
    logo: 'https://i.ibb.co/jZbFGTD3/Captura-de-pantalla-2024-12-10-164731.jpg',
    description: 'Óptica Figun ofrece lentes de receta, de sol y de contacto con asesoramiento profesional.',
    openingHours: [
      { days: 'Lunes a Viernes', hours: '9:00 AM - 12:00 PM' },
      { days: '', hours: '17:00 AM - 19:00 PM' }
    ],
    contact: {
      phone: '+54 3446 65-8195',
      email: 'opticafigun@gmail.com',
      instagram: '@opticafigun',
      address: 'Magnasco 25, Gualeguaychu, Entre Rios, Argentina.'
    }
  },
  {
    id: '2',
    name: 'Maldita Birra',
    category: 'restaurantes',
    logo: 'https://i.ibb.co/zVDsNRgw/maldita-birra.jpg',
    description: 'Maldita Birra es un bar que ofrece cervezas artesanales, tragos y distintos tipos de comida.',
    openingHours: [
      { days: 'Lunes, Jueves y Domingos', hours: '19:00 PM - 01:00 AM' },
      { days: 'Viernes y Sábados', hours: '19:00 PM - 03:00 AM' }
    ],
    contact: {
      phone: '+54 3446 56-5361',
      instagram: '@malditagchu',
      address: 'San Lorenzo & Urquiza, Gualeguaychu, Entre Rios, Argentina.'
    }
  },
  // {
  //   id: '1',
  //   name: 'Optica Figún',
  //   category: 'optica',
  //   logo: 'https://i.ibb.co/jZbFGTD3/Captura-de-pantalla-2024-12-10-164731.jpg',
  //   description: 'Óptica Figun ofrece lentes de receta, de sol y de contacto con asesoramiento profesional.',
  //   openingHours: [
  //     { days: 'Lunes a Viernes', hours: '9:00 AM - 12:00 PM' },
  //     { days: '', hours: '17:00 AM - 19:00 PM' }
  //   ],
  //   contact: {
  //     phone: '+54 3446 65-8195',
  //     email: 'opticafigun@gmail.com',
  //     instagram: '@opticafigun',
  //     address: 'Magnasco 25, Gualeguaychu, Entre Rios, Argentina.'
  //   }
  // },
  // {
  //   id: '1',
  //   name: 'Optica Figún',
  //   category: 'optica',
  //   logo: 'https://i.ibb.co/jZbFGTD3/Captura-de-pantalla-2024-12-10-164731.jpg',
  //   description: 'Óptica Figun ofrece lentes de receta, de sol y de contacto con asesoramiento profesional.',
  //   openingHours: [
  //     { days: 'Lunes a Viernes', hours: '9:00 AM - 12:00 PM' },
  //     { days: '', hours: '17:00 AM - 19:00 PM' }
  //   ],
  //   contact: {
  //     phone: '+54 3446 65-8195',
  //     email: 'opticafigun@gmail.com',
  //     instagram: '@opticafigun',
  //     address: 'Magnasco 25, Gualeguaychu, Entre Rios, Argentina.'
  //   }
  // },
  // {
  //   id: '1',
  //   name: 'Optica Figún',
  //   category: 'optica',
  //   logo: 'https://i.ibb.co/jZbFGTD3/Captura-de-pantalla-2024-12-10-164731.jpg',
  //   description: 'Óptica Figun ofrece lentes de receta, de sol y de contacto con asesoramiento profesional.',
  //   openingHours: [
  //     { days: 'Lunes a Viernes', hours: '9:00 AM - 12:00 PM' },
  //     { days: '', hours: '17:00 AM - 19:00 PM' }
  //   ],
  //   contact: {
  //     phone: '+54 3446 65-8195',
  //     email: 'opticafigun@gmail.com',
  //     instagram: '@opticafigun',
  //     address: 'Magnasco 25, Gualeguaychu, Entre Rios, Argentina.'
  //   }
  // },
];
