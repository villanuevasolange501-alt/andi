import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/andinaData';
import { SocialNetwork, Testimonial } from '../types';
import { 
  Star, 
  Heart, 
  Instagram, 
  ChevronRight, 
  AlertTriangle, 
  Quote, 
  PlusCircle, 
  Info,
  Check
} from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenSocial: (network: SocialNetwork) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenSocial
}) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [selectedCity, setSelectedCity] = useState<string>('todas');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAcademicDetails, setShowAcademicDetails] = useState(false);

  // New review form
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('Lima');
  const [newQuote, setNewQuote] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleToggleLike = (id: string) => {
    const isCurrentlyLiked = likedMap[id];
    setLikedMap(prev => ({ ...prev, [id]: !isCurrentlyLiked }));
    setTestimonials(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, likes: isCurrentlyLiked ? item.likes - 1 : item.likes + 1 }
          : item
      )
    );
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newQuote.trim()) return;

    const newReview: Testimonial = {
      id: `t-user-${Date.now()}`,
      name: newName,
      city: newCity,
      date: 'Hoy',
      quote: newQuote,
      likes: 1,
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80'
    };

    setTestimonials([newReview, ...testimonials]);
    setNewName('');
    setNewQuote('');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowAddForm(false);
    }, 2000);
  };

  const filtered = selectedCity === 'todas'
    ? testimonials
    : testimonials.filter(t => t.city.toLowerCase() === selectedCity.toLowerCase());

  return (
    <section className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Strip with Social CTA buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-black text-[#781734] font-display">
                Opiniones de nuestros consumidores
              </h2>
              <span className="text-2xl">🌾</span>
            </div>
            <p className="text-stone-600 text-sm mt-1">
              Conoce lo que dicen quienes ya disfrutan de AndiCookies en todo el país.
            </p>
          </div>

          {/* Social CTAs that derive into interactive hubs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenSocial('instagram')}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 text-xs font-bold shadow-xs hover:border-pink-300 transition-colors"
            >
              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                <Instagram className="w-3.5 h-3.5" />
              </div>
              <span>Síguenos en Instagram</span>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            <button
              onClick={() => onOpenSocial('tiktok')}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 text-xs font-bold shadow-xs hover:border-stone-900 transition-colors"
            >
              <div className="w-5 h-5 rounded-md bg-stone-900 flex items-center justify-center text-white font-black text-[9px]">
                TT
              </div>
              <span>Míranos en TikTok</span>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
          </div>
        </div>

        {/* City Filter & Leave Review bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white p-3 rounded-xl border border-stone-200">
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            <span className="text-stone-400 text-xs font-semibold mr-1">Filtrar por ciudad:</span>
            {['todas', 'Lima', 'Arequipa', 'Trujillo', 'Cusco'].map(c => (
              <button
                key={c}
                onClick={() => setSelectedCity(c)}
                className={`px-3 py-1 rounded-lg font-medium capitalize transition-colors ${
                  selectedCity === c 
                    ? 'bg-[#781734] text-white' 
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {c === 'todas' ? 'Todas las ciudades' : c}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-1.5 text-xs font-bold text-[#781734] hover:text-[#5a1127]"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{showAddForm ? 'Cancelar' : 'Dejar mi testimonio'}</span>
          </button>
        </div>

        {/* Form Modal / Accordion */}
        {showAddForm && (
          <form onSubmit={handleAddReview} className="mb-6 p-4 bg-white rounded-xl border border-amber-300 shadow-sm animate-in fade-in duration-200">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#781734] mb-3">
              Comparte tu experiencia con AndiCookies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">Nombre o inicial</label>
                <input
                  type="text"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  placeholder="Ej. Carmen V."
                  required
                  className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781734]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-stone-600 mb-1">Ciudad</label>
                <select
                  value={newCity}
                  onChange={e => setNewCity(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781734]"
                >
                  <option value="Lima">Lima</option>
                  <option value="Arequipa">Arequipa</option>
                  <option value="Trujillo">Trujillo</option>
                  <option value="Cusco">Cusco</option>
                  <option value="Huancayo">Huancayo</option>
                  <option value="Chiclayo">Chiclayo</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-[11px] font-semibold text-stone-600 mb-1">Tu testimonio</label>
              <textarea
                value={newQuote}
                onChange={e => setNewQuote(e.target.value)}
                placeholder="¿Qué te pareció el sabor a chocolate y la combinación de quinua y kiwicha?"
                rows={2}
                required
                className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781734]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-500">
                Se publicará con 5 estrellas en la comunidad.
              </span>
              <button
                type="submit"
                className="bg-[#781734] hover:bg-[#601229] text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-colors"
              >
                {formSubmitted ? '¡Publicado con éxito!' : 'Publicar testimonio'}
              </button>
            </div>
          </form>
        )}

        {/* 4 Testimonial Cards - Grid matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item) => {
            const isLiked = likedMap[item.id];
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Top: Avatar, Rating & Quote Mark */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="relative">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-amber-200"
                      />
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-stone-200 mt-1" />
                    </div>
                  </div>

                  {/* Body quote with key highlights as in the original graphic */}
                  <p className="text-xs text-stone-700 leading-relaxed italic mb-4">
                    "{item.quote}"
                  </p>
                </div>

                {/* Footer: Name, City, Date & Like Counter */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-stone-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-stone-400">
                      {item.city} <span aria-hidden="true">·</span> {item.date}
                    </p>
                  </div>

                  <button
                    onClick={() => handleToggleLike(item.id)}
                    className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg transition-colors ${
                      isLiked 
                        ? 'text-rose-600 bg-rose-50' 
                        : 'text-stone-500 hover:text-rose-600 hover:bg-stone-50'
                    }`}
                    title="Dar Me Gusta a esta opinión"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-600' : ''}`} />
                    <span className="tabular-nums">{item.likes}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Notice Banner - Exact replication from user Image 1 */}
        <div className="mt-8 bg-rose-50 border border-rose-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-rose-900">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-rose-200 flex items-center justify-center shrink-0 text-rose-800">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-rose-900">
                EJEMPLO ILUSTRATIVO PARA ANÁLISIS ACADÉMICO
              </p>
              <p className="text-xs text-rose-800">
                Testimonios con afirmaciones de beneficios sin sustento técnico verificado.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAcademicDetails(!showAcademicDetails)}
            className="text-xs font-bold text-rose-800 underline hover:text-rose-950 flex items-center gap-1 shrink-0"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{showAcademicDetails ? 'Ocultar análisis legal' : 'Ver análisis académico / INDECOPI'}</span>
          </button>
        </div>

        {/* Expandable Academic Details */}
        {showAcademicDetails && (
          <div className="mt-3 bg-white border border-rose-200 rounded-xl p-5 text-xs text-stone-700 space-y-2.5 animate-in fade-in duration-200">
            <h4 className="font-bold text-stone-900 text-sm">
              Análisis Regulatorio: Publicidad Testimonial y Declaraciones de Salud (Perú)
            </h4>
            <p>
              En la legislación peruana (Ley de Represión de la Competencia Desleal - Decreto Legislativo 1044 y Código de Protección al Consumidor - Ley 29571), las afirmaciones relativas a la salud, energía sostenida y control de peso en productos alimenticios deben contar con <strong>sustento técnico previo y objetivo</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-stone-600">
              <li><strong>Principio de Veracidad:</strong> Los anunciantes deben contar con las pruebas científicas que sustenten las propiedades antes de difundir la campaña.</li>
              <li><strong>Publicidad Testimonial:</strong> El uso de consumidores reales no exime a la empresa de corroborar que los efectos descritos corresponden a una experiencia típica verificada científicamente.</li>
              <li><strong>Superalimentos:</strong> Si bien la quinua y kiwicha poseen alto valor nutricional per se, la afirmación "100% saludable" o "mantiene el peso" requiere evaluar el perfil calórico y de azúcares totales del producto final.</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
