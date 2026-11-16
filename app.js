(function () {
  'use strict';
  var C = window.FVS || {};
  var app = document.getElementById('app');

  /* ---------- Textos ES / 中文 ---------- */
  var T = {
    es: {
      sub: 'Pedido mayorista', search: 'Buscar producto…', all: 'Todo', allFam: 'Todas',
      products: function (n) { return n + (n === 1 ? ' producto' : ' productos'); },
      stock: 'stock', by: function (s, m) { return s === 1 && m === 1 ? '' : (m > s ? 'de ' + s + ' en ' + s + ' · mín. ' + m : 'de ' + s + ' en ' + s); },
      add: 'Añadir', more: 'Ver más', none: 'No hay productos con esa búsqueda.',
      viewOrder: 'Ver pedido', items: function (n) { return n + (n === 1 ? ' artículo' : ' artículos'); },
      back: '← Seguir comprando', yourOrder: 'Tu pedido', empty: 'Tu pedido está vacío.', remove: 'Quitar',
      subtotal: 'Subtotal', shipping: 'Envío', total: 'Total',
      minOrder: function (v) { return 'El pedido mínimo es de ' + v + '.'; },
      details: 'Tus datos', name: 'Nombre o floristería', phone: 'Teléfono', email: 'Email', emailHint: '(para el recibo)',
      address: 'Dirección de entrega', notes: 'Notas', optional: '(opcional)', required: 'Obligatorio',
      payNow: 'Pagar ahora con tarjeta', sendWa: 'Enviar por WhatsApp', sendWc: 'Enviar por WeChat', send: 'Enviar pedido',
      sending: 'Enviando…', stockNote: 'Stock y precios de la fecha elegida, actualizados cada 10 minutos. Te confirmamos el pedido por mensaje.',
      fixed: 'Hemos ajustado tu pedido al stock disponible:', error: 'No se pudo enviar. Revisa la conexión e inténtalo otra vez.',
      done: function (n) { return 'Pedido #' + n + ' listo'; }, doneSub: 'Envíanos el mensaje para que lo recibamos. Te confirmamos disponibilidad y luego puedes pagar.',
      payLink: 'Pagar este pedido', again: 'Hacer otro pedido', waAgain: 'Abrir WhatsApp otra vez',
      wcSteps: 'Copia el mensaje y envíalo por WeChat a:', copy: 'Copiar mensaje', copied: 'Copiado ✓', openWc: 'Abrir WeChat',
      invalid: 'Este enlace no es válido o ha caducado.', invalidSub: 'Pide un enlace nuevo a tu contacto, o inicia sesión si tienes cuenta.', login: 'Iniciar sesión',
      loading: 'Cargando catálogo…', loadErr: 'No se pudo cargar el catálogo.', retry: 'Reintentar',
      stockChanged: 'El stock ha cambiado; hemos ajustado tu pedido.',
      pick: '¿Qué buscas?', pickAll: 'Todas las flores y productos', pickCat: function (c) { return 'Todo ' + c.toLowerCase(); },
      sort: 'Ordenar', sortRec: 'Recomendado', sortAsc: 'Más barato primero', sortDesc: 'Más caro primero', sortName: 'Nombre (A-Z)', vatIncl: 'IVA incluido',
      delivery: 'Entrega', from: 'desde', dateChanged: 'Fecha cambiada: hemos ajustado tu pedido al stock de ese día.',
      days: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      install: 'Instala la app en tu móvil para pedir más rápido.', installBtn: 'Instalar',
      installIos: 'Para instalar la app: toca Compartir <b>⬆︎</b> y luego «Añadir a pantalla de inicio».',
      installWechat: 'Para instalar la app, abre este enlace en el navegador: toca <b>···</b> arriba a la derecha → «Abrir en el navegador».',
      payTransfer: 'Pagar por transferencia o Bizum', transferTitle: 'Datos para pagar', holder: 'Titular', bank: 'Banco', concept: 'Concepto', amount: 'Importe',
      transferNote: 'Paga cuando te confirmemos el pedido. Lo preparamos en cuanto recibamos el pago.', sendProof: 'Enviar justificante por WhatsApp',
      proofText: function (n) { return 'Hola, adjunto el justificante del pago del pedido #' + n + '.'; }, copyShort: 'Copiar',
      close: 'Cerrar', offline: 'Sin conexión: ves el último catálogo descargado. Para enviar el pedido necesitas conexión.'
    },
    zh: {
      sub: '批发订货', search: '搜索产品…', all: '全部', allFam: '全部',
      products: function (n) { return n + ' 个产品'; },
      stock: '库存', by: function (s, m) { return s === 1 && m === 1 ? '' : (m > s ? '以 ' + s + ' 为单位 · 最少 ' + m : '以 ' + s + ' 为单位'); },
      add: '添加', more: '加载更多', none: '没有找到相关产品。',
      viewOrder: '查看订单', items: function (n) { return n + ' 件商品'; },
      back: '← 继续选购', yourOrder: '我的订单', empty: '订单为空。', remove: '删除',
      subtotal: '小计', shipping: '运费', total: '合计',
      minOrder: function (v) { return '最低订单金额为 ' + v + '。'; },
      details: '您的信息', name: '姓名或花店名称', phone: '电话', email: '邮箱', emailHint: '（用于收据）',
      address: '送货地址', notes: '备注', optional: '（选填）', required: '必填',
      payNow: '立即刷卡支付', sendWa: '通过 WhatsApp 发送', sendWc: '通过微信发送', send: '提交订单',
      sending: '发送中…', stockNote: '所选日期的库存和价格每10分钟更新一次。我们会通过消息确认您的订单。',
      fixed: '已根据现有库存调整您的订单：', error: '发送失败，请检查网络后重试。',
      done: function (n) { return '订单 #' + n + ' 已生成'; }, doneSub: '请把消息发给我们，我们确认库存后您再付款。',
      payLink: '支付此订单', again: '再下一单', waAgain: '再次打开 WhatsApp',
      wcSteps: '复制以下消息，通过微信发送给：', copy: '复制消息', copied: '已复制 ✓', openWc: '打开微信',
      invalid: '此链接无效或已过期。', invalidSub: '请向我们索取新链接，或登录您的账户。', login: '登录',
      loading: '正在加载产品…', loadErr: '无法加载产品。', retry: '重试',
      stockChanged: '库存有变化，已自动调整您的订单。',
      pick: '选择品类', pickAll: '全部花卉和产品', pickCat: function (c) { return '全部 · ' + c; },
      sort: '排序', sortRec: '推荐', sortAsc: '价格从低到高', sortDesc: '价格从高到低', sortName: '名称 (A-Z)', vatIncl: '含增值税',
      delivery: '送货日期', from: '满', dateChanged: '已更换日期，订单已按当天库存调整。',
      days: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      install: '将应用安装到手机，下单更快捷。', installBtn: '安装',
      installIos: '安装方法：点击“分享” <b>⬆︎</b>，然后选择“添加到主屏幕”。',
      installWechat: '如需安装应用，请在浏览器中打开：点击右上角 <b>···</b> → “在浏览器中打开”。',
      payTransfer: '银行转账或 Bizum 付款', transferTitle: '付款信息', holder: '收款人', bank: '银行', concept: '备注', amount: '金额',
      transferNote: '我们确认订单后请付款，收到付款后立即备货。', sendProof: '通过 WhatsApp 发送付款凭证',
      proofText: function (n) { return '您好，附上订单 #' + n + ' 的付款凭证。'; }, copyShort: '复制',
      close: '关闭', offline: '当前无网络：显示的是上次下载的产品目录。提交订单需要联网。'
    }
  };

  /* ---------- Almacenamiento local (opcional) ---------- */
  function load(k, d) { try { var v = localStorage.getItem('fvs_' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem('fvs_' + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }

  var lang = load('lang', /^zh/i.test(navigator.language || '') ? 'zh' : 'es');
  var UNIT_ZH = { tallo: '支', paquete: '包', maceta: '盆', unidad: '个', caja: '箱', ramo: '束', bandeja: '盘', manojo: '扎', bolsa: '袋', kilo: '公斤', metro: '米' };
  function unit(u) { return lang === 'zh' && UNIT_ZH[u] ? UNIT_ZH[u] : u; }
  function t(k) { var v = T[lang][k]; return v === undefined ? T.es[k] : v; }
  function fmt(v) {
    try { return new Intl.NumberFormat(lang === 'zh' ? 'zh-CN' : 'es-ES', { style: 'currency', currency: C.currency || 'EUR' }).format(v); }
    catch (e) { return (Math.round(v * 100) / 100).toFixed(2) + ' €'; }
  }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  var S = {
    sort: load('orden', 'asc'),
    products: [], byId: {}, cats: [], cat: '', fam: '', q: '', shown: 40,
    dates: [], date: load('date', ''),
    cart: load('cart', {}), customer: load('customer', {}), view: 'shop', result: null, busy: false, errors: {}, notice: null
  };

  /* ---------- API ---------- */
  function api(path, opts) {
    opts = opts || {};
    var headers = { 'Accept': 'application/json' };
    if (C.nonce) headers['X-WP-Nonce'] = C.nonce;
    if (opts.body) headers['Content-Type'] = 'application/json';
    var url = C.api + path + (path.indexOf('?') < 0 ? '?' : '&') + 'k=' + encodeURIComponent(C.key || '');
    return fetch(url, { method: opts.method || 'GET', headers: headers, body: opts.body ? JSON.stringify(opts.body) : undefined, credentials: 'same-origin' })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, data: j }; }); });
  }

  function setCatalog(data) {
    S.dates = data.dates || [];
    if (data.date) { S.date = data.date; save('date', S.date); }
    S.products = data.products || [];
    S.cats = data.cats || [];
    S.byId = {};
    S.products.forEach(function (p) { p._s = norm(p.n + ' ' + p.f + ' ' + p.c); S.byId[p.i] = p; });
    return reconcile();
  }

  /** Ajusta el carrito al stock actual. Devuelve true si cambió algo. */
  function reconcile() {
    var changed = false;
    Object.keys(S.cart).forEach(function (id) {
      var p = S.byId[id], q = S.cart[id];
      if (!p) { delete S.cart[id]; changed = true; return; }
      var max = Math.floor(p.q / p.s) * p.s;
      var fixed = Math.min(q, max);
      fixed = fixed < p.m ? 0 : Math.ceil(fixed / p.s) * p.s;
      if (fixed !== q) { changed = true; if (fixed) S.cart[id] = fixed; else delete S.cart[id]; }
    });
    if (changed) save('cart', S.cart);
    return changed;
  }

  /* Web estática: los datos están en data/fechas.json y data/c-AAAAMMDD.json (los genera el monitor). */
  function getJSON(u) { return fetch(u, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }); }
  function loadCatalog() {
    return getJSON('data/fechas.json').then(function (f) {
      var dates = f.dates || [];
      var d = dates.indexOf(S.date) >= 0 ? S.date : dates[0];
      if (!d) throw new Error('sin fechas');
      return getJSON('data/c-' + d.replace(/\//g, '') + '.json').then(function (c) {
        c.dates = dates; c.date = d; c.updated = f.updated;
        return { status: 200, data: c };
      });
    });
  }
  function fetchCatalog(first) {
    return loadCatalog().then(function (r) {
      if (r.status === 403) { S.view = 'denied'; render(); return; }
      if (r.status !== 200 || !r.data.products) throw new Error('load');
      var changed = setCatalog(r.data);
      if (first) render();
      else { if (changed) toast(t('stockChanged')); if (S.view === 'shop') renderList(); else if (S.view === 'cart') render(); updateBar(); }
    });
  }

  /* ---------- Carrito ---------- */
  function setQty(id, q) {
    var p = S.byId[id]; if (!p) return;
    var max = Math.floor(p.q / p.s) * p.s;
    q = Math.max(0, Math.min(q, max));
    if (q && q < p.m) q = 0;
    if (q) S.cart[id] = q; else delete S.cart[id];
    save('cart', S.cart);
  }
  function inc(id) { var p = S.byId[id], q = S.cart[id] || 0; setQty(id, q ? q + p.s : p.m); }
  function dec(id) { var p = S.byId[id], q = S.cart[id] || 0; setQty(id, q - p.s < p.m ? 0 : q - p.s); }
  /** Precio por unidad según la cantidad (escalones del proveedor + tu margen). */
  function priceFor(p, q) {
    var price = p.p;
    (p.t || []).forEach(function (t) { if (q >= t[0]) price = t[1]; });
    return price;
  }
  function lineTotal(l) { return Math.round(priceFor(l.p, l.q) * l.q * 100) / 100; }
  function dateLabel(d) {
    var x = new Date(d.replace(/\//g, '-') + 'T12:00:00');
    return T[lang].days[x.getDay()] + ' ' + x.getDate() + '/' + (x.getMonth() + 1);
  }
  function cartLines() { return Object.keys(S.cart).map(function (id) { return { p: S.byId[id], q: S.cart[id] }; }).filter(function (l) { return l.p; }); }
  function subtotal() { return cartLines().reduce(function (a, l) { return a + lineTotal(l); }, 0); }

  /* ---------- Vistas ---------- */
  var ICON = {
    wa: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z"/></svg>',
    wc: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 4C4.6 4 1 7 1 10.6c0 2 1.1 3.9 2.9 5.1L3.2 18l2.6-1.4c1 .3 2 .4 3.2.4h.6a5.6 5.6 0 0 1-.2-1.5C9.4 12.2 12.7 9.4 17 9.4h.6C16.9 6.3 13.3 4 9 4Zm-2.8 3.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5.6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM17 10.5c-3.6 0-6.5 2.4-6.5 5.4s2.9 5.4 6.5 5.4c.8 0 1.6-.1 2.3-.4L21.4 22l-.6-1.9c1.4-1 2.2-2.5 2.2-4.2 0-3-2.9-5.4-6-5.4Zm-2.2 2.8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Zm4.4 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"/></svg>',
    bank: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M3 10h18L12 4 3 10Z"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/></svg>',
    card: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
    tick: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>'
  };

  function header() {
    return '<header class="top"><div class="wrap">' +
      '<div class="brandrow"><h1 class="brand">' + esc(C.store) + '<small>' + esc(t('sub')) + '</small></h1>' +
      '<button class="lang" data-a="lang" aria-label="Idioma / 语言">' + (lang === 'zh' ? 'Español' : '中文') + '</button></div>' +
      ((S.view === 'shop' || S.view === 'cart') && S.dates.length ? '<div class="chips dates" role="toolbar" aria-label="' + esc(t('delivery')) + '"><span class="dl">' + esc(t('delivery')) + '</span>' +
        S.dates.map(function (d) { return chip(d, dateLabel(d), S.date === d, 'date'); }).join('') + '</div>' : '') +
      (S.view === 'shop' ? '<input class="search" type="search" data-a="q" placeholder="' + esc(t('search')) + '" value="' + esc(S.q) + '" aria-label="' + esc(t('search')) + '">' +
        pickSelect() : '') +
      '</div></header>';
  }
  function chip(v, label, on, a) { return '<button class="chip" data-a="' + a + '" data-v="' + esc(v) + '" aria-pressed="' + on + '">' + esc(label) + '</button>'; }
  function pickSelect() {
    var n = {}, k;
    S.products.forEach(function (p) { n[p.c] = (n[p.c] || 0) + 1; k = p.c + '|' + p.f; n[k] = (n[k] || 0) + 1; });
    var cur = S.cat + '|' + S.fam;
    var o = function (v, label, num) { return '<option value="' + esc(v) + '"' + (v === cur ? ' selected' : '') + '>' + esc(label) + (num ? ' (' + num + ')' : '') + '</option>'; };
    var h = o('|', t('pickAll'), S.products.length);
    S.cats.forEach(function (c) {
      if (!n[c.name]) return;
      h += '<optgroup label="' + esc(c.name) + '">' + o(c.name + '|', t('pickCat')(c.name), n[c.name]) +
        c.families.filter(function (f) { return n[c.name + '|' + f]; }).map(function (f) { return o(c.name + '|' + f, f, n[c.name + '|' + f]); }).join('') + '</optgroup>';
    });
    return '<label class="pick"><span>' + esc(t('pick')) + '</span><select data-a="pick">' + h + '</select></label>';
  }
  function famChips() {
    var c = S.cats.filter(function (x) { return x.name === S.cat; })[0];
    if (!c || !c.families.length) return '';
    return '<div class="chips fam" role="toolbar">' + chip('', t('allFam'), S.fam === '', 'fam') + c.families.map(function (f) { return chip(f, f, S.fam === f, 'fam'); }).join('') + '</div>';
  }

  function filtered() {
    var q = norm(S.q).trim().split(/\s+/).filter(Boolean);
    var list = S.products.filter(function (p) {
      if (S.cat && p.c !== S.cat) return false;
      if (S.fam && p.f !== S.fam) return false;
      for (var i = 0; i < q.length; i++) if (p._s.indexOf(q[i]) < 0) return false;
      return true;
    });
    return sortList(list);
  }
  function sortList(list) {
    if (S.sort === 'asc') return list.slice().sort(function (a, b) { return a.p - b.p || a.n.localeCompare(b.n); });
    if (S.sort === 'desc') return list.slice().sort(function (a, b) { return b.p - a.p || a.n.localeCompare(b.n); });
    if (S.sort === 'name') return list.slice().sort(function (a, b) { return a.n.localeCompare(b.n, 'es'); });
    return list;
  }

  function card(p) {
    var q = S.cart[p.i] || 0, rule = t('by')(p.s, p.m);
    var img = p.g ? '<img class="ph" loading="lazy" decoding="async" src="' + esc(p.g) + '" alt="">' : '<div class="ph empty" aria-hidden="true">' + esc(p.n.charAt(0)) + '</div>';
    var ctl = q ? '<div class="qty"><button data-a="dec" data-id="' + p.i + '" aria-label="−">−</button><span class="n">' + q + '</span><button data-a="inc" data-id="' + p.i + '" aria-label="+">+</button></div>'
                : '<button class="add" data-a="inc" data-id="' + p.i + '">' + esc(t('add')) + '</button>';
    return '<article class="p' + (q ? ' in' : '') + '" data-card="' + p.i + '">' + img +
      '<div><h3>' + esc(p.n) + '</h3><div><span class="price">' + fmt(p.p) + '</span> <span class="unit">/ ' + esc(unit(p.u)) + '</span></div>' +
      '<div class="meta">' + esc(t('stock')) + ' ' + (p.q >= 99999 ? '✓' : p.q) + (rule ? ' · ' + esc(rule) : '') + '</div>' +
      ((p.t || []).length > 1 ? '<div class="meta tiers">' + p.t.slice(1).map(function (x) { return esc(t('from')) + ' ' + x[0] + ': ' + fmt(x[1]); }).join(' · ') + '</div>' : '') +
      '</div>' + ctl + '</article>';
  }

  function renderList() {
    var el = document.getElementById('list'); if (!el) return;
    var all = filtered(), shown = all.slice(0, S.shown);
    var opt = function (v, k) { return '<option value="' + v + '"' + (S.sort === v ? ' selected' : '') + '>' + esc(t(k)) + '</option>'; };
    el.innerHTML = '<div class="listbar"><p class="count">' + esc(t('products')(all.length)) + (C.vat ? ' · ' + esc(t('vatIncl')) : '') + '</p>' +
      '<label class="sort"><span>' + esc(t('sort')) + '</span><select data-a="sort">' + opt('asc', 'sortAsc') + opt('desc', 'sortDesc') + opt('name', 'sortName') + opt('rec', 'sortRec') + '</select></label></div>' +
      (shown.length ? '<div class="list">' + shown.map(card).join('') + (all.length > shown.length ? '<button class="more" data-a="more">' + esc(t('more')) + '</button>' : '') + '</div>'
                    : '<p class="empty-state">' + esc(t('none')) + '</p>');
    observeMore();
  }
  var io;
  function observeMore() {
    if (!('IntersectionObserver' in window)) return;
    if (io) io.disconnect();
    var btn = document.querySelector('.more'); if (!btn) return;
    io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { S.shown += 40; renderList(); } }, { rootMargin: '400px' });
    io.observe(btn);
  }

  function updateBar() {
    var bar = document.getElementById('bar'); if (!bar) return;
    var lines = cartLines();
    if (S.view !== 'shop' || !lines.length) { bar.innerHTML = ''; return; }
    bar.innerHTML = '<div class="bar"><button data-a="cart"><span>' + esc(t('items')(lines.length)) + ' · ' + fmt(subtotal()) + '</span><span>' + esc(t('viewOrder')) + ' →</span></button></div>';
  }

  function refreshCard(id) {
    var el = document.querySelector('[data-card="' + id + '"]');
    if (el && S.byId[id]) { var tmp = document.createElement('div'); tmp.innerHTML = card(S.byId[id]); el.replaceWith(tmp.firstChild); }
    updateBar();
  }

  function field(k, type, req, hint) {
    var v = S.customer[k] || '', err = S.errors[k];
    var input = type === 'area'
      ? '<textarea class="fld" id="f-' + k + '" data-f="' + k + '"' + (err ? ' aria-invalid="true"' : '') + '>' + esc(v) + '</textarea>'
      : '<input class="fld" id="f-' + k + '" data-f="' + k + '" type="' + type + '" value="' + esc(v) + '"' + (err ? ' aria-invalid="true"' : '') + (k === 'phone' ? ' inputmode="tel" autocomplete="tel"' : k === 'email' ? ' autocomplete="email"' : k === 'name' ? ' autocomplete="organization"' : '') + '>';
    return '<label class="f" for="f-' + k + '">' + esc(t(k)) + (req ? '' : ' <span>' + esc(hint || t('optional')) + '</span>') + '</label>' + input + (err ? '<div class="err">' + esc(t('required')) + '</div>' : '');
  }

  function cartView() {
    var lines = cartLines(), sub = subtotal(), ship = lines.length ? (C.shipping || 0) : 0, below = C.minOrder > 0 && sub < C.minOrder;
    var h = '<div class="wrap sheet"><button class="back" data-a="shop">' + esc(t('back')) + '</button><h2>' + esc(t('yourOrder')) + '</h2>';
    if (S.notice) h += '<div class="notice warn">' + S.notice + '</div>';
    if (!lines.length) return h + '<p class="empty-state">' + esc(t('empty')) + '</p></div>';
    h += '<div class="box">' + lines.map(function (l) {
      return '<div class="line"><div><div class="nm">' + esc(l.p.n) + '</div><div class="sub">' + fmt(priceFor(l.p, l.q)) + ' / ' + esc(unit(l.p.u)) + '</div></div>' +
        '<div class="tot">' + fmt(lineTotal(l)) + '</div>' +
        '<div class="qty"><button data-a="dec" data-id="' + l.p.i + '" aria-label="−">−</button><span class="n">' + l.q + '</span><button data-a="inc" data-id="' + l.p.i + '" aria-label="+">+</button>' +
        '<span class="sub">' + esc(unit(l.p.u)) + '</span><button class="rm" data-a="rm" data-id="' + l.p.i + '">' + esc(t('remove')) + '</button></div></div>';
    }).join('') + '</div>';
    h += '<div class="box"><div class="sum"><span>' + esc(t('subtotal')) + '</span><span>' + fmt(sub) + '</span></div>' +
      (ship ? '<div class="sum"><span>' + esc(t('shipping')) + '</span><span>' + fmt(ship) + '</span></div>' : '') +
      '<div class="sum big"><span>' + esc(t('total')) + '</span><span>' + fmt(sub + ship) + '</span></div></div>';
    if (below) h += '<div class="notice warn">' + esc(t('minOrder')(fmt(C.minOrder))) + '</div>';
    h += '<h2>' + esc(t('details')) + '</h2>' + field('name', 'text', true) + field('phone', 'tel', true) + field('email', 'email', false, t('emailHint')) +
      field('address', 'area', false) + field('notes', 'area', false) +
      '<div class="hp" aria-hidden="true"><input tabindex="-1" autocomplete="off" data-f="website"></div>';
    var dis = below || S.busy ? ' disabled' : '', btns = '';
    if (C.whatsapp) btns += '<button class="btn wa" data-a="send" data-ch="whatsapp"' + dis + '>' + ICON.wa + esc(S.busy === 'whatsapp' ? t('sending') : t('sendWa')) + '</button>';
    if (C.wechat) btns += '<button class="btn wc" data-a="send" data-ch="wechat"' + dis + '>' + ICON.wc + esc(S.busy === 'wechat' ? t('sending') : t('sendWc')) + '</button>';
    if (!btns) btns = '<button class="btn pay" data-a="send" data-ch="whatsapp"' + dis + '>' + esc(S.busy ? t('sending') : t('send')) + '</button>';
    return h + '<div class="actions">' + btns + '</div><p class="fine">' + esc(t('stockNote')) + '</p></div>';
  }

  function waUrl(text) { return 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(text); }

  function doneView() {
    var r = S.result;
    var h = '<div class="wrap sheet"><div class="done"><div class="tick">' + ICON.tick + '</div><h2>' + esc(t('done')(r.number)) + '</h2>' +
      '<p class="unit">' + esc(t('total')) + ': <strong>' + fmt(r.total) + '</strong></p>' + (r.channel === 'transfer' ? '' : '<p class="unit">' + esc(t('doneSub')) + '</p>') + '</div><div class="actions">';
    if (C.transfer) {
      var tr = C.transfer;
      var row = function (label, value, copy) {
        return '<div class="kv"><span>' + esc(label) + '</span><strong>' + esc(value) + '</strong>' +
          (copy ? '<button class="cp" data-a="cp" data-v="' + esc(value) + '">' + esc(t('copyShort')) + '</button>' : '') + '</div>';
      };
      h += '<div class="box pay-box"><h3>' + esc(t('transferTitle')) + '</h3>' + row(t('amount'), fmt(r.total), false) + row(t('concept'), r.ref, true);
      if (tr.iban) h += '<div class="sep"></div><div class="lbl">' + ICON.bank + ' IBAN</div>' + row('IBAN', tr.iban, true) + (tr.holder ? row(t('holder'), tr.holder, false) : '') + (tr.bank ? row(t('bank'), tr.bank, false) : '');
      if (tr.bizum) h += '<div class="sep"></div><div class="lbl">Bizum</div>' + row('Bizum', tr.bizum, true);
      h += '<p class="fine">' + esc(t('transferNote')) + '</p></div>';
      if (C.whatsapp) h += '<a class="btn wa" href="' + esc(waUrl(t('proofText')(r.number) + '\n\n' + r.text)) + '">' + ICON.wa + esc(t('sendProof')) + '</a>';
    }
    if (r.channel === 'wechat') {
      h += '<p>' + esc(t('wcSteps')) + '</p><p class="wcid">' + esc(C.wechat) + '</p>' +
        (C.wechatQr ? '<img class="qr" src="' + esc(C.wechatQr) + '" alt="WeChat QR">' : '') +
        '<textarea class="copy" id="msg" readonly>' + esc(r.text) + '</textarea>' +
        '<button class="btn wc" data-a="copy">' + ICON.wc + '<span>' + esc(t('copy')) + '</span></button>' +
        '<a class="btn ghost" href="weixin://">' + esc(t('openWc')) + '</a>';
    }
    if (C.pay && r.payUrl && r.channel !== 'transfer') h += '<a class="btn pay" href="' + esc(r.payUrl) + '">' + ICON.card + esc(t('payLink')) + '</a>';
    if (r.channel === 'whatsapp' && C.whatsapp) h += '<a class="btn wa" href="' + esc(waUrl(r.text)) + '">' + ICON.wa + esc(t('waAgain')) + '</a>';
    return h + '<button class="btn ghost" data-a="restart">' + esc(t('again')) + '</button></div></div>';
  }

  function deniedView() {
    return '<div class="wrap"><div class="done"><h2>' + esc(t('invalid')) + '</h2><p class="unit">' + esc(t('invalidSub')) + '</p></div>' +
      '<div class="actions"><a class="btn pay" href="' + esc(C.login) + '">' + esc(t('login')) + '</a></div></div>';
  }

  /* ---------- App instalable ---------- */
  var ua = navigator.userAgent || '';
  var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  var isIos = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isWechat = /MicroMessenger/i.test(ua);
  var isMobile = isIos || /Android/i.test(ua);
  var deferred = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); deferred = e; renderInstall(); });
  window.addEventListener('appinstalled', function () { deferred = null; save('noinstall', true); renderInstall(); });

  function renderInstall() {
    var el = document.getElementById('inst'); if (!el) return;
    var msg = '', btn = '';
    if (!standalone && !load('noinstall', false) && isMobile) {
      if (isWechat) msg = t('installWechat');
      else if (deferred) { msg = esc(t('install')); btn = '<button class="add" data-a="install">' + esc(t('installBtn')) + '</button>'; }
      else if (isIos) msg = t('installIos');
    }
    var off = !navigator.onLine ? '<div class="notice warn">' + esc(t('offline')) + '</div>' : '';
    el.innerHTML = off + (msg ? '<div class="install"><img src="' + esc(C.icon || '') + '" alt="" width="40" height="40"><p>' + msg + '</p>' + btn +
      '<button class="x" data-a="noinstall" aria-label="' + esc(t('close')) + '">×</button></div>' : '');
  }
  window.addEventListener('online', function () { renderInstall(); });
  window.addEventListener('offline', function () { renderInstall(); });
  if ('serviceWorker' in navigator && C.sw) {
    window.addEventListener('load', function () { navigator.serviceWorker.register(C.sw).catch(function () {}); });
  }

  function render() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'es';
    var body;
    if (S.view === 'denied') body = deniedView();
    else if (S.view === 'loading') body = '<div class="wrap loading">' + esc(t('loading')) + '</div>';
    else if (S.view === 'error') body = '<div class="wrap loading"><p>' + esc(t('loadErr')) + '</p><button class="more" data-a="retry">' + esc(t('retry')) + '</button></div>';
    else if (S.view === 'cart') body = cartView();
    else if (S.view === 'done') body = doneView();
    else body = '<div class="wrap" id="inst"></div><main class="wrap" id="list"></main>';
    app.innerHTML = header() + body + '<div id="bar"></div>';
    if (S.view === 'shop') { renderInstall(); renderList(); }
    updateBar();
  }

  /* ---------- Envío ---------- */
  function readForm() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-f]'), function (el) { S.customer[el.getAttribute('data-f')] = el.value.trim(); });
  }

  function send(channel) {
    readForm();
    S.errors = {};
    if (!S.customer.name) S.errors.name = 1;
    if (!S.customer.phone) S.errors.phone = 1;
    if (S.errors.name || S.errors.phone) { render(); var f = document.querySelector('[aria-invalid=true]'); if (f) f.focus(); return; }
    var website = S.customer.website || ''; delete S.customer.website;
    save('customer', S.customer);
    var lines = cartLines(); if (!lines.length) return;
    var sub = subtotal(), ship = C.shipping || 0, total = Math.round((sub + ship) * 100) / 100;
    if (C.minOrder > 0 && sub < C.minOrder) return;
    var d = new Date(), pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var num = (C.prefix || 'PED') + '-' + String(d.getFullYear()).slice(2) + pad(d.getMonth() + 1) + pad(d.getDate()) + '-' + Math.floor(1000 + Math.random() * 9000);
    var eur = function (v) { try { return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(v); } catch (e) { return v.toFixed(2) + ' €'; } };
    var es = T.es.days, x = new Date(S.date.replace(/\//g, '-') + 'T12:00:00');
    var out = ['*Pedido ' + num + '* · ' + C.store];
    if (S.date) out.push('Entrega: ' + es[x.getDay()] + ' ' + x.getDate() + '/' + (x.getMonth() + 1));
    out.push('');
    lines.forEach(function (l) { out.push('• ' + l.q + ' × ' + l.p.n + ' (' + l.p.u + ', ' + (l.p.r || '') + ') — ' + eur(lineTotal(l))); });
    out.push('');
    if (ship) out.push('Envío: ' + eur(ship));
    out.push('*Total: ' + eur(total) + '*' + (C.vat ? ' (IVA incluido)' : ''));
    if (C.note) out.push(C.note);
    out.push('');
    out.push('Nombre: ' + S.customer.name);
    out.push('Teléfono: ' + S.customer.phone);
    if (S.customer.address) out.push('Dirección: ' + S.customer.address);
    if (S.customer.notes) out.push('Notas: ' + S.customer.notes);
    if (C.transfer) {
      out.push('');
      out.push('Pago por transferencia o Bizum (concepto: ' + num + ')');
      if (C.transfer.iban) out.push('IBAN: ' + C.transfer.iban + (C.transfer.holder ? ' · ' + C.transfer.holder : ''));
      if (C.transfer.bizum) out.push('Bizum: ' + C.transfer.bizum);
    }
    var text = out.join('\n');
    S.result = { number: num, total: total, payUrl: '', text: text, ref: num, channel: channel };
    S.cart = {}; save('cart', S.cart);
    S.view = 'done'; render(); window.scrollTo(0, 0);
    if (channel === 'whatsapp' && C.whatsapp) {
      var w = null; try { w = window.open(waUrl(text), '_blank'); } catch (e) {}
      if (!w) location.href = waUrl(text);
    }
  }

  function toast(msg) {
    var el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); el.textContent = msg;
    document.body.appendChild(el); setTimeout(function () { el.remove(); }, 3500);
  }

  /* ---------- Eventos ---------- */
  app.addEventListener('click', function (e) {
    var b = e.target.closest('[data-a]'); if (!b || b.disabled) return;
    var a = b.getAttribute('data-a'), id = b.getAttribute('data-id');
    if (a === 'lang') { lang = lang === 'zh' ? 'es' : 'zh'; save('lang', lang); if (S.view === 'cart') readForm(); render(); }
    else if (a === 'date') {
      var nd = b.getAttribute('data-v'); if (nd === S.date) return;
      if (S.view === 'cart') readForm();
      S.date = nd; save('date', nd); S.shown = 40;
      var had = Object.keys(S.cart).length;
      fetchCatalog(false).then(function () { if (had && Object.keys(S.cart).length !== had) toast(t('dateChanged')); render(); }).catch(function () {});
    }
    else if (a === 'cat') { S.cat = b.getAttribute('data-v'); S.fam = ''; S.shown = 40; render(); }
    else if (a === 'fam') { S.fam = b.getAttribute('data-v'); S.shown = 40; render(); }
    else if (a === 'inc' || a === 'dec' || a === 'rm') {
      if (a === 'inc') inc(id); else if (a === 'dec') dec(id); else setQty(id, 0);
      if (S.view === 'shop') refreshCard(id); else { readForm(); render(); }
    }
    else if (a === 'more') { S.shown += 40; renderList(); }
    else if (a === 'cart') { S.view = 'cart'; S.notice = null; render(); window.scrollTo(0, 0); }
    else if (a === 'shop') { readForm(); save('customer', S.customer); S.view = 'shop'; render(); }
    else if (a === 'send') send(b.getAttribute('data-ch'));
    else if (a === 'restart') { S.view = 'shop'; S.result = null; render(); window.scrollTo(0, 0); }
    else if (a === 'retry') { start(); }
    else if (a === 'install' && deferred) { deferred.prompt(); deferred.userChoice.then(function () { deferred = null; renderInstall(); }); }
    else if (a === 'cp') {
      var v = b.getAttribute('data-v'); if (/^[A-Z]{2}\d{2}[\s\dA-Z]+$/.test(v)) v = v.replace(/\s+/g, '');
      var ok = function () { b.textContent = '✓'; setTimeout(function () { b.textContent = t('copyShort'); }, 1500); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(v).then(ok, ok); else ok();
    }
    else if (a === 'noinstall') { save('noinstall', true); renderInstall(); }
    else if (a === 'copy') {
      var ta = document.getElementById('msg'), done = function () { b.querySelector('span').textContent = t('copied'); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(ta.value).then(done, function () { ta.select(); document.execCommand('copy'); done(); });
      else { ta.select(); document.execCommand('copy'); done(); }
    }
  });
  app.addEventListener('change', function (e) {
    if (e.target.getAttribute('data-a') === 'sort') { S.sort = e.target.value; save('orden', S.sort); S.shown = 40; renderList(); }
    if (e.target.getAttribute('data-a') === 'pick') { var v = e.target.value.split('|'); S.cat = v[0] || ''; S.fam = v[1] || ''; S.shown = 40; renderList(); window.scrollTo(0, 0); }
  });
  var qt;
  app.addEventListener('input', function (e) {
    if (e.target.getAttribute('data-a') === 'q') { clearTimeout(qt); var v = e.target.value; qt = setTimeout(function () { S.q = v; S.shown = 40; renderList(); }, 150); }
  });

  function start() {
    if (!C.allowed) { S.view = 'denied'; render(); return; }
    S.view = 'loading'; render();
    fetchCatalog(true).then(function () { if (S.view === 'loading') { S.view = 'shop'; render(); } })
      .catch(function () { S.view = 'error'; render(); });
  }
  start();
  setInterval(function () { if (S.view === 'shop' || S.view === 'cart') fetchCatalog(false).catch(function () {}); }, 300000);
})();
