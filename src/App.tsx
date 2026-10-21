/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveView, SocialNetwork, CartItem, Product } from './types';
import { PRODUCTS } from './data/andinaData';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { NutritionAndIngredients } from './components/NutritionAndIngredients';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PolicyCenter } from './components/PolicyCenter';
import { StoryAndRecipes } from './components/StoryAndRecipes';
import { SocialInfoModal } from './components/SocialInfoModal';
import { CartDrawer } from './components/CartDrawer';
import { InteractiveCheckoutModal } from './components/InteractiveCheckoutModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { FloatingSocialWidget } from './components/FloatingSocialWidget';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('inicio');
  
  // Initialize with the sample 2 items shown in Image 5
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 2 }
  ]);
  
  // Modals & Drawers state
  const [socialModalOpen, setSocialModalOpen] = useState(false);
  const [selectedSocialNetwork, setSelectedSocialNetwork] = useState<SocialNetwork>('whatsapp');
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  
  // Cart Actions
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prev => 
      prev
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleOrderCompleted = () => {
    // Clear cart after checkout
    setCartItems([]);
  };

  // Open Social Hub with specific network
  const handleOpenSocial = (network: SocialNetwork) => {
    setSelectedSocialNetwork(network);
    setSocialModalOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-stone-800 font-sans selection:bg-[#781734] selection:text-white">
      {/* Primary Top Bar & Nav */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenSocial={handleOpenSocial}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'inicio' && (
          <>
            <HeroBanner
              onQuickBuy={() => {
                handleAddToCart(PRODUCTS[0], 1);
                setCartDrawerOpen(true);
              }}
              onExploreNutrition={() => {
                setActiveView('nutricion');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenSocial={handleOpenSocial}
            />
            <ProductCatalog
              onAddToCart={handleAddToCart}
              onOpenSocial={handleOpenSocial}
            />
            <TestimonialsSection
              onOpenSocial={handleOpenSocial}
            />
            <StoryAndRecipes
              onOpenSocial={handleOpenSocial}
              onExploreProducts={() => {
                setActiveView('productos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {activeView === 'productos' && (
          <div className="py-6">
            <ProductCatalog
              onAddToCart={handleAddToCart}
              onOpenSocial={handleOpenSocial}
            />
          </div>
        )}

        {activeView === 'nutricion' && (
          <div className="py-6">
            <NutritionAndIngredients />
          </div>
        )}

        {activeView === 'historia' && (
          <div className="py-6">
            <StoryAndRecipes
              onOpenSocial={handleOpenSocial}
              onExploreProducts={() => setActiveView('productos')}
            />
          </div>
        )}

        {activeView === 'recetas' && (
          <div className="py-6">
            <StoryAndRecipes
              onOpenSocial={handleOpenSocial}
              onExploreProducts={() => setActiveView('productos')}
            />
          </div>
        )}

        {activeView === 'politicas' && (
          <div className="py-6">
            <PolicyCenter
              initialTab="devoluciones"
              onOpenCheckoutDemo={() => setCheckoutModalOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Global Interactive Social Info Modal */}
      <SocialInfoModal
        isOpen={socialModalOpen}
        onClose={() => setSocialModalOpen(false)}
        initialNetwork={selectedSocialNetwork}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setCheckoutModalOpen(true)}
        onOpenSocial={handleOpenSocial}
      />

      {/* Interactive Checkout Modal (Image 5 Reproduction) */}
      <InteractiveCheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        cartItems={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Site-Wide Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSocial={handleOpenSocial}
      />

      {/* Floating WhatsApp and Channels Action Button */}
      <FloatingSocialWidget
        onOpenSocial={handleOpenSocial}
      />

      {/* Footer */}
      <Footer
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSocial={handleOpenSocial}
      />
    </div>
  );
}
