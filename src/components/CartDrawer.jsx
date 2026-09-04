import React, { useState } from 'react';
import { X, Trash2, Truck, Tag, Check, ShoppingBag } from 'lucide-react';
import { CmykMark } from './CmykMark';

export function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [cep, setCep] = useState('');
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingType, setShippingType] = useState('balcao');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleApplyCoupon = () => {
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'PRIMEIRA10' || code === 'PRODUTORA10') {
      setAppliedCoupon({ code, discountPercent: 10 });
    } else {
      setCouponError('Cupom inválido ou expirado');
    }
  };

  const discountAmount = appliedCoupon
    ? (subtotal * appliedCoupon.discountPercent) / 100
    : 0;

  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const formatBRL = (val) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  const handleShippingChange = (type, cost) => {
    setShippingType(type);
    setShippingCost(cost);
  };

  const handleFinalize = () => {
    setIsCheckoutOpen(true);
  };

  const handleConfirmOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setOrderPlaced(false);
      setIsCheckoutOpen(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Cabeçalho do Carrinho */}
        <div className="cart-header">
          <div className="cart-title-row">
            <CmykMark size={18} />
            <h2 className="cart-drawer-title">Orçamento de Produção</h2>
            <span className="mono-spec cart-count-tag">
              [{cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'}]
            </span>
          </div>
          <button className="cart-close-btn" onClick={onClose} aria-label="Fechar">
            <X size={18} />
          </button>
        </div>

        {/* Lista de Itens */}
        <div className="cart-items-scroll">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBag size={42} color="var(--color-cinza-chumbo)" />
              <h3>Sua mesa de corte está vazia</h3>
              <p>Nenhum impresso configurado até o momento.</p>
              <button className="btn-secondary" onClick={onClose}>
                Ver Catálogo
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item, idx) => (
                <div key={idx} className="cart-item-card">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="item-thumb"
                  />
                  <div className="item-info">
                    <div className="item-header">
                      <h4 className="item-name">{item.product.name}</h4>
                      <button
                        className="btn-remove-item"
                        onClick={() => onRemoveItem(idx)}
                        title="Remover item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="item-specs-block">
                      <div className="mono-spec spec-bullet">
                        {item.quantity.toLocaleString('pt-BR')} un · {item.paper.name}
                      </div>
                      <div className="mono-spec spec-bullet">
                        {item.finish.name}
                      </div>
                      <div className="mono-spec spec-file">
                        Arquivo: {item.fileName}
                      </div>
                    </div>

                    <div className="item-price-row">
                      <span className="mono-spec">{formatBRL(item.unitPrice)} /un</span>
                      <span className="item-total-price">{formatBRL(item.totalPrice)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Rodapé e Fechamento */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            {/* Modalidade de Envio */}
            <div className="shipping-box">
              <div className="shipping-top">
                <Truck size={14} color="var(--color-tinta)" />
                <span className="mono-spec">LOGÍSTICA & DESPACHO:</span>
              </div>

              <div className="shipping-options">
                <label className={`ship-option ${shippingType === 'balcao' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingType === 'balcao'}
                    onChange={() => handleShippingChange('balcao', 0)}
                  />
                  <span>Retirada Balcão Fábrica SP (Grátis)</span>
                </label>

                <label className={`ship-option ${shippingType === 'expresso' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingType === 'expresso'}
                    onChange={() => handleShippingChange('expresso', 18.00)}
                  />
                  <span>Motoboy Express SP Capital (R$ 18,00)</span>
                </label>

                <label className={`ship-option ${shippingType === 'sedex' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingType === 'sedex'}
                    onChange={() => handleShippingChange('sedex', 28.50)}
                  />
                  <span>SEDEX Correios Brasil (R$ 28,50)</span>
                </label>
              </div>
            </div>

            {/* Campo de Cupom */}
            <div className="coupon-box">
              <div className="coupon-input-wrap">
                <Tag size={14} className="coupon-icon" />
                <input
                  type="text"
                  placeholder="Cupom: PRIMEIRA10"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="coupon-input"
                />
                <button className="coupon-apply-btn" onClick={handleApplyCoupon}>
                  Aplicar
                </button>
              </div>
              {appliedCoupon && (
                <div className="coupon-success-msg">
                  <Check size={12} /> Cupom <strong>{appliedCoupon.code}</strong> aplicado (-10%)
                </div>
              )}
              {couponError && (
                <div className="coupon-error-msg">{couponError}</div>
              )}
            </div>

            {/* Valores Finais */}
            <div className="breakdown-box">
              <div className="breakdown-row">
                <span>Subtotal dos itens</span>
                <span className="mono-spec">{formatBRL(subtotal)}</span>
              </div>
              {appliedCoupon && (
                <div className="breakdown-row discount">
                  <span>Desconto ({appliedCoupon.discountPercent}%)</span>
                  <span className="mono-spec">-{formatBRL(discountAmount)}</span>
                </div>
              )}
              <div className="breakdown-row">
                <span>Frete</span>
                <span className="mono-spec">
                  {shippingCost === 0 ? 'Grátis' : formatBRL(shippingCost)}
                </span>
              </div>
              <div className="breakdown-row total-row">
                <span>Total da Ordem:</span>
                <span className="total-amount">{formatBRL(total)}</span>
              </div>
            </div>

            {/* Botão de Finalizar */}
            <button className="btn-primary checkout-btn" onClick={handleFinalize}>
              Avançar para Produção
            </button>
          </div>
        )}

        {/* Modal de Checkout / Confirmação */}
        {isCheckoutOpen && (
          <div className="checkout-overlay">
            <div className="checkout-content">
              {orderPlaced ? (
                <div className="order-success-view">
                  <div className="success-icon-box">
                    <Check size={32} color="var(--color-tinta)" />
                  </div>
                  <h3>Ordem Despachada para Mesa!</h3>
                  <p className="mono-spec">OS #JP-84920 · Calibração em Andamento</p>
                  <p className="success-text">
                    Nossa equipe de pré-impressão está conferindo o gabarito. O acompanhamento foi direcionado ao seu WhatsApp.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="checkout-top">
                    <h3>Confirmar Ordem de Serviço</h3>
                    <button
                      className="checkout-close"
                      onClick={() => setIsCheckoutOpen(false)}
                    >
                      ✕
                    </button>
                  </div>
                  <p className="checkout-sub">
                    Validação de dados cadastrais para faturamento.
                  </p>

                  <div className="checkout-summary-list">
                    {cartItems.map((item, i) => (
                      <div key={i} className="chk-item">
                        <span>{item.quantity}x {item.product.name} ({item.paper.name})</span>
                        <strong>{formatBRL(item.totalPrice)}</strong>
                      </div>
                    ))}
                    <div className="chk-total">
                      <span>Total:</span>
                      <span className="total-accent">{formatBRL(total)}</span>
                    </div>
                  </div>

                  <div className="checkout-form-fields">
                    <input type="text" placeholder="Nome Completo / Razão Social" defaultValue="Jeferson Fernandes" className="chk-input" />
                    <input type="tel" placeholder="WhatsApp para Envio de Prova Virtual" defaultValue="(11) 98765-4321" className="chk-input" />
                    <input type="email" placeholder="E-mail para Faturamento" defaultValue="jeferson@designstudio.com.br" className="chk-input" />
                  </div>

                  <button className="btn-primary confirm-order-btn" onClick={handleConfirmOrder}>
                    Despachar Ordem de Produção
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .cart-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(23, 21, 18, 0.75);
          backdrop-filter: blur(4px);
          z-index: 1100;
          display: flex;
          justify-content: flex-end;
        }

        .cart-drawer {
          position: relative;
          width: 100%;
          max-width: 480px;
          height: 100%;
          background: #FFFFFF;
          border-left: 1px solid var(--color-tinta);
          display: flex;
          flex-direction: column;
        }

        .cart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--color-borda-suave);
          background: var(--color-papel);
        }

        .cart-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cart-drawer-title {
          font-size: 1.15rem;
          color: var(--color-tinta);
        }

        .cart-count-tag {
          font-size: 11px;
          color: var(--color-cinza-chumbo);
        }

        .cart-close-btn {
          background: none;
          border: 1px solid var(--color-borda-suave);
          color: var(--color-tinta);
          cursor: pointer;
          display: flex;
          padding: 4px;
        }

        .cart-close-btn:hover {
          background: var(--color-tinta);
          color: #FFF;
        }

        .cart-items-scroll {
          flex-grow: 1;
          overflow-y: auto;
          padding: 20px 24px;
        }

        .cart-empty-state {
          text-align: center;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .cart-empty-state h3 {
          font-size: 1.2rem;
          margin-top: 8px;
        }

        .cart-empty-state p {
          font-size: var(--text-scale-xs);
          color: var(--color-cinza-chumbo);
          margin-bottom: 12px;
        }

        .cart-items-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cart-item-card {
          display: flex;
          gap: 14px;
          padding: 14px;
          background: var(--color-papel);
          border: 1px solid var(--color-borda-suave);
        }

        .item-thumb {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border: 1px solid var(--color-borda-suave);
          flex-shrink: 0;
        }

        .item-info {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
        }

        .item-name {
          font-size: var(--text-scale-xs);
          font-weight: 700;
          line-height: 1.25;
        }

        .btn-remove-item {
          background: none;
          border: none;
          color: var(--color-cinza-chumbo);
          cursor: pointer;
          padding: 2px;
        }
        .btn-remove-item:hover {
          color: #DC2626;
        }

        .item-specs-block {
          margin: 6px 0 8px 0;
        }

        .spec-bullet {
          font-size: 11px;
          color: var(--color-cinza-chumbo);
          line-height: 1.35;
        }

        .spec-file {
          font-size: 11px;
          color: var(--color-tinta);
          margin-top: 3px;
        }

        .item-price-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: auto;
        }

        .item-total-price {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: var(--text-scale-sm);
          color: var(--color-tinta);
        }

        /* Rodapé do Carrinho */
        .cart-footer {
          border-top: 1px solid var(--color-borda-suave);
          background: #FFF;
          padding: 20px 24px;
        }

        .shipping-box {
          margin-bottom: 12px;
        }

        .shipping-top {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          margin-bottom: 6px;
        }

        .shipping-options {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ship-option {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          cursor: pointer;
          color: var(--color-cinza-chumbo);
        }
        .ship-option.selected {
          color: var(--color-tinta);
          font-weight: 600;
        }

        .coupon-box {
          margin-bottom: 12px;
        }

        .coupon-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .coupon-icon {
          position: absolute;
          left: 8px;
          color: var(--color-cinza-chumbo);
        }

        .coupon-input {
          width: 100%;
          padding: 7px 68px 7px 28px;
          border: 1px solid var(--color-borda-suave);
          font-size: 11px;
          outline: none;
          border-radius: 0;
        }

        .coupon-apply-btn {
          position: absolute;
          right: 3px;
          padding: 3px 8px;
          background: var(--color-tinta);
          color: #FFF;
          border: none;
          font-size: 10px;
          font-weight: 600;
          cursor: pointer;
        }

        .coupon-success-msg {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: #059669;
          margin-top: 3px;
        }

        .coupon-error-msg {
          font-size: 11px;
          color: #DC2626;
          margin-top: 3px;
        }

        .breakdown-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 10px 0;
          border-top: 1px solid var(--color-papel-warm);
          margin-bottom: 14px;
        }

        .breakdown-row {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--color-cinza-chumbo);
        }

        .breakdown-row.discount {
          color: #059669;
        }

        .total-row {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-tinta);
          padding-top: 6px;
          border-top: 1px dashed var(--color-borda-suave);
        }

        .total-amount {
          font-family: var(--font-display);
          font-size: 1.45rem;
          color: var(--color-marigold); /* Marigold para destaque de preço */
        }

        .checkout-btn {
          width: 100%;
          padding: 12px;
        }

        /* Checkout Modal */
        .checkout-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(23, 21, 18, 0.9);
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .checkout-content {
          background: #FFF;
          border: 1px solid var(--color-tinta);
          padding: 24px;
          width: 100%;
          max-width: 380px;
        }

        .checkout-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .checkout-close {
          background: none;
          border: none;
          font-size: 16px;
          cursor: pointer;
        }

        .checkout-sub {
          font-size: 11px;
          color: var(--color-cinza-chumbo);
          margin: 4px 0 14px 0;
        }

        .checkout-summary-list {
          background: var(--color-papel);
          border: 1px solid var(--color-borda-suave);
          padding: 10px;
          font-size: 11px;
          margin-bottom: 14px;
        }

        .chk-item {
          display: flex;
          justify-content: space-between;
          padding: 3px 0;
        }

        .chk-total {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid var(--color-borda-suave);
          margin-top: 6px;
          padding-top: 6px;
          font-weight: 700;
        }

        .total-accent {
          color: var(--color-marigold);
          font-family: var(--font-display);
          font-size: 1.1rem;
        }

        .checkout-form-fields {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .chk-input {
          padding: 8px 10px;
          border: 1px solid var(--color-borda-suave);
          font-size: 11px;
          outline: none;
          border-radius: 0;
        }

        .confirm-order-btn {
          width: 100%;
          padding: 12px;
        }

        .order-success-view {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .success-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 0;
          border: 1px solid var(--color-tinta);
          background: var(--color-marigold);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-text {
          font-size: 11px;
          color: var(--color-cinza-chumbo);
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
