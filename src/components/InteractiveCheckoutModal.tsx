import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Truck, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  CreditCard, 
  CheckCircle2 
} from 'lucide-react';
import { CartItem } from '../types';

interface InteractiveCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderCompleted: () => void;
}

export const InteractiveCheckoutModal: React.FC<InteractiveCheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderCompleted
}) => {
  const [step, setStep] = useState<2 | 3 | 4>(2);
  
  // Default values from Image 5
  const [fullName, setFullName] = useState('María Torres');
  const [email, setEmail] = useState('maria.torres@gmail.com');
  const [phone, setPhone] = useState('987654321');
  const [address, setAddress] = useState('Av. Los Álamos 123');
  const [department, setDepartment] = useState('Lima');
  const [province, setProvince] = useState('Lima');
  const [district, setDistrict] = useState('Santiago de Surco');
  
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<'yape' | 'tarjeta' | 'contraentrega'>('yape');
  const [trackingCode, setTrackingCode] = useState('');

  if (!isOpen) return null;

  // Calculate pricing based on current cart or fallback to Image 5 baseline
  const subtotal = cartItems.length > 0 
    ? cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    : 25.80; // 2 x 12.90
  const shippingFee = 6.90;
  const total = subtotal + shippingFee;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2) {
      if (!acceptedTerms) {
        alert('Debes aceptar los términos y condiciones para continuar.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      const code = `ANDI-${Math.floor(100000 + Math.random() * 900000)}`;
      setTrackingCode(code);
      setStep(4);
      onOrderCompleted();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-stone-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF7F2]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-stone-900 text-sm">
              Proceso de Compra · Sabores Andinos S.A.C.
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator - Replicating Image 5 */}
        <div className="px-6 py-3 border-b border-stone-200 bg-white">
          <div className="flex items-center justify-center max-w-xl mx-auto gap-3 text-xs">
            <div className="flex items-center gap-2 text-stone-400">
              <span className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center font-bold text-[11px] text-stone-600">
                1
              </span>
              <span>Carrito</span>
            </div>

            <span className="w-8 h-0.5 bg-stone-200" />

            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#781734] font-bold' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] text-white ${step >= 2 ? 'bg-[#781734]' : 'bg-stone-300'}`}>
                2
              </span>
              <span>Datos de envío</span>
            </div>

            <span className="w-8 h-0.5 bg-stone-200" />

            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#781734] font-bold' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] text-white ${step >= 3 ? 'bg-[#781734]' : 'bg-stone-300'}`}>
                3
              </span>
              <span>Pago</span>
            </div>

            <span className="w-8 h-0.5 bg-stone-200" />

            <div className={`flex items-center gap-2 ${step === 4 ? 'text-emerald-700 font-bold' : 'text-stone-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] text-white ${step === 4 ? 'bg-emerald-600' : 'bg-stone-300'}`}>
                4
              </span>
              <span>Confirmación</span>
            </div>
          </div>
        </div>

        {/* Body Container */}
        <div className="flex-1 overflow-y-auto p-6 bg-stone-50">
          {step === 2 && (
            <form onSubmit={handleNextStep} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Form Details */}
              <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-stone-200 space-y-5">
                <h3 className="text-xl font-black text-stone-900 font-display">
                  Datos de envío
                </h3>

                {/* Contact info */}
                <div>
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    Información de contacto
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Nombre completo</label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781734]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Correo electrónico</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781734]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Teléfono</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781734]"
                      />
                    </div>
                  </div>
                </div>

                {/* Address info */}
                <div>
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    Dirección de envío
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">Dirección</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#781734]"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="block text-[10px] font-semibold text-stone-600 mb-1">Departamento</label>
                        <select
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="w-full text-xs px-2 py-2 border border-stone-300 rounded-lg"
                        >
                          <option value="Lima">Lima</option>
                          <option value="Cusco">Cusco</option>
                          <option value="Arequipa">Arequipa</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-stone-600 mb-1">Provincia</label>
                        <select
                          value={province}
                          onChange={(e) => setProvince(e.target.value)}
                          className="w-full text-xs px-2 py-2 border border-stone-300 rounded-lg"
                        >
                          <option value="Lima">Lima</option>
                          <option value="Cusco">Cusco</option>
                          <option value="Arequipa">Arequipa</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold text-stone-600 mb-1">Distrito</label>
                        <select
                          value={district}
                          onChange={(e) => setDistrict(e.target.value)}
                          className="w-full text-xs px-2 py-2 border border-stone-300 rounded-lg"
                        >
                          <option value="Santiago de Surco">Santiago de Surco</option>
                          <option value="Miraflores">Miraflores</option>
                          <option value="San Isidro">San Isidro</option>
                          <option value="La Molina">La Molina</option>
                          <option value="San Borja">San Borja</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consent checkbox from Image 5 */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-stone-700 cursor-pointer p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-0.5 rounded text-[#781734] focus:ring-[#781734]"
                    />
                    <span>
                      Acepto los <span className="font-semibold underline">Términos y Condiciones</span> y la <span className="font-semibold underline">Política de Privacidad</span>, y autorizo a Sabores Andinos S.A.C. a compartir mis datos personales con su operador logístico y otros terceros cuando sea necesario para la gestión de mi pedido.
                    </span>
                  </label>

                  {/* Academic critique bubble as annotated in Image 5 */}
                  <div className="mt-2 p-2.5 bg-rose-50 text-rose-900 border border-rose-200 rounded-lg text-[11px] flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Anotación para análisis:</strong> Autorización poco específica. Se solicita autorización para compartir datos sin detallar claramente con qué terceros ni para qué finalidades secundarias.
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#781734] hover:bg-[#601229] text-white font-bold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Continuar con el pago</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right Column: Order Summary & Logistics */}
              <div className="lg:col-span-5 space-y-4">
                {/* Tu pedido */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-4">
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                    Tu pedido
                  </h4>

                  <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                    <img
                      src="/src/assets/images/andicookies_pack_front_1792383991924.jpg"
                      alt="AndiCookies Chocolate"
                      className="w-14 h-14 object-cover rounded-lg border border-stone-200"
                    />
                    <div className="flex-1">
                      <h5 className="font-bold text-xs text-stone-900">AndiCookies Chocolate</h5>
                      <p className="text-xs text-[#781734] font-bold tabular-nums">S/ 12.90</p>
                      <p className="text-[11px] text-stone-500">Cantidad: {cartItems.length > 0 ? cartItems[0]?.quantity || 2 : 2}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-stone-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-bold text-stone-900 tabular-nums">S/ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Envío</span>
                      <span className="font-bold text-stone-900 tabular-nums">S/ {shippingFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-[#781734] pt-2 border-t border-stone-100">
                      <span>Total</span>
                      <span className="tabular-nums">S/ {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Operador Logístico Andino Express */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-stone-900">Andino Express</h5>
                      <p className="text-[10px] text-stone-400">Envíos que conectan contigo</p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-[11px] text-stone-600 list-disc pl-4">
                    <li>Entregas a todo Lima y provincias.</li>
                    <li>Seguimiento de tu pedido en línea con código de rastreo.</li>
                    <li>Tu información se comparte con nuestro operador logístico para gestionar la entrega.</li>
                  </ul>
                </div>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl border border-stone-200 space-y-6">
              <h3 className="text-xl font-black text-stone-900 font-display">
                Selecciona tu método de pago
              </h3>

              <div className="space-y-3">
                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === 'yape' ? 'border-[#781734] bg-stone-50' : 'border-stone-200'}`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'yape'}
                      onChange={() => setPaymentMethod('yape')}
                      className="text-[#781734] focus:ring-[#781734]"
                    />
                    <div>
                      <p className="font-bold text-xs text-stone-900">Yape / Plin (Recomendado)</p>
                      <p className="text-[11px] text-stone-500">Pago instantáneo al +51 987 654 321</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Sin comisión</span>
                </label>

                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === 'tarjeta' ? 'border-[#781734] bg-stone-50' : 'border-stone-200'}`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'tarjeta'}
                      onChange={() => setPaymentMethod('tarjeta')}
                      className="text-[#781734] focus:ring-[#781734]"
                    />
                    <div>
                      <p className="font-bold text-xs text-stone-900">Tarjeta de Débito o Crédito</p>
                      <p className="text-[11px] text-stone-500">Visa, Mastercard, Amex</p>
                    </div>
                  </div>
                  <CreditCard className="w-5 h-5 text-stone-400" />
                </label>

                <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === 'contraentrega' ? 'border-[#781734] bg-stone-50' : 'border-stone-200'}`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'contraentrega'}
                      onChange={() => setPaymentMethod('contraentrega')}
                      className="text-[#781734] focus:ring-[#781734]"
                    />
                    <div>
                      <p className="font-bold text-xs text-stone-900">Pago contraentrega en efectivo</p>
                      <p className="text-[11px] text-stone-500">Paga al repartidor de Andino Express</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-stone-500">Lima</span>
                </label>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex justify-between items-center text-xs">
                <span>Total a pagar con envío:</span>
                <span className="text-lg font-black text-[#781734] tabular-nums">S/ {total.toFixed(2)}</span>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-2.5 border border-stone-300 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-100"
                >
                  Volver
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-2/3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm"
                >
                  Confirmar y pagar pedido
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl border border-stone-200 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-stone-900 font-display">
                ¡Pedido Confirmado con Éxito!
              </h3>
              <p className="text-xs text-stone-600">
                Gracias <strong>{fullName}</strong>. Tu pedido de AndiCookies ha sido registrado y transferido al operador <strong>Andino Express</strong> para su despacho a {district}, Lima.
              </p>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest block font-bold">Código de Guía de Rastreo</span>
                <span className="text-base font-black font-mono text-[#781734] tracking-wide">{trackingCode}</span>
                <p className="text-[11px] text-stone-500 mt-1">Tiempo de entrega estimado: 24 a 48 horas hábiles.</p>
              </div>

              <button
                onClick={onClose}
                className="w-full py-2.5 bg-[#781734] hover:bg-[#601229] text-white rounded-xl text-xs font-bold transition-colors"
              >
                Continuar navegando en Sabores Andinos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
