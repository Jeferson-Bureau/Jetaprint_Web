import React from 'react';
import { TESTIMONIALS } from '../data/products';

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-layout">
          {/* Coluna Esquerda: Título direto */}
          <div className="test-header-col">
            <h2 className="test-heading">Avaliações de quem roda na prática</h2>
            <p className="test-subheading">
              Atendemos diretores de arte, agências e marcas que exigem tolerância zero para falhas de acabamento.
            </p>
          </div>

          {/* Coluna Direita: Cards */}
          <div className="test-items-col">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="test-clean-card">
                <div className="test-tag-line">
                  <span className="cmyk-dot cyan" />
                  <span className="mono-spec">{t.tag}</span>
                </div>

                <p className="test-text">“{t.quote}”</p>

                <div className="test-signature">
                  <img src={t.avatar} alt={t.name} className="test-thumb" />
                  <div>
                    <strong className="test-person">{t.name}</strong>
                    <span className="mono-spec test-company">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 56px 0 72px 0;
          border-top: 1px solid var(--color-borda-suave);
        }

        .testimonials-layout {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 48px;
          align-items: flex-start;
        }

        .test-heading {
          font-size: clamp(1.8rem, 2.6vw, 2.3rem);
          margin-bottom: 12px;
        }

        .test-subheading {
          font-size: var(--text-scale-base);
          color: var(--color-cinza-chumbo);
          max-width: 45ch;
          line-height: 1.5;
        }

        .test-items-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .test-clean-card {
          background: #FFFFFF;
          border: 1px solid var(--color-borda-suave);
          padding: 28px;
        }

        .test-tag-line {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 14px;
        }

        .test-text {
          font-family: var(--font-display);
          font-size: 1.15rem;
          line-height: 1.5;
          color: var(--color-tinta);
          margin-bottom: 18px;
          max-width: 60ch;
        }

        .test-signature {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .test-thumb {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border: 1px solid var(--color-tinta);
        }

        .test-person {
          display: block;
          font-size: var(--text-scale-xs);
          color: var(--color-tinta);
        }

        .test-company {
          font-size: 11px;
          color: var(--color-cinza-chumbo);
        }

        @media (max-width: 860px) {
          .testimonials-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </section>
  );
}
