import React from 'react';
import { RECIPES, COMPANY_INFO } from '../data/andinaData';
import { SocialNetwork } from '../types';
import { 
  Heart, 
  Sparkles, 
  Clock, 
  Flame, 
  ChefHat, 
  MessageCircle, 
  Instagram, 
  Users, 
  Mountain,
  CheckCircle2
} from 'lucide-react';

interface StoryAndRecipesProps {
  onOpenSocial: (network: SocialNetwork) => void;
  onExploreProducts: () => void;
}

export const StoryAndRecipes: React.FC<StoryAndRecipesProps> = ({
  onOpenSocial,
  onExploreProducts
}) => {
  return (
    <div className="space-y-16 py-12">
      {/* NUESTRA HISTORIA SECTION */}
      <section id="historia" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200/80 px-3.5 py-1 rounded-full text-xs font-bold">
              <Mountain className="w-3.5 h-3.5 text-amber-700" />
              <span>Tradición Ancestral & Ciencia Nutricional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 font-display leading-tight">
              Nacidos en el Corazón de los Andes
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              En <strong>Sabores Andinos S.A.C.</strong> creemos que la riqueza nutricional de nuestros antepasados puede convivir armónicamente con la vida moderna. <strong>AndiCookies®</strong> nació como respuesta a una necesidad palpable: ofrecer a los jóvenes, estudiantes y familias un snack que entregue energía sostenida, combinando la quinua y kiwicha peruana con un irresistible relleno de chocolate.
            </p>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              A través de la <strong>Campaña Nutrición Sin Fronteras</strong>, trabajamos de la mano con asociaciones de pequeños agricultores en los valles interandinos de Cusco, Puno y Ayacucho, garantizando un precio justo y preservando variedades nativas de granos andinos.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-stone-200">
                <span className="text-lg font-black text-[#781734] font-display block">100%</span>
                <span className="text-[11px] text-stone-600">Granos andinos de origen peruano</span>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-stone-200">
                <span className="text-lg font-black text-emerald-700 font-display block">+3,500</span>
                <span className="text-[11px] text-stone-600">Raciones escolares entregadas en 2025</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onExploreProducts}
                className="bg-[#781734] hover:bg-[#601229] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-colors"
              >
                Conocer nuestros productos
              </button>
              <button
                onClick={() => onOpenSocial('facebook')}
                className="bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 px-4 py-2.5 rounded-xl font-bold text-xs transition-colors"
              >
                Ver Campaña Nutrición Sin Fronteras
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-96 lg:h-full min-h-[420px] bg-stone-100 overflow-hidden">
            <img
              src="/src/assets/images/andicookies_snack_moment_1792383992495.jpg"
              alt="Disfrutando de AndiCookies"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200 shadow-md">
              <p className="text-xs font-semibold text-stone-800 italic">
                "AndiCookies combina la nutrición de la quinua y la kiwicha con un delicioso relleno de chocolate, uniendo tradición andina y gran sabor."
              </p>
              <span className="text-[10px] text-stone-500 block mt-1">
                Sabores Andinos S.A.C. · Lima, Perú
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RECETAS SECTION */}
      <section id="recetas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#781734] bg-white px-3 py-1 rounded-full border border-stone-200 shadow-2xs mb-2">
              <ChefHat className="w-3.5 h-3.5 text-amber-700" />
              <span>Inspiración Culinaria</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-display">
              Recetas & Formas de Disfrutar AndiCookies
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Convierte tu momento de merienda en una experiencia gastronómica nutritiva.
            </p>
          </div>

          <button
            onClick={() => onOpenSocial('instagram')}
            className="flex items-center gap-2 text-xs font-bold text-pink-700 bg-pink-50 border border-pink-200 hover:bg-pink-100 px-4 py-2 rounded-xl transition-colors self-start md:self-auto"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Ver más ideas en @AndiCookies</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-md font-bold text-[10px]">
                    {recipe.tag}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {recipe.time}</span>
                    <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> {recipe.calories}</span>
                  </div>
                </div>

                <h3 className="font-bold text-base text-stone-900 font-display mb-2">
                  {recipe.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {recipe.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Dificultad: {recipe.difficulty}
                </span>

                <button
                  onClick={() => onOpenSocial('tiktok')}
                  className="text-xs font-bold text-stone-800 hover:text-[#781734] underline"
                >
                  Ver tutorial video
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
