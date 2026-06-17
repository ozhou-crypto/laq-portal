(function () {
  var KEY = 'laq_proto_auth';
  if (sessionStorage.getItem(KEY) === '1') return;

  // Freeze scrolling while gate is showing
  var lockStyle = document.createElement('style');
  lockStyle.id = 'laq-lock-style';
  lockStyle.textContent = 'body{overflow:hidden!important}';
  document.head.appendChild(lockStyle);

  var overlay = document.createElement('div');
  overlay.id = 'laq-gate';
  overlay.style.cssText = [
    'position:fixed', 'inset:0', 'z-index:999999',
    'background:#05325F',
    'display:flex', 'align-items:center', 'justify-content:center',
    'font-family:"Source Sans 3","Segoe UI",system-ui,sans-serif'
  ].join(';');

  overlay.innerHTML = [
    '<div style="background:#fff;border-radius:8px;padding:48px 40px;width:380px;',
    'max-width:calc(100vw - 48px);text-align:center;',
    'box-shadow:0 8px 40px rgba(0,0,0,0.35);">',

    // LAQ triangle icon (inline SVG, no external deps)
    '<svg width="48" height="44" viewBox="0 0 45 40" fill="none" ',
    'style="margin-bottom:16px;" aria-hidden="true">',
    '<path d="M21 1.18C21.92-.39 23.42-.39 24.33 1.18L26.6 5.12',
    'C27.06 6 27.29 6.99 27.29 7.98 27.29 8.98 27.06 9.96 26.6 10.85',
    'L17.21 27.04C16.3 28.61 17.05 29.9 18.88 29.9H37.66',
    'C38.66 29.96 39.63 30.25 40.5 30.75 41.37 31.24 42.11 31.93 42.66 32.76',
    'L44.93 36.7C45.84 38.27 45.1 39.56 43.27 39.56H2.06',
    'C.23 39.56-.52 38.27.39 36.7Z" fill="#05325F"/>',
    '<path d="M37.91 25.09C38.67 26.4 38.05 27.48 36.53 27.48H22.91',
    'C21.38 27.48 20.76 26.4 21.52 25.09L28.33 13.37',
    'C29.09 12.05 30.34 12.05 31.1 13.37Z" fill="#47C3D3"/>',
    '</svg>',

    '<p style="font-size:1.375rem;font-weight:700;color:#05325F;margin:0 0 4px;">',
    'LAQ Practitioner Portal</p>',
    '<p style="font-size:0.9375rem;color:#555;margin:0 0 28px;">',
    'Prototype — enter the password to continue</p>',

    '<input id="laq-pw" type="password" autocomplete="current-password" ',
    'placeholder="Password" ',
    'style="display:block;width:100%;height:46px;padding:0 14px;',
    'font-size:1rem;font-family:inherit;',
    'border:1.5px solid #ccc;border-radius:5px;',
    'margin-bottom:10px;box-sizing:border-box;outline:none;',
    'transition:border-color .15s,box-shadow .15s;" />',

    '<p id="laq-err" role="alert" style="color:#c23934;font-size:0.875rem;',
    'min-height:20px;margin:0 0 12px;"></p>',

    '<button id="laq-btn" style="width:100%;height:46px;',
    'background:#05325F;color:#fff;border:none;border-radius:5px;',
    'font-size:1rem;font-weight:700;font-family:inherit;cursor:pointer;',
    'transition:background .15s;">Enter</button>',

    '</div>'
  ].join('');

  function check() {
    if (document.getElementById('laq-pw').value === 'legalaid') {
      sessionStorage.setItem(KEY, '1');
      document.getElementById('laq-gate').remove();
      document.getElementById('laq-lock-style').remove();
    } else {
      document.getElementById('laq-err').textContent = 'Incorrect password. Please try again.';
      document.getElementById('laq-pw').value = '';
      document.getElementById('laq-pw').focus();
    }
  }

  function mount() {
    document.body.appendChild(overlay);
    var btn = document.getElementById('laq-btn');
    var inp = document.getElementById('laq-pw');
    btn.addEventListener('click', check);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
    inp.addEventListener('focus', function () {
      inp.style.borderColor = '#05325F';
      inp.style.boxShadow = '0 0 0 2px rgba(5,50,95,.25)';
    });
    inp.addEventListener('blur', function () {
      inp.style.borderColor = '#ccc';
      inp.style.boxShadow = 'none';
    });
    inp.focus();
  }

  if (document.body) { mount(); }
  else { document.addEventListener('DOMContentLoaded', mount); }
})();
