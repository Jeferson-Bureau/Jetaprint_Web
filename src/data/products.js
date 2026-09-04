import heroCardsImg from '../assets/hero_cards.jpg';
import stickersImg from '../assets/prod_stickers.jpg';
import brochuresImg from '../assets/prod_brochures.jpg';
import kraftBagImg from '../assets/prod_kraft_bag.jpg';
import stationeryImg from '../assets/prod_stationery.jpg';
import bentoFinishImg from '../assets/bento_finish.jpg';

export const CATEGORIES = [
  { id: 'todos', label: 'Todos os Impressos' },
  { id: 'cartoes', label: 'Cartões de Visita' },
  { id: 'adesivos', label: 'Adesivos & Rótulos' },
  { id: 'folhetos', label: 'Folhetos & Folders' },
  { id: 'embalagens', label: 'Embalagens & Sacolas' },
  { id: 'papelaria', label: 'Papelaria & Cadernos' }
];

export const PRODUCTS = [
  {
    id: 'cartao-soft-touch',
    name: 'Cartão de Visita Soft-Touch & Hot Stamping',
    category: 'cartoes',
    categoryLabel: 'Cartões de Visita',
    image: heroCardsImg,
    badge: 'Mais Vendido',
    specsSummary: '88x48mm · Couché 300g · 4x4 Cores',
    price: 48.90,
    priceUnit: '/500un',
    productionTime: '24h a 48h úteis',
    description: 'Cartão de visita com toque aveludado e detalhes que reluzem na luz. Impressão offset calibrada com tolerância zero para desvios.',
    options: {
      papers: [
        { id: 'couche-300', name: 'Couché Fosco 300g', priceFactor: 1.0 },
        { id: 'offset-240', name: 'Offset Texturizado 240g', priceFactor: 1.15 },
        { id: 'kraft-300', name: 'Kraft Artesanal 300g', priceFactor: 1.10 },
        { id: 'fedrigoni-350', name: 'Fedrigoni Cotton 350g', priceFactor: 1.45 }
      ],
      finishes: [
        { id: 'soft-touch-hot', name: 'Laminação Soft Touch + Hot Stamping Ouro', addCost: 35.00 },
        { id: 'verniz-local', name: 'Verniz Localizado UV Alto Brilho', addCost: 25.00 },
        { id: 'fosco-padrao', name: 'Laminação Fosca Frente e Verso', addCost: 15.00 },
        { id: 'sem-verniz', name: 'Sem Verniz (Refile Reto Clássico)', addCost: 0.00 }
      ],
      quantities: [
        { qty: 100, multiplier: 0.55 },
        { qty: 250, multiplier: 0.78 },
        { qty: 500, multiplier: 1.0 },
        { qty: 1000, multiplier: 1.7 },
        { qty: 2500, multiplier: 3.6 }
      ]
    }
  },
  {
    id: 'adesivos-recorte',
    name: 'Adesivos Vinil com Recorte Especial',
    category: 'adesivos',
    categoryLabel: 'Adesivos & Rótulos',
    image: stickersImg,
    badge: 'À Prova D\'Água',
    specsSummary: 'Recorte Eletrônico · Vinil Fosco · 100% Lavável',
    price: 38.50,
    priceUnit: '/100un',
    productionTime: '24h úteis',
    description: 'Adesivos em vinil de alta durabilidade com corte no contorno exato do seu logotipo ou ilustração. Não desbota nem descasca.',
    options: {
      papers: [
        { id: 'vinil-fosco', name: 'Vinil Fosco 120g', priceFactor: 1.0 },
        { id: 'vinil-brilho', name: 'Vinil Brilho Alto Impacto', priceFactor: 1.05 },
        { id: 'bopp-transparente', name: 'BOPP Transparente', priceFactor: 1.25 },
        { id: 'holografico', name: 'Vinil Holográfico Prisma', priceFactor: 1.50 }
      ],
      finishes: [
        { id: 'corte-individual', name: 'Corte Individual (Die-cut)', addCost: 15.00 },
        { id: 'meio-corte-cartela', name: 'Meio Corte em Cartelas A4', addCost: 0.00 },
        { id: 'mascara-transfer', name: 'Com Máscara de Aplicação', addCost: 22.00 }
      ],
      quantities: [
        { qty: 50, multiplier: 0.65 },
        { qty: 100, multiplier: 1.0 },
        { qty: 300, multiplier: 2.2 },
        { qty: 500, multiplier: 3.2 },
        { qty: 1000, multiplier: 5.5 }
      ]
    }
  },
  {
    id: 'folder-institucional',
    name: 'Folder Institucional com 3 Dobras',
    category: 'folhetos',
    categoryLabel: 'Folhetos & Folders',
    image: brochuresImg,
    badge: 'Produção Expressa',
    specsSummary: 'A4 Aberto / A5 Fechado · Couché 150g · Dobra Sanfona',
    price: 139.00,
    priceUnit: '/1.000un',
    productionTime: '48h úteis',
    description: 'Material de apresentação de marcas e serviços corporativos. Dobra milimétrica mecanizada sem estourar a fibra do papel.',
    options: {
      papers: [
        { id: 'couche-150', name: 'Couché Fosco 150g', priceFactor: 1.0 },
        { id: 'couche-115', name: 'Couché Brilho 115g (Econômico)', priceFactor: 0.88 },
        { id: 'couche-250', name: 'Couché Pesado 250g', priceFactor: 1.40 },
        { id: 'reciclato-150', name: 'Reciclato 100% Ecológico 150g', priceFactor: 1.20 }
      ],
      finishes: [
        { id: 'dobra-sanfona', name: 'Dobra Sanfona Mecânica (2 Vincos)', addCost: 0.00 },
        { id: 'dobra-envolvente', name: 'Dobra Envolvente / Carteira', addCost: 0.00 },
        { id: 'laminacao-fosca', name: 'Laminação Fosca Frente e Verso', addCost: 45.00 }
      ],
      quantities: [
        { qty: 250, multiplier: 0.48 },
        { qty: 500, multiplier: 0.72 },
        { qty: 1000, multiplier: 1.0 },
        { qty: 2500, multiplier: 2.1 },
        { qty: 5000, multiplier: 3.8 }
      ]
    }
  },
  {
    id: 'sacola-kraft-sustentavel',
    name: 'Sacola Kraft Personalizada com Alça Cordão',
    category: 'embalagens',
    categoryLabel: 'Embalagens & Sacolas',
    image: kraftBagImg,
    badge: 'Sustentável FSC',
    specsSummary: '24x32x10cm · Kraft 140g · Alça Algodão Preto',
    price: 185.00,
    priceUnit: '/100un',
    productionTime: '3 a 5 dias úteis',
    description: 'Sacola reforçada de papel kraft certificado, perfeita para lojas de moda, presentes e eventos que valorizam estética orgânica e responsável.',
    options: {
      papers: [
        { id: 'kraft-natural-140', name: 'Kraft Pardo 140g', priceFactor: 1.0 },
        { id: 'kraft-branco-150', name: 'Kraft Branco 150g', priceFactor: 1.25 },
        { id: 'duplex-250', name: 'Cartão Duplex 250g Extra Rígido', priceFactor: 1.55 }
      ],
      finishes: [
        { id: 'cordao-algodao', name: 'Alça de Cordão de Algodão Preto', addCost: 0.00 },
        { id: 'fita-gorgurao', name: 'Alça Fita Gorgurão Luxo', addCost: 30.00 },
        { id: 'impressao-ouro', name: 'Hot Stamping Ouro 1 Lado', addCost: 55.00 }
      ],
      quantities: [
        { qty: 50, multiplier: 0.62 },
        { qty: 100, multiplier: 1.0 },
        { qty: 250, multiplier: 2.1 },
        { qty: 500, multiplier: 3.8 },
        { qty: 1000, multiplier: 6.9 }
      ]
    }
  },
  {
    id: 'caderno-wireo-corporativo',
    name: 'Caderno Executivo Wire-o com Capa Dura',
    category: 'papelaria',
    categoryLabel: 'Papelaria & Cadernos',
    image: stationeryImg,
    badge: 'Brinde VIP',
    specsSummary: '14x20cm · 80 Fls Pautadas · Miolo Pólen 80g',
    price: 32.90,
    priceUnit: '/un (mín. 20)',
    productionTime: '4 dias úteis',
    description: 'Caderno corporativo com acabamento de ateliê. Papel pólen amarelado que não cansa a vista e capa dura com toque aveludado.',
    options: {
      papers: [
        { id: 'polen-80', name: 'Pólen Soft 80g (Leve Amarelado)', priceFactor: 1.0 },
        { id: 'offset-90', name: 'Offset Branco Alvura 90g', priceFactor: 0.95 },
        { id: 'reciclato-90', name: 'Papel Reciclato 90g', priceFactor: 1.05 }
      ],
      finishes: [
        { id: 'capa-soft-touch', name: 'Capa Dura Soft-Touch + Verniz Local', addCost: 0.00 },
        { id: 'hotstamping-capa', name: 'Gravação Hot Stamping Metálico', addCost: 12.00 },
        { id: 'com-elastico', name: 'Fechamento com Elástico Colorido', addCost: 6.00 }
      ],
      quantities: [
        { qty: 20, multiplier: 1.0 },
        { qty: 50, multiplier: 2.3 },
        { qty: 100, multiplier: 4.2 },
        { qty: 250, multiplier: 9.8 }
      ]
    }
  },
  {
    id: 'tag-luxury-stamping',
    name: 'Tags & Cartões Postais com Borda Dourada',
    category: 'cartoes',
    categoryLabel: 'Cartões de Visita',
    image: bentoFinishImg,
    badge: 'Edição Especial',
    specsSummary: '10x15cm · Triplex 350g · Borda Pintada Ouro',
    price: 65.00,
    priceUnit: '/250un',
    productionTime: '48h úteis',
    description: 'Tags de alta gramatura com acabamento de joalheria. As bordas recebem laminação dourada chanfrada com relevo seco.',
    options: {
      papers: [
        { id: 'triplex-350', name: 'Cartão Triplex 350g', priceFactor: 1.0 },
        { id: 'algodao-450', name: 'Algodão Puro 450g Extra Grosso', priceFactor: 1.6 },
        { id: 'semente-200', name: 'Papel Semente Germinável', priceFactor: 1.35 }
      ],
      finishes: [
        { id: 'borda-ouro', name: 'Borda Pintada Ouro Metálico', addCost: 28.00 },
        { id: 'furo-etiqueta', name: 'Furo 4mm com Ilhós Metálico', addCost: 14.00 },
        { id: 'relevo-seco', name: 'Relevo Seco Deboss / Alto Relevo', addCost: 32.00 }
      ],
      quantities: [
        { qty: 100, multiplier: 0.58 },
        { qty: 250, multiplier: 1.0 },
        { qty: 500, multiplier: 1.8 },
        { qty: 1000, multiplier: 3.2 }
      ]
    }
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Guilherme Siqueira',
    role: 'Diretor de Criação · Estúdio Forma',
    quote: 'Em 12 anos no mercado publicitário, nunca vi uma gráfica online manter uma tolerância de cor tão perfeita. O Hot Stamping encaixou no registro milimétrico.',
    tag: 'Fidelidade de Cor 99.8%',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Carolina Bittencourt',
    role: 'Head de Branding · Viela Cosméticos',
    quote: 'Nossas sacolas e rótulos de vinil chegaram em 48 horas impecavelmente cortados. A textura aveludada do acabamento impressionou nossa diretoria.',
    tag: 'Entrega 24h/48h',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  }
];

export const PARTNERS = [
  { name: 'Heidelberg Offset', note: 'Maquinário Speedmaster' },
  { name: 'Pantone® Certified', note: 'Controle Espectrofotômetro' },
  { name: 'Fedrigoni Papers', note: 'Papéis Especiais Italianos' },
  { name: 'FSC® Forest Stewardship', note: 'Manejo Florestal Responsável' },
  { name: 'HP Indigo Digital', note: 'Impressão Líquida EletroInk' }
];
