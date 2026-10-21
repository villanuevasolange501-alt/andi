export type SocialNetwork = 'whatsapp' | 'instagram' | 'tiktok' | 'facebook';

export type ActiveView = 
  | 'inicio' 
  | 'productos' 
  | 'historia' 
  | 'nutricion' 
  | 'recetas' 
  | 'politicas' 
  | 'contacto';

export type PolicySection = 
  | 'devoluciones'
  | 'privacidad'
  | 'checkout_contrato'
  | 'pagos'
  | 'envios'
  | 'terminos'
  | 'faq'
  | 'reclamaciones';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  weight: string;
  units: number;
  badge?: string;
  description: string;
  image: string;
  ingredients: {
    base: string[];
    filling: string[];
    allergens: string;
    traces: string;
  };
  nutrition: {
    servingSize: string;
    servingsPerContainer: number;
    perServing: {
      calories: number;
      proteins: number;
      totalFat: number;
      satFat: number;
      carbs: number;
      sugars: number;
      fiber: number;
      sodium: number;
    };
    per100g: {
      calories: number;
      proteins: number;
      totalFat: number;
      satFat: number;
      carbs: number;
      sugars: number;
      fiber: number;
      sodium: number;
    };
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  date: string;
  quote: string;
  likes: number;
  rating: number;
  avatar: string;
}

export interface SocialPost {
  id: string;
  network: SocialNetwork;
  title: string;
  description: string;
  metrics: string;
  date: string;
  image?: string;
  tag?: string;
}
