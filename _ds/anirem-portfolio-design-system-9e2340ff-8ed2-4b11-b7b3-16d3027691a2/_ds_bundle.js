/* @ds-bundle: {"format":3,"namespace":"AniremPortfolioDesignSystem_9e2340","components":[{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Meta","sourcePath":"components/core/Meta.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CaseSection","sourcePath":"components/layout/CaseSection.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"Nav","sourcePath":"components/layout/Nav.jsx"},{"name":"WorkItem","sourcePath":"components/work/WorkItem.jsx"}],"sourceHashes":{"components/core/ArrowLink.jsx":"c9b99318b129","components/core/Meta.jsx":"7d8dadd5a17b","components/core/Tag.jsx":"163112ee7edc","components/layout/CaseSection.jsx":"17a04e5815e5","components/layout/Footer.jsx":"0a95a621f284","components/layout/Nav.jsx":"21089b7971d4","components/work/WorkItem.jsx":"8da6ccdcfbec","ui_kits/portfolio/App.jsx":"c2084702cbe0","ui_kits/portfolio/CasePage.jsx":"6505e09b4ecc","ui_kits/portfolio/HomePage.jsx":"7f3187ae13b6","ui_kits/portfolio/data.jsx":"31f6a3e3cb98"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AniremPortfolioDesignSystem_9e2340 = window.AniremPortfolioDesignSystem_9e2340 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ArrowLink — link / CTA sem botão pesado. Texto com seta.
 * No hover, o sublinhado desliza da esquerda e a cor vai para --accent.
 */
function ArrowLink({
  children,
  href = "#",
  arrow = true,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, rest, {
    onMouseEnter: e => {
      setHover(true);
      rest.onMouseEnter?.(e);
    },
    onMouseLeave: e => {
      setHover(false);
      rest.onMouseLeave?.(e);
    },
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45em",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "var(--text-body-size)",
      color: hover ? "var(--accent)" : "var(--ink)",
      textDecoration: "none",
      transition: "color var(--dur) var(--ease)",
      ...rest.style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      bottom: "-3px",
      width: "100%",
      height: "1px",
      background: "var(--accent)",
      transform: hover ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform var(--dur) var(--ease)"
    }
  })), arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transform: hover ? "translateX(3px)" : "translateX(0)",
      transition: "transform var(--dur) var(--ease)"
    }
  }, "\u2192"));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Meta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Meta — linha de metadado em mono. O sabor de prancha técnica.
 * Aceita itens separados automaticamente por meio-ponto (·), o único
 * separador permitido fora de links.
 */
