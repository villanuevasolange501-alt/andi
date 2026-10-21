import React from 'react';
import { VALUES_LIST } from '../data/andinaData';
import { SocialNetwork } from '../types';
import { 
  ShoppingBag, 
  Sparkles, 
  Mountain, 
  Leaf, 
  Heart, 
  Users, 
  Globe, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';

interface HeroBannerProps {
  onQuickBuy: () => void;
  onExploreNutrition: () => void;
  onOpenSocial: (network: SocialNetwork) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onQuickBuy,
  onExploreNutrition,
  onOpenSocial
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mountain': return <Mountain className="w-6 h-6 text-[#781734]" />;
      case 'leaf': return <Leaf className="w-6 h-6 text-emerald-700" />;
      case 'heart': return <Heart className="w-6 h-6 text-rose-700" />;
      case 'users': return <Users className="w-6 h-6 text-amber-700" />;
      case 'globe': return <Globe className="w-6 h-6 text-blue-700" />;
      default: return <Sparkles className="w-6 h-6 text-[#781734]" />;
    }
  };

  return (
    <section className="relative overflow-hidden pt-4 pb-10">
      {/* Hero Showcase Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-[#E8DEC8] shadow-xl bg-stone-900">
          {/* Background Cinematic Andean Scene */}
          <div className="relative h-[480px] sm:h-[540px] lg:h-[580px] w-full">
            <img
              src="/src/assets/images/hero_andicookies_scene_1792383990263.jpg"
              alt="Sabores Andinos - AndiCookies en los Andes peruanos"
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            {/* Dark & Warm Scrim for Maximum Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-black/20" />

            {/* Foreground Brand Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-14 text-white">
              {/* Top Row: Campaign Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 bg-[#781734]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-300/40 text-xs font-bold text-amber-200">
                  <Leaf className="w-3.5 h-3.5 text-amber-300" />
                  <span>Campaña Nutrición Sin Fronteras</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs text-stone-200">
                  <span className="font-semibold text-amber-300">Hecho en Perú</span>
                  <span>·</span>
                  <span>Granos Andinos de Altura</span>
                </div>
              </div>

              {/* Middle Row: The AndiCookies Lockup & Product Slogans */}
              <div className="max-w-2xl space-y-4 my-auto">
                <div className="inline-block bg-[#4A0E17]/90 px-4 py-1.5 rounded-xl border border-amber-400/40 shadow-md">
                  <p className="text-xs uppercase tracking-widest font-black text-amber-300">
                    Galletas de Quinua y Kiwicha · Con Chocolate
                  </p>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white drop-shadow-md leading-none">
                  Andi<span className="text-amber-300">Cookies</span><span className="text-xs align-top">®</span>
                </h1>

                <div className="inline-block bg-amber-400 text-stone-950 font-black italic px-4 py-1 rounded-lg text-lg sm:text-xl shadow-sm rotate-[-1deg]">
                  El sabor de los Andes en cada bocado
                </div>

                <p className="text-sm sm:text-base text-stone-200 leading-relaxed max-w-xl font-normal drop-shadow">
                  Deliciosas galletas elaboradas con harina de quinua y kiwicha, endulzadas con miel de abeja y fruto del monje, y rellenas de una suave crema de chocolate. Una combinación perfecta entre tradición andina y nutrición moderna.
                </p>

                <p className="text-xs sm:text-sm font-semibold text-amber-200 italic flex items-center gap-2">
                  <span>✨ "Quinua y kiwicha por fuera, chocolate por dentro, felicidad en cada mordida."</span>
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onQuickBuy}
                    className="flex items-center gap-2 bg-[#781734] hover:bg-[#601229] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <ShoppingBag className="w-4 h-4 text-amber-300" />
                    <span>Pedir AndiCookies · S/ 12.90</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onExploreNutrition}
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-5 py-3 rounded-xl font-bold text-sm transition-colors"
                  >
                    Ver Información Nutricional
                  </button>

                  <button
                    onClick={() => onOpenSocial('whatsapp')}
                    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-xl font-bold text-sm transition-colors shadow-sm"
                    title="Atención directa por WhatsApp Business"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">WhatsApp Oficial</span>
                  </button>
                </div>
              </div>

              {/* Bottom Row Highlights */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-300">
                <div className="flex items-center gap-4">
                  <span>📦 <strong>6 unidades</strong> (180 g neto)</span>
                  <span>·</span>
                  <span>🍯 <strong>Miel pura & fruto del monje</strong></span>
                  <span>·</span>
                  <span>🚫 <strong>Sin colorantes artificiales</strong></span>
                </div>
                <div className="text-amber-300 font-semibold">
                  Sabores Andinos S.A.C. · Lima, Perú
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NUESTROS VALORES - Exact replication from user image 4 */}
        <div className="mt-8 bg-white rounded-2xl border border-[#E8DEC8] p-6 shadow-sm">
          <div className="flex items-center justify-center mb-6">
            <span className="bg-[#781734] text-white text-xs font-black uppercase tracking-widest px-6 py-1.5 rounded-full shadow-xs">
              Nuestros Valores
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-100">
            {VALUES_LIST.map((val) => (
              <div 
                key={val.id} 
                className="flex flex-col items-center text-center p-3 group transition-transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200/60 flex items-center justify-center mb-3 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                  {getIcon(val.icon)}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-stone-900 mb-1 leading-snug">
                  {val.title}
                </h3>
                <p className="text-[11px] text-stone-500 leading-tight">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
