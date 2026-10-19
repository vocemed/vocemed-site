/* @ds-bundle: {"format":4,"namespace":"VocemedDesignSystem_361ae9","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"WhatsAppButton","sourcePath":"components/actions/WhatsAppButton.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Wave","sourcePath":"components/brand/Wave.jsx"},{"name":"AudienceColumn","sourcePath":"components/content/AudienceColumn.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"LevelCard","sourcePath":"components/content/LevelCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"Step","sourcePath":"components/content/Step.jsx"},{"name":"ChatBubble","sourcePath":"components/conversation/ChatBubble.jsx"},{"name":"ConversationMockup","sourcePath":"components/conversation/ConversationMockup.jsx"},{"name":"ChipGroup","sourcePath":"components/forms/ChipGroup.jsx"},{"name":"ChoiceChip","sourcePath":"components/forms/ChoiceChip.jsx"},{"name":"ConsentCheckbox","sourcePath":"components/forms/ConsentCheckbox.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b30b13307923","components/actions/WhatsAppButton.jsx":"769ee6c4c65c","components/brand/Icon.jsx":"625d4dbf8ada","components/brand/Logo.jsx":"64e3ec660c37","components/brand/Wave.jsx":"11854a24c16c","components/content/AudienceColumn.jsx":"74dc4d4fff46","components/content/Badge.jsx":"5238e9c68021","components/content/Eyebrow.jsx":"709e2b2814aa","components/content/LevelCard.jsx":"7d5ef18e6585","components/content/Quote.jsx":"084bc5823433","components/content/StatCard.jsx":"84c06fb79622","components/content/Step.jsx":"9888fa77da71","components/conversation/ChatBubble.jsx":"a6785b8f9093","components/conversation/ConversationMockup.jsx":"c086c8756ac4","components/forms/ChipGroup.jsx":"4e65e50e3289","components/forms/ChoiceChip.jsx":"81108e53fd5f","components/forms/ConsentCheckbox.jsx":"c9d6925bf158","components/forms/TextField.jsx":"481c5522d99c","components/navigation/SiteFooter.jsx":"08ad2e45d121","components/navigation/SiteHeader.jsx":"3632d67bb027","guidelines/tailwind-theme.js":"666a028f282c","site/app.js":"955c057ad856","site/content.js":"c1bfae8ff45e","ui_kits/website/KitDemoForm.jsx":"87bbe7621112","ui_kits/website/KitLayout.jsx":"a7bfd2b0cc5e","ui_kits/website/KitSections-antes.jsx":"6c7286e8337a","ui_kits/website/KitSections.jsx":"ec2ebe6dd6c3","ui_kits/website/KitServices.jsx":"84b8aef45b8f","ui_kits/website/content.js":"85a87156ecfc","ui_kits/website/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[{"name":"vmAsset","sourcePath":"components/brand/Logo.jsx"}]} */

(() => {

const __ds_ns = (window.VocemedDesignSystem_361ae9 = window.VocemedDesignSystem_361ae9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const toPascal = n => n.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const L = typeof window !== 'undefined' ? window.lucide : null;
  let node = L && L.icons ? L.icons[toPascal(name)] || L.icons[name] : null;
  if (Array.isArray(node) && node[0] === 'svg') node = node[2];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": title ? undefined : 'true',
    role: title ? 'img' : undefined,
    style: {
      flexShrink: 0,
      display: 'block',
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, (node || []).map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  tone = 'light',
  size = 'md',
  icon,
  iconRight,
  href,
  fullWidth,
  children,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const iconSize = size === 'sm' ? 18 : 20;
  if (variant === 'link') {
    return /*#__PURE__*/React.createElement(Tag, _extends({
      href: href
    }, rest, {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        minHeight: 48,
        padding: 0,
        background: 'none',
        border: 0,
        cursor: 'pointer',
        font: '600 1rem/1.4 var(--vm-font-sans)',
        color: tone === 'dark' ? 'var(--vm-dawn-500)' : 'var(--vm-night-600)',
        textDecoration: 'underline',
        textUnderlineOffset: 3,
        ...style
      }
    }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: iconSize
    }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: iconRight,
      size: iconSize
    }) : null);
  }
  const cls = 'vm-btn vm-btn--' + variant + (tone === 'light' ? ' vm-on-light' : '');
  const s = {
    ...(size === 'sm' ? {
      padding: '0 18px',
      fontSize: 15
    } : {}),
    ...(variant === 'primary' ? {
      color: 'var(--vm-night-950)'
    } : {}),
    ...(variant === 'secondary' ? {
      color: tone === 'dark' ? '#FFFFFF' : 'var(--vm-night-900)'
    } : {}),
    ...(fullWidth ? {
      width: '100%'
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: cls,
    style: s
  }, Tag === 'button' && !rest.type ? {
    type: 'button'
  } : {}, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/WhatsAppButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_HREF = 'https://wa.me/5511946617173?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Vocemed%20e%20gostaria%20de%20saber%20mais.';
function WhatsAppButton({
  href = DEFAULT_HREF,
  floating = true,
  label = 'Fale conosco pelo WhatsApp',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": label,
    title: label
  }, rest, {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--vm-whatsapp)',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--vm-shadow-float)',
      ...(floating ? {
        position: 'fixed',
        right: 16,
        bottom: 16,
        zIndex: 50
      } : {}),
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 28,
    strokeWidth: 1.75
  }));
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function vmAsset(file, base) {
  let b = base;
  if (b == null && typeof window !== 'undefined' && window.VOCEMED_ASSETS) b = window.VOCEMED_ASSETS;
  if (b == null) b = 'assets';
  return String(b).replace(/\/$/, '') + '/' + file;
}
function Logo({
  variant = 'wordmark',
  tone = 'light',
  height,
  assetsPath,
  alt = 'Vocemed',
  style,
  ...rest
}) {
  const file = variant === 'mark' ? 'logo-mark.svg' : tone === 'dark' ? 'logo-wordmark-dark-bg.svg' : 'logo-wordmark-light-bg.svg';
  const h = height ?? (variant === 'mark' ? 32 : 28);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: vmAsset(file, assetsPath),
    alt: alt,
    style: {
      height: h,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { vmAsset, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wave.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Wave({
  height = 56,
  opacity = 1,
  assetsPath,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: __ds_scope.vmAsset('wave.svg', assetsPath),
    alt: "",
    "aria-hidden": "true",
    style: {
      height,
      width: 'auto',
      opacity,
      display: 'block',
      pointerEvents: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Wave });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wave.jsx", error: String((e && e.message) || e) }); }

// components/content/AudienceColumn.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AudienceColumn({
  title,
  items = [],
  cta,
  onCta,
  ctaHref,
  featured,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 32,
      borderRadius: 'var(--vm-radius-lg)',
      background: featured ? 'var(--vm-night-900)' : 'var(--vm-surface)',
      color: featured ? '#FFFFFF' : 'var(--vm-ink)',
      border: featured ? '1px solid var(--vm-night-900)' : '1px solid var(--vm-border)',
      boxShadow: featured ? 'none' : 'var(--vm-shadow-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--vm-text-h3)',
      lineHeight: 'var(--vm-leading-snug)',
      fontWeight: 500
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      lineHeight: 'var(--vm-leading-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 20,
    color: featured ? 'var(--vm-dawn-500)' : 'var(--vm-night-600)',
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: 'pretty'
    }
  }, it)))), cta ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'primary' : 'secondary',
    tone: featured ? 'dark' : 'light',
    href: ctaHref,
    onClick: onCta
  }, cta)) : null);
}
Object.assign(__ds_scope, { AudienceColumn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AudienceColumn.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 10px',
      borderRadius: 'var(--vm-radius-pill)',
      background: 'var(--vm-dawn-100)',
      color: 'var(--vm-night-900)',
      font: '600 0.75rem/1.2 var(--vm-font-sans)',
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  tone = 'light',
  as: Tag = 'span',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "vm-eyebrow",
    style: {
      display: 'block',
      color: tone === 'dark' ? 'var(--vm-dawn-500)' : 'var(--vm-night-600)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/LevelCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LevelCard({
  level,
  title,
  badge,
  text,
  items,
  highlight,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 32,
      borderRadius: 'var(--vm-radius-md)',
      background: 'var(--vm-surface)',
      border: highlight ? '1.5px solid var(--vm-dawn-500)' : '1px solid var(--vm-border)',
      boxShadow: 'var(--vm-shadow-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      minHeight: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, typeof level === 'number' ? 'Nível ' + level : level), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge) : null), title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--vm-text-h3)',
      lineHeight: 'var(--vm-leading-snug)',
      fontWeight: 500
    }
  }, title) : null, text ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      lineHeight: 'var(--vm-leading-body)',
      textWrap: 'pretty'
    }
  }, text) : null, items && items.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      lineHeight: 'var(--vm-leading-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 20,
    color: "var(--vm-night-600)",
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: 'pretty'
    }
  }, it)))) : null, children);
}
Object.assign(__ds_scope, { LevelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/LevelCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  cite,
  tone = 'dark',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      gap: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      font: '500 88px/0.8 var(--vm-font-serif)',
      color: dark ? 'var(--vm-dawn-500)' : 'var(--vm-night-600)',
      flexShrink: 0
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'italic 400 1.5rem/1.4 var(--vm-font-serif)',
      color: dark ? '#FFFFFF' : 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, children), cite ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 'var(--vm-text-small)',
      color: dark ? 'var(--vm-night-200)' : 'var(--vm-ink-muted)'
    }
  }, cite) : null));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  number,
  text,
  source,
  tone = 'light',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 24,
      borderRadius: 'var(--vm-radius-md)',
      background: dark ? 'var(--vm-night-700)' : 'var(--vm-surface)',
      border: dark ? '1px solid var(--vm-border-dark)' : '1px solid var(--vm-border)',
      boxShadow: dark ? 'none' : 'var(--vm-shadow-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 var(--vm-text-stat)/1 var(--vm-font-serif)',
      letterSpacing: '-0.01em',
      color: dark ? 'var(--vm-dawn-500)' : 'var(--vm-night-900)',
      fontVariantNumeric: 'lining-nums'
    }
  }, number), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-body)',
      lineHeight: 'var(--vm-leading-body)',
      color: dark ? '#FFFFFF' : 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, text), source ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'auto',
      fontSize: 'var(--vm-text-micro)',
      lineHeight: 1.4,
      color: dark ? 'var(--vm-night-200)' : 'var(--vm-ink-muted)'
    }
  }, "Fonte: ", source) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Step.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Step({
  n,
  icon,
  title,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("li", _extends({
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1.5px solid var(--vm-night-600)',
      color: 'var(--vm-night-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '500 1.125rem/1 var(--vm-font-serif)',
      flexShrink: 0
    }
  }, n), typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "var(--vm-night-900)"
  }) : icon || null), title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.25rem',
      lineHeight: 'var(--vm-leading-snug)',
      fontWeight: 500
    }
  }, title) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-body)',
      lineHeight: 'var(--vm-leading-body)',
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, children));
}
Object.assign(__ds_scope, { Step });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Step.jsx", error: String((e && e.message) || e) }); }

