# JETAPRINT — E-commerce para Gráfica Rápida

Aplicação web e e-commerce moderna para a **Jetaprint**, desenvolvida com base no universo de pré-impressão gráfica e na metáfora de uma **mesa de produção**.

---

## 📐 Identidade Visual & Conceito (Design.md)

- **Mesa de Corte**: Cards de produtos delimitados por marcas de corte em L reais (`crop marks`), sem sombras difusas ou cantos arredondados genéricos de SaaS.
- **Paleta Offset**:
  - `Papel` (`#FAF7F0`): fundo acolhedor de papel offset natural.
  - `Tinta` (`#171512`): preto quente e profundo para texto, contornos e marcas.
  - `Marigold` (`#F2A900`): *spot color* exclusiva para CTAs, preços e destaques.
  - `Ciano & Magenta de Registro`: acentos pontuais em detalhes e miras CMYK.
  - `Cinza-chumbo` (`#6B665F`): dados técnicos e legendas.
- **Tipografia**:
  - **Display / Títulos**: *Space Grotesk* (700/800)
  - **Corpo / Interface**: *Inter*
  - **Dados & Specs**: *JetBrains Mono* (estritamente para dados reais de produção: `88x48mm · Couché 300g`)

---

## 🚀 Funcionalidades

- **Vitrine de Alta Rotatividade**: Cartões de visita, adesivos vinil recortados e folhetos.
- **Catálogo de Mesa de Corte**: Filtros por categoria, busca em tempo real e specs técnicas tabulares.
- **Configurador Técnico de Produto**: Seleção de papéis, acabamentos e tiragens com desconto progressivo e cálculo dinâmico de valor.
- **Carrinho Lateral (Slide-over)**: Resumo da ordem, cálculo de frete (balcão, express, SEDEX), cupom de desconto (`PRIMEIRA10`) e checkout demonstrativo.
- **Bento Grid Técnico & Manifesto**: Composição de acabamentos especiais, ateliê de produção e métricas de controle ISO 12647-2.

---

## 🛠️ Tecnologias

- **React 19** + **Vite 6**
- **Vanilla CSS** com Design Tokens e Escala Modular no `:root`
- **Lucide React** para iconografia técnica

---

## 📦 Como Rodar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/Jeferson-Bureau/Jetaprint_Web.git
cd Jetaprint_Web
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
`http://localhost:5173/`

5. Para gerar o build de produção:
```bash
npm run build
```
