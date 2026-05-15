/* ── BISIN Beauty Salon Chatbot Widget ── */
/* IIFE — グローバル汚染ゼロ。外部依存なし。 */
(function () {
  'use strict';

  // ── 定数 ──────────────────────────────────────────────
  var LINE_URL    = '#contact';
  var EMAIL_TO    = 'bisin202603@gmail.com';
  var TEL_TENJIN  = '0927535515';
  var TEL_OGORI   = '0942806688';
  var B2B_URL     = 'https://bisincool.co.jp/index.html';
  var HP_TENJIN   = 'https://beauty.hotpepper.jp/kr/slnH000736255/';
  var HP_OGORI    = 'https://beauty.hotpepper.jp/kr/slnH000498862/';

  // 価格回答の末尾に追加する共通フッター
  var PRICE_FOOTER =
    '<br><div style="margin-top:10px;padding:9px 11px;background:rgba(185,156,135,0.10);border:1px solid rgba(185,156,135,0.28);border-radius:10px;font-size:10.5px;color:var(--cb-muted);line-height:1.7">' +
    '📅 <strong style="color:var(--cb-text)">最新のプランと料金は予約サイトでご確認ください</strong><br>' +
    '<a href="' + HP_TENJIN + '" target="_blank" rel="noopener" style="color:var(--cb-accent-d);font-weight:700;text-decoration:none">▶ 天神 COOL SPA 店 — HotPepper Beauty</a><br>' +
    '<a href="' + HP_OGORI  + '" target="_blank" rel="noopener" style="color:var(--cb-accent-d);font-weight:700;text-decoration:none">▶ 小郡 CHUCHU 店 — HotPepper Beauty</a>' +
    '</div>';

  // ── ナレッジベース ─────────────────────────────────────
  var TOPICS = {

    cryo: {
      label: '❄️ 脂肪冷却の料金',
      related: ['combo', 'howmany', 'book'],
      answer:
        '<strong>❄️ 脂肪冷却メニュー・料金</strong><br><br>' +

        '<span class="cb-store-label">❄ COOL SPA 天神店</span>' +
        '<div class="cb-price-row"><span class="cb-price-name">初回お試し 1CUP<span class="cb-price-note">まず試したい方の入口</span></span><span class="cb-price-val">¥3,300</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">初回お試し 2CUP<span class="cb-price-note">お腹＋背中など2部位</span></span><span class="cb-price-val">¥5,500</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">爆汗サウナ×冷却 4CUP<span class="cb-price-note">🔥人気No.1 / 80分</span></span><span class="cb-price-val">¥8,800</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">全身痩身 8CUP<span class="cb-price-note">全体まとめて / 120分</span></span><span class="cb-price-val">¥19,800</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">冷却のみ 4CUP / 8CUP<span class="cb-price-note">サウナなし</span></span><span class="cb-price-val">¥9,500 / ¥17,600</span></div>' +

        '<span class="cb-store-label">✦ CHUCHU 小郡店</span>' +
        '<div class="cb-price-row"><span class="cb-price-name">爆汗サウナ×冷却 4CUP<span class="cb-price-note">初回 / 80分</span></span><span class="cb-price-val">¥8,800</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">全身痩身 8CUP<span class="cb-price-note">初回 / 120分</span></span><span class="cb-price-val">¥19,800</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">超音波リフト<span class="cb-price-note">引き締め・ハリ感に</span></span><span class="cb-price-val">¥9,900</span></div>' +

        '<br><span style="font-size:10px;color:var(--cb-muted)">※ 初回体験価格は各店舗で初めての方限定。全て税込。</span>' +
        PRICE_FOOTER
    },

    nail: {
      label: '💅 ネイルの料金',
      related: ['combo', 'stores', 'book'],
      answer:
        '<strong>💅 ネイルメニュー・料金</strong><br><br>' +
        '<span class="cb-store-label">✦ CHUCHU 小郡店のみ</span>' +
        '<div class="cb-price-row"><span class="cb-price-name">シンプルネイル<span class="cb-price-note">ワンカラー・定番デザイン</span></span><span class="cb-price-val">¥5,500</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">定額制ネイルアート<span class="cb-price-note">⭐人気 / 季節デザイン豊富</span></span><span class="cb-price-val">¥6,000〜</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">定額制アート（上位）<span class="cb-price-note">全デザイン対象</span></span><span class="cb-price-val">¥7,000</span></div>' +
        '<br><span style="font-size:10px;color:var(--cb-muted)">※ ネイルは小郡店のみ。詳細デザインはLINEにてご確認ください。</span>' +
        PRICE_FOOTER
    },

    combo: {
      label: '✨ 冷却＋ネイルセット',
      related: ['cryo', 'nail', 'book'],
      answer:
        '<strong>✨ 脂肪冷却＋ネイル 同日セット</strong><br><br>' +
        'CHUCHU 小郡店では、脂肪冷却の施術中・施術後に<strong>ネイルを同日施術</strong>できます！<br><br>' +
        '<span class="cb-highlight">⏱ 時間効率◎</span><span class="cb-highlight">💅 同日OK</span><span class="cb-highlight">🏪 小郡店のみ</span><br><br>' +
        '<strong>人気の組み合わせ例</strong><br>' +
        '<div class="cb-price-row"><span class="cb-price-name">爆汗サウナ×冷却 4CUP<span class="cb-price-note">80分</span></span><span class="cb-price-val">¥8,800</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">＋ 定額制ネイルアート<span class="cb-price-note">人気プラン</span></span><span class="cb-price-val">¥6,000〜</span></div>' +
        '<div class="cb-price-row" style="border-top:1px solid rgba(185,156,135,.4);margin-top:3px;padding-top:7px"><span class="cb-price-name" style="font-weight:900">合計（目安）</span><span class="cb-price-val" style="color:var(--cb-dark)">¥14,800〜</span></div>' +
        '<br>冷却機器でセルフ放置中にネイルを受けられるので、待ち時間ゼロの贅沢な時間を過ごせます。' +
        PRICE_FOOTER
    },

    howmany: {
      label: '🗓 何回で効果が出る？',
      related: ['cryo', 'combo', 'book'],
      answer:
        '<strong>🗓 効果・施術ペースについて</strong><br><br>' +
        '個人差がありますが、<strong>3〜5回</strong>で変化を実感される方が多いです。<br><br>' +
        '<span class="cb-highlight">📊 平均ウエスト −7cm</span><span class="cb-highlight">★4.8 口コミ評価</span><span class="cb-highlight">96% 継続率</span><br><br>' +
        '<strong>実際のお客様データ</strong><br>' +
        '<div class="cb-price-row"><span class="cb-price-name">50代女性 / 7回施術</span><span class="cb-price-val">−10cm / −5.6kg</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">30代女性 / 全身100カップ</span><span class="cb-price-val">お腹−10cm</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">60代男性 / 4回施術</span><span class="cb-price-val">お腹−8cm</span></div>' +
        '<br>' +
        '施術後2〜3ヶ月かけて脂肪細胞が自然に排出されるため、回数を重ねるほど効果が定着します。月1回ペースが標準的です。<br><br>' +
        '<span style="font-size:10px;color:var(--cb-muted)">※ 効果には個人差があります。食事制限・激しい運動は行っていません。</span>'
    },

    book: {
      label: '📅 予約・体験方法',
      related: ['cryo', 'combo', 'stores'],
      answer:
        '<strong>📅 ご予約・体験の方法</strong><br><br>' +
        '予約は<strong>LINE相談</strong>が一番スムーズです！<br><br>' +
        '<span class="cb-highlight">💬 デザイン相談もLINEでOK</span><span class="cb-highlight">✅ 完全予約制</span><br><br>' +
        '<strong>初回体験からスタートできます</strong><br>' +
        '<div class="cb-price-row"><span class="cb-price-name">脂肪冷却 お試し 1CUP</span><span class="cb-price-val">¥3,300〜</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">当日の流れ</span><span class="cb-price-val">約30〜120分</span></div>' +
        '<br>' +
        '施術中はスマホ・読書自由。ダウンタイムなし・そのまま帰宅できます。<br><br>' +
        '<span style="font-size:10px;color:var(--cb-muted)">まずは気軽にLINEでご相談ください。強引な勧誘は一切ありません。</span>' +
        PRICE_FOOTER
    },

    stores: {
      label: '🏪 店舗・アクセス',
      related: ['cryo', 'nail', 'book'],
      answer:
        '<strong>🏪 店舗案内</strong><br><br>' +

        '<span class="cb-store-label">❄ COOL SPA 天神店</span>' +
        '<div class="cb-price-row"><span class="cb-price-name">サービス</span><span class="cb-price-val">脂肪冷却のみ</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">営業時間</span><span class="cb-price-val">月〜土 10:00〜20:00</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">電話</span><span class="cb-price-val"><a href="tel:' + TEL_TENJIN + '" style="color:var(--cb-accent-d);text-decoration:none">☎ 092-753-5515</a></span></div>' +

        '<span class="cb-store-label">✦ CHUCHU 小郡店</span>' +
        '<div class="cb-price-row"><span class="cb-price-name">サービス</span><span class="cb-price-val">脂肪冷却＋ネイル</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">営業時間</span><span class="cb-price-val">月〜土 10:00〜20:00</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">電話</span><span class="cb-price-val"><a href="tel:' + TEL_OGORI + '" style="color:var(--cb-accent-d);text-decoration:none">☎ 0942-80-6688</a></span></div>'
    },

    knowledge: {
      label: '🔬 脂肪冷却の仕組み',
      related: ['cryo', 'howmany', 'combo'],
      answer:
        '<strong>🔬 脂肪冷却（クライオリポリシス）とは？</strong><br><br>' +

        '<span class="cb-store-label">❄ 脂肪細胞だけに効く仕組み</span>' +
        '脂肪細胞は<strong>約4℃</strong>で結晶化して自然に死滅します。皮膚・筋肉・神経には影響なく、脂肪だけを選択的にアプローチできる技術です。死滅した細胞は<strong>2〜3ヶ月かけて体外へ自然排出</strong>されます。<br><br>' +

        '<span class="cb-store-label">✦ ダイエットとの違い</span>' +
        '<div class="cb-price-row"><span class="cb-price-name">ダイエット・運動<span class="cb-price-note">脂肪細胞が「縮む」だけ</span></span><span class="cb-price-val" style="color:#b99c87">リバウンドしやすい</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">脂肪冷却<span class="cb-price-note">脂肪細胞の「数」を減らす</span></span><span class="cb-price-val" style="color:var(--cb-accent-d)">効果が持続しやすい</span></div>' +

        '<span class="cb-store-label">📍 施術できる8部位</span>' +
        '<div style="display:flex;flex-wrap:wrap;gap:4px;margin:4px 0 6px">' +
          '<span class="cb-highlight">お腹</span><span class="cb-highlight">背中</span><span class="cb-highlight">脇腹</span><span class="cb-highlight">二の腕</span>' +
          '<span class="cb-highlight">太もも</span><span class="cb-highlight">ヒザ上</span><span class="cb-highlight">ヒップ</span><span class="cb-highlight">顎下</span>' +
        '</div>' +

        '<span class="cb-store-label">✅ こんな方におすすめ</span>' +
        '<div style="font-size:11.5px;line-height:1.9;color:var(--cb-text)">' +
          '✔ 食事制限が続かない<br>' +
          '✔ 運動が苦手・忙しい<br>' +
          '✔ 部分的に気になる箇所がある<br>' +
          '✔ ダウンタイムなしで通いたい<br>' +
          '✔ 施術中もスマホ・読書 OK' +
        '</div>'
    },

    nailstyle: {
      label: '🎨 ネイルデザイン一覧',
      related: ['nail', 'combo', 'book'],
      answer:
        '<strong>🎨 ネイルデザイン・スタイル一覧</strong><br><br>' +
        '<span style="font-size:10.5px;color:var(--cb-muted)">CHUCHU 小郡店でご対応しています。</span><br><br>' +

        '<span class="cb-store-label">💅 シンプル系</span>' +
        '<div class="cb-price-row"><span class="cb-price-name">ワンカラー<span class="cb-price-note">単色・オフィスでも馴染む定番</span></span><span class="cb-price-val">¥5,500〜</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">フレンチネイル<span class="cb-price-note">先端ホワイト・クラシックで飽きない</span></span><span class="cb-price-val">¥6,000〜</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">グラデーション<span class="cb-price-note">2色をなめらかにつなぐ・女性らしい</span></span><span class="cb-price-val">¥6,000〜</span></div>' +

        '<span class="cb-store-label">✨ アート系</span>' +
        '<div class="cb-price-row"><span class="cb-price-name">フラワーアート<span class="cb-price-note">繊細な花柄・大人可愛い</span></span><span class="cb-price-val">¥6,000〜</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">マーブル<span class="cb-price-note">大理石模様・スタイリッシュ</span></span><span class="cb-price-val">¥7,000〜</span></div>' +
        '<div class="cb-price-row"><span class="cb-price-name">ラメ / ホログラム<span class="cb-price-note">キラキラ・特別な日に映える</span></span><span class="cb-price-val">¥6,000〜</span></div>' +

        '<span class="cb-store-label">🌸 季節限定デザイン</span>' +
        '<div style="display:flex;flex-wrap:wrap;gap:4px;margin:4px 0 6px">' +
          '<span class="cb-highlight">🌸 春：桜・パステル</span>' +
          '<span class="cb-highlight">🌊 夏：海・鮮やか</span>' +
          '<span class="cb-highlight">🍂 秋：紅葉・テラコッタ</span>' +
          '<span class="cb-highlight">❄ 冬：雪・クリスマス</span>' +
        '</div>' +

        '<br><span style="font-size:10px;color:var(--cb-muted)">※ 最新デザインはLINEまたはHotPepperにてご確認ください。</span>' +
        PRICE_FOOTER
    },

    b2b: {
      label: '🏢 機器導入・法人相談',
      related: ['cryo', 'stores'],
      answer:
        '<strong>🏢 脂肪冷却機器の導入・法人相談</strong><br><br>' +
        'サロン・クリニックへの<strong>COOLSPA機器の導入・B2B相談</strong>は、合同会社BISIN（販売会社）の専用サイトにてご案内しています。<br><br>' +
        '<span class="cb-highlight">🏪 サロン導入サポート</span><span class="cb-highlight">⚡ 最短2週間稼働</span><span class="cb-highlight">📦 放置型で省スペース</span><br><br>' +
        '<span style="font-size:11px;color:var(--cb-muted)">デモ体験・価格・サポート内容は販売会社サイトからお問い合わせください。</span>'
    }

  };

  var TOPIC_ORDER = ['cryo', 'nail', 'knowledge', 'nailstyle', 'combo', 'howmany', 'book', 'stores'];

  // 価格キーワード
  var PRICE_KW = ['価格', '費用', 'いくら', '料金', '値段', '安い', '高い', '円', '¥'];

  // ── 状態 ──────────────────────────────────────────────
  var isOpen   = false;
  var answers  = {};
  var $window, $body, $launcher, $badge;

  // ── DOM ヘルパー ──────────────────────────────────────
  function el(tag, attrs) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'className') { node.className = attrs[k]; }
      else if (k === 'innerHTML') { node.innerHTML = attrs[k]; }
      else if (k === 'textContent') { node.textContent = attrs[k]; }
      else { node.setAttribute(k, attrs[k]); }
    });
    return node;
  }

  // ── Widget 構築 ────────────────────────────────────────
  function buildWidget() {
    // Launcher
    $launcher = el('button', { className: 'cb-launcher', 'aria-label': 'チャット相談' });
    $launcher.innerHTML = iconChat();
    $badge = el('div', { className: 'cb-badge', textContent: '1' });
    $launcher.appendChild($badge);
    $launcher.addEventListener('click', toggleChat);

    // Window
    $window = el('div', { className: 'cb-window cb-hidden' });
    $window.innerHTML =
      '<div class="cb-header">' +
        '<div class="cb-header-left">' +
          '<div class="cb-avatar">✦</div>' +
          '<div>' +
            '<div class="cb-header-title">BISIN BEAUTY 相談室</div>' +
            '<div class="cb-header-sub">オンライン受付中</div>' +
          '</div>' +
        '</div>' +
        '<button class="cb-close-btn" aria-label="閉じる">✕</button>' +
      '</div>' +
      '<div class="cb-body"></div>' +
      '<div class="cb-footer">' +
        '<input class="cb-input" type="text" placeholder="メッセージを入力..." />' +
        '<button class="cb-send-btn" aria-label="送信">' +
          '<svg viewBox="0 0 20 20" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M2 10L18 2l-6 16-2-6-8-2z"/>' +
          '</svg>' +
        '</button>' +
      '</div>';

    document.body.appendChild($launcher);
    document.body.appendChild($window);

    $body = $window.querySelector('.cb-body');
    $window.querySelector('.cb-close-btn').addEventListener('click', closeChat);

    var $input = $window.querySelector('.cb-input');
    var $send  = $window.querySelector('.cb-send-btn');

    $send.addEventListener('click', function () { handleFreeText($input.value); $input.value = ''; });
    $input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleFreeText($input.value); $input.value = ''; }
    });

    // 初回自動オープン（4秒後・初回のみ）
    if (!sessionStorage.getItem('bisin-chat-seen')) {
      setTimeout(function () { openChat(); }, 4000);
    }
  }

  // ── 開閉 ──────────────────────────────────────────────
  function toggleChat() { isOpen ? closeChat() : openChat(); }

  function openChat() {
    isOpen = true;
    $window.classList.remove('cb-hidden');
    $badge.style.display = 'none';
    sessionStorage.setItem('bisin-chat-seen', '1');
    if ($body.children.length === 0) { startConversation(); }
    setTimeout(function () { $body.scrollTop = $body.scrollHeight; }, 100);
  }

  function closeChat() {
    isOpen = false;
    $window.classList.add('cb-hidden');
  }

  // ── 会話開始 ───────────────────────────────────────────
  function startConversation() {
    appendTyping(function ($t) {
      $body.removeChild($t);
      var $msg = botBubble(
        'いらっしゃいませ！<strong>BISIN BEAUTY</strong>です。<br>' +
        '脂肪冷却・ネイルのご相談、ご予約のお手伝いをします。<br><br>' +
        '気になるトピックをお選びください 👇'
      );
      $body.appendChild($msg);
      setTimeout(buildTopicGrid, 300);
    }, 700);
  }

  // ── ボットバブル ───────────────────────────────────────
  function botBubble(html) {
    var $wrap = el('div', { className: 'cb-msg cb-bot' });
    var $av   = el('div', { className: 'cb-msg-avatar', textContent: '✦' });
    var $bbl  = el('div', { className: 'cb-bubble', innerHTML: html });
    $wrap.appendChild($av);
    $wrap.appendChild($bbl);
    return $wrap;
  }

  function userBubble(text) {
    var $wrap = el('div', { className: 'cb-msg cb-user' });
    var $bbl  = el('div', { className: 'cb-bubble', textContent: text });
    $wrap.appendChild($bbl);
    return $wrap;
  }

  // ── タイピングインジケーター ───────────────────────────
  function appendTyping(cb, delay) {
    var $wrap = el('div', { className: 'cb-msg cb-bot' });
    var $av   = el('div', { className: 'cb-msg-avatar', textContent: '✦' });
    var $t    = el('div', { className: 'cb-typing' });
    $t.innerHTML = '<span></span><span></span><span></span>';
    $wrap.appendChild($av);
    $wrap.appendChild($t);
    $body.appendChild($wrap);
    scrollDown();
    setTimeout(function () { cb($wrap); scrollDown(); }, delay || 700);
  }

  function scrollDown() {
    setTimeout(function () { $body.scrollTop = $body.scrollHeight; }, 50);
  }

  // ── トピックグリッド ───────────────────────────────────
  function buildTopicGrid() {
    var $grid = el('div', { className: 'cb-topic-grid' });
    TOPIC_ORDER.forEach(function (id) {
      var t = TOPICS[id];
      var $btn = el('button', { className: 'cb-topic-btn', textContent: t.label });
      $btn.addEventListener('click', function () { handleTopic(id, $grid); });
      $grid.appendChild($btn);
    });
    $body.appendChild($grid);
    scrollDown();
  }

  // ── トピック選択 ───────────────────────────────────────
  function handleTopic(id, $grid) {
    var t = TOPICS[id];
    answers.topic = t.label;

    // グリッドを無効化
    if ($grid) {
      Array.from($grid.querySelectorAll('.cb-topic-btn')).forEach(function (b) {
        b.disabled = true;
      });
    }

    // ユーザーバブル
    $body.appendChild(userBubble(t.label));

    // B2B の場合は別処理
    if (id === 'b2b') {
      appendTyping(function ($tw) {
        $body.removeChild($tw);
        var $msg = botBubble(t.answer);
        $body.appendChild($msg);
        // B2B リンクボタン
        var $linkRow = el('div', { className: 'cb-cta-row' });
        var $link = el('a', { className: 'cb-b2b-link', href: B2B_URL, target: '_blank', rel: 'noopener' });
        $link.innerHTML = '🔗 BISIN 機器導入サイトへ';
        $linkRow.appendChild($link);
        $body.appendChild($linkRow);
        buildRelatedRow(t.related);
      }, 680);
      return;
    }

    appendTyping(function ($tw) {
      $body.removeChild($tw);
      var $msg = botBubble(t.answer);
      $body.appendChild($msg);
      setTimeout(function () { buildRelatedRow(t.related); }, 350);
    }, 680);
  }

  // ── 関連トピックチップ ─────────────────────────────────
  function buildRelatedRow(relatedIds) {
    var $row = el('div', { className: 'cb-related' });

    relatedIds.forEach(function (id) {
      var t = TOPICS[id];
      if (!t) return;
      var $chip = el('button', { className: 'cb-related__chip', textContent: t.label });
      $chip.addEventListener('click', function () { handleTopic(id, null); });
      $row.appendChild($chip);
    });

    // 予約フォームボタン
    var $fb = el('button', { className: 'cb-related__form-btn', textContent: '✉ お問い合わせ' });
    $fb.addEventListener('click', showFormPanel);
    $row.appendChild($fb);

    $body.appendChild($row);
    scrollDown();
  }

  // ── 自由入力処理 ───────────────────────────────────────
  function handleFreeText(raw) {
    var val = (raw || '').trim();
    if (!val) return;

    $body.appendChild(userBubble(val));
    scrollDown();

    var valLow = val;

    // 価格キーワード → トピックへ誘導
    if (PRICE_KW.some(function (k) { return valLow.indexOf(k) !== -1; })) {
      appendTyping(function ($tw) {
        $body.removeChild($tw);
        var $msg = botBubble(
          '料金についてのご質問ですね！<br>以下のメニューからご確認いただけます。'
        );
        $body.appendChild($msg);
        setTimeout(function () { buildRelatedRow(['cryo', 'nail', 'combo']); }, 300);
      }, 650);
      return;
    }

    // ネイル関連
    if (valLow.indexOf('ネイル') !== -1 || valLow.indexOf('nail') !== -1) {
      handleTopic('nail', null);
      return;
    }

    // 冷却関連
    if (valLow.indexOf('冷却') !== -1 || valLow.indexOf('痩身') !== -1 || valLow.indexOf('脂肪') !== -1) {
      handleTopic('cryo', null);
      return;
    }

    // セット・組み合わせ
    if (valLow.indexOf('セット') !== -1 || valLow.indexOf('組み合わせ') !== -1 || valLow.indexOf('同日') !== -1) {
      handleTopic('combo', null);
      return;
    }

    // B2B
    if (valLow.indexOf('機器') !== -1 || valLow.indexOf('導入') !== -1 || valLow.indexOf('法人') !== -1 || valLow.indexOf('開業') !== -1) {
      handleTopic('b2b', null);
      return;
    }

    // 予約
    if (valLow.indexOf('予約') !== -1 || valLow.indexOf('体験') !== -1) {
      handleTopic('book', null);
      return;
    }

    // 汎用応答
    appendTyping(function ($tw) {
      $body.removeChild($tw);
      var $msg = botBubble(
        'ありがとうございます。<br>詳しくはLINEまたはお電話でもご相談いただけます。<br><br>' +
        'お気軽にお問い合わせください！'
      );
      $body.appendChild($msg);
      buildCtaRow();
    }, 650);
  }

  // ── LINE + フォームCTAボタン ───────────────────────────
  function buildCtaRow() {
    var $row = el('div', { className: 'cb-cta-row' });

    var $line = el('a', { className: 'cb-cta-line', href: LINE_URL });
    $line.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z"/></svg> LINEで相談';
    $row.appendChild($line);

    var $form = el('button', { className: 'cb-cta-form', textContent: '✉ お問い合わせ' });
    $form.addEventListener('click', showFormPanel);
    $row.appendChild($form);

    $body.appendChild($row);
    scrollDown();
  }

  // ── お問い合わせフォーム ───────────────────────────────
  function showFormPanel() {
    appendTyping(function ($tw) {
      $body.removeChild($tw);
      var $msg = botBubble(
        'お問い合わせフォームです。<br>送信後、担当者よりご連絡いたします。'
      );
      $body.appendChild($msg);
      setTimeout(buildForm, 300);
    }, 600);
  }

  function buildForm() {
    var $form = el('div', { className: 'cb-form' });

    $form.innerHTML =
      '<div class="cb-field">' +
        '<label>お名前 <span class="cb-req">必須</span></label>' +
        '<input type="text" name="name" placeholder="山田 花子" />' +
        '<span class="cb-field-error" id="cb-err-name">お名前をご入力ください</span>' +
      '</div>' +
      '<div class="cb-field">' +
        '<label>メールアドレス <span class="cb-req">必須</span></label>' +
        '<input type="email" name="email" placeholder="example@email.com" />' +
        '<span class="cb-field-error" id="cb-err-email">正しいメールアドレスを入力してください</span>' +
      '</div>' +
      '<div class="cb-field">' +
        '<label>電話番号 <span style="color:var(--cb-muted);font-weight:400">任意</span></label>' +
        '<input type="tel" name="tel" placeholder="090-0000-0000" />' +
      '</div>' +
      '<div class="cb-field">' +
        '<label>ご質問・ご要望 <span style="color:var(--cb-muted);font-weight:400">任意</span></label>' +
        '<textarea name="msg" placeholder="例：脂肪冷却とネイルを同日で予約したい"></textarea>' +
      '</div>' +
      '<button class="cb-submit-btn" type="button">送信する →</button>';

    $body.appendChild($form);
    scrollDown();

    $form.querySelector('.cb-submit-btn').addEventListener('click', function () {
      submitForm($form);
    });
  }

  function submitForm($form) {
    var name  = ($form.querySelector('[name=name]').value || '').trim();
    var email = ($form.querySelector('[name=email]').value || '').trim();
    var tel   = ($form.querySelector('[name=tel]').value || '').trim();
    var msg   = ($form.querySelector('[name=msg]').value || '').trim();

    var valid = true;

    var $errName  = document.getElementById('cb-err-name');
    var $errEmail = document.getElementById('cb-err-email');

    if (!name) { $errName.style.display = 'block'; valid = false; }
    else { $errName.style.display = 'none'; }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { $errEmail.style.display = 'block'; valid = false; }
    else { $errEmail.style.display = 'none'; }

    if (!valid) return;

    openMailto(name, email, tel, msg);
  }

  function openMailto(name, email, tel, msg) {
    var bodyText = [
      '■ お客様情報',
      'お名前　　: ' + name,
      'メール　　: ' + email,
      '電話番号　: ' + (tel || '未記入'),
      '',
      '■ チャットで確認されたトピック',
      'トピック　: ' + (answers.topic || '未選択'),
      '',
      '■ ご質問・ご要望',
      msg || '（なし）'
    ].join('\n');

    var subject = encodeURIComponent('【BISIN BEAUTY お問い合わせ】' + name + ' 様');
    var mailto  = 'mailto:' + EMAIL_TO + '?subject=' + subject + '&body=' + encodeURIComponent(bodyText);

    var $a = document.createElement('a');
    $a.href = mailto;
    $a.style.display = 'none';
    document.body.appendChild($a);
    $a.click();
    document.body.removeChild($a);

    setTimeout(showSuccess, 600);
  }

  function showSuccess() {
    var $s = el('div', { className: 'cb-success' });
    $s.innerHTML =
      '<div class="cb-success-icon">✉️</div>' +
      '<div class="cb-success-title">お問い合わせありがとうございます</div>' +
      '<div class="cb-success-sub">メールソフトが起動しました。そのまま送信してください。<br>起動しない場合は以下からご連絡ください。</div>' +
      '<div class="cb-fallback">' +
        '<div class="cb-fallback__title">直接のご連絡先</div>' +
        '<a href="mailto:' + EMAIL_TO + '">' +
          '<svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="M2 7l8 5 8-5"/></svg>' +
          EMAIL_TO +
        '</a>' +
        '<a href="tel:' + TEL_TENJIN + '">' +
          '<svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3h4l2 5-2.5 1.5a11 11 0 005 5L13 12l5 2v4a2 2 0 01-2 2A17 17 0 013 3z"/></svg>' +
          '天神店 092-753-5515' +
        '</a>' +
        '<a href="tel:' + TEL_OGORI + '">' +
          '<svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3h4l2 5-2.5 1.5a11 11 0 005 5L13 12l5 2v4a2 2 0 01-2 2A17 17 0 013 3z"/></svg>' +
          '小郡店 0942-80-6688' +
        '</a>' +
        '<a href="' + LINE_URL + '">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992z"/></svg>' +
          'LINEで相談する' +
        '</a>' +
      '</div>';

    $body.appendChild($s);
    scrollDown();
  }

  // ── アイコン SVG ──────────────────────────────────────
  function iconChat() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>' +
      '<circle cx="9" cy="10" r="1" fill="#fff" stroke="none"/>' +
      '<circle cx="12" cy="10" r="1" fill="#fff" stroke="none"/>' +
      '<circle cx="15" cy="10" r="1" fill="#fff" stroke="none"/>' +
    '</svg>';
  }

  // ── 初期化 ────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildWidget);
  } else {
    buildWidget();
  }

}());