// components/conversation/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChatBubble({
  from = 'vocemed',
  children,
  assetsPath,
  style,
  ...rest
}) {
  const worker = from === 'worker';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      justifyContent: worker ? 'flex-end' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '82%',
      display: 'flex',
      alignItems: worker ? 'center' : 'flex-start',
      gap: 10,
      padding: '12px 14px',
      background: worker ? 'var(--vm-dawn-100)' : 'var(--vm-surface)',
      color: 'var(--vm-ink)',
      borderRadius: worker ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
      boxShadow: '0 1px 2px rgba(15,30,61,0.06)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: worker ? 'mic' : 'volume-2',
    size: 18,
    color: "var(--vm-night-600)",
    style: {
      marginTop: worker ? 0 : 2
    }
  }), worker && !children ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wave, {
    height: 20,
    assetsPath: assetsPath
  }), /*#__PURE__*/React.createElement("span", {
    className: "vm-sr",
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)'
    }
  }, "Resposta em \xE1udio")) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: 1.45,
      textWrap: 'pretty'
    }
  }, children)));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/conversation/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/conversation/ConversationMockup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ConversationMockup({
  messages = [],
  assetsPath,
  caption = 'Ilustrativo',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 340,
      borderRadius: 'var(--vm-radius-lg)',
      background: 'var(--vm-night-100)',
      border: '1px solid var(--vm-night-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 16px',
      background: 'var(--vm-surface)',
      borderBottom: '1px solid var(--vm-night-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--vm-night-950)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "mark",
    height: 14,
    assetsPath: assetsPath,
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 0.9375rem/1.2 var(--vm-font-sans)',
      color: 'var(--vm-ink)'
    }
  }, "Vocemed")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: '18px 14px 22px'
    }
  }, messages.map((m, i) => /*#__PURE__*/React.createElement(__ds_scope.ChatBubble, {
    key: i,
    from: m.from,
    assetsPath: assetsPath
  }, m.text)))), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 'var(--vm-text-micro)',
      color: 'var(--vm-ink-muted)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { ConversationMockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/conversation/ConversationMockup.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChoiceChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChoiceChip({
  type = 'radio',
  name,
  value,
  checked,
  onChange,
  children,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      minHeight: 48,
      padding: '0 18px',
      borderRadius: 'var(--vm-radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: '1.5px solid ' + (checked ? 'var(--vm-night-900)' : 'var(--vm-border)'),
      background: checked ? 'var(--vm-night-900)' : 'var(--vm-surface)',
      color: checked ? '#FFFFFF' : 'var(--vm-ink)',
      font: '500 0.9375rem/1.2 var(--vm-font-sans)',
      opacity: disabled ? 0.5 : 1,
      userSelect: 'none',
      transition: 'background var(--vm-duration) var(--vm-ease), border-color var(--vm-duration) var(--vm-ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    name: name,
    value: value,
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { ChoiceChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChoiceChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChipGroup.jsx
try { (() => {
function ChipGroup({
  legend,
  name,
  options = [],
  multi,
  value,
  onChange,
  exclusiveOption,
  required,
  error,
  style
}) {
  const sel = multi ? Array.isArray(value) ? value : [] : value;
  const toggle = opt => {
    if (!onChange) return;
    if (!multi) return onChange(opt);
    let next = sel.includes(opt) ? sel.filter(v => v !== opt) : [...sel, opt];
    if (exclusiveOption && !sel.includes(opt)) next = opt === exclusiveOption ? [opt] : next.filter(v => v !== exclusiveOption);
    onChange(next);
  };
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 0,
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      minWidth: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      marginBottom: 10,
      font: '600 0.9375rem/1.3 var(--vm-font-sans)',
      color: 'var(--vm-ink)'
    }
  }, legend, multi ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--vm-ink-muted)'
    }
  }, " (m\xFAltipla escolha)") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, options.map(opt => /*#__PURE__*/React.createElement(__ds_scope.ChoiceChip, {
    key: opt,
    type: multi ? 'checkbox' : 'radio',
    name: name,
    value: opt,
    required: required && !multi,
    checked: multi ? sel.includes(opt) : sel === opt,
    onChange: () => toggle(opt)
  }, opt))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vm-text-small)',
      color: 'var(--vm-error)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { ChipGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChipGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/ConsentCheckbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ConsentCheckbox({
  checked,
  onChange,
  children,
  error,
  required = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      cursor: 'pointer',
      fontSize: 'var(--vm-text-small)',
      lineHeight: 1.5,
      color: 'var(--vm-ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 22,
      height: 22,
      flexShrink: 0,
      marginTop: 1,
      borderRadius: 4,
      border: '1.5px solid ' + (error ? 'var(--vm-error)' : checked ? 'var(--vm-night-900)' : 'var(--vm-ink-muted)'),
      background: checked ? 'var(--vm-night-900)' : 'var(--vm-surface)',
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    required: required,
    "aria-invalid": error ? 'true' : undefined,
    style: {
      position: 'absolute',
      inset: -13,
      width: 48,
      height: 48,
      opacity: 0,
      margin: 0,
      cursor: 'pointer'
    }
  }, rest)), checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2.25
  }) : null), /*#__PURE__*/React.createElement("span", null, children)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vm-text-small)',
      color: 'var(--vm-error)',
      paddingLeft: 34
    }
  }, error) : null);
}
Object.assign(__ds_scope, { ConsentCheckbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ConsentCheckbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  id,
  required,
  optional,
  error,
  hint,
  multiline,
  rows = 4,
  style,
  inputStyle,
  ...rest
}) {
  const fid = id || 'vm-f-' + String(label || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: "vm-field",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      font: '600 0.9375rem/1.3 var(--vm-font-sans)',
      color: 'var(--vm-ink)'
    }
  }, label, optional ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--vm-ink-muted)'
    }
  }, " (opcional)") : null), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fid,
    required: required,
    "aria-invalid": error ? 'true' : undefined,
    "aria-describedby": error ? fid + '-err' : undefined,
    rows: multiline ? rows : undefined,
    style: {
      boxSizing: 'border-box',
      width: '100%',
      minHeight: 48,
      padding: multiline ? '12px 14px' : '0 14px',
      borderRadius: 'var(--vm-radius-sm)',
      border: '1px solid ' + (error ? 'var(--vm-error)' : 'var(--vm-border)'),
      background: 'var(--vm-surface)',
      color: 'var(--vm-ink)',
      font: '400 1rem/1.5 var(--vm-font-sans)',
      resize: multiline ? 'vertical' : undefined,
      ...inputStyle
    }
  }, rest)), hint && !error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vm-text-small)',
      color: 'var(--vm-ink-muted)'
    }
  }, hint) : null, error ? /*#__PURE__*/React.createElement("span", {
    id: fid + '-err',
    style: {
      fontSize: 'var(--vm-text-small)',
      color: 'var(--vm-error)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  references = [],
  assetsPath,
  privacyHref = '/privacidade',
  style
}) {
  const [open, setOpen] = React.useState(false);
  const link = {
    color: 'var(--vm-night-200)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    minHeight: 32
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "vm-dark",
    style: {
      background: 'var(--vm-night-950)',
      color: '#FFFFFF',
      borderTop: '1px solid var(--vm-border-dark)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--vm-container)',
      margin: '0 auto',
      padding: '64px 32px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: "dark",
    height: 28,
    assetsPath: assetsPath
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-small)',
      color: 'var(--vm-night-400)',
      lineHeight: 1.6
    }
  }, "VOCEMED - INOVACAO EM VOZ E SAUDE LTDA", /*#__PURE__*/React.createElement("br", null), "CNPJ 69.498.965/0001-52")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontSize: 'var(--vm-text-small)'
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "mailto:contato@vocemed.com"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 18
  }), "contato@vocemed.com")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "https://www.instagram.com/drsamanta_dallagnese/"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "instagram",
    size: 18
  }), "@drsamanta_dallagnese")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    style: link,
    href: privacyHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "shield",
    size: 18
  }), "Pol\xEDtica de privacidade")))), references.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--vm-border-dark)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      background: 'none',
      border: 0,
      color: '#FFFFFF',
      padding: 0,
      minHeight: 48,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      font: '600 var(--vm-text-small)/1 var(--vm-font-sans)'
    }
  }, "Refer\xEAncias ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--vm-duration) var(--vm-ease)'
    }
  })), open ? /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: '8px 0 0',
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 'var(--vm-text-micro)',
      lineHeight: 1.5,
      color: 'var(--vm-night-200)'
    }
  }, references.map((r, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      overflowWrap: 'anywhere'
    }
  }, r))) : null) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-micro)',
      color: 'var(--vm-night-400)'
    }
  }, "\xA9 2026 Vocemed")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const LINKS = [['Como funciona', '#como-funciona'], ['Serviços', '#servicos'], ['Quem somos', '#quem-somos'], ['Para quem', '#para-quem']];
function SiteHeader({
  links = LINKS,
  ctaHref = '#demonstracao',
  scrolled = false,
  compact,
  fixed = true,
  assetsPath,
  onNavigate,
  style
}) {
  const [wide, setWide] = React.useState(() => typeof window === 'undefined' ? true : window.innerWidth >= 1024);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const f = () => setWide(window.innerWidth >= 1024);
    window.addEventListener('resize', f);
    return () => window.removeEventListener('resize', f);
  }, []);
  const mobile = compact ?? !wide;
  const go = (e, href) => {
    setOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: fixed ? 'sticky' : 'relative',
      top: 0,
      zIndex: 40,
      color: '#FFFFFF',
      background: scrolled ? 'rgba(11, 22, 48, 0.82)' : 'var(--vm-night-950)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid ' + (scrolled ? 'var(--vm-border-dark)' : 'transparent'),
      transition: 'background var(--vm-duration) var(--vm-ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--vm-container)',
      margin: '0 auto',
      padding: mobile ? '0 16px' : '0 32px',
      height: mobile ? 64 : 76,
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => go(e, '#top'),
    "aria-label": "Vocemed, in\xEDcio",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: "dark",
    height: mobile ? 30 : 36,
    assetsPath: assetsPath,
    alt: ""
  })), !mobile ? /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Principal",
    style: {
      display: 'flex',
      gap: 28,
      marginLeft: 'auto'
    }
  }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    onClick: e => go(e, h),
    style: {
      color: 'var(--vm-night-200)',
      textDecoration: 'none',
      font: '500 0.9375rem/1 var(--vm-font-sans)',
      padding: '16px 0'
    }
  }, l))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: mobile ? 'auto' : 0,
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    href: ctaHref,
    onClick: e => go(e, ctaHref)
  }, mobile ? 'Demonstração' : 'Solicite uma demonstração'), mobile ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": open ? 'Fechar menu' : 'Abrir menu',
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      width: 48,
      height: 48,
      background: 'none',
      border: 0,
      color: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 24
  })) : null)), mobile && open ? /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Principal",
    style: {
      background: 'var(--vm-night-950)',
      borderTop: '1px solid var(--vm-border-dark)',
      padding: '8px 16px 24px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    onClick: e => go(e, h),
    style: {
      color: '#FFFFFF',
      textDecoration: 'none',
      font: '500 1.0625rem/1 var(--vm-font-sans)',
      padding: '16px 0',
      borderBottom: '1px solid var(--vm-border-dark)'
    }
  }, l))) : null);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// guidelines/tailwind-theme.js
