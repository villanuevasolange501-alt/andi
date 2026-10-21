import React, { useState } from 'react';
import { PolicySection } from '../types';
import { COMPANY_INFO } from '../data/andinaData';
import { 
  RotateCcw, 
  ShieldCheck, 
  FileText, 
  CreditCard, 
  Truck, 
  HelpCircle, 
  BookOpen, 
  Search, 
  AlertOctagon, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Building,
  AlertTriangle
} from 'lucide-react';

interface PolicyCenterProps {
  initialTab?: PolicySection;
  onOpenCheckoutDemo?: () => void;
}

export const PolicyCenter: React.FC<PolicyCenterProps> = ({
  initialTab = 'devoluciones',
  onOpenCheckoutDemo
}) => {
  const [activeTab, setActiveTab] = useState<PolicySection>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAcademicAnalysis, setShowAcademicAnalysis] = useState(false);

  const sidebarItems: Array<{ id: PolicySection; label: string; icon: any }> = [
    { id: 'devoluciones', label: 'Devoluciones y reembolsos', icon: RotateCcw },
    { id: 'privacidad', label: 'Política de privacidad', icon: ShieldCheck },
    { id: 'checkout_contrato', label: 'Checkout & Contrato Logístico', icon: FileText },
    { id: 'pagos', label: 'Formas de pago', icon: CreditCard },
    { id: 'envios', label: 'Políticas de envío', icon: Truck },
    { id: 'terminos', label: 'Términos y condiciones', icon: FileText },
    { id: 'faq', label: 'Preguntas frecuentes', icon: HelpCircle },
    { id: 'reclamaciones', label: 'Libro de reclamaciones', icon: BookOpen },
  ];

  return (
    <section id="politicas" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation - Exact from image 2 & 3 */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-6 flex-wrap">
          <span className="hover:text-stone-900 cursor-pointer">Inicio</span>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="hover:text-stone-900 cursor-pointer">Centro de Ayuda</span>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-900 font-semibold capitalize">
            {activeTab.replace('_', ' ')}
          </span>
        </div>

        {/* Top Search Bar */}
        <div className="relative mb-8 max-w-xl">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar en Centro de Ayuda y Políticas..."
            className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#781734]"
          />
        </div>

        {/* Two-Column Layout: Sidebar vs Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Menu */}
          <div className="lg:col-span-4 bg-[#FAF7F2] p-4 rounded-2xl border border-stone-200 shadow-2xs space-y-1">
            <h3 className="px-3 py-2 text-xs font-black uppercase tracking-wider text-stone-500">
              Centro de Ayuda
            </h3>
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                    isActive
                      ? 'bg-[#781734] text-white shadow-xs'
                      : 'text-stone-700 hover:bg-stone-200/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-stone-400'}`} />
                </button>
              );
            })}

            <div className="pt-4 mt-4 border-t border-stone-200 px-3">
              <p className="text-[11px] text-stone-500">
                Atención al cliente directa:
              </p>
              <p className="text-xs font-bold text-stone-800 mt-0.5">
                {COMPANY_INFO.phone} · {COMPANY_INFO.email}
              </p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {/* TAB 1: DEVOLUCIONES Y REEMBOLSOS (Exact replication of Image 2) */}
            {activeTab === 'devoluciones' && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-stone-100">
                  <div className="w-12 h-12 rounded-2xl bg-[#781734]/10 text-[#781734] flex items-center justify-center">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-stone-900 font-display">
                      Devoluciones y reembolsos
                    </h2>
                    <p className="text-xs text-stone-500">
                      Conoce nuestras condiciones para cambios, devoluciones y reposición de productos.
                    </p>
                  </div>
                </div>

                {/* Primary Official Policy Box */}
                <div className="p-6 bg-rose-50/70 border border-rose-200 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-200/80 text-rose-800 flex items-center justify-center shrink-0">
                      <AlertOctagon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-rose-950 uppercase tracking-wide mb-1">
                        Política de devoluciones
                      </h3>
                      <p className="text-xs text-rose-900 leading-relaxed">
                        Sabores Andinos S.A.C. informa que, una vez confirmada la compra a través de su página web o redes sociales, <strong>no se aceptarán devoluciones ni se realizarán reembolsos en efectivo</strong>, si el consumidor recibe productos dañados, defectuosos o diferentes a los solicitados. El cliente podrá recibir la reposición del producto según las condiciones de la empresa.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4 Cards Grid - Replicating Image 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 font-bold text-xs">
                      ✕
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">
                        No se aceptan devoluciones por productos dañados
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-1">
                        Deterioros sufridos durante la manipulación o traslado no aplican para devolución monetaria.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 font-bold text-xs">
                      ✕
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">
                        No se aceptan devoluciones por productos diferentes
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-1">
                        En caso de discrepancia en la entrega, no se devuelven fondos en efectivo ni bancarios.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 font-bold text-xs">
                      ✕
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">
                        No se realizan reembolsos en efectivo
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-1">
                        Toda compra confirmada en web o redes se considera definitiva sin devolución dineraria.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-950">
                        Reposición del producto
                      </h4>
                      <p className="text-[11px] text-emerald-800 mt-1">
                        El cliente podrá recibir la reposición física del producto previa evaluación y reporte dentro de las 24h.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Analytical / Academic Context Accordion */}
                <div className="pt-4 border-t border-stone-200">
                  <button
                    onClick={() => setShowAcademicAnalysis(!showAcademicAnalysis)}
                    className="flex items-center gap-2 text-xs font-bold text-amber-900 hover:text-amber-950 bg-amber-50 px-3.5 py-2 rounded-lg border border-amber-200 w-full justify-between"
                  >
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-700" />
                      Análisis Legal & Académico de esta cláusula (Código de Consumo)
                    </span>
                    <span className="text-[11px] underline">
                      {showAcademicAnalysis ? 'Ocultar' : 'Ver detalle'}
                    </span>
                  </button>

                  {showAcademicAnalysis && (
                    <div className="mt-3 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-2 leading-relaxed">
                      <p>
                        <strong>Observación crítica para estudiantes y profesionales:</strong> De acuerdo con el artículo 19 y 97 del Código de Protección y Defensa del Consumidor (Ley 29571 del Perú), los proveedores tienen el deber de idoneidad. Cláusulas que excluyen de manera absoluta el derecho al reembolso cuando el producto llega dañado o no solicitado pueden ser catalogadas como <em>cláusulas abusivas</em> ante la Comisión de Protección al Consumidor del INDECOPI.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: POLÍTICA DE PRIVACIDAD (Exact replication of Image 3) */}
            {activeTab === 'privacidad' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#781734]/10 text-[#781734] flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-stone-900 font-display">
                        Política de privacidad
                      </h2>
                      <p className="text-xs text-stone-500">
                        Sabores Andinos S.A.C. · Tratamiento de datos personales
                      </p>
                    </div>
                  </div>

                  <span className="text-xs bg-stone-100 text-stone-700 font-semibold px-3 py-1 rounded-full border border-stone-200 self-start sm:self-auto">
                    Última actualización: 15 de marzo de 2025
                  </span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed">
                  En Sabores Andinos S.A.C. valoramos la confianza de nuestros clientes. La presente política describe cómo recopilamos, usamos y compartimos la información personal que nos proporcionan los usuarios a través de nuestro sitio web y otros medios de contacto disponibles.
                </p>

                {/* Section 2: Uso de la información personal */}
                <div className="p-5 bg-[#FAF7F2] border border-stone-200 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#781734] text-white flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                    <h3 className="font-bold text-sm text-stone-900">
                      Uso de la información personal
                    </h3>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed pl-8">
                    Sabores Andinos S.A.C. podrá utilizar la información proporcionada por los usuarios para fines relacionados con sus actividades empresariales, comerciales y promocionales. Asimismo, podrá realizar diferentes acciones con dicha información según las necesidades de la empresa, procurando mejorar la experiencia de sus clientes.
                  </p>
                </div>

                {/* Section 3: Compartición de información */}
                <div className="p-5 bg-[#FAF7F2] border border-stone-200 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#781734] text-white flex items-center justify-center font-bold text-xs">
                      3
                    </span>
                    <h3 className="font-bold text-sm text-stone-900">
                      Compartición de información
                    </h3>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed pl-8">
                    La empresa podrá compartir la información de los usuarios con terceros, socios comerciales y proveedores de servicios cuando lo considere conveniente para el desarrollo de sus actividades. Estos podrán tratar la información recibida de acuerdo con sus propios procedimientos y políticas internas.
                  </p>
                </div>

                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                  <p className="font-semibold mb-1">Nota sobre Derechos ARCO:</p>
                  <p className="text-[11px] leading-relaxed">
                    Conforme a la Ley N° 29733 (Ley de Protección de Datos Personales del Perú), los usuarios pueden ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación y Oposición escribiendo a <strong>contacto@saboresandinos.com</strong>.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: CHECKOUT & CONTRATO LOGÍSTICO (Exact replication of Image 5) */}
            {activeTab === 'checkout_contrato' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-stone-100 flex-wrap gap-3">
                  <div>
                    <h2 className="text-2xl font-black text-stone-900 font-display">
                      Checkout & Contrato Logístico Anotado
                    </h2>
                    <p className="text-xs text-stone-500">
                      Simulación académica y revisión de las cláusulas contractuales con Andino Express S.A.C.
                    </p>
                  </div>

                  {onOpenCheckoutDemo && (
                    <button
                      onClick={onOpenCheckoutDemo}
                      className="bg-[#781734] hover:bg-[#601229] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Abrir Simulador de Checkout</span>
                    </button>
                  )}
                </div>

                {/* Contract Inspection Box */}
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-300 font-sans text-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-stone-800">Contrato_AndinoExpress_SaboresAndinos.pdf</span>
                      <span className="text-[10px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded font-mono">100%</span>
                    </div>
                    <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5 rounded border border-amber-200">
                      SIMULACIÓN ACADÉMICA
                    </span>
                  </div>

                  <div className="text-center py-2">
                    <h3 className="font-bold text-sm text-stone-900 uppercase">
                      CONTRATO DE PRESTACIÓN DE SERVICIOS LOGÍSTICOS
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      Entre SABORES ANDINOS S.A.C. y ANDINO EXPRESS S.A.C.
                    </p>
                  </div>

                  <h4 className="font-bold text-stone-900 uppercase tracking-wide text-xs">
                    5. INTERCAMBIO Y TRATAMIENTO DE LA INFORMACIÓN
                  </h4>

                  {/* Clause 5.1 */}
                  <div className="p-3 bg-white rounded-lg border border-rose-200 relative">
                    <p className="text-stone-800">
                      <strong>5.1</strong> SABORES ANDINOS S.A.C. podrá proporcionar a ANDINO EXPRESS S.A.C. la información de sus clientes, incluyendo nombres, números de teléfono, direcciones de entrega, correos electrónicos y datos de pedidos, con la finalidad de gestionar la entrega de los productos.
                    </p>
                  </div>

                  {/* Clause 5.2 */}
                  <div className="p-3 bg-white rounded-lg border border-rose-200">
                    <p className="text-stone-800">
                      <strong>5.2</strong> ANDINO EXPRESS S.A.C. podrá utilizar la información recibida para la correcta ejecución del servicio y para otras actividades relacionadas con sus operaciones comerciales, de acuerdo con sus procedimientos internos.
                    </p>
                  </div>

                  {/* Clause 5.3 + Note */}
                  <div className="p-3 bg-white rounded-lg border border-rose-300 relative">
                    <p className="text-stone-800">
                      <strong>5.3</strong> ANDINO EXPRESS S.A.C. podrá compartir la información con sus empresas vinculadas, aliados estratégicos o terceros que apoyen en la prestación del servicio, cuando lo considere necesario.
                    </p>
                    <div className="mt-2 p-2 bg-rose-50 text-rose-900 rounded border border-rose-200 text-[11px]">
                      <strong>Nota crítica:</strong> No se precisan los usos permitidos por terceros. Se permite compartir sin detallar quiénes son ni qué límites existen.
                    </div>
                  </div>

                  {/* Clause 5.4 */}
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <p className="text-stone-800">
                      <strong>5.4</strong> Las partes reconocen que la información compartida podrá ser tratada de acuerdo con las políticas y prácticas de privacidad de ANDINO EXPRESS S.A.C. y sus terceros, sin que SABORES ANDINOS S.A.C. sea responsable por el uso que dichos terceros realicen de la información.
                    </p>
                  </div>

                  {/* Clause 5.5 + Note */}
                  <div className="p-3 bg-white rounded-lg border border-rose-300">
                    <p className="text-stone-800">
                      <strong>5.5</strong> El presente contrato no establece obligaciones específicas en materia de seguridad de la información, confidencialidad o limitaciones sobre el uso posterior de los datos por parte de ANDINO EXPRESS S.A.C. o sus terceros.
                    </p>
                    <div className="mt-2 p-2 bg-rose-50 text-rose-900 rounded border border-rose-200 text-[11px]">
                      <strong>Nota crítica:</strong> No se detallan las medidas de seguridad ni obligaciones de confidencialidad para el tratamiento de datos personales.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: FORMAS DE PAGO */}
            {activeTab === 'pagos' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-stone-900 font-display">
                      Formas de Pago Aceptadas
                    </h2>
                    <p className="text-xs text-stone-500">
                      Canales seguros y directos en moneda nacional (PEN - Soles)
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
                    <span className="font-bold text-stone-900 text-xs block">📱 Billeteras Digitales (Yape y Plin)</span>
                    <p className="text-xs text-stone-600">
                      Paga sin comisiones al número oficial de WhatsApp Business <strong>+51 987 654 321</strong> a nombre de Sabores Andinos S.A.C.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
                    <span className="font-bold text-stone-900 text-xs block">💳 Tarjetas de Débito y Crédito</span>
                    <p className="text-xs text-stone-600">
                      Aceptamos Visa, MasterCard, American Express y Diners Club con pasarela certificada SSL y tokenización.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
                    <span className="font-bold text-stone-900 text-xs block">🏦 Transferencia Bancaria Directa</span>
                    <p className="text-xs text-stone-600">
                      BCP, BBVA e Interbank. Cuentas corrientes empresariales a nombre de Sabores Andinos S.A.C. RUC 20123456789.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
                    <span className="font-bold text-stone-900 text-xs block">💵 Contraentrega (Lima Metropolitana)</span>
                    <p className="text-xs text-stone-600">
                      Disponible para distritos seleccionados previa confirmación telefónica con nuestro asesor de WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: ENVÍOS */}
            {activeTab === 'envios' && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-stone-900 font-display">
                      Políticas de Envío & Cobertura
                    </h2>
                    <p className="text-xs text-stone-500">
                      Envíos operados por Andino Express S.A.C.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-stone-700 leading-relaxed">
                  <div className="p-4 bg-[#FAF7F2] rounded-xl border border-stone-200">
                    <h4 className="font-bold text-stone-900 mb-1">Lima Metropolitana:</h4>
                    <p>Tarifa plana de envío: <strong>S/ 6.90</strong>. Tiempo estimado: 24 a 48 horas hábiles.</p>
                  </div>

                  <div className="p-4 bg-[#FAF7F2] rounded-xl border border-stone-200">
                    <h4 className="font-bold text-stone-900 mb-1">Provincias a nivel nacional:</h4>
                    <p>Tarifa según destino: <strong>S/ 12.00 a S/ 16.00</strong>. Tiempo estimado: 48 a 72 horas hábiles mediante agencias autorizadas.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: TÉRMINOS Y CONDICIONES */}
            {activeTab === 'terminos' && (
              <div className="space-y-4 text-xs text-stone-700 leading-relaxed">
                <h2 className="text-2xl font-black text-stone-900 font-display">Términos y Condiciones Generales</h2>
                <p>El acceso y uso de este sitio web se rige por los presentes Términos y Condiciones y la legislación aplicable en la República del Perú.</p>
                <p>1. <strong>Capacidad legal:</strong> Los servicios están disponibles solo para personas que tengan capacidad legal para contratar.</p>
                <p>2. <strong>Precios y disponibilidad:</strong> Todos los precios están expresados en Soles (PEN) e incluyen el Impuesto General a las Ventas (IGV).</p>
              </div>
            )}

            {/* TAB 7: PREGUNTAS FRECUENTES */}
            {activeTab === 'faq' && (
              <div className="space-y-4 text-xs text-stone-700">
                <h2 className="text-2xl font-black text-stone-900 font-display">Preguntas Frecuentes</h2>
                <div className="space-y-3">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <p className="font-bold text-stone-900 mb-1">¿Cuántas galletas vienen en cada empaque?</p>
                    <p className="text-stone-600">Cada empaque de AndiCookies contiene 6 galletas sándwich con un peso neto total de 180 gramos.</p>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <p className="font-bold text-stone-900 mb-1">¿Hacen ventas por mayor?</p>
                    <p className="text-stone-600">Sí, atendemos a colegios, bodegas y tiendas naturales con descuentos desde 2 cajas a través de nuestro WhatsApp Business.</p>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <p className="font-bold text-stone-900 mb-1">¿Qué endulzantes utilizan?</p>
                    <p className="text-stone-600">Endulzadas con miel de abeja pura y extracto natural de fruto del monje, sin colorantes artificiales.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 8: LIBRO DE RECLAMACIONES */}
            {activeTab === 'reclamaciones' && (
              <div className="space-y-4 text-xs text-stone-700">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-[#781734]" />
                  <div>
                    <h2 className="text-xl font-black text-stone-900 font-display">Libro de Reclamaciones Virtual</h2>
                    <p className="text-stone-500">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor</p>
                  </div>
                </div>
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <p><strong>Razón Social:</strong> Sabores Andinos S.A.C.</p>
                  <p><strong>RUC:</strong> 20123456789</p>
                  <p><strong>Dirección:</strong> Av. Los Andes 123, Santiago de Surco, Lima</p>
                  <p>Para ingresar un reclamo o queja formal, puedes comunicarte a <strong>contacto@saboresandinos.com</strong> o a nuestra línea de atención.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
