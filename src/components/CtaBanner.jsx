import React from 'react';
import ctaHandImg from '../assets/cta_hand.jpg';

/**
 * Banner de fechamento conforme Design.md:
 * Tom de voz direto e funcional, sem "Descubra", sem setas decorativas,
 * usando a cor Marigold como spot color e acabamento de amostra de papel.
 */
export function CtaBanner({ onOpenCatalog }) {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-split-card">
          {/* Lado Esquerdo: Amostra de Papel em Fundo Marigold */}
          <div className="cta-photo-column">
            <img
              src={ctaHandImg}
              alt="Amostra de papel de alta gramatura"
              className="cta-photo"
            />
            <div className="sample-tag">
              <span className="mono-spec">AMOSTRA · FEDRIGONI 300g</span>
            </div>
          </div>

          {/* Lado Direito: Chamada Direta sem Jargão Corporativo */}
          <div className="cta-content-column">
            <h2 className="cta-heading">
              Sua marca impressa com quem entende de pré-impressão.
            </h2>

            <p className="cta-subheading">
              Envie seu PDF com 2mm de sangria ou monte as especificações no nosso catálogo. Fazemos a checagem técnica antes de gravar as chapas de impressão.
            </p>

            <div className="cta-button-row">
              <button className="btn-primary" onClick={onOpenCatalog}>
                Configurar Meu Pedido
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-banner-section {
          padding: 32px 0 80px 0;
        }

        .cta-split-card {
          display: grid;
          grid-template-columns: 340px 1fr;
          background: #FFFFFF;
          border: 1px solid var(--color-borda-suave);
          border-radius: 0;
        }

        .cta-photo-column {
          position: relative;
          background-color: var(--color-marigold);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .cta-photo {
          width: 100%;
          height: 100%;
          max-height: 380px;
          object-fit: cover;
          border: 1px solid var(--color-tinta);
        }

        .sample-tag {
          position: absolute;
          bottom: 32px;
          left: 32px;
          background: var(--color-papel);
          border: 1px solid var(--color-tinta);
          padding: 4px 10px;
        }

        .cta-content-column {
          padding: 56px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--color-papel-warm);
        }

        .cta-heading {
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          line-height: 1.15;
          margin-bottom: 16px;
          color: var(--color-tinta);
          max-width: 25ch;
        }

        .cta-subheading {
          font-size: var(--text-scale-base);
          color: var(--color-cinza-chumbo);
          line-height: 1.6;
          max-width: var(--max-reading-width);
          margin-bottom: 32px;
        }

        .cta-button-row {
          display: flex;
          align-items: center;
        }

        @media (max-width: 900px) {
          .cta-split-card {
            grid-template-columns: 1fr;
          }
          .cta-photo-column {
            height: 280px;
          }
          .cta-content-column {
            padding: 32px 20px;
          }
        }
      `}</style>
    </section>
  );
}
