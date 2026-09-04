import React from 'react';
import { PARTNERS } from '../data/products';
import { CmykMark } from './CmykMark';

export function ManifestoSection() {
  return (
    <section id="manifesto" className="manifesto-section">
      <div className="container">
        <div className="manifesto-block">
          {/* Citação do Mestre Impressor */}
          <div className="quote-grid">
            <div className="quote-author">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80"
                alt="Mestre Impressor Jetaprint"
                className="author-photo"
              />
              <div className="author-text">
                <span className="author-title">Marcos V. Antunes</span>
                <span className="mono-spec">Mestre Impressor · 32 anos de oficina</span>
              </div>
            </div>

            <div className="quote-body">
              <p className="quote-paragraph">
                “Na gráfica, 1 milímetro fora de registro é a diferença entre um impresso impecável e refugo. Cada lote que sai da nossa mesa de corte passa por checagem densitométrica para garantir que a cor na tela seja a cor no papel.”
              </p>
            </div>
          </div>

          {/* Métricas de Produção em Cards Retos */}
          <div className="metrics-triad">
            <div className="metric-box">
              <span className="metric-val">150k+</span>
              <span className="metric-desc">Tiragens rodadas com tolerância zero para desvio</span>
            </div>
            <div className="metric-box">
              <span className="metric-val">24 Horas</span>
              <span className="metric-desc">Despacho para arquivos aprovados no gabarito</span>
            </div>
            <div className="metric-box">
              <span className="metric-val">100%</span>
              <span className="metric-desc">Garantia total de reimpressão sem burocracia</span>
            </div>
          </div>

          {/* Parceiros e Normas Técnicas */}
          <div className="standards-row">
            <div className="standards-label">
              <CmykMark size={14} />
              <span className="mono-spec">PARCEIROS TECNOLÓGICOS E MATÉRIAS-PRIMAS</span>
            </div>
            <div className="partners-grid-items">
              {PARTNERS.map((p, idx) => (
                <div key={idx} className="partner-cell">
                  <strong>{p.name}</strong>
                  <span className="mono-spec">{p.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .manifesto-section {
          padding: 40px 0 64px 0;
        }

        .manifesto-block {
          background: #FFFFFF;
          border: 1px solid var(--color-borda-suave);
          padding: 48px;
        }

        .quote-grid {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 40px;
          align-items: center;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--color-borda-suave);
          margin-bottom: 36px;
        }

        .quote-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .author-photo {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border: 1px solid var(--color-tinta);
        }

        .author-text {
          display: flex;
          flex-direction: column;
        }

        .author-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: var(--text-scale-sm);
          color: var(--color-tinta);
        }

        .quote-paragraph {
          font-family: var(--font-display);
          font-size: clamp(1.15rem, 1.8vw, 1.45rem);
          line-height: 1.45;
          color: var(--color-tinta);
          font-weight: 600;
          max-width: 65ch;
        }

        .metrics-triad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }

        .metric-box {
          background: var(--color-papel);
          border: 1px solid var(--color-borda-suave);
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .metric-val {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-tinta);
          line-height: 1.1;
        }

        .metric-desc {
          font-size: var(--text-scale-xs);
          color: var(--color-cinza-chumbo);
          margin-top: 6px;
          line-height: 1.35;
        }

        .standards-row {
          padding-top: 24px;
          border-top: 1px dashed var(--color-borda-suave);
        }

        .standards-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .partners-grid-items {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }

        .partner-cell {
          display: flex;
          flex-direction: column;
        }

        .partner-cell strong {
          font-size: var(--text-scale-xs);
          color: var(--color-tinta);
        }

        @media (max-width: 860px) {
          .quote-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .metrics-triad {
            grid-template-columns: 1fr;
          }
          .manifesto-block {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
