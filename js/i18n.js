(function () {
  'use strict';

  var STORAGE_KEY = 'bisin-language';
  var DEFAULT_LANG = 'jp';
  var languages = ['jp', 'cn', 'en'];
  var languageNames = {
    jp: '日本語',
    cn: '中文',
    en: 'English'
  };

  var copy = {
    jp: {
      htmlLang: 'ja',
      label: 'LANG',
      title: 'Coolspa - 脂肪冷却瘦身 & ネイルサロン',
      summaryTitle: 'Coolspa 脂肪冷却瘦身 & ネイルサロン',
      summaryText: '福岡・天神 / 小郡で、脂肪冷却ボディケアとネイルを相談しながら選べます。',
      reserveTenjin: '天神店を予約',
      reserveOgori: '小郡店を予約',
      lineConsult: 'LINE相談',
      reserve: '予約する',
      freeConsult: '無料相談',
      home: 'ホーム',
      service: 'サービス',
      fatFreezing: '脂肪冷却',
      nail: 'ネイル',
      stores: '店舗案内',
      business: '導入サポート',
      blog: 'ブログ',
      hotpepper: 'HotPepper',
      pageTitle: {
        home: 'BISIN BEAUTY | Coolspa 脂肪冷却瘦身 & ネイルサロン',
        service: 'サービス | BISIN BEAUTY',
        fat: '脂肪冷却瘦身 | BISIN BEAUTY',
        nail: 'ネイル | BISIN BEAUTY',
        tenjin: 'COOL SPA 天神店 | BISIN BEAUTY',
        ogori: 'CHUCHU 小郡店 | BISIN BEAUTY',
        business: 'サロン導入サポート | BISIN BEAUTY',
        lp: '初回体験キャンペーン | BISIN BEAUTY',
        blog: 'ブログ | BISIN BEAUTY'
      }
    },
    cn: {
      htmlLang: 'zh-CN',
      label: '语言',
      title: 'Coolspa - 脂肪冷冻瘦身 & 美甲沙龙',
      summaryTitle: 'Coolspa 脂肪冷冻瘦身 & 美甲沙龙',
      summaryText: '在福冈天神 / 小郡，可咨询脂肪冷冻瘦身、美甲护理与预约方案。',
      reserveTenjin: '预约天神店',
      reserveOgori: '预约小郡店',
      lineConsult: '微信咨询',
      reserve: '立即预约',
      freeConsult: '免费咨询',
      home: '首页',
      service: '项目',
      fatFreezing: '脂肪冷冻瘦身',
      nail: '美甲',
      stores: '门店',
      business: '加盟/导入',
      blog: '博客',
      hotpepper: 'HotPepper',
      pageTitle: {
        home: 'BISIN BEAUTY | Coolspa 脂肪冷冻瘦身 & 美甲沙龙',
        service: '项目 | BISIN BEAUTY',
        fat: '脂肪冷冻瘦身 | BISIN BEAUTY',
        nail: '美甲 | BISIN BEAUTY',
        tenjin: 'COOL SPA 天神店 | BISIN BEAUTY',
        ogori: 'CHUCHU 小郡店 | BISIN BEAUTY',
        business: '沙龙加盟与导入支持 | BISIN BEAUTY',
        lp: '初次体验活动 | BISIN BEAUTY',
        blog: '博客 | BISIN BEAUTY'
      }
    },
    en: {
      htmlLang: 'en',
      label: 'LANG',
      title: 'Coolspa - Fat Freezing Body Care & Nail Salon',
      summaryTitle: 'Coolspa Fat Freezing Body Care & Nail Salon',
      summaryText: 'Choose fat-freezing body care and nail services in Fukuoka Tenjin / Ogori with easy consultation.',
      reserveTenjin: 'Book Tenjin',
      reserveOgori: 'Book Ogori',
      lineConsult: 'LINE Chat',
      reserve: 'Book Now',
      freeConsult: 'Free Consult',
      home: 'Home',
      service: 'Services',
      fatFreezing: 'Fat Freezing',
      nail: 'Nails',
      stores: 'Stores',
      business: 'Business',
      blog: 'Blog',
      hotpepper: 'HotPepper',
      pageTitle: {
        home: 'BISIN BEAUTY | Coolspa Fat Freezing & Nail Salon',
        service: 'Services | BISIN BEAUTY',
        fat: 'Fat Freezing Body Care | BISIN BEAUTY',
        nail: 'Nail Salon | BISIN BEAUTY',
        tenjin: 'COOL SPA Tenjin | BISIN BEAUTY',
        ogori: 'CHUCHU Ogori | BISIN BEAUTY',
        business: 'Salon Business Support | BISIN BEAUTY',
        lp: 'First Visit Campaign | BISIN BEAUTY',
        blog: 'Blog | BISIN BEAUTY'
      }
    }
  };

  var pageBodyCopy = {
    home: {
      jp: {
        heroTagline: '天神・小郡｜脂肪冷却・ネイルサロン',
        heroTitle: '福岡で"無理なく美しく"',
        heroSub: '脂肪冷却で理想のボディへ。ネイルで指先まで整う、トータルビューティーサロン。',
        heroDesc: '結果重視の痩身と、上品なネイルを一つの場所で。初めての方でも安心して通える、自然で続けやすい美しさをご提案します。',
        trust1: '✓ 初回体験あり',
        trust2: '✓ 無理な勧誘なし',
        trust3: '✓ 症例多数・口コミ高評価',
        storeSelect: 'ご希望の店舗をお選びください',
        servicesTitle: '目的に合わせて選べる、2つの美しさ',
        servicesLead: '結果を求める痩身ケアと、気分まで整うネイル。どちらも通いやすく、続けやすいメニュー構成です。',
        fatTitle: '脂肪冷却痩身',
        fatText: '気になる部位へアプローチし、無理なくボディラインを整える人気メニュー。サウナとの組み合わせで満足度の高い体感へ。',
        fatTag1: '初回体験あり',
        fatTag2: 'お腹・背中・腕に対応',
        fatTag3: '結果重視',
        nailTitle: 'ネイル',
        nailText: '可愛い系から上品デザインまで、日常に馴染む美しさをご提案。シンプルでも手元がきれいに見えるデザインを大切にしています。',
        nailTag1: '上品デザイン',
        nailTag2: 'カラー相談',
        nailTag3: '季節提案あり',
        resultsTitle: '加工なし。数字が証明。',
        resultsLead: '食事制限・激しい運動なし。お客様の実測データをそのままご紹介します。',
        kpi1: '平均口コミ評価',
        kpi2: '平均ウエスト変化',
        kpi3: '継続率',
        storesTitle: 'それぞれの魅力がある、2つのサロン',
        storesLead: '天神は脂肪冷却メインの結果重視サロン、小郡はネイルも楽しめるトータルビューティーサロン。ご希望の雰囲気に合わせてお選びいただけます。',
        rating: '★ 4.8  口コミ高評価',
        detail: '詳細を見る →',
        tenjinSub: '脂肪冷却専門サロン ｜ 天神南駅 徒歩3分',
        ogoriSub: 'ネイル＋痩身サロン ｜ 西鉄小郡駅 徒歩5分',
        tenjinAddress: '📍 福岡市中央区天神2丁目',
        ogoriAddress: '📍 福岡県小郡市',
        tenjinAccess: '🚃 天神南駅 6番出口 徒歩3分',
        ogoriAccess: '🚃 西鉄小郡駅 徒歩5分',
        hours: '🕐 10:00〜20:00（最終受付 19:00）',
        map: 'Google マップで見る',
        plansTitle: 'はじめやすく、続けやすい人気プラン',
        plansLead: 'まずは気軽に試したい方から、しっかり通いたい方まで。入口がわかりやすい価格帯で、安心してご予約いただけます。',
        plan1: '脂肪冷却 1CUP 体験',
        plan1Badge: '初回',
        plan1Text: '脂肪冷却をまず試してみたい方に。気になる部位へピンポイントで体験しやすい入口プラン。',
        plan2: 'サウナ×脂肪冷却 4cup',
        plan2Badge: '人気',
        plan2Text: '温めてから冷やす流れで、満足度の高い体感へ。初回でも選ばれやすい定番プランです。',
        plan3: 'サウナ×脂肪冷却 8cup',
        plan3Badge: 'しっかり',
        plan3Text: '複数部位をまとめてケアしたい方へ。ボディライン全体を意識したい方におすすめです。'
      },
      cn: {
        heroTagline: '天神・小郡｜脂肪冷却瘦身・美甲沙龙',
        heroTitle: '在福冈，轻松变美',
        heroSub: '用脂肪冷却打造理想身形，用美甲整理指尖细节的一站式美容沙龙。',
        heroDesc: '把重视效果的瘦身护理与高级感美甲放在同一个空间。第一次来也能安心咨询，选择自然、容易坚持的变美方式。',
        trust1: '✓ 可初次体验',
        trust2: '✓ 不强迫推销',
        trust3: '✓ 案例丰富・好评度高',
        storeSelect: '请选择希望预约的门店',
        servicesTitle: '按目的选择，两种美丽方案',
        servicesLead: '想看见身形变化，可以选择瘦身护理；想整理心情和指尖，可以选择美甲。菜单设计都注重好预约、好坚持。',
        fatTitle: '脂肪冷却瘦身',
        fatText: '针对在意部位进行护理，帮助自然整理身体线条。可搭配桑拿温热流程，体验感更完整。',
        fatTag1: '可初次体验',
        fatTag2: '腹部・背部・手臂适用',
        fatTag3: '重视效果',
        nailTitle: '美甲',
        nailText: '从可爱风到高级简约设计，提供适合日常的指尖美感。重视即使简单也显手部干净精致的效果。',
        nailTag1: '高级感设计',
        nailTag2: '可咨询颜色',
        nailTag3: '季节款建议',
        resultsTitle: '不修图，用数字说话。',
        resultsLead: '无需节食或剧烈运动。这里展示真实顾客的实测变化数据。',
        kpi1: '平均评价',
        kpi2: '平均腰围变化',
        kpi3: '持续到店率',
        storesTitle: '两家沙龙，各有魅力',
        storesLead: '天神店以脂肪冷却和效果为主，小郡店可同时享受美甲与瘦身护理。可按交通、氛围和需求选择。',
        rating: '★ 4.8  高评价',
        detail: '查看详情 →',
        tenjinSub: '脂肪冷却专门沙龙 ｜ 天神南站步行3分钟',
        ogoriSub: '美甲＋瘦身沙龙 ｜ 西铁小郡站步行5分钟',
        tenjinAddress: '📍 福冈市中央区天神2丁目',
        ogoriAddress: '📍 福冈县小郡市',
        tenjinAccess: '🚃 天神南站 6号出口步行3分钟',
        ogoriAccess: '🚃 西铁小郡站步行5分钟',
        hours: '🕐 10:00〜20:00（最晚接待 19:00）',
        map: '用 Google 地图查看',
        plansTitle: '容易开始，也容易坚持的人气方案',
        plansLead: '无论只是想先体验，还是想认真持续护理，都可以从清楚易懂的价格入口开始预约。',
        plan1: '脂肪冷却 1CUP 体验',
        plan1Badge: '初次',
        plan1Text: '适合想先试试脂肪冷却的人。可针对在意部位进行轻松体验。',
        plan2: '桑拿×脂肪冷却 4cup',
        plan2Badge: '人气',
        plan2Text: '先温热再冷却，体感更完整。初次到店也容易选择的标准方案。',
        plan3: '桑拿×脂肪冷却 8cup',
        plan3Badge: '集中护理',
        plan3Text: '适合想一次护理多个部位的人。推荐给想整体调整身体线条的顾客。'
      },
      en: {
        heroTagline: 'Tenjin / Ogori | Fat Freezing & Nail Salon',
        heroTitle: 'Beautiful in Fukuoka, without overdoing it',
        heroSub: 'Fat-freezing body care for your ideal shape, plus nails that polish every detail.',
        heroDesc: 'Result-focused body care and refined nail design in one salon. A calm, easy-to-continue beauty experience, even for first-time guests.',
        trust1: '✓ First visit trial',
        trust2: '✓ No pushy sales',
        trust3: '✓ Many cases and strong reviews',
        storeSelect: 'Choose your preferred store',
        servicesTitle: 'Two beauty options for your goals',
        servicesLead: 'Body care for visible results, and nail services that lift your mood. Both menus are designed to be easy to book and easy to continue.',
        fatTitle: 'Fat Freezing Body Care',
        fatText: 'Target the areas you care about and shape your body line without extreme routines. Pair it with sauna warming for a more satisfying experience.',
        fatTag1: 'Trial available',
        fatTag2: 'Abdomen, back and arms',
        fatTag3: 'Result focused',
        nailTitle: 'Nails',
        nailText: 'From cute styles to refined designs, we suggest nails that fit naturally into everyday life and make your hands look polished.',
        nailTag1: 'Refined designs',
        nailTag2: 'Color consultation',
        nailTag3: 'Seasonal suggestions',
        resultsTitle: 'No retouching. The numbers speak.',
        resultsLead: 'No strict dieting or intense workouts. We show real measured data from our guests.',
        kpi1: 'Average review score',
        kpi2: 'Average waist change',
        kpi3: 'Continuation rate',
        storesTitle: 'Two salons, two different charms',
        storesLead: 'Tenjin focuses on fat-freezing results. Ogori offers total beauty with nails and body care. Choose by access, mood and goals.',
        rating: '★ 4.8  Highly rated',
        detail: 'View details →',
        tenjinSub: 'Fat-freezing salon | 3 min walk from Tenjin-minami',
        ogoriSub: 'Nails + body care salon | 5 min walk from Nishitetsu Ogori',
        tenjinAddress: '📍 Tenjin 2-chome, Chuo-ku, Fukuoka',
        ogoriAddress: '📍 Ogori, Fukuoka',
        tenjinAccess: '🚃 3 min walk from Tenjin-minami Exit 6',
        ogoriAccess: '🚃 5 min walk from Nishitetsu Ogori Station',
        hours: '🕐 10:00-20:00 (last reception 19:00)',
        map: 'View on Google Maps',
        plansTitle: 'Popular plans that are easy to start',
        plansLead: 'From a quick first trial to regular care, these clear entry plans make booking simple.',
        plan1: 'Fat Freezing 1 Cup Trial',
        plan1Badge: 'First visit',
        plan1Text: 'For guests who want to try fat freezing first. A simple entry plan for one target area.',
        plan2: 'Sauna x Fat Freezing 4 cups',
        plan2Badge: 'Popular',
        plan2Text: 'Warm first, then cool. A balanced standard plan that many first-time guests choose.',
        plan3: 'Sauna x Fat Freezing 8 cups',
        plan3Badge: 'Full care',
        plan3Text: 'For guests who want to care for multiple areas and focus on the whole body line.'
      }
    }
  };

  function getBasePath() {
    var script = document.currentScript;
    if (!script || !script.src) return '';
    return script.src.replace(/\/js\/i18n\.js(?:\?.*)?$/, '');
  }

  var basePath = getBasePath();

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return languages.indexOf(stored) !== -1 ? stored : DEFAULT_LANG;
  }

  function setText(node, text) {
    if (node && text) node.textContent = text;
  }

  function pageKey() {
    var path = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    if (path.indexOf('/lp/') !== -1) return 'lp';
    if (path.indexOf('/blog/') !== -1) return 'blog';
    if (path.indexOf('/for-business') !== -1) return 'business';
    if (path.indexOf('/services/fat-freezing') !== -1) return 'fat';
    if (path.indexOf('/services/nail') !== -1) return 'nail';
    if (path.indexOf('/service') !== -1) return 'service';
    if (path.indexOf('/stores/coolspa-tenjin') !== -1) return 'tenjin';
    if (path.indexOf('/stores/chuchu-ogori') !== -1) return 'ogori';
    return 'home';
  }

  function makeLink(path, hash) {
    var url = basePath ? basePath + '/' + path : path;
    return hash ? url + hash : url;
  }

  function createSwitcher(lang) {
    var wrap = document.createElement('div');
    wrap.className = 'lang-switcher';
    wrap.dataset.langSwitcher = 'true';

    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'lang-switcher__trigger';
    trigger.setAttribute('aria-haspopup', 'menu');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML =
      '<svg class="lang-switcher__globe" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
        '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>' +
        '<path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.3 2.4 3.4 5.4 3.4 9S14.3 18.6 12 21c-2.3-2.4-3.4-5.4-3.4-9S9.7 5.4 12 3z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
      '</svg>' +
      '<span class="lang-switcher__current"></span>' +
      '<svg class="lang-switcher__chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
        '<path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>';
    trigger.addEventListener('click', function () {
      var open = !wrap.classList.contains('is-open');
      wrap.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    wrap.appendChild(trigger);

    var menu = document.createElement('div');
    menu.className = 'lang-switcher__menu';
    menu.setAttribute('role', 'menu');

    languages.forEach(function (code) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'lang-switcher__option';
      button.dataset.lang = code;
      button.setAttribute('role', 'menuitemradio');
      button.setAttribute('aria-checked', code === lang ? 'true' : 'false');
      button.innerHTML =
        '<span class="lang-switcher__code">' + code.toUpperCase() + '</span>' +
        '<span class="lang-switcher__name">' + languageNames[code] + '</span>' +
        '<span class="lang-switcher__check" aria-hidden="true">✓</span>';
      button.addEventListener('click', function () {
        applyLanguage(code, true);
        wrap.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      });
      menu.appendChild(button);
    });
    wrap.appendChild(menu);

    document.addEventListener('click', function (event) {
      if (wrap.contains(event.target)) return;
      wrap.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      wrap.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    });

    return wrap;
  }

  function mountSwitcher(lang) {
    if (document.querySelector('.lang-switcher')) return;
    var headerInner = document.querySelector('.header-inner, .lp-header .container');
    if (!headerInner) return;

    var switcher = createSwitcher(lang);
    var cta = headerInner.querySelector('.header-cta, .nav-cta, .lp-header-cta');

    if (cta) {
      var pack = document.createElement('div');
      pack.className = 'i18n-header-pack';
      cta.parentNode.insertBefore(pack, cta);
      pack.appendChild(switcher);
      pack.appendChild(cta);
    } else {
      headerInner.appendChild(switcher);
    }
  }

  function mountSummary() {
    if (document.querySelector('.i18n-summary')) return;
    var header = document.querySelector('.site-header, .lp-header');
    if (!header || !header.parentNode) return;

    var summary = document.createElement('div');
    summary.className = 'i18n-summary';
    summary.innerHTML =
      '<div class="i18n-summary__inner">' +
        '<div class="i18n-summary__copy">' +
          '<p class="i18n-summary__title" data-i18n-static="summaryTitle"></p>' +
          '<p class="i18n-summary__text" data-i18n-static="summaryText"></p>' +
        '</div>' +
        '<div class="i18n-summary__actions">' +
          '<a class="i18n-summary__link i18n-summary__link--primary" data-i18n-static="reserveTenjin" href="https://beauty.hotpepper.jp/kr/slnH000736255/" target="_blank" rel="noopener"></a>' +
          '<a class="i18n-summary__link" data-i18n-static="reserveOgori" href="https://beauty.hotpepper.jp/kr/slnH000498862/" target="_blank" rel="noopener"></a>' +
          '<a class="i18n-summary__link" data-i18n-static="lineConsult" href="' + makeLink('index.html', '#contact') + '"></a>' +
        '</div>' +
      '</div>';

    header.parentNode.insertBefore(summary, header.nextSibling);
  }

  function translateNav(t) {
    document.querySelectorAll('nav a').forEach(function (link) {
      var href = (link.getAttribute('href') || '').toLowerCase();
      if (href.indexOf('for-business') !== -1 || href.indexOf('outsourcing') !== -1) setText(link, t.business);
      else if (href.indexOf('fat-freezing') !== -1) setText(link, t.fatFreezing);
      else if (href.indexOf('nail') !== -1) setText(link, t.nail);
      else if (href.indexOf('stores') !== -1 || href.indexOf('coolspa-tenjin') !== -1 || href.indexOf('chuchu-ogori') !== -1) setText(link, t.stores);
      else if (href.indexOf('service') !== -1) setText(link, t.service);
      else if (href.indexOf('blog') !== -1) setText(link, t.blog);
      else if (href === '#contact' || href.indexOf('#contact') !== -1) setText(link, t.reserve);
      else if (href === '/' || href.indexOf('index.html') !== -1 || href === '../index.html') setText(link, t.home);
    });
  }

  function translateCtas(t) {
    document.querySelectorAll('.header-cta, .nav-cta, .lp-header-cta').forEach(function (el) {
      var href = (el.getAttribute('href') || '').toLowerCase();
      if (href.indexOf('outsourcing') !== -1) setText(el, t.freeConsult);
      else if (el.classList.contains('lp-header-cta')) setText(el, t.reserve);
      else if (href.indexOf('#contact') !== -1) setText(el, t.lineConsult);
    });

    document.querySelectorAll('.footer-hp-btn').forEach(function (el) {
      var href = (el.getAttribute('href') || '').toLowerCase();
      var suffix = el.querySelector('.hp-badge') ? ' ' + t.hotpepper : '';
      setText(el, href.indexOf('h000736255') !== -1 ? t.reserveTenjin + suffix : t.reserveOgori + suffix);
    });
  }

  function translateMainButtons(t) {
    document.querySelectorAll('a').forEach(function (el) {
      if (el.closest('nav, footer, .i18n-summary, .i18n-header-pack')) return;

      var href = (el.getAttribute('href') || '').toLowerCase();
      var isButton = /\b(btn|cta|reserve|line)\b/i.test(el.className || '');
      if (!isButton) return;

      if (href.indexOf('h000736255') !== -1) {
        setText(el, t.reserveTenjin);
      } else if (href.indexOf('h000498862') !== -1) {
        setText(el, t.reserveOgori);
      } else if (href === '#contact' || href.indexOf('#contact') !== -1) {
        var raw = (el.textContent || '').toLowerCase();
        setText(el, raw.indexOf('line') !== -1 || el.className.indexOf('secondary') !== -1 ? t.lineConsult : t.reserve);
      }
    });
  }

  function applyStaticCopy(t) {
    document.querySelectorAll('[data-i18n-static]').forEach(function (el) {
      setText(el, t[el.getAttribute('data-i18n-static')]);
    });
  }

  function setBodyText(selector, value) {
    setText(document.querySelector(selector), value);
  }

  function setBodyTextAt(selector, index, value) {
    var nodes = document.querySelectorAll(selector);
    setText(nodes[index], value);
  }

  var chineseContactObserver = null;
  var chineseContactPending = false;
  var originalLineText = new WeakMap();
  var originalLineImage = new WeakMap();
  var originalLineLink = new WeakMap();
  var originalChineseTermText = new WeakMap();
  var originalJapaneseCopyText = new WeakMap();
  var japaneseToChineseCopy = [
    ['FEATURED CASE', '精选案例'],
    ['Featured Case', '精选案例'],
    ['後ろ姿でわかる、背中・腰まわりの変化。', '从背影就能看出的背部和腰周变化。'],
    ['100カップチャレンジ経過症例。顔出しではなく背中・腰まわりのライン変化が見える写真に差し替え、初めての方にも実感値が伝わりやすい構成にしました。', '100杯挑战阶段案例。不露脸也能看到背部和腰周线条变化，第一次咨询的人也更容易判断真实效果。'],
    ['脂肪冷却は回数を重ねながら、約1ヶ月かけてラインの変化を見ていく施術です。温めてから冷却する流れで、夏前のサイズダウン相談にもおすすめです。', '脂肪冷冻瘦身适合持续护理，通常会在约1个月左右观察线条变化。先温热再冷冻，也适合夏天前想管理尺寸的人。'],
    ['脂肪冷冻瘦身は回数を重ねながら、約1ヶ月かけてラインの変化を見ていく施術です。温めてから冷却する流れで、夏前のサイズダウン相談にもおすすめです。', '脂肪冷冻瘦身适合持续护理，通常会在约1个月左右观察线条变化。先温热再冷冻，也适合夏天前想管理尺寸的人。'],
    ['4回後', '4次后'],
    ['100cup', '100杯'],
    ['チャレンジ経過', '挑战经过'],
    ['100カップチャレンジ / 背中・腰まわり', '100杯挑战 / 背部・腰周'],
    ['HotPepper掲載内容より要約', '根据 HotPepper 发布内容整理'],
    ['HotPepper掲載症例を見る', '查看 HotPepper 案例'],
    ['HotPepper Beautyの口コミを見る', '查看 HotPepper Beauty 评价'],
    ['口コミと実測値で見る、リアルな変化。', '从顾客评价和实测数据，看真实变化。'],
    ['HotPepper Beauty掲載の口コミ・症例傾向をもとに、通う前に知りたい変化量、体感、接客の安心感を整理しました。', '根据 HotPepper Beauty 上的顾客评价和案例趋势，整理了来店前想了解的变化幅度、体感和服务安心感。'],
    ['HotPepper口コミ平均', 'HotPepper 平均评价'],
    ['口コミ掲載数', '评价发布数'],
    ['丁寧な説明', '说明细致'],
    ['初めてでも施術の流れ、冷却中の感覚、来店後の過ごし方まで説明があり安心できた、という声。', '不少顾客反馈，第一次来时也会说明护理流程、冷冻中的感觉以及护理后的注意事项，所以更安心。'],
    ['痛みへの安心', '痛感方面更安心'],
    ['最初は冷たさや吸引が不安でも、数分で慣れて続けられそうと感じた、という口コミ傾向。', '很多评价提到，一开始会担心冷感和吸附感，但几分钟后就能适应，觉得可以继续护理。'],
    ['サウナ×冷却', '桑拿×冷冻'],
    ['サウナドームで温まってから脂肪冷却を受ける流れが心地よく、発汗や身体の軽さも好評。', '先用桑拿舱温热身体，再进行脂肪冷冻瘦身，整体流程舒适，出汗感和身体轻盈感也很受好评。'],
    ['「天神南駅からすぐで通いやすい。スタッフの説明がとても丁寧で、初めてでも安心して施術を受けられました。」', '“离天神南站很近，来店很方便。工作人员说明非常细致，第一次来也能安心接受护理。”'],
    ['「勧誘が一切なくてびっくりしました。自分のペースで通えるので、無理なく続けられています。結果も出ていて大満足。」', '“完全没有强推，这点让我很惊喜。可以按照自己的节奏来店，所以能轻松坚持。也看到了效果，非常满意。”'],
    ['「施術中にスマホが使えるので、仕事の合間にサクッと来られます。仕上がりがわかりやすくて、通う楽しみができました。」', '“护理中可以使用手机，所以工作间隙也能轻松来。效果容易看出来，也让我更期待持续护理。”'],
    ['「ネイルと脂肪冷却を同じ日にできて、時間の節約になりました。スタッフさんも気さくで話しやすい。」', '“美甲和脂肪冷冻瘦身可以安排在同一天，节省了很多时间。工作人员也很亲切，沟通起来很轻松。”'],
    ['「ネイルと脂肪冷冻瘦身を同じ日にできて、時間の節約になりました。スタッフさんも気さくで話しやすい。」', '“美甲和脂肪冷冻瘦身可以安排在同一天，节省了很多时间。工作人员也很亲切，沟通起来很轻松。”'],
    ['「駐車場があるのがとても助かります。小郡で通いやすいサロンを探していたので、本当に見つけられてよかった。」', '“有停车场真的很方便。我一直在小郡找方便持续来店的沙龙，能找到这里真的太好了。”'],
    ['「勧誘一切なしが本当で、自分のペースで通えます。ネイルのデザインも相談に乗ってくれて満足です。」', '“真的没有任何强推，可以按照自己的节奏来。美甲设计也会认真一起商量，很满意。”'],
    ['脂肪冷却 ／ 3ヶ月通い中', '脂肪冷冻瘦身 / 持续护理3个月'],
    ['脂肪冷却 ／ 半年以上通い中', '脂肪冷冻瘦身 / 持续护理半年以上'],
    ['脂肪冷却 ／ 2ヶ月通い中', '脂肪冷冻瘦身 / 持续护理2个月'],
    ['ネイル＋脂肪冷却 ／ 通い中', '美甲＋脂肪冷冻瘦身 / 持续护理中'],
    ['ネイル＋脂肪冷冻瘦身 ／ 通い中', '美甲＋脂肪冷冻瘦身 / 持续护理中'],
    ['脂肪冷却 ／ 4ヶ月通い中', '脂肪冷冻瘦身 / 持续护理4个月'],
    ['ネイル ／ リピート中', '美甲 / 持续复购中'],
    ['30代女性', '30多岁女性'],
    ['40代女性', '40多岁女性'],
    ['予約前チェック', '预约前确认'],
    ['口コミ・症例を見てから、納得して予約できます。', '先看顾客评价和案例，再安心预约。'],
    ['初めての脂肪冷却で不安になりやすい「痛み」「説明の丁寧さ」「効果時期」を、HotPepperの声と症例写真で先に確認できる導線にしました。', '第一次做脂肪冷冻瘦身时，很多人会担心痛感、说明是否细致、效果出现时间。这里可以先通过 HotPepper 的评价和案例照片确认，再决定是否预约。'],
    ['初めての脂肪冷冻瘦身で不安になりやすい「痛み」「説明の丁寧さ」「効果時期」を、HotPepperの声と症例写真で先に確認できる導線にしました。', '第一次做脂肪冷冻瘦身时，很多人会担心痛感、说明是否细致、效果出现时间。这里可以先通过 HotPepper 的评价和案例照片确认，再决定是否预约。'],
    ['説明が丁寧', '说明细致'],
    ['無理な勧誘なし', '无强推'],
    ['勧誘一切なし', '无强推'],
    ['痛みへの配慮', '会照顾痛感'],
    ['変化を写真で確認', '用照片确认变化'],
    ['口コミを見る', '查看顾客评价'],
    ['症例を見る', '查看案例'],
    ['口コミで不安を減らす', '通过评价减少不安'],
    ['接客・痛み・通いやすさを確認', '确认服务、痛感和来店便利度'],
    ['症例で変化を確認', '通过案例确认变化'],
    ['写真とサイズ変化の目安を見る', '查看照片和尺寸变化参考'],
    ['自分の部位を相談', '咨询自己在意的部位'],
    ['お腹・背中・二の腕などを相談', '咨询腹部、背部、上臂等部位'],
    ['空き枠を選んで予約', '选择空档并预约'],
    ['HotPepperでそのまま予約へ', '直接前往 HotPepper 预约'],
    ['お問い合わせは', '咨询请使用'],
    ['でいつでも♪', '随时都可以哦~'],
    ['カメラでスキャン', '扫码添加微信'],
    ['LINEで予約する', '微信预约'],
    ['LINEで相談する', '微信咨询'],
    ['LINEで事前相談', '微信事前咨询'],
    ['LINEでお問い合わせください', '请通过微信咨询'],
    ['ご予約・お問い合わせはLINEがおすすめ！', '预约和咨询推荐使用微信！'],
    ['LINEで予約・相談', '微信预约・咨询'],
    ['メニューに迷う方はWeChatで事前相談できます', '亲，先微信确认，然后再预约更安心哦~'],
    ['メニューに迷う方は微信で事前相談できます', '亲，先微信确认，然后再预约更安心哦~'],
    ['カウンセリングから丁寧にご案内。勧誘なし・完全予約制で安心してお越しいただけます。', '从咨询开始会用中文细心说明。无强推、完全预约制，来店更安心。'],
    ['初回体験を予約する', '预约初次体验'],
    ['人気プランで予約する', '预约人气套餐'],
    ['全身プランを相談する', '咨询全身套餐'],
    ['掲載内容は症例傾向をもとに要約しています。結果には個人差があり、効果を保証するものではありません。', '以上内容根据案例趋势整理。效果因人而异，并不保证所有人都能获得相同结果。'],
    ['実際の来店者の声と症例を見て、施術の流れ・痛み・変化の目安を予約前に確認できます。', '预约前可以先参考真实来店顾客的评价和案例，了解护理流程、痛感和变化参考。'],
    ['お客様の声', '顾客评价'],
    ['口コミより要約', '根据评价整理'],
    ['天神店を予約', '预约天神店'],
    ['小郡店を予約', '预约小郡店'],
    ['詳細を見る', '查看详情'],
    ['即予約', '立即预约']
  ];

  function localizeChineseTerms(text) {
    if (!text) return text;
    return text
      .replace(/脂肪冷却痩身/g, '脂肪冷冻瘦身')
      .replace(/脂肪冷却瘦身/g, '脂肪冷冻瘦身')
      .replace(/脂肪冷却/g, '脂肪冷冻瘦身')
      .replace(/WeChat/g, '微信');
  }
  function shouldSkipContactNode(node) {
    if (!node || !node.parentElement) return true;
    return /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|INPUT|OPTION)$/.test(node.parentElement.tagName);
  }

  function localizeJapaneseCopyForChinese(text) {
    if (!text) return text;
    var next = text;
    japaneseToChineseCopy.forEach(function (pair) {
      next = next.split(pair[0]).join(pair[1]);
    });
    return next;
  }

  function rewriteLineTextForChinese(root) {
    var scope = root && root.nodeType === 1 ? root : document.body;
    if (!scope) return;

    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        return shouldSkipContactNode(node) || node.nodeValue.indexOf('LINE') === -1
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });
    var textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (node) {
      if (!originalLineText.has(node)) originalLineText.set(node, node.nodeValue);
      node.nodeValue = node.nodeValue.replace(/LINE/g, '微信');
    });
  }

  function rewriteLineAssetsForChinese(root) {
    var scope = root && root.nodeType === 1 ? root : document;
    var wechatQr = makeLink('images/contact/wechat-qr-02.png');

    scope.querySelectorAll('img').forEach(function (img) {
      var src = img.getAttribute('src') || '';
      if (src.indexOf('line-qr') === -1) return;
      if (!originalLineImage.has(img)) {
        originalLineImage.set(img, {
          src: src,
          alt: img.getAttribute('alt'),
          width: img.style.width,
          height: img.style.height,
          objectFit: img.style.objectFit
        });
      }
      var baseWidth = parseFloat(img.style.width || img.getAttribute('width') || '140');
      var size = Math.round(baseWidth * 1.5) + 'px';
      img.setAttribute('src', wechatQr);
      img.setAttribute('alt', 'BISIN CoolSpa 微信二维码');
      img.style.width = size;
      img.style.height = size;
      img.style.objectFit = 'contain';
    });

    scope.querySelectorAll('a[href*="lin.ee"]').forEach(function (link) {
      if (!originalLineLink.has(link)) {
        originalLineLink.set(link, {
          href: link.getAttribute('href'),
          target: link.getAttribute('target'),
          rel: link.getAttribute('rel')
        });
      }
      link.setAttribute('href', '#contact');
      link.removeAttribute('target');
      link.setAttribute('rel', 'noopener');
    });
  }

  function rewriteChineseTermsForChinese(root) {
    var scope = root && root.nodeType === 1 ? root : document.body;
    if (!scope) return;

    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        return shouldSkipContactNode(node) || node.nodeValue.indexOf('脂肪冷却') === -1
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });
    var textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (node) {
      if (!originalChineseTermText.has(node)) originalChineseTermText.set(node, node.nodeValue);
      node.nodeValue = localizeChineseTerms(node.nodeValue);
    });
  }

  function rewriteJapaneseCopyForChinese(root) {
    var scope = root && root.nodeType === 1 ? root : document.body;
    if (!scope) return;

    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (shouldSkipContactNode(node)) return NodeFilter.FILTER_REJECT;
        return localizeJapaneseCopyForChinese(node.nodeValue) === node.nodeValue
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });
    var textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (node) {
      if (!originalJapaneseCopyText.has(node)) originalJapaneseCopyText.set(node, node.nodeValue);
      node.nodeValue = localizeJapaneseCopyForChinese(node.nodeValue);
    });
  }

  function applyChineseContactOverride(root) {
    rewriteLineTextForChinese(root);
    rewriteLineAssetsForChinese(root);
    rewriteChineseTermsForChinese(root);
    rewriteJapaneseCopyForChinese(root);
  }

  function stopChineseContactObserver() {
    if (!chineseContactObserver) return;
    chineseContactObserver.disconnect();
    chineseContactObserver = null;
  }

  function restoreLineContactState() {
    if (!document.body) return;

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        return originalLineText.has(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (node) {
      node.nodeValue = originalLineText.get(node);
    });

    document.querySelectorAll('img').forEach(function (img) {
      if (!originalLineImage.has(img)) return;
      var original = originalLineImage.get(img);
      img.setAttribute('src', original.src);
      if (original.alt === null) img.removeAttribute('alt');
      else img.setAttribute('alt', original.alt);
      img.style.width = original.width;
      img.style.height = original.height;
      img.style.objectFit = original.objectFit;
    });

    document.querySelectorAll('a').forEach(function (link) {
      if (!originalLineLink.has(link)) return;
      var original = originalLineLink.get(link);
      link.setAttribute('href', original.href);
      if (original.target === null) link.removeAttribute('target');
      else link.setAttribute('target', original.target);
      if (original.rel === null) link.removeAttribute('rel');
      else link.setAttribute('rel', original.rel);
    });
  }

  function restoreChineseTermState() {
    if (!document.body) return;

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        return originalChineseTermText.has(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (node) {
      node.nodeValue = originalChineseTermText.get(node);
    });
  }

  function restoreJapaneseCopyState() {
    if (!document.body) return;

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        return originalJapaneseCopyText.has(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(function (node) {
      node.nodeValue = originalJapaneseCopyText.get(node);
    });
  }

  function startChineseContactObserver() {
    if (chineseContactObserver || !document.body) return;
    chineseContactObserver = new MutationObserver(function (mutations) {
      if (chineseContactPending) return;
      chineseContactPending = true;
      window.requestAnimationFrame(function () {
        chineseContactPending = false;
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) applyChineseContactOverride(node);
            else if (node.nodeType === 3 && node.nodeValue.indexOf('LINE') !== -1 && !shouldSkipContactNode(node)) {
              node.nodeValue = node.nodeValue.replace(/LINE/g, '微信');
            } else if (node.nodeType === 3 && node.nodeValue.indexOf('脂肪冷却') !== -1 && !shouldSkipContactNode(node)) {
              if (!originalChineseTermText.has(node)) originalChineseTermText.set(node, node.nodeValue);
              node.nodeValue = localizeChineseTerms(node.nodeValue);
              if (!originalJapaneseCopyText.has(node)) originalJapaneseCopyText.set(node, node.nodeValue);
              node.nodeValue = localizeJapaneseCopyForChinese(node.nodeValue);
            } else if (node.nodeType === 3 && !shouldSkipContactNode(node) && localizeJapaneseCopyForChinese(node.nodeValue) !== node.nodeValue) {
              if (!originalJapaneseCopyText.has(node)) originalJapaneseCopyText.set(node, node.nodeValue);
              node.nodeValue = localizeJapaneseCopyForChinese(node.nodeValue);
            }
          });
        });
      });
    });
    chineseContactObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function applyHomeBodyCopy(lang) {
    var t = pageBodyCopy.home[lang] || pageBodyCopy.home[DEFAULT_LANG];

    setBodyText('.hero .tagline', t.heroTagline);
    setBodyText('.hero h1', t.heroTitle);
    setBodyText('.hero-sub', t.heroSub);
    setBodyText('.hero-desc', t.heroDesc);
    setBodyTextAt('.trust-list .trust-item', 0, t.trust1);
    setBodyTextAt('.trust-list .trust-item', 1, t.trust2);
    setBodyTextAt('.trust-list .trust-item', 2, t.trust3);
    setBodyText('.store-select', t.storeSelect);

    setBodyText('#services .eyebrow', 'Services');
    setBodyText('#services h2', t.servicesTitle);
    setBodyText('#services .section-lead', t.servicesLead);
    setBodyTextAt('#services .service-card h3', 0, t.fatTitle);
    setBodyTextAt('#services .service-card p', 0, t.fatText);
    setBodyTextAt('#services .service-card .mini-tag', 0, t.fatTag1);
    setBodyTextAt('#services .service-card .mini-tag', 1, t.fatTag2);
    setBodyTextAt('#services .service-card .mini-tag', 2, t.fatTag3);
    setBodyTextAt('#services .service-card h3', 1, t.nailTitle);
    setBodyTextAt('#services .service-card p', 1, t.nailText);
    setBodyTextAt('#services .service-card .mini-tag', 3, t.nailTag1);
    setBodyTextAt('#services .service-card .mini-tag', 4, t.nailTag2);
    setBodyTextAt('#services .service-card .mini-tag', 5, t.nailTag3);

    setBodyText('#results .eyebrow', 'Real Results');
    setBodyText('#results .section-title', t.resultsTitle);
    setBodyText('#results .section-lead', t.resultsLead);
    setBodyTextAt('#results .kpi-label', 0, t.kpi1);
    setBodyTextAt('#results .kpi-label', 1, t.kpi2);
    setBodyTextAt('#results .kpi-label', 2, t.kpi3);

    setBodyText('#stores .eyebrow', 'Stores');
    setBodyText('#stores h2', t.storesTitle);
    setBodyText('#stores .section-lead', t.storesLead);
    document.querySelectorAll('#stores .sc-rating-badge').forEach(function (node) {
      setText(node, t.rating);
    });
    document.querySelectorAll('#stores .sc-detail-link').forEach(function (node) {
      setText(node, t.detail);
    });
    setBodyTextAt('#stores .sc-store-sub', 0, t.tenjinSub);
    setBodyTextAt('#stores .sc-store-sub', 1, t.ogoriSub);
    setBodyTextAt('#stores .sc-info-item', 0, t.tenjinAddress);
    setBodyTextAt('#stores .sc-info-item', 1, t.tenjinAccess);
    setBodyTextAt('#stores .sc-info-item', 2, t.hours);
    setBodyTextAt('#stores .sc-info-item', 3, t.ogoriAddress);
    setBodyTextAt('#stores .sc-info-item', 4, t.ogoriAccess);
    setBodyTextAt('#stores .sc-info-item', 5, t.hours);
    document.querySelectorAll('#stores .sc-btn-gmap').forEach(function (node) {
      setText(node, t.map);
    });

    setBodyText('#plans .eyebrow', 'Popular Plans');
    setBodyText('#plans h2', t.plansTitle);
    setBodyText('#plans .section-lead', t.plansLead);
    setBodyTextAt('#plans .plan-card h3', 0, t.plan1);
    setBodyTextAt('#plans .plan-card h3', 1, t.plan2);
    setBodyTextAt('#plans .plan-card h3', 2, t.plan3);
    setBodyTextAt('#plans .plan-price small', 0, t.plan1Badge);
    setBodyTextAt('#plans .plan-price small', 1, t.plan2Badge);
    setBodyTextAt('#plans .plan-price small', 2, t.plan3Badge);
    setBodyTextAt('#plans .plan-desc', 0, t.plan1Text);
    setBodyTextAt('#plans .plan-desc', 1, t.plan2Text);
    setBodyTextAt('#plans .plan-desc', 2, t.plan3Text);

    applyHomeContactCopy(lang);
  }

  function applyHomeContactCopy(lang) {
    var contact = {
      jp: {
        prefix: 'お問い合わせは',
        channel: 'LINE',
        suffix: 'でいつでも♪',
        qr: 'images/line-qr.png',
        alt: 'LINE QRコード',
        caption: 'カメラでスキャン',
        size: '110px'
      },
      cn: {
        prefix: '亲，先加',
        channel: '微信',
        suffix: '确认，再预约更安心哦~',
        qr: 'images/contact/wechat-qr-02.png',
        alt: 'BISIN CoolSpa 微信二维码',
        caption: '扫码添加微信',
        size: '165px'
      },
      en: {
        prefix: 'Message us on',
        channel: 'LINE',
        suffix: 'anytime',
        qr: 'images/line-qr.png',
        alt: 'LINE QR code',
        caption: 'Scan with your camera',
        size: '110px'
      }
    };
    var c = contact[lang] || contact[DEFAULT_LANG];
    var qr = document.querySelector('[data-contact-qr]');

    setBodyText('[data-contact-title-prefix]', c.prefix);
    setBodyText('[data-contact-channel]', c.channel);
    setBodyText('[data-contact-title-suffix]', c.suffix);
    setBodyText('[data-contact-qr-caption]', c.caption);

    if (qr) {
      qr.setAttribute('src', c.qr);
      qr.setAttribute('alt', c.alt);
      qr.style.width = c.size;
      qr.style.height = c.size;
      qr.style.objectFit = 'contain';
    }
  }

  function translatePageBody(lang) {
    var key = pageKey();
    if (key === 'home') applyHomeBodyCopy(lang);
    else if (key === 'service') applySimplePageCopy(lang, {
      jp: {
        heroTitle: 'サービス・料金',
        heroLead: '脂肪冷却痩身とネイルの全メニューをご紹介します。初めての方でもわかりやすい価格設計で、まずは気軽に体験できます。',
        tab1: '❄ 脂肪冷却痩身',
        tab2: '✦ ネイル',
        tab3: '📍 店舗案内',
        h1: '脂肪冷却痩身とは',
        l1: '特定の温度で脂肪細胞に直接アプローチする、メスを使わない非侵襲的な痩身ケア。食事制限・激しい運動なしで、気になる部位のラインを整えます。',
        h2: 'ネイルサービス',
        l2: '可愛い系から大人上品デザインまで、日常に馴染む指先の美しさをご提案します。脂肪冷却と同日の施術も可能です。',
        h3: '2店舗のサービス比較',
        l3: 'ご希望のメニューと通いやすい店舗をお選びください。',
        h4: '店舗案内',
        l4: 'ご希望の店舗にてご予約をお待ちしています。',
        cta: 'まずは無料LINE相談から'
      },
      cn: {
        heroTitle: '项目与价格',
        heroLead: '这里介绍脂肪冷却瘦身与美甲的全部菜单。价格入口清楚，第一次来也可以轻松体验。',
        tab1: '❄ 脂肪冷却瘦身',
        tab2: '✦ 美甲',
        tab3: '📍 门店',
        h1: '什么是脂肪冷却瘦身',
        l1: '通过特定温度直接作用于脂肪细胞，是不使用手术刀的非侵入式瘦身护理。无需节食或剧烈运动，帮助整理在意部位线条。',
        h2: '美甲服务',
        l2: '从可爱风到成熟女性喜欢的高级设计，提供适合日常的指尖美感。也可与脂肪冷却同日预约。',
        h3: '两家门店服务比较',
        l3: '请按想做的项目和交通便利度选择门店。',
        h4: '门店介绍',
        l4: '欢迎选择适合你的门店进行预约。',
        cta: '先从免费微信咨询开始'
      },
      en: {
        heroTitle: 'Services & Prices',
        heroLead: 'Explore all fat-freezing body care and nail menus. Clear entry prices make it easy for first-time guests to try.',
        tab1: '❄ Fat Freezing',
        tab2: '✦ Nails',
        tab3: '📍 Stores',
        h1: 'What Is Fat Freezing?',
        l1: 'A non-invasive body care treatment that targets fat cells at a specific temperature. Shape the areas you care about without strict dieting or intense workouts.',
        h2: 'Nail Services',
        l2: 'From cute styles to elegant adult designs, we suggest nails that fit your everyday life. Same-day booking with fat-freezing care is also available.',
        h3: 'Compare Our Two Stores',
        l3: 'Choose the store that best fits your preferred menu and access.',
        h4: 'Store Info',
        l4: 'We look forward to welcoming you at your preferred store.',
        cta: 'Start With a Free LINE Chat'
      }
    }, function (t) {
      setBodyText('.page-hero h1', t.heroTitle);
      setBodyText('.page-hero p', t.heroLead);
      setBodyTextAt('.service-tabs .stab', 0, t.tab1);
      setBodyTextAt('.service-tabs .stab', 1, t.tab2);
      setBodyTextAt('.service-tabs .stab', 2, t.tab3);
      setBodyText('#fat-cooling .section-title', t.h1);
      setBodyText('#fat-cooling .section-lead', t.l1);
      setBodyText('#nail .section-title', t.h2);
      setBodyText('#nail .section-lead', t.l2);
      setBodyTextAt('.section-title', 3, t.h3);
      setBodyTextAt('.section-lead', 3, t.l3);
      setBodyTextAt('.section-title', 4, t.h4);
      setBodyTextAt('.section-lead', 4, t.l4);
      setBodyText('.bottom-box h2', t.cta);
    });
    else if (key === 'fat') applyFatPageCopy(lang);
    else if (key === 'nail') applyNailPageCopy(lang);
    else if (key === 'tenjin' || key === 'ogori') applyStorePageCopy(lang, key);
    else if (key === 'business') applyBusinessPageCopy(lang);
    else if (key === 'lp') applyLpPageCopy(lang);
    else if (key === 'blog') applyBlogPageCopy(lang);
  }

  function applySimplePageCopy(lang, dict, apply) {
    apply(dict[lang] || dict[DEFAULT_LANG]);
  }

  function applyFatPageCopy(lang) {
    applySimplePageCopy(lang, {
      jp: {
        title: '脂肪冷却の仕組み',
        lead: '温めてから冷やす温冷ケアで、脂肪細胞に効率よくアプローチします。',
        s1: 'カウンセリング',
        p1: '気になる部位や目標を伺い、体質に合わせたプランをご提案します。無理な勧誘はありません。',
        s2: '爆汗サウナで温める',
        p2: '全身を温めて血流を促進し、脂肪細胞にアプローチしやすい状態を作ります。',
        s3: '脂肪冷却ケア',
        p3: '専用カップで気になる部位を吸引・冷却。施術中は読書やスマホも自由です。',
        menuTitle: 'メニュー・料金',
        menuLead: '入口がわかりやすい価格設計。初回体験から始められます。',
        casesTitle: '加工なし。数字が証明。',
        cta: 'まずは初回体験¥3,300から',
        ctaLead: 'カウンセリングから丁寧にご案内。勧誘なし・完全予約制で安心してお越しいただけます。',
        consult: 'メニューに迷う方はLINEで事前相談できます',
        scan: 'カメラでスキャンしてください',
        bookingConsult: 'LINEで事前相談'
      },
      cn: {
        title: '脂肪冷却的护理原理',
        lead: '通过先温热、再冷却的温冷护理，更有效地作用于脂肪细胞。',
        s1: '咨询',
        p1: '确认在意部位和目标，根据体质建议合适方案。不强迫推销。',
        s2: '爆汗桑拿温热',
        p2: '先温热全身、促进循环，让身体进入更适合护理的状态。',
        s3: '脂肪冷却护理',
        p3: '用专用杯吸附并冷却在意部位。护理中可看手机或阅读。',
        menuTitle: '项目与价格',
        menuLead: '价格入口清楚，可从初次体验开始。',
        casesTitle: '不修图，用数字说话。',
        cta: '亲，先从初次体验 ¥3,300 开始也可以哦~',
        ctaLead: '我们会先用中文帮你确认适合部位、预算和预约时间。不强推、完全预约制，确认清楚后再预约更安心。',
        consult: '菜单拿不准的话，先加微信事前确认',
        scan: '扫码添加微信',
        bookingConsult: '微信事前咨询'
      },
      en: {
        title: 'How Fat Freezing Works',
        lead: 'Warm first, then cool. This temperature-care flow helps target fat cells efficiently.',
        s1: 'Consultation',
        p1: 'We discuss your target areas and goals, then suggest a plan that fits your body. No pushy sales.',
        s2: 'Warm With Sauna',
        p2: 'Warm the body and support circulation before the cooling treatment.',
        s3: 'Fat Freezing Care',
        p3: 'A dedicated cup suctions and cools the target area. You can read or use your phone during treatment.',
        menuTitle: 'Menu & Prices',
        menuLead: 'Clear entry prices, starting with first-visit trials.',
        casesTitle: 'No Retouching. Real Numbers.',
        cta: 'Start With a First Trial From ¥3,300',
        ctaLead: 'We guide you carefully from consultation. No pushy sales, reservation-only, and easy to visit with confidence.',
        consult: 'Not sure which menu to choose? Ask us on LINE first.',
        scan: 'Scan with your camera',
        bookingConsult: 'Ask on LINE Before Booking'
      }
    }, function (t) {
      setBodyTextAt('.section-title', 0, t.title);
      setBodyTextAt('.section-lead', 0, t.lead);
      setBodyTextAt('.step-card h3', 0, t.s1);
      setBodyTextAt('.step-card p', 0, t.p1);
      setBodyTextAt('.step-card h3', 1, t.s2);
      setBodyTextAt('.step-card p', 1, t.p2);
      setBodyTextAt('.step-card h3', 2, t.s3);
      setBodyTextAt('.step-card p', 2, t.p3);
      setBodyText('#menu .section-title', t.menuTitle);
      setBodyText('#menu .section-lead', t.menuLead);
      setBodyText('#cases .section-title', t.casesTitle);
      setBodyText('.bottom-box h2', t.cta);
      setBodyTextAt('.bottom-box p', 0, t.ctaLead);
      setBodyTextAt('.bottom-box p', 1, t.consult);
      setBodyTextAt('.bottom-box p', 2, t.scan);
      document.querySelectorAll('.booking-card-cta').forEach(function (node) {
        setText(node, t.bookingConsult);
      });
    });
  }

  function applyNailPageCopy(lang) {
    applySimplePageCopy(lang, {
      jp: {
        hero: '指先から、自信が生まれる。上品なネイルで毎日を彩る。',
        lead: '可愛い系から大人上品デザインまで、日常に馴染む指先の美しさをご提案します。脂肪冷却と同日の施術も可能です。',
        gallery: 'デザインギャラリー',
        galleryLead: 'オフィスから休日まで、シーンに合わせたデザインをご提案します。',
        plans: 'ネイルメニュー・料金',
        flow: '当日の流れ',
        cta: 'まずはLINEでデザイン相談を'
      },
      cn: {
        hero: '从指尖开始，找回自信。用高级感美甲点亮每天。',
        lead: '从可爱风到成熟高级设计，提供适合日常的指尖美感。也可与脂肪冷却同日护理。',
        gallery: '设计图库',
        galleryLead: '从上班到休闲日，为不同场景建议合适设计。',
        plans: '美甲项目与价格',
        flow: '到店流程',
        cta: '先用微信咨询设计'
      },
      en: {
        hero: 'Confidence Starts at Your Fingertips. Elegant Nails for Every Day.',
        lead: 'From cute styles to refined adult designs, we suggest nails that fit naturally into daily life. Same-day care with fat freezing is available.',
        gallery: 'Design Gallery',
        galleryLead: 'Design suggestions for workdays, weekends and every scene in between.',
        plans: 'Nail Menu & Prices',
        flow: 'Visit Flow',
        cta: 'Chat on LINE About Designs'
      }
    }, function (t) {
      setBodyText('.page-hero h1', t.hero);
      setBodyText('.page-hero p', t.lead);
      setBodyText('#gallery .section-title', t.gallery);
      setBodyText('#gallery .section-lead', t.galleryLead);
      setBodyText('#plans .section-title', t.plans);
      setBodyTextAt('.section-title', 2, t.flow);
      setBodyText('.bottom-box h2', t.cta);
    });
  }

  function applyStorePageCopy(lang, key) {
    var isTenjin = key === 'tenjin';
    applySimplePageCopy(lang, {
      jp: {
        badge: isTenjin ? '❄ 脂肪冷却専門' : '✦ ネイル＋脂肪冷却',
        desc: isTenjin ? '天神南駅から徒歩3分。脂肪冷却を中心に、結果重視のボディケアを提供する完全予約制サロンです。' : '小郡でネイルと脂肪冷却を同日に相談できる、通いやすいトータルビューティーサロンです。',
        access: '店舗情報・アクセス',
        menu: 'メニュー・料金',
        reviews: 'お客様の声',
        cta: isTenjin ? '天神店でご予約・ご相談' : '小郡店でご予約・ご相談'
      },
      cn: {
        badge: isTenjin ? '❄ 脂肪冷却专门店' : '✦ 美甲＋脂肪冷却',
        desc: isTenjin ? '从天神南站步行3分钟。以脂肪冷却为主，提供重视效果的完全预约制身体护理。' : '在小郡可同日咨询美甲与脂肪冷却，是好到店、好坚持的综合美容沙龙。',
        access: '门店信息与交通',
        menu: '项目与价格',
        reviews: '顾客评价',
        cta: isTenjin ? '预约/咨询天神店' : '预约/咨询小郡店'
      },
      en: {
        badge: isTenjin ? '❄ Fat-Freezing Specialist' : '✦ Nails + Fat Freezing',
        desc: isTenjin ? 'A 3-minute walk from Tenjin-minami. A reservation-only salon focused on result-driven fat-freezing body care.' : 'A convenient total beauty salon in Ogori where you can consult about nails and fat-freezing care on the same day.',
        access: 'Store Info & Access',
        menu: 'Menu & Prices',
        reviews: 'Guest Reviews',
        cta: isTenjin ? 'Book or Ask Tenjin' : 'Book or Ask Ogori'
      }
    }, function (t) {
      setBodyText('.store-hero-badge', t.badge);
      setBodyText('.store-hero-content p', t.desc);
      setBodyText('#access .section-title', t.access);
      setBodyText('#menu .section-title', t.menu);
      setBodyTextAt('.section-title', 2, t.reviews);
      setBodyText('.bottom-box h2', t.cta);
    });
  }

  function applyBusinessPageCopy(lang) {
    applySimplePageCopy(lang, {
      jp: ['あなたのビジネスを、ゼロから一緒に。', '脂肪冷却サロンの開業から、Webサイト制作・AI活用・マーケティング支援まで。BISINが経営のあらゆる場面でパートナーとして伴走します。', 'あなたはどちらをお探しですか？', 'BISINが選ばれる理由', 'サポートの流れ', 'まず、話してみませんか。'],
      cn: ['从零开始，一起打造你的事业。', '从脂肪冷却沙龙开业，到网站制作、AI 活用与营销支持，BISIN 可作为经营伙伴陪你推进。', '你正在寻找哪一种支持？', '为什么选择 BISIN', '支持流程', '先聊聊你的计划吧。'],
      en: ['Build Your Business With Us From Zero.', 'From opening a fat-freezing salon to websites, AI use and marketing support, BISIN works beside you as a business partner.', 'What Kind of Support Do You Need?', 'Why Choose BISIN', 'Support Flow', 'Let’s Start With a Conversation.']
    }, function (a) {
      setBodyText('.hero h1', a[0]);
      setBodyText('.hero-sub', a[1]);
      setBodyTextAt('.section-head h2', 0, a[2]);
      setBodyText('.why-section h2', a[3]);
      setBodyTextAt('.section-head h2', 1, a[4]);
      setBodyTextAt('.section-head h2', 2, a[5]);
    });
  }

  function applyLpPageCopy(lang) {
    applySimplePageCopy(lang, {
      jp: ['初回限定キャンペーン実施中', '食事制限なしで ウエスト −10cm の実績', '加工なし。本当の結果。', '選ばれる4つの理由', 'ご利用の流れ', '店舗を選んで予約', '今月の体験枠、残りわずか'],
      cn: ['初次限定活动进行中', '无需节食，也有腰围 -10cm 案例', '不修图，真实结果。', '被选择的4个理由', '使用流程', '选择门店预约', '本月体验名额所剩不多'],
      en: ['First Visit Campaign Now Open', 'Waist -10cm Results Without Strict Dieting', 'No Retouching. Real Results.', 'Four Reasons Guests Choose Us', 'How It Works', 'Choose a Store to Book', 'This Month’s Trial Slots Are Almost Full']
    }, function (a) {
      setBodyText('.hero-eyebrow', '❄ ' + a[0]);
      setBodyText('.lp-hero h1', a[1]);
      setBodyTextAt('.section-title', 0, a[2]);
      setBodyTextAt('.section-title', 1, a[3]);
      setBodyTextAt('.section-title', 2, a[4]);
      setBodyTextAt('.section-title', 4, a[5]);
      setBodyText('.final-cta h2', a[6]);
    });
  }

  function applyBlogPageCopy(lang) {
    applySimplePageCopy(lang, {
      jp: ['リアル症例・変化レポート', '脂肪冷却のビフォーアフター症例、ネイルデザイン紹介、お役立ちコラムを発信しています。', 'すべて', '脂肪冷却症例', 'ネイル', 'コラム・豆知識', '店舗情報', '50代女性がウエスト−10cmを達成。100カップチャレンジの全記録。'],
      cn: ['真实案例与变化报告', '发布脂肪冷却前后对比案例、美甲设计介绍和实用美容专栏。', '全部', '脂肪冷却案例', '美甲', '专栏/知识', '门店信息', '50多岁女性腰围 -10cm。100杯挑战完整记录。'],
      en: ['Real Cases & Change Reports', 'Before/after fat-freezing cases, nail design ideas and useful beauty columns.', 'All', 'Fat-Freezing Cases', 'Nails', 'Tips & Columns', 'Store News', 'A Guest in Her 50s Reached Waist -10cm: Full 100-Cup Challenge Report.']
    }, function (a) {
      setBodyText('.page-hero h1', a[0]);
      setBodyText('.page-hero p', a[1]);
      for (var i = 0; i < 5; i += 1) setBodyTextAt('.filter-tab', i, a[i + 2]);
      setBodyText('.featured-body h2', a[7]);
    });
  }

  function applyLanguage(lang, persist) {
    var t = copy[lang] || copy[DEFAULT_LANG];
    if (persist) localStorage.setItem(STORAGE_KEY, lang);

    if (lang !== 'cn') {
      stopChineseContactObserver();
      restoreLineContactState();
      restoreJapaneseCopyState();
      restoreChineseTermState();
    }

    document.documentElement.lang = t.htmlLang;
    document.title = (t.pageTitle[pageKey()] || t.title);
    if (lang === 'cn') document.title = localizeChineseTerms(document.title);
    document.querySelectorAll('.lang-switcher__current').forEach(function (node) {
      setText(node, languageNames[lang]);
    });
    document.querySelectorAll('.lang-switcher__option').forEach(function (btn) {
      btn.setAttribute('aria-checked', btn.dataset.lang === lang ? 'true' : 'false');
    });

    applyStaticCopy(t);
    translateNav(t);
    translateCtas(t);
    translateMainButtons(t);
    translatePageBody(lang);

    if (lang === 'cn') {
      applyChineseContactOverride(document.body);
      startChineseContactObserver();
    }

    window.dispatchEvent(new CustomEvent('bisin:languagechange', {
      detail: { lang: lang }
    }));
  }

  function init() {
    var lang = getLang();
    mountSwitcher(lang);
    applyLanguage(lang, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
