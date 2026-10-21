import React, { useState } from 'react';
import { SocialNetwork } from '../types';
import { COMPANY_INFO, SOCIAL_POSTS } from '../data/andinaData';
import { 
  X, 
  MessageCircle, 
  Instagram, 
  Share2, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Send, 
  ExternalLink,
  ThumbsUp,
  MessageSquare,
  Play,
  Heart,
  ShieldCheck,
  Building2,
  Bookmark
} from 'lucide-react';

interface SocialInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNetwork: SocialNetwork;
}

export const SocialInfoModal: React.FC<SocialInfoModalProps> = ({
  isOpen,
  onClose,
  initialNetwork
}) => {
  const [activeTab, setActiveTab] = useState<SocialNetwork>(initialNetwork);
  const [waMessage, setWaMessage] = useState('');
  const [chatLog, setChatLog] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: '¡Hola! Bienvenido a la línea oficial de WhatsApp Business de Sabores Andinos S.A.C. y AndiCookies. ¿En qué podemos asesorarte hoy?',
      time: 'Justo ahora'
    }
  ]);
  const [isCopied, setIsCopied] = useState(false);

  // Sync tab if initialNetwork changes when opening
  React.useEffect(() => {
    setActiveTab(initialNetwork);
  }, [initialNetwork, isOpen]);

  if (!isOpen) return null;

  const quickQuestions = [
    'Quiero comprar AndiCookies Chocolate (S/ 12.90)',
    '¿Cuál es el costo de envío a mi distrito?',
    '¿Tienen precios por mayor o para distribuidores?',
    '¿Las galletas contienen gluten o lactosa?'
  ];

  const handleSendWaSimulated = (textToSend?: string) => {
    const text = textToSend || waMessage;
    if (!text.trim()) return;

    const newLog = [
      ...chatLog,
      { sender: 'user' as const, text, time: 'Ahora mismo' }
    ];
    setChatLog(newLog);
    setWaMessage('');

    // Automated smart response
    setTimeout(() => {
      let reply = 'Gracias por escribirnos. Un asesor de Sabores Andinos responderá en breve.';
      const lower = text.toLowerCase();
      if (lower.includes('comprar') || lower.includes('pedido') || lower.includes('precio')) {
        reply = '¡Excelente elección! AndiCookies Chocolate de 180g (6 galletas) cuesta S/ 12.90. También disponemos del Pack Familiar x3 a S/ 34.90 con delivery a través de Andino Express.';
      } else if (lower.includes('envío') || lower.includes('cobertura') || lower.includes('distrito')) {
        reply = 'Realizamos despachos a todo Lima Metropolitana (S/ 6.90 tarifa plana) y envíos a nivel nacional vía Andino Express en 24 a 48 horas.';
      } else if (lower.includes('mayor') || lower.includes('distribuid')) {
        reply = 'Contamos con catálogo corporativo a partir de 2 cajas (24 unidades) con 18% de descuento para bodegas, tiendas ecológicas y colegios.';
      } else if (lower.includes('gluten') || lower.includes('lactosa') || lower.includes('alérgeno')) {
        reply = 'Nuestras galletas se elaboran con harina de quinua (48%) y kiwicha (32%). Contienen leche en polvo en el relleno y soya (lecitina). Puede contener trazas de maní.';
      }

      setChatLog(prev => [
        ...prev,
        { sender: 'bot', text: reply, time: 'Ahora mismo' }
      ]);
    }, 650);
  };

  const handleOpenRealWhatsApp = (customText?: string) => {
    const message = customText || waMessage || 'Hola Sabores Andinos, deseo información sobre AndiCookies.';
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/51987654321?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-stone-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h2 className="text-lg font-bold text-stone-900 leading-tight">
                Canales Oficiales e Información de Contacto
              </h2>
              <p className="text-xs text-stone-500">
                Sabores Andinos S.A.C. · AndiCookies® Oficial
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-stone-200 bg-white px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`flex items-center gap-2 py-3 px-4 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'whatsapp'
                ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            WhatsApp Business
          </button>

          <button
            onClick={() => setActiveTab('instagram')}
            className={`flex items-center gap-2 py-3 px-4 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'instagram'
                ? 'border-pink-600 text-pink-700 bg-pink-50/50'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            Instagram (@AndiCookies)
          </button>

          <button
            onClick={() => setActiveTab('tiktok')}
            className={`flex items-center gap-2 py-3 px-4 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'tiktok'
                ? 'border-slate-900 text-slate-900 bg-slate-100/60'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <span className="font-black text-xs">TT</span>
            TikTok (@AndiCookies)
          </button>

          <button
            onClick={() => setActiveTab('facebook')}
            className={`flex items-center gap-2 py-3 px-4 font-semibold text-sm border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'facebook'
                ? 'border-blue-600 text-blue-700 bg-blue-50/50'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Share2 className="w-4 h-4 text-blue-600" />
            Facebook Oficial
          </button>
        </div>

        {/* Tab Body Contents */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#FAF7F2]">
          {/* WHATSAPP BUSINESS TAB */}
          {activeTab === 'whatsapp' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* WhatsApp Business Profile Info Card */}
              <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-stone-900">Sabores Andinos S.A.C.</h3>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      </div>
                      <p className="text-xs text-stone-500">Cuenta de Empresa Oficial Verificada</p>
                      <p className="text-xs text-emerald-700 font-semibold mt-0.5">AndiCookies® Delivery</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs text-stone-600 pt-3 border-t border-stone-100">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                      <span>{COMPANY_INFO.phone} · (01) 987-654-321</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                      <span>{COMPANY_INFO.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-stone-400 shrink-0" />
                      <span>{COMPANY_INFO.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0" />
                      <span>RUC: {COMPANY_INFO.ruc} · Logística: Andino Express</span>
                    </div>
                  </div>

                  <div className="mt-5 p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-xs text-emerald-900">
                    <p className="font-semibold mb-1">¿Qué puedes gestionar aquí?</p>
                    <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-emerald-800">
                      <li>Toma directa de pedidos unitarios y por mayor.</li>
                      <li>Consultas sobre alérgenos, tabla nutricional y fechas de lote.</li>
                      <li>Seguimiento de despacho y número de guía Andino Express.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 space-y-2">
                  <button
                    onClick={() => handleOpenRealWhatsApp('Hola Sabores Andinos, deseo información sobre las AndiCookies.')}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-lg font-bold text-sm shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Abrir en WhatsApp (+51 987 654 321)
                  </button>
                  <p className="text-[11px] text-center text-stone-400">
                    Atención inmediata con asesores en Lima
                  </p>
                </div>
              </div>

              {/* Interactive Live Chat Simulator */}
              <div className="lg:col-span-7 bg-white rounded-xl border border-stone-200 shadow-sm flex flex-col h-[460px]">
                {/* Chat Top Banner */}
                <div className="px-4 py-3 bg-[#075E54] text-white rounded-t-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                      AC
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Atención al Cliente Sabores Andinos</p>
                      <p className="text-[10px] text-emerald-200">En línea · Responde en segundos</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-medium">
                    Simulador Interactivo
                  </span>
                </div>

                {/* Messages Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#E5DDD5]/30">
                  {chatLog.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg p-3 text-xs shadow-sm ${
                          msg.sender === 'user'
                            ? 'bg-[#DCF8C6] text-stone-900 rounded-tr-none'
                            : 'bg-white text-stone-900 rounded-tl-none border border-stone-200'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <span className="block text-[9px] text-stone-400 text-right mt-1">
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick questions chips */}
                <div className="p-2 border-t border-stone-200 bg-stone-50 flex gap-1.5 overflow-x-auto text-[11px]">
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendWaSimulated(q)}
                      className="px-2.5 py-1 bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 rounded-full whitespace-nowrap transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-3 border-t border-stone-200 bg-white rounded-b-xl flex gap-2">
                  <input
                    type="text"
                    value={waMessage}
                    onChange={(e) => setWaMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendWaSimulated()}
                    placeholder="Escribe tu consulta o pedido..."
                    className="flex-1 px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    onClick={() => handleSendWaSimulated()}
                    className="p-2 bg-[#075E54] hover:bg-[#064e46] text-white rounded-lg transition-colors"
                    aria-label="Enviar mensaje"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* INSTAGRAM TAB */}
          {activeTab === 'instagram' && (
            <div className="space-y-6">
              {/* Instagram Profile Header */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <div className="w-full h-full bg-white rounded-full p-0.5">
                      <img
                        src="/src/assets/images/andicookies_pack_front_1792383991924.jpg"
                        alt="AndiCookies Instagram"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-stone-900 text-base">andicookies.oficial</h3>
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded font-medium">Oficial</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-stone-600 mt-1">
                      <span><strong>186</strong> publicaciones</span>
                      <span><strong>14.8K</strong> seguidores</span>
                      <span><strong>312</strong> seguidos</span>
                    </div>
                    <p className="text-xs text-stone-700 mt-1.5 max-w-xl">
                      🍫 Galletas de quinua y kiwicha rellenas con crema de chocolate.<br />
                      🏔️ El sabor de los Andes en cada bocado | 🇵🇪 Sabores Andinos S.A.C.<br />
                      🌱 Campaña Nutrición Sin Fronteras | Envíos Lima & Provincias.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-initial flex items-center justify-center gap-1.5 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-sm hover:opacity-95 transition-opacity"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    Seguir en Instagram
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                  <button
                    onClick={() => handleCopyLink('https://instagram.com/AndiCookies')}
                    className="p-2 border border-stone-200 rounded-lg text-stone-600 hover:bg-stone-50 text-xs font-medium"
                    title="Copiar enlace del perfil"
                  >
                    {isCopied ? '¡Copiado!' : <Share2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Feed Gallery Preview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Publicaciones y Recetas Destacadas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm group">
                    <div className="relative aspect-square overflow-hidden bg-stone-100">
                      <img
                        src="/src/assets/images/hero_andicookies_scene_1792383990263.jpg"
                        alt="Andean morning with AndiCookies"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-xs">
                        Receta
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                        <span className="font-semibold text-stone-800">andicookies.oficial</span>
                        <span>Hace 2 días</span>
                      </div>
                      <p className="text-xs text-stone-700 line-clamp-2">
                        Desayuno andino: yogurt griego con rodajas de fruta y trozos de AndiCookies. ¿Ya tienes tus 3 galletas de la mañana?
                      </p>
                      <div className="flex items-center gap-3 text-xs text-stone-500 mt-2 pt-2 border-t border-stone-100">
                        <span className="flex items-center gap-1 text-rose-600"><Heart className="w-3.5 h-3.5 fill-rose-600" /> 1,420</span>
                        <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> 84</span>
                        <Bookmark className="w-3.5 h-3.5 ml-auto text-stone-400" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm group">
                    <div className="relative aspect-square overflow-hidden bg-stone-100">
                      <img
                        src="/src/assets/images/andicookies_snack_moment_1792383992495.jpg"
                        alt="Consumer moment"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-xs">
                        Comunidad
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                        <span className="font-semibold text-stone-800">andicookies.oficial</span>
                        <span>14 de Octubre</span>
                      </div>
                      <p className="text-xs text-stone-700 line-clamp-2">
                        "Quinua y kiwicha por fuera, chocolate por dentro, felicidad en cada mordida." Gracias @lucia_m por compartir tu pausa del día.
                      </p>
                      <div className="flex items-center gap-3 text-xs text-stone-500 mt-2 pt-2 border-t border-stone-100">
                        <span className="flex items-center gap-1 text-rose-600"><Heart className="w-3.5 h-3.5 fill-rose-600" /> 2,150</span>
                        <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> 142</span>
                        <Bookmark className="w-3.5 h-3.5 ml-auto text-stone-400" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm group">
                    <div className="relative aspect-square overflow-hidden bg-stone-100">
                      <img
                        src="/src/assets/images/andicookies_social_lifestyle_1792383991949.jpg"
                        alt="Packaging unboxing"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-xs">
                        Ingredientes
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                        <span className="font-semibold text-stone-800">andicookies.oficial</span>
                        <span>10 de Octubre</span>
                      </div>
                      <p className="text-xs text-stone-700 line-clamp-2">
                        Cacao puro, miel de abeja y fruto del monje. Conoce el valor nutricional de cada lote directamente en www.andicookies.pe
                      </p>
                      <div className="flex items-center gap-3 text-xs text-stone-500 mt-2 pt-2 border-t border-stone-100">
                        <span className="flex items-center gap-1 text-rose-600"><Heart className="w-3.5 h-3.5 fill-rose-600" /> 1,840</span>
                        <span className="flex items-center gap-1"><MessageSquare className="w-3.5 h-3.5" /> 97</span>
                        <Bookmark className="w-3.5 h-3.5 ml-auto text-stone-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TIKTOK TAB */}
          {activeTab === 'tiktok' && (
            <div className="space-y-6">
              {/* TikTok Profile Header */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-xl border-2 border-emerald-400">
                    AC
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-stone-900 text-base">@andicookies</h3>
                      <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded font-medium">AndiCookies Oficial</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-stone-600 mt-1">
                      <span><strong>38.2K</strong> seguidores</span>
                      <span><strong>450.5K</strong> Me gusta</span>
                    </div>
                    <p className="text-xs text-stone-700 mt-1 max-w-xl">
                      El snack andino que conquistó Lima 🍫🏔️ Galletas de quinua y kiwicha con relleno cremoso. Tips, unboxings y recetas.
                    </p>
                  </div>
                </div>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-slate-900 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-slate-800 transition-colors"
                >
                  Ver Perfil en TikTok
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              {/* TikTok Videos Simulation Cards */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Videos en Tendencia
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-stone-900 text-white rounded-xl overflow-hidden shadow-sm relative group h-80 flex flex-col justify-end p-4">
                    <img
                      src="/src/assets/images/andicookies_snack_moment_1792383992495.jpg"
                      alt="TikTok video preview 1"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">VIRAL</span>
                        <span className="text-[10px] text-stone-300">🎵 Sonido original - AndiCookies</span>
                      </div>
                      <p className="text-xs font-semibold leading-snug mb-2">
                        POV: Buscas un snack para la universidad y encuentras galletas de quinua rellenas 🎒✨
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-stone-300 pt-2 border-t border-white/10">
                        <span className="flex items-center gap-1"><Play className="w-3 h-3" /> 245.8K vistas</span>
                        <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-rose-500" /> 18.4K</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-stone-900 text-white rounded-xl overflow-hidden shadow-sm relative group h-80 flex flex-col justify-end p-4">
                    <img
                      src="/src/assets/images/hero_andicookies_scene_1792383990263.jpg"
                      alt="TikTok video preview 2"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">ORIGEN</span>
                        <span className="text-[10px] text-stone-300">🎵 Huayno Chill - Cusco Vibes</span>
                      </div>
                      <p className="text-xs font-semibold leading-snug mb-2">
                        Viajamos al Valle Sagrado a cosechar la kiwicha para el nuevo lote de AndiCookies 🌾🏔️
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-stone-300 pt-2 border-t border-white/10">
                        <span className="flex items-center gap-1"><Play className="w-3 h-3" /> 512.1K vistas</span>
                        <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-rose-500" /> 42.6K</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-stone-900 text-white rounded-xl overflow-hidden shadow-sm relative group h-80 flex flex-col justify-end p-4">
                    <img
                      src="/src/assets/images/andicookies_pack_front_1792383991924.jpg"
                      alt="TikTok video preview 3"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">CATAS</span>
                        <span className="text-[10px] text-stone-300">🎵 Trend Cacao Peruano</span>
                      </div>
                      <p className="text-xs font-semibold leading-snug mb-2">
                        ¿Qué pasa al romperla por la mitad? Mira esa crema de chocolate 🍫🤤
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-stone-300 pt-2 border-t border-white/10">
                        <span className="flex items-center gap-1"><Play className="w-3 h-3" /> 318.4K vistas</span>
                        <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-rose-500" /> 26.9K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FACEBOOK TAB */}
          {activeTab === 'facebook' && (
            <div className="space-y-6">
              {/* Facebook Page Header */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                    f
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-stone-900 text-base">Sabores Andinos S.A.C. - AndiCookies</h3>
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex items-center gap-3 text-xs text-stone-600 mt-1">
                      <span><strong>24,150</strong> personas siguen esto</span>
                      <span className="text-amber-600 font-semibold">★ 4.9 (320 opiniones)</span>
                    </div>
                    <p className="text-xs text-stone-700 mt-1 max-w-xl">
                      Página oficial de Sabores Andinos S.A.C. y AndiCookies. Empresa peruana dedicada al desarrollo de alimentos nutritivos basados en superalimentos andinos.
                    </p>
                  </div>
                </div>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-blue-600 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
                >
                  Visitar Página en Facebook
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              {/* Facebook Posts & Community Feed */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-sm">
                        SA
                      </div>
                      <div>
                        <h5 className="font-bold text-stone-900 text-xs">Sabores Andinos S.A.C.</h5>
                        <p className="text-[10px] text-stone-400">10 de Octubre a las 11:20 · Público</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      Campaña Nutrición Sin Fronteras
                    </span>
                  </div>

                  <p className="text-xs text-stone-700 mb-3 leading-relaxed">
                    Nos enorgullece anunciar que llevamos más de 3,500 raciones de galletas AndiCookies a comunidades educativas de altura en Cusco y Huancavelica, reforzando la alimentación con hierro y energía proveniente de la quinua y kiwicha. ¡Gracias a cada uno de ustedes por hacer posible esta iniciativa con cada compra!
                  </p>

                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-center justify-between text-xs text-stone-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-blue-600 font-medium">
                        <ThumbsUp className="w-3.5 h-3.5" /> 342
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" /> 29 comentarios
                      </span>
                      <span>68 compartidos</span>
                    </div>
                    <button 
                      onClick={() => handleCopyLink('https://facebook.com/AndiCookies')}
                      className="text-stone-600 hover:text-stone-900 font-medium flex items-center gap-1"
                    >
                      <Share2 className="w-3.5 h-3.5" /> Compartir
                    </button>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-700 text-xs">
                      AE
                    </div>
                    <div>
                      <h5 className="font-bold text-stone-900 text-xs">Andino Express - Alianza Estratégica</h5>
                      <p className="text-[10px] text-stone-400">5 de Octubre · Envíos que conectan contigo</p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-700">
                    Ahora tus pedidos de AndiCookies cuentan con trazabilidad en tiempo real y cobertura en todo el territorio nacional. Consulta las políticas de entrega y tiempos de arribo en nuestro portal web.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-3 bg-stone-100 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-700">Canal verificado:</span>
            <span>{COMPANY_INFO.socialHandles} en todas las plataformas</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-900 text-white font-medium rounded-lg transition-colors"
          >
            Entendido / Volver al sitio
          </button>
        </div>
      </div>
    </div>
  );
};
