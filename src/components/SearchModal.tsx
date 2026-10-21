import React, { useState } from 'react';
import { ActiveView, SocialNetwork } from '../types';
import { Search, X, ChevronRight, FileText, ShoppingBag, Leaf, HelpCircle, MessageCircle } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ActiveView) => void;
  onOpenSocial: (network: SocialNetwork) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenSocial
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchableItems = [
    { title: 'AndiCookies Chocolate Original (180g)', category: 'Producto', view: 'productos' as ActiveView, icon: ShoppingBag, snippet: 'Galletas de quinua y kiwicha con relleno cremoso de chocolate. S/ 12.90' },
    { title: 'Pack Familiar AndiCookies x3', category: 'Producto', view: 'productos' as ActiveView, icon: ShoppingBag, snippet: '18 unidades de galletas artesanales. S/ 34.90' },
    { title: 'Política de Devoluciones y Reembolsos', category: 'Legal', view: 'politicas' as ActiveView, icon: FileText, snippet: 'Condiciones de no devolución en efectivo y reposición del producto.' },
    { title: 'Política de Privacidad y Datos Personales', category: 'Legal', view: 'politicas' as ActiveView, icon: FileText, snippet: 'Tratamiento de información, finalidades comerciales y terceros.' },
    { title: 'Contrato Logístico con Andino Express', category: 'Legal / Logística', view: 'politicas' as ActiveView, icon: FileText, snippet: 'Cláusula 5: Intercambio y tratamiento de datos de envío.' },
    { title: 'Información Nutricional & Ingredientes', category: 'Nutrición', view: 'nutricion' as ActiveView, icon: Leaf, snippet: 'Harina de quinua (48%), kiwicha (32%), miel pura y fruto del monje.' },
    { title: 'Alérgenos y Advertencias', category: 'Salud', view: 'nutricion' as ActiveView, icon: HelpCircle, snippet: 'Contiene soya y leche. Puede contener trazas de maní y sésamo.' },
    { title: 'Opiniones y Testimonios de Consumidores', category: 'Comunidad', view: 'inicio' as ActiveView, icon: HelpCircle, snippet: 'Comentarios de María, Carlos, Lucía y Jorge con análisis académico.' },
    { title: 'Canal Oficial de WhatsApp Business', category: 'Redes Sociales', social: 'whatsapp' as SocialNetwork, icon: MessageCircle, snippet: '+51 987 654 321 · Pedidos inmediatos y consultas.' },
    { title: 'Instagram Oficial @AndiCookies', category: 'Redes Sociales', social: 'instagram' as SocialNetwork, icon: MessageCircle, snippet: 'Recetas, fotos del Valle Sagrado y tips de merienda.' },
    { title: 'TikTok Oficial @AndiCookies', category: 'Redes Sociales', social: 'tiktok' as SocialNetwork, icon: MessageCircle, snippet: 'Videos virales de catas y unboxings de galletas andinas.' },
  ];

  const filtered = query.trim() === ''
    ? searchableItems.slice(0, 6)
    : searchableItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.snippet.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-stone-200 bg-stone-50">
          <Search className="w-5 h-5 text-stone-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar productos, políticas, nutrición o redes..."
            autoFocus
            className="w-full bg-transparent text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-stone-500">
              No se encontraron coincidencias para "{query}". Prueba buscando "quinua", "devoluciones", "whatsapp" o "chocolate".
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    onClose();
                    if (item.social) {
                      onOpenSocial(item.social);
                    } else if (item.view) {
                      onNavigate(item.view);
                    }
                  }}
                  className="w-full p-3 rounded-xl hover:bg-[#FAF7F2] transition-colors flex items-start justify-between text-left group border border-transparent hover:border-stone-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-100 group-hover:bg-amber-100 text-stone-600 group-hover:text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-stone-900 group-hover:text-[#781734]">
                          {item.title}
                        </span>
                        <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-0.2 rounded font-medium">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                        {item.snippet}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-600 shrink-0 self-center" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-stone-100 border-t border-stone-200 text-[11px] text-stone-500 flex justify-between">
          <span>Sabores Andinos S.A.C. · Búsqueda Inteligente</span>
          <span className="font-mono">ESC para cerrar</span>
        </div>
      </div>
    </div>
  );
};