function Meta({
  items,
  children,
  ...rest
}) {
  const content = items ? items.filter(Boolean).join("  ·  ") : children;
  return /*#__PURE__*/React.createElement("p", _extends({}, rest, {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: "var(--text-meta-size)",
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color: "var(--graphite)",
      margin: 0,
      ...rest.style
    }
  }), content);
}
Object.assign(__ds_scope, { Meta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Meta.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — etiqueta de disciplina. Mono, caixa-alta, pequena.
 * Valores típicos: MARCA, EMBALAGEM, WEB, SOCIAL, EXPERIMENTAL.
 */
function Tag({
  children,
  as = "span",
  ...rest
}) {
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({}, rest, {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: "var(--text-meta-size)",
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color: "var(--ink)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius)",
      padding: "5px 10px",
      lineHeight: 1,
      ...rest.style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/layout/CaseSection.jsx
try { (() => {
/**
 * CaseSection — seção de case. Rótulo da seção em mono (CONTEXTO, CONCEITO,
 * O SISTEMA, APLICAÇÕES, FECHO), imagem dominante e texto curto.
 * A imagem é sempre maior que o texto.
 */
function CaseSection({
  label,
  children,
  image,
  imageAlt = "",
  ratio = "16 / 9"
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter)"
    }
  }, label && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: "var(--text-meta-size)",
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color: "var(--graphite)",
      margin: "0 0 var(--space-6)"
    }
  }, label), children && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "620px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--lh-body)",
      color: "var(--ink)",
      marginBottom: image ? "var(--space-12)" : 0
    }
  }, children), image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      overflow: "hidden",
      borderRadius: "var(--radius)",
      border: "1px solid var(--line)",
      background: "var(--accent-soft)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })));
}
Object.assign(__ds_scope, { CaseSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CaseSection.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
/**
 * Footer — e-mail grande, links em mono separados por ·, "voltar ao topo".
 */
function Footer({
  email = "oi@anirem.com",
  links = [{
    label: "Instagram",
    href: "#"
  }, {
    label: "Behance",
    href: "#"
  }, {
    label: "LinkedIn",
    href: "#"
  }]
}) {
  return /*#__PURE__*/React.createElement("footer", {
    id: "contact",
    style: {
      borderTop: "1px solid var(--line)",
      background: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      display: "inline-block",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2rem, 5vw, 3.4rem)",
      letterSpacing: "-0.02em",
      color: "var(--ink)",
      lineHeight: 1.05
    }
  }, email), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("li", {
    key: l.href,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-meta-size)",
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color: "var(--graphite)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    style: {
      color: "var(--graphite)"
    }
  }, l.label), i < links.length - 1 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7")))), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: "#top",
    arrow: false
  }, "Voltar ao topo \u2191"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/Nav.jsx
try { (() => {
/**
 * Nav (sticky) — nome à esquerda, âncoras à direita. Fundo --paper.
 * A divisória --line só aparece ao rolar. Discreta e fina.
 */
function Nav({
  name = "Anirem Camenar May",
  links = [{
    label: "Work",
    href: "#work"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Contact",
    href: "#contact"
  }]
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--paper)",
      borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
      transition: "border-color var(--dur) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "var(--space-4) var(--gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.0625rem",
      color: "var(--ink)",
      letterSpacing: "-0.01em"
    }
  }, name), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement(NavLink, l))))));
}
function NavLink({
  label,
  href
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-meta-size)",
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color: hover ? "var(--accent)" : "var(--graphite)",
      transition: "color var(--dur) var(--ease)"
    }
  }, label);
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Nav.jsx", error: String((e && e.message) || e) }); }

