
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

export type Category = 'restaurantes' | 'indumentaria' | 'farmacia' | 'optica' | 'electrodomesticos' | 'educacion' | 'automotores' | 'comestibles' | 'all';

export const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'restaurantes', label: 'Restaurantes' },
  { value: 'indumentaria', label: 'Indumentaria' },
  { value: 'farmacia', label: 'Farmacias' },
  { value: 'optica', label: 'Opticas' },
  { value: 'electrodomesticos', label: 'Electrodomesticos' },
  { value: 'automotores', label: 'Repuestos Automotor' },
  { value: 'educacion', label: 'Educacion' },
  { value: 'comestibles', label: 'Despensas' },
];

export const shops: Shop[] = [
  {
    id: '1',
    name: 'Optica Figun',
    category: 'optica',
    logo: 'https://i.ibb.co/jZbFGTD3/Captura-de-pantalla-2024-12-10-164731.jpg',
    description: 'Optica Figun ofrece lentes de receta, de sol y de contacto con asesoramiento profesional.',
    openingHours: [
      { days: 'Lunes a Viernes', hours: '9:00 AM - 12:00 PM' },
      { days: '', hours: '17:00 AM - 19:00 PM' }
    ],
    contact: {
      phone: '+54 3446 658195',
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
      phone: '+54 3446 565361',
      instagram: '@malditagchu',
      address: 'San Lorenzo & Urquiza, Gualeguaychu, Entre Rios, Argentina.'
    }
  },
  {
    id: '3',
    name: 'Beter Deportes',
    category: 'indumentaria',
    logo: 'https://i.ibb.co/wZTTZqv2/beter-deportes.jpg',
    description: 'Beter Deportes ofrece ropa, calzado y accesorios para diversas disciplinas.',
    openingHours: [
      { days: 'Lunes a Viernes', hours: '08:30 AM - 12:30 PM' },
      { days: '', hours: '16:30 PM - 20:30 PM' },
      { days: 'Sábados', hours: '09:00 AM - 13:00 PM' },
      { days: '', hours: '17:00 PM - 20:30 PM' }
    ],
    contact: {
      phone: '+54 3446 223535',
      instagram: '@beterdeportes',
      address: '25 de Mayo 1049, Gualeguaychu, Entre Rios, Argentina.'
    }
  },
  {
    id: '4',
    name: "King's Cross School",
    category: 'educacion',
    logo: 'https://i.ibb.co/nsKSzhLg/kingscrosschool.jpg',
    description: "King's Cross School es una academia de inglés que ofrece cursos para todas las edades y preparación para exámenes internacionales.",
    openingHours: [
      { days: 'Consultar', hours: '' },
    ],
    contact: {
      phone: '+54 3446 371738 o +54 3446 347277',
      instagram: '@kingscross.school',
      address: 'Aguado 195, Gualeguaychu, Entre Rios, Argentina.'
    }
  },
  {
    id: '5',
    name: 'Farmacity',
    category: 'farmacia',
    logo: 'https://i.ibb.co/Z6t54pJc/farmacity.png',
    description: 'Farmacity ofrece medicamentos, productos de belleza y cuidado personal.',
    openingHours: [
      { days: 'Lunes a Domingos', hours: '00:00 AM - 24:00 PM' },
    ],
    contact: {
      phone: '+54 3446 424460',
      instagram: '@farmacityoficial',
      address: '25 de Mayo 882, Gualeguaychu, Entre Rios, Argentina.'
    }
  },
  {
  id: '6',
  name: 'On City',
  category: 'electrodomesticos',
  logo: 'https://i.ibb.co/bfR9J4k/oncity.jpg',
  description: '​On City ofrece productos de tecnología y hogar.',
  openingHours: [
    { days: 'Lunes a Viernes', hours: '08:30 AM - 12:00 PM' },
    { days: '', hours: '16:30 PM - 20:30 PM' },
    { days: 'Sábados', hours: '08:30 AM - 12:30 PM' },
    { days: '', hours: '17:00 PM - 20:00 PM' },
  ],
  contact: {
    phone: '+54 3446 238762',
    instagram: '@oncityok',
    address: '25 de Mayo 882, Gualeguaychu, Entre Rios, Argentina.'
  }
},
  {
  id: '7',
  name: 'Centro Villa Baterias',
  category: 'automotores',
  logo: 'https://i.ibb.co/9Dp2D1c/baterias-villa.png',
  description: '​Centro Villa Baterías es un comercio especializado en la venta y servicio de baterías para vehículos.',
  openingHours: [
    { days: 'Lunes a Viernes', hours: '08:30 AM - 12:00 PM' },
    { days: '', hours: '16:00 PM - 20:00 PM' },
    { days: 'Sábados', hours: '08:30 AM - 12:00 PM' },
  ],
  contact: {
    phone: '+549 3446 588222 o +549 3446 403713',
    email: 'romanieugenio@gmail.com',
    address: 'Colombo 912, Gualeguaychu, Entre Rios, Argentina.'
  }
},
  {
  id: '8',
  name: 'Polleria La Favorita',
  category: 'comestibles',
  logo: 'https://i.ibb.co/2168Q7zK/lafavo.jpg',
  description: 'Pollería La Favorita ofrece carnes frescas y de calidad, milanesas y demás productos.',
  openingHours: [
    { days: 'Lunes a Sábados', hours: '08:00 AM - 13:00 PM' },
    { days: '', hours: '16:30 PM - 21:00 PM' },
    { days: 'Domingos', hours: '09:00 AM - 13:00 PM' },
  ],
  contact: {
    phone: '+549 3446 648945',
    instagram: '@polleria_lafavorita',
    address: 'Gral. Artigas 1741, Gualeguaychu, Entre Rios, Argentina.'
  }
},
];
