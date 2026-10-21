import React, { useState } from 'react';
import { PRODUCTS } from '../data/andinaData';
import { Product, SocialNetwork } from '../types';
import { 
  ShoppingBag, 
  MessageCircle, 
  Check, 
  Sparkles, 
  Layers, 
  Eye, 
  X,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface ProductCatalogProps {
  onAddToCart: (product: Product, quantity?: number) => void;
  onOpenSocial: (network: SocialNetwork) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onAddToCart,
  onOpenSocial
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = (product: Product) => {
    onAddToCart(product, 1);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1800);
  };

  const handleModalAdd = () => {
    if (!selectedProduct) return;
    onAddToCart(selectedProduct, quantity);
    setAddedProductId(selectedProduct.id);
    setTimeout(() => {
      setAddedProductId(null);
      setSelectedProduct(null);
      setQuantity(1);
    }, 1200);
  };

  const handleWhatsAppOrder = (product: Product) => {
    onOpenSocial('whatsapp');
  };

  return (
    <section id="productos" className="py-14 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#781734] bg-stone-100 px-3.5 py-1 rounded-full">
            Catálogo Oficial Sabores Andinos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 font-display mt-2 mb-3">
            Nuestros Productos AndiCookies
          </h2>
          <p className="text-stone-600 text-sm">
            Elaboradas con harina integral de quinua y kiwicha seleccionada, miel de abeja silvestre y suave relleno de chocolate.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const isAdded = addedProductId === product.id;
            return (
              <div
                key={product.id}
                className="bg-[#FAF7F2] rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#781734] text-amber-300 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                        {product.badge}
                      </span>
                    )}
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-stone-800 p-2 rounded-lg text-xs font-semibold backdrop-blur-xs shadow-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver detalles</span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                      <span>{product.weight} · {product.units} unidades</span>
                      <span className="font-semibold text-emerald-700">En stock</span>
                    </div>

                    <h3 className="font-bold text-lg text-stone-900 font-display leading-snug group-hover:text-[#781734] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 mt-2 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Portions & Nutrition pill-free highlights */}
                    <div className="py-2.5 px-3 bg-white rounded-xl border border-stone-200/80 text-[11px] text-stone-600 flex items-center justify-between">
                      <span>⚡ 150 kcal / porción</span>
                      <span>·</span>
                      <span>🌾 48% Harina de quinua</span>
                      <span>·</span>
                      <span>🌱 Kiwicha 32%</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-stone-200/60 mt-2">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xs text-stone-400 block">Precio por unidad</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-[#781734] font-display tabular-nums">
                          S/ {product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-stone-400 line-through tabular-nums">
                            S/ {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-xs text-stone-600 hover:text-[#781734] font-semibold underline underline-offset-2"
                    >
                      Ver ingredientes
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAdd(product)}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition-all ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#781734] hover:bg-[#601229] text-white shadow-xs'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>¡Agregado!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                          <span>Añadir al carrito</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleWhatsAppOrder(product)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
                      title="Pedir directamente vía WhatsApp Business"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Pedir x WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-stone-200 bg-stone-50">
                <h3 className="font-bold text-stone-900 text-base">
                  Detalles del Producto · Sabores Andinos
                </h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5">
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full sm:w-48 aspect-square object-cover rounded-xl border border-stone-200"
                  />
                  <div>
                    <span className="text-xs text-amber-800 font-bold uppercase tracking-wider">
                      AndiCookies® Chocolate
                    </span>
                    <h2 className="text-xl font-black text-stone-900 font-display mt-0.5">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-2xl font-black text-[#781734] font-display mt-1 mb-2 tabular-nums">
                      S/ {selectedProduct.price.toFixed(2)}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>

                {/* Packaging Specification Data from Image 6 */}
                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-stone-200 text-xs space-y-3">
                  <h4 className="font-bold text-stone-900 uppercase text-[11px] tracking-wider text-[#781734]">
                    Ingredientes Completos (Declarados en Empaque)
                  </h4>
                  <div className="space-y-1.5 text-stone-700">
                    <p>
                      <strong>Galleta:</strong> {selectedProduct.ingredients.base.join(', ')}.
                    </p>
                    <p>
                      <strong>Relleno chocolate:</strong> {selectedProduct.ingredients.filling.join(', ')}.
                    </p>
                    <p className="text-amber-900 font-semibold pt-1">
                      ⚠️ {selectedProduct.ingredients.allergens} {selectedProduct.ingredients.traces}
                    </p>
                  </div>
                </div>

                {/* Nutritional Micro Table */}
                <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
                  <div className="bg-stone-100 px-4 py-2 font-bold text-stone-800 flex justify-between">
                    <span>Información Nutricional</span>
                    <span>Porción: {selectedProduct.nutrition.servingSize}</span>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-stone-100 p-3 bg-white text-[11px]">
                    <div className="space-y-1 pr-2">
                      <div className="flex justify-between"><span>Energía:</span> <strong className="tabular-nums">150 kcal</strong></div>
                      <div className="flex justify-between"><span>Proteínas:</span> <strong className="tabular-nums">2.4 g</strong></div>
                      <div className="flex justify-between"><span>Grasas totales:</span> <strong className="tabular-nums">7.2 g</strong></div>
                    </div>
                    <div className="space-y-1 pl-2">
                      <div className="flex justify-between"><span>Carbohidratos:</span> <strong className="tabular-nums">17.4 g</strong></div>
                      <div className="flex justify-between"><span>Azúcares:</span> <strong className="tabular-nums">3.6 g</strong></div>
                      <div className="flex justify-between"><span>Fibra dietética:</span> <strong className="tabular-nums">1.2 g</strong></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-600 font-semibold">Cantidad:</span>
                  <div className="flex items-center border border-stone-300 rounded-lg bg-white">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2.5 py-1 text-stone-600 hover:bg-stone-100 rounded-l-lg font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-bold tabular-nums">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2.5 py-1 text-stone-600 hover:bg-stone-100 rounded-r-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleModalAdd}
                    className="bg-[#781734] hover:bg-[#601229] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-4 h-4 text-amber-300" />
                    <span>Añadir al pedido · S/ {(selectedProduct.price * quantity).toFixed(2)}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
