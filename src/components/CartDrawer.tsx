import React from 'react';
import { CartItem, SocialNetwork } from '../types';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  MessageCircle, 
  Truck,
  Plus,
  Minus
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  onOpenSocial: (network: SocialNetwork) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onOpenSocial
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 50.0;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFree = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 6.90;
  const total = subtotal + shippingFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-stone-200">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 bg-[#FAF7F2] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#781734] text-white flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-sm">Tu Carrito de Compras</h3>
                <p className="text-[11px] text-stone-500">Sabores Andinos S.A.C. · AndiCookies</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="p-3.5 bg-amber-50/70 border-b border-amber-200/60 text-xs">
            <div className="flex items-center justify-between font-semibold text-stone-800 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-amber-700" />
                {subtotal >= freeShippingThreshold ? (
                  <strong className="text-emerald-700">¡Tienes Envío Gratis con Andino Express! 🎉</strong>
                ) : (
                  <span>Agrega <strong>S/ {remainingForFree.toFixed(2)}</strong> más para Envío Gratis</span>
                )}
              </span>
            </div>
            <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#781734] h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Item List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-400">
                <ShoppingBag className="w-12 h-12 stroke-[1.5] mb-3 text-stone-300" />
                <p className="text-sm font-bold text-stone-700">Tu carrito está vacío</p>
                <p className="text-xs text-stone-500 mt-1 max-w-xs">
                  Agrega empaques de AndiCookies Chocolate Original o nuestros packs familiares con quinua y kiwicha.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg border border-stone-200 bg-white"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-bold text-xs text-stone-900 leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-stone-400 hover:text-rose-600 p-0.5"
                          title="Eliminar producto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-stone-500">{item.product.weight}</p>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center border border-stone-300 rounded-md bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 hover:bg-stone-100 text-stone-600 rounded-l-md"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 hover:bg-stone-100 text-stone-600 rounded-r-md"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-black text-xs text-[#781734] tabular-nums">
                        S/ {(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout CTAs */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3 text-xs">
              <div className="space-y-1.5 text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal productos</span>
                  <span className="font-bold text-stone-900 tabular-nums">S/ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío (Andino Express)</span>
                  <span className="font-bold text-stone-900 tabular-nums">
                    {shippingFee === 0 ? 'GRATIS' : `S/ ${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-[#781734] pt-2 border-t border-stone-200">
                  <span>Total estimado</span>
                  <span className="tabular-nums">S/ {total.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => {
                    onClose();
                    onProceedToCheckout();
                  }}
                  className="w-full py-3 bg-[#781734] hover:bg-[#601229] text-white font-bold rounded-xl shadow-sm transition-transform active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>Proceder al Checkout (Paso 2)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenSocial('whatsapp');
                  }}
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Comprar por WhatsApp Business</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
