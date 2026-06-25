# Anirem Portfolio — Design System

Sistema de design do portfólio de **Anirem Camenar May**, diretora de arte e designer de marca. Minimalismo quente com personalidade vinda da arquitetura: a ideia é "design como sistema", uma lógica visual coerente em qualquer formato. Na prática, muito espaço em branco, tipografia forte, quase nenhuma cor, e a obra em primeiro plano. Toda a personalidade vive na tipografia de display e na fonte mono dos metadados. O resto fica quieto.

> Fugir de cara de template: nada de fundo creme com serifada de alto contraste e acento terracota; nada de fundo preto com verde-ácido; nada de colunas tipo jornal com fios por toda parte.

## Origem

- Fonte única de verdade: `uploads/DESIGN.md` (especificação original, em português). Toda decisão de cor, tipo, espaçamento e voz sai dela.
- Não há codebase nem Figma anexados. Um produto: o **site de portfólio**.
- As fontes são todas do Google Fonts (ver "Substituições" abaixo).

## Conteúdo / fundamentos de copy

- **Primeira pessoa**, tom de conversa, calma e confiante. Apresenta, não vende. Ex: "Desenho marcas como sistemas, não como logos soltos."
- **Sentence case** em todos os textos. Frases curtas.
- **Nunca usar travessões** (— ou –) em nenhum texto. Usar vírgula, ponto ou reescrever a frase.
- Separador permitido só em metadados e links: meio-ponto `·` (ex: `MARCA · 2024`).
- **Sem voz de marketing.** Proibido: "transforme sua marca", "comece agora", "soluções", "impulsione resultados".
- **Sem emoji.** Sem numeração de projetos (01 / 02 / 03) — a leitura do range vem do metadado mono.
- Idioma: português (pt-BR).

## Fundamentos visuais

- **Cor:** quase monocromático e quente. Fundo `--paper #FCFCFA` (branco-papel, não creme), texto `--ink #16161A`, secundário `--graphite #6F6F77`, fios `--line #E6E6E1`. O azul-blueprint `--accent #2E4A7E` **só aparece em interação** (link, hover, foco), nunca como decoração. Acento alternativo mais quente: vinho `--accent-wine #6E2B3E` (troca-se só um token).
- **Tipo:** Display = Bricolage Grotesque (600/700), grande e com folga. Corpo = Inter (400/500), workhorse silencioso. Mono = JetBrains Mono (500), caixa-alta, `letter-spacing: .08em` — o sabor de prancha técnica. Alternativa de corpo mais quente: Hanken Grotesk.
- **Espaçamento:** escala base 4px (4 → 128). Conteúdo máx. 1120px centralizado, margens `clamp(24px,5vw,64px)`, padding de seção `clamp(80px,12vw,140px)`. Grid de 12 colunas no desktop, 1 no mobile. O respiro é o que dá o ar do site, ser generoso.
- **Fundos:** sempre `--paper` liso. Sem gradientes decorativos, sem texturas, sem imagens de fundo full-bleed. A imagem que aparece é sempre obra (miniatura de projeto), nunca enfeite.
- **Cards / miniaturas:** container com `overflow:hidden`, raio `--radius: 8px` (pode ir a `0` para um ar mais arquitetônico), borda fina `--line`. Sem sombra — a hierarquia vem de espaço e tipografia, não de elevação. Não há sistema de sombra.
- **Bordas:** fios `--line` finos e raros. A divisória da nav só aparece ao rolar.
- **Imagem:** tom neutro/quente, sem saturação extra. Proporção de miniatura ~3:2 ou 4:3. Em case, a imagem é sempre maior que o texto.
- **Transparência / blur:** não faz parte do sistema. Nada de vidro fosco.
- **Animação:** sutil, sempre respeitar `prefers-reduced-motion`. Reveal no scroll (sobe 16px + fade, leve stagger). Hover na miniatura: zoom suave `scale(1.03)` dentro do container, o card quase não mexe. Link: sublinhado desliza da esquerda. Easing `cubic-bezier(.22,.61,.36,1)`. Nada de parallax pesado, nada piscando.
- **Hover:** cor vai para `--accent`; em superfícies, fundo `--accent-soft`. **Press:** sem encolher; a marca não tem botões pesados, então o feedback é de cor.
- **Foco:** anel visível na cor `--accent` (`outline: 2px; offset: 2px`).

## Iconografia

A marca **não usa biblioteca de ícones nem icon font**. O vocabulário gráfico é tipográfico:

- **Seta** `→` (e `←`, `↑`) em links e CTAs, como caractere de texto na fonte de corpo.
- **Meio-ponto** `·` como separador em metadados e listas de links.

Não há SVGs de ícone nem PNGs de ícone no sistema. Não usar emoji. Se um produto futuro precisar de ícones de interface (menu, fechar, etc.), usar um set de traço fino que combine com o blueprint — **Lucide** (traço ~1.75px) é a substituição recomendada, via CDN, e deve ser sinalizada como adição ao sistema. Por ora nenhum kit depende disso.

## Substituições e pendências

- **Fontes via Google Fonts (CDN), não como `@font-face` local.** `tokens/fonts.css` faz `@import` do Google Fonts. Por isso o compilador reporta "Fonts: none" (ele conta só `@font-face`). Funciona para consumidores online. **Pendência:** se você quiser os binários embarcados (offline / produção), envie os arquivos `.woff2` de Bricolage Grotesque, Inter e JetBrains Mono e eu escrevo as regras `@font-face`.
- **Sem assets de imagem reais.** Não foram entregues logos, fotos de projeto nem ilustrações. As miniaturas e capas dos kits usam um padrão de "prancha" (gradiente repetido) como placeholder honesto. **Pendência:** envie as imagens dos projetos e eu troco os placeholders.
- O wordmark é puramente tipográfico (nome em Bricolage Grotesque). Não há símbolo/logo desenhado.

## Índice do sistema

Raiz:
- `styles.css` — entrada global, só `@import`. É o único arquivo que um consumidor precisa linkar.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `guidelines/` — cards de especimen (Colors, Type, Spacing, Brand) que populam a aba Design System.
- `components/` — primitivos React da marca.
- `ui_kits/portfolio/` — recriação do site de portfólio (home + case), interativa.
- `SKILL.md` — manifesto para uso como Agent Skill.

Componentes (namespace `AniremPortfolioDesignSystem_9e2340`):
- `core/` — **Tag** (etiqueta de disciplina), **Meta** (linha de metadado mono), **ArrowLink** (link/CTA com seta e sublinhado deslizante).
- `work/` — **WorkItem** (bloco de projeto, o herói da página).
- `layout/` — **Nav** (sticky), **CaseSection** (rótulo + imagem dominante + texto), **Footer** (e-mail grande + links mono).

UI kits:
- `ui_kits/portfolio/` — `index.html` (app interativo), `HomePage.jsx`, `CasePage.jsx`, `App.jsx`, `data.jsx`.
