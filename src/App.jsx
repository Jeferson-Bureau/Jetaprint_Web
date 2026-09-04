import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { ManifestoSection } from './components/ManifestoSection';
import { ProductCatalog } from './components/ProductCatalog';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProductConfiguratorModal } from './components/ProductConfiguratorModal';
import { CartDrawer } from './components/CartDrawer';
import { PRODUCTS } from './data/products';

export default function App() {
  // Estado do Carrinho (inicializado com um pedido demonstrativo para vivacidade)
  const [cart, setCart] = useState([
    {
      product: PRODUCTS[0],
      paper: PRODUCTS[0].options.papers[0],
      finish: PRODUCTS[0].options.finishes[0],
      quantity: 500,
      totalPrice: PRODUCTS[0].price + PRODUCTS[0].options.finishes[0].addCost,
      unitPrice: (PRODUCTS[0].price + PRODUCTS[0].options.finishes[0].addCost) / 500,
      fileName: 'cartao_visita_frente_verso_cmyk.pdf'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [configProduct, setConfigProduct] = useState(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  // Abertura do modal de configuração do produto
  const handleOpenConfigurator = (product) => {
    setConfigProduct(product);
    setIsConfigOpen(true);
  };

  const handleCloseConfigurator = () => {
    setIsConfigOpen(false);
    setConfigProduct(null);
  };

  // Ações do Carrinho
  const handleAddToCart = (configuredItem) => {
    setCart((prev) => [configuredItem, ...prev]);
  };

  const handleRemoveCartItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Scroll suave até o catálogo
  const handleScrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="jetaprint-app">
      {/* Header com ticker e navegação */}
      <Header
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Section ampla inspirada no Modelo 01 */}
      <HeroSection
        onExploreCatalog={handleScrollToCatalog}
      />

      {/* Bento Grid assimétrico com acabamentos e ateliê */}
      <BentoGrid />

      {/* Citação do mestre impressor, números e parceiros */}
      <ManifestoSection />

      {/* Catálogo de produtos com marcas de corte (Design.md) */}
      <ProductCatalog
        onConfigureProduct={handleOpenConfigurator}
      />

      {/* Depoimentos de clientes e marcas */}
      <TestimonialsSection />

      {/* Banner de conversão com amostra de papel */}
      <CtaBanner
        onOpenCatalog={handleScrollToCatalog}
      />

      {/* Rodapé técnico */}
      <Footer />

      {/* Modal Interativo de Configuração Técnica do Produto */}
      <ProductConfiguratorModal
        product={configProduct}
        isOpen={isConfigOpen}
        onClose={handleCloseConfigurator}
        onAddToCart={handleAddToCart}
      />

      {/* Gaveta do Carrinho de Compras / Orçamento */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
