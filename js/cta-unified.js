(function () {
  'use strict';

  var TENJIN_URL = 'https://beauty.hotpepper.jp/kr/slnH000736255/';
  var OGORI_URL = 'https://beauty.hotpepper.jp/kr/slnH000498862/';
  var LINE_URL = '#contact';

  function markReserveLinks(selector, className) {
    var links = document.querySelectorAll(selector);
    links.forEach(function (link) {
      link.classList.add('global-reserve-link', className);
      link.setAttribute('rel', 'noopener');
      link.setAttribute('target', '_blank');
    });
  }

  function normalizeHeaderCta() {
    var headerLinks = document.querySelectorAll('.header-cta, .nav-cta, .lp-header-cta');
    headerLinks.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (href === '#contact' || href.indexOf('#contact') > -1) {
        link.textContent = 'LINEで無料相談';
      }
    });
  }

  function buildMobileCta() {
    if (document.querySelector('.global-mobile-cta')) return;

    var bar = document.createElement('div');
    bar.className = 'global-mobile-cta';
    bar.setAttribute('aria-label', '予約と相談');
    bar.innerHTML = [
      '<div class="global-mobile-cta__inner">',
      '  <div class="global-mobile-cta__copy">',
      '    <strong>初回体験 ¥3,300〜</strong>',
      '    <span>勧誘なし・完全予約制</span>',
      '  </div>',
      '  <div class="global-mobile-cta__actions">',
      '    <a class="global-mobile-cta__btn global-mobile-cta__btn--tenjin" href="' + TENJIN_URL + '" target="_blank" rel="noopener">天神</a>',
      '    <a class="global-mobile-cta__btn global-mobile-cta__btn--ogori" href="' + OGORI_URL + '" target="_blank" rel="noopener">小郡</a>',
      '    <a class="global-mobile-cta__btn global-mobile-cta__btn--line" href="' + LINE_URL + '">LINE</a>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(bar);
    document.body.classList.add('has-global-mobile-cta');
  }

  function init() {
    markReserveLinks('a[href*="slnH000736255"]', 'global-reserve-tenjin');
    markReserveLinks('a[href*="slnH000498862"]', 'global-reserve-ogori');
    normalizeHeaderCta();
    buildMobileCta();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
