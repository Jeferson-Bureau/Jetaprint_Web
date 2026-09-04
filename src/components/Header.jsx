import React from 'react';
import { ShoppingBag, Search, PhoneCall } from 'lucide-react';
import { CmykMark, ProcessColorBar } from './CmykMark';

export function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header-wrapper">
      {/* Barra de utilidades / Ticker superior funcional (Design.md linha 53) */}
      <div className="top-ticker">
        <div className="container ticker-container">
          <div className="ticker-left">
            <ProcessColorBar />
            <span className="ticker-text">
              Mesa de produção ativa · Despacho em 24h úteis para capitais
            </span>
          </div>
          <div className="ticker-right">
            <span className="ticker-coupon">
              Cupom: <code>PRIMEIRA10</code> (-10%)
            </span>
            <span className="ticker-sep">|</span>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="ticker-link">
              <PhoneCall size={12} />
              <span>Balcão de Atendimento</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Navegação */}
      <div className="main-navbar">
        <div className="container nav-container">
          {/* Menu Esquerdo */}
          <nav className="nav-menu">
            <a href="#hero" className="nav-item active">Início</a>
            <a href="#catalogo" className="nav-item">Catálogo</a>
            <a href="#diferenciais" className="nav-item">Acabamentos</a>
            <a href="#manifesto" className="nav-item">Oficina</a>
          </nav>

          {/* Logo Central JETAPRINT */}
          <div className="brand-center">
            <a href="#" className="brand-link">
              <CmykMark size={22} />
              <span className="brand-name">JETA<span>PRINT</span></span>
            </a>
          </div>

          {/* Ações à Direita */}
          <div className="nav-actions">
            <a href="#catalogo" className="search-quick-btn" title="Explorar produtos">
              <Search size={15} />
              <span>Buscar</span>
            </a>

            <button
              className="btn-cart-trigger"
              onClick={onOpenCart}
              aria-label="Ver orçamento"
            >
              <ShoppingBag size={16} />
              <span>Orçamento</span>
              {cartCount > 0 && (
                <span className="cart-num-badge">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .header-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--color-papel);
          border-bottom: 1px solid var(--color-borda-suave);
        }

        .top-ticker {
          background-color: var(--color-tinta);
          color: var(--color-papel);
          font-size: var(--text-scale-xs);
          padding: 6px 0;
        }

        .ticker-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ticker-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ticker-text {
          color: #DDD5C8;
          font-family: var(--font-body);
        }

        .ticker-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ticker-coupon code {
          background: rgba(242, 169, 0, 0.25);
          color: var(--color-marigold);
          padding: 2px 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
        }

        .ticker-sep {
          opacity: 0.3;
        }

        .ticker-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #DDD5C8;
          text-decoration: none;
        }

        .ticker-link:hover {
          color: var(--color-marigold);
        }

        .main-navbar {
          padding: 16px 0;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-item {
          font-family: var(--font-body);
          font-size: var(--text-scale-sm);
          font-weight: 500;
          color: var(--color-cinza-chumbo);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .nav-item:hover, .nav-item.active {
          color: var(--color-tinta);
          font-weight: 600;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .brand-name {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--color-tinta);
        }

        .brand-name span {
          color: var(--color-marigold);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .search-quick-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border: 1px solid var(--color-borda-suave);
          background: #FFF;
          color: var(--color-cinza-chumbo);
          text-decoration: none;
          font-size: var(--text-scale-xs);
          transition: border-color var(--transition-fast);
        }

        .search-quick-btn:hover {
          border-color: var(--color-tinta);
          color: var(--color-tinta);
        }

        .btn-cart-trigger {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--color-tinta);
          color: var(--color-papel);
          border: 1px solid var(--color-tinta);
          font-family: var(--font-display);
          font-size: var(--text-scale-xs);
          font-weight: 700;
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .btn-cart-trigger:hover {
          background: var(--color-marigold);
          color: var(--color-tinta);
        }

        .cart-num-badge {
          background: var(--color-marigold);
          color: var(--color-tinta);
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          padding: 1px 6px;
        }

        .btn-cart-trigger:hover .cart-num-badge {
          background: var(--color-tinta);
          color: var(--color-papel);
        }

        @media (max-width: 860px) {
          .nav-menu {
            display: none;
          }
          .ticker-right {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
