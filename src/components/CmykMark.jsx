import React from 'react';

/**
 * Marca de Registro CMYK autêntica de pré-impressão
 * Utilizada como detalhe técnico em cabeçalhos, cantos de cards e badges.
 */
export function CmykMark({ size = 20, className = '' }) {
  const r = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cmyk-register-mark ${className}`}
      title="Cruz de Registro CMYK"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      {/* Círculo guia */}
      <circle
        cx={r}
        cy={r}
        r={r * 0.72}
        stroke="var(--color-tinta)"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
      <circle
        cx={r}
        cy={r}
        r={r * 0.35}
        stroke="var(--color-tinta)"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      {/* Linhas de mira CMYK */}
      <line
        x1={r}
        y1={0}
        x2={r}
        y2={size}
        stroke="var(--color-ciano-registro)"
        strokeWidth="1.2"
      />
      <line
        x1={0}
        y1={r}
        x2={size}
        y2={r}
        stroke="var(--color-magenta-registro)"
        strokeWidth="1.2"
      />
      {/* Centro Tinta */}
      <circle cx={r} cy={r} r={1.5} fill="var(--color-tinta)" />
    </svg>
  );
}

export function ProcessColorBar() {
  return (
    <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
      <span className="cmyk-dot cyan" title="Ciano de Processo" />
      <span className="cmyk-dot magenta" title="Magenta de Processo" />
      <span className="cmyk-dot yellow" title="Amarelo / Marigold" />
      <span className="cmyk-dot black" title="Preto Tinta" />
    </div>
  );
}