try { (() => {
// Vocemed: extensão de tema para Tailwind CSS (v3 ou v4 em modo config).
// Os valores espelham design-system/tokens.css.
module.exports = {
  theme: {
    extend: {
      colors: {
        night: {
          950: "#0B1630",
          900: "#0F1E3D",
          700: "#1C3260",
          600: "#2A4A80",
          400: "#6F86B3",
          200: "#C3CDE0",
          100: "#E3E8F2"
        },
        dawn: {
          600: "#D48A45",
          500: "#E9A86A",
          100: "#FBEBDB"
        },
        paper: "#F7F5F0",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#1A1F2B",
          muted: "#545E70"
        },
        line: "#DCD8CF",
        whatsapp: "#25D366"
      },
      fontFamily: {
        serif: ['"Newsreader"', "Georgia", "serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"]
      },
      fontSize: {
        display: ["clamp(2.5rem, 1.6rem + 3.6vw, 4rem)", {
          lineHeight: "1.15"
        }],
        h1: ["clamp(2.125rem, 1.6rem + 2vw, 3rem)", {
          lineHeight: "1.15"
        }],
        h2: ["clamp(1.75rem, 1.4rem + 1.4vw, 2.25rem)", {
          lineHeight: "1.2"
        }],
        h3: ["clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)", {
          lineHeight: "1.3"
        }],
        stat: ["clamp(2.5rem, 2rem + 2vw, 3.5rem)", {
          lineHeight: "1"
        }],
        lead: ["1.25rem", {
          lineHeight: "1.5"
        }],
        body: ["1.0625rem", {
          lineHeight: "1.6"
        }]
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px"
      },
      maxWidth: {
        container: "1120px",
        measure: "680px"
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,30,61,0.06), 0 8px 24px rgba(15,30,61,0.06)",
        float: "0 8px 24px rgba(11,22,48,0.25)"
      }
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/tailwind-theme.js", error: String((e && e.message) || e) }); }

// site/app.js
try { (() => {
(function () {
  function KitSection({
    id,
    tone = 'paper',
    children,
    style
  }) {
    const bg = {
      paper: 'var(--vm-paper)',
      surface: 'var(--vm-surface)',
      soft: 'var(--vm-night-100)',
      dark: 'var(--vm-night-950)'
    }[tone];
    return React.createElement("section", {
      id: id,
      className: tone === 'dark' ? 'vm-dark' : undefined,
      style: {
        background: bg,
        color: tone === 'dark' ? '#FFFFFF' : 'var(--vm-ink)',
        padding: 'var(--vm-section-y) 0',
        scrollMarginTop: 72,
        ...style
      }
    }, React.createElement("div", {
      className: "kit-wrap"
    }, children));
  }
  function KitHero({
    onNav
  }) {
    const {
      Button,
      Wave
    } = window.VocemedDesignSystem_361ae9;
    return React.createElement("section", {
      id: "top",
      className: "vm-dark",
      style: {
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--vm-night-950)',
        color: '#FFFFFF',
        padding: 'clamp(72px, 10vw, 136px) 0 clamp(64px, 9vw, 128px)'
      }
    }, React.createElement("div", {
      className: "kit-wrap kit-hero"
    }, React.createElement("div", {
      style: {
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        maxWidth: 720
      }
    }, React.createElement("h1", {
      style: {
        fontSize: 'var(--vm-text-display)',
        textWrap: 'balance'
      }
    }, "Como seus trabalhadores ", React.createElement("em", {
      style: {
        fontStyle: 'italic'
      }
    }, "dormiram"), " esta noite?"), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-lead)',
        lineHeight: 1.5,
        color: 'var(--vm-night-200)',
        maxWidth: 'var(--vm-measure)',
        textWrap: 'pretty'
      }
    }, "A avalia\xE7\xE3o de riscos psicossociais da NR-1, respondida por voz e ampliada para o sono. Para servi\xE7os de medicina do trabalho e empresas. Criada por uma m\xE9dica especialista em sono."), React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 8
      }
    }, React.createElement(Button, {
      tone: "dark",
      href: "#demonstracao",
      onClick: e => {
        e.preventDefault();
        onNav('#demonstracao');
      }
    }, "Solicite uma demonstra\xE7\xE3o"), React.createElement(Button, {
      tone: "dark",
      variant: "secondary",
      href: "#servicos",
      onClick: e => {
        e.preventDefault();
        onNav('#servicos');
      }
    }, "Palestras e programas de sono"))), React.createElement("div", {
      className: "kit-hero-wave",
      style: {
        position: 'relative'
      }
    }, React.createElement("div", {
      className: "kit-hero-photo"
    }, React.createElement("img", {
      src: "assets/photos/hero-foto.jpg",
      alt: "trabalhador respondendo pelo celular",
      loading: "lazy",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 24,
        display: 'block'
      }
    })), React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: -24,
        bottom: -20,
        width: '60%',
        pointerEvents: 'none'
      }
    }, React.createElement(Wave, {
      height: "auto",
      opacity: 0.5,
      style: {
        width: '100%',
        height: 'auto'
      }
    })))));
  }
  Object.assign(window, {
    KitSection,
    KitHero
  });
})();
(function () {
  function KitLeaveChart({
    data
  }) {
    const ys = data.years,
      n = ys.length,
      max = Math.max(...ys.map(y => y.value));
    const pt = ys.map((y, i) => ({
      ...y,
      x: 8 + i * (84 / (n - 1)),
      y: 88 - y.value / max * 66
    }));
    const line = pt.map(p => p.x + ',' + p.y).join(' ');
    const area = '8,100 ' + line + ' 92,100';
    return React.createElement("figure", {
      style: {
        margin: 0,
        padding: 24,
        borderRadius: 'var(--vm-radius-md)',
        background: 'var(--vm-surface)',
        border: '1px solid var(--vm-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, React.createElement("figcaption", {
      style: {
        fontSize: 'var(--vm-text-small)',
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, "Benef\xEDcios do INSS por transtornos mentais e comportamentais, por ano"), React.createElement("div", {
      role: "img",
      "aria-label": ys.map(y => y.year + ': ' + y.label).join(', '),
      style: {
        position: 'relative',
        height: 150
      }
    }, React.createElement("svg", {
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible'
      }
    }, React.createElement("polygon", {
      points: area,
      fill: "var(--vm-error)",
      opacity: "0.08"
    }), React.createElement("polyline", {
      points: line,
      fill: "none",
      stroke: "var(--vm-error)",
      strokeWidth: "3",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      vectorEffect: "non-scaling-stroke"
    })), pt.map((p, i) => React.createElement(React.Fragment, {
      key: p.year
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        left: p.x + '%',
        top: p.y + '%',
        width: i === n - 1 ? 12 : 9,
        height: i === n - 1 ? 12 : 9,
        borderRadius: '50%',
        background: 'var(--vm-surface)',
        border: '3px solid var(--vm-error)',
        transform: 'translate(-50%,-50%)',
        boxSizing: 'border-box'
      }
    }), React.createElement("span", {
      style: {
        position: 'absolute',
        left: p.x + '%',
        top: p.y + '%',
        transform: 'translate(-50%, calc(-100% - 12px))',
        whiteSpace: 'nowrap',
        font: '500 ' + (i === n - 1 ? '22px' : '17px') + '/1 var(--vm-font-serif)',
        color: i === n - 1 ? 'var(--vm-error)' : 'var(--vm-night-900)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, p.label)))), React.createElement("div", {
      style: {
        position: 'relative',
        height: 20,
        borderTop: '1px solid var(--vm-border)',
        paddingTop: 8
      }
    }, pt.map(p => React.createElement("span", {
      key: p.year,
      style: {
        position: 'absolute',
        left: p.x + '%',
        transform: 'translateX(-50%)',
        fontSize: 'var(--vm-text-small)',
        color: 'var(--vm-ink-muted)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, p.year))), React.createElement("span", {
      style: {
        fontSize: 'var(--vm-text-micro)',
        color: 'var(--vm-ink-muted)'
      }
    }, "Fonte: ", data.source));
  }
  function KitDuties({
    data
  }) {
    const {
      Icon
    } = window.VocemedDesignSystem_361ae9;
    return React.createElement("div", {
      style: {
        padding: 24,
        borderRadius: 'var(--vm-radius-md)',
        background: 'var(--vm-surface)',
        border: '1px solid var(--vm-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-small)',
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, data.title), React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, data.items.map(it => React.createElement("li", {
      key: it.icon,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, React.createElement("span", {
      style: {
        flex: 'none',
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--vm-dawn-100)',
        color: 'var(--vm-night-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: it.icon,
      size: 20
    })), React.createElement("span", {
      style: {
        font: '500 18px/1.35 var(--vm-font-serif)',
        color: 'var(--vm-night-900)',
        textWrap: 'pretty'
      }
    }, it.text)))), React.createElement("span", {
      style: {
        fontSize: 'var(--vm-text-micro)',
        color: 'var(--vm-ink-muted)'
      }
    }, "Fonte: ", data.source));
  }
  function KitNR1() {
    const {
      Eyebrow,
      StatCard,
      Icon
    } = window.VocemedDesignSystem_361ae9;
    const C = window.VM_CONTENT;
    const [law] = C.nr1Stats;
    const col = {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    };
    const lbl = {
      margin: 0,
      fontSize: 'var(--vm-text-small)',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--vm-ink-muted)'
    };
    const lead = {
      margin: 0,
      font: '500 var(--vm-text-h3)/1.4 var(--vm-font-serif)',
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    };
    return React.createElement(KitSection, {
      tone: "paper",
      style: {
        padding: 'clamp(48px, 6vw, 72px) 0'
      }
    }, React.createElement("div", {
      className: "kit-cause"
    }, React.createElement("div", {
      style: col
    }, React.createElement("p", {
      style: lbl
    }, "O problema"), React.createElement("p", {
      style: lead
    }, "Os afastamentos por sa\xFAde mental mais que dobraram em quatro anos:"), React.createElement(KitLeaveChart, {
      data: C.leaveSeries
    })), React.createElement("div", {
      className: "kit-cause-arrow",
      "aria-hidden": "true"
    }, React.createElement(Icon, {
      name: "arrow-right",
      size: 28
    })), React.createElement("div", {
      style: col
    }, React.createElement("p", {
      style: lbl
    }, "A resposta da lei"), React.createElement("p", {
      style: lead
    }, "Esse cen\xE1rio \xE9 a base da NR-1, que vale desde 26 de maio de 2026."), React.createElement(KitDuties, {
      data: C.nr1Duties
    }))));
  }
  function KitSleepCard({
    card
  }) {
    const {
      Icon
    } = window.VocemedDesignSystem_361ae9;
    const box = {
      margin: 0,
      padding: 24,
      borderRadius: 'var(--vm-radius-md)',
      background: 'var(--vm-surface)',
      border: '1px solid var(--vm-border)',
      boxShadow: 'var(--vm-shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    };
    const lbl = {
      margin: 0,
      fontSize: 'var(--vm-text-eyebrow)',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--vm-ink-muted)'
    };
    return React.createElement("figure", {
      style: box
    }, React.createElement("p", {
      style: lbl
    }, card.label), card.groups ? card.groups.map((g, gi) => React.createElement("div", {
      key: g.title,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        paddingTop: gi ? 16 : 0,
        borderTop: gi ? '1px solid var(--vm-border)' : 'none'
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        font: '500 20px/1.2 var(--vm-font-serif)',
        color: 'var(--vm-night-900)'
      }
    }, g.title), React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, g.chips.map(([ic, t]) => React.createElement("li", {
      key: t,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px 6px 10px',
        borderRadius: 999,
        background: gi ? 'var(--vm-paper)' : 'var(--vm-dawn-100)',
        border: gi ? '1px solid var(--vm-border)' : '1px solid transparent',
        fontSize: 'var(--vm-text-small)',
        fontWeight: 500,
        color: 'var(--vm-night-900)'
      }
    }, React.createElement(Icon, {
      name: ic,
      size: 16,
      color: gi ? 'var(--vm-error)' : 'var(--vm-dawn-600)'
    }), t))))) : card.stats.map((st, i) => React.createElement("div", {
      key: st.number || st.text,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        paddingTop: i ? 16 : 0,
        borderTop: i ? '1px solid var(--vm-border)' : 'none'
      }
    }, st.sublabel ? React.createElement("p", {
      style: {
        ...lbl,
        marginBottom: 10
      }
    }, st.sublabel) : null, st.number ? React.createElement("span", {
      style: {
        font: '500 calc(var(--vm-text-stat) * 0.8)/1 var(--vm-font-serif)',
        letterSpacing: '-0.01em',
        color: 'var(--vm-night-900)',
        fontVariantNumeric: 'lining-nums'
      }
    }, st.number) : null, React.createElement("span", {
      style: st.number ? {
        fontSize: 'var(--vm-text-body)',
        lineHeight: 'var(--vm-leading-body)',
        color: 'var(--vm-ink)',
        textWrap: 'pretty'
      } : {
        font: '500 20px/1.35 var(--vm-font-serif)',
        color: 'var(--vm-night-900)',
        textWrap: 'pretty'
      }
    }, st.highlight ? st.text.split(st.highlight).flatMap((part, k) => k ? [React.createElement("em", {
      key: k,
      style: {
        fontStyle: 'italic',
        color: 'var(--vm-dawn-600)'
      }
    }, st.highlight), part] : [part]) : st.text), React.createElement("span", {
      style: {
        fontSize: 'var(--vm-text-micro)',
        color: 'var(--vm-ink-muted)'
      }
    }, "Fonte: ", st.source))));
  }
  function KitSleep() {
    const {
      Eyebrow,
      StatCard
    } = window.VocemedDesignSystem_361ae9;
    const C = window.VM_CONTENT;
    return React.createElement(KitSection, {
      tone: "soft"
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        maxWidth: 'var(--vm-measure)',
        marginBottom: 48
      }
    }, React.createElement(Eyebrow, null, "Sono & Sa\xFAde mental"), React.createElement("p", {
      style: {
        margin: 0,
        font: '500 var(--vm-text-h3)/1.4 var(--vm-font-serif)',
        color: 'var(--vm-night-900)',
        textWrap: 'pretty'
      }
    }, "No consult\xF3rio, o sono costuma ser das primeiras coisas a mudar quando a sa\xFAde mental vai mal. A pesquisa mostra o mesmo caminho: a ins\xF4nia aumenta o risco de desenvolver depress\xE3o e ansiedade (Meijer et al., 2026).")), React.createElement("div", {
      className: "kit-grid-4",
      style: {
        alignItems: 'start'
      }
    }, C.sleepCards.map(card => React.createElement(KitSleepCard, {
      key: card.label,
      card: card
    }))));
  }
  function KitSolution() {
    const {
      Eyebrow
    } = window.VocemedDesignSystem_361ae9;
    const C = window.VM_CONTENT.solution;
    return React.createElement(KitSection, {
      id: "solucao",
      tone: "paper",
      style: {
        padding: 'clamp(48px, 6vw, 72px) 0'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        maxWidth: 820
      }
    }, React.createElement(Eyebrow, null, "A solu\xE7\xE3o Vocemed"), React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-h2)',
        lineHeight: 1.2,
        color: 'var(--vm-night-900)',
        textWrap: 'pretty'
      }
    }, "Dormir bem se aprende, e falar de sono \xE9 mais leve. Por isso o sono \xE9 uma ", React.createElement("em", {
      style: {
        fontStyle: 'italic'
      }
    }, "porta de entrada"), " para cuidar da sa\xFAde mental."), React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 'var(--vm-measure)',
        fontSize: 'var(--vm-text-lead)',
        lineHeight: 1.5,
        color: 'var(--vm-ink)',
        textWrap: 'pretty'
      }
    }, C.intro), React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 'var(--vm-measure)',
        fontSize: 'var(--vm-text-lead)',
        lineHeight: 1.5,
        color: 'var(--vm-ink)',
        textWrap: 'pretty'
      }
    }, "Tudo come\xE7a pela medi\xE7\xE3o: avaliar o sono, junto com a NR-1, mostra onde agir e abre caminho para um ", React.createElement("strong", {
      style: {
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, "programa que melhora o sono e a sa\xFAde mental"), " das equipes."), React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 'var(--vm-measure)',
        fontSize: 'var(--vm-text-lead)',
        lineHeight: 1.5,
        color: 'var(--vm-ink)',
        textWrap: 'pretty'
      }
    }, "Mas, para medir bem, as pessoas precisam responder, e com sinceridade. Por isso, a Vocemed trocou o formul\xE1rio pela conversa.")));
  }
  function KitHow({
    onNav
  }) {
    const {
      Eyebrow,
      Step,
      ConversationMockup,
      Button,
      Wave,
      Icon
    } = window.VocemedDesignSystem_361ae9;
    const C = window.VM_CONTENT;
    return React.createElement(KitSection, {
      id: "como-funciona",
      tone: "soft"
    }, React.createElement("div", {
      className: "kit-split",
      style: {
        alignItems: 'center',
        marginBottom: 48
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, React.createElement(Eyebrow, null, "Como funciona"), React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-h2)',
        lineHeight: 1.2,
        color: 'var(--vm-night-900)',
        textWrap: 'pretty'
      }
    }, "Medir o sono come\xE7a por uma ", React.createElement("em", {
      style: {
        fontStyle: 'italic'
      }
    }, "conversa"), "."), React.createElement(Wave, {
      height: 36,
      "aria-hidden": "true"
    })), React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 'var(--vm-measure)',
        fontSize: 'var(--vm-text-lead)',
        lineHeight: 1.5,
        color: 'var(--vm-ink)',
        textWrap: 'pretty'
      }
    }, "Os question\xE1rios s\xE3o os mesmos. O que muda \xE9 a intera\xE7\xE3o."), React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 'var(--vm-measure)',
        fontSize: 'var(--vm-text-body)',
        lineHeight: 'var(--vm-leading-body)',
        color: 'var(--vm-ink)',
        textWrap: 'pretty'
      }
    }, "Criada por uma otorrinolaringologista, m\xE9dica que cuida da voz e do sono e sabe que ", React.createElement("strong", {
      style: {
        fontWeight: 600,
        fontSize: '1.1em',
        color: 'var(--vm-night-900)'
      }
    }, "falar \xE9 mais natural do que preencher um formul\xE1rio"), ".")), React.createElement("div", {
      style: {
        maxWidth: 440,
        width: '100%',
        justifySelf: 'center'
      }
    }, React.createElement(ConversationMockup, {
      messages: C.conversation
    }))), React.createElement("ol", {
      className: "kit-grid-3",
      style: {
        margin: 0,
        padding: 0
      }
    }, C.steps3.map((s, i) => s.icons ? React.createElement("li", {
      key: i,
      style: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '1.5px solid var(--vm-night-600)',
        color: 'var(--vm-night-600)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '500 1.125rem/1 var(--vm-font-serif)',
        flexShrink: 0
      }
    }, i + 1), React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, s.icons.map(nm => React.createElement(Icon, {
      key: nm,
      name: nm,
      size: nm === 'arrow-right' ? 18 : 24,
      color: nm === 'arrow-right' ? 'var(--vm-dawn-600)' : 'var(--vm-night-900)'
    })))), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-body)',
        lineHeight: 'var(--vm-leading-body)',
        color: 'var(--vm-ink)',
        textWrap: 'pretty',
        whiteSpace: 'pre-line'
      }
    }, s.text)) : React.createElement(Step, {
      key: i,
      n: i + 1,
      icon: s.icon
    }, s.text))), React.createElement("p", {
      style: {
        margin: '56px 0 0',
        font: '500 var(--vm-text-h3)/1.3 var(--vm-font-serif)',
        color: 'var(--vm-night-900)',
        textAlign: 'center',
        textWrap: 'balance'
      }
    }, "Acess\xEDvel a todos os p\xFAblicos: ", React.createElement("em", {
      style: {
        fontStyle: 'italic'
      }
    }, "qualquer fun\xE7\xE3o, qualquer lugar, qualquer hor\xE1rio.")), React.createElement("div", {
      className: "kit-grid-3",
      style: {
        marginTop: 24
      }
    }, [['voz-producao', 'Na linha de produção'], ['voz-obra', 'No canteiro de obras'], ['voz-noite', 'No turno da noite']].map(([id, cap]) => React.createElement("figure", {
      key: id,
      style: {
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, React.createElement("div", {
      style: {
        aspectRatio: '16 / 9'
      }
    }, React.createElement("img", {
      src: 'assets/photos/' + id + '.jpg',
      alt: 'Trabalhador ' + cap.toLowerCase(),
      loading: "lazy",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 16,
        display: 'block'
      }
    })), React.createElement("figcaption", {
      style: {
        fontSize: 'var(--vm-text-small)',
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, cap)))), React.createElement("div", {
      style: {
        marginTop: 40,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '12px 24px'
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        color: 'var(--vm-ink-muted)',
        textWrap: 'pretty'
      }
    }, "Veja os instrumentos e os relat\xF3rios na demonstra\xE7\xE3o."), React.createElement(Button, {
      href: "#demonstracao",
      onClick: e => {
        e.preventDefault();
        onNav('#demonstracao');
      }
    }, "Solicite uma demonstra\xE7\xE3o")));
  }
  Object.assign(window, {
    KitNR1,
    KitSleep,
    KitSolution,
    KitHow
  });
})();
(function () {
  function KitServices() {
    const {
      Eyebrow,
      LevelCard,
      Icon
    } = window.VocemedDesignSystem_361ae9;
    return React.createElement(KitSection, {
      id: "servicos",
      tone: "paper"
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 'var(--vm-measure)',
        marginBottom: 56
      }
    }, React.createElement(Eyebrow, null, "Servi\xE7os"), React.createElement("h2", {
      style: {
        fontSize: 'var(--vm-text-h1)',
        color: 'var(--vm-night-900)'
      }
    }, "Al\xE9m de medir, tomamos a\xE7\xE3o."), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-lead)',
        lineHeight: 1.5,
        textWrap: 'pretty'
      }
    }, "A Vocemed organiza a informa\xE7\xE3o, permitindo que os profissionais de sa\xFAde fa\xE7am o diagn\xF3stico e que a empresa tome a melhor decis\xE3o com base em dados. Por isso, oferece duas frentes: o essencial, inclu\xEDdo na avalia\xE7\xE3o, e o personalizado, conforme as necessidades da empresa.")), React.createElement("div", {
      className: "kit-stairs"
    }, React.createElement(LevelCard, {
      level: "Essencial",
      badge: "Inclu\xEDdo",
      title: "Avalia\xE7\xE3o Vocemed",
      items: [React.createElement(React.Fragment, null, React.createElement("strong", {
        style: {
          fontWeight: 600,
          color: 'var(--vm-night-900)'
        }
      }, "Avalia\xE7\xE3o psicossocial da NR-1 e perguntas sobre sono por voz"), "."), React.createElement(React.Fragment, null, React.createElement("strong", {
        style: {
          fontWeight: 600,
          color: 'var(--vm-night-900)'
        }
      }, "Painel estrat\xE9gico para o RH"), ", com a vis\xE3o da empresa como um todo e recortes por \xE1rea e n\xEDvel hier\xE1rquico, sempre com dados agregados."), React.createElement(React.Fragment, null, React.createElement("strong", {
        style: {
          fontWeight: 600,
          color: 'var(--vm-night-900)'
        }
      }, "Relat\xF3rio para o m\xE9dico do trabalho"), " com informa\xE7\xF5es cl\xEDnicas relevantes, e ", React.createElement("strong", {
        style: {
          fontWeight: 600,
          color: 'var(--vm-night-900)'
        }
      }, "conte\xFAdo b\xE1sico mensal sobre h\xE1bitos saud\xE1veis"), " de sono para os trabalhadores, preparado pela Dra. Samanta.")]
    }), React.createElement(LevelCard, {
      level: "Personalizado",
      highlight: true
    }, React.createElement("div", {
      className: "kit-grid-2",
      style: {
        gap: 32
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, React.createElement("h3", {
      style: {
        fontSize: 'var(--vm-text-h3)',
        lineHeight: 'var(--vm-leading-snug)',
        fontWeight: 500
      }
    }, "Palestras corporativas"), React.createElement("p", {
      style: {
        margin: 0,
        lineHeight: 'var(--vm-leading-body)',
        textWrap: 'pretty'
      }
    }, "Um encontro interativo sobre os pilares de um sono saud\xE1vel: o que de fato constr\xF3i boas noites, como monitorar o pr\xF3prio sono, reconhecer sinais de alerta e saber quando buscar ajuda profissional. Sob medida para lideran\xE7a, times de opera\xE7\xE3o ou todos os trabalhadores."), React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, ['Linguagem acessível e base científica sólida.', 'Encontro único ou em série, com material de apoio.', 'Ideal para SIPAT, kickoffs, convenções, onboarding de liderança e programas de qualidade de vida.'].map(t => React.createElement("li", {
      key: t,
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        lineHeight: 'var(--vm-leading-body)'
      }
    }, React.createElement(Icon, {
      name: "check",
      size: 18,
      color: "var(--vm-night-600)",
      style: {
        marginTop: 4,
        flexShrink: 0
      }
    }), React.createElement("span", {
      style: {
        textWrap: 'pretty'
      }
    }, t))))), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, React.createElement("h3", {
      style: {
        fontSize: 'var(--vm-text-h3)',
        lineHeight: 'var(--vm-leading-snug)',
        fontWeight: 500
      }
    }, "Programas de sono sob medida"), React.createElement("p", {
      style: {
        margin: 0,
        lineHeight: 'var(--vm-leading-body)',
        textWrap: 'pretty'
      }
    }, "Assinados pela Dra. Samanta e desenhados conforme as necessidades da empresa:"), React.createElement("ol", {
      style: {
        margin: 0,
        paddingLeft: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        lineHeight: 'var(--vm-leading-body)'
      }
    }, React.createElement("li", {
      style: {
        textWrap: 'pretty'
      }
    }, "Avalia\xE7\xE3o das escalas de turno."), React.createElement("li", {
      style: {
        textWrap: 'pretty'
      }
    }, "Presta\xE7\xE3o de servi\xE7os m\xE9dicos: diagn\xF3stico, tratamento e acompanhamento dos dist\xFArbios do sono."), React.createElement("li", {
      style: {
        textWrap: 'pretty'
      }
    }, "Acompanhamento mais longo para construir h\xE1bitos melhores, voltado a fun\xE7\xF5es de maior risco, como centros de controle, opera\xE7\xE3o e turnos cr\xEDticos.")))))));
  }
  function KitAuthority() {
    const {
      Eyebrow,
      Quote,
      Wave
    } = window.VocemedDesignSystem_361ae9;
    const C = window.VM_CONTENT;
    const p = {
      margin: 0,
      color: 'var(--vm-night-200)',
      textWrap: 'pretty'
    };
    return React.createElement(KitSection, {
      id: "quem-somos",
      tone: "dark"
    }, React.createElement("div", {
      className: "kit-authority"
    }, React.createElement("div", {
      className: "kit-auth-photo"
    }, React.createElement("img", {
      src: "assets/photos/foto-samanta.jpg",
      alt: "Dra. Samanta",
      loading: "lazy",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 24,
        display: 'block'
      }
    })), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, React.createElement(Eyebrow, {
      tone: "dark"
    }, "Quem est\xE1 por tr\xE1s"), React.createElement("h2", {
      style: {
        fontSize: 'var(--vm-text-h1)'
      }
    }, "Dra. Samanta Dall'Agnese"), React.createElement("p", {
      style: p
    }, "Otorrinolaringologista e especialista em medicina do sono, cuida das duas \xE1reas no centro da Vocemed: o sono e a voz. Formada pela Universidade Federal do Paran\xE1, com certifica\xE7\xE3o internacional da World Association of Sleep Medicine e duas d\xE9cadas de pr\xE1tica cl\xEDnica. Preceptora da resid\xEAncia m\xE9dica em otorrinolaringologia do Hospital Santa Marcelina, em S\xE3o Paulo."), React.createElement("p", {
      style: p
    }, "Foi gerente m\xE9dica corporativa da Benefic\xEAncia Portuguesa de S\xE3o Paulo, gerente de telemedicina da SulAm\xE9rica e head de intelig\xEAncia cl\xEDnica em uma healthtech, com experi\xEAncia internacional em sono e gest\xE3o em sa\xFAde. Mestre em sa\xFAde digital pela Universidade de Barcelona e formada no Principles and Practice of Clinical Research de Harvard."), React.createElement("div", null, React.createElement("div", {
      style: {
        font: '600 var(--vm-text-small)/1 var(--vm-font-sans)',
        marginBottom: 8
      }
    }, "Palestrante em congressos no Brasil e no exterior:"), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-small)',
        lineHeight: 1.6,
        color: 'var(--vm-night-200)',
        textWrap: 'pretty'
      }
    }, C.talks.join(' · '))))), React.createElement(Quote, {
      style: {
        marginTop: 48,
        paddingTop: 40,
        borderTop: '1px solid var(--vm-border-dark)'
      }
    }, "Passei a carreira cuidando da voz e do sono das pessoas. H\xE1 vinte anos pergunto aos meus pacientes como dormiram, e a resposta diz muito sobre como eles est\xE3o. Criei a Vocemed para levar essa pergunta \xE0s empresas: o trabalhador fala, e a empresa entende como sua equipe est\xE1 dormindo.\u201D"));
  }
  function KitAudience({
    onPick
  }) {
    const {
      AudienceColumn
    } = window.VocemedDesignSystem_361ae9;
    return React.createElement(KitSection, {
      id: "para-quem",
      tone: "paper"
    }, React.createElement("div", {
      className: "kit-grid-2",
      style: {
        gap: 24
      }
    }, React.createElement(AudienceColumn, {
      featured: true,
      title: "Se voc\xEA \xE9 uma empresa de medicina do trabalho:",
      cta: "Quero oferecer aos meus clientes",
      onCta: () => onPick('Medicina do trabalho'),
      items: ['Entregue às empresas clientes a avaliação psicossocial da NR-1 por voz, com o sono incluído e conteúdo para apoiar a conduta clínica.', 'Inclua no portfólio palestras e programas de sono assinados por uma especialista.', 'Amplie sua atuação, diferencie-se da concorrência e ofereça uma experiência melhor aos seus clientes.']
    }), React.createElement(AudienceColumn, {
      title: "Se voc\xEA cuida das pessoas da sua empresa:",
      cta: "Quero para minha empresa",
      onCta: () => onPick('Empresa'),
      items: ['Cumpra a NR-1 com uma avaliação que o trabalhador responde em poucos minutos, falando, e receba um plano de ação para os riscos encontrados.', 'Isso vale mais ainda em operações com turnos e atividades críticas, como mineração, transportes, indústria, logística, saúde, construção civil e energia.', 'E em funções que exigem raciocínio, julgamento e lidam com pressão emocional, como bancos e serviços financeiros, call center e escritórios de advocacia.']
    })));
  }
  Object.assign(window, {
    KitServices,
    KitAuthority,
    KitAudience
  });
})();
(function () {
  function KitDemoForm({
    perfil,
    setPerfil
  }) {
    const {
      TextField,
      ChipGroup,
      ConsentCheckbox,
      Button,
      Icon
    } = window.VocemedDesignSystem_361ae9;
    const [v, setV] = React.useState({
      nome: '',
      email: '',
      whats: '',
      empresa: '',
      msg: ''
    });
    const [faixa, setFaixa] = React.useState('');
    const [interesse, setInteresse] = React.useState([]);
    const [ok, setOk] = React.useState(false);
    const [err, setErr] = React.useState({});
    const [status, setStatus] = React.useState('idle');
    const set = k => e => setV({
      ...v,
      [k]: e.target.value
    });
    const submit = e => {
      e.preventDefault();
      const x = {};
      if (!v.nome.trim()) x.nome = 'Preencha seu nome.';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) x.email = 'Informe um e-mail válido.';
      if (v.whats.replace(/\D/g, '').length < 10) x.whats = 'Informe um WhatsApp com DDD.';
      if (!v.empresa.trim()) x.empresa = 'Preencha o nome da empresa.';
      if (!perfil) x.perfil = 'Escolha um perfil.';
      if (!ok) x.ok = 'Para continuar, autorize o contato.';
      setErr(x);
      if (Object.keys(x).length) return;
      setStatus('sending');
      fetch('https://formsubmit.co/ajax/contato@vocemed.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: 'Novo pedido de demonstração · site Vocemed',
          _template: 'table',
          _captcha: 'false',
          Nome: v.nome,
          Email: v.email,
          WhatsApp: v.whats,
          Empresa: v.empresa,
          Perfil: perfil,
          Trabalhadores: faixa || '-',
          Interesse: interesse.join(', ') || '-',
          Mensagem: v.msg || '-'
        })
      }).then(res => res.ok ? res.json() : Promise.reject(res)).then(() => {
        setStatus('done');
        if (window.gtag) window.gtag('event', 'generate_lead');
      }).catch(() => setStatus('error'));
    };
    return React.createElement(KitSection, {
      id: "demonstracao",
      tone: "soft"
    }, React.createElement("div", {
      className: "kit-demo"
    }, React.createElement("div", {
      className: "kit-demo-intro",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        maxWidth: 480
      }
    }, React.createElement("h2", {
      style: {
        fontSize: 'var(--vm-text-h1)',
        color: 'var(--vm-night-900)'
      }
    }, "Em vez de \u201CTudo bem com voc\xEA?\u201D, pergunte ", React.createElement("em", {
      style: {
        fontStyle: 'italic'
      }
    }, "\u201CComo voc\xEA tem dormido?\u201D")), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-lead)',
        lineHeight: 1.5,
        textWrap: 'pretty'
      }
    }, "E fa\xE7a isso da forma mais natural poss\xEDvel, como uma conversa."), React.createElement("div", {
      style: {
        marginTop: 12,
        paddingTop: 24,
        borderTop: '1px solid var(--vm-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, "Prefere conversar agora?"), React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        alignItems: 'center'
      }
    }, React.createElement(Button, {
      variant: "secondary",
      href: "https://wa.me/5511946617173?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Vocemed%20e%20gostaria%20de%20saber%20mais.",
      target: "_blank",
      rel: "noopener"
    }, "Conversar pelo WhatsApp"), React.createElement("a", {
      href: "mailto:contato@vocemed.com",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--vm-night-900)',
        fontWeight: 500,
        minHeight: 44
      }
    }, React.createElement(Icon, {
      name: "mail",
      size: 18
    }), "contato@vocemed.com")))), React.createElement("div", {
      style: {
        background: 'var(--vm-surface)',
        border: '1px solid var(--vm-border)',
        borderRadius: 'var(--vm-radius-lg)',
        boxShadow: 'var(--vm-shadow-card)',
        padding: 'clamp(24px, 4vw, 40px)'
      }
    }, status === 'done' ? React.createElement("div", {
      role: "status",
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
        padding: '24px 0'
      }
    }, React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'var(--vm-dawn-100)',
        color: 'var(--vm-night-900)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, React.createElement(Icon, {
      name: "check",
      size: 24
    })), React.createElement("p", {
      style: {
        margin: 0,
        font: '500 var(--vm-text-h3)/1.35 var(--vm-font-serif)',
        color: 'var(--vm-night-900)'
      }
    }, "Recebemos seu pedido. Entraremos em contato em breve.")) : React.createElement("form", {
      noValidate: true,
      onSubmit: submit,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, React.createElement("div", {
      className: "kit-grid-2",
      style: {
        gap: 16
      }
    }, React.createElement(TextField, {
      label: "Nome",
      value: v.nome,
      onChange: set('nome'),
      required: true,
      error: err.nome,
      autoComplete: "name"
    }), React.createElement(TextField, {
      label: "E-mail corporativo",
      type: "email",
      value: v.email,
      onChange: set('email'),
      required: true,
      error: err.email,
      autoComplete: "email"
    }), React.createElement(TextField, {
      label: "WhatsApp",
      type: "tel",
      value: v.whats,
      onChange: set('whats'),
      required: true,
      error: err.whats,
      autoComplete: "tel"
    }), React.createElement(TextField, {
      label: "Empresa",
      value: v.empresa,
      onChange: set('empresa'),
      required: true,
      error: err.empresa,
      autoComplete: "organization"
    })), React.createElement(ChipGroup, {
      legend: "Perfil",
      name: "perfil",
      options: ['Medicina do trabalho', 'Empresa', 'Outro'],
      value: perfil,
      onChange: setPerfil,
      required: true,
      error: err.perfil
    }), React.createElement(ChipGroup, {
      legend: "N\xFAmero de trabalhadores",
      name: "faixa",
      options: ['Até 100', '101 a 500', '501 a 2.000', 'Acima de 2.000'],
      value: faixa,
      onChange: setFaixa
    }), React.createElement(ChipGroup, {
      legend: "Interesse",
      name: "interesse",
      multi: true,
      exclusiveOption: "Ainda n\xE3o sei / outros",
      options: ['Avaliação NR-1 com sono', 'Palestras corporativas', 'Programas de sono', 'Ainda não sei / outros'],
      value: interesse,
      onChange: setInteresse
    }), React.createElement(TextField, {
      label: "Mensagem",
      optional: true,
      multiline: true,
      value: v.msg,
      onChange: set('msg')
    }), React.createElement(ConsentCheckbox, {
      checked: ok,
      onChange: e => setOk(e.target.checked),
      error: err.ok
    }, "Autorizo a Vocemed a usar estes dados para entrar em contato sobre a demonstra\xE7\xE3o, conforme a ", React.createElement("a", {
      href: "privacidade.html",
      target: "_blank",
      rel: "noopener"
    }, "Pol\xEDtica de privacidade"), "."), status === 'error' ? React.createElement("p", {
      role: "alert",
      style: {
        margin: 0,
        color: 'var(--vm-error)'
      }
    }, "N\xE3o foi poss\xEDvel enviar agora. Tente de novo ou fale com a gente pelo WhatsApp.") : null, React.createElement("div", null, React.createElement(Button, {
      type: "submit",
      disabled: status === 'sending'
    }, status === 'sending' ? 'Enviando…' : 'Solicitar demonstração'))))));
  }
  Object.assign(window, {
    KitDemoForm
  });
})();
function KitApp() {
  const {
    SiteHeader,
    SiteFooter,
    WhatsAppButton
  } = window.VocemedDesignSystem_361ae9;
  const [scrolled, setScrolled] = React.useState(false);
  const [perfil, setPerfil] = React.useState('');
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', f, {
      passive: true
    });
    return () => window.removeEventListener('scroll', f);
  }, []);
  const nav = href => {
    if (href === '#top') return window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const el = document.querySelector(href);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 64,
      behavior: 'smooth'
    });
  };
  const pick = p => {
    setPerfil(p);
    nav('#demonstracao');
  };
  return React.createElement(React.Fragment, null, React.createElement(SiteHeader, {
    scrolled: scrolled,
    onNavigate: nav
  }), React.createElement("main", null, React.createElement(KitHero, {
    onNav: nav
  }), React.createElement(KitNR1, null), React.createElement(KitSleep, null), React.createElement(KitSolution, null), React.createElement(KitHow, {
    onNav: nav
  }), React.createElement(KitServices, null), React.createElement(KitAuthority, null), React.createElement(KitAudience, {
    onPick: pick
  }), React.createElement(KitDemoForm, {
    perfil: perfil,
    setPerfil: setPerfil
  })), React.createElement(WhatsAppButton, {
    href: "https://wa.me/5511946617173?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Vocemed%20e%20gostaria%20de%20saber%20mais."
  }), React.createElement(SiteFooter, {
    references: window.VM_CONTENT.references,
    privacyHref: "privacidade.html"
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(KitApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/app.js", error: String((e && e.message) || e) }); }

// site/content.js
try { (() => {
window.VM_CONTENT = {
  references: ['Ministério da Previdência Social. Previdência Social concede 546.254 benefícios por incapacidade temporária por transtornos mentais e comportamentais. Agência Gov; jan. 2026.', 'ONU Brasil / OIT. Brasil: afastamentos por problemas de saúde mental aumentam 134% (dados do Observatório de Segurança e Saúde no Trabalho, SmartLab MPT/OIT). 2025. https://brasil.un.org/pt-br/292926', 'Bassetti CLA, Welter LS, Montes-Martinez M, et al. Epidemiology and economic burden of sleep disorders in Europe. Eur J Neurol. 2026;33(2):e70463. https://doi.org/10.1111/ene.70463', 'Castro LS, Poyares D, Leger D, Bittencourt L, Tufik S. Objective prevalence of insomnia in the São Paulo, Brazil epidemiologic sleep study. Ann Neurol. 2013;74(4):537-46. https://doi.org/10.1002/ana.23945', 'Uehli K, Mehta AJ, Miedinger D, et al. Sleep problems and work injuries: a systematic review and meta-analysis. Sleep Med Rev. 2014;18(1):61-73. https://doi.org/10.1016/j.smrv.2013.01.004', 'Tufik S, Santos-Silva R, Taddei JA, Bittencourt LR. Obstructive sleep apnea syndrome in the Sao Paulo Epidemiologic Sleep Study. Sleep Med. 2010;11(5):441-6. https://doi.org/10.1016/j.sleep.2009.10.005', 'Kleinman NL, Brook RA, Doan JF, Melkonian AK, Baran RW. Health benefit costs and absenteeism due to insomnia from the employer\'s perspective: a retrospective, case-control, database study. J Clin Psychiatry. 2009;70(8):1098-104. https://doi.org/10.4088/JCP.08m04264', 'Swanson LM, Arnedt JT, Rosekind MR, Belenky G, Balkin TJ, Drake C. Sleep disorders and work performance: findings from the 2008 National Sleep Foundation Sleep in America poll. J Sleep Res. 2011;20(3):487-94. https://doi.org/10.1111/j.1365-2869.2010.00890.x', 'Ministério da Saúde. Vigitel Brasil: vigilância de fatores de risco e proteção para doenças crônicas por inquérito telefônico. Módulo sono (duração do sono < 6 h: 20,2% dos adultos nas capitais e no DF).', 'Kessler RC, Berglund PA, Coulouvrat C, et al. Insomnia and the performance of US workers: results from the America Insomnia Survey. Sleep. 2011;34(9):1161-71. https://doi.org/10.5665/SLEEP.1230', 'Meijer MCN, Middelburg RA, Arnold IA, et al. Insomnia as a risk factor for the development of depression and anxiety in primary care: a matched population-based cohort study. Fam Pract. 2026;43:1-8. https://doi.org/10.1093/fampra/cmag019'],
  leaveSeries: {
    source: 'Ministério da Previdência Social (2023–2025); SmartLab MPT/OIT (2022)',
    years: [{
      year: '2022',
      value: 201000,
      label: '≈ 201 mil'
    }, {
      year: '2023',
      value: 283471,
      label: '283 mil'
    }, {
      year: '2024',
      value: 472328,
      label: '472 mil'
    }, {
      year: '2025',
      value: 546254,
      label: '546 mil'
    }]
  },
  nr1Duties: {
    title: 'O que muda para as empresas',
    items: [{
      icon: 'clipboard-check',
      text: 'Avaliar os riscos psicossociais dos trabalhadores.'
    }, {
      icon: 'heart-handshake',
      text: 'Incluir a saúde mental nas políticas da empresa.'
    }, {
      icon: 'search-check',
      text: 'Estar preparada para auditorias e fiscalizações.'
    }],
    source: 'NR-1, Ministério do Trabalho e Emprego'
  },
  nr1Stats: [{
    number: '26/05/2026',
    text: 'Riscos psicossociais passam a fazer parte do PGR pela NR-1',
    source: 'NR-1, Ministério do Trabalho e Emprego'
  }, {
    number: '546.254',
    text: 'benefícios do INSS por transtornos mentais e comportamentais em 2025',
    source: 'Ministério da Previdência Social, 2026'
  }],
  sleepCards: [{
    label: 'No organismo',
    groups: [{
      title: 'Dormir mal afeta',
      chips: [['brain', 'Memória'], ['scale', 'Julgamento'], ['lightbulb', 'Raciocínio'], ['smile', 'Equilíbrio emocional']]
    }, {
      title: 'E aumenta o risco de',
      chips: [['droplet', 'Diabetes'], ['brain-cog', 'Demência'], ['heart-pulse', 'Problemas cardíacos'], ['gauge', 'Hipertensão arterial']]
    }]
  }, {
    label: 'Doenças do sono são muito comuns',
    stats: [{
      number: '15%',
      text: 'dos adultos de São Paulo têm insônia',
      source: 'Castro et al., 2013'
    }, {
      number: '33%',
      text: 'têm apneia obstrutiva do sono',
      source: 'Tufik et al., 2010'
    }, {
      number: '20%',
      text: 'dos adultos dormem < 6h por noite',
      source: 'Vigitel (capitais), Ministério da Saúde'
    }]
  }, {
    label: 'Impacto para a empresa',
    stats: [{
      number: '1,62x',
      text: 'risco de acidente de trabalho',
      source: 'Uehli et al., 2014'
    }, {
      number: '11,3 dias',
      text: 'de produtividade perdidos por ano, por trabalhador com insônia',
      source: 'Kessler et al., 2011'
    }]
  }, {
    label: 'Na empresa',
    stats: [{
      text: 'Quem dorme mal vai trabalhar, mas não rende: é o presenteísmo.',
      highlight: 'presenteísmo',
      source: 'Swanson et al., 2011'
    }, {
      sublabel: 'No plano de saúde',
      number: '2x',
      text: 'custo com benefícios de saúde de quem tem insônia, comparado a quem não tem',
      source: 'Kleinman et al., 2009'
    }]
  }],
  solution: {
    intro: 'A Vocemed leva a expertise de uma médica especialista em sono às empresas que não contam com esse profissional, com um produto diferenciado e capaz de gerar impacto real nas suas atividades.',
    pillars: [{
      icon: 'clipboard-list',
      title: 'Avaliação do sono',
      text: 'O primeiro passo: questionários de sono, que podem ser incluídos na avaliação psicossocial da NR-1. O médico do trabalho recebe um relatório com o resultado para compartilhar com o trabalhador.'
    }, {
      icon: 'calendar-range',
      title: 'Jornada do sono ao longo do ano',
      text: 'Conteúdo de Medicina do Sono produzido por especialista, com gamificação: hábitos de sono mais saudáveis, sinais que indicam um possível problema médico e orientação sobre como agir.'
    }, {
      icon: 'presentation',
      title: 'Encontros',
      text: 'Palestras, workshops presenciais e encontros online, com muita interação com os trabalhadores: para sensibilizar sobre o sono, melhorar hábitos e acompanhar a mudança. Para as empresas que desejam ir além.'
    }]
  },
  steps: [{
    icon: 'smartphone',
    text: 'O trabalhador recebe o convite no celular, pelo WhatsApp ou por outra forma de comunicação da empresa, para acessar os questionários.'
  }, {
    icon: 'mic',
    text: 'A Vocemed conduz a avaliação como uma conversa: faz as perguntas de maneira interativa e o trabalhador responde falando. A voz reduz a fricção no preenchimento.'
  }, {
    icons: ['speech', 'arrow-right', 'clipboard-list'],
    text: 'Junto com os fatores psicossociais, entram as perguntas sobre sono.\nAssim, a avaliação fica mais completa.'
  }, {
    icon: 'users',
    text: 'Os dados são tratados com confidencialidade e segurança: os resultados individuais ficam sob sigilo médico, com a medicina do trabalho; a empresa recebe somente dados agregados, prontos para o PGR.'
  }],
  steps3: [{
    icon: 'smartphone',
    text: 'O trabalhador recebe o convite no celular, pelo WhatsApp ou por outra forma de comunicação da empresa.'
  }, {
    icons: ['speech', 'arrow-right', 'clipboard-list'],
    text: 'A Vocemed conduz a avaliação como uma conversa: as perguntas psicossociais e as de sono, e o trabalhador responde falando.'
  }, {
    icon: 'users',
    text: 'Os dados são tratados com confidencialidade e segurança: os resultados individuais ficam sob sigilo médico, com a medicina do trabalho; a empresa recebe somente dados agregados, prontos para o PGR.'
  }],
  conversation: [{
    from: 'vocemed',
    text: 'Olá! Esta é a avaliação de saúde da sua empresa. Você pode responder falando. Vamos começar?'
  }, {
    from: 'worker'
  }, {
    from: 'vocemed',
    text: 'Como você tem dormido nas últimas semanas?'
  }, {
    from: 'worker'
  }],
  talks: ['European Congress of Integrative Medicine', 'IESE Business School', 'Congresso da Fundação ORL USP', 'Faculdade de Direito Mackenzie']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/content.js", error: String((e && e.message) || e) }); }

// ui_kits/website/KitDemoForm.jsx
try { (() => {
function KitDemoForm({
  perfil,
  setPerfil
}) {
  const {
    TextField,
    ChipGroup,
    ConsentCheckbox,
    Button,
    Icon
  } = window.VocemedDesignSystem_361ae9;
  const [v, setV] = React.useState({
    nome: '',
    email: '',
    whats: '',
    empresa: '',
    msg: ''
  });
  const [faixa, setFaixa] = React.useState('');
  const [interesse, setInteresse] = React.useState([]);
  const [ok, setOk] = React.useState(false);
  const [err, setErr] = React.useState({});
  const [status, setStatus] = React.useState('idle');
  const set = k => e => setV({
    ...v,
    [k]: e.target.value
  });
  const submit = e => {
    e.preventDefault();
    const x = {};
    if (!v.nome.trim()) x.nome = 'Preencha seu nome.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) x.email = 'Informe um e-mail válido.';
    if (v.whats.replace(/\D/g, '').length < 10) x.whats = 'Informe um WhatsApp com DDD.';
    if (!v.empresa.trim()) x.empresa = 'Preencha o nome da empresa.';
    if (!perfil) x.perfil = 'Escolha um perfil.';
    if (!ok) x.ok = 'Para continuar, autorize o contato.';
    setErr(x);
    if (Object.keys(x).length) return;
    setStatus('sending');
    setTimeout(() => setStatus('done'), 900);
  };
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "demonstracao",
    tone: "soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-demo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-demo-intro",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--vm-text-h1)',
      color: 'var(--vm-night-900)'
    }
  }, "Solicite uma demonstra\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      textWrap: 'pretty'
    }
  }, "Conte um pouco sobre sua empresa e entraremos em contato."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      paddingTop: 24,
      borderTop: '1px solid var(--vm-border)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, "Prefere conversar agora?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "https://wa.me/5511946617173?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Vocemed%20e%20gostaria%20de%20saber%20mais.",
    target: "_blank",
    rel: "noopener"
  }, "Conversar pelo WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:contato@vocemed.com",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--vm-night-900)',
      fontWeight: 500,
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), "contato@vocemed.com")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--vm-surface)',
      border: '1px solid var(--vm-border)',
      borderRadius: 'var(--vm-radius-lg)',
      boxShadow: 'var(--vm-shadow-card)',
      padding: 'clamp(24px, 4vw, 40px)'
    }
  }, status === 'done' ? /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 16,
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'var(--vm-dawn-100)',
      color: 'var(--vm-night-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 24
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '500 var(--vm-text-h3)/1.35 var(--vm-font-serif)',
      color: 'var(--vm-night-900)'
    }
  }, "Recebemos seu pedido. Entraremos em contato em breve.")) : /*#__PURE__*/React.createElement("form", {
    noValidate: true,
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-grid-2",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Nome",
    value: v.nome,
    onChange: set('nome'),
    required: true,
    error: err.nome,
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "E-mail corporativo",
    type: "email",
    value: v.email,
    onChange: set('email'),
    required: true,
    error: err.email,
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "WhatsApp",
    type: "tel",
    value: v.whats,
    onChange: set('whats'),
    required: true,
    error: err.whats,
    autoComplete: "tel"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Empresa",
    value: v.empresa,
    onChange: set('empresa'),
    required: true,
    error: err.empresa,
    autoComplete: "organization"
  })), /*#__PURE__*/React.createElement(ChipGroup, {
    legend: "Perfil",
    name: "perfil",
    options: ['Medicina do trabalho', 'Empresa', 'Outro'],
    value: perfil,
    onChange: setPerfil,
    required: true,
    error: err.perfil
  }), /*#__PURE__*/React.createElement(ChipGroup, {
    legend: "N\xFAmero de trabalhadores",
    name: "faixa",
    options: ['Até 100', '101 a 500', '501 a 2.000', 'Acima de 2.000'],
    value: faixa,
    onChange: setFaixa
  }), /*#__PURE__*/React.createElement(ChipGroup, {
    legend: "Interesse",
    name: "interesse",
    multi: true,
    exclusiveOption: "Ainda n\xE3o sei / outros",
    options: ['Avaliação NR-1 com sono', 'Palestras corporativas', 'Programas de sono', 'Ainda não sei / outros'],
    value: interesse,
    onChange: setInteresse
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Mensagem",
    optional: true,
    multiline: true,
    value: v.msg,
    onChange: set('msg')
  }), /*#__PURE__*/React.createElement(ConsentCheckbox, {
    checked: ok,
    onChange: e => setOk(e.target.checked),
    error: err.ok
  }, "Autorizo a ", /*#__PURE__*/React.createElement(VM, null), " a usar estes dados para entrar em contato sobre a demonstra\xE7\xE3o, conforme a ", /*#__PURE__*/React.createElement("a", {
    href: "#privacidade"
  }, "Pol\xEDtica de privacidade"), "."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: status === 'sending'
  }, status === 'sending' ? 'Enviando…' : 'Solicitar demonstração'))))));
}
Object.assign(window, {
  KitDemoForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/KitDemoForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/KitLayout.jsx
try { (() => {
function KitSection({
  id,
  tone = 'paper',
  children,
  style
}) {
  const bg = {
    paper: 'var(--vm-paper)',
    surface: 'var(--vm-surface)',
    soft: 'var(--vm-night-100)',
    dark: 'var(--vm-night-950)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: tone === 'dark' ? 'vm-dark' : undefined,
    style: {
      background: bg,
      color: tone === 'dark' ? '#FFFFFF' : 'var(--vm-ink)',
      padding: 'var(--vm-section-y) 0',
      scrollMarginTop: 72,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, children));
}
function VM({
  dark
}) {
  return /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700,
      color: dark ? '#FFFFFF' : 'var(--vm-night-900)'
    }
  }, "Vocemed");
}
function vmText(s, dark) {
  return typeof s === 'string' && s.includes('Vocemed') ? s.split('Vocemed').flatMap((p, i) => i ? [/*#__PURE__*/React.createElement(VM, {
    key: i,
    dark: dark
  }), p] : [p]) : s;
}
function KitHero({
  onNav
}) {
  const {
    Button,
    Wave
  } = window.VocemedDesignSystem_361ae9;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "vm-dark",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--vm-night-950)',
      color: '#FFFFFF',
      padding: 'clamp(72px, 10vw, 136px) 0 clamp(64px, 9vw, 128px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap kit-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--vm-text-display)',
      textWrap: 'balance'
    }
  }, "Como seus trabalhadores ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "dormiram"), " esta noite?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      color: 'var(--vm-night-200)',
      maxWidth: 'var(--vm-measure)',
      textWrap: 'pretty'
    }
  }, "A avalia\xE7\xE3o de riscos psicossociais da NR-1, respondida por voz e ampliada para o sono. Para servi\xE7os de medicina do trabalho e empresas. Criada por uma m\xE9dica especialista em sono."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "dark",
    href: "#demonstracao",
    onClick: e => {
      e.preventDefault();
      onNav('#demonstracao');
    }
  }, "Solicite uma demonstra\xE7\xE3o"), /*#__PURE__*/React.createElement(Button, {
    tone: "dark",
    variant: "secondary",
    href: "#servicos",
    onClick: e => {
      e.preventDefault();
      onNav('#servicos');
    }
  }, "Palestras e programas de sono"))), /*#__PURE__*/React.createElement("div", {
    className: "kit-hero-wave",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-hero-photo"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-foto",
    shape: "rounded",
    radius: "24",
    src: "../../assets/photos/hero-foto.jpg",
    placeholder: "Foto: trabalhador respondendo pelo celular"
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: -24,
      bottom: -20,
      width: '60%',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    height: "auto",
    opacity: 0.5,
    style: {
      width: '100%',
      height: 'auto'
    }
  })))));
}
Object.assign(window, {
  KitSection,
  KitHero,
  VM,
  vmText
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/KitLayout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/KitSections-antes.jsx
try { (() => {
function KitLeaveChart({
  data
}) {
  const ys = data.years,
    n = ys.length,
    max = Math.max(...ys.map(y => y.value));
  const pt = ys.map((y, i) => ({
    ...y,
    x: 8 + i * (84 / (n - 1)),
    y: 88 - y.value / max * 66
  }));
  const line = pt.map(p => p.x + ',' + p.y).join(' ');
  const area = '8,100 ' + line + ' 92,100';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      padding: 24,
      borderRadius: 'var(--vm-radius-md)',
      background: 'var(--vm-surface)',
      border: '1px solid var(--vm-border)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 'var(--vm-text-small)',
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, "Benef\xEDcios do INSS por transtornos mentais e comportamentais, por ano"), /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": ys.map(y => y.year + ': ' + y.label).join(', '),
    style: {
      position: 'relative',
      height: 150
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: "var(--vm-error)",
    opacity: "0.08"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: "var(--vm-error)",
    strokeWidth: "3",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  })), pt.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.year
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: p.x + '%',
      top: p.y + '%',
      width: i === n - 1 ? 12 : 9,
      height: i === n - 1 ? 12 : 9,
      borderRadius: '50%',
      background: 'var(--vm-surface)',
      border: '3px solid var(--vm-error)',
      transform: 'translate(-50%,-50%)',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: p.x + '%',
      top: p.y + '%',
      transform: 'translate(-50%, calc(-100% - 12px))',
      whiteSpace: 'nowrap',
      font: '500 ' + (i === n - 1 ? '22px' : '17px') + '/1 var(--vm-font-serif)',
      color: i === n - 1 ? 'var(--vm-error)' : 'var(--vm-night-900)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 20,
      borderTop: '1px solid var(--vm-border)',
      paddingTop: 8
    }
  }, pt.map(p => /*#__PURE__*/React.createElement("span", {
    key: p.year,
    style: {
      position: 'absolute',
      left: p.x + '%',
      transform: 'translateX(-50%)',
      fontSize: 'var(--vm-text-small)',
      color: 'var(--vm-ink-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.year))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vm-text-micro)',
      color: 'var(--vm-ink-muted)'
    }
  }, "Fonte: ", data.source));
}
function KitDuties({
  data
}) {
  const {
    Icon
  } = window.VocemedDesignSystem_361ae9;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderRadius: 'var(--vm-radius-md)',
      background: 'var(--vm-surface)',
      border: '1px solid var(--vm-border)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-small)',
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, data.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, data.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.icon,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--vm-dawn-100)',
      color: 'var(--vm-night-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 18px/1.35 var(--vm-font-serif)',
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, it.text)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vm-text-micro)',
      color: 'var(--vm-ink-muted)'
    }
  }, "Fonte: ", data.source));
}
function KitNR1() {
  const {
    Eyebrow,
    StatCard,
    Icon
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT;
  const [law] = C.nr1Stats;
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  };
  const lbl = {
    margin: 0,
    fontSize: 'var(--vm-text-small)',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--vm-ink-muted)'
  };
  const lead = {
    margin: 0,
    font: '500 var(--vm-text-h3)/1.4 var(--vm-font-serif)',
    color: 'var(--vm-night-900)',
    textWrap: 'pretty'
  };
  return /*#__PURE__*/React.createElement(KitSection, {
    tone: "paper",
    style: {
      padding: 'clamp(48px, 6vw, 72px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-cause"
  }, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("p", {
    style: lbl
  }, "O problema"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "Os afastamentos por sa\xFAde mental mais que dobraram em quatro anos:"), /*#__PURE__*/React.createElement(KitLeaveChart, {
    data: C.leaveSeries
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-cause-arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("p", {
    style: lbl
  }, "A resposta da lei"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "Esse cen\xE1rio \xE9 a base da NR-1, que vale desde 26 de maio de 2026."), /*#__PURE__*/React.createElement(KitDuties, {
    data: C.nr1Duties
  }))));
}
function KitSleepCard({
  card
}) {
  const {
    Icon
  } = window.VocemedDesignSystem_361ae9;
  const box = {
    margin: 0,
    padding: 24,
    borderRadius: 'var(--vm-radius-md)',
    background: 'var(--vm-surface)',
    border: '1px solid var(--vm-border)',
    boxShadow: 'var(--vm-shadow-card)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  };
  const lbl = {
    margin: 0,
    fontSize: 'var(--vm-text-eyebrow)',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--vm-ink-muted)'
  };
  return /*#__PURE__*/React.createElement("figure", {
    style: box
  }, /*#__PURE__*/React.createElement("p", {
    style: lbl
  }, card.label), card.groups ? card.groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: g.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: gi ? 16 : 0,
      borderTop: gi ? '1px solid var(--vm-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '500 20px/1.2 var(--vm-font-serif)',
      color: 'var(--vm-night-900)'
    }
  }, g.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, g.chips.map(([ic, t]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px 6px 10px',
      borderRadius: 999,
      background: gi ? 'var(--vm-paper)' : 'var(--vm-dawn-100)',
      border: gi ? '1px solid var(--vm-border)' : '1px solid transparent',
      fontSize: 'var(--vm-text-small)',
      fontWeight: 500,
      color: 'var(--vm-night-900)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: gi ? 'var(--vm-error)' : 'var(--vm-dawn-600)'
  }), t))))) : card.stats.map((st, i) => /*#__PURE__*/React.createElement("div", {
    key: st.number || st.text,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      paddingTop: i ? 16 : 0,
      borderTop: i ? '1px solid var(--vm-border)' : 'none'
    }
  }, st.sublabel ? /*#__PURE__*/React.createElement("p", {
    style: {
      ...lbl,
      marginBottom: 10
    }
  }, st.sublabel) : null, st.number ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 calc(var(--vm-text-stat) * 0.8)/1 var(--vm-font-serif)',
      letterSpacing: '-0.01em',
      color: 'var(--vm-night-900)',
      fontVariantNumeric: 'lining-nums'
    }
  }, st.number) : null, /*#__PURE__*/React.createElement("span", {
    style: st.number ? {
      fontSize: 'var(--vm-text-body)',
      lineHeight: 'var(--vm-leading-body)',
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    } : {
      font: '500 20px/1.35 var(--vm-font-serif)',
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, st.highlight ? st.text.split(st.highlight).flatMap((part, k) => k ? [/*#__PURE__*/React.createElement("em", {
    key: k,
    style: {
      fontStyle: 'italic',
      color: 'var(--vm-dawn-600)'
    }
  }, st.highlight), part] : [part]) : st.text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vm-text-micro)',
      color: 'var(--vm-ink-muted)'
    }
  }, "Fonte: ", st.source))));
}
function KitSleep() {
  const {
    Eyebrow,
    StatCard
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT;
  return /*#__PURE__*/React.createElement(KitSection, {
    tone: "soft"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 'var(--vm-measure)',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Sono & Sa\xFAde mental"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '500 var(--vm-text-h3)/1.4 var(--vm-font-serif)',
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, "No consult\xF3rio, o sono costuma ser das primeiras coisas a mudar quando a sa\xFAde mental vai mal. A pesquisa mostra o mesmo caminho: a ins\xF4nia aumenta o risco de desenvolver depress\xE3o e ansiedade (Meijer et al., 2026).")), /*#__PURE__*/React.createElement("div", {
    className: "kit-grid-4",
    style: {
      alignItems: 'start'
    }
  }, C.sleepCards.map(card => /*#__PURE__*/React.createElement(KitSleepCard, {
    key: card.label,
    card: card
  }))));
}
function KitSolution() {
  const {
    Eyebrow,
    Icon
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT.solution;
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "solucao",
    tone: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 820,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "A solu\xE7\xE3o Vocemed"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-h2)',
      lineHeight: 1.2,
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, "Dormir bem se aprende, e falar de sono n\xE3o tem estigma. Por isso o sono \xE9 uma ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "porta de entrada"), " para cuidar da sa\xFAde mental."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--vm-measure)',
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, C.intro)), /*#__PURE__*/React.createElement("ul", {
    className: "kit-grid-3",
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, C.pillars.map(p => /*#__PURE__*/React.createElement("li", {
    key: p.title,
    style: {
      padding: 24,
      borderRadius: 'var(--vm-radius-md)',
      background: 'var(--vm-surface)',
      border: '1px solid var(--vm-border)',
      boxShadow: 'var(--vm-shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--vm-dawn-100)',
      color: 'var(--vm-night-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      font: '500 20px/1.25 var(--vm-font-serif)',
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-body)',
      lineHeight: 'var(--vm-leading-body)',
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, p.text)))));
}
function KitHow({
  onNav
}) {
  const {
    Eyebrow,
    Step,
    Button,
    Wave,
    Icon
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT;
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "como-funciona",
    tone: "soft"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 820,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Como funciona"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-h2)',
      lineHeight: 1.2,
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, "Toda a avalia\xE7\xE3o, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "por voz"), "."), /*#__PURE__*/React.createElement(Wave, {
    height: 36,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--vm-measure)',
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, "A Vocemed foi criada por uma otorrinolaringologista, m\xE9dica que cuida da voz e do sono e sabe que ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      fontSize: '1.1em',
      color: 'var(--vm-night-900)'
    }
  }, "falar \xE9 mais natural do que preencher um formul\xE1rio"), ". Por isso, a avalia\xE7\xE3o do sono e toda a avalia\xE7\xE3o psicossocial da NR-1 s\xE3o feitas por voz.")), /*#__PURE__*/React.createElement("ol", {
    className: "kit-grid-4",
    style: {
      margin: 0,
      padding: 0
    }
  }, C.steps.map((s, i) => s.icons ? /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1.5px solid var(--vm-night-600)',
      color: 'var(--vm-night-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '500 1.125rem/1 var(--vm-font-serif)',
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, s.icons.map(nm => /*#__PURE__*/React.createElement(Icon, {
    key: nm,
    name: nm,
    size: nm === 'arrow-right' ? 18 : 24,
    color: nm === 'arrow-right' ? 'var(--vm-dawn-600)' : 'var(--vm-night-900)'
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-body)',
      lineHeight: 'var(--vm-leading-body)',
      color: 'var(--vm-ink)',
      textWrap: 'pretty',
      whiteSpace: 'pre-line'
    }
  }, s.text)) : /*#__PURE__*/React.createElement(Step, {
    key: i,
    n: i + 1,
    icon: s.icon
  }, s.text))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: '12px 24px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--vm-ink-muted)',
      textWrap: 'pretty'
    }
  }, "Veja os instrumentos e os relat\xF3rios na demonstra\xE7\xE3o."), /*#__PURE__*/React.createElement(Button, {
    href: "#demonstracao",
    onClick: e => {
      e.preventDefault();
      onNav('#demonstracao');
    }
  }, "Solicite uma demonstra\xE7\xE3o")));
}
function KitVoice() {
  const {
    Wave,
    ConversationMockup
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT;
  return /*#__PURE__*/React.createElement(KitSection, {
    tone: "surface",
    style: {
      borderTop: '1px solid var(--vm-border)',
      borderBottom: '1px solid var(--vm-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 24,
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    height: 32
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--vm-text-h2)',
      color: 'var(--vm-night-900)'
    }
  }, "Falar \xE9 mais natural do que preencher."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, "Um formul\xE1rio com uma lista longa de perguntas e uma escala de 1 a 5 n\xE3o \xE9 acess\xEDvel para todos os p\xFAblicos, e muitos respondem com pressa, quando respondem. A intera\xE7\xE3o por voz alcan\xE7a todos.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440,
      margin: '48px auto 0'
    }
  }, /*#__PURE__*/React.createElement(ConversationMockup, {
    messages: C.conversation
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-grid-3",
    style: {
      marginTop: 48
    }
  }, [['voz-producao', 'Na linha de produção'], ['voz-obra', 'No canteiro de obras'], ['voz-noite', 'No turno da noite']].map(([id, cap]) => /*#__PURE__*/React.createElement("figure", {
    key: id,
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: id + '-antes',
    shape: "rounded",
    radius: "16",
    src: '../../assets/photos/' + id + '.jpg',
    placeholder: 'Foto: trabalhador ' + cap.toLowerCase()
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 'var(--vm-text-small)',
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, cap)))));
}
Object.assign(window, {
  KitNR1,
  KitSleep,
  KitSolution,
  KitHow,
  KitVoice
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/KitSections-antes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/KitSections.jsx
try { (() => {
function KitLeaveChart({
  data
}) {
  const ys = data.years,
    n = ys.length,
    max = Math.max(...ys.map(y => y.value));
  const pt = ys.map((y, i) => ({
    ...y,
    x: 8 + i * (84 / (n - 1)),
    y: 88 - y.value / max * 66
  }));
  const line = pt.map(p => p.x + ',' + p.y).join(' ');
  const area = '8,100 ' + line + ' 92,100';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      padding: 24,
      borderRadius: 'var(--vm-radius-md)',
      background: 'var(--vm-surface)',
      border: '1px solid var(--vm-border)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 'var(--vm-text-small)',
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, "Benef\xEDcios do INSS por transtornos mentais e comportamentais, por ano"), /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": ys.map(y => y.year + ': ' + y.label).join(', '),
    style: {
      position: 'relative',
      height: 150
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: "var(--vm-error)",
    opacity: "0.08"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: "var(--vm-error)",
    strokeWidth: "3",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  })), pt.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.year
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: p.x + '%',
      top: p.y + '%',
      width: i === n - 1 ? 12 : 9,
      height: i === n - 1 ? 12 : 9,
      borderRadius: '50%',
      background: 'var(--vm-surface)',
      border: '3px solid var(--vm-error)',
      transform: 'translate(-50%,-50%)',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: p.x + '%',
      top: p.y + '%',
      transform: 'translate(-50%, calc(-100% - 12px))',
      whiteSpace: 'nowrap',
      font: '500 ' + (i === n - 1 ? '22px' : '17px') + '/1 var(--vm-font-serif)',
      color: i === n - 1 ? 'var(--vm-error)' : 'var(--vm-night-900)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 20,
      borderTop: '1px solid var(--vm-border)',
      paddingTop: 8
    }
  }, pt.map(p => /*#__PURE__*/React.createElement("span", {
    key: p.year,
    style: {
      position: 'absolute',
      left: p.x + '%',
      transform: 'translateX(-50%)',
      fontSize: 'var(--vm-text-small)',
      color: 'var(--vm-ink-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.year))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vm-text-micro)',
      color: 'var(--vm-ink-muted)'
    }
  }, "Fonte: ", data.source));
}
function KitDuties({
  data
}) {
  const {
    Icon
  } = window.VocemedDesignSystem_361ae9;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderRadius: 'var(--vm-radius-md)',
      background: 'var(--vm-surface)',
      border: '1px solid var(--vm-border)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-small)',
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, data.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, data.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.icon,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--vm-dawn-100)',
      color: 'var(--vm-night-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 18px/1.35 var(--vm-font-serif)',
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, it.text)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vm-text-micro)',
      color: 'var(--vm-ink-muted)'
    }
  }, "Fonte: ", data.source));
}
function KitNR1() {
  const {
    Eyebrow,
    StatCard,
    Icon
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT;
  const [law] = C.nr1Stats;
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  };
  const lbl = {
    margin: 0,
    fontSize: 'var(--vm-text-small)',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--vm-ink-muted)'
  };
  const lead = {
    margin: 0,
    font: '500 var(--vm-text-h3)/1.4 var(--vm-font-serif)',
    color: 'var(--vm-night-900)',
    textWrap: 'pretty'
  };
  return /*#__PURE__*/React.createElement(KitSection, {
    tone: "paper",
    style: {
      padding: 'clamp(48px, 6vw, 72px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-banner",
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/cadeira-vazia.jpg",
    alt: "Cadeira de escrit\xF3rio vazia",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '40% 60%',
      borderRadius: 16,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-cause"
  }, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("p", {
    style: lbl
  }, "O problema"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "Os afastamentos por sa\xFAde mental mais que dobraram em quatro anos:"), /*#__PURE__*/React.createElement(KitLeaveChart, {
    data: C.leaveSeries
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-cause-arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("p", {
    style: lbl
  }, "A resposta da lei"), /*#__PURE__*/React.createElement("p", {
    style: lead
  }, "Esse cen\xE1rio \xE9 a base da NR-1, que vale desde 26 de maio de 2026."), /*#__PURE__*/React.createElement(KitDuties, {
    data: C.nr1Duties
  }))));
}
function KitSleepCard({
  card
}) {
  const {
    Icon
  } = window.VocemedDesignSystem_361ae9;
  const box = {
    margin: 0,
    padding: 24,
    borderRadius: 'var(--vm-radius-md)',
    background: 'var(--vm-surface)',
    border: '1px solid var(--vm-border)',
    boxShadow: 'var(--vm-shadow-card)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  };
  const lbl = {
    margin: 0,
    fontSize: 'var(--vm-text-eyebrow)',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--vm-ink-muted)'
  };
  return /*#__PURE__*/React.createElement("figure", {
    style: box
  }, /*#__PURE__*/React.createElement("p", {
    style: lbl
  }, card.label), card.groups ? card.groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: g.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: gi ? 16 : 0,
      borderTop: gi ? '1px solid var(--vm-border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '500 20px/1.2 var(--vm-font-serif)',
      color: 'var(--vm-night-900)'
    }
  }, g.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, g.chips.map(([ic, t]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px 6px 10px',
      borderRadius: 999,
      background: gi ? 'var(--vm-paper)' : 'var(--vm-dawn-100)',
      border: gi ? '1px solid var(--vm-border)' : '1px solid transparent',
      fontSize: 'var(--vm-text-small)',
      fontWeight: 500,
      color: 'var(--vm-night-900)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: gi ? 'var(--vm-error)' : 'var(--vm-dawn-600)'
  }), t))))) : card.stats.map((st, i) => /*#__PURE__*/React.createElement("div", {
    key: st.number || st.text,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      paddingTop: i ? 16 : 0,
      borderTop: i ? '1px solid var(--vm-border)' : 'none'
    }
  }, st.sublabel ? /*#__PURE__*/React.createElement("p", {
    style: {
      ...lbl,
      marginBottom: 10
    }
  }, st.sublabel) : null, st.number ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 calc(var(--vm-text-stat) * 0.8)/1 var(--vm-font-serif)',
      letterSpacing: '-0.01em',
      color: 'var(--vm-night-900)',
      fontVariantNumeric: 'lining-nums'
    }
  }, st.number) : null, /*#__PURE__*/React.createElement("span", {
    style: st.number ? {
      fontSize: 'var(--vm-text-body)',
      lineHeight: 'var(--vm-leading-body)',
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    } : {
      font: '500 20px/1.35 var(--vm-font-serif)',
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, st.highlight ? st.text.split(st.highlight).flatMap((part, k) => k ? [/*#__PURE__*/React.createElement("em", {
    key: k,
    style: {
      fontStyle: 'italic',
      color: 'var(--vm-dawn-600)'
    }
  }, st.highlight), part] : [part]) : st.text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--vm-text-micro)',
      color: 'var(--vm-ink-muted)'
    }
  }, "Fonte: ", st.source))));
}
function KitSleep() {
  const {
    Eyebrow,
    StatCard
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT;
  return /*#__PURE__*/React.createElement(KitSection, {
    tone: "soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-split",
    style: {
      alignItems: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 'var(--vm-measure)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Sono & Sa\xFAde mental"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '500 var(--vm-text-h3)/1.4 var(--vm-font-serif)',
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, "No consult\xF3rio, o sono costuma ser das primeiras coisas a mudar quando a sa\xFAde mental vai mal. A pesquisa mostra o mesmo caminho: a ins\xF4nia aumenta o risco de desenvolver depress\xE3o e ansiedade (Meijer et al., 2026).")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      maxWidth: 560,
      width: '100%',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/cama-desarrumada.jpg",
    alt: "Cama desarrumada depois de uma noite mal dormida",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 16,
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "kit-grid-4",
    style: {
      alignItems: 'start'
    }
  }, C.sleepCards.map(card => /*#__PURE__*/React.createElement(KitSleepCard, {
    key: card.label,
    card: card
  }))));
}
function KitSolution() {
  const {
    Eyebrow
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT.solution;
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "solucao",
    tone: "paper",
    style: {
      padding: 'clamp(48px, 6vw, 72px) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "A solu\xE7\xE3o Vocemed"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-h2)',
      lineHeight: 1.2,
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, "Dormir bem se aprende, e falar de sono \xE9 mais leve. Por isso o sono \xE9 uma ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "porta de entrada"), " para cuidar da sa\xFAde mental."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--vm-measure)',
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, vmText(C.intro)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--vm-measure)',
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, "Tudo come\xE7a pela medi\xE7\xE3o: avaliar o sono, junto com a NR-1, mostra onde agir e abre caminho para um ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, "programa que melhora o sono e a sa\xFAde mental"), " das equipes."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--vm-measure)',
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, "Mas, para medir bem, as pessoas precisam responder, e com sinceridade. Por isso, a ", /*#__PURE__*/React.createElement(VM, null), " trocou o formul\xE1rio pela conversa.")));
}
function KitHow({
  onNav
}) {
  const {
    Eyebrow,
    Step,
    ConversationMockup,
    Button,
    Wave,
    Icon
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT;
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "como-funciona",
    tone: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      maxWidth: 820,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Como funciona"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-h2)',
      lineHeight: 1.2,
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, "Medir o sono come\xE7a por uma ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "conversa"), "."), /*#__PURE__*/React.createElement(Wave, {
    height: 36,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--vm-measure)',
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, "Os question\xE1rios s\xE3o os mesmos. O que muda \xE9 a intera\xE7\xE3o."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--vm-measure)',
      fontSize: 'var(--vm-text-body)',
      lineHeight: 'var(--vm-leading-body)',
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, "Criada por uma otorrinolaringologista, m\xE9dica que cuida da voz e do sono e sabe que ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      fontSize: '1.1em',
      color: 'var(--vm-night-900)'
    }
  }, "falar \xE9 mais natural do que preencher um formul\xE1rio"), ".")), /*#__PURE__*/React.createElement("ol", {
    className: "kit-grid-3",
    style: {
      margin: 0,
      padding: 0
    }
  }, C.steps3.map((s, i) => s.icons ? /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1.5px solid var(--vm-night-600)',
      color: 'var(--vm-night-600)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '500 1.125rem/1 var(--vm-font-serif)',
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, s.icons.map(nm => /*#__PURE__*/React.createElement(Icon, {
    key: nm,
    name: nm,
    size: nm === 'arrow-right' ? 18 : 24,
    color: nm === 'arrow-right' ? 'var(--vm-dawn-600)' : 'var(--vm-night-900)'
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-body)',
      lineHeight: 'var(--vm-leading-body)',
      color: 'var(--vm-ink)',
      textWrap: 'pretty',
      whiteSpace: 'pre-line'
    }
  }, vmText(s.text))) : /*#__PURE__*/React.createElement(Step, {
    key: i,
    n: i + 1,
    icon: s.icon
  }, vmText(s.text)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '56px 0 0',
      font: '500 var(--vm-text-h3)/1.3 var(--vm-font-serif)',
      color: 'var(--vm-night-900)',
      textAlign: 'center',
      textWrap: 'balance'
    }
  }, "Acess\xEDvel a todos os p\xFAblicos: ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "qualquer fun\xE7\xE3o, qualquer lugar, qualquer hor\xE1rio.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-grid-3",
    style: {
      marginTop: 24
    }
  }, [['voz-producao', 'Na linha de produção'], ['voz-obra', 'No canteiro de obras'], ['voz-noite', 'No turno da noite']].map(([id, cap]) => /*#__PURE__*/React.createElement("figure", {
    key: id,
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 9'
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: id,
    shape: "rounded",
    radius: "16",
    src: '../../assets/photos/' + id + '.jpg',
    placeholder: 'Foto: trabalhador ' + cap.toLowerCase()
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontSize: 'var(--vm-text-small)',
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, cap)))));
}
function KitExample({
  onNav
}) {
  const {
    Eyebrow,
    ConversationMockup,
    Button
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT;
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "exemplo",
    tone: "soft"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-split",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Na pr\xE1tica"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-h2)',
      lineHeight: 1.2,
      color: 'var(--vm-night-900)',
      textWrap: 'pretty'
    }
  }, "Uma conversa, ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "n\xE3o um formul\xE1rio"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--vm-measure)',
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, "As perguntas chegam uma de cada vez, e o trabalhador responde com a pr\xF3pria voz."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--vm-ink-muted)',
      textWrap: 'pretty'
    }
  }, "Veja os instrumentos e os relat\xF3rios na demonstra\xE7\xE3o."), /*#__PURE__*/React.createElement(Button, {
    href: "#demonstracao",
    onClick: e => {
      e.preventDefault();
      onNav('#demonstracao');
    }
  }, "Solicite uma demonstra\xE7\xE3o"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440,
      width: '100%',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(ConversationMockup, {
    messages: C.conversation
  }))));
}
function KitQuestion() {
  const {
    Wave
  } = window.VocemedDesignSystem_361ae9;
  return /*#__PURE__*/React.createElement(KitSection, {
    tone: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 24,
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    height: 40,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-display)',
      lineHeight: 1.1,
      color: 'var(--vm-night-900)',
      textWrap: 'balance'
    }
  }, "Em vez de \u201CTudo bem com voc\xEA?\u201D, pergunte ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "\u201CComo voc\xEA tem dormido?\u201D")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--vm-measure)',
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      color: 'var(--vm-ink)',
      textWrap: 'pretty'
    }
  }, "E fa\xE7a isso da forma mais natural poss\xEDvel, como uma conversa.")));
}
Object.assign(window, {
  KitNR1,
  KitSleep,
  KitSolution,
  KitHow,
  KitExample,
  KitQuestion
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/KitSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/KitServices.jsx
try { (() => {
function KitServices() {
  const {
    Eyebrow,
    LevelCard,
    Icon
  } = window.VocemedDesignSystem_361ae9;
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "servicos",
    tone: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 'var(--vm-measure)',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Servi\xE7os"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--vm-text-h1)',
      color: 'var(--vm-night-900)'
    }
  }, "Al\xE9m de medir, tomamos a\xE7\xE3o."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-lead)',
      lineHeight: 1.5,
      textWrap: 'pretty'
    }
  }, "A ", /*#__PURE__*/React.createElement(VM, null), " organiza a informa\xE7\xE3o, permitindo que os profissionais de sa\xFAde fa\xE7am o diagn\xF3stico e que a empresa tome a melhor decis\xE3o com base em dados. S\xE3o dois planos: o ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, "Plano Essencial"), ", com a avalia\xE7\xE3o completa, e o ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, "Plano Essencial + Personalizado"), ", que acrescenta palestras e programas sob medida.")), /*#__PURE__*/React.createElement("div", {
    className: "kit-stairs"
  }, /*#__PURE__*/React.createElement(LevelCard, {
    level: "Plano Essencial",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Avalia\xE7\xE3o ", /*#__PURE__*/React.createElement(VM, null)),
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, "Avalia\xE7\xE3o psicossocial da NR-1 e perguntas sobre sono por voz"), "."), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, "Painel estrat\xE9gico para o RH"), ", com a vis\xE3o da empresa como um todo e recortes por \xE1rea e n\xEDvel hier\xE1rquico, sempre com dados agregados."), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, "Relat\xF3rio para o m\xE9dico do trabalho"), " com informa\xE7\xF5es cl\xEDnicas relevantes, e ", /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, "conte\xFAdo b\xE1sico mensal sobre h\xE1bitos saud\xE1veis"), " de sono para os trabalhadores, preparado pela Dra. Samanta.")]
  }), /*#__PURE__*/React.createElement(LevelCard, {
    level: "Plano Essencial + Personalizado",
    highlight: true
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontWeight: 600,
      color: 'var(--vm-night-900)'
    }
  }, "Al\xE9m do Plano Essencial:"), /*#__PURE__*/React.createElement("div", {
    className: "kit-grid-2",
    style: {
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--vm-text-h3)',
      lineHeight: 'var(--vm-leading-snug)',
      fontWeight: 500
    }
  }, "Palestras corporativas"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      lineHeight: 'var(--vm-leading-body)',
      textWrap: 'pretty'
    }
  }, "Um encontro interativo sobre os pilares de um sono saud\xE1vel: o que de fato constr\xF3i boas noites, como monitorar o pr\xF3prio sono, reconhecer sinais de alerta e saber quando buscar ajuda profissional. Sob medida para lideran\xE7a, times de opera\xE7\xE3o ou todos os trabalhadores."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['Linguagem acessível e base científica sólida.', 'Encontro único ou em série, com material de apoio.', 'Ideal para SIPAT, kickoffs, convenções, onboarding de liderança e programas de qualidade de vida.'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      lineHeight: 'var(--vm-leading-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--vm-night-600)",
    style: {
      marginTop: 4,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: 'pretty'
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--vm-text-h3)',
      lineHeight: 'var(--vm-leading-snug)',
      fontWeight: 500
    }
  }, "Programas de sono sob medida"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      lineHeight: 'var(--vm-leading-body)',
      textWrap: 'pretty'
    }
  }, "Assinados pela Dra. Samanta e desenhados conforme as necessidades da empresa:"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      paddingLeft: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      lineHeight: 'var(--vm-leading-body)'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      textWrap: 'pretty'
    }
  }, "Avalia\xE7\xE3o das escalas de turno."), /*#__PURE__*/React.createElement("li", {
    style: {
      textWrap: 'pretty'
    }
  }, "Presta\xE7\xE3o de servi\xE7os m\xE9dicos: diagn\xF3stico, tratamento e acompanhamento dos dist\xFArbios do sono."), /*#__PURE__*/React.createElement("li", {
    style: {
      textWrap: 'pretty'
    }
  }, "Acompanhamento mais longo para construir h\xE1bitos melhores, voltado a fun\xE7\xF5es de maior risco, como centros de controle, opera\xE7\xE3o e turnos cr\xEDticos.")))))));
}
function KitAuthority() {
  const {
    Eyebrow,
    Quote,
    Wave
  } = window.VocemedDesignSystem_361ae9;
  const C = window.VM_CONTENT;
  const p = {
    margin: 0,
    color: 'var(--vm-night-200)',
    textWrap: 'pretty'
  };
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "quem-somos",
    tone: "dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-authority"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-auth-photo"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "foto-samanta",
    shape: "rounded",
    radius: "24",
    src: "../../assets/photos/foto-samanta.jpg",
    placeholder: "Foto profissional da Dra. Samanta"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Fundadora"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--vm-text-h1)'
    }
  }, "Dra. Samanta Dall'Agnese"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "Otorrinolaringologista e especialista em medicina do sono, cuida das duas \xE1reas no centro da ", /*#__PURE__*/React.createElement(VM, {
    dark: true
  }), ": o sono e a voz. Formada pela Universidade Federal do Paran\xE1, com certifica\xE7\xE3o internacional da World Association of Sleep Medicine e duas d\xE9cadas de pr\xE1tica cl\xEDnica. Preceptora da resid\xEAncia m\xE9dica em otorrinolaringologia do Hospital Santa Marcelina, em S\xE3o Paulo."), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "Foi gerente m\xE9dica corporativa da Benefic\xEAncia Portuguesa de S\xE3o Paulo, gerente de telemedicina da SulAm\xE9rica e head de intelig\xEAncia cl\xEDnica em uma healthtech, com experi\xEAncia internacional em sono e gest\xE3o em sa\xFAde. Mestre em sa\xFAde digital pela Universidade de Barcelona e formada no Principles and Practice of Clinical Research de Harvard."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 var(--vm-text-small)/1 var(--vm-font-sans)',
      marginBottom: 8
    }
  }, "Palestrante em congressos no Brasil e no exterior:"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--vm-text-small)',
      lineHeight: 1.6,
      color: 'var(--vm-night-200)',
      textWrap: 'pretty'
    }
  }, C.talks.join(' · '))))), /*#__PURE__*/React.createElement(Quote, {
    style: {
      marginTop: 48,
      paddingTop: 40,
      borderTop: '1px solid var(--vm-border-dark)'
    }
  }, "Passei a carreira cuidando da voz e do sono das pessoas. H\xE1 vinte anos pergunto aos meus pacientes como dormiram, e a resposta diz muito sobre como eles est\xE3o. Criei a ", /*#__PURE__*/React.createElement(VM, {
    dark: true
  }), " para levar essa pergunta \xE0s empresas: o trabalhador fala, e a empresa entende como sua equipe est\xE1 dormindo.\u201D"));
}
function KitAudience({
  onPick
}) {
  const {
    AudienceColumn,
    Eyebrow
  } = window.VocemedDesignSystem_361ae9;
  return /*#__PURE__*/React.createElement(KitSection, {
    id: "para-quem",
    tone: "soft"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 24
    }
  }, "Para quem \xE9"), /*#__PURE__*/React.createElement("div", {
    className: "kit-banner",
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/operador-maquina.jpg",
    alt: "Operador de m\xE1quinas em posi\xE7\xE3o de trabalho",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 35%',
      borderRadius: 16,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "kit-grid-2",
    style: {
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(AudienceColumn, {
    featured: true,
    title: "Se voc\xEA \xE9 uma empresa de medicina do trabalho:",
    cta: "Quero oferecer aos meus clientes",
    onCta: () => onPick('Medicina do trabalho'),
    items: ['Entregue às empresas clientes a avaliação psicossocial da NR-1 por voz, com o sono incluído e conteúdo para apoiar a conduta clínica.', 'Inclua no portfólio palestras e programas de sono assinados por uma especialista.', 'Amplie sua atuação, diferencie-se da concorrência e ofereça uma experiência melhor aos seus clientes.']
  }), /*#__PURE__*/React.createElement(AudienceColumn, {
    title: "Se voc\xEA cuida das pessoas da sua empresa:",
    cta: "Quero para minha empresa",
    onCta: () => onPick('Empresa'),
    items: ['Cumpra a NR-1 com uma avaliação que o trabalhador responde em poucos minutos, falando, e receba um plano de ação para os riscos encontrados.', 'Isso vale mais ainda em operações com turnos e atividades críticas, como mineração, transportes, indústria, logística, saúde, construção civil e energia.', 'E em funções que exigem raciocínio, julgamento e lidam com pressão emocional, como bancos e serviços financeiros, call center e escritórios de advocacia.']
  })));
}
Object.assign(window, {
  KitServices,
  KitAuthority,
  KitAudience
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/KitServices.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.js
try { (() => {
window.VM_CONTENT = {
  references: ['Ministério da Previdência Social. Previdência Social concede 546.254 benefícios por incapacidade temporária por transtornos mentais e comportamentais. Agência Gov; jan. 2026.', 'ONU Brasil / OIT. Brasil: afastamentos por problemas de saúde mental aumentam 134% (dados do Observatório de Segurança e Saúde no Trabalho, SmartLab MPT/OIT). 2025. https://brasil.un.org/pt-br/292926', 'Bassetti CLA, Welter LS, Montes-Martinez M, et al. Epidemiology and economic burden of sleep disorders in Europe. Eur J Neurol. 2026;33(2):e70463. https://doi.org/10.1111/ene.70463', 'Castro LS, Poyares D, Leger D, Bittencourt L, Tufik S. Objective prevalence of insomnia in the São Paulo, Brazil epidemiologic sleep study. Ann Neurol. 2013;74(4):537-46. https://doi.org/10.1002/ana.23945', 'Uehli K, Mehta AJ, Miedinger D, et al. Sleep problems and work injuries: a systematic review and meta-analysis. Sleep Med Rev. 2014;18(1):61-73. https://doi.org/10.1016/j.smrv.2013.01.004', 'Tufik S, Santos-Silva R, Taddei JA, Bittencourt LR. Obstructive sleep apnea syndrome in the Sao Paulo Epidemiologic Sleep Study. Sleep Med. 2010;11(5):441-6. https://doi.org/10.1016/j.sleep.2009.10.005', 'Kleinman NL, Brook RA, Doan JF, Melkonian AK, Baran RW. Health benefit costs and absenteeism due to insomnia from the employer\'s perspective: a retrospective, case-control, database study. J Clin Psychiatry. 2009;70(8):1098-104. https://doi.org/10.4088/JCP.08m04264', 'Swanson LM, Arnedt JT, Rosekind MR, Belenky G, Balkin TJ, Drake C. Sleep disorders and work performance: findings from the 2008 National Sleep Foundation Sleep in America poll. J Sleep Res. 2011;20(3):487-94. https://doi.org/10.1111/j.1365-2869.2010.00890.x', 'Ministério da Saúde. Vigitel Brasil: vigilância de fatores de risco e proteção para doenças crônicas por inquérito telefônico. Módulo sono (duração do sono < 6 h: 20,2% dos adultos nas capitais e no DF).', 'Kessler RC, Berglund PA, Coulouvrat C, et al. Insomnia and the performance of US workers: results from the America Insomnia Survey. Sleep. 2011;34(9):1161-71. https://doi.org/10.5665/SLEEP.1230', 'Meijer MCN, Middelburg RA, Arnold IA, et al. Insomnia as a risk factor for the development of depression and anxiety in primary care: a matched population-based cohort study. Fam Pract. 2026;43:1-8. https://doi.org/10.1093/fampra/cmag019'],
  leaveSeries: {
    source: 'Ministério da Previdência Social (2023–2025); SmartLab MPT/OIT (2022)',
    years: [{
      year: '2022',
      value: 201000,
      label: '≈ 201 mil'
    }, {
      year: '2023',
      value: 283471,
      label: '283 mil'
    }, {
      year: '2024',
      value: 472328,
      label: '472 mil'
    }, {
      year: '2025',
      value: 546254,
      label: '546 mil'
    }]
  },
  nr1Duties: {
    title: 'O que muda para as empresas',
    items: [{
      icon: 'clipboard-check',
      text: 'Avaliar os riscos psicossociais dos trabalhadores.'
    }, {
      icon: 'heart-handshake',
      text: 'Incluir a saúde mental nas políticas da empresa.'
    }, {
      icon: 'search-check',
      text: 'Estar preparada para auditorias e fiscalizações.'
    }],
    source: 'NR-1, Ministério do Trabalho e Emprego'
  },
  nr1Stats: [{
    number: '26/05/2026',
    text: 'Riscos psicossociais passam a fazer parte do PGR pela NR-1',
    source: 'NR-1, Ministério do Trabalho e Emprego'
  }, {
    number: '546.254',
    text: 'benefícios do INSS por transtornos mentais e comportamentais em 2025',
    source: 'Ministério da Previdência Social, 2026'
  }],
  sleepCards: [{
    label: 'No organismo',
    groups: [{
      title: 'Dormir mal afeta',
      chips: [['brain', 'Memória'], ['scale', 'Julgamento'], ['lightbulb', 'Raciocínio'], ['smile', 'Equilíbrio emocional']]
    }, {
      title: 'E aumenta o risco de',
      chips: [['droplet', 'Diabetes'], ['brain-cog', 'Demência'], ['heart-pulse', 'Problemas cardíacos'], ['gauge', 'Hipertensão arterial']]
    }]
  }, {
    label: 'Doenças do sono são muito comuns',
    stats: [{
      number: '15%',
      text: 'dos adultos de São Paulo têm insônia',
      source: 'Castro et al., 2013'
    }, {
      number: '33%',
      text: 'têm apneia obstrutiva do sono',
      source: 'Tufik et al., 2010'
    }, {
      number: '20%',
      text: 'dos adultos dormem < 6h por noite',
      source: 'Vigitel (capitais), Ministério da Saúde'
    }]
  }, {
    label: 'Impacto para a empresa',
    stats: [{
      number: '1,62x',
      text: 'risco de acidente de trabalho',
      source: 'Uehli et al., 2014'
    }, {
      number: '11,3 dias',
      text: 'de produtividade perdidos por ano, por trabalhador com insônia',
      source: 'Kessler et al., 2011'
    }]
  }, {
    label: 'Na empresa',
    stats: [{
      text: 'Quem dorme mal vai trabalhar, mas não rende: é o presenteísmo.',
      highlight: 'presenteísmo',
      source: 'Swanson et al., 2011'
    }, {
      sublabel: 'No plano de saúde',
      number: '2x',
      text: 'custo com benefícios de saúde de quem tem insônia, comparado a quem não tem',
      source: 'Kleinman et al., 2009'
    }]
  }],
  solution: {
    intro: 'A Vocemed leva a expertise de uma médica especialista em sono às empresas que não contam com esse profissional, com um produto diferenciado e capaz de gerar impacto real nas suas atividades.',
    pillars: [{
      icon: 'clipboard-list',
      title: 'Avaliação do sono',
      text: 'O primeiro passo: questionários de sono, que podem ser incluídos na avaliação psicossocial da NR-1. O médico do trabalho recebe um relatório com o resultado para compartilhar com o trabalhador.'
    }, {
      icon: 'calendar-range',
      title: 'Jornada do sono ao longo do ano',
      text: 'Conteúdo de Medicina do Sono produzido por especialista, com gamificação: hábitos de sono mais saudáveis, sinais que indicam um possível problema médico e orientação sobre como agir.'
    }, {
      icon: 'presentation',
      title: 'Encontros',
      text: 'Palestras, workshops presenciais e encontros online, com muita interação com os trabalhadores: para sensibilizar sobre o sono, melhorar hábitos e acompanhar a mudança. Para as empresas que desejam ir além.'
    }]
  },
  steps: [{
    icon: 'smartphone',
    text: 'O trabalhador recebe o convite no celular, pelo WhatsApp ou por outra forma de comunicação da empresa, para acessar os questionários.'
  }, {
    icon: 'mic',
    text: 'A Vocemed conduz a avaliação como uma conversa: faz as perguntas de maneira interativa e o trabalhador responde falando. A voz reduz a fricção no preenchimento.'
  }, {
    icons: ['speech', 'arrow-right', 'clipboard-list'],
    text: 'Junto com os fatores psicossociais, entram as perguntas sobre sono.\nAssim, a avaliação fica mais completa.'
  }, {
    icon: 'users',
    text: 'Os dados são tratados com confidencialidade e segurança: os resultados individuais ficam sob sigilo médico, com a medicina do trabalho; a empresa recebe somente dados agregados, prontos para o PGR.'
  }],
  steps3: [{
    icon: 'smartphone',
    text: 'O trabalhador recebe o convite no celular, pelo WhatsApp ou por outra forma de comunicação da empresa.'
  }, {
    icons: ['speech', 'arrow-right', 'clipboard-list'],
    text: 'A Vocemed conduz a avaliação como uma conversa: as perguntas psicossociais e as de sono, e o trabalhador responde falando.'
  }, {
    icon: 'users',
    text: 'Os dados são tratados com confidencialidade e segurança: os resultados individuais ficam sob sigilo médico, com a medicina do trabalho; a empresa recebe somente dados agregados, prontos para o PGR.'
  }],
  conversation: [{
    from: 'vocemed',
    text: 'Olá! Esta é a avaliação de saúde da sua empresa. Você pode responder falando. Vamos começar?'
  }, {
    from: 'worker'
  }, {
    from: 'vocemed',
    text: 'Como você tem dormido nas últimas semanas?'
  }, {
    from: 'worker'
  }],
  talks: ['European Congress of Integrative Medicine', 'IESE Business School', 'Congresso da Fundação ORL USP', 'Faculdade de Direito Mackenzie', 'Health Tech Forward']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.js", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Wave = __ds_scope.Wave;

__ds_ns.AudienceColumn = __ds_scope.AudienceColumn;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.LevelCard = __ds_scope.LevelCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Step = __ds_scope.Step;

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.ConversationMockup = __ds_scope.ConversationMockup;

__ds_ns.ChipGroup = __ds_scope.ChipGroup;

__ds_ns.ChoiceChip = __ds_scope.ChoiceChip;

__ds_ns.ConsentCheckbox = __ds_scope.ConsentCheckbox;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
