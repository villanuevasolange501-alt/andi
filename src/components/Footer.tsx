import React from 'react';
import { ActiveView, SocialNetwork } from '../types';
import { COMPANY_INFO } from '../data/andinaData';
import { 
  Mountain, 
  MessageCircle, 
  Instagram, 
  Share2, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  BookOpen, 
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ActiveView) => void;
  onOpenSocial: (network: SocialNetwork) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenSocial
}) => {
  return (
    <footer className="bg-[#1E1A18] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#781734] flex items-center justify-center text-amber-300 shadow-sm">
                <Mountain className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white font-display tracking-tight uppercase">
                  Sabores Andinos
                </span>
                <span className="text-xs text-stone-400 block font-medium">S.A.C. · RUC {COMPANY_INFO.ruc}</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Desarrollamos alimentos nutritivos y deliciosos basados en superalimentos andinos como la quinua y kiwicha. Creadores de <strong>AndiCookies®</strong>: el sabor de los Andes en cada bocado.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300 font-semibold">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>{COMPANY_INFO.campaign}</span>
            </div>
          </div>

          {/* Redes Sociales Oficiales (Interactive Triggers) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Redes Sociales Oficiales
            </h4>
            <p className="text-xs text-stone-400">
              Haz clic en cualquiera de nuestras redes para consultar información, promociones o chatear con un asesor:
            </p>

            <div className="space-y-2">
              <button
                onClick={() => onOpenSocial('whatsapp')}
                className="w-full flex items-center justify-between p-2.5 bg-stone-900/80 hover:bg-[#25D366]/20 border border-stone-700/60 rounded-xl text-xs font-medium text-stone-200 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#25D366] text-white flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold leading-none">WhatsApp Business</p>
                    <p className="text-[10px] text-stone-400">+51 987 654 321</p>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold group-hover:underline">Ver info &gt;</span>
              </button>

              <button
                onClick={() => onOpenSocial('instagram')}
                className="w-full flex items-center justify-between p-2.5 bg-stone-900/80 hover:bg-pink-600/20 border border-stone-700/60 rounded-xl text-xs font-medium text-stone-200 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold leading-none">Instagram</p>
                    <p className="text-[10px] text-stone-400">@AndiCookies</p>
                  </div>
                </div>
                <span className="text-[10px] text-pink-400 font-bold group-hover:underline">Ver feed &gt;</span>
              </button>

              <button
                onClick={() => onOpenSocial('tiktok')}
                className="w-full flex items-center justify-between p-2.5 bg-stone-900/80 hover:bg-stone-800 border border-stone-700/60 rounded-xl text-xs font-medium text-stone-200 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-black text-white flex items-center justify-center font-black text-xs border border-stone-600">
                    TT
                  </div>
                  <div className="text-left">
                    <p className="font-bold leading-none">TikTok</p>
                    <p className="text-[10px] text-stone-400">@AndiCookies (38.2K)</p>
                  </div>
                </div>
                <span className="text-[10px] text-stone-300 font-bold group-hover:underline">Ver videos &gt;</span>
              </button>

              <button
                onClick={() => onOpenSocial('facebook')}
                className="w-full flex items-center justify-between p-2.5 bg-stone-900/80 hover:bg-blue-600/20 border border-stone-700/60 rounded-xl text-xs font-medium text-stone-200 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold leading-none">Facebook</p>
                    <p className="text-[10px] text-stone-400">Sabores Andinos S.A.C.</p>
                  </div>
                </div>
                <span className="text-[10px] text-blue-400 font-bold group-hover:underline">Ver página &gt;</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('inicio')} className="hover:text-amber-300 transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('productos')} className="hover:text-amber-300 transition-colors">
                  Nuestros productos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('nutricion')} className="hover:text-amber-300 transition-colors">
                  Información nutricional
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('historia')} className="hover:text-amber-300 transition-colors">
                  Nuestra historia
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('recetas')} className="hover:text-amber-300 transition-colors">
                  Recetas andinas
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Políticas & Atención
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('politicas')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
                  <span>Política de privacidad</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('politicas')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
                  <span>Devoluciones y reembolsos</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('politicas')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-500" />
                  <span>Términos y condiciones</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('politicas')} className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                  <span className="font-semibold text-stone-200">Libro de reclamaciones</span>
                </button>
              </li>
            </ul>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Sabores Andinos S.A.C. Todos los derechos reservados. AndiCookies® marca registrada.</p>
          <div className="flex items-center gap-4">
            <span>RUC: {COMPANY_INFO.ruc}</span>
            <span>·</span>
            <span>Operador logístico: {COMPANY_INFO.shippingPartner}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
