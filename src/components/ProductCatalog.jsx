import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search } from 'lucide-react';

export function ProductCatalog({ onConfigureProduct }) {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      activeCategory === 'todos' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.specsSummary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="catalog-section">
      <div className="container">
        {/* Cabeçalho alinhado à esquerda, sem eyebrow (Design.md linha 55 e 70) */}
        <div className="catalog-header-clean">
          <div className="catalog-top-row">
            <div>
              <h2 className="catalog-main-title">Catálogo de Mesa de Corte</h2>
              <p className="catalog-lead">
                Selecione o impresso para configurar papel, gramatura e tiragem com cálculo em tempo real.
              </p>
            </div>

            {/* Busca direta */}
            <div className="catalog-search">
              <Search size={15} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar por produto ou especificação..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field"
              />
              {searchQuery && (
                <button
                  className="search-reset"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Abas de Categorias Retangulares */}
          <div className="category-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`cat-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de Produtos: Mesa de Corte */}
        {filteredProducts.length > 0 ? (
          <div className="cutting-table-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onConfigure={onConfigureProduct}
              />
            ))}
          </div>
        ) : (
          <div className="empty-catalog-state">
            <h3>Nenhum produto encontrado</h3>
            <p>Verifique o termo digitado ou selecione "Todos os Impressos".</p>
            <button
              className="btn-secondary"
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
              }}
            >
              Ver todos os itens
            </button>
          </div>
        )}
      </div>

      <style>{`
        .catalog-section {
          padding: 48px 0 80px 0;
        }

        .catalog-header-clean {
          margin-bottom: 32px;
        }

        .catalog-top-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .catalog-main-title {
          font-size: clamp(1.8rem, 2.8vw, 2.5rem);
          margin-bottom: 6px;
        }

        .catalog-lead {
          font-size: var(--text-scale-base);
          color: var(--color-cinza-chumbo);
          max-width: var(--max-reading-width);
        }

        .catalog-search {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 320px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          color: var(--color-cinza-chumbo);
          pointer-events: none;
        }

        .search-input-field {
          width: 100%;
          padding: 10px 32px 10px 34px;
          border: 1px solid var(--color-borda-suave);
          background: #FFF;
          font-family: var(--font-body);
          font-size: var(--text-scale-xs);
          color: var(--color-tinta);
          outline: none;
          border-radius: 0;
        }

        .search-input-field:focus {
          border-color: var(--color-tinta);
        }

        .search-reset {
          position: absolute;
          right: 10px;
          background: none;
          border: none;
          color: var(--color-cinza-chumbo);
          cursor: pointer;
        }

        .category-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          overflow-x: auto;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--color-borda-suave);
        }

        .cat-tab-btn {
          padding: 8px 16px;
          background: transparent;
          border: 1px solid transparent;
          font-family: var(--font-body);
          font-size: var(--text-scale-xs);
          font-weight: 500;
          color: var(--color-cinza-chumbo);
          cursor: pointer;
          white-space: nowrap;
          border-radius: 0;
          transition: all var(--transition-fast);
        }

        .cat-tab-btn:hover {
          color: var(--color-tinta);
        }

        .cat-tab-btn.active {
          background: var(--color-tinta);
          color: var(--color-papel);
          border-color: var(--color-tinta);
          font-weight: 600;
        }

        /* Grade Regular (Design.md linha 42) */
        .cutting-table-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .empty-catalog-state {
          padding: 48px;
          text-align: center;
          background: #FFF;
          border: 1px dashed var(--color-borda-suave);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .catalog-top-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .catalog-search {
            max-width: 100%;
          }
          .cutting-table-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
