
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
    web?: string;
  };
}

export type Category = 'restaurantes' | 'indumentaria' | 'farmacia' | 'hogar' | 'optica' | 'electrodomesticos' | 'educacion' | 'automotores' | 'comestibles' | 'servicios' | 'gimnasios' | 'peluquerias' | 'all';

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
  { value: 'servicios', label: 'Servicios' },
  { value: 'gimnasios', label: 'Gimnasios' },
  { value: 'peluquerias', label: 'Peluquerias' },
  { value: 'hogar', label: 'Hogar' },
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
      { days: '', hours: '17:00 PM - 19:00 PM' }
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
      { days: 'Miercoles, Jueves y Domingos', hours: '19:00 PM - 01:00 AM' },
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
  logo: 'https://i.ibb.co/j9pjsQWf/baterias-villa.png',
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
  logo: 'https://i.ibb.co/5W6nLQw2/lafavo.jpg',
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
  {
  id: '9',
  name: 'EntreRios.Net',
  category: 'servicios',
  logo: 'https://i.ibb.co/LDfLfJyP/logo-transparent.png',
  description: 'Tu proveedor de internet local, comprometidos en brindarte la mejor conexión y experiencia digital en la región.',
  openingHours: [
    { days: 'Lunes a Viernes', hours: '08:00 AM - 12:30 PM' },
    { days: '', hours: '16:00 PM - 20:00 PM' },
    { days: 'Sábados', hours: '08:30 AM - 13:00 PM' },
  ],
  contact: {
    phone: '+549 3446 426555',
    web: 'https://web.entrerios.net/',
    address: 'Andrade 784, Gualeguaychu, Entre Rios, Argentina.'
  }
},
  {
  id: '10',
  name: 'Instituto Sedes Sapientiae',
  category: 'educacion',
  logo: 'https://i.ibb.co/SDFtNbjR/sedes-logo.jpg',
  description: '​El Instituto Sedes Sapientiae ofrece formación terciaria,profesorados y carreras de grado.',
  openingHours: [
    { days: 'Lunes a Viernes', hours: '16:00 PM - 22:00 PM' },
  ],
  contact: {
    phone: '+549 3446 426865',
    web: 'https://www.sedessapientiae.edu.ar/',
    address: 'Santa Fe 74, Gualeguaychu, Entre Rios, Argentina.'
  }
  },
  {
  id: '11',
  name: 'Mega Gym',
  category: 'gimnasios',
  logo: 'https://i.ibb.co/sp9mrqRp/megynm.jpg',
  description: 'Mega Gym es un gimnasio que ofrece sala de musculación, HIIT y CrossFit.',
  openingHours: [
    { days: 'Lunes a Viernes', hours: '06:00 AM - 23:00 PM' },
    { days: 'Sábados', hours: '08:00 AM - 15:00 PM' },
  ],
  contact: {
    phone: '+549 3446 670344',
    instagram: '@megagymgchu',
    address: 'Clavarino 876, Gualeguaychu, Entre Rios, Argentina.'
  }
  },
  {
  id: '12',
  name: 'Codigo Fitness',
  category: 'gimnasios',
  logo: 'https://i.ibb.co/RpBTTtrs/20589800-229084197615138-4750059024207052800-a.jpg"',
  description: 'Acondicionamiento físico, cuidado de la salud y bienestar integral.',
  openingHours: [
    { days: 'Lunes a Viernes', hours: '08:00 AM - 20:30 PM' },
  ],
  contact: {
    phone: '+549 3446 699433',
    instagram: '@codigofitnessgym',
    address: 'Alem 84, Gualeguaychu, Entre Rios, Argentina.'
  }
  },
  {
  id: '13',
  name: 'Paola Salvatori',
  category: 'peluquerias',
  logo: 'https://i.ibb.co/Mk3zBF60/99558172-615186622418834-7573788107640668160-n.jpg',
  description: '​Peluquería Paola Salvatori es un salón de belleza que orfrece servicios de peluquería, cuidado capilar y estilismo. ',
  openingHours: [
    { days: 'Martes a Sábados', hours: '' },
  ],
  contact: {
    phone: '+549 3446 362686',
    instagram: '@paolalorenasalvatori',
  }
  },
  {
  id: '14',
  name: 'La Cala',
  category: 'hogar',
  logo: 'https://i.ibb.co/fV3wLVLW/436547352-327649756635749-2045489532418797098-n.jpg',
  description: '​La Cala Textiles Intervenidos es un emprendimiento de Gualeguaychú que ofrece textiles artesanales y sostenibles para el hogar, combinando arte y confort. ​',
  openingHours: [
    { days: 'Consultar', hours: '' },
  ],
  contact: {
    phone: '+549 11 35207459',
    web: 'https://www.lacalatextiles.ar/',
    instagram: '@lacala_textilesintervenidos',
  }
  },
];

