import { Product, Testimonial, SocialPost } from '../types';

export const COMPANY_INFO = {
  name: 'Sabores Andinos S.A.C.',
  ruc: '20123456789',
  address: 'Av. Los Andes 123, Santiago de Surco, Lima, Perú',
  phone: '+51 987 654 321',
  phoneDisplay: '(01) 987-654-321',
  email: 'contacto@saboresandinos.com',
  website: 'www.andicookies.pe',
  campaign: 'Campaña Nutrición Sin Fronteras',
  socialHandles: '@AndiCookies',
  shippingPartner: 'Andino Express S.A.C.',
  schedule: 'Lunes a Sábado de 8:00 AM a 8:00 PM',
};

export const PRODUCTS: Product[] = [
  {
    id: 'andicookies-original-180g',
    name: 'AndiCookies Chocolate Original',
    subtitle: 'Galletas de quinua y kiwicha rellenas de chocolate',
    price: 12.90,
    weight: '180 g',
    units: 6,
    badge: 'Más Vendido',
    image: '/src/assets/images/andicookies_pack_front_1792383991924.jpg',
    description: 'Deliciosas galletas elaboradas con harina de quinua y kiwicha, endulzadas con miel de abeja y fruto del monje, y rellenas de una suave crema de chocolate. Una combinación perfecta entre tradición andina y nutrición moderna.',
    ingredients: {
      base: [
        'Harina de quinua (48%)',
        'Harina de kiwicha (32%)',
        'Fruto del monje',
        'Miel de abeja',
        'Aceite vegetal (girasol)',
        'Cacao en polvo (3%)',
        'Almidón de maíz',
        'Jarabe de glucosa',
        'Sal',
        'Bicarbonato de sodio',
        'Estabilizante (goma guar)',
        'Antioxidante (tocoferoles)'
      ],
      filling: [
        'Fruto del monje',
        'Miel de abeja',
        'Grasa vegetal',
        'Cacao en polvo',
        'Leche en polvo',
        'Saborizante natural de chocolate',
        'Lecitina de soya (emulsionante)'
      ],
      allergens: 'Contiene soya y leche.',
      traces: 'Puede contener trazas de maní y sésamo.'
    },
    nutrition: {
      servingSize: '3 galletas (30 g)',
      servingsPerContainer: 6,
      perServing: {
        calories: 150,
        proteins: 2.4,
        totalFat: 7.2,
        satFat: 3.3,
        carbs: 17.4,
        sugars: 3.6,
        fiber: 1.2,
        sodium: 54,
      },
      per100g: {
        calories: 500,
        proteins: 8.0,
        totalFat: 24.0,
        satFat: 11.0,
        carbs: 58.0,
        sugars: 12.0,
        fiber: 4.0,
        sodium: 180,
      }
    }
  },
  {
    id: 'andicookies-pack-familiar-3',
    name: 'Pack Familiar AndiCookies (3 Pouch)',
    subtitle: '18 galletas artesanales (540 g)',
    price: 34.90,
    originalPrice: 38.70,
    weight: '540 g (3 x 180 g)',
    units: 18,
    badge: 'Ahorro Especial',
    image: '/src/assets/images/andicookies_social_lifestyle_1792383991949.jpg',
    description: 'El pack preferido para compartir en casa o acompañar desayunos nutritivos. Tres empaques herméticos de AndiCookies con harina integral de quinua y kiwicha de Cusco y Puno.',
    ingredients: {
      base: [
        'Harina de quinua (48%)',
        'Harina de kiwicha (32%)',
        'Fruto del monje',
        'Miel de abeja silvestre',
        'Aceite vegetal',
        'Cacao puro'
      ],
      filling: [
        'Crema artesanal de cacao andino',
        'Miel de abeja',
        'Leche desgrasada'
      ],
      allergens: 'Contiene soya y leche.',
      traces: 'Puede contener trazas de maní y sésamo.'
    },
    nutrition: {
      servingSize: '3 galletas (30 g)',
      servingsPerContainer: 18,
      perServing: {
        calories: 150,
        proteins: 2.4,
        totalFat: 7.2,
        satFat: 3.3,
        carbs: 17.4,
        sugars: 3.6,
        fiber: 1.2,
        sodium: 54,
      },
      per100g: {
        calories: 500,
        proteins: 8.0,
        totalFat: 24.0,
        satFat: 11.0,
        carbs: 58.0,
        sugars: 12.0,
        fiber: 4.0,
        sodium: 180,
      }
    }
  },
  {
    id: 'andicookies-cacao-70',
    name: 'AndiCookies Cacao Chuncho 70%',
    subtitle: 'Edición Gourmet con chocolate intenso de La Convención',
    price: 14.50,
    weight: '180 g',
    units: 6,
    badge: 'Edición Limitada',
    image: '/src/assets/images/hero_andicookies_scene_1792383990263.jpg',
    description: 'Para los verdaderos amantes del chocolate fino de aroma. Galleta crujiente de quinua con mayor concentración de cacao peruano premium y miel de valle.',
    ingredients: {
      base: [
        'Harina de quinua blanca y roja (50%)',
        'Harina de kiwicha (30%)',
        'Fruto del monje',
        'Miel de abeja',
        'Cacao Chuncho en polvo (6%)'
      ],
      filling: [
        'Ganache de chocolate 70% cacao',
        'Miel de abeja',
        'Toque de sal de Maras'
      ],
      allergens: 'Contiene leche y soya.',
      traces: 'Puede contener frutos secos.'
    },
    nutrition: {
      servingSize: '3 galletas (30 g)',
      servingsPerContainer: 6,
      perServing: {
        calories: 148,
        proteins: 2.8,
        totalFat: 7.0,
        satFat: 3.1,
        carbs: 16.5,
        sugars: 2.9,
        fiber: 1.8,
        sodium: 48,
      },
      per100g: {
        calories: 492,
        proteins: 9.2,
        totalFat: 23.5,
        satFat: 10.4,
        carbs: 55.0,
        sugars: 9.8,
        fiber: 6.0,
        sodium: 160,
      }
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'María P.',
    city: 'Lima',
    date: '12 de marzo de 2025',
    quote: 'Desde que consumo AndiCookies tengo más energía y rindo mejor en mis actividades diarias.',
    likes: 128,
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  },
  {
    id: 't-2',
    name: 'Carlos R.',
    city: 'Arequipa',
    date: '5 de abril de 2025',
    quote: 'Me da mucha energía para mis clases y me ayuda a mantenerme activo todo el día. ¡El sabor es increíble!',
    likes: 102,
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
  },
  {
    id: 't-3',
    name: 'Lucía M.',
    city: 'Trujillo',
    date: '20 de marzo de 2025',
    quote: 'Delicioso y 100% saludable. Ideal para cuidar mi peso y mantenerme con energía todo el día.',
    likes: 110,
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=250&q=80',
  },
  {
    id: 't-4',
    name: 'Jorge T.',
    city: 'Cusco',
    date: '8 de abril de 2025',
    quote: 'Me da energía sostenida durante el día, perfecto para mi trabajo. Además, me encanta su sabor a chocolate.',
    likes: 96,
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
  }
];

export const VALUES_LIST = [
  {
    id: 'v1',
    title: 'Inspiración andina',
    desc: 'Raíces en los valles del Perú, rescatando el legado nutricional de los granos milenarios.',
    icon: 'mountain',
  },
  {
    id: 'v2',
    title: 'Ingredientes naturales',
    desc: 'Sin colorantes artificiales, endulzadas con miel de abeja pura y extracto de fruto del monje.',
    icon: 'leaf',
  },
  {
    id: 'v3',
    title: 'Nutrición y bienestar',
    desc: 'Ricas en proteínas vegetales, fibra dietética y energía balanceada para rendir todo el día.',
    icon: 'heart',
  },
  {
    id: 'v4',
    title: 'Apoyo a productores locales',
    desc: 'Comercio justo con comunidades agrícolas altoandinas de Cusco, Ayacucho y Puno.',
    icon: 'users',
  },
  {
    id: 'v5',
    title: 'Compromiso con un consumo responsable',
    desc: 'Enmarcadas en la Campaña Nutrición Sin Fronteras y empaques con menor huella ambiental.',
    icon: 'globe',
  },
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'sp-1',
    network: 'instagram',
    title: 'Desayunos con energía andina 🏔️🥞',
    description: 'Transforma tu mañana: yogurt natural, rodajas de plátano y trozos crocantes de AndiCookies con quinua y kiwicha. ¿Ya lo probaste?',
    metrics: '1,420 Me gusta · 84 comentarios',
    date: 'Ayer a las 9:30 AM',
    tag: '#AndiCookies #EnergiaAndina #Quinua #DesayunoSaludable'
  },
  {
    id: 'sp-2',
    network: 'instagram',
    title: 'El secreto detrás de la kiwicha milenaria ✨',
    description: 'Sabías que la kiwicha era considerada grano sagrado por su alto valor biológico? Cada bocado te aporta aminoácidos esenciales.',
    metrics: '980 Me gusta · 42 comentarios',
    date: '14 de Octubre',
    tag: '#SuperfoodsPeru #NutricionSinFronteras #Kiwicha'
  },
  {
    id: 'sp-3',
    network: 'tiktok',
    title: 'POV: Buscas un snack saludable para la universidad y encuentras ESTO 🎒🍫',
    description: 'No te duermas en tus clases de las 8am. Probamos las AndiCookies rellenas de chocolate y comparamos la saciedad.',
    metrics: '245.8K vistas · 18.4K me gusta · 412 compartidos',
    date: 'Hace 3 días',
    tag: '#SnackSaludable #UniversidadLima #AndiCookiesPeru'
  },
  {
    id: 'sp-4',
    network: 'tiktok',
    title: '¿Chocolate y quinua? Reacción honesta de turistas en Cusco 🇵🇪',
    description: 'Les dimos a probar a viajeros en la Plaza de Armas del Cusco. ¡Nadie creía que no tenían colorantes artificiales!',
    metrics: '512.1K vistas · 42.6K me gusta · 1,230 comentarios',
    date: 'Hace 5 días',
    tag: '#CuscoPeru #PeruvianFood #AndiCookies'
  },
  {
    id: 'sp-5',
    network: 'facebook',
    title: 'Campaña Nutrición Sin Fronteras llega a 15 escuelas rurales 🏫🌱',
    description: 'En Sabores Andinos S.A.C. reafirmamos nuestro compromiso donando paquetes nutricionales y capacitando en hábitos saludables.',
    metrics: '342 reacciones · 68 veces compartido · 29 comentarios',
    date: '10 de Octubre',
    tag: 'Sabores Andinos S.A.C. · Responsabilidad Social'
  },
  {
    id: 'sp-6',
    network: 'whatsapp',
    title: 'Canal Oficial de WhatsApp Business',
    description: 'Atención personalizada, cotizaciones mayoristas, seguimiento de envíos con Andino Express y consultas nutricionales directas.',
    metrics: 'Respuesta promedio < 5 min · Cuenta verificada',
    date: 'En línea ahora',
    tag: '+51 987 654 321'
  }
];

export const RECIPES = [
  {
    id: 'rec-1',
    title: 'Yogurt Bowl Andino Energético',
    time: '5 min',
    difficulty: 'Fácil',
    description: 'Yogurt griego natural, arándanos frescos, semillas de chía y 2 AndiCookies troceadas con suave crema de chocolate.',
    calories: '280 kcal',
    tag: 'Desayuno'
  },
  {
    id: 'rec-2',
    title: 'Frappé de Café Andino con AndiCookies',
    time: '7 min',
    difficulty: 'Media',
    description: 'Café de Chanchamayo, leche de almendras, hielo picado y una AndiCookie triturada en el tope para el snack de media tarde.',
    calories: '190 kcal',
    tag: 'Snack'
  },
  {
    id: 'rec-3',
    title: 'Lonchera Escolar Nutritiva',
    time: '3 min',
    difficulty: 'Muy Fácil',
    description: 'Un paquete individual de AndiCookies (30g) acompañado de una manzana fresca y agua de infusión de muña o manzanilla.',
    calories: '210 kcal',
    tag: 'Lonchera'
  }
];
