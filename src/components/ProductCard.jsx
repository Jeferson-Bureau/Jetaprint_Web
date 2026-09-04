import React from 'react';

/**
 * Card de Produto — Especificação Exata de Design.md:
 * ┌ ⌐              ‾┐
 * │  [foto produto]  │
 * │  Nome do produto  │
 * │  88x48mm · 250g   │  ← specs em mono
 * │  R$ 43,99 /500un  │  ← preço em display, marigold
 * └ ⌐              ‾┘
 */
export function ProductCard({ product, onConfigure }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product.price);

  return (
    <div className="crop-card product-cutting-card" onClick={() => onConfigure(product)}>
      {/* 4 Marcas de Corte reais da mesa gráfica */}
      <span className="c-mark c-mark-tl" />
      <span className="c-mark c-mark-tr" />
      <span className="c-mark c-mark-bl" />
      <span className="c-mark c-mark-br" />

      {/* Marca de Registro CMYK pontual ou Badge */}
      <div className="card-meta-line">
        {product.badge ? (
          <span className="card-badge-cmyk">
            <span className="cmyk-dot cyan" />
            <span>{product.badge}</span>
          </span>
        ) : (
          <span className="mono-spec cat-tag">{product.categoryLabel}</span>
        )}
        <span className="mono-spec ref-id">REF-{product.id.substring(0, 4).toUpperCase()}</span>
      </div>

      {/* Foto do produto sem borda arredondada */}
      <div className="card-image-box">
        <img
          src={product.image}
          alt={product.name}
          className="card-photo"
          loading="lazy"
        />
      </div>

      {/* Conteúdo alinhado à esquerda com hierarquia rigorosa */}
      <div className="card-body">
        <h3 className="card-product-name">{product.name}</h3>

        {/* Specs em Monoespaçada logo acima do preço */}
        <div className="mono-spec card-product-specs">
          {product.specsSummary}
        </div>

        {/* Preço em Display e Marigold (Design.md linha 49) */}
        <div className="card-price-row">
          <div className="card-price-display">
            <span className="price-num">{formattedPrice}</span>
            <span className="price-unit">{product.priceUnit}</span>
          </div>

          <button
            className="btn-card-action"
            onClick={(e) => {
              e.stopPropagation();
              onConfigure(product);
            }}
            title="Configurar especificações técnicas"
          >
            Configurar
          </button>
        </div>
      </div>

      <style>{`
        .product-cutting-card {
          padding: 16px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          background: #FFFFFF;
        }

        .card-meta-line {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          min-height: 20px;
        }

        .card-badge-cmyk {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          color: var(--color-tinta);
          text-transform: uppercase;
        }

        .ref-id {
          font-size: 10px;
          opacity: 0.6;
        }

        .card-image-box {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--color-papel);
          border: 1px solid var(--color-borda-suave);
          margin-bottom: 14px;
        }

        .card-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .product-cutting-card:hover .card-photo {
          transform: scale(1.04);
        }

        .card-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-product-name {
          font-size: 1.125rem;
          line-height: 1.25;
          margin-bottom: 8px;
          color: var(--color-tinta);
        }

        /* Specs estritamente em mono (Design.md) */
        .card-product-specs {
          margin-bottom: 16px;
          line-height: 1.4;
          color: var(--color-cinza-chumbo);
          border-left: 2px solid var(--color-borda-suave);
          padding-left: 8px;
        }

        /* Preço em Display, cor Marigold (Design.md linha 49) */
        .card-price-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--color-borda-suave);
        }

        .card-price-display {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .price-num {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--color-marigold); /* Preço em display, marigold */
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .price-unit {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--color-cinza-chumbo);
          font-weight: 500;
        }

        .btn-card-action {
          background: var(--color-tinta);
          color: var(--color-papel);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 12px;
          padding: 6px 14px;
          border: 1px solid var(--color-tinta);
          border-radius: 2px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .product-cutting-card:hover .btn-card-action {
          background: var(--color-marigold);
          color: var(--color-tinta);
          border-color: var(--color-tinta);
        }
      `}</style>
    </div>
  );
}
