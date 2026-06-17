/*
  LAQ Practitioner Portal — Dev Annotation Layer
  ================================================
  One shared script imported by every mockup page.
  Toggle with Shift+D or the "Dev" pill (bottom-right).

  Each annotated element carries:
    data-annotation='{"type":"OOTB","name":"...","effort":"S|M|L","note":"..."}'

  When dev mode is ON:
  - Coloured dashed outline on every annotated element
  - Floating badge (top-right) showing type pill, name, note
  When dev mode is OFF:
  - All outlines and badges removed; page looks pristine
*/
(function () {
  'use strict';

  var OOTB_COLOR   = '#2E7D32';   // green
  var CUSTOM_COLOR = '#B26A00';   // amber
  var BADGE_Z      = 9000;
  var PILL_Z       = 9100;

  var devActive = false;
  var injectedNodes = [];

  /* ── CSS injected once ── */
  var style = document.createElement('style');
  style.id = 'dev-annotation-styles';
  style.textContent = [
    '#dev-pill{',
      'position:fixed;bottom:1rem;right:1rem;z-index:' + PILL_Z + ';',
      'display:flex;align-items:center;gap:0.375rem;',
      'padding:0.3125rem 0.75rem;border-radius:2rem;',
      'background:#05325F;color:#fff;',
      'font:600 0.6875rem/1 "Segoe UI",system-ui,sans-serif;',
      'border:none;cursor:pointer;',
      'box-shadow:0 2px 6px rgba(0,0,0,0.35);',
      'transition:background 0.15s;',
    '}',
    '#dev-pill:hover{background:#09549F;}',
    '#dev-pill.active{background:#09549F;}',
    '#dev-pill:focus-visible{outline:2px solid #fff;outline-offset:2px;}',
    '#dev-banner{',
      'position:fixed;top:0;left:0;right:0;z-index:' + PILL_Z + ';',
      'background:#09549F;color:#fff;',
      'font:600 0.75rem/1 "Segoe UI",system-ui,sans-serif;',
      'padding:0.4375rem 1rem;',
      'display:none;align-items:center;gap:0.5rem;',
      'letter-spacing:0.01em;',
    '}',
    '#dev-banner.visible{display:flex;}',
    '.dev-outlined{',
      'outline-offset:2px !important;',
      'position:relative;',
    '}',
    '.dev-badge{',
      'position:absolute;top:0;right:0;z-index:' + BADGE_Z + ';',
      'max-width:220px;min-width:140px;',
      'background:#fff;',
      'border:1px solid #e5e5e5;',
      'border-radius:0.25rem;',
      'box-shadow:0 2px 8px rgba(0,0,0,0.18);',
      'padding:0.375rem 0.5rem;',
      'pointer-events:none;',
      'font-family:"Segoe UI",system-ui,sans-serif;',
    '}',
    '.dev-badge-pill{',
      'display:inline-flex;align-items:center;gap:0.25rem;',
      'padding:0.125rem 0.375rem;border-radius:2rem;',
      'font-size:0.625rem;font-weight:700;line-height:1.4;',
      'color:#fff;margin-bottom:0.25rem;white-space:nowrap;',
    '}',
    '.dev-badge-name{',
      'display:block;font-size:0.6875rem;font-weight:600;',
      'color:#181818;line-height:1.3;margin-bottom:0.125rem;',
    '}',
    '.dev-badge-note{',
      'display:block;font-size:0.625rem;color:#706e6b;line-height:1.35;',
    '}',
  ].join('');
  document.head.appendChild(style);

  /* ── Banner ── */
  var banner = document.createElement('div');
  banner.id = 'dev-banner';
  banner.setAttribute('role', 'status');
  banner.setAttribute('aria-live', 'polite');
  banner.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6.5" stroke="#fff" stroke-width="1.2"/><rect x="6.25" y="5.5" width="1.5" height="5" rx=".5" fill="#fff"/><rect x="6.25" y="3.25" width="1.5" height="1.5" rx=".5" fill="#fff"/></svg>Dev mode — component annotations visible';
  document.body.appendChild(banner);

  /* ── Pill ── */
  var pill = document.createElement('button');
  pill.id = 'dev-pill';
  pill.type = 'button';
  pill.setAttribute('aria-pressed', 'false');
  pill.setAttribute('title', 'Toggle dev annotations (Shift+D)');
  pill.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M3.5 6h5M6 3.5v5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>Dev';
  document.body.appendChild(pill);

  /* ── Core ── */
  function getColor(type) {
    return (type || '').toUpperCase() === 'OOTB' ? OOTB_COLOR : CUSTOM_COLOR;
  }

  function inject() {
    var elements = document.querySelectorAll('[data-annotation]');
    elements.forEach(function (el) {
      var data;
      try { data = JSON.parse(el.getAttribute('data-annotation')); }
      catch (e) { return; }

      var color = getColor(data.type);
      var label = data.type ? data.type.toUpperCase() : '?';
      var effort = data.effort ? data.effort.toUpperCase() : '';

      /* outline */
      el.style.outline = '2px dashed ' + color;
      el.style.outlineOffset = '2px';
      el.classList.add('dev-outlined');

      /* ensure position:relative for badge anchoring */
      var pos = window.getComputedStyle(el).position;
      if (pos === 'static') { el.style.position = 'relative'; }

      /* badge */
      var badge = document.createElement('div');
      badge.className = 'dev-badge';
      badge.setAttribute('aria-hidden', 'true');
      badge.innerHTML =
        '<span class="dev-badge-pill" style="background:' + color + '">' +
          label + (effort ? ' &middot; ' + effort : '') +
        '</span>' +
        '<span class="dev-badge-name">' + escHtml(data.name || '') + '</span>' +
        (data.note ? '<span class="dev-badge-note">' + escHtml(data.note) + '</span>' : '');

      el.appendChild(badge);
      injectedNodes.push({ el: el, badge: badge, color: color });
    });
  }

  function eject() {
    injectedNodes.forEach(function (item) {
      item.el.style.outline = '';
      item.el.style.outlineOffset = '';
      item.el.classList.remove('dev-outlined');
      /* restore position only if we set it */
      if (item.el.style.position === 'relative') { item.el.style.position = ''; }
      if (item.badge.parentNode) { item.badge.parentNode.removeChild(item.badge); }
    });
    injectedNodes = [];
  }

  function setDev(on) {
    devActive = on;
    if (on) {
      inject();
      banner.classList.add('visible');
      pill.classList.add('active');
      pill.setAttribute('aria-pressed', 'true');
      document.body.style.paddingTop = '2.25rem'; /* make room for banner */
    } else {
      eject();
      banner.classList.remove('visible');
      pill.classList.remove('active');
      pill.setAttribute('aria-pressed', 'false');
      document.body.style.paddingTop = '';
    }
  }

  pill.addEventListener('click', function () { setDev(!devActive); });
  pill.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setDev(!devActive); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.code === 'KeyD') { e.preventDefault(); setDev(!devActive); }
  });

  function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* boot with dev off */
  setDev(false);

}());