// components/work/WorkItem.jsx
try { (() => {
/**
 * WorkItem — o herói da página. Miniatura grande (~3:2 ou 4:3) em container
 * com overflow:hidden, linha de metadado em mono, título em display, uma linha
 * de descrição em corpo, e o link "Ver case". Muito espaço vertical entre projetos.
 */
function WorkItem({
  title,
  description,
  meta = [],
  image,
  href = "#",
  ratio = "3 / 2",
  cta = "Ver case"
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": title,
    style: {
      display: "block",
      aspectRatio: ratio,
      overflow: "hidden",
      borderRadius: "var(--radius)",
      border: "1px solid var(--line)",
      background: "var(--accent-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      background: image ? `var(--img-overlay), url("${image}") center / cover no-repeat` : "repeating-linear-gradient(45deg, #ECECE6 0 14px, #F6F6F2 14px 28px)",
      transform: hover ? "scale(1.03)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      maxWidth: "560px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Meta, {
    items: meta
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--text-h3)",
      color: "var(--ink)",
      margin: "10px 0 8px",
      letterSpacing: "-0.005em"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      lineHeight: "var(--lh-body)",
      color: "var(--graphite)",
      margin: "0 0 16px"
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: href
  }, cta)));
}
Object.assign(__ds_scope, { WorkItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/work/WorkItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
/* global React */
function App() {
  const [route, setRoute] = React.useState({
    name: "home",
    id: null
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);
  const open = id => setRoute({
    name: "case",
    id
  });
  const home = () => setRoute({
    name: "home",
    id: null
  });
  if (route.name === "case") {
    return /*#__PURE__*/React.createElement(window.CasePage, {
      id: route.id,
      onBack: home,
      onOpen: open
    });
  }
  return /*#__PURE__*/React.createElement(window.HomePage, {
    onOpen: open
  });
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CasePage.jsx
try { (() => {
/* global React */
function CasePage({
  id,
  onBack,
  onOpen
}) {
  const projects = window.PROJECTS;
  const idx = projects.findIndex(p => p.id === id);
  const project = projects[idx] || projects[0];
  const next = projects[(idx + 1) % projects.length];
  const label = {
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    fontSize: "var(--text-meta-size)",
    letterSpacing: "var(--tracking-meta)",
    textTransform: "uppercase",
    color: "var(--graphite)",
    margin: "0 0 14px"
  };
  const body = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-body-size)",
    lineHeight: 1.65,
    color: "var(--ink)",
    margin: 0,
    maxWidth: "58ch"
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "top",
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Voltar",
    style: {
      border: "none",
      background: "none",
      padding: 0,
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-meta-size)",
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color: "var(--ink)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, "\u2190 Voltar"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:oi@anirem.com",
    "aria-label": "E-mail",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-meta-size)",
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color: "var(--graphite)"
    }
  }, "oi@anirem.com")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px, 8vw, 88px) 0 clamp(32px, 5vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginBottom: 22,
      flexWrap: "wrap"
    }
  }, project.meta.map(m => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color: "var(--ink)",
      border: "1px solid var(--line)",
      borderRadius: 999,
      padding: "4px 10px",
      lineHeight: 1
    }
  }, m))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.4rem, 7vw, 3.6rem)",
      lineHeight: 1.04,
      letterSpacing: "-0.03em",
      color: "var(--ink)",
      margin: 0,
      maxWidth: "16ch"
    }
  }, project.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      fontSize: "1.25rem",
      color: "var(--graphite)",
      marginTop: 22
    }
  }, project.description)), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      borderRadius: 16,
      overflow: "hidden",
      background: project.color
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px, 9vw, 96px) 0 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: label
  }, "Contexto"), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "A marca precisava funcionar em contextos muito diferentes, do suporte pintado \xE0 m\xE3o \xE0 etiqueta impressa em uma cor. O ponto de partida foi entender o que permanece constante quando tudo muda de suporte.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px, 7vw, 72px) 0 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: label
  }, "Conceito"), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "Reduzi tudo a uma l\xF3gica simples: uma malha, um peso de tra\xE7o, um \xFAnico gesto. O sistema cuida do resto.")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      borderRadius: 16,
      overflow: "hidden",
      background: project.color,
      marginTop: "clamp(32px, 5vw, 48px)",
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px, 7vw, 72px) 0 0"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: label
  }, "O sistema"), /*#__PURE__*/React.createElement("p", {
    style: body
  }, "Defini m\xF3dulos que se recombinam sem perder a unidade. Tipografia, espa\xE7o e um gesto recorrente carregam a identidade. Cor entra com parcim\xF4nia.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(64px, 9vw, 110px) 0",
      marginTop: "clamp(48px, 7vw, 72px)",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: label
  }, "Pr\xF3ximo projeto"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(next.id),
    style: {
      border: "none",
      background: "none",
      padding: 0,
      cursor: "pointer",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 12,
      background: next.color,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
      color: "var(--ink)",
      letterSpacing: "-0.01em"
    }
  }, next.title, " \u2192"))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink)",
      color: "var(--paper)",
      margin: "0 -24px",
      padding: "28px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      margin: 0,
      color: "#C7C7C2"
    }
  }, "\xA9 2026 \xB7 feito com cuidado, em S\xE3o Paulo"), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--paper)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-meta-size)",
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase"
    }
  }, "Voltar ao trabalho \u2191")));
}
window.CasePage = CasePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CasePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomePage.jsx
try { (() => {
/* global React */
const {
  Tag
} = window.AniremPortfolioDesignSystem_9e2340;
function KitHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Anirem",
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--ink)",
      color: "var(--paper)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "-0.02em"
    }
  }, "a."), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    style: {
      border: "none",
      background: "none",
      padding: 8,
      cursor: "pointer",
      display: "grid",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 26,
      height: 2,
      background: "var(--ink)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 26,
      height: 2,
      background: "var(--ink)"
    }
  })));
}
function StatusPill({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color: "var(--graphite)",
      border: "1px solid var(--line)",
      borderRadius: 999,
      padding: "4px 10px",
      lineHeight: 1
    }
  }, children, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 10
    }
  }, "\u2197"));
}
function MetaLine({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-meta-size)",
      letterSpacing: "var(--tracking-meta)",
      textTransform: "uppercase",
      color: "var(--ink)"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it
  }, /*#__PURE__*/React.createElement("span", null, it), i < items.length - 1 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--graphite)"
    }
  }, "\xB7"))));
}
function WorkCard({
  project,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    style: {
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onOpen(project.id),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": project.title,
    style: {
      display: "block",
      width: "100%",
      padding: 0,
      border: "none",
      cursor: "pointer",
      aspectRatio: "16 / 10",
      borderRadius: 16,
      overflow: "hidden",
      background: project.color
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      transform: hover ? "scale(1.03)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease)",
      background: "radial-gradient(120% 90% at 100% 100%, rgba(255,255,255,.16), transparent 60%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 22,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.5rem",
      color: "var(--ink)",
      margin: 0,
      letterSpacing: "-0.01em"
    }
  }, project.title), /*#__PURE__*/React.createElement(StatusPill, null, project.status)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      lineHeight: 1.55,
      color: "var(--graphite)",
      margin: "10px 0 16px",
      maxWidth: "58ch"
    }
  }, project.description), /*#__PURE__*/React.createElement(MetaLine, {
    items: project.meta
  }));
}
function HomePage({
  onOpen
}) {
  const projects = window.PROJECTS;
  return /*#__PURE__*/React.createElement("div", {
    id: "top",
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement(KitHeader, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px, 10vw, 110px) 0 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.6rem, 9vw, 4.4rem)",
      lineHeight: 1.02,
      letterSpacing: "-0.03em",
      color: "var(--ink)",
      textShadow: "0 0 18px rgba(22,22,26,.30), 0 0 2px rgba(22,22,26,.45)"
    }
  }, "Oi, eu sou a Anirem"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "clamp(2.6rem, 9vw, 4.4rem)",
      lineHeight: 1.04,
      letterSpacing: "-0.03em",
      color: "var(--graphite)",
      marginTop: 6
    }
  }, "desenho marcas como sistemas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      marginTop: "clamp(40px, 7vw, 72px)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.0625rem",
      color: "var(--ink)",
      margin: "0 0 4px"
    }
  }, "Hoje"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "1.0625rem",
      color: "var(--graphite)",
      margin: 0
    }
  }, "Dire\xE7\xE3o de arte, est\xFAdio pr\xF3prio")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.0625rem",
      color: "var(--ink)",
      margin: "0 0 4px"
    }
  }, "Antes"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "1.0625rem",
      color: "var(--graphite)",
      margin: 0
    }
  }, "Embalagem, editorial, web")))), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: "none",
      borderTop: "1px solid var(--line)",
      margin: "clamp(40px, 6vw, 64px) 0"
    }
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: "50%",
      overflow: "hidden",
      border: "1px solid var(--line)",
      background: "repeating-linear-gradient(45deg, #E7E7E1 0 8px, #F4F4EF 8px 16px)"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.25rem",
      color: "var(--ink)",
      margin: "22px 0 8px"
    }
  }, "Prazer, \xE9 um gosto"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-size)",
      lineHeight: 1.6,
      color: "var(--graphite)",
      margin: "0 0 18px",
      maxWidth: "58ch"
    }
  }, "Trabalho com identidade, embalagem e web. Gosto de marcas que precisam de coer\xEAncia em qualquer formato, e de resolver isso com pouco. Desenho o sistema, n\xE3o o logo solto."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3Zm6.9-11.2a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5Z"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    label: "LinkedIn",
    href: "#",
    path: "M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.3 18.3H5.6V9.8h2.7v8.5ZM7 8.6a1.6 1.6 0 1 1 1.5-1.6A1.5 1.5 0 0 1 7 8.6Zm11.3 9.7h-2.7v-4.1c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.2H9.9V9.8h2.6v1.2a2.9 2.9 0 0 1 2.6-1.4c2.8 0 3.3 1.8 3.3 4.2Z"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    label: "E-mail",
    href: "mailto:oi@anirem.com",
    path: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2 8-5.2H4l8 5.2ZM4 8.3V17h16V8.3l-8 5.2-8-5.2Z"
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      paddingTop: "clamp(56px, 9vw, 96px)"
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(WorkCard, {
    key: p.id,
    project: p,
    onOpen: onOpen
  }))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink)",
      color: "var(--paper)",
      borderRadius: 0,
      margin: "0 -24px",
      padding: "28px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      margin: 0,
      color: "#C7C7C2"
    }
  }, "\xA9 2026 \xB7 feito com cuidado, em S\xE3o Paulo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    label: "Instagram",
    href: "#",
    light: true,
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4Zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3Zm6.9-11.2a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5Z"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    label: "LinkedIn",
    href: "#",
    light: true,
    path: "M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6ZM8.3 18.3H5.6V9.8h2.7v8.5ZM7 8.6a1.6 1.6 0 1 1 1.5-1.6A1.5 1.5 0 0 1 7 8.6Zm11.3 9.7h-2.7v-4.1c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.2H9.9V9.8h2.6v1.2a2.9 2.9 0 0 1 2.6-1.4c2.8 0 3.3 1.8 3.3 4.2Z"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    label: "E-mail",
    href: "mailto:oi@anirem.com",
    light: true,
    path: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2 8-5.2H4l8 5.2ZM4 8.3V17h16V8.3l-8 5.2-8-5.2Z"
  }))));
}
function SocialIcon({
  label,
  href,
  path,
  light
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": label,
    style: {
      color: light ? "var(--paper)" : "var(--ink)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: path
  })));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.jsx
