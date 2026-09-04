import React from 'react';
import { CmykMark, ProcessColorBar } from './CmykMark';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Bloco Superior */}
        <div className="footer-main-grid">
          {/* Coluna da Marca */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <CmykMark size={24} />
              <span className="footer-brand-title">JETA<span>PRINT</span></span>
            </div>
            <p className="footer-brand-desc">
              Parque gráfico e mesa de pré-impressão. Rigor de engenharia na produção de cartões, adesivos, folders e embalagens em alta escala.
            </p>
            <div className="footer-process-colors">
              <ProcessColorBar />
              <span className="mono-spec text-muted">Processo CMYK ISO 12647-2</span>
            </div>
          </div>

          {/* Colunas de Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Mesa de Corte</h4>
            <ul className="footer-links-list">
              <li><a href="#catalogo">Cartões de Visita Soft-Touch</a></li>
              <li><a href="#catalogo">Adesivos Vinil com Recorte</a></li>
              <li><a href="#catalogo">Folders & Folhetos 3 Dobras</a></li>
              <li><a href="#catalogo">Sacolas Kraft Sustentáveis</a></li>
              <li><a href="#catalogo">Cadernos Wire-o Corporativos</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Pré-impressão</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Download de Gabaritos (PDF/AI)</a></li>
              <li><a href="#hero">Manual de Sangria & Marcas</a></li>
              <li><a href="#hero">Tabela de Gramaturas de Papel</a></li>
              <li><a href="#hero">Conversão RGB para CMYK</a></li>
              <li><a href="#hero">Garantia de Reimpressão</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Produção & Balcão</h4>
            <div className="footer-contact-item">
              <MapPin size={15} className="contact-icon" />
              <span>Av. Tiradentes, 1280 — Luz, São Paulo - SP</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={15} className="contact-icon" />
              <span>Seg à Sex: 08h às 18h30 (Expedição 24h)</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={15} className="contact-icon" />
              <span>(11) 3450-8900 · WhatsApp Produção</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} className="contact-icon" />
              <span>gabaritos@jetaprint.com.br</span>
            </div>
          </div>
        </div>

        {/* Faixa Inferior */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <span className="mono-spec text-muted">
              © {new Date().getFullYear()} Jetaprint Gráfica Rápida Ltda. CNPJ: 28.941.102/0001-84
            </span>
          </div>
          <div className="bottom-right">
            <a href="#" className="mono-spec link-muted">Termos de Serviço</a>
            <span className="sep">·</span>
            <a href="#" className="mono-spec link-muted">Política de Privacidade</a>
            <span className="sep">·</span>
            <span className="mono-spec status-badge">
              <span className="status-dot-green" /> Parques 100% Operacionais
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-tinta);
          color: var(--color-papel);
          padding: 72px 0 36px 0;
          border-top: 2px solid var(--color-borda-forte);
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .footer-brand-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--color-papel);
        }

        .footer-brand-title span {
          color: var(--color-marigold);
        }

        .footer-brand-desc {
          font-size: var(--text-xs);
          color: #A39D93;
          line-height: 1.6;
          max-width: 320px;
          margin-bottom: 20px;
        }

        .footer-process-colors {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .text-muted {
          color: #7E776D;
          font-size: 11px;
        }

        .footer-heading {
          font-family: var(--font-display);
          font-size: var(--text-sm);
          font-weight: 700;
          color: var(--color-papel);
          margin-bottom: 20px;
          letter-spacing: 0.02em;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-list a {
          color: #BDB7AC;
          text-decoration: none;
          font-size: var(--text-xs);
          transition: color var(--transition-fast);
        }

        .footer-links-list a:hover {
          color: var(--color-marigold);
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: var(--text-xs);
          color: #BDB7AC;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .contact-icon {
          color: var(--color-marigold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          flex-wrap: wrap;
          gap: 16px;
        }

        .bottom-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .link-muted {
          color: #8C857A;
          text-decoration: none;
        }
        .link-muted:hover {
          color: var(--color-papel);
        }

        .sep {
          color: #555047;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #BDB7AC;
        }

        .status-dot-green {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 8px #10B981;
        }

        @media (max-width: 960px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }

        @media (max-width: 600px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
