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
    ['初回体験は、この流れでご案内します。', '初次体验会按照这个流程为您说明。'],
    ['初めての方が不安になりやすい「何をされるのか」「どれくらい時間がかかるのか」を来店前に確認できます。', '第一次来店前，可以先了解护理内容和大约所需时间，心里更有底。'],
    ['予約', '预约'],
    ['HotPepperまたは微信から予約。迷う場合は希望部位だけ伝えてください。', '通过 HotPepper 或微信预约。不确定菜单时，只要先告诉我们想护理的部位即可。'],
    ['HotPepperまたは微信から预约。迷う場合は希望部位だけ伝えてください。', '通过 HotPepper 或微信预约。不确定菜单时，只要先告诉我们想护理的部位即可。'],
    ['カウンセリング', '咨询'],
    ['気になる部位、体質、目標を確認し、無理のないプランを提案します。', '确认您在意的部位、体质和目标后，再建议适合且不勉强的方案。'],
    ['採寸・写真確認', '测量・照片确认'],
    ['必要に応じてサイズや見た目を確認。変化を追いやすくします。', '根据需要确认尺寸和外观状态，方便之后对比变化。'],
    ['施術', '护理'],
    ['サウナドームで温め、脂肪冷却へ。冷たさや吸引感は声をかけながら調整します。', '先用桑拿舱温热身体，再进行脂肪冷冻瘦身。冷感和吸附感会一边沟通一边调整。'],
    ['サウナドームで温め、脂肪冷冻瘦身へ。冷たさや吸引感は声をかけながら調整します。', '先用桑拿舱温热身体，再进行脂肪冷冻瘦身。冷感和吸附感会一边沟通一边调整。'],
    ['アフター案内', '护理后说明'],
    ['水分補給、食事時間、次回来店目安を案内。無理な勧誘はありません。', '说明补水、用餐时间和下次来店参考。不会强行推销。'],
    ['来店時間の目安', '来店时间参考'],
    ['初回体験はメニューにより30〜80分前後。余裕を持ってご予約ください。', '初次体验根据菜单约需30到80分钟。建议预约时预留充足时间。'],
    ['初回体験はメニューにより30〜80分前後。余裕を持ってご预约ください。', '初次体验根据菜单约需30到80分钟。建议预约时预留充足时间。'],
    ['服装', '服装'],
    ['施術しやすい着替えをご用意します。普段着で来店できます。', '店内会准备方便护理的换洗衣物，平时穿着来店即可。'],
    ['护理しやすい着替えをご用意します。普段着で来店できます。', '店内会准备方便护理的换洗衣物，平时穿着来店即可。'],
    ['男性の相談', '男性咨询'],
    ['お腹・背中・腰まわりなど、男性の脂肪冷却相談にも対応しています。', '腹部、背部、腰周等男性脂肪冷冻瘦身咨询也可以对应。'],
    ['お腹・背中・腰まわりなど、男性の脂肪冷冻瘦身相談にも対応しています。', '腹部、背部、腰周等男性脂肪冷冻瘦身咨询也可以对应。'],
    ['予約前に、口コミで安心を確認。', '预约前，先参考评价更安心。'],
    ['预约前に、口コミで安心を確認。', '预约前，先参考评价更安心。'],
    ['HotPepperの評価と実際の声を見てから、メニュー相談・予約へ進めます。', '可以先查看 HotPepper 的评分和真实评价，再进行菜单咨询或预约。'],
    ['HotPepperの評価と実際の声を見てから、メニュー相談・预约へ進めます。', '可以先查看 HotPepper 的评分和真实评价，再进行菜单咨询或预约。'],
    ['FAQ', '常见问题'],
    ['よくあるご質問', '常见问题'],
    ['痛みはありますか？', '会痛吗？'],
    ['冷却開始直後は冷たさや吸引感がありますが、多くの方は数分で慣れます。痛みが気になる場合はスタッフが調整します。', '刚开始冷冻时会有冷感和吸附感，多数人几分钟后会适应。如果在意痛感，工作人员会帮您调整。'],
    ['施術中は冷たさや軽い引っ張り感がありますが、痛みはほとんどありません。施術後の赤みや一時的なむくみが出ることがありますが、ダウンタイムはほぼなく、そのまま日常生活に戻れます。', '护理中会有冷感和轻微拉扯感，但基本不会疼。护理后可能出现暂时泛红或轻微浮肿，通常没有明显恢复期，可以照常生活。'],
    ['护理中は冷たさや軽い引っ張り感がありますが、痛みはほとんどありません。护理後の赤みや一時的なむくみが出ることがありますが、ダウンタイムはほぼなく、そのまま日常生活に戻れます。', '护理中会有冷感和轻微拉扯感，但基本不会疼。护理后可能出现暂时泛红或轻微浮肿，通常没有明显恢复期，可以照常生活。'],
    ['何回通えば効果が出ますか？', '需要来几次才会有效果？'],
    ['部位や体質により個人差があります。まずは1回で体感を確認し、変化を見ながら回数をご提案します。', '会因部位和体质而有差异。建议先体验1次，再根据变化和目标建议次数。'],
    ['個人差がありますが、3〜5回で変化を実感される方が多いです。施術後2〜3ヶ月かけて定着するため、継続することでより高い効果が期待できます。', '效果会有个人差异，但很多顾客在3到5次左右能感受到变化。护理后通常会经过2到3个月逐渐稳定，持续护理更容易看到效果。'],
    ['個人差がありますが、3〜5回で変化を実感される方が多いです。护理後2〜3ヶ月かけて定着するため、継続することでより高い効果が期待できます。', '效果会有个人差异，但很多顾客在3到5次左右能感受到变化。护理后通常会经过2到3个月逐渐稳定，持续护理更容易看到效果。'],
    ['食事制限は必要ですか？', '需要控制饮食吗？'],
    ['必須ではありません。掲載している症例データも食事制限・激しい運動なしの実測値です。ただし施術後のホームケアについてはスタッフからアドバイスしています。', '不是必须。页面中的案例数据也是未进行严格饮食限制和高强度运动的实测值。不过护理后的居家注意事项，工作人员会给您建议。'],
    ['必須ではありません。掲載している症例データも食事制限・激しい運動なしの実測値です。ただし护理後のホームケアについてはスタッフからアドバイスしています。', '不是必须。页面中的案例数据也是未进行严格饮食限制和高强度运动的实测值。不过护理后的居家注意事项，工作人员会给您建议。'],
    ['どの部位に施術できますか？', '哪些部位可以护理？'],
    ['どの部位に护理できますか？', '哪些部位可以护理？'],
    ['お腹・背中・太もも・二の腕・脇腹などに対応しています。カウンセリングで気になる部位をお伝えいただければ、最適なプランをご提案します。', '腹部、背部、大腿、上臂、侧腰等部位都可以咨询。请在咨询时告诉我们您在意的部位，我们会建议适合的方案。'],
    ['お腹・背中・太もも・二の腕・脇腹などに対応しています。咨询で気になる部位をお伝えいただければ、最適なプランをご提案します。', '腹部、背部、大腿、上臂、侧腰等部位都可以咨询。请在咨询时告诉我们您在意的部位，我们会建议适合的方案。'],
    ['どのメニューを選べばいいかわかりません。', '不知道该选哪个菜单怎么办？'],
    ['初めてで迷う場合は、まず気になる部位を基準に選んでください。お試しなら1CUP/2CUP、見た目の変化を狙うならサウナ×脂肪冷却4cup、複数部位なら8cupがおすすめです。当日のカウンセリングで調整できます。', '第一次不确定时，可以先按在意部位来选。想试试看可选1CUP/2CUP，想看外观变化推荐桑拿×脂肪冷冻瘦身4cup，多个部位可咨询8cup。当日咨询时也可以调整。'],
    ['初めてで迷う場合は、まず気になる部位を基準に選んでください。お試しなら1CUP/2CUP、見た目の変化を狙うならサウナ×脂肪冷冻瘦身4cup、複数部位なら8cupがおすすめです。当日の咨询で調整できます。', '第一次不确定时，可以先按在意部位来选。想试试看可选1CUP/2CUP，想看外观变化推荐桑拿×脂肪冷冻瘦身4cup，多个部位可咨询8cup。当日咨询时也可以调整。'],
    ['男性も予約できますか？', '男性也可以预约吗？'],
    ['男性も预约できますか？', '男性也可以预约吗？'],
    ['はい、男性のお腹・背中・腰まわりの相談も受け付けています。店舗やメニューにより対応範囲が異なるため、事前にご相談ください。', '可以。男性腹部、背部、腰周等咨询也可对应。不同店铺和菜单的对应范围可能不同，建议先微信确认。'],
    ['はい。お腹・背中・腰まわりなど、男性の脂肪冷却相談にも対応しています。症例写真を見ながら、気になる部位に合わせてご案内します。', '可以。腹部、背部、腰周等男性脂肪冷冻瘦身咨询也可对应。可以一边参考案例照片，一边根据您在意的部位说明。'],
    ['はい。お腹・背中・腰まわりなど、男性の脂肪冷冻瘦身相談にも対応しています。症例写真を見ながら、気になる部位に合わせてご案内します。', '可以。腹部、背部、腰周等男性脂肪冷冻瘦身咨询也可对应。可以一边参考案例照片，一边根据您在意的部位说明。'],
    ['はい。腹部、背部、腰周等男性脂肪冷冻瘦身咨询也可以对应。症例写真を見ながら、気になる部位に合わせてご案内します。', '可以。腹部、背部、腰周等男性脂肪冷冻瘦身咨询也可对应。可以一边参考案例照片，一边根据您在意的部位说明。'],
    ['当日は何か準備が必要ですか？', '当天需要准备什么吗？'],
    ['特別な準備は不要です。施術前後は水分をしっかり取り、直前の重い食事は控えめがおすすめです。服装は普段着で問題ありません。', '不需要特别准备。护理前后建议多补水，护理前避免吃太饱。服装穿平时衣服即可。'],
    ['特別な準備は不要です。护理前後は水分をしっかり取り、直前の重い食事は控えめがおすすめです。服装は普段着で問題ありません。', '不需要特别准备。护理前后建议多补水，护理前避免吃太饱。服装穿平时衣服即可。'],
    ['強い勧誘はありますか？', '会强行推销吗？'],
    ['強い勧誘はありません。ご希望や予算に合わせて、無理なく通えるプランをご案内します。', '不会强行推销。我们会根据您的需求和预算，说明可以轻松持续的方案。'],
    ['無理な勧誘はありません。料金を明確にしたうえで、必要な回数や部位を相談できます。初回体験だけの利用でも大丈夫です。', '不会强行推销。会先明确费用，再一起咨询需要的次数和部位。只体验初次菜单也可以。'],
    ['まずは初回体験¥3,300から', '先从初次体验¥3,300开始'],
    ['天神店で予約する', '预约天神店'],
    ['天神店で预约する', '预约天神店'],
    ['小郡店で予約する', '预约小郡店'],
    ['小郡店で预约する', '预约小郡店'],
    ['人気プランで予約する', '预约人气套餐'],
    ['全身プランを相談する', '咨询全身套餐'],
    ['掲載内容は症例傾向をもとに要約しています。結果には個人差があり、効果を保証するものではありません。', '以上内容根据案例趋势整理。效果因人而异，并不保证所有人都能获得相同结果。'],
    ['実際の来店者の声と症例を見て、施術の流れ・痛み・変化の目安を予約前に確認できます。', '预约前可以先参考真实来店顾客的评价和案例，了解护理流程、痛感和变化参考。'],
    ['実際の来店者の声と症例を見て、护理の流れ・痛み・変化の目安を预约前に確認できます。', '预约前可以先参考真实来店顾客的评价和案例，了解护理流程、痛感和变化参考。'],
    ['お客様の声', '顾客评价'],
    ['口コミより要約', '根据评价整理'],
    ['口コミ掲載', '评价数量'],
    ['口コミ掲載数', '评价数量'],
    ['口コミ平均', '平均评价'],
    ['平均口コミ評価', '平均评价'],
    ['接客サービス', '服务评价'],
    ['口コミ高評価', '评价很高'],
    ['口コミ数', '评价数量'],
    ['口コミ要約', '评价整理'],
    ['口コミ傾向', '评价趋势'],
    ['口コミ評価', '顾客评价'],
    ['お客様', '顾客'],
    ['ご予約', '预约'],
    ['予約受付中', '正在接受预约'],
    ['予約・相談', '预约・咨询'],
    ['ご相談', '咨询'],
    ['無料相談', '免费咨询'],
    ['LINE相談', '微信咨询'],
    ['LINEで無料相談', '微信免费咨询'],
    ['微信で無料相談', '微信免费咨询'],
    ['微信で予約', '微信预约'],
    ['微信で预约', '微信预约'],
    ['微信で予約・相談', '微信预约・咨询'],
    ['微信で预约・相談', '微信预约・咨询'],
    ['微信で相談', '微信咨询'],
    ['微信でお問い合わせ', '微信咨询'],
    ['微信でデザイン相談', '微信咨询设计'],
    ['LINEでデザイン相談', '微信咨询设计'],
    ['お気軽にご相談ください', '欢迎随时咨询'],
    ['お気軽にご連絡ください', '欢迎随时联系'],
    ['ご案内します', '为您说明'],
    ['ご提案します', '为您建议'],
    ['ご用意しています', '已经为您准备好'],
    ['わかりやすく', '清楚易懂地'],
    ['初めての方', '第一次来店的顾客'],
    ['初めてでも安心', '第一次来也安心'],
    ['初回限定', '初次限定'],
    ['初回体験', '初次体验'],
    ['初回体験プラン', '初次体验套餐'],
    ['初回体験価格', '初次体验价格'],
    ['まず試したい方', '想先试一次的人'],
    ['まず試したい方に', '适合想先试一次的人'],
    ['食事制限なし', '无需节食'],
    ['激しい運動なし', '无需高强度运动'],
    ['無理な勧誘なし', '无强推'],
    ['勧誘なし', '无强推'],
    ['完全予約制', '完全预约制'],
    ['都度払い', '按次支付'],
    ['税込価格', '含税价格'],
    ['税込', '含税'],
    ['全て税込', '全部含税'],
    ['全て税込価格', '全部含税价格'],
    ['価格は予告なく変更される場合があります', '价格可能会不定期调整'],
    ['最新情報は各店舗へお問い合わせください', '最新信息请向各店咨询'],
    ['効果には個人差があります', '效果因人而异'],
    ['効果を保証するものではありません', '不保证所有人都能获得相同效果'],
    ['掲載データ', '发布数据'],
    ['掲載内容', '发布内容'],
    ['掲載情報', '发布信息'],
    ['実測値', '实测值'],
    ['同意取得済', '已获得本人同意'],
    ['症例・ビフォーアフター', '案例・前后对比'],
    ['症例・口コミ', '案例・评价'],
    ['症例・口コミレポート', '案例・评价报告'],
    ['症例傾向', '案例趋势'],
    ['症例写真', '案例照片'],
    ['症例実績', '案例实绩'],
    ['症例を見る', '查看案例'],
    ['ビフォーアフター症例', '前后对比案例'],
    ['変化を確認', '确认变化'],
    ['見た目の変化', '外观变化'],
    ['サイズ変化', '尺寸变化'],
    ['ウエスト変化', '腰围变化'],
    ['ボディライン', '身体线条'],
    ['体型維持', '体型维持'],
    ['継続ケア', '持续护理'],
    ['継続メンテナンス', '持续维护'],
    ['全身集中ケア', '全身集中护理'],
    ['お腹集中ケア', '腹部集中护理'],
    ['男性お腹症例', '男性腹部案例'],
    ['男性の脂肪冷冻瘦身相談', '男性脂肪冷冻瘦身咨询'],
    ['男性の脂肪冷却相談', '男性脂肪冷冻瘦身咨询'],
    ['お腹まわり', '腹部周围'],
    ['お腹', '腹部'],
    ['下腹', '下腹'],
    ['背中', '背部'],
    ['太もも', '大腿'],
    ['二の腕', '上臂'],
    ['脇腹', '侧腰'],
    ['腰まわり', '腰周'],
    ['部位', '部位'],
    ['複数部位', '多个部位'],
    ['1部位', '1个部位'],
    ['2部位', '2个部位'],
    ['全身', '全身'],
    ['痩身', '瘦身'],
    ['痩身ケア', '瘦身护理'],
    ['脂肪細胞', '脂肪细胞'],
    ['脂肪冷冻瘦身サロン', '脂肪冷冻瘦身沙龙'],
    ['脂肪冷却サロン', '脂肪冷冻瘦身沙龙'],
    ['脂肪冷冻瘦身専門サロン', '脂肪冷冻瘦身专业沙龙'],
    ['脂肪冷却専門サロン', '脂肪冷冻瘦身专业沙龙'],
    ['脂肪冷冻瘦身メニュー', '脂肪冷冻瘦身菜单'],
    ['脂肪冷却メニュー', '脂肪冷冻瘦身菜单'],
    ['脂肪冷冻瘦身ケア', '脂肪冷冻瘦身护理'],
    ['脂肪冷却ケア', '脂肪冷冻瘦身护理'],
    ['お試し脂肪冷冻瘦身', '脂肪冷冻瘦身体验'],
    ['お試し脂肪冷却', '脂肪冷冻瘦身体验'],
    ['爆汗サウナ', '爆汗桑拿'],
    ['サウナドーム', '桑拿舱'],
    ['サウナ込み', '含桑拿'],
    ['サウナ付き', '含桑拿'],
    ['サウナなし', '不含桑拿'],
    ['温冷ケア', '温冷护理'],
    ['温める', '温热'],
    ['温めてから冷却', '先温热再冷冻'],
    ['冷やす', '冷冻'],
    ['冷却のみ', '仅冷冻'],
    ['冷却集中コース', '冷冻集中课程'],
    ['専用カップ', '专用杯'],
    ['吸引感', '吸附感'],
    ['冷たさ', '冷感'],
    ['痛み', '痛感'],
    ['水分補給', '补水'],
    ['食事時間', '用餐时间'],
    ['ホームケア', '居家护理'],
    ['アフターケア', '护理后注意事项'],
    ['ダウンタイム', '恢复期'],
    ['来店', '来店'],
    ['通いやすい', '方便持续来店'],
    ['通える', '可以持续来店'],
    ['通い方', '来店节奏'],
    ['通い中', '持续护理中'],
    ['半年以上通い中', '持续护理半年以上'],
    ['3ヶ月通い中', '持续护理3个月'],
    ['2ヶ月通い中', '持续护理2个月'],
    ['4ヶ月通い中', '持续护理4个月'],
    ['ヶ月通い中', '个月持续护理中'],
    ['ネイル', '美甲'],
    ['ネイルサービス', '美甲服务'],
    ['ネイルメニュー', '美甲菜单'],
    ['ネイルメニュー・料金', '美甲菜单・价格'],
    ['ネイルサロン', '美甲沙龙'],
    ['ネイルアート', '美甲设计'],
    ['シンプルネイル', '简约美甲'],
    ['定額制ネイルアート', '固定价格美甲设计'],
    ['定額制アート', '固定价格设计'],
    ['フレンチネイル', '法式美甲'],
    ['ワンカラー', '单色美甲'],
    ['フラワーアート', '花朵美甲'],
    ['桜デザイン', '樱花设计'],
    ['デザインギャラリー', '设计图集'],
    ['デザインサンプル', '设计样本'],
    ['デザイン', '设计'],
    ['カラー豊富', '颜色丰富'],
    ['季節提案あり', '有季节款建议'],
    ['季節限定あり', '有季节限定款'],
    ['大人可愛い', '成熟可爱'],
    ['上品', '精致'],
    ['指先', '指尖'],
    ['手元', '手部'],
    ['仕上がり', '完成效果'],
    ['お会計', '结账'],
    ['店舗案内', '门店信息'],
    ['店舗情報', '门店信息'],
    ['店舗情報・アクセス', '门店信息・交通'],
    ['アクセス', '交通'],
    ['好立地', '位置便利'],
    ['徒歩約3分', '步行约3分钟'],
    ['徒歩3分', '步行3分钟'],
    ['駐車場あり', '有停车场'],
    ['駐車場完備', '停车场完备'],
    ['近隣コインパーキングをご利用ください', '请使用附近投币停车场'],
    ['営業時間', '营业时间'],
    ['定休日', '定休日'],
    ['不定休', '不定休'],
    ['小郡店も見る', '查看小郡店'],
    ['天神店も見る', '查看天神店'],
    ['店舗を選んで予約', '选择门店预约'],
    ['サービス・料金', '服务・价格'],
    ['メニュー・料金', '菜单・价格'],
    ['料金を見る', '查看价格'],
    ['メニューを見る', '查看菜单'],
    ['脂肪冷冻瘦身メニューを見る', '查看脂肪冷冻瘦身菜单'],
    ['機器・プランを見る', '查看机器・方案'],
    ['Web支援を詳しく見る', '查看网页支持详情'],
    ['IT・AI支援を詳しく見る', '查看 IT・AI 支持详情'],
    ['詳しく見る', '查看详情'],
    ['詳細を確認', '确认详情'],
    ['料金', '价格'],
    ['プラン', '方案'],
    ['人気プラン', '人气方案'],
    ['定番プラン', '经典方案'],
    ['上位プラン', '进阶方案'],
    ['入口プラン', '入门方案'],
    ['その他', '其他'],
    ['引き締め', '紧致'],
    ['ハリ感', '弹润感'],
    ['超音波リフト', '超声波提升'],
    ['サービス比較', '服务比较'],
    ['平均ウエスト変化', '平均腰围变化'],
    ['最大ウエスト変化', '最大腰围变化'],
    ['リピート継続率', '持续复购率'],
    ['本当の結果', '真实结果'],
    ['加工なし', '不修图'],
    ['数字が語る', '用数据说明'],
    ['実測症例', '实测案例'],
    ['写真ここに挿入', '照片位置'],
    ['体験キャンペーン', '体验活动'],
    ['今月限定キャンペーン', '本月限定活动'],
    ['残りわずか', '名额有限'],
    ['キャンセル前日まで無料', '前一天取消免费'],
    ['スマホOK', '可使用手机'],
    ['読書OK', '可阅读'],
    ['放置型护理', '放松型护理'],
    ['隙間時間', '零碎时间'],
    ['ご利用の流れ', '使用流程'],
    ['当日の流れ', '当天流程'],
    ['来店・咨询', '来店・咨询'],
    ['完成・お会計', '完成・结账'],
    ['次回のご预约', '下次预约'],
    ['次回来店目安', '下次来店参考'],
    ['サポートの流れ', '支持流程'],
    ['無料相談から', '从免费咨询开始'],
    ['ヒアリング・提案', '了解需求・提案'],
    ['契約・着手', '签约・开始'],
    ['継続サポート', '持续支持'],
    ['事業を加速', '加速事业发展'],
    ['開業したい', '想开店'],
    ['開業支援', '开店支持'],
    ['開業後', '开店后'],
    ['導入サポート', '导入支持'],
    ['スタッフ研修', '员工培训'],
    ['トレーニング', '培训'],
    ['集客', '引流获客'],
    ['運営ノウハウ', '运营经验'],
    ['アフターサポート', '售后支持'],
    ['保証付き', '含保修'],
    ['ホームページ制作', '官网制作'],
    ['広告', '广告'],
    ['運用代行', '运营代办'],
    ['掲載サポート', '发布支持'],
    ['業務効率化', '业务效率提升'],
    ['経営データ分析', '经营数据分析'],
    ['相談対応', '咨询对应'],
    ['伴走', '陪跑支持'],
    ['まず、話してみませんか。', '先聊一聊吧。'],
    ['「まだ検討中」でも大丈夫。アイデア段階からお気軽にご相談ください。', '还在考虑也没关系，从想法阶段就可以轻松咨询。'],
    ['初回相談は完全無料・勧誘なし。', '首次咨询完全免费，无强推。'],
    ['無料で相談する', '免费咨询'],
    ['開業', '开业'],
    ['業務用', '商用'],
    ['豊富', '丰富'],
    ['支援', '支持'],
    ['相談', '咨询'],
    ['購入', '购买'],
    ['機器', '机器'],
    ['未経験', '没有经验'],
    ['経験', '经验'],
    ['研修', '培训'],
    ['無理なく', '轻松'],
    ['無理', '勉强'],
    ['整う', '变好'],
    ['整える', '整理'],
    ['気分', '心情'],
    ['結果', '结果'],
    ['人気', '人气'],
    ['豊富', '丰富'],
    ['対応', '对应'],
    ['ご対応', '对应'],
    ['豊富な', '丰富的'],
    ['相談・予約', '咨询・预约'],
    ['相談・预约', '咨询・预约'],
    ['ご相談・ご予約', '咨询・预约'],
    ['ご预约・咨询', '预约・咨询'],
    ['どのメニューが合うかわからない方は', '不知道适合哪种菜单的人'],
    ['気になる部位へアプローチし、無理なくボディラインを整える人気メニュー。サウナとの組み合わせで満足度の高い体感へ。', '针对在意部位护理，轻松整理身体线条。搭配桑拿后体感满意度更高。'],
    ['結果を求める痩身ケアと、気分まで整うネイル。', '追求结果的瘦身护理，以及让心情也变好的美甲。'],
    ['どちらも"通いやすく、続けやすい"を大切にしたメニュー構成です。', '两者都重视方便来店、容易坚持。'],
    ['指先から、', '从指尖开始，'],
    ['上品なネイルで毎日を彩る。', '用精致美甲点亮每一天。'],
    ['あなたのビジネスを、', '你的事业，'],
    ['ゼロから一緒に。', '从零开始一起打造。'],
    ['天神店を预约', '预约天神店'],
    ['小郡店を预约', '预约小郡店'],
    ['ホーム', '首页'],
    ['サービス', '服务'],
    ['ブログ', '博客'],
    ['ビジネスサポート', '商务支持'],
    ['微信相談', '微信咨询'],
    ['無料咨询', '免费咨询'],
    ['予約する', '预约'],
    ['预约する', '预约'],
    ['相談する', '咨询'],
    ['咨询する', '咨询'],
    ['確認する', '确认'],
    ['見る', '查看'],
    ['選ぶ', '选择'],
    ['選べます', '可以选择'],
    ['お選びください', '请选择'],
    ['対応しています', '可以对应'],
    ['可能です', '可以'],
    ['提供', '提供'],
    ['ご利用', '使用'],
    ['ご確認ください', '请确认'],
    ['お知らせください', '请告知'],
    ['ご回答します', '回复您'],
    ['受付中', '受付中'],
    ['その場で受付', '当场受理'],
    ['お帰り', '离店'],
    ['帰り', '回家'],
    ['終わったら', '结束后'],
    ['そのまま', '直接'],
    ['リラックス', '放松'],
    ['自由', '自由'],
    ['読書', '阅读'],
    ['スマホ', '手机'],
    ['スタッフ', '工作人员'],
    ['ヒアリング', '沟通了解'],
    ['カウンセリング', '咨询'],
    ['アドバイス', '建议'],
    ['サポート', '支持'],
    ['フォローアップ', '跟进'],
    ['ノウハウ', '经验'],
    ['スケジュール', '日程'],
    ['予算', '预算'],
    ['目標', '目标'],
    ['体質', '体质'],
    ['体型', '体型'],
    ['気になる', '在意的'],
    ['悩み', '烦恼'],
    ['希望日時', '希望日期和时间'],
    ['予算', '预算'],
    ['頻度', '频率'],
    ['時間', '时间'],
    ['短時間', '短时间'],
    ['長く使える', '耐看实用'],
    ['毎日', '每天'],
    ['日常', '日常'],
    ['休日', '休息日'],
    ['オフィス', '办公室'],
    ['シーン', '场景'],
    ['生活スタイル', '生活方式'],
    ['好み', '喜好'],
    ['最新ラインナップ', '最新款式'],
    ['追加オプション', '追加选项'],
    ['別途費用', '另需费用'],
    ['新作提案', '新款建议'],
    ['毎シーズン', '每个季节'],
    ['クラシック', '经典'],
    ['トレンド', '流行'],
    ['定番', '经典'],
    ['清潔感', '清爽感'],
    ['単色', '单色'],
    ['花柄', '花纹'],
    ['繊細', '精致'],
    ['プラス', '增添'],
    ['自信が生まれる', '带来自信'],
    ['毎日を彩る', '点亮每一天'],
    ['馴染む', '自然融入'],
    ['美しさ', '美感'],
    ['可愛い系', '可爱风'],
    ['大人', '成熟'],
    ['ご対応しています', '可以对应'],
    ['組み合わせ', '组合'],
    ['組み合わせ自由', '可自由组合'],
    ['まとめて', '集中'],
    ['しっかり', '扎实'],
    ['ピンポイント', '针对重点'],
    ['アプローチ', '护理'],
    ['ライン', '线条'],
    ['整えます', '整理'],
    ['促進', '促进'],
    ['装着', '安装'],
    ['状態', '状态'],
    ['作ります', '打造'],
    ['定着', '稳定'],
    ['日常生活', '日常生活'],
    ['過ごせます', '可以度过'],
    ['満足度', '满意度'],
    ['高い体感', '高满意体感'],
    ['選ばれる', '受欢迎'],
    ['一番選ばれています', '最受欢迎'],
    ['おすすめ', '推荐'],
    ['計画的に', '有计划地'],
    ['短期集中', '短期集中'],
    ['狙う', '目标'],
    ['相談材料', '咨询参考'],
    ['正面', '正面'],
    ['横', '侧面'],
    ['ぽっこり感', '小腹突出感'],
    ['ウエストライン', '腰线'],
    ['すっきり', '更清爽'],
    ['維持', '维持'],
    ['キープ', '维持'],
    ['目的', '目的'],
    ['目的に合わせて', '根据目的'],
    ['入口', '入口'],
    ['価格設計', '价格设计'],
    ['価格帯', '价格区间'],
    ['気軽に', '轻松地'],
    ['安心設計', '安心设计'],
    ['押し売り', '强行推销'],
    ['徹底', '贯彻'],
    ['結果にコミット', '重视结果'],
    ['オーダーメイドプログラム', '定制方案'],
    ['公開', '公开'],
    ['専任', '专属'],
    ['店舗', '门店'],
    ['駅', '站'],
    ['公園', '公园'],
    ['郵便局', '邮局'],
    ['交番', '派出所'],
    ['写真', '照片'],
    ['店内', '店内'],
    ['様子', '环境'],
    ['ベッド', '床位'],
    ['受付', '接待'],
    ['パウダールーム', '化妆间'],
    ['お問い合わせ', '咨询'],
    ['お問合せ', '咨询'],
    ['メンズ', '男性'],
    ['メンズ可', '男性可'],
    ['対応可', '可对应'],
    ['美甲のトータルビューティーサロン', '美甲和瘦身一站式美容沙龙'],
    ['トータルビューティーサロン', '综合美容沙龙'],
    ['結果重視', '重视效果'],
    ['専門', '专业'],
    ['メイン', '主打'],
    ['雰囲気', '氛围'],
    ['魅力', '魅力'],
    ['楽しめる', '可以享受'],
    ['指先から、自信が生まれる。上品なネイルで毎日を彩る。', '从指尖开始，带来自信。用精致美甲点亮每一天。'],
    ['指先から、 自信が生まれる 。 精致な美甲で毎日を彩る。', '从指尖开始，带来自信。用精致美甲点亮每一天。'],
    ['可愛い系から大人上品デザインまで、日常に馴染む美しさをご提案。季節ごとの新デザイン提案も充実。脂肪冷却と同日の施術も可能です。', '从可爱风到成熟精致款，都能贴近日常风格。也会提供季节新款建议，可与脂肪冷冻瘦身安排在同一天。'],
    ['可愛い系から大人精致设计まで、日常に馴染む美しさをご提案。季節ごとの新设计提案も充実。脂肪冷冻瘦身と同日护理もOK。', '从可爱风到成熟精致款，都能贴近日常风格。也会提供季节新款建议，可与脂肪冷冻瘦身安排在同一天。'],
    ['脂肪冷冻瘦身と同日护理もOK。', '也可以和脂肪冷冻瘦身安排在同一天。'],
    ['サービス・料金 服务・价格 脂肪冷冻瘦身と美甲の全メニューをご紹介します。第一次来店的顾客でもわかりやすい価格設計で、まずはお気軽にご体験ください。', '服务・价格。这里介绍脂肪冷冻瘦身和美甲的全部菜单。第一次来店也能看懂价格，欢迎轻松体验。'],
    ['脂肪冷冻瘦身とは 特定の温度で脂肪细胞に直接アプローチする、メスを使わない非侵襲的な瘦身ケア。食事制限・无需高强度运动で、気になる部位のラインを整えます。', '脂肪冷冻瘦身是什么：用特定温度针对脂肪细胞进行护理，不动刀、非侵入式。无需节食和高强度运动，帮助整理在意部位的线条。'],
    ['食事制限なしで、気になる部位を集中ケア。', '无需节食，集中护理在意部位。'],
    ['无需节食で、気になる部位を集中ケア。', '无需节食，集中护理在意部位。'],
    ['脂肪冷却でお腹・腰まわり・太ももにアプローチ。天神COOL SPAと小郡CHUCHUで、初めての方も予約しやすい体験メニューをご用意しています。', '通过脂肪冷冻瘦身护理腹部、腰周和大腿。天神 COOL SPA 与小郡 CHUCHU 都准备了第一次也容易预约的体验菜单。'],
    ['脂肪冷冻瘦身で腹部・腰周・大腿にアプローチ。天神COOL SPAと小郡CHUCHUで、第一次来店的顾客も预约しやすい体験メニューを已经为您准备好。', '通过脂肪冷冻瘦身护理腹部、腰周和大腿。天神 COOL SPA 与小郡 CHUCHU 都准备了第一次也容易预约的体验菜单。'],
    ['無理な勧誘なし。施術前に悩みや目標を確認し、料金と通い方をわかりやすくご案内します。', '无强推。护理前会确认您的烦恼和目标，并清楚说明价格与来店节奏。'],
    ['无强推。护理前に悩みや目標を確認し、价格と来店节奏を清楚易懂地为您说明。', '无强推。护理前会确认您的烦恼和目标，并清楚说明价格与来店节奏。'],
    ['初回限定の脂肪冷却体験', '初次限定脂肪冷冻瘦身体验'],
    ['天神店・小郡店で予約受付中', '天神店・小郡店正在接受预约'],
    ['どのメニューが合うかわからない方は、LINEで部位・予算・通える頻度をご相談ください。', '不知道适合哪种菜单时，可以通过微信咨询部位、预算和来店频率。'],
    ['どのメニューが合うかわからない方は、微信で部位・予算・可以持续来店頻度を咨询ください。', '不知道适合哪种菜单时，可以通过微信咨询部位、预算和来店频率。'],
    ['目的に合わせて選べる、2つの美しさ', '根据目的选择两种美丽方式'],
    ['結果を求める瘦身ケアと、気分まで整う美甲。どちらも"通いやすく、続けやすい"を大切にしたメニュー構成です。', '追求结果的瘦身护理，以及让心情也变好的美甲。两者都重视方便来店、容易坚持。'],
    ['気になる部位へアプローチし、無理なく身体线条を整える人気メニュー。サウナとの組み合わせで満足度の高い体感へ。', '针对在意部位护理，轻松整理身体线条。搭配桑拿后体感满意度更高。'],
    ['可愛い系から精致设计まで、日常に馴染む美しさをご提案。シンプルでも手部がきれいに見える设计を大切にしています。', '从可爱风到精致款，提供适合日常的美甲设计。即使简约，也重视让手部看起来干净漂亮。'],
    ['发布内容は口コミ・案例趋势をもとに要約しています。結果には個人差があり、不保证所有人都能获得相同效果。', '发布内容根据评价和案例趋势整理。效果因人而异，不保证所有人都能获得相同效果。'],
    ['それぞれの魅力がある、2つのサロン', '两家门店，各有魅力'],
    ['天神は脂肪冷冻瘦身メインの結果重視サロン、小郡は美甲も楽しめるトータルビューティーサロン。ご希望の雰囲気に合わせてお選びいただけます。', '天神店主打脂肪冷冻瘦身和效果，小郡店则是可同时享受美甲的综合美容沙龙。可以按喜欢的氛围选择。'],
    ['はじめやすく、続けやすい人気方案', '容易开始，也容易坚持的人气方案'],
    ['まずは気軽に試したい方から、しっかり通いたい方まで。入口がわかりやすい価格帯で、安心してご预约いただけます。', '从想轻松体验的人，到想认真持续护理的人，都有清楚易懂的价格入口，可以安心预约。'],
    ['あなたのビジネスを、 ゼロから一緒に。', '从零开始，和你一起打造事业。'],
    ['あなたのビジネスを、ゼロから一緒に。', '从零开始，和你一起打造事业。'],
    ['脂肪冷却サロンの開業から、Webサイト制作・AI活用・マーケティング支援まで。BISINが経営のあらゆる場面でパートナーとして伴走します。', '从脂肪冷冻瘦身沙龙开业，到网站制作、AI 活用和营销支持，BISIN 会在经营的各个阶段陪跑。'],
    ['脂肪冷冻瘦身沙龙の開業から、Webサイト制作・AI活用・マーケティング支援まで。BISINが経営のあらゆる場面でパートナーとして陪跑支持します。', '从脂肪冷冻瘦身沙龙开业，到网站制作、AI 活用和营销支持，BISIN 会在经营的各个阶段陪跑。'],
    ['あなたはどちらをお探しですか？', '您正在寻找哪种支持？'],
    ['目的に合わせた3つのサポートメニューを已经为您准备好。', '我们准备了3种符合不同目的的支持菜单。'],
    ['脂肪冷冻瘦身沙龙を 想开店', '想开设脂肪冷冻瘦身沙龙'],
    ['機器の購入・レンタルから导入支持まで。未経験でも安心して始められる体制を整えています。', '从机器购买、租赁到导入支持，即使没有经验也能安心开始。'],
    ['このようなWebサイトを 作りたい・引流获客したい', '想制作这样的网站并提升获客'],
    ['サロン専門のLP・官网制作から、SNS運用・广告・SEOまで、引流获客を丸ごとサポートします。', '从沙龙专用 LP、官网制作，到 SNS 运营、广告和 SEO，完整支持获客。'],
    ['IT・AI・マーケティングで 加速事业发展したい', '想用 IT・AI・营销加速业务'],
    ['美容業界に精通したITコンサルタントが、业务效率提升・AIツール導入・经营数据分析を支援します。', '熟悉美容行业的 IT 顾问会支持业务效率提升、AI 工具导入和经营数据分析。'],
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

  function cleanupResidualJapaneseForChinese(text) {
    if (!text || !/[ぁ-ゟ゠-ヿー]/.test(text)) return text;
    return text
      .replace(/ご予約/g, '预约')
      .replace(/ご预约/g, '预约')
      .replace(/ご相談/g, '咨询')
      .replace(/ご確認/g, '确认')
      .replace(/ご案内/g, '说明')
      .replace(/ご提案/g, '建议')
      .replace(/お問い合わせ/g, '咨询')
      .replace(/お問合せ/g, '咨询')
      .replace(/お気軽に/g, '轻松')
      .replace(/お腹/g, '腹部')
      .replace(/お客様/g, '顾客')
      .replace(/メニュー/g, '菜单')
      .replace(/サロン/g, '沙龙')
      .replace(/サービス/g, '服务')
      .replace(/ケア/g, '护理')
      .replace(/プラン/g, '方案')
      .replace(/アプローチ/g, '护理')
      .replace(/ピンポイント/g, '重点')
      .replace(/サウナドーム/g, '桑拿舱')
      .replace(/サウナ/g, '桑拿')
      .replace(/カップ/g, '杯')
      .replace(/スマホ/g, '手机')
      .replace(/マップ/g, '地图')
      .replace(/ネイル/g, '美甲')
      .replace(/デザイン/g, '设计')
      .replace(/ギャラリー/g, '图集')
      .replace(/アート/g, '设计')
      .replace(/シンプル/g, '简约')
      .replace(/カラー/g, '颜色')
      .replace(/オフィス/g, '办公室')
      .replace(/フレンチ/g, '法式')
      .replace(/ワンカラー/g, '单色美甲')
      .replace(/フラワー/g, '花朵')
      .replace(/トレンド/g, '流行')
      .replace(/クラシック/g, '经典')
      .replace(/ホーム/g, '首页')
      .replace(/ブログ/g, '博客')
      .replace(/コラム/g, '专栏')
      .replace(/キャンペーン/g, '活动')
      .replace(/ウエスト/g, '腰围')
      .replace(/リピート/g, '复购')
      .replace(/ダウンタイム/g, '恢复期')
      .replace(/スタッフ/g, '工作人员')
      .replace(/ヒアリング/g, '沟通了解')
      .replace(/カウンセリング/g, '咨询')
      .replace(/フォーム/g, '表单')
      .replace(/オンライン/g, '线上')
      .replace(/コンサルティング/g, '咨询顾问')
      .replace(/マーケティング/g, '营销')
      .replace(/チャットボット/g, '聊天机器人')
      .replace(/システム/g, '系统')
      .replace(/マシン/g, '机器')
      .replace(/レンタル/g, '租赁')
      .replace(/トレーニング/g, '培训')
      .replace(/アフター/g, '售后')
      .replace(/サポート/g, '支持')
      .replace(/リラックス/g, '放松')
      .replace(/オプション/g, '选项')
      .replace(/ラインナップ/g, '款式')
      .replace(/シーン/g, '场景')
      .replace(/スタイル/g, '风格')
      .replace(/パウダールーム/g, '化妆间')
      .replace(/ベッド/g, '床位')
      .replace(/コインパーキング/g, '投币停车场')
      .replace(/ロフト/g, 'Loft')
      .replace(/ホテル/g, '酒店')
      .replace(/ローソン/g, 'Lawson')
      .replace(/サニー/g, 'Sunny')
      .replace(/ファミリーマート/g, 'FamilyMart')
      .replace(/セブンイレブン/g, '7-Eleven')
      .replace(/メンズ/g, '男性')
      .replace(/ビジネス/g, '商务')
      .replace(/Webサイト/g, '网站')
      .replace(/サイト/g, '网站')
      .replace(/マーケ/g, '营销')
      .replace(/パートナー/g, '伙伴')
      .replace(/ノウハウ/g, '经验')
      .replace(/スケジュール/g, '日程')
      .replace(/フォローアップ/g, '跟进')
      .replace(/オーダーメイド/g, '定制')
      .replace(/プログラム/g, '方案')
      .replace(/メスなし/g, '不动刀')
      .replace(/メス/g, '刀')
      .replace(/開業/g, '开业')
      .replace(/支援/g, '支持')
      .replace(/相談/g, '咨询')
      .replace(/機器/g, '机器')
      .replace(/購入/g, '购买')
      .replace(/未経験/g, '没有经验')
      .replace(/経験/g, '经验')
      .replace(/体制/g, '体制')
      .replace(/一緒/g, '一起')
      .replace(/結果/g, '结果')
      .replace(/気分/g, '心情')
      .replace(/大切/g, '重视')
      .replace(/構成/g, '设计')
      .replace(/無理/g, '勉强')
      .replace(/人気/g, '人气')
      .replace(/対応/g, '对应')
      .replace(/季節/g, '季节')
      .replace(/提案/g, '建议')
      .replace(/充実/g, '丰富')
      .replace(/場所/g, '位置')
      .replace(/確認/g, '确认')
      .replace(/案内/g, '说明')
      .replace(/発汗/g, '出汗')
      .replace(/身体/g, '身体')
      .replace(/軽さ/g, '轻盈感')
      .replace(/好評/g, '评价很好')
      .replace(/目的/g, '目的')
      .replace(/内容/g, '内容')
      .replace(/納得/g, '确认满意')
      .replace(/契約/g, '签约')
      .replace(/納品/g, '交付')
      .replace(/成果/g, '成果')
      .replace(/追い/g, '追踪')
      .replace(/直営/g, '直营')
      .replace(/運営/g, '运营')
      .replace(/現場/g, '现场')
      .replace(/実績/g, '实绩')
      .replace(/黒字化/g, '盈利')
      .replace(/収益/g, '收益')
      .replace(/設計/g, '设计')
      .replace(/[ぁ-ゟ]+/g, '')
      .replace(/[゠-ヿー]+/g, '')
      .replace(/不知道适合哪种菜单的人、微信部位预算可以持续来店频率咨询。/g, '不知道适合哪种菜单时，可以通过微信咨询部位、预算和来店频率。')
      .replace(/目的合3支持菜单已经为您准备好。/g, '根据目的，我们准备了3种支持菜单。')
      .replace(/机器购买租赁导入支持。没有经验安心始体制整。/g, '从机器购买、租赁到导入支持，没有经验也能安心开始。')
      .replace(/可爱风成熟精致设计、日常自然融入美感建议。季节新设计建议丰富。脂肪冷冻瘦身同日护理OK。/g, '从可爱风到成熟精致款，都能贴近日常风格。也会提供丰富的季节新款建议，可与脂肪冷冻瘦身安排在同一天。')
      .replace(/美甲服务小郡店可以对应。脂肪冷冻瘦身组合、同日护理可以。/g, '美甲服务由小郡店提供，也可以和脂肪冷冻瘦身安排在同一天。')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }
  function shouldSkipContactNode(node) {
    if (!node || !node.parentElement) return true;
    return /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|INPUT|OPTION)$/.test(node.parentElement.tagName);
  }

  function localizeJapaneseCopyForChinese(text) {
    if (!text) return text;
    var next = text;
    japaneseToChineseCopy.slice().sort(function (a, b) {
      return b[0].length - a[0].length;
    }).forEach(function (pair) {
      next = next.split(pair[0]).join(pair[1]);
    });
    return cleanupResidualJapaneseForChinese(next);
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
    rewriteJapaneseCopyForChinese(root);
    rewriteChineseTermsForChinese(root);
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
