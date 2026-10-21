import React, { useState } from 'react';
import { SocialNetwork } from '../types';
import { MessageCircle, Instagram, Share2, X, ChevronUp } from 'lucide-react';

interface FloatingSocialWidgetProps {
  onOpenSocial: (network: SocialNetwork) => void;
}

export const FloatingSocialWidget: React.FC<FloatingSocialWidgetProps> = ({
  onOpenSocial
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Expanded quick icons */}
      {isExpanded && (
        <div className="flex flex-col gap-2 items-end mb-1 animate-in slide-in-from-bottom-3 duration-200">
          <button
            onClick={() => {
              setIsExpanded(false);
              onOpenSocial('tiktok');
            }}
            className="flex items-center gap-2 bg-stone-900 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg hover:bg-stone-800 transition-all border border-stone-700"
          >
            <span className="font-black text-xs">TT</span>
            <span>TikTok Oficial</span>
          </button>

          <button
            onClick={() => {
              setIsExpanded(false);
              onOpenSocial('instagram');
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg hover:opacity-95 transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram Feed</span>
          </button>

          <button
            onClick={() => {
              setIsExpanded(false);
              onOpenSocial('facebook');
            }}
            className="flex items-center gap-2 bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg hover:bg-blue-700 transition-all"
          >
            <Share2 className="w-4 h-4" />
            <span>Facebook Oficial</span>
          </button>
        </div>
      )}

      {/* Main WhatsApp & Channels Trigger */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 shadow-md border border-stone-200 transition-transform active:scale-95"
          title="Ver todas las redes sociales"
          aria-label="Ver todas las redes sociales"
        >
          {isExpanded ? <X className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>

        <button
          onClick={() => onOpenSocial('whatsapp')}
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full font-bold text-xs shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 group"
          title="Abrir WhatsApp Business Oficial"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-200 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline">WhatsApp Sabores Andinos</span>
        </button>
      </div>
    </div>
  );
};
