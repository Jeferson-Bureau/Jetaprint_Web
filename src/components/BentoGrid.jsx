import React from 'react';
import bentoFinishImg from '../assets/bento_finish.jpg';
import bentoCraftsmanImg from '../assets/bento_craftsman.jpg';
import { CmykMark } from './CmykMark';

export function BentoGrid() {
  return (
    <section id="diferenciais" className="bento-section">
      <div className="container">
        {/* Título de seção curto e direto, alinhado à esquerda e sem eyebrow (Design.md linha 55 e 70) */}
        <div className="bento-header-left">
          <h2 className="bento-title">Precisão em cada milímetro</h2>
          <p className="bento-subtitle">
            Da calibração espectrofotométrica de tinta ao corte e vinco mecanizado. Produção sem surpresas na entrega.
          </p>
        </div>

        {/* Bento Grid assimétrico com acabamentos e ateliê */}
        <div className="bento-grid">
          {/* Bloco 1: Foto do Acabamento com Ficha Técnica */}
          <div className="bento-card card-finish">
            <img
              src={bentoFinishImg}
              alt="Verniz Local UV e Hot Stamping"
              className="bento-img"
            />
            <div className="card-finish-info">
              <span className="finish-name">Verniz Localizado UV & Hot Stamping</span>
              <span className="mono-spec finish-desc">
                Tolerância de registro: ±0,1mm · Encaixe perfeito sobre a cromia
              </span>
            </div>
          </div>

          {/* Bloco 2: Ateliê de Prova de Cor */}
          <div className="bento-card card-craftsman">
            <img
              src={bentoCraftsmanImg}
              alt="Mesa de pré-impressão"
              className="bento-img"
            />
            <div className="card-craftsman-label">
              <span className="cmyk-dot cyan" />
              <span className="mono-spec">PROVA DE COR ISO 12647</span>
            </div>
          </div>

          {/* Bloco 3: Destaque Marigold — Spot Color da Paleta */}
          <div className="bento-card card-marigold-spot">
            <div className="marigold-content">
              <div className="cmyk-badge">
                <CmykMark size={20} />
                <span className="mono-spec text-dark">GARANTIA DE REGISTRO</span>
              </div>
              <h3 className="marigold-title">Tolerância zero para desvio</h3>
              <p className="marigold-text">
                Se houver qualquer erro de sangria ou cor fora do gabarito homologado, reimprimimos o lote imediatamente.
              </p>
            </div>
          </div>

          {/* Bloco 4: Métrica Pantone */}
          <div className="bento-card card-pantone-metric">
            <div className="metric-header">
              <span className="mono-spec">CONTROLE DE PROCESSO</span>
              <span className="cmyk-dot magenta" />
            </div>
            <div className="metric-big-num">99.8%</div>
            <p className="metric-detail">
              Acurácia espectrofotométrica Pantone® mantida em tiragens contínuas de 500 a 50.000 unidades.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .bento-section {
          padding: 56px 0 72px 0;
        }

        .bento-header-left {
          text-align: left;
          margin-bottom: 36px;
        }

        .bento-title {
          font-size: clamp(1.8rem, 2.8vw, 2.4rem);
          margin-bottom: 8px;
        }

        .bento-subtitle {
          font-size: var(--text-scale-base);
          color: var(--color-cinza-chumbo);
          max-width: var(--max-reading-width);
          line-height: 1.5;
        }

        /* Grid assimétrico sem sombras ou bordas arredondadas SaaS */
        .bento-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr 1fr;
          grid-template-rows: 230px 230px;
          gap: 16px;
        }

        .bento-card {
          position: relative;
          border: 1px solid var(--color-borda-suave);
          background: #FFFFFF;
          overflow: hidden;
        }

        .bento-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-finish {
          grid-row: span 2;
          display: flex;
          align-items: flex-end;
        }

        .card-finish-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(23, 21, 18, 0.92);
          padding: 18px 20px;
          color: #FFF;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .finish-name {
          display: block;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: var(--text-scale-sm);
          margin-bottom: 4px;
        }

        .finish-desc {
          color: #DDD5C8;
          font-size: 11px;
        }

        .card-craftsman {
          display: flex;
          align-items: flex-end;
          padding: 14px;
        }

        .card-craftsman-label {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(250, 247, 240, 0.95);
          border: 1px solid var(--color-borda-suave);
          padding: 4px 10px;
        }

        /* Card Marigold — Spot Color */
        .card-marigold-spot {
          background-color: var(--color-marigold);
          border-color: var(--color-tinta);
          padding: 24px;
        }

        .marigold-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .cmyk-badge {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .text-dark {
          color: var(--color-tinta);
          font-weight: 600;
        }

        .marigold-title {
          font-size: 1.35rem;
          color: var(--color-tinta);
          line-height: 1.2;
          margin: 12px 0 6px 0;
        }

        .marigold-text {
          font-size: var(--text-scale-xs);
          color: var(--color-tinta);
          line-height: 1.45;
          opacity: 0.9;
        }

        /* Card Métrica */
        .card-pantone-metric {
          grid-row: span 2;
          background-color: var(--color-papel-card);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-borda-suave);
        }

        .metric-big-num {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 4.5vw, 4.2rem);
          font-weight: 800;
          line-height: 1;
          color: var(--color-tinta);
          letter-spacing: -0.04em;
          margin: 16px 0;
        }

        .metric-detail {
          font-size: var(--text-scale-sm);
          color: var(--color-cinza-chumbo);
          line-height: 1.5;
        }

        @media (max-width: 960px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .card-finish {
            grid-column: span 2;
            height: 300px;
          }
          .card-pantone-metric {
            grid-row: auto;
          }
        }

        @media (max-width: 600px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .card-finish {
            grid-column: span 1;
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
}