try { (() => {
/* global React */
// Catálogo do portfólio. Sem imagens reais entregues, cada bloco usa um bloco
// de cor sólida como placeholder (substitua `image` por arquivos reais).
const PROJECTS = [{
  id: "maritima",
  title: "Identidade Marítima",
  description: "Sistema de marca para uma cooperativa de pesca artesanal. Identidade, embalagem de conserva e sinalização que funcionam pintadas à mão.",
  status: "Entregue",
  color: "#C9B6F5",
  meta: ["Cooperativa", "2024"]
}, {
  id: "horta",
  title: "Horta Comum",
  description: "Marca e sinalização para uma rede de hortas urbanas comunitárias. Um sistema modular que cresce junto com os canteiros.",
  status: "Entregue",
  color: "#38491F",
  meta: ["Coletivo", "2024"]
}, {
  id: "prensa",
  title: "Editora Prensa",
  description: "Identidade e sistema de capas para uma editora independente de poesia. Cada coleção ganha uma variação dentro da mesma malha.",
  status: "Entregue",
  color: "#E0A60D",
  meta: ["Prensa", "2023"]
}, {
  id: "campo",
  title: "Campo Tipográfico",
  description: "Experimento de composição modular gerada por sistema de grid. Tipografia como matéria, sem nenhuma imagem.",
  status: "Experimental",
  color: "#2E3BD6",
  meta: ["Pessoal", "2023"]
}];
window.PROJECTS = PROJECTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Meta = __ds_scope.Meta;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CaseSection = __ds_scope.CaseSection;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.WorkItem = __ds_scope.WorkItem;

})();
