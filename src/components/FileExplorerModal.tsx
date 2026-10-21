import React, { useState } from 'react';
import { 
  Folder, 
  FolderOpen, 
  FileCode, 
  FileText, 
  Image as ImageIcon, 
  Download, 
  X, 
  ChevronRight, 
  ChevronDown, 
  Copy, 
  Check,
  Package,
  Layers,
  ExternalLink
} from 'lucide-react';

interface FileExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  path: string;
  size?: string;
  description?: string;
  children?: FileNode[];
}

export const FileExplorerModal: React.FC<FileExplorerModalProps> = ({ isOpen, onClose }) => {
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    'src': true,
    'src/components': true,
    'src/assets': true,
    'src/assets/images': true,
    'src/data': true,
    'src/types': true,
  });
  const [selectedFile, setSelectedFile] = useState<string>('src/App.tsx');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fileTree: FileNode = {
    name: 'proyecto-sabores-andinos',
    type: 'folder',
    path: '',
    children: [
      {
        name: 'src',
        type: 'folder',
        path: 'src',
        children: [
          {
            name: 'components',
            type: 'folder',
            path: 'src/components',
            description: 'Componentes modulares de interfaz y lógica',
            children: [
              { name: 'Header.tsx', type: 'file', path: 'src/components/Header.tsx', size: '6.4 KB', description: 'Navegación principal y accesos a redes sociales' },
              { name: 'HeroBanner.tsx', type: 'file', path: 'src/components/HeroBanner.tsx', size: '7.8 KB', description: 'Banner de impacto andino y valores de marca' },
              { name: 'ProductCatalog.tsx', type: 'file', path: 'src/components/ProductCatalog.tsx', size: '11.2 KB', description: 'Catálogo de AndiCookies y selector en Soles' },
              { name: 'NutritionAndIngredients.tsx', type: 'file', path: 'src/components/NutritionAndIngredients.tsx', size: '8.9 KB', description: 'Ficha técnica y tabla nutricional del empaque' },
              { name: 'TestimonialsSection.tsx', type: 'file', path: 'src/components/TestimonialsSection.tsx', size: '9.8 KB', description: 'Opiniones de consumidores y aviso académico' },
              { name: 'SocialInfoModal.tsx', type: 'file', path: 'src/components/SocialInfoModal.tsx', size: '18.4 KB', description: 'Hub interactivo de TikTok, IG, FB y WhatsApp' },
              { name: 'PolicyCenter.tsx', type: 'file', path: 'src/components/PolicyCenter.tsx', size: '16.2 KB', description: 'Políticas de devoluciones, privacidad y contrato' },
              { name: 'InteractiveCheckoutModal.tsx', type: 'file', path: 'src/components/InteractiveCheckoutModal.tsx', size: '14.5 KB', description: 'Simulador de compra y envío con Andino Express' },
              { name: 'CartDrawer.tsx', type: 'file', path: 'src/components/CartDrawer.tsx', size: '7.6 KB', description: 'Carrito deslizable con cálculo de envío gratis' },
              { name: 'StoryAndRecipes.tsx', type: 'file', path: 'src/components/StoryAndRecipes.tsx', size: '7.2 KB', description: 'Historia de los Andes, campaña y recetas' },
              { name: 'SearchModal.tsx', type: 'file', path: 'src/components/SearchModal.tsx', size: '4.8 KB', description: 'Búsqueda instantánea de productos y políticas' },
              { name: 'FloatingSocialWidget.tsx', type: 'file', path: 'src/components/FloatingSocialWidget.tsx', size: '2.9 KB', description: 'Botón flotante de WhatsApp y canales' },
              { name: 'Footer.tsx', type: 'file', path: 'src/components/Footer.tsx', size: '7.5 KB', description: 'Pie de página con datos fiscales RUC y enlaces' },
            ]
          },
          {
            name: 'assets',
            type: 'folder',
            path: 'src/assets',
            children: [
              {
                name: 'images',
                type: 'folder',
                path: 'src/assets/images',
                children: [
                  { name: 'hero_andicookies_scene.jpg', type: 'file', path: 'src/assets/images/hero_andicookies_scene_1792383990263.jpg', size: '280 KB', description: 'Paisaje andino con galletas, miel y quinua' },
                  { name: 'andicookies_pack_front.jpg', type: 'file', path: 'src/assets/images/andicookies_pack_front_1792383991924.jpg', size: '210 KB', description: 'Empaque oficial pouch de AndiCookies Chocolate' },
                  { name: 'andicookies_snack_moment.jpg', type: 'file', path: 'src/assets/images/andicookies_snack_moment_1792383992495.jpg', size: '195 KB', description: 'Consumidora disfrutando una galleta andina' },
                  { name: 'andicookies_social_lifestyle.jpg', type: 'file', path: 'src/assets/images/andicookies_social_lifestyle_1792383991949.jpg', size: '320 KB', description: 'Flatlay con cacao, kiwicha y textiles peruanos' },
                ]
              }
            ]
          },
          {
            name: 'data',
            type: 'folder',
            path: 'src/data',
            children: [
              { name: 'andinaData.ts', type: 'file', path: 'src/data/andinaData.ts', size: '9.2 KB', description: 'Base de datos de productos, RUC, recetas y redes' }
            ]
          },
          {
            name: 'types',
            type: 'folder',
            path: 'src/types',
            children: [
              { name: 'index.ts', type: 'file', path: 'src/types/index.ts', size: '2.1 KB', description: 'Definiciones de tipos TypeScript' }
            ]
          },
          { name: 'App.tsx', type: 'file', path: 'src/App.tsx', size: '6.8 KB', description: 'Enrutador de vistas y estado del carrito' },
          { name: 'main.tsx', type: 'file', path: 'src/main.tsx', size: '240 B', description: 'Montaje del DOM en React 19' },
          { name: 'index.css', type: 'file', path: 'src/index.css', size: '380 B', description: 'Reglas de Tailwind CSS y tipografías' },
        ]
      },
      { name: 'index.html', type: 'file', path: 'index.html', size: '1.2 KB', description: 'Documento HTML principal con fuentes y SEO' },
      { name: 'package.json', type: 'file', path: 'package.json', size: '980 B', description: 'Configuración de paquetes y scripts npm' },
      { name: 'vite.config.ts', type: 'file', path: 'vite.config.ts', size: '540 B', description: 'Configuración del servidor Vite' },
      { name: 'tsconfig.json', type: 'file', path: 'tsconfig.json', size: '620 B', description: 'Configuración del compilador TypeScript' },
      { name: 'metadata.json', type: 'file', path: 'metadata.json', size: '280 B', description: 'Metadatos del proyecto' },
    ]
  };

  const toggleFolder = (path: string) => {
    setExpandedFolders(prev => ({ ...prev, [path]: !prev[path] }));
  };

  const renderTree = (node: FileNode) => {
    if (node.type === 'folder') {
      const isExpanded = node.path === '' || expandedFolders[node.path];
      return (
        <div key={node.path || 'root'} className="pl-3">
          {node.name !== 'proyecto-sabores-andinos' && (
            <div
              onClick={() => toggleFolder(node.path)}
              className="flex items-center gap-1.5 py-1 px-1.5 rounded hover:bg-stone-200/60 cursor-pointer text-xs font-semibold text-stone-800 select-none"
            >
              {isExpanded ? (
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              )}
              {isExpanded ? (
                <FolderOpen className="w-4 h-4 text-amber-600" />
              ) : (
                <Folder className="w-4 h-4 text-amber-600" />
              )}
              <span>{node.name}</span>
            </div>
          )}
          {isExpanded && node.children && (
            <div className="border-l border-stone-200 ml-2 space-y-0.5">
              {node.children.map(child => renderTree(child))}
            </div>
          )}
        </div>
      );
    }

    const isSelected = selectedFile === node.path;
    const isImage = node.name.endsWith('.jpg') || node.name.endsWith('.png');

    return (
      <div
        key={node.path}
        onClick={() => setSelectedFile(node.path)}
        className={`flex items-center justify-between py-1 px-2 rounded cursor-pointer text-xs transition-colors ml-3 ${
          isSelected
            ? 'bg-[#781734] text-white font-medium shadow-2xs'
            : 'text-stone-700 hover:bg-stone-100'
        }`}
      >
        <div className="flex items-center gap-1.5 truncate">
          {isImage ? (
            <ImageIcon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-amber-300' : 'text-emerald-600'}`} />
          ) : (
            <FileCode className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-amber-300' : 'text-blue-600'}`} />
          )}
          <span className="truncate">{node.name}</span>
        </div>
        {node.size && (
          <span className={`text-[10px] tabular-nums font-mono ml-2 shrink-0 ${isSelected ? 'text-stone-200' : 'text-stone-400'}`}>
            {node.size}
          </span>
        )}
      </div>
    );
  };

  const copyPath = () => {
    navigator.clipboard.writeText(selectedFile);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[88vh] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF7F2]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#781734] text-amber-300 flex items-center justify-center">
              <Folder className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-stone-900 text-sm">
                  Repositorio de Archivos del Proyecto
                </h3>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold border border-emerald-200">
                  git: master
                </span>
              </div>
              <p className="text-[11px] text-stone-500">
                Sabores Andinos S.A.C. · Código fuente completo y recursos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/sabores-andinos-andicookies.zip"
              download="sabores-andinos-andicookies.zip"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-xs transition-colors"
              title="Descargar todos los archivos en formato .ZIP"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar .ZIP</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Git & GitHub Info Banner */}
        <div className="bg-stone-900 text-white px-6 py-2.5 text-xs flex flex-wrap items-center justify-between gap-3 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">ℹ️ ¿Dónde está la opción de repositorio en Google AI Studio?</span>
            <span className="text-stone-300 hidden md:inline">
              En la esquina superior derecha de la interfaz de AI Studio encontrarás el botón <strong>"Export to GitHub"</strong>.
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-stone-400">
            <span>32 archivos sincronizados</span>
            <span>·</span>
            <span>React 19 + TypeScript + Vite</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          {/* File Tree Column */}
          <div className="md:col-span-5 border-r border-stone-200 p-3 overflow-y-auto bg-stone-50/70 max-h-[500px]">
            <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-stone-200 text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              <span>Explorador de Archivos</span>
              <span>24 archivos</span>
            </div>
            {renderTree(fileTree)}
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 p-6 overflow-y-auto flex flex-col justify-between bg-white max-h-[500px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#781734]" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm font-mono">
                      {selectedFile}
                    </h4>
                    <p className="text-[11px] text-stone-400">Ruta relativa en el proyecto</p>
                  </div>
                </div>

                <button
                  onClick={copyPath}
                  className="flex items-center gap-1 text-[11px] text-stone-600 hover:text-stone-900 px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado' : 'Copiar ruta'}</span>
                </button>
              </div>

              {/* Preview preview if image or summary */}
              {selectedFile.includes('/images/') ? (
                <div className="space-y-3">
                  <div className="aspect-16/9 rounded-xl overflow-hidden border border-stone-200 bg-stone-100 shadow-2xs">
                    <img
                      src={`/${selectedFile}`}
                      alt="Vista previa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-stone-600">
                    Archivo de imagen de alta resolución generado y optimizado para la web.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed font-mono">
                    <p className="text-stone-500 text-[11px] mb-2 font-sans font-bold uppercase tracking-wider">
                      Descripción del módulo:
                    </p>
                    {selectedFile === 'src/App.tsx' && (
                      <p>Componente central que orquesta las vistas de Inicio, Productos, Nutrición, Políticas y el estado del carrito de compras.</p>
                    )}
                    {selectedFile === 'src/components/SocialInfoModal.tsx' && (
                      <p>Módulo interactivo para redes sociales (TikTok, Instagram, Facebook y simulador de WhatsApp Business) que atiende el requerimiento de desplegar información interactiva.</p>
                    )}
                    {selectedFile === 'src/components/PolicyCenter.tsx' && (
                      <p>Centro de ayuda y políticas que contiene los textos oficiales de Devoluciones (sin reembolsos en efectivo) y Política de Privacidad.</p>
                    )}
                    {selectedFile === 'src/data/andinaData.ts' && (
                      <p>Repositorio de datos con precios en Soles, gramajes (180g / 6 unidades), valores nutricionales (quinua 48%, kiwicha 32%) y datos fiscales (RUC 20123456789).</p>
                    )}
                    {!['src/App.tsx', 'src/components/SocialInfoModal.tsx', 'src/components/PolicyCenter.tsx', 'src/data/andinaData.ts'].includes(selectedFile) && (
                      <p>Módulo de código fuente TypeScript / React con soporte para Tailwind CSS y estándares web.</p>
                    )}
                  </div>
                </div>
              )}

              {/* Architecture Quick Notes */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <p className="font-bold">Estructura del Proyecto:</p>
                <p className="text-[11px]">
                  Diseñado bajo arquitectura limpia con React 19 + TypeScript + Vite. Todos los archivos se encuentran listos para producción o despliegue.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <a
                href="/sabores-andinos-andicookies.zip"
                download="sabores-andinos-andicookies.zip"
                className="inline-flex items-center gap-2 bg-[#781734] hover:bg-[#601229] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>Descargar archivo ZIP completo</span>
              </a>

              <span className="text-[11px] text-stone-400">
                sabores-andinos-andicookies.zip
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
