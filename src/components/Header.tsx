import React, { useState } from 'react';
import { ActiveView, SocialNetwork } from '../types';
import { COMPANY_INFO } from '../data/andinaData';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  MessageCircle, 
  Instagram, 
  Share2,
  Globe,
  Mountain
} from 'lucide-react';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSocial: (network: SocialNetwork) => void;
  onOpenSearch: () => void;
  onOpenFileExplorer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  cartCount,
  onOpenCart,
  onOpenSocial,
  onOpenSearch,
  onOpenFileExplorer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{ id: ActiveView; label: string }> = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'productos', label: 'Nuestros productos' },
    { id: 'nutricion', label: 'Nutrición' },
    { id: 'historia', label: 'Nuestra historia' },
    { id: 'recetas', label: 'Recetas' },
    { id: 'politicas', label: 'Políticas & Ayuda' },
  ];

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DEC8]">
      {/* Top micro banner for Social Networks and Official Channels */}
      <div className="bg-[#781734] text-white text-xs px-4 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-amber-300" />
          <span className="font-semibold tracking-wide">
            {COMPANY_INFO.campaign}
          </span>
          <span className="hidden sm:inline text-amber-200/80">· Superalimentos de los Andes</span>
        </div>

        {/* Quick Social Action Triggers - Clicking leads to interactive information hub */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-[11px] text-stone-200">
            Canales oficiales:
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onOpenSocial('whatsapp')}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-600 hover:bg-emerald-500 text-[11px] font-bold text-white transition-colors"
              title="Información y pedidos por WhatsApp Business"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => onOpenSocial('instagram')}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-pink-700 hover:bg-pink-600 text-[11px] font-bold text-white transition-colors"
              title="Información y fotos en Instagram"
            >
              <Instagram className="w-3 h-3" />
              <span>Instagram</span>
            </button>

            <button
              onClick={() => onOpenSocial('tiktok')}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-stone-900 hover:bg-stone-800 text-[11px] font-bold text-white transition-colors"
              title="Videos y tendencias en TikTok"
            >
              <span className="font-black text-[10px]">TT</span>
              <span>TikTok</span>
            </button>

            <button
              onClick={() => onOpenSocial('facebook')}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-blue-700 hover:bg-blue-600 text-[11px] font-bold text-white transition-colors"
              title="Página y comunidad en Facebook"
            >
              <Share2 className="w-3 h-3" />
              <span className="hidden xs:inline">Facebook</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Brand - Nav - Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div 
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 cursor-pointer shrink-0 group"
        >
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#781734] flex items-center justify-center text-amber-300 shadow-sm group-hover:scale-105 transition-transform">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-[#781734] font-display uppercase">
                  Sabores Andinos
                </span>
                <span className="text-[10px] font-bold text-stone-500 bg-stone-200/80 px-1.5 py-0.2 rounded">
                  S.A.C.
                </span>
              </div>
              <p className="text-[11px] font-semibold text-amber-800 flex items-center gap-1">
                <span>AndiCookies®</span>
                <span className="text-stone-400 font-normal">· Sabor de los Andes</span>
              </p>
            </div>
          </div>
        </div>

        {/* Zone 2: Concise Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-stone-700">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative py-1 transition-colors whitespace-nowrap hover:text-[#781734] ${
                activeView === item.id 
                  ? 'text-[#781734] font-bold' 
                  : 'text-stone-600'
              }`}
            >
              {item.label}
              {activeView === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#781734] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="/sabores-andinos-andicookies.zip"
            download="sabores-andinos-andicookies.zip"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
            title="Descargar archivo ZIP del proyecto completo (3.8 MB)"
          >
            <span>💾</span>
            <span>Descargar ZIP</span>
          </a>

          <button
            onClick={onOpenFileExplorer}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold transition-colors border border-stone-200"
            title="Ver repositorio de código y archivos"
          >
            <span className="text-amber-700">📁</span>
            <span>Repositorio</span>
          </button>

          <button
            onClick={onOpenSearch}
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded-full transition-colors"
            aria-label="Buscar en la web"
            title="Buscar información o productos"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-[#781734] hover:bg-[#601229] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-transform active:scale-95 shadow-sm"
            aria-label="Ver carrito"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Carrito</span>
            <span className="bg-amber-400 text-stone-900 text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center tabular-nums">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg"
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200 shadow-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activeView === item.id
                  ? 'bg-[#781734] text-white'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-stone-100 grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSocial('whatsapp');
              }}
              className="flex items-center justify-center gap-1.5 p-2 bg-emerald-50 text-emerald-800 rounded-lg font-bold border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              WhatsApp Info
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSocial('instagram');
              }}
              className="flex items-center justify-center gap-1.5 p-2 bg-pink-50 text-pink-800 rounded-lg font-bold border border-pink-200"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              Instagram Feed
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
