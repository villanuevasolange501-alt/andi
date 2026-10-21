import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/andinaData';
import { 
  Leaf, 
  Flame, 
  CheckCircle2, 
  Sun, 
  Coffee, 
  Smile, 
  Briefcase, 
  ShieldAlert, 
  Barcode, 
  FileText
} from 'lucide-react';

export const NutritionAndIngredients: React.FC = () => {
  const [portionMode, setPortionMode] = useState<'serving' | '100g'>('serving');

  const nutritionalData = [
    { label: 'Energía (kcal)', perServing: '150 kcal', per100g: '500 kcal', highlight: true },
    { label: 'Proteínas (g)', perServing: '2,4 g', per100g: '8,0 g', highlight: true },
    { label: 'Grasas totales (g)', perServing: '7,2 g', per100g: '24,0 g' },
    { label: '  — Grasas saturadas (g)', perServing: '3,3 g', per100g: '11,0 g', indent: true },
    { label: 'Carbohidratos totales (g)', perServing: '17,4 g', per100g: '58,0 g' },
    { label: '  — Azúcares totales (g)', perServing: '3,6 g', per100g: '12,0 g', indent: true },
    { label: 'Fibra dietética (g)', perServing: '1,2 g', per100g: '4,0 g', highlight: true },
    { label: 'Sodio (mg)', perServing: '54 mg', per100g: '180 mg' },
  ];

  return (
    <section id="nutricion" className="py-14 bg-[#F5EFE6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#781734] bg-white px-3.5 py-1 rounded-full border border-stone-200 shadow-2xs mb-2">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ficha Técnica y Transparencia Nutricional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 font-display">
            Nutrición & Ingredientes Andinos
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Información respaldada conforme al rotulado oficial del empaque AndiCookies® de Sabores Andinos S.A.C.
          </p>
        </div>

        {/* 3 Core Packaging Seals (from image 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-center gap-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
              <span className="text-xl">🏔️</span>
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Con ingredientes andinos</h4>
              <p className="text-xs text-stone-500">Quinua blanca y kiwicha de altura seleccionadas a mano.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-center gap-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
              <Flame className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Fuente natural de energía</h4>
              <p className="text-xs text-stone-500">Aporte de carbohidratos complejos y fibra de digestión lenta.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 flex items-center gap-4 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center shrink-0 border border-rose-200">
              <CheckCircle2 className="w-6 h-6 text-rose-700" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Sin colorantes artificiales</h4>
              <p className="text-xs text-stone-500">Color y aroma genuino de cacao peruano y miel de abeja.</p>
            </div>
          </div>
        </div>

        {/* Two-Column Specification Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Packaging Table & Switcher */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-display">
                  Tabla Nutricional Oficial
                </h3>
                <p className="text-xs text-stone-500">
                  Porción: 3 galletas (30 g) · Porciones por envase: 6
                </p>
              </div>

              {/* Segmented control for 30g vs 100g */}
              <div className="flex items-center p-1 bg-stone-100 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setPortionMode('serving')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    portionMode === 'serving'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Por porción (30g)
                </button>
                <button
                  onClick={() => setPortionMode('100g')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    portionMode === '100g'
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Por 100 g
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="divide-y divide-stone-100 mt-2 text-xs">
              {nutritionalData.map((row, i) => (
                <div
                  key={i}
                  className={`py-2.5 flex items-center justify-between ${
                    row.indent ? 'pl-4 text-stone-500 text-[11px]' : 'text-stone-800'
                  } ${row.highlight ? 'font-bold bg-amber-50/40 px-2 rounded' : ''}`}
                >
                  <span>{row.label}</span>
                  <span className="font-mono tabular-nums text-stone-900 font-semibold">
                    {portionMode === 'serving' ? row.perServing : row.per100g}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-400">
              <span>* Valores diarios de referencia basados en dieta de 2,000 kcal</span>
              <Barcode className="w-10 h-6 text-stone-600" />
            </div>
          </div>

          {/* Column 2: Ingredients & Usage Occasions */}
          <div className="lg:col-span-6 space-y-6">
            {/* Ingredients Declaration */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 font-display mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#781734]" />
                <span>Declaración de Ingredientes en Etiqueta</span>
              </h3>

              <div className="space-y-3 text-xs leading-relaxed text-stone-700">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-1">
                    Galleta de quinua y kiwicha:
                  </span>
                  <p>
                    Harina de quinua (48%), harina de kiwicha (32%), fruto del monje, miel de abeja, aceite vegetal (girasol), cacao en polvo (3%), almidón de maíz, jarabe de glucosa, sal, bicarbonato de sodio, estabilizante (goma guar) y antioxidante (tocoferoles).
                  </p>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="font-bold text-stone-900 block mb-1">
                    Relleno sabor a chocolate:
                  </span>
                  <p>
                    Fruto del monje, miel de abeja, grasa vegetal, cacao en polvo, leche en polvo, saborizante natural de chocolate y lecitina de soya (emulsionante).
                  </p>
                </div>

                <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-amber-950 flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Advertencia de Alérgenos:</p>
                    <p className="text-[11px]">
                      <strong>Contiene:</strong> soya y leche.<br />
                      <strong>Puede contener:</strong> trazas de maní y sésamo (ajonjolí).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disfrútalas en & Conservación */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Momentos Recomendados de Consumo
              </h4>

              <div className="grid grid-cols-3 gap-3 text-center mb-5">
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-stone-200">
                  <Coffee className="w-5 h-5 text-[#781734] mx-auto mb-1" />
                  <span className="text-xs font-bold text-stone-900 block">Desayuno</span>
                  <span className="text-[10px] text-stone-500">Con café o yogurt</span>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-stone-200">
                  <Smile className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                  <span className="text-xs font-bold text-stone-900 block">Snack</span>
                  <span className="text-[10px] text-stone-500">Media mañana o tarde</span>
                </div>
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-stone-200">
                  <Briefcase className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
                  <span className="text-xs font-bold text-stone-900 block">Lonchera</span>
                  <span className="text-[10px] text-stone-500">Práctico y nutritivo</span>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-3 text-xs text-stone-600">
                <Sun className="w-5 h-5 text-amber-600 shrink-0" />
                <p>
                  <strong>Modo de conservación:</strong> Mantener en un lugar fresco, seco y alejado de la luz directa del sol. Una vez abierto, cerrar bien el envase para conservar su frescura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
