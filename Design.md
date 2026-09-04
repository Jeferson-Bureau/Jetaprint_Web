# Design.md — Sistema de Design

> Documento de referência visual para um e-commerce de gráfica online (impressos personalizados: cartões de visita, adesivos, folhetos, banners, brindes). Direção autoral, não uma cópia do GIV Online — usa o mesmo universo de mercado (produção gráfica no Brasil) como ponto de partida para escolhas específicas.

## Conceito

A ideia central: **o site parece uma mesa de produção gráfica**, não um painel de SaaS genérico. Isso aparece em três lugares: o vocabulário visual de pré-impressão (marcas de corte, registro CMYK, ficha técnica de papel), a tipografia de dados (specs de produto lidas como uma ficha técnica real de gráfica) e um tom de voz caloroso e direto, sem jargão corporativo.

Isso resolve o problema de "parecer só mais uma loja Shopify": em vez de cards com sombra e cantos arredondados iguais para tudo, os produtos ganham cantos com marca de corte — um recurso que existe de verdade em produção gráfica (corte e vinco), então tem justificativa, não é decoração gratuita.

## Cor

Paleta base (4–6 cores nomeadas):

| Nome | Hex | Uso |
|---|---|---|
| Papel | `#FAF7F0` | Fundo principal — não é branco puro, remete a papel offset |
| Tinta | `#171512` | Texto principal, contornos, marcas de corte — preto quente, não `#000` |
| Marigold | `#F2A900` | Cor de destaque única — CTAs, preços, estado ativo. Um "spot color" de verdade |
| Ciano-registro | `#00AEEF` | Acento secundário raro — só em detalhes de "registro CMYK" (marcas de canto, badges técnicos) |
| Magenta-registro | `#EC008C` | Par do ciano acima, mesmo uso — nunca os dois grandes na mesma tela |
| Cinza-chumbo | `#6B665F` | Texto secundário, legendas, specs |

Regra de uso: Marigold é a única cor "grande" (botões, preço, hover). Ciano e magenta aparecem em pontinhos — cruzes de registro, bordas finas, badges "Novo" — como referência a como uma prova de impressão real mostra as quatro cores de processo antes do corte final. Nunca os três acentos juntos em peso igual.

## Tipografia

Duas famílias, papéis bem distintos:

- **Display / títulos**: uma grotesca condensada e pesada (ex.: Archivo Black, Space Grotesk Bold ou equivalente) — usada grande, sem itálico, sem all-caps forçado. Carrega a personalidade "impresso, robusto".
- **Corpo**: uma sans neutra e legível em tamanho pequeno (ex.: Inter, Public Sans) para textos correntes.
- **Dados / specs**: uma monoespaçada (ex.: JetBrains Mono, IBM Plex Mono) reservada **só** para informação técnica real do produto — medidas (88x48mm), gramatura (250g), quantidade, preço unitário. Isso é justificado pelo conteúdo (specs são genuinamente tabulares), não um mono-label decorativo.

Escala sugerida (rem): 0.8125 / 0.9375 / 1 / 1.25 / 1.75 / 2.5 / 3.5 — títulos de página usam o topo da escala, texto corrido fica em 1 / 0.9375, specs em 0.8125 mono.

Linha de texto: manter parágrafos abaixo de ~75 caracteres de largura.

## Layout

Alinhamento: majoritariamente à esquerda — é um catálogo, a leitura precisa ser rápida e escaneável, não uma peça editorial centralizada.

Conceito de grid — "mesa de corte": cards de produto organizados em uma grade regular, cada card com pequenas marcas de corte (linhas em L) nos quatro cantos em vez de sombra + borda arredondada. O preço e a especificação técnica ficam sempre na mesma posição relativa (rodapé do card, specs em mono acima do preço em display).

```
┌ ⌐              ‾┐
│  [foto produto]  │
│  Nome do produto  │
│  88x48mm · 250g   │  ← specs em mono
│  R$ 43,99 /500un  │  ← preço em display, marigold
└ ⌐              ‾┘
```

Hero: não é um banner genérico com headline+CTA+gradiente. Abre com uma vitrine real de produtos em alta rotatividade (o que a categoria já faz bem: cartão, adesivo, folheto), com uma barra de destaque fina no topo para promoções (cupom, frete) — funcional, não decorativa.

Seções da home seguem um ritmo bloco-a-bloco (categoria → mais vendidos → institucional → prova social) com títulos de seção curtos e diretos, sem etiqueta "eyebrow" acima de cada um.

## Princípios

1. **Uma cor de destaque só.** Marigold carrega toda a urgência (preço, CTA); ciano/magenta são condimento, não prato principal.
2. **Specs são conteúdo, não decoração.** A tipografia mono só aparece onde há dado técnico real do produto — nunca como rótulo estético solto.
3. **Marca de corte em vez de sombra.** Nenhum card recebe `border-radius` + `box-shadow` padrão de SaaS; o enquadramento vem do vocabulário de pré-impressão.
4. **Tom de voz direto e caloroso**, verbos ativos, sem "Descubra", "Conheça" — fala como quem atende no balcão, não como um script de vendas.
5. **Movimento contido**: uma única transição orquestrada (ex.: as marcas de corte "fecham" no hover do card) em vez de fade-up em cada seção.

## Anti-padrões a evitar

- Fundo creme + accent terracota (`#D97757`) — clichê de IA generativa, não usar.
- Preto quase puro + verde neon único — outro clichê, evitar.
- Cards idênticos com o mesmo `border-radius` e a mesma sombra cinza suave em tudo.
- Eyebrow em caixa alta acima de cada título, separadores com "·", labels "PALAVRA — fragmento".
- Setas "→" coladas em todo texto de botão/link.
