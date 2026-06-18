/* LAQ Practitioner Portal — User menu dropdown
   Attaches to any .header-user button and renders a dropdown with:
   My Profile  -> S19_practice_details.html
   Settings    -> (placeholder)
   Contact Support -> (placeholder)
   Logout      -> clears sessionStorage auth and returns to sign-in screen
*/
(function () {
  function makeItem(tag, text, cls) {
    var el = document.createElement(tag);
    el.className = 'laq-usermenu__item' + (cls ? ' ' + cls : '');
    if (tag === 'button') { el.type = 'button'; }
    el.setAttribute('role', 'menuitem');
    el.textContent = text;
    return el;
  }

  function init() {
    var btn = document.querySelector('.header-user');
    if (!btn) return;

    // Inject styles
    var style = document.createElement('style');
    style.textContent = [
      '.laq-usermenu-wrap{position:relative;display:inline-block;}',
      '.laq-usermenu{',
      '  display:none;position:absolute;top:calc(100% + 8px);right:0;',
      '  background:#fff;border:1px solid #dddbda;border-radius:6px;',
      '  box-shadow:0 4px 16px rgba(0,0,0,0.14);min-width:220px;',
      '  z-index:9000;overflow:hidden;',
      '}',
      '.laq-usermenu.is-open{display:block;}',
      '.laq-usermenu__label{',
      '  font-size:0.6875rem;font-weight:600;letter-spacing:0.06em;',
      '  text-transform:uppercase;color:#706e6b;',
      '  padding:10px 16px 6px;',
      '}',
      '.laq-usermenu__item{',
      '  display:block;width:100%;text-align:left;',
      '  padding:12px 16px;font-size:1rem;color:#181818;',
      '  background:none;border:none;cursor:pointer;font-family:inherit;',
      '  text-decoration:none;line-height:1.4;',
      '}',
      '.laq-usermenu__item:hover{background:#f3f3f3;}',
      '.laq-usermenu__item:focus-visible{outline:2px solid #005288;outline-offset:-2px;}',
      '.laq-usermenu__divider{height:1px;background:#e5e5e5;margin:4px 0;}',
      '.laq-usermenu__item--logout{color:#c23934;}',
      '.laq-usermenu__item--logout:hover{background:#fff5f4;}',
    ].join('');
    document.head.appendChild(style);

    // Wrap the button
    var wrap = document.createElement('div');
    wrap.className = 'laq-usermenu-wrap';
    btn.parentNode.insertBefore(wrap, btn);
    wrap.appendChild(btn);

    // Build menu using DOM — no innerHTML
    var menu = document.createElement('div');
    menu.className = 'laq-usermenu';
    menu.setAttribute('role', 'menu');
    menu.setAttribute('aria-label', 'User menu');

    var label = document.createElement('div');
    label.className = 'laq-usermenu__label';
    label.textContent = 'Menu';
    menu.appendChild(label);

    var profileLink = document.createElement('a');
    profileLink.className = 'laq-usermenu__item';
    profileLink.setAttribute('role', 'menuitem');
    profileLink.textContent = 'My Profile';
    // Resolve path relative to current page depth
    var path = window.location.pathname;
    profileLink.href = path.indexOf('/v3/') !== -1 ? '../S19_practice_details.html' : 'S19_practice_details.html';
    menu.appendChild(profileLink);

    menu.appendChild(makeItem('button', 'Settings'));
    menu.appendChild(makeItem('button', 'Contact Support'));

    var divider = document.createElement('div');
    divider.className = 'laq-usermenu__divider';
    menu.appendChild(divider);

    var logoutBtn = makeItem('button', 'Logout', 'laq-usermenu__item--logout');
    menu.appendChild(logoutBtn);

    wrap.appendChild(menu);

    // Update aria on trigger button
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');

    // Toggle open/close
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Logout — clear auth and return to sign-in
    logoutBtn.addEventListener('click', function () {
      sessionStorage.removeItem('laq_proto_auth');
      var target = window.location.pathname.indexOf('/v3/') !== -1
        ? '../S01_signin_mfa.html'
        : 'S01_signin_mfa.html';
      window.location.href = target;
    });

    // Close on outside click
    document.addEventListener('click', function () {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });

    // Prevent outside-click handler firing when clicking inside menu
    menu.addEventListener('click', function (e) { e.stopPropagation(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
