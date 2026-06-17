/* LAQ Practitioner Portal — User Story Panel
   Floating button + slide-in panel. Reads current page filename,
   looks up stories from userstories-data.js, renders the list.
   Design-tool only — amber badge, clearly separate from prototype UI.
*/
(function () {
  // Don't run on the index/gallery page if there are no stories
  var PAGE = window.location.pathname.split('/').pop() || 'index.html';

  function init() {
    if (typeof LAQ_US === 'undefined') return; // data file not loaded

    var storyList = LAQ_US.getForPage(PAGE);

    // ── Styles ──────────────────────────────────────────────────────────
    var style = document.createElement('style');
    style.textContent = [
      '#laq-us-btn{',
        'position:fixed;bottom:24px;right:24px;z-index:99998;',
        'display:flex;align-items:center;gap:8px;',
        'background:#B45309;color:#fff;',
        'border:none;border-radius:24px;',
        'padding:0 18px 0 14px;height:44px;',
        'font-family:"Source Sans 3","Segoe UI",system-ui,sans-serif;',
        'font-size:0.875rem;font-weight:700;',
        'cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,0.25);',
        'transition:background .15s,transform .15s;',
        'white-space:nowrap;',
      '}',
      '#laq-us-btn:hover{background:#92400E;transform:translateY(-1px);}',
      '#laq-us-btn:focus-visible{outline:2px solid #fbbf24;outline-offset:2px;}',

      // Badge showing story count
      '#laq-us-badge{',
        'background:#fff;color:#B45309;',
        'border-radius:10px;font-size:0.75rem;font-weight:700;',
        'padding:1px 7px;min-width:20px;text-align:center;',
      '}',

      // Backdrop
      '#laq-us-backdrop{',
        'display:none;position:fixed;inset:0;z-index:99998;',
        'background:rgba(0,0,0,0.35);',
        'animation:laqFadeIn .2s ease;',
      '}',
      '#laq-us-backdrop.open{display:block;}',

      // Drawer
      '#laq-us-drawer{',
        'position:fixed;top:0;right:0;bottom:0;z-index:99999;',
        'width:420px;max-width:100vw;',
        'background:#fff;',
        'display:flex;flex-direction:column;',
        'box-shadow:-4px 0 32px rgba(0,0,0,0.18);',
        'transform:translateX(100%);',
        'transition:transform .25s cubic-bezier(.4,0,.2,1);',
        'font-family:"Source Sans 3","Segoe UI",system-ui,sans-serif;',
      '}',
      '#laq-us-drawer.open{transform:translateX(0);}',

      // Drawer header
      '#laq-us-header{',
        'display:flex;align-items:center;justify-content:space-between;',
        'padding:16px 20px;',
        'background:#B45309;color:#fff;',
        'flex-shrink:0;',
      '}',
      '#laq-us-header h2{',
        'font-size:1rem;font-weight:700;margin:0;',
      '}',
      '#laq-us-header p{font-size:0.8125rem;margin:2px 0 0;opacity:.85;}',
      '#laq-us-close{',
        'background:none;border:none;color:#fff;cursor:pointer;',
        'width:36px;height:36px;border-radius:4px;',
        'display:flex;align-items:center;justify-content:center;',
        'flex-shrink:0;',
        'font-size:1.25rem;line-height:1;',
        'transition:background .15s;',
      '}',
      '#laq-us-close:hover{background:rgba(255,255,255,.2);}',
      '#laq-us-close:focus-visible{outline:2px solid #fbbf24;outline-offset:2px;}',

      // Story list
      '#laq-us-list{',
        'overflow-y:auto;flex:1;padding:16px 0;',
      '}',
      '.laq-us-item{',
        'padding:14px 20px;border-bottom:1px solid #f0f0f0;',
      '}',
      '.laq-us-item:last-child{border-bottom:none;}',
      '.laq-us-id{',
        'display:inline-block;',
        'font-size:0.75rem;font-weight:700;',
        'background:#FEF3C7;color:#92400E;',
        'border-radius:4px;padding:2px 8px;',
        'margin-bottom:6px;letter-spacing:.02em;',
      '}',
      '.laq-us-role{',
        'font-size:0.8125rem;font-weight:600;color:#555;',
        'margin-bottom:4px;',
      '}',
      '.laq-us-text{',
        'font-size:0.9375rem;color:#181818;line-height:1.5;',
      '}',
      '.laq-us-empty{',
        'padding:40px 20px;text-align:center;',
        'color:#767676;font-size:0.9375rem;',
      '}',

      // Footer note
      '#laq-us-footer{',
        'padding:12px 20px;border-top:1px solid #e5e5e5;',
        'font-size:0.75rem;color:#767676;flex-shrink:0;',
        'background:#fafafa;',
      '}',

      '@keyframes laqFadeIn{from{opacity:0}to{opacity:1}}',
    ].join('');
    document.head.appendChild(style);

    // ── Button ──────────────────────────────────────────────────────────
    var btn = document.createElement('button');
    btn.id = 'laq-us-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'laq-us-drawer');
    btn.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style="flex-shrink:0">' +
        '<path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM7 5h2v2H7V5zm0 3h2v4H7V8z" fill="currentColor"/>' +
      '</svg>' +
      'User Stories' +
      (storyList.length ? '<span id="laq-us-badge">' + storyList.length + '</span>' : '');
    document.body.appendChild(btn);

    // ── Backdrop ────────────────────────────────────────────────────────
    var backdrop = document.createElement('div');
    backdrop.id = 'laq-us-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(backdrop);

    // ── Drawer ──────────────────────────────────────────────────────────
    var drawer = document.createElement('div');
    drawer.id = 'laq-us-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-labelledby', 'laq-us-title');
    drawer.setAttribute('aria-modal', 'true');

    // Header
    var header = document.createElement('div');
    header.id = 'laq-us-header';
    header.innerHTML =
      '<div>' +
        '<h2 id="laq-us-title">User Stories</h2>' +
        '<p>' + storyList.length + ' stor' + (storyList.length === 1 ? 'y' : 'ies') + ' for this screen</p>' +
      '</div>' +
      '<button id="laq-us-close" aria-label="Close user stories panel">&#x2715;</button>';
    drawer.appendChild(header);

    // List
    var list = document.createElement('div');
    list.id = 'laq-us-list';
    if (storyList.length === 0) {
      list.innerHTML = '<p class="laq-us-empty">No user stories mapped to this screen yet.</p>';
    } else {
      list.innerHTML = storyList.map(function (s) {
        return '<div class="laq-us-item">' +
          '<span class="laq-us-id">' + s.id + '</span>' +
          '<div class="laq-us-role">As a ' + s.role + ',</div>' +
          '<div class="laq-us-text">' + s.text + '</div>' +
          '</div>';
      }).join('');
    }
    drawer.appendChild(list);

    // Footer
    var footer = document.createElement('div');
    footer.id = 'laq-us-footer';
    footer.textContent = 'Design tool only — not part of the prototype UI.';
    drawer.appendChild(footer);

    document.body.appendChild(drawer);

    // ── Open / close ────────────────────────────────────────────────────
    var lastFocus;

    function open() {
      lastFocus = document.activeElement;
      drawer.classList.add('open');
      backdrop.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      document.getElementById('laq-us-close').focus();
      document.addEventListener('keydown', onKey);
    }

    function close() {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.removeEventListener('keydown', onKey);
      if (lastFocus) lastFocus.focus();
    }

    function onKey(e) {
      if (e.key === 'Escape') close();
    }

    btn.addEventListener('click', function () {
      drawer.classList.contains('open') ? close() : open();
    });
    backdrop.addEventListener('click', close);
    document.getElementById('laq-us-close').addEventListener('click', close);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
