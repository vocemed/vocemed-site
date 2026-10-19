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
  function VM({
    dark
  }) {
    return React.createElement("strong", {
      style: {
        fontWeight: 700,
        color: dark ? '#FFFFFF' : 'var(--vm-night-900)'
      }
    }, "Vocemed");
  }
  function vmText(s, dark) {
    return typeof s === 'string' && s.includes('Vocemed') ? s.split('Vocemed').flatMap((p, i) => i ? [React.createElement(VM, {
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
      src: "hero-foto.jpg",
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
    KitHero,
    VM,
    vmText
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
      className: "kit-banner",
      style: {
        marginBottom: 40
      }
    }, React.createElement("img", {
      src: "cadeira-vazia.jpg",
      alt: "Cadeira de escrit\xF3rio vazia",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '40% 60%',
        borderRadius: 16,
        display: 'block'
      }
    })), React.createElement("div", {
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
      className: "kit-split",
      style: {
        alignItems: 'center',
        marginBottom: 48
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        maxWidth: 'var(--vm-measure)'
      }
    }, React.createElement(Eyebrow, null, "Sono & Sa\xFAde mental"), React.createElement("p", {
      style: {
        margin: 0,
        font: '500 var(--vm-text-h3)/1.4 var(--vm-font-serif)',
        color: 'var(--vm-night-900)',
        textWrap: 'pretty'
      }
    }, "No consult\xF3rio, o sono costuma ser das primeiras coisas a mudar quando a sa\xFAde mental vai mal. A pesquisa mostra o mesmo caminho: a ins\xF4nia aumenta o risco de desenvolver depress\xE3o e ansiedade (Meijer et al., 2026).")), React.createElement("div", {
      style: {
        aspectRatio: '16 / 10',
        maxWidth: 560,
        width: '100%',
        justifySelf: 'center'
      }
    }, React.createElement("img", {
      src: "cama-desarrumada.jpg",
      alt: "Cama desarrumada depois de uma noite mal dormida",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 16,
        display: 'block'
      }
    }))), React.createElement("div", {
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
    }, vmText(C.intro)), React.createElement("p", {
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
    }, "Mas, para medir bem, as pessoas precisam responder, e com sinceridade. Por isso, a ", React.createElement(VM, null), " trocou o formul\xE1rio pela conversa.")));
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
      tone: "paper"
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        maxWidth: 820,
        marginBottom: 48
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
    }, "falar \xE9 mais natural do que preencher um formul\xE1rio"), ".")), React.createElement("ol", {
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
    }, vmText(s.text))) : React.createElement(Step, {
      key: i,
      n: i + 1,
      icon: s.icon
    }, vmText(s.text)))), React.createElement("p", {
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
      src: '' + id + '.jpg',
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
    return React.createElement(KitSection, {
      id: "exemplo",
      tone: "soft"
    }, React.createElement("div", {
      className: "kit-split",
      style: {
        alignItems: 'center'
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, React.createElement(Eyebrow, null, "Na pr\xE1tica"), React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-h2)',
        lineHeight: 1.2,
        color: 'var(--vm-night-900)',
        textWrap: 'pretty'
      }
    }, "Uma conversa, ", React.createElement("em", {
      style: {
        fontStyle: 'italic'
      }
    }, "n\xE3o um formul\xE1rio"), "."), React.createElement("p", {
      style: {
        margin: 0,
        maxWidth: 'var(--vm-measure)',
        fontSize: 'var(--vm-text-lead)',
        lineHeight: 1.5,
        color: 'var(--vm-ink)',
        textWrap: 'pretty'
      }
    }, "As perguntas chegam uma de cada vez, e o trabalhador responde com a pr\xF3pria voz."), React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 12,
        marginTop: 8
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
    }, "Solicite uma demonstra\xE7\xE3o"))), React.createElement("div", {
      style: {
        maxWidth: 440,
        width: '100%',
        justifySelf: 'center'
      }
    }, React.createElement(ConversationMockup, {
      messages: C.conversation
    }))));
  }
  function KitQuestion() {
    const {
      Wave
    } = window.VocemedDesignSystem_361ae9;
    return React.createElement(KitSection, {
      tone: "paper"
    }, React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 24,
        maxWidth: 900,
        margin: '0 auto'
      }
    }, React.createElement(Wave, {
      height: 40,
      "aria-hidden": "true"
    }), React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-display)',
        lineHeight: 1.1,
        color: 'var(--vm-night-900)',
        textWrap: 'balance'
      }
    }, "Em vez de \u201CTudo bem com voc\xEA?\u201D, pergunte ", React.createElement("em", {
      style: {
        fontStyle: 'italic'
      }
    }, "\u201CComo voc\xEA tem dormido?\u201D")), React.createElement("p", {
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
    }, "A ", React.createElement(VM, null), " organiza a informa\xE7\xE3o, permitindo que os profissionais de sa\xFAde fa\xE7am o diagn\xF3stico e que a empresa tome a melhor decis\xE3o com base em dados. S\xE3o dois planos: o ", React.createElement("strong", {
      style: {
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, "Plano Essencial"), ", com a avalia\xE7\xE3o completa, e o ", React.createElement("strong", {
      style: {
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, "Plano Essencial + Personalizado"), ", que acrescenta palestras e programas sob medida.")), React.createElement("div", {
      className: "kit-stairs"
    }, React.createElement(LevelCard, {
      level: "Plano Essencial",
      title: React.createElement(React.Fragment, null, "Avalia\xE7\xE3o ", React.createElement(VM, null)),
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
      level: "Plano Essencial + Personalizado",
      highlight: true
    }, React.createElement("p", {
      style: {
        margin: 0,
        fontWeight: 600,
        color: 'var(--vm-night-900)'
      }
    }, "Al\xE9m do Plano Essencial:"), React.createElement("div", {
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
      src: "foto-samanta.jpg",
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
    }, "Fundadora"), React.createElement("h2", {
      style: {
        fontSize: 'var(--vm-text-h1)'
      }
    }, "Dra. Samanta Dall'Agnese"), React.createElement("p", {
      style: p
    }, "Otorrinolaringologista e especialista em medicina do sono, cuida das duas \xE1reas no centro da ", React.createElement(VM, {
      dark: true
    }), ": o sono e a voz. Formada pela Universidade Federal do Paran\xE1, com certifica\xE7\xE3o internacional da World Association of Sleep Medicine e duas d\xE9cadas de pr\xE1tica cl\xEDnica. Preceptora da resid\xEAncia m\xE9dica em otorrinolaringologia do Hospital Santa Marcelina, em S\xE3o Paulo."), React.createElement("p", {
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
    }, "Passei a carreira cuidando da voz e do sono das pessoas. H\xE1 vinte anos pergunto aos meus pacientes como dormiram, e a resposta diz muito sobre como eles est\xE3o. Criei a ", React.createElement(VM, {
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
    return React.createElement(KitSection, {
      id: "para-quem",
      tone: "soft"
    }, React.createElement(Eyebrow, {
      style: {
        marginBottom: 24
      }
    }, "Para quem \xE9"), React.createElement("div", {
      className: "kit-banner",
      style: {
        marginBottom: 32
      }
    }, React.createElement("img", {
      src: "operador-maquina.jpg",
      alt: "Operador de m\xE1quinas em posi\xE7\xE3o de trabalho",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '50% 35%',
        borderRadius: 16,
        display: 'block'
      }
    })), React.createElement("div", {
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
    }, "Solicite uma demonstra\xE7\xE3o"), React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 'var(--vm-text-lead)',
        lineHeight: 1.5,
        textWrap: 'pretty'
      }
    }, "Conte um pouco sobre sua empresa e entraremos em contato."), React.createElement("div", {
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
    }, "Autorizo a ", React.createElement(VM, null), " a usar estes dados para entrar em contato sobre a demonstra\xE7\xE3o, conforme a ", React.createElement("a", {
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
  }), React.createElement(KitNR1, null), React.createElement(KitSleep, null), React.createElement(KitSolution, null), React.createElement(KitAudience, {
    onPick: pick
  }), React.createElement(KitHow, {
    onNav: nav
  }), React.createElement(KitExample, {
    onNav: nav
  }), React.createElement(KitServices, null), React.createElement(KitAuthority, null), React.createElement(KitQuestion, null), React.createElement(KitDemoForm, {
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