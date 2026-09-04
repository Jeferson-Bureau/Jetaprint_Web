import React from 'react';
import heroCardsImg from '../assets/hero_cards.jpg';
import stickersImg from '../assets/prod_stickers.jpg';
import brochuresImg from '../assets/prod_brochures.jpg';
import { CmykMark } from './CmykMark';

/**
 * Hero conforme Design.md linha 53:
 * "não é um banner genérico com headline+CTA+gradiente. Abre com uma vitrine real de produtos
 * em alta rotatividade (o que a categoria já faz bem: cartão, adesivo, folheto), com uma barra
 * de destaque fina no topo para promoções (cupom, frete) — funcional, não decorativa."
 */
export function HeroSection({ onExploreCatalog, onSelectQuickProduct }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* Frame da Mesa de Corte com Marcas nos Cantos */}
        <div className="hero-cutting-table">
          <span className="c-mark c-mark-tl" />
          <span className="c-mark c-mark-tr" />
          <span className="c-mark c-mark-bl" />
          <span className="c-mark c-mark-br" />

          {/* Linha Principal do Hero */}
          <div className="hero-layout-grid">
            <div className="hero-main-col">
              <h1 className="hero-headline">
                Impressão gráfica com rigor técnico. <br />
                Direto da mesa de produção.
              </h1>

              <p className="hero-text">
                Cartões de visita com corte no registro, adesivos em vinil e folhetos calibrados em offset. Sem jargão, sem refugo e com despacho em 24h para arquivos aprovados.
              </p>

              <div className="hero-button-group">
                <button className="btn-primary" onClick={onExploreCatalog}>
                  Configurar Pedido
                </button>
                <a href="#catalogo" className="btn-secondary">
                  Ver Tabela de Papéis
                </a>
              </div>

              {/* Specs técnicas em mono com justificativa real de produção */}
              <div className="hero-specs-strip">
                <div className="spec-item">
                  <span className="mono-spec">MAQUINÁRIO</span>
                  <strong>Heidelberg Speedmaster 4 Cores</strong>
                </div>
                <div className="spec-separator" />
                <div className="spec-item">
                  <span className="mono-spec">CALIBRAÇÃO</span>
                  <strong>Espectrofotometria ISO 12647-2</strong>
                </div>
                <div className="spec-separator" />
                <div className="spec-item">
                  <span className="mono-spec">DESPACHO</span>
                  <strong>24h úteis para capitais</strong>
                </div>
              </div>
            </div>

            {/* Vitrine de Produtos de Alta Rotatividade (Design.md linha 53) */}
            <div className="hero-showcase-col">
              <div className="showcase-header">
                <CmykMark size={14} />
                <span className="mono-spec">PRODUTOS EM ALTA ROTATIVIDADE</span>
              </div>

              <div className="showcase-cards-stack">
                {/* Produto 1: Cartão de Visita */}
                <div className="showcase-item" onClick={onExploreCatalog}>
                  <img src={heroCardsImg} alt="Cartão de Visita Soft-Touch" className="showcase-thumb" />
                  <div className="showcase-meta">
                    <span className="showcase-title">Cartão de Visita Soft-Touch</span>
                    <span className="mono-spec">88x48mm · Couché 300g</span>
                    <span className="showcase-price">R$ 48,90 <small>/500un</small></span>
                  </div>
                </div>

                {/* Produto 2: Adesivos Vinil */}
                <div className="showcase-item" onClick={onExploreCatalog}>
                  <img src={stickersImg} alt="Adesivos Vinil Recorte Especial" className="showcase-thumb" />
                  <div className="showcase-meta">
                    <span className="showcase-title">Adesivos Vinil Recorte</span>
                    <span className="mono-spec">Recorte Eletrônico · À prova d'água</span>
                    <span className="showcase-price">R$ 38,50 <small>/100un</small></span>
                  </div>
                </div>

                {/* Produto 3: Folhetos 3 Dobras */}
                <div className="showcase-item" onClick={onExploreCatalog}>
                  <img src={brochuresImg} alt="Folder 3 Dobras" className="showcase-thumb" />
                  <div className="showcase-meta">
                    <span className="showcase-title">Folder Institucional 3 Dobras</span>
                    <span className="mono-spec">A4 Fechado A5 · Couché 150g</span>
                    <span className="showcase-price">R$ 139,00 <small>/1.000un</small></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 24px 0 36px 0;
        }

        .hero-cutting-table {
          position: relative;
          background-color: var(--color-papel-warm);
          border: 1px solid var(--color-borda-suave);
          padding: 48px 48px;
        }

        .hero-layout-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 48px;
          align-items: center;
        }

        .hero-headline {
          font-size: clamp(2.2rem, 3.8vw, 3.3rem);
          line-height: 1.1;
          color: var(--color-tinta);
          margin-bottom: 18px;
        }

        .hero-text {
          font-size: var(--text-scale-base);
          color: var(--color-cinza-chumbo);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .hero-button-group {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .hero-specs-strip {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-top: 24px;
          border-top: 1px solid var(--color-borda-suave);
          flex-wrap: wrap;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .spec-item strong {
          font-size: var(--text-scale-xs);
          color: var(--color-tinta);
          font-weight: 600;
        }

        .spec-separator {
          width: 1px;
          height: 28px;
          background: var(--color-borda-suave);
        }

        /* Vitrine de alta rotatividade */
        .hero-showcase-col {
          background: #FFFFFF;
          border: 1px solid var(--color-borda-suave);
          padding: 24px;
        }

        .showcase-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--color-borda-suave);
        }

        .showcase-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .showcase-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px;
          border: 1px solid var(--color-borda-suave);
          background: var(--color-papel);
          cursor: pointer;
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }

        .showcase-item:hover {
          border-color: var(--color-tinta);
          background: #FFF;
        }

        .showcase-thumb {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border: 1px solid var(--color-borda-suave);
          flex-shrink: 0;
        }

        .showcase-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .showcase-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: var(--text-scale-sm);
          color: var(--color-tinta);
        }

        .showcase-price {
          font-family: var(--font-display);
          font-weight: 800;
          color: var(--color-marigold);
          font-size: var(--text-scale-sm);
          margin-top: 2px;
        }

        .showcase-price small {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--color-cinza-chumbo);
          font-weight: 400;
        }

        @media (max-width: 960px) {
          .hero-cutting-table {
            padding: 32px 20px;
          }
          .hero-layout-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
