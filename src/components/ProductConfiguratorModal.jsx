import React, { useState } from 'react';
import { X, Check, UploadCloud } from 'lucide-react';
import { CmykMark } from './CmykMark';

export function ProductConfiguratorModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !product) return null;

  // Estados de configuração
  const [selectedPaper, setSelectedPaper] = useState(product.options.papers[0]);
  const [selectedFinish, setSelectedFinish] = useState(product.options.finishes[0]);
  const [selectedQty, setSelectedQty] = useState(product.options.quantities[2] || product.options.quantities[0]);
  const [fileName, setFileName] = useState(null);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Cálculo dinâmico de preço (Design.md)
  const calculatedTotal = (
    (product.price * selectedQty.multiplier * selectedPaper.priceFactor) +
    selectedFinish.addCost
  );

  const unitPrice = calculatedTotal / selectedQty.qty;

  const handleAdd = () => {
    const configuredItem = {
      product,
      paper: selectedPaper,
      finish: selectedFinish,
      quantity: selectedQty.qty,
      totalPrice: calculatedTotal,
      unitPrice: unitPrice,
      fileName: fileName || 'Gabarito conferido no balcão'
    };

    onAddToCart(configuredItem);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  const formatBRL = (val) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="crop-card configurator-modal" onClick={(e) => e.stopPropagation()}>
        {/* 4 Marcas de Corte reais da mesa gráfica */}
        <span className="c-mark c-mark-tl" />
        <span className="c-mark c-mark-tr" />
        <span className="c-mark c-mark-bl" />
        <span className="c-mark c-mark-br" />

        {/* Botão de Fechar */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Fechar">
          <X size={18} />
        </button>

        <div className="modal-grid">
          {/* Lado Esquerdo: Produto & Resumo da Ficha */}
          <div className="modal-product-summary">
            <div className="modal-image-box">
              <img src={product.image} alt={product.name} className="modal-product-img" />
              <div className="modal-category-badge">
                <CmykMark size={12} />
                <span className="mono-spec">{product.categoryLabel}</span>
              </div>
            </div>

            <div className="product-info-wrap">
              <h2 className="modal-product-title">{product.name}</h2>
              <p className="modal-product-desc">{product.description}</p>

              <div className="specs-box">
                <div className="spec-row">
                  <span className="spec-term">Gabarito Padrão:</span>
                  <span className="mono-spec">{product.specsSummary}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-term">Prazo de Produção:</span>
                  <span className="mono-spec">{product.productionTime}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-term">Tolerância Refile:</span>
                  <span className="mono-spec">± 0,1 mm</span>
                </div>
              </div>

              {/* Área de Envio de Arte / Gabarito */}
              <div className="artwork-upload-zone">
                <label className="upload-label">
                  <UploadCloud size={18} color="var(--color-tinta)" />
                  <div className="upload-texts">
                    <span className="upload-title">
                      {fileName ? fileName : 'Anexar Gabarito (PDF, CDR, AI)'}
                    </span>
                    <span className="upload-sub mono-spec">CMYK · 300 DPI · 2mm de sangria</span>
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.cdr,.ai,.psd,.jpg,.png"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileName(e.target.files[0].name);
                      }
                    }}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Lado Direito: Seletores de Configuração Técnica */}
          <div className="modal-config-form">
            <div className="config-header">
              <span className="mono-spec">ESPECIFICAÇÕES DE PRÉ-IMPRESSÃO</span>
              <h3 className="config-title">Configurar Lote</h3>
            </div>

            {/* 1. Escolha do Papel */}
            <div className="option-group">
              <label className="group-label">
                <span>1. Tipo de Papel & Gramatura</span>
              </label>
              <div className="options-flat-list">
                {product.options.papers.map((p) => (
                  <button
                    key={p.id}
                    className={`flat-option-btn ${selectedPaper.id === p.id ? 'active' : ''}`}
                    onClick={() => setSelectedPaper(p)}
                  >
                    <span className="option-name">{p.name}</span>
                    {selectedPaper.id === p.id && <Check size={14} className="check-mark" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Escolha do Acabamento */}
            <div className="option-group">
              <label className="group-label">
                <span>2. Acabamento de Superfície</span>
              </label>
              <div className="options-flat-list">
                {product.options.finishes.map((f) => (
                  <button
                    key={f.id}
                    className={`flat-option-btn ${selectedFinish.id === f.id ? 'active' : ''}`}
                    onClick={() => setSelectedFinish(f)}
                  >
                    <span className="option-name">{f.name}</span>
                    {f.addCost > 0 && (
                      <span className="mono-spec add-cost">+{formatBRL(f.addCost)}</span>
                    )}
                    {selectedFinish.id === f.id && <Check size={14} className="check-mark" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Escolha da Tiragem */}
            <div className="option-group">
              <label className="group-label">
                <span>3. Quantidade / Tiragem</span>
                <span className="mono-spec">Desconto progressivo de fábrica</span>
              </label>
              <div className="qty-row">
                {product.options.quantities.map((q) => (
                  <button
                    key={q.qty}
                    className={`qty-cell ${selectedQty.qty === q.qty ? 'active' : ''}`}
                    onClick={() => setSelectedQty(q)}
                  >
                    <span className="qty-num">{q.qty.toLocaleString('pt-BR')}</span>
                    <span className="qty-sub mono-spec">un</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Caixa de Preço Final e Adição */}
            <div className="pricing-box">
              <div className="price-stack">
                <div className="unit-line">
                  <span className="mono-spec">Preço unitário:</span>
                  <span className="mono-spec font-bold">{formatBRL(unitPrice)}/un</span>
                </div>
                <div className="total-line">
                  <span className="total-lead">Valor do Lote:</span>
                  <span className="total-figure">{formatBRL(calculatedTotal)}</span>
                </div>
              </div>

              <button
                className={`btn-primary add-order-btn ${addedSuccess ? 'done' : ''}`}
                onClick={handleAdd}
                disabled={addedSuccess}
              >
                {addedSuccess ? 'Adicionado com Sucesso' : 'Adicionar ao Orçamento'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(23, 21, 18, 0.75);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .configurator-modal {
          background: #FFFFFF;
          border: 1px solid var(--color-borda-tinta);
          width: 100%;
          max-width: 940px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 10;
          width: 32px;
          height: 32px;
          border: 1px solid var(--color-tinta);
          background: #FFF;
          color: var(--color-tinta);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .modal-close-btn:hover {
          background: var(--color-tinta);
          color: #FFF;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
        }

        .modal-product-summary {
          padding: 32px;
          background: var(--color-papel);
          border-right: 1px solid var(--color-borda-suave);
          display: flex;
          flex-direction: column;
        }

        .modal-image-box {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #FFF;
          border: 1px solid var(--color-borda-suave);
          margin-bottom: 20px;
        }

        .modal-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-category-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--color-papel);
          padding: 3px 8px;
          border: 1px solid var(--color-borda-suave);
        }

        .modal-product-title {
          font-size: 1.35rem;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .modal-product-desc {
          font-size: var(--text-scale-xs);
          color: var(--color-cinza-chumbo);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .specs-box {
          background: #FFF;
          border: 1px solid var(--color-borda-suave);
          padding: 12px;
          margin-bottom: 20px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 4px 0;
          font-size: 12px;
          border-bottom: 1px solid var(--color-papel-warm);
        }
        .spec-row:last-child {
          border-bottom: none;
        }

        .spec-term {
          color: var(--color-cinza-chumbo);
        }

        .artwork-upload-zone {
          margin-top: auto;
        }

        .upload-label {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FFF;
          border: 1px dashed var(--color-tinta);
          padding: 12px;
          cursor: pointer;
        }

        .upload-texts {
          display: flex;
          flex-direction: column;
        }

        .upload-title {
          font-size: var(--text-scale-xs);
          font-weight: 600;
          color: var(--color-tinta);
        }

        .upload-sub {
          font-size: 10px;
          color: var(--color-cinza-chumbo);
        }

        /* Lado Direito */
        .modal-config-form {
          padding: 32px;
          display: flex;
          flex-direction: column;
        }

        .config-header {
          margin-bottom: 20px;
        }

        .config-title {
          font-size: 1.5rem;
          margin-top: 2px;
        }

        .option-group {
          margin-bottom: 20px;
        }

        .group-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: var(--text-scale-xs);
          margin-bottom: 8px;
        }

        .options-flat-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .flat-option-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border: 1px solid var(--color-borda-suave);
          background: #FFF;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: var(--text-scale-xs);
          color: var(--color-tinta);
          text-align: left;
          transition: all var(--transition-fast);
        }

        .flat-option-btn:hover {
          border-color: var(--color-tinta);
        }

        .flat-option-btn.active {
          border-color: var(--color-tinta);
          background: var(--color-papel-warm);
          font-weight: 600;
        }

        .option-name {
          flex-grow: 1;
        }

        .add-cost {
          margin-right: 8px;
        }

        .check-mark {
          color: var(--color-tinta);
        }

        .qty-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
          gap: 6px;
        }

        .qty-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 6px;
          border: 1px solid var(--color-borda-suave);
          background: #FFF;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .qty-cell:hover {
          border-color: var(--color-tinta);
        }

        .qty-cell.active {
          border-color: var(--color-tinta);
          background: var(--color-tinta);
          color: var(--color-papel);
        }

        .qty-num {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.05rem;
        }

        .qty-sub {
          font-size: 10px;
          opacity: 0.7;
        }

        .pricing-box {
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px solid var(--color-borda-suave);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .price-stack {
          display: flex;
          flex-direction: column;
        }

        .unit-line {
          display: flex;
          gap: 6px;
        }

        .font-bold {
          font-weight: 700;
        }

        .total-line {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .total-lead {
          font-size: var(--text-scale-xs);
          color: var(--color-cinza-chumbo);
        }

        .total-figure {
          font-family: var(--font-display);
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--color-marigold); /* Preço em display, marigold */
          letter-spacing: -0.02em;
        }

        .add-order-btn {
          flex-shrink: 0;
          padding: 12px 24px;
        }

        .add-order-btn.done {
          background: #10B981;
          color: #FFF;
          border-color: #10B981;
        }

        @media (max-width: 840px) {
          .modal-grid {
            grid-template-columns: 1fr;
          }
          .modal-product-summary {
            border-right: none;
            border-bottom: 1px solid var(--color-borda-suave);
            padding: 20px;
          }
          .modal-config-form {
            padding: 20px;
          }
          .pricing-box {
            flex-direction: column;
            align-items: stretch;
          }
          .add-order-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
