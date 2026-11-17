/**
 * Localised copy for the compass silo support pages: About, Blog index, Contact,
 * Privacy and Terms.
 *
 * These five pages were entirely English on all seven locale URLs, so a Japanese
 * reader on /ja/onlinecompass/about/ got a Japanese header above English body
 * text. Everything here falls back to English, so a missing key can never leave
 * a page empty.
 */

/**
 * A legal page section. `paras` may contain two markup conventions that the
 * rendering component turns into real markup:
 *   **bold**      → <strong>
 *   {contact}     → link to /contact/ labelled with `contactLink`
 *   {contactCta}  → link to /contact/ labelled with `contactCta`
 * `list`, when present, renders as a <ul> after `paras[listAt]` (default: after
 * the last paragraph), which keeps the original bullet lists in place.
 */
export type Section = { h: string; paras: string[]; list?: string[]; listAt?: number };

export type SupportCopy = {
  /** "Last updated: October 2026" line under every silo page H1. */
  updated: string;
  /** "Back to Compass" link label. */
  back: string;
  /** Inline contact link label used by the {contact} token (mid-sentence). */
  contactLink: string;
  about: {
    whatH: string;
    what: string[];
    missionH: string;
    mission: string[];
    featuresH: string;
    features: string[];
    /** Compass-only feature list rendered on /onlinecompass/about/. */
    featuresCompass: string[];
    privacyH: string;
    privacy: string;
    /** Text before the inline "Privacy Policy" link, the link label, and the tail after it. */
    privacyPre: string;
    privacyLink: string;
    privacyPost: string;
    /** "Contact us here." link label, punctuation included. */
    contactCta: string;
    contactH: string;
    contact: string;
  };
  blog: { title: string; desc: string; intro: string; posts: { href: string; title: string; desc: string }[] };
  contact: { emailH: string; sendH: string; intro: string; email: string };
  /**
   * The phrase substituted for the {tool} token in the legal copy, so the terms
   * page can say "sensors as a compass" or "sensors as a bubble level" without
   * duplicating the whole section list.
   */
  toolPhrase: { compass: string; level: string; speed: string; qibla: string };
  privacy: { sections: Section[] };
  terms: { intro: string; sections: Section[] };
};

const en: SupportCopy = {
  updated: 'Last updated: October 2026',
  back: "Back to Compass",
  contactLink: "contact us",
  about: {
    whatH: 'What is onlinecompass?',
    what: [
      'onlinecompass is a free, browser-based navigation toolkit that turns any phone, tablet, or laptop into a precision compass, bubble level, speedometer, and qibla finder. Measure direction, tilt, speed, and prayer bearing at real-world accuracy, with no app to install and no account required.',
      "Unlike most online compass tools that guess your orientation, onlinecompass reads your device's magnetometer, accelerometer, and GPS directly through standard browser APIs. Once loaded, it works offline and keeps your sensor data on your device.",
    ],
    missionH: 'Our Mission',
    mission: [
      'Navigation should be instant and free. We built onlinecompass because we kept reaching for a compass, level, or speedometer that was not nearby — and the online alternatives were inaccurate, cluttered with ads, or required unnecessary downloads. onlinecompass is fast, private, and accurate by default.',
    ],
    featuresH: 'Key Features',
    features: [
      'Live compass direction to find north, south, east, and west',
      'Bubble level: horizontal, vertical, and bull’s-eye',
      'Speedometer: GPS-based speed, max, average, altitude, and trip time',
      'Qibla finder: prayer direction from any location',
      'Four precision calibration methods for any device',
      'Rulers and tools on any screen edge, fullscreen mode',
      'Dark mode that respects your system preference',
      'Works on every modern browser — no download, no sign-up',
    ],
    featuresCompass: [
      "Live compass direction to find north, south, east, and west",
      "Precise bearing readout in degrees",
      "Four precision calibration methods for any device",
      "Rulers and tools on any screen edge, fullscreen mode",
      "Dark mode that respects your system preference",
      "Works on every modern browser — no download, no sign-up",
    ],
    privacyH: 'Privacy First',
    privacy:
      'Your sensor data stays on your device. We do not collect, store, or transmit your heading, location, or orientation. Your calibration settings are stored locally on your own device.',
    contactH: 'Contact',
    contact: 'Have a question, found a bug, or want to suggest a feature? We would love to hear from you.',
    privacyPre: "Read our ",
    privacyLink: "Privacy Policy",
    privacyPost: " for full details.",
    contactCta: "Contact us here.",
  },
  blog: {
    title: "Online Compass Blog",
    desc: "Guides and tips for reading direction with the online compass — how to read a dial, find north without tools, and fix a heading that looks wrong.",
    intro: "Guides and tips for navigating with onlinecompass.",
    posts: [
      {
        href: "/onlinecompass/blog/online-compass-without-an-app/",
        title: "Online Compass Without an App: Use Your Phone as a Compass",
        desc: "Use your phone as a compass in the browser — no app, no install. What the magnetometer reads, how to calibrate in one tap, and when a browser compass is enough.",
      },
      {
        href: "/onlinecompass/blog/how-to-find-north-without-a-compass/",
        title: "How to Find North Without a Compass (And With Your Phone)",
        desc: "Find north in seconds with an online compass or with no tools at all. Step-by-step sensor setup, degree readings, and sun or shadow checks that confirm the result.",
      },
      {
        href: "/onlinecompass/blog/how-to-read-a-compass-dial/",
        title: "How to Read a Compass Dial: Degrees, Cardinal Points, Bearings",
        desc: "Read any compass dial correctly. Cardinal points, degrees, bearings and declination, with worked examples and fixes for the readings people get wrong most.",
      },
      {
        href: "/onlinecompass/blog/how-to-use-an-online-compass/",
        title: "How to Use an Online Compass (Step-by-Step, With Real Examples)",
        desc: "A practical guide to measuring direction with your phone. Calibrate, read N/S/E/W, and work through real examples.",
      },
    ],
  },  contact: {
    emailH: "Email",
    sendH: "Send a message",
    intro:
      'We are a small team and we read every message. Whether you have found a bug, have a feature request, or just want to say hello — reach out using the form below.',
    email: 'Reach us at {email}. We usually reply within a few business days.',
  },
  toolPhrase: { compass: "as a compass", level: "as a bubble level", speed: "as a speedometer", qibla: "as a qibla finder" },
  privacy: {
    sections: [
      {
        h: "Overview",
        paras: [
          "onlinecompass (\"we\", \"our\", \"the service\") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights. The short version: we collect almost nothing and we do not sell or share your data.",
        ],
      },
      {
        h: "1. Information We Collect",
        paras: [
          "**We do not require you to create an account or provide any personal information to use onlinecompass.**",
          "The compass, bubble level, speedometer, and qibla finder run entirely in your browser. Any calibration data (your sensor readings, chosen calibration method, theme preference) is stored only in your browser's localStorage and never transmitted to our servers.",
          "We may collect the following non-personal, aggregated data through standard server logs and analytics:",
        ],
        listAt: 2,
        list: [
          "Pages visited and approximate session duration",
          "Browser type and operating system (aggregated)",
          "Referring website or search engine",
          "Country-level geographic region (not precise location)",
        ],
      },
      {
        h: "2. Cookies",
        paras: [
          "onlinecompass does not use advertising cookies. We do use one third-party analytics service to count page views, with IP anonymisation switched on and no advertising or cross-site tracking features enabled; it sets its own analytics cookies. We also use localStorage (not cookies) to remember your calibration and theme preference between visits, and that data never leaves your device.",
          "You can clear this data at any time by clearing your browser's site data for onlinecompass.",
        ],
      },
      {
        h: "3. Third-Party Services",
        paras: [
          "We load the Geist typeface from a third-party font delivery network. When your browser downloads these fonts, that provider may log your IP address as part of standard font delivery. Please refer to that provider's privacy policy for details.",
          "We do not embed social media widgets, advertising networks or advertising trackers. The only third-party script on the page is the analytics tag described above.",
        ],
      },
      {
        h: "4. Data Retention",
        paras: [
          "We do not store personal data on our servers. Server access logs, if retained, are kept for no longer than 90 days and are used solely to diagnose technical issues.",
        ],
      },
      {
        h: "5. Children's Privacy",
        paras: [
          "onlinecompass is a general-purpose tool suitable for all ages. We do not knowingly collect any personal information from children under 13. Since we collect no personal information from any user, this service complies with COPPA by design.",
        ],
      },
      {
        h: "6. Your Rights",
        paras: [
          "Because we do not collect identifiable personal data, there is typically nothing for us to retrieve, correct, or delete on your behalf. If you have concerns, please {contact} and we will respond promptly.",
          "If you are located in the European Economic Area, you have the right to access, rectify, or erase any personal data we hold, and to lodge a complaint with your local supervisory authority.",
        ],
      },
      {
        h: "7. Changes to This Policy",
        paras: [
          "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top of this page reflects the most recent revision. Continued use of the service after changes are posted constitutes acceptance of the revised policy.",
        ],
      },
      {
        h: "8. Contact",
        paras: [
          "Questions about this Privacy Policy? {contactCta}",
        ],
      },
    ],
  },
  terms: {
    intro: "Please read these Terms and Conditions (\"Terms\") carefully before using onlinecompass (\"the Service\"). By accessing or using the Service, you agree to be bound by these Terms.",
    sections: [
      {
        h: "1. Use of the Service",
        paras: [
          "onlinecompass is provided free of charge for personal and professional use. You may use the Service to find compass direction, level surfaces, measure speed, and find qibla. No registration or payment is required.",
          "You agree not to:",
        ],
        listAt: 1,
        list: [
          "Use the Service for any unlawful purpose",
          "Attempt to reverse-engineer, scrape, or copy the Service for redistribution without permission",
          "Interfere with or disrupt the servers or networks that host the Service",
        ],
      },
      {
        h: "2. Accuracy Disclaimer",
        paras: [
          "onlinecompass is designed to provide accurate readings when properly calibrated. However, accuracy depends on:",
          "**Do not rely on onlinecompass for safety-critical measurements** — such as medical, engineering, or construction applications where measurement errors could cause harm. For precision work, use calibrated physical instruments.",
        ],
        listAt: 0,
        list: [
          "Correct calibration by the user",
          "The physical characteristics of your specific device",
          "Browser zoom level (measurements assume 100% zoom)",
          "Screen scaling settings in your operating system",
        ],
      },
      {
        h: "3. Intellectual Property",
        paras: [
          "The design, code, text, and visual assets of onlinecompass are owned by us and protected by copyright law. You may not reproduce or redistribute them without prior written permission. The measurement functionality of the Service — using a device's sensors {tool} — is not claimed as proprietary; only our specific implementation is protected.",
        ],
      },
      {
        h: "4. Disclaimer of Warranties",
        paras: [
          "The Service is provided \"as is\" and \"as available\" without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or completely accurate for all devices and screens.",
        ],
      },
      {
        h: "5. Limitation of Liability",
        paras: [
          "To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of, or inability to use, the Service — even if we have been advised of the possibility of such damages.",
        ],
      },
      {
        h: "6. Third-Party Links",
        paras: [
          "The Service may contain links to third-party websites. These links are provided for convenience only. We have no control over third-party content and accept no responsibility for it.",
        ],
      },
      {
        h: "7. Changes to These Terms",
        paras: [
          "We reserve the right to modify these Terms at any time. The \"Last updated\" date at the top of this page will reflect the most recent revision. Your continued use of the Service after changes are posted constitutes your acceptance of the revised Terms.",
        ],
      },
      {
        h: "8. Contact",
        paras: [
          "Questions about these Terms? {contactCta}",
        ],
      },
    ],
  },
};

const ja: SupportCopy = {
  updated: '最終更新: 2026年10月',
  back: "コンパスに戻る",
  contactLink: "お問い合わせ",
  about: {
    whatH: 'onlinecompass とは',
    what: [
      'onlinecompass は、スマートフォン・タブレット・ノートPCを高精度な方位磁針、水準器、スピードメーター、キブラ方位ツールに変える無料のブラウザツールです。方角、傾き、速度、礼拝の方位を実用精度で測れ、アプリのインストールもアカウント登録も不要です。',
      '向きを推測するだけのオンライン方位磁針と違い、onlinecompass は端末の磁気センサー、加速度センサー、GPS をブラウザの標準 API から直接読み取ります。読み込み後はオフラインでも動作し、センサーデータは端末の外に出ません。',
    ],
    missionH: '私たちの目的',
    mission: [
      '方位を知ることは、すぐに、無料であるべきです。手元に方位磁針も水準器もスピードメーターもない——しかもネット上の代わりは不正確だったり、広告だらけだったり、不要なダウンロードを求めたりする。そんな経験から onlinecompass を作りました。速く、プライバシーを守り、はじめから正確であること。それが方針です。',
    ],
    featuresH: '主な機能',
    features: [
      '東西南北を探せるリアルタイムの方角表示',
      '水準器: 水平・垂直・円形気泡',
      'スピードメーター: GPS による速度、最高速、平均、標高、走行時間',
      'キブラ方位: どの場所からでも礼拝の方向を表示',
      'あらゆる端末に対応する4種類の精密キャリブレーション',
      '画面端の定規ツール、フルスクリーン表示',
      'システム設定に従うダークモード',
      '最新のブラウザで動作 — ダウンロードも登録も不要',
    ],
    featuresCompass: [
      "東西南北を探せるリアルタイムの方位表示",
      "度単位での正確な方位の読み取り",
      "あらゆる端末に対応する4つの精密キャリブレーション",
      "画面のどの辺にも置ける定規ツール、全画面モード",
      "システム設定に従うダークモード",
      "最新のブラウザで動作 — ダウンロードも登録も不要",
    ],
    privacyH: 'プライバシーを最優先',
    privacy:
      'センサーデータは端末内にとどまります。方位、位置、傾きを収集・保存・送信することはありません。キャリブレーション設定はお使いの端末内にのみ保存されます。',
    contactH: 'お問い合わせ',
    contact: 'ご質問、不具合のご報告、機能のご提案などがありましたら、ぜひお知らせください。',
    privacyPre: "詳しくは",
    privacyLink: "プライバシーポリシー",
    privacyPost: "をご覧ください。",
    contactCta: "こちらからお問い合わせください。",
  },
  blog: {
    title: "オンライン方位磁針ブログ — 使い方ガイド",
    desc: "オンライン方位磁針で方角を読むためのガイドとコツ。北の見つけ方、ダイヤルの読み方、角度の使い方を解説します。",
    intro: "onlinecompass で方角を扱うためのガイドとコツ。",
    posts: [
      {
        href: "/onlinecompass/blog/how-to-find-north-without-a-compass/",
        title: "方位磁針なしで北を見つける方法（スマホを使う場合も）",
        desc: "方位磁針を使う方法でも、道具を一切使わない方法でも、数秒で北を求められます。センサーの設定手順、角度の読み方、太陽や影で結果を確かめる方法まで。",
      },
      {
        href: "/onlinecompass/blog/how-to-read-a-compass-dial/",
        title: "方位磁針のダイヤルの読み方：角度・四方位・方位角",
        desc: "どんな方位磁針のダイヤルも正しく読む方法。四方位、角度、方位角と偏角を、実例とつまずきやすいポイントの解決策とともに解説します。",
      },
      {
        href: "/onlinecompass/blog/how-to-use-an-online-compass/",
        title: "オンライン方位磁針の使い方（手順と実例つき）",
        desc: "スマホで方角を測る実践ガイド。キャリブレーションから東西南北の読み方、実例まで。",
      },
    ],
  },  contact: {
    emailH: "メール",
    sendH: "メッセージを送る",
    intro:
      '少人数のチームで、いただいたメッセージはすべて目を通しています。不具合のご報告、機能のご要望、あいさつだけでも構いません。下のフォームからご連絡ください。',
    email: '{email} までご連絡ください。通常は数営業日以内に返信します。',
  },
  toolPhrase: { compass: "方位磁針として", level: "水準器として", speed: "スピードメーターとして", qibla: "キブラファインダーとして" },
  privacy: {
    sections: [
      {
        h: "概要",
        paras: [
          "onlinecompass（以下「当サービス」）は皆さまのプライバシーを守ります。本ポリシーでは、収集する情報、その利用方法、皆さまの権利について説明します。要約すると、収集する情報はほとんどなく、データを販売や共有することはありません。",
        ],
      },
      {
        h: "1. 収集する情報",
        paras: [
          "**onlinecompass の利用にあたって、アカウントの作成や個人情報の提供は必要ありません。**",
          "方位磁針、水準器、スピードメーター、キブラ方位はすべてブラウザ内で動作します。キャリブレーション情報（センサーの値、選択した方式、テーマ設定）はブラウザの localStorage にのみ保存され、当社のサーバーに送信されることはありません。",
          "標準的なサーバーログとアクセス解析を通じて、以下の個人を特定しない集計データを取得する場合があります。",
        ],
        listAt: 2,
        list: [
          "閲覧したページとおおよその滞在時間",
          "ブラウザの種類と OS（集計値）",
          "参照元のウェブサイトまたは検索エンジン",
          "国単位の地域（正確な位置情報ではありません）",
        ],
      },
      {
        h: "2. Cookie",
        paras: [
          "onlinecompass は広告目的の Cookie を使用しません。ページビューを数えるために第三者のアクセス解析サービスを1つ利用しており、IP 匿名化を有効にし、広告やクロスサイト追跡の機能は無効にしています。このサービスは独自の解析 Cookie を設定します。また、キャリブレーションとテーマ設定の記憶には Cookie ではなく localStorage を使用し、そのデータが端末の外に出ることはありません。",
          "ブラウザで onlinecompass のサイトデータを削除すれば、いつでも消去できます。",
        ],
      },
      {
        h: "3. 第三者サービス",
        paras: [
          "Geist フォントを第三者のフォント配信網から読み込みます。フォントの取得に伴い、配信事業者が標準的な処理として IP アドレスを記録する場合があります。詳細は各事業者のプライバシーポリシーをご確認ください。",
          "SNS ウィジェット、広告ネットワーク、広告トラッカーは組み込んでいません。ページ上の第三者のスクリプトは上記の解析タグのみです。",
        ],
      },
      {
        h: "4. データの保持",
        paras: [
          "当社サーバーに個人データを保存することはありません。サーバーのアクセスログを保持する場合も90日を超えず、技術的な問題の調査にのみ使用します。",
        ],
      },
      {
        h: "5. 子どものプライバシー",
        paras: [
          "onlinecompass は全年齢向けの汎用ツールです。13歳未満の子どもから個人情報を意図的に収集することはありません。そもそも利用者から個人情報を収集しないため、本サービスは設計上 COPPA に適合しています。",
        ],
      },
      {
        h: "6. 皆さまの権利",
        paras: [
          "個人を特定できるデータを収集していないため、通常、開示・訂正・削除すべき情報はありません。ご懸念があれば{contact}。速やかに対応します。",
          "欧州経済領域にお住まいの方は、当社が保持する個人データへのアクセス、訂正、削除を求める権利、および現地の監督機関に申し立てる権利があります。",
        ],
      },
      {
        h: "7. 本ポリシーの変更",
        paras: [
          "本プライバシーポリシーは随時更新することがあります。ページ上部の「最終更新」が最新の改訂日を示します。変更後もサービスを利用し続けた場合、改訂後のポリシーに同意したものとみなします。",
        ],
      },
      {
        h: "8. お問い合わせ",
        paras: [
          "本ポリシーについてのご質問は、{contactCta}",
        ],
      },
    ],
  },
  terms: {
    intro: "onlinecompass（以下「本サービス」）をご利用になる前に、本利用規約（以下「本規約」）をよくお読みください。本サービスにアクセスまたは利用することで、本規約に拘束されることに同意したものとみなされます。",
    sections: [
      {
        h: "1. サービスの利用",
        paras: [
          "onlinecompass は個人利用・業務利用ともに無料で提供されます。方角の確認、水平の確認、速度の測定、キブラ方位の確認にご利用いただけます。登録も支払いも不要です。",
          "以下の行為は行わないことに同意していただきます。",
        ],
        listAt: 1,
        list: [
          "違法な目的で本サービスを利用すること",
          "許可なく本サービスをリバースエンジニアリング、スクレイピング、複製して再配布すること",
          "本サービスを提供するサーバーやネットワークを妨害、混乱させること",
        ],
      },
      {
        h: "2. 精度に関する免責",
        paras: [
          "onlinecompass は正しくキャリブレーションされた場合に正確な値を提供するよう設計されています。ただし精度は次の要素に左右されます。",
          "**医療、工学、建設など、測定誤差が危害につながる安全性に関わる用途には使用しないでください。**精密な作業には校正済みの計測器をお使いください。",
        ],
        listAt: 0,
        list: [
          "利用者による正確なキャリブレーション",
          "お使いの端末固有の物理的特性",
          "ブラウザのズーム倍率（100% を前提とします）",
          "OS の画面スケーリング設定",
        ],
      },
      {
        h: "3. 知的財産",
        paras: [
          "onlinecompass のデザイン、コード、文章、画像は当社に帰属し、著作権法で保護されています。事前の書面による許可なく複製・再配布することはできません。端末のセンサーを{tool}使うという機能そのものを独占するものではなく、当社の具体的な実装のみが保護の対象です。",
        ],
      },
      {
        h: "4. 保証の否認",
        paras: [
          "本サービスは「現状有姿」かつ「提供可能な範囲」で提供され、明示・黙示を問わずいかなる保証も行いません。すべての端末と画面において中断なく、誤りなく、完全に正確に動作することを保証するものではありません。",
        ],
      },
      {
        h: "5. 責任の制限",
        paras: [
          "法律で認められる最大限の範囲において、本サービスの利用または利用不能から生じる間接的、偶発的、特別、結果的、懲罰的な損害について、当社は責任を負いません。",
        ],
      },
      {
        h: "6. 第三者へのリンク",
        paras: [
          "本サービスには第三者のウェブサイトへのリンクが含まれる場合があります。これらのリンクは便宜のためのものであり、第三者コンテンツを管理するものではなく、責任を負いません。",
        ],
      },
      {
        h: "7. 本規約の変更",
        paras: [
          "当社は本規約をいつでも変更する権利を留保します。ページ上部の「最終更新」が最新の改訂日を示します。変更後もサービスを利用し続けた場合、改訂後の規約に同意したものとみなします。",
        ],
      },
      {
        h: "8. お問い合わせ",
        paras: [
          "本規約についてのご質問は、{contactCta}",
        ],
      },
    ],
  },
};

const es: SupportCopy = {
  updated: 'Última actualización: octubre de 2026',
  back: "Volver a la brújula",
  contactLink: "escríbenos",
  about: {
    whatH: '¿Qué es onlinecompass?',
    what: [
      'onlinecompass es un conjunto de herramientas de navegación gratuito y basado en el navegador que convierte cualquier móvil, tablet o portátil en una brújula de precisión, un nivel de burbuja, un velocímetro y un buscador de alquibla. Mide dirección, inclinación, velocidad y rumbo de oración con precisión real, sin instalar aplicaciones ni crear cuentas.',
      'A diferencia de la mayoría de brújulas online, que adivinan tu orientación, onlinecompass lee el magnetómetro, el acelerómetro y el GPS de tu dispositivo directamente mediante las API estándar del navegador. Una vez cargada funciona sin conexión y mantiene los datos de tus sensores en tu dispositivo.',
    ],
    missionH: 'Nuestra misión',
    mission: [
      'Orientarse debería ser instantáneo y gratuito. Creamos onlinecompass porque siempre buscábamos una brújula, un nivel o un velocímetro que no teníamos a mano, y las alternativas online eran imprecisas, estaban llenas de anuncios o exigían descargas innecesarias. onlinecompass es rápido, privado y preciso desde el primer momento.',
    ],
    featuresH: 'Funciones principales',
    features: [
      'Dirección de brújula en vivo para encontrar norte, sur, este y oeste',
      'Nivel de burbuja: horizontal, vertical y circular',
      'Velocímetro: velocidad por GPS, máxima, media, altitud y duración del viaje',
      'Buscador de alquibla: dirección de oración desde cualquier lugar',
      'Cuatro métodos de calibración de precisión para cualquier dispositivo',
      'Reglas y herramientas en cualquier borde de pantalla, modo pantalla completa',
      'Modo oscuro que respeta la preferencia del sistema',
      'Funciona en cualquier navegador moderno: sin descargas ni registros',
    ],
    featuresCompass: [
      "Dirección de brújula en vivo para encontrar norte, sur, este y oeste",
      "Lectura precisa del rumbo en grados",
      "Cuatro métodos de calibración de precisión para cualquier dispositivo",
      "Reglas y herramientas en cualquier borde de pantalla, modo pantalla completa",
      "Modo oscuro que respeta la preferencia del sistema",
      "Funciona en cualquier navegador moderno — sin descargas ni registros",
    ],
    privacyH: 'Privacidad ante todo',
    privacy:
      'Los datos de tus sensores se quedan en tu dispositivo. No recogemos, almacenamos ni transmitimos tu rumbo, ubicación u orientación. Tus ajustes de calibración se guardan localmente en tu propio dispositivo.',
    contactH: 'Contacto',
    contact: '¿Tienes una duda, has encontrado un fallo o quieres proponer una función? Nos encantará leerte.',
    privacyPre: "Consulta nuestra ",
    privacyLink: "Política de Privacidad",
    privacyPost: " para más detalles.",
    contactCta: "Escríbenos aquí.",
  },
  blog: {
    title: "Blog de la brújula online",
    desc: "Guías y consejos para leer la dirección con la brújula online: cómo leer el dial, encontrar el norte sin herramientas y corregir un rumbo que parece equivocado.",
    intro: "Guías y consejos para orientarte con onlinecompass.",
    posts: [
      {
        href: "/onlinecompass/blog/how-to-find-north-without-a-compass/",
        title: "Cómo encontrar el norte sin brújula (y con tu móvil)",
        desc: "Encuentra el norte en segundos con una brújula online o sin ninguna herramienta. Configuración de sensores paso a paso, lecturas en grados y comprobaciones con el sol o las sombras.",
      },
      {
        href: "/onlinecompass/blog/how-to-read-a-compass-dial/",
        title: "Cómo leer un limbo de brújula: grados, puntos cardinales y rumbos",
        desc: "Lee correctamente cualquier limbo de brújula. Puntos cardinales, grados, rumbos y declinación, con ejemplos resueltos y soluciones a los errores más comunes.",
      },
      {
        href: "/onlinecompass/blog/how-to-use-an-online-compass/",
        title: "Cómo usar una brújula online (paso a paso, con ejemplos reales)",
        desc: "Guía práctica para medir la dirección con tu móvil. Calibra, lee N/S/E/O y resuelve ejemplos reales.",
      },
    ],
  },  contact: {
    emailH: "Correo electrónico",
    sendH: "Enviar un mensaje",
    intro: 'Somos un equipo pequeño y leemos todos los mensajes. Si has encontrado un fallo, tienes una petición de función o solo quieres saludar, escríbenos con el formulario de abajo.',
    email: 'Escribe a {email}. Solemos responder en pocos días laborables.',
  },
  toolPhrase: { compass: "como brújula", level: "como nivel de burbuja", speed: "como velocímetro", qibla: "como buscador de alquibla" },
  privacy: {
    sections: [
      {
        h: "Resumen",
        paras: [
          "onlinecompass («nosotros», «el servicio») se compromete a proteger tu privacidad. Esta política explica qué información recogemos, cómo la usamos y cuáles son tus derechos. En resumen: recogemos casi nada y no vendemos ni compartimos tus datos.",
        ],
      },
      {
        h: "1. Información que recogemos",
        paras: [
          "**No necesitas crear una cuenta ni facilitar datos personales para usar onlinecompass.**",
          "La brújula, el nivel, el velocímetro y el buscador de alquibla funcionan íntegramente en tu navegador. Los datos de calibración (lecturas de sensores, método elegido, preferencia de tema) se guardan solo en el localStorage de tu navegador y nunca se envían a nuestros servidores.",
          "Podemos recoger los siguientes datos agregados y no personales mediante registros de servidor y analítica estándar:",
        ],
        listAt: 2,
        list: [
          "Páginas visitadas y duración aproximada de la sesión",
          "Tipo de navegador y sistema operativo (agregados)",
          "Sitio web o buscador de referencia",
          "Región geográfica a nivel de país (no la ubicación exacta)",
        ],
      },
      {
        h: "2. Cookies",
        paras: [
          "onlinecompass no usa cookies publicitarias. Sí usamos un servicio de analítica de terceros para contar visitas, con anonimización de IP activada y sin funciones publicitarias ni de seguimiento entre sitios; ese servicio instala sus propias cookies de analítica. También usamos localStorage (no cookies) para recordar tu calibración y tu tema entre visitas, y esos datos nunca salen de tu dispositivo.",
          "Puedes borrar estos datos en cualquier momento eliminando los datos del sitio de onlinecompass en tu navegador.",
        ],
      },
      {
        h: "3. Servicios de terceros",
        paras: [
          "Cargamos la tipografía Geist desde una red de distribución de fuentes de terceros. Cuando tu navegador descarga estas fuentes, ese proveedor puede registrar tu dirección IP como parte del servicio estándar. Consulta su política de privacidad para más detalles.",
          "No incluimos widgets de redes sociales, redes publicitarias ni rastreadores publicitarios. El único script de terceros de la página es la etiqueta de analítica descrita arriba.",
        ],
      },
      {
        h: "4. Conservación de datos",
        paras: [
          "No almacenamos datos personales en nuestros servidores. Los registros de acceso, si se conservan, no se guardan más de 90 días y solo sirven para diagnosticar problemas técnicos.",
        ],
      },
      {
        h: "5. Privacidad de menores",
        paras: [
          "onlinecompass es una herramienta de uso general apta para todas las edades. No recogemos a sabiendas información personal de menores de 13 años. Como no recogemos información personal de ningún usuario, el servicio cumple la COPPA por diseño.",
        ],
      },
      {
        h: "6. Tus derechos",
        paras: [
          "Como no recogemos datos personales identificables, normalmente no hay nada que recuperar, corregir ni eliminar en tu nombre. Si tienes alguna duda, {contact} y responderemos con rapidez.",
          "Si te encuentras en el Espacio Económico Europeo, tienes derecho a acceder, rectificar o suprimir los datos personales que tengamos y a presentar una reclamación ante tu autoridad de control.",
        ],
      },
      {
        h: "7. Cambios en esta política",
        paras: [
          "Podemos actualizar esta Política de privacidad. La fecha de «Última actualización» de la parte superior refleja la revisión más reciente. El uso continuado del servicio tras publicar cambios implica su aceptación.",
        ],
      },
      {
        h: "8. Contacto",
        paras: [
          "¿Dudas sobre esta Política de privacidad? {contactCta}",
        ],
      },
    ],
  },
  terms: {
    intro: "Lee atentamente estos Términos y Condiciones («Términos») antes de usar onlinecompass («el Servicio»). Al acceder o usar el Servicio aceptas quedar vinculado por estos Términos.",
    sections: [
      {
        h: "1. Uso del servicio",
        paras: [
          "onlinecompass se ofrece gratis para uso personal y profesional. Puedes usarlo para orientarte, comprobar superficies niveladas, medir velocidad y encontrar la alquibla. No se requiere registro ni pago.",
          "Te comprometes a no:",
        ],
        listAt: 1,
        list: [
          "Usar el Servicio con fines ilícitos",
          "Intentar aplicar ingeniería inversa, extraer datos de forma automatizada o copiar el Servicio para redistribuirlo sin permiso",
          "Interferir o interrumpir los servidores o redes que alojan el Servicio",
        ],
      },
      {
        h: "2. Aviso sobre precisión",
        paras: [
          "onlinecompass está diseñado para dar lecturas precisas cuando está bien calibrado. Sin embargo, la precisión depende de:",
          "**No utilices onlinecompass para mediciones críticas de seguridad** —como aplicaciones médicas, de ingeniería o de construcción en las que un error pudiera causar daños—. Para trabajos de precisión usa instrumentos físicos calibrados.",
        ],
        listAt: 0,
        list: [
          "Una calibración correcta por parte del usuario",
          "Las características físicas de tu dispositivo concreto",
          "El nivel de zoom del navegador (las mediciones suponen un 100 % de zoom)",
          "La configuración de escalado de pantalla de tu sistema operativo",
        ],
      },
      {
        h: "3. Propiedad intelectual",
        paras: [
          "El diseño, el código, los textos y los recursos visuales de onlinecompass son nuestros y están protegidos por la ley de derechos de autor. No puedes reproducirlos ni redistribuirlos sin permiso previo por escrito. La funcionalidad de medición —usar los sensores {tool}— no se reclama como propia; solo nuestra implementación concreta está protegida.",
        ],
      },
      {
        h: "4. Exclusión de garantías",
        paras: [
          "El servicio se presta «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas. No garantizamos que sea ininterrumpido, libre de errores o completamente exacto en todos los dispositivos y pantallas.",
        ],
      },
      {
        h: "5. Limitación de responsabilidad",
        paras: [
          "En la máxima medida permitida por la ley, no seremos responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos derivados del uso o la imposibilidad de uso del servicio, incluso si se nos advirtió de esa posibilidad.",
        ],
      },
      {
        h: "6. Enlaces a terceros",
        paras: [
          "El servicio puede contener enlaces a sitios de terceros. Se ofrecen solo por comodidad. No controlamos su contenido y no asumimos responsabilidad por él.",
        ],
      },
      {
        h: "7. Cambios en estos términos",
        paras: [
          "Nos reservamos el derecho de modificar estos Términos en cualquier momento. La fecha de «Última actualización» refleja la revisión más reciente. El uso continuado del servicio tras publicar cambios implica la aceptación de los nuevos Términos.",
        ],
      },
      {
        h: "8. Contacto",
        paras: [
          "¿Dudas sobre estos Términos? {contactCta}",
        ],
      },
    ],
  },
};

const de: SupportCopy = {
  updated: 'Zuletzt aktualisiert: Oktober 2026',
  back: "Zurück zum Kompass",
  contactLink: "kontaktiere uns",
  about: {
    whatH: 'Was ist onlinecompass?',
    what: [
      'onlinecompass ist ein kostenloses, browserbasiertes Navigations-Toolkit, das jedes Handy, Tablet oder Notebook in einen präzisen Kompass, eine Wasserwaage, einen Tacho und einen Qibla-Finder verwandelt. Miss Richtung, Neigung, Geschwindigkeit und Gebetsrichtung mit praxistauglicher Genauigkeit — ohne Installation und ohne Konto.',
      'Anders als viele Online-Kompasse, die die Ausrichtung nur schätzen, liest onlinecompass Magnetometer, Beschleunigungssensor und GPS direkt über die Standard-APIs des Browsers. Nach dem Laden funktioniert es offline und lässt deine Sensordaten auf deinem Gerät.',
    ],
    missionH: 'Unser Anspruch',
    mission: [
      'Orientierung sollte sofort und kostenlos sein. Wir haben onlinecompass gebaut, weil ein Kompass, eine Wasserwaage oder ein Tacho nie in Reichweite war — und die Online-Alternativen ungenau, voller Werbung oder mit unnötigen Downloads verbunden waren. onlinecompass ist schnell, privat und von Anfang an genau.',
    ],
    featuresH: 'Wichtigste Funktionen',
    features: [
      'Live-Kompassrichtung für Norden, Süden, Osten und Westen',
      'Wasserwaage: waagerecht, senkrecht und Libelle',
      'Tacho: Geschwindigkeit per GPS, Maximum, Durchschnitt, Höhe und Fahrzeit',
      'Qibla-Finder: Gebetsrichtung von jedem Standort',
      'Vier präzise Kalibriermethoden für jedes Gerät',
      'Lineale und Werkzeuge an jedem Bildschirmrand, Vollbildmodus',
      'Dunkelmodus, der die Systemeinstellung respektiert',
      'Läuft in jedem modernen Browser — ohne Download, ohne Anmeldung',
    ],
    featuresCompass: [
      "Live-Kompassrichtung für Norden, Süden, Osten und Westen",
      "Präzise Peilungsanzeige in Grad",
      "Vier präzise Kalibriermethoden für jedes Gerät",
      "Lineale und Werkzeuge an jedem Bildschirmrand, Vollbildmodus",
      "Dunkelmodus, der die Systemeinstellung respektiert",
      "Läuft in jedem modernen Browser — ohne Download, ohne Anmeldung",
    ],
    privacyH: 'Datenschutz zuerst',
    privacy:
      'Deine Sensordaten bleiben auf deinem Gerät. Wir erfassen, speichern oder übertragen weder Peilung noch Standort oder Ausrichtung. Deine Kalibrierungseinstellungen liegen lokal auf deinem Gerät.',
    contactH: 'Kontakt',
    contact: 'Hast du eine Frage, einen Fehler gefunden oder einen Funktionswunsch? Wir freuen uns auf deine Nachricht.',
    privacyPre: "Details findest du in unserer ",
    privacyLink: "Datenschutzerklärung",
    privacyPost: ".",
    contactCta: "Schreib uns hier.",
  },
  blog: {
    title: "Online-Kompass-Blog",
    desc: "Anleitungen und Tipps zum Ablesen der Richtung mit dem Online-Kompass.",
    intro: "Anleitungen und Tipps zum Navigieren mit onlinecompass.",
    posts: [
      {
        href: "/onlinecompass/blog/how-to-find-north-without-a-compass/",
        title: "Norden ohne Kompass finden (auch mit dem Handy)",
        desc: "Finde Norden in Sekunden mit einem Online-Kompass oder ganz ohne Hilfsmittel. Sensor-Einrichtung Schritt für Schritt, Gradwerte und Kontrolle über Sonne oder Schatten.",
      },
      {
        href: "/onlinecompass/blog/how-to-read-a-compass-dial/",
        title: "Eine Kompassrose lesen: Grad, Himmelsrichtungen, Peilungen",
        desc: "Lies jede Kompassrose richtig. Himmelsrichtungen, Grad, Peilungen und Deklination — mit Rechenbeispielen und Lösungen für die häufigsten Fehler.",
      },
      {
        href: "/onlinecompass/blog/how-to-use-an-online-compass/",
        title: "Einen Online-Kompass nutzen (Schritt für Schritt mit Beispielen)",
        desc: "Praxisleitfaden zum Messen der Richtung mit dem Handy: kalibrieren, N/S/O/W lesen, echte Beispiele.",
      },
    ],
  },  contact: {
    emailH: "E-Mail",
    sendH: "Nachricht senden",
    intro: 'Wir sind ein kleines Team und lesen jede Nachricht. Ob Fehlerbericht, Funktionswunsch oder ein kurzes Hallo — schreib uns über das Formular unten.',
    email: 'Erreichbar unter {email}. Wir antworten meist innerhalb weniger Werktage.',
  },
  toolPhrase: { compass: "als Kompass", level: "als Wasserwaage", speed: "als Tachometer", qibla: "als Qibla-Finder" },
  privacy: {
    sections: [
      {
        h: "Überblick",
        paras: [
          "onlinecompass („wir“, „der Dienst“) verpflichtet sich zum Schutz deiner Privatsphäre. Diese Richtlinie erklärt, welche Daten wir erheben, wie wir sie nutzen und welche Rechte du hast. Kurzfassung: Wir erheben fast nichts und verkaufen oder teilen deine Daten nicht.",
        ],
      },
      {
        h: "1. Erhobene Informationen",
        paras: [
          "**Für die Nutzung von onlinecompass ist kein Konto und keine Angabe persönlicher Daten nötig.**",
          "Kompass, Wasserwaage, Tacho und Qibla-Finder laufen vollständig in deinem Browser. Kalibrierdaten (Sensorwerte, gewählte Methode, Design-Einstellung) liegen nur im localStorage deines Browsers und werden nie an unsere Server übertragen.",
          "Über Standard-Serverprotokolle und Analyse können folgende nicht personenbezogene, aggregierte Daten anfallen:",
        ],
        listAt: 2,
        list: [
          "Besuchte Seiten und ungefähre Sitzungsdauer",
          "Browsertyp und Betriebssystem (aggregiert)",
          "Verweisende Website oder Suchmaschine",
          "Geografische Region auf Länderebene (kein genauer Standort)",
        ],
      },
      {
        h: "2. Cookies",
        paras: [
          "onlinecompass verwendet keine Werbe-Cookies. Wir nutzen einen Analyse-Dienst eines Drittanbieters zur Zählung der Seitenaufrufe, mit aktivierter IP-Anonymisierung und ohne Werbe- oder Cross-Site-Tracking; dieser Dienst setzt eigene Analyse-Cookies. Für Kalibrierung und Design nutzen wir localStorage (keine Cookies), und diese Daten verlassen dein Gerät nie.",
          "Du kannst diese Daten jederzeit löschen, indem du die Websitedaten von onlinecompass in deinem Browser entfernst.",
        ],
      },
      {
        h: "3. Dienste Dritter",
        paras: [
          "Wir laden die Schrift Geist von einem Schriftauslieferungsnetz eines Drittanbieters. Beim Abruf kann dieser Anbieter im Rahmen der üblichen Auslieferung deine IP-Adresse protokollieren. Details stehen in dessen Datenschutzerklärung.",
          "Wir binden keine Social-Media-Widgets, Werbenetzwerke oder Werbetracker ein. Das einzige Skript eines Dritten auf der Seite ist das genannte Analyse-Tag.",
        ],
      },
      {
        h: "4. Speicherdauer",
        paras: [
          "Wir speichern keine personenbezogenen Daten auf unseren Servern. Zugriffsprotokolle werden, falls aufbewahrt, höchstens 90 Tage gehalten und dienen allein der Fehlersuche.",
        ],
      },
      {
        h: "5. Privatsphäre von Kindern",
        paras: [
          "onlinecompass ist ein Allzweckwerkzeug für alle Altersgruppen. Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Da wir von niemandem personenbezogene Daten erheben, erfüllt der Dienst COPPA konstruktionsbedingt.",
        ],
      },
      {
        h: "6. Deine Rechte",
        paras: [
          "Da wir keine identifizierbaren personenbezogenen Daten erheben, gibt es in der Regel nichts, was wir für dich herausgeben, berichtigen oder löschen könnten. Bei Bedenken {contact}, wir antworten umgehend.",
          "Im Europäischen Wirtschaftsraum hast du das Recht auf Auskunft, Berichtigung und Löschung der Daten sowie auf Beschwerde bei deiner Aufsichtsbehörde.",
        ],
      },
      {
        h: "7. Änderungen dieser Richtlinie",
        paras: [
          "Wir können diese Datenschutzerklärung aktualisieren. Das Datum „Zuletzt aktualisiert“ oben zeigt die letzte Fassung. Die weitere Nutzung nach einer Änderung gilt als Zustimmung.",
        ],
      },
      {
        h: "8. Kontakt",
        paras: [
          "Fragen zu dieser Datenschutzerklärung? {contactCta}",
        ],
      },
    ],
  },
  terms: {
    intro: "Bitte lies diese Allgemeinen Geschäftsbedingungen („Bedingungen“) sorgfältig, bevor du onlinecompass („den Dienst“) nutzt. Mit dem Zugriff oder der Nutzung des Dienstes erklärst du dich an diese Bedingungen gebunden.",
    sections: [
      {
        h: "1. Nutzung des Dienstes",
        paras: [
          "onlinecompass wird für private und berufliche Nutzung kostenlos bereitgestellt. Du darfst den Dienst zum Bestimmen der Himmelsrichtung, zum Prüfen von Flächen, zum Messen der Geschwindigkeit und zum Finden der Qibla nutzen. Anmeldung und Zahlung sind nicht erforderlich.",
          "Du verpflichtest dich, Folgendes zu unterlassen:",
        ],
        listAt: 1,
        list: [
          "Nutzung des Dienstes für rechtswidrige Zwecke",
          "Reverse Engineering, automatisiertes Auslesen oder Kopieren des Dienstes zur Weiterverbreitung ohne Erlaubnis",
          "Störung oder Beeinträchtigung der Server oder Netzwerke, die den Dienst bereitstellen",
        ],
      },
      {
        h: "2. Haftung für Genauigkeit",
        paras: [
          "onlinecompass ist auf genaue Werte bei korrekter Kalibrierung ausgelegt. Die Genauigkeit hängt jedoch ab von:",
          "**Nutze onlinecompass nicht für sicherheitskritische Messungen** — etwa in Medizin, Technik oder Bauwesen, wo Messfehler Schaden verursachen könnten. Für Präzisionsarbeit sind kalibrierte Messgeräte nötig.",
        ],
        listAt: 0,
        list: [
          "Korrekte Kalibrierung durch den Nutzer",
          "Die physikalischen Eigenschaften deines Geräts",
          "Die Zoomstufe des Browsers (Messungen gehen von 100 % aus)",
          "Die Bildschirmskalierung deines Betriebssystems",
        ],
      },
      {
        h: "3. Geistiges Eigentum",
        paras: [
          "Design, Code, Texte und Bildmaterial von onlinecompass gehören uns und sind urheberrechtlich geschützt. Ohne vorherige schriftliche Erlaubnis dürfen sie nicht vervielfältigt oder weiterverbreitet werden. Die Messfunktion selbst — Sensoren {tool} zu nutzen — wird nicht als eigen beansprucht; geschützt ist nur unsere konkrete Umsetzung.",
        ],
      },
      {
        h: "4. Gewährleistungsausschluss",
        paras: [
          "Der Dienst wird „wie besehen“ und „wie verfügbar“ ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt. Wir garantieren nicht, dass er unterbrechungsfrei, fehlerfrei oder auf allen Geräten und Bildschirmen vollständig genau ist.",
        ],
      },
      {
        h: "5. Haftungsbeschränkung",
        paras: [
          "Soweit gesetzlich zulässig, haften wir nicht für mittelbare, zufällige, besondere, Folge- oder Strafschäden aus der Nutzung oder Nichtnutzbarkeit des Dienstes, auch wenn wir auf die Möglichkeit hingewiesen wurden.",
        ],
      },
      {
        h: "6. Links zu Dritten",
        paras: [
          "Der Dienst kann Links zu Websites Dritter enthalten. Sie dienen nur der Bequemlichkeit. Wir haben keine Kontrolle über fremde Inhalte und übernehmen keine Verantwortung dafür.",
        ],
      },
      {
        h: "7. Änderungen dieser Bedingungen",
        paras: [
          "Wir behalten uns vor, diese Bedingungen jederzeit zu ändern. Das Datum „Zuletzt aktualisiert“ zeigt die letzte Fassung. Die weitere Nutzung nach einer Änderung gilt als Zustimmung.",
        ],
      },
      {
        h: "8. Kontakt",
        paras: [
          "Fragen zu diesen Bedingungen? {contactCta}",
        ],
      },
    ],
  },
};

const fr: SupportCopy = {
  updated: 'Dernière mise à jour : octobre 2026',
  back: "Retour à la boussole",
  contactLink: "contactez-nous",
  about: {
    whatH: 'Qu’est-ce qu’onlinecompass ?',
    what: [
      "onlinecompass est une boîte à outils de navigation gratuite, dans le navigateur, qui transforme n'importe quel téléphone, tablette ou portable en boussole de précision, niveau à bulle, compteur de vitesse et chercheur de Qibla. Mesurez direction, inclinaison, vitesse et azimut de prière avec une précision réelle, sans installer d'application ni créer de compte.",
      "Contrairement à la plupart des boussoles en ligne qui devinent votre orientation, onlinecompass lit le magnétomètre, l'accéléromètre et le GPS de votre appareil directement via les API standard du navigateur. Une fois chargé, il fonctionne hors ligne et garde vos données de capteurs sur votre appareil.",
    ],
    missionH: 'Notre mission',
    mission: [
      "S'orienter devrait être instantané et gratuit. Nous avons créé onlinecompass parce qu'une boussole, un niveau ou un compteur de vitesse n'était jamais à portée, et les alternatives en ligne étaient imprécises, couvertes de publicités ou exigeaient des téléchargements inutiles. onlinecompass est rapide, respectueux de la vie privée et précis par défaut.",
    ],
    featuresH: 'Fonctions principales',
    features: [
      'Direction de boussole en direct pour trouver nord, sud, est et ouest',
      'Niveau à bulle : horizontal, vertical et bull’s-eye',
      'Compteur de vitesse : vitesse GPS, maximum, moyenne, altitude et durée du trajet',
      'Chercheur de Qibla : direction de prière depuis n’importe quel lieu',
      'Quatre méthodes de calibration de précision pour tout appareil',
      'Règles et outils sur chaque bord d’écran, mode plein écran',
      'Mode sombre qui respecte la préférence du système',
      'Fonctionne sur tout navigateur moderne — sans téléchargement ni inscription',
    ],
    featuresCompass: [
      "Direction de boussole en direct pour trouver nord, sud, est et ouest",
      "Relevé d’azimut précis en degrés",
      "Quatre méthodes de calibration de précision pour tout appareil",
      "Règles et outils sur chaque bord d’écran, mode plein écran",
      "Mode sombre qui respecte la préférence du système",
      "Fonctionne sur tout navigateur moderne — sans téléchargement ni inscription",
    ],
    privacyH: 'La confidentialité d’abord',
    privacy:
      'Vos données de capteurs restent sur votre appareil. Nous ne collectons, ne stockons ni ne transmettons votre cap, votre position ou votre orientation. Vos réglages de calibration sont enregistrés localement sur votre appareil.',
    contactH: 'Contact',
    contact: 'Une question, un bug repéré ou une idée de fonctionnalité ? Nous serons ravis de vous lire.',
    privacyPre: "Consultez notre ",
    privacyLink: "politique de confidentialité",
    privacyPost: " pour en savoir plus.",
    contactCta: "Contactez-nous ici.",
  },
  blog: {
    title: "Blog de la boussole en ligne",
    desc: "Guides et conseils pour lire la direction avec la boussole en ligne : lire le cadran, trouver le nord sans instrument et corriger un cap qui semble faux.",
    intro: "Guides et conseils pour s’orienter avec onlinecompass.",
    posts: [
      {
        href: "/onlinecompass/blog/how-to-find-north-without-a-compass/",
        title: "Comment trouver le nord sans boussole (et avec votre téléphone)",
        desc: "Trouvez le nord en quelques secondes avec une boussole en ligne ou sans aucun outil. Réglage des capteurs pas à pas, relevés en degrés et vérifications par le soleil ou les ombres.",
      },
      {
        href: "/onlinecompass/blog/how-to-read-a-compass-dial/",
        title: "Comment lire un cadran de boussole : degrés, points cardinaux, azimuts",
        desc: "Lisez correctement n’importe quel cadran de boussole. Points cardinaux, degrés, azimuts et déclinaison, avec des exemples résolus et les corrections des erreurs les plus fréquentes.",
      },
      {
        href: "/onlinecompass/blog/how-to-use-an-online-compass/",
        title: "Utiliser une boussole en ligne (pas à pas, avec exemples)",
        desc: "Guide pratique pour mesurer la direction avec votre téléphone : calibrer, lire N/S/E/O et suivre des exemples réels.",
      },
    ],
  },  contact: {
    emailH: "E-mail",
    sendH: "Envoyer un message",
    intro: 'Nous sommes une petite équipe et nous lisons chaque message. Que vous ayez trouvé un bug, une demande de fonctionnalité ou simplement envie de dire bonjour, écrivez-nous via le formulaire ci-dessous.',
    email: 'Écrivez-nous à {email}. Nous répondons généralement en quelques jours ouvrés.',
  },
  toolPhrase: { compass: "comme boussole", level: "comme niveau à bulle", speed: "comme tachymètre", qibla: "comme chercheur de Qibla" },
  privacy: {
    sections: [
      {
        h: "Aperçu",
        paras: [
          "onlinecompass (« nous », « le service ») s’engage à protéger votre vie privée. Cette politique explique quelles informations nous collectons, comment nous les utilisons et quels sont vos droits. En bref : nous ne collectons presque rien et nous ne vendons ni ne partageons vos données.",
        ],
      },
      {
        h: "1. Informations collectées",
        paras: [
          "**Aucun compte ni information personnelle n’est nécessaire pour utiliser onlinecompass.**",
          "La boussole, le niveau, le compteur de vitesse et le chercheur de Qibla fonctionnent entièrement dans votre navigateur. Les données de calibration (valeurs des capteurs, méthode choisie, préférence de thème) sont stockées uniquement dans le localStorage du navigateur et ne sont jamais transmises à nos serveurs.",
          "Nous pouvons collecter les données agrégées et non personnelles suivantes via les journaux serveur et l’analytique standard :",
        ],
        listAt: 2,
        list: [
          "Pages consultées et durée approximative de la session",
          "Type de navigateur et système d’exploitation (agrégés)",
          "Site web ou moteur de recherche référent",
          "Région géographique au niveau du pays (pas la position exacte)",
        ],
      },
      {
        h: "2. Cookies",
        paras: [
          "onlinecompass n’utilise pas de cookies publicitaires. Nous utilisons un service d’analytique tiers pour compter les pages vues, avec anonymisation de l’IP activée et sans fonctions publicitaires ni de suivi inter-sites ; ce service dépose ses propres cookies d’analytique. Nous utilisons aussi le localStorage (et non des cookies) pour mémoriser votre calibration et votre thème entre deux visites, et ces données ne quittent jamais votre appareil.",
          "Vous pouvez effacer ces données à tout moment en supprimant les données du site onlinecompass dans votre navigateur.",
        ],
      },
      {
        h: "3. Services tiers",
        paras: [
          "Nous chargeons la police Geist depuis un réseau de diffusion de polices tiers. Lors du téléchargement, ce fournisseur peut enregistrer votre adresse IP dans le cadre de la diffusion standard. Consultez sa politique de confidentialité pour plus de détails.",
          "Nous n’intégrons aucun widget de réseau social, réseau publicitaire ou traceur publicitaire. Le seul script tiers de la page est la balise d’analytique décrite ci-dessus.",
        ],
      },
      {
        h: "4. Conservation des données",
        paras: [
          "Nous ne stockons aucune donnée personnelle sur nos serveurs. Les journaux d’accès, s’ils sont conservés, le sont au maximum 90 jours et servent uniquement au diagnostic technique.",
        ],
      },
      {
        h: "5. Confidentialité des enfants",
        paras: [
          "onlinecompass est un outil général adapté à tous les âges. Nous ne collectons pas sciemment de données personnelles auprès d’enfants de moins de 13 ans. Comme nous ne collectons aucune donnée personnelle, le service respecte la COPPA par conception.",
        ],
      },
      {
        h: "6. Vos droits",
        paras: [
          "Comme nous ne collectons aucune donnée personnelle identifiable, il n’y a généralement rien à consulter, corriger ou supprimer en votre nom. En cas de doute, {contact} : nous répondons rapidement.",
          "Si vous résidez dans l’Espace économique européen, vous avez le droit d’accéder, de rectifier ou d’effacer les données personnelles que nous détenons, et de déposer une réclamation auprès de votre autorité de contrôle.",
        ],
      },
      {
        h: "7. Modifications de cette politique",
        paras: [
          "Nous pouvons mettre à jour cette politique de confidentialité. La date « Dernière mise à jour » en haut de la page indique la révision la plus récente. Continuer à utiliser le service après une modification vaut acceptation.",
        ],
      },
      {
        h: "8. Contact",
        paras: [
          "Des questions sur cette politique de confidentialité ? {contactCta}",
        ],
      },
    ],
  },
  terms: {
    intro: "Veuillez lire attentivement les présentes Conditions générales (« Conditions ») avant d’utiliser onlinecompass (« le Service »). En accédant au Service ou en l’utilisant, vous acceptez d’être lié par ces Conditions.",
    sections: [
      {
        h: "1. Utilisation du service",
        paras: [
          "onlinecompass est fourni gratuitement pour un usage personnel et professionnel. Vous pouvez l’utiliser pour trouver une direction, vérifier une surface, mesurer une vitesse et trouver la Qibla. Aucune inscription ni paiement n’est requis.",
          "Vous vous engagez à ne pas :",
        ],
        listAt: 1,
        list: [
          "Utiliser le Service à des fins illicites",
          "Tenter de faire de l’ingénierie inverse, d’extraire automatiquement ou de copier le Service pour le redistribuer sans autorisation",
          "Perturber ou interrompre les serveurs ou réseaux qui hébergent le Service",
        ],
      },
      {
        h: "2. Avertissement sur la précision",
        paras: [
          "onlinecompass est conçu pour fournir des lectures précises lorsqu’il est correctement calibré. La précision dépend toutefois de :",
          "**N’utilisez pas onlinecompass pour des mesures critiques de sécurité** — applications médicales, d’ingénierie ou de construction où une erreur pourrait causer un dommage. Pour les travaux de précision, utilisez des instruments physiques calibrés.",
        ],
        listAt: 0,
        list: [
          "Une calibration correcte par l’utilisateur",
          "Les caractéristiques physiques de votre appareil",
          "Le niveau de zoom du navigateur (les mesures supposent un zoom à 100 %)",
          "Les réglages de mise à l’échelle de l’écran de votre système",
        ],
      },
      {
        h: "3. Propriété intellectuelle",
        paras: [
          "Le design, le code, les textes et les visuels d’onlinecompass nous appartiennent et sont protégés par le droit d’auteur. Toute reproduction ou redistribution sans autorisation écrite préalable est interdite. La fonction de mesure elle-même — utiliser les capteurs {tool} — n’est pas revendiquée comme exclusive ; seule notre implémentation concrète est protégée.",
        ],
      },
      {
        h: "4. Exclusion de garanties",
        paras: [
          "Le service est fourni « en l’état » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite. Nous ne garantissons pas qu’il sera ininterrompu, exempt d’erreurs ou totalement exact sur tous les appareils et écrans.",
        ],
      },
      {
        h: "5. Limitation de responsabilité",
        paras: [
          "Dans toute la mesure permise par la loi, nous ne saurions être responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs découlant de l’utilisation ou de l’impossibilité d’utiliser le service, même si nous avons été informés de cette possibilité.",
        ],
      },
      {
        h: "6. Liens vers des tiers",
        paras: [
          "Le service peut contenir des liens vers des sites tiers. Ils sont fournis par commodité. Nous ne contrôlons pas ces contenus et n’en assumons aucune responsabilité.",
        ],
      },
      {
        h: "7. Modifications des conditions",
        paras: [
          "Nous nous réservons le droit de modifier ces conditions à tout moment. La date « Dernière mise à jour » indique la révision la plus récente. Continuer à utiliser le service après une modification vaut acceptation.",
        ],
      },
      {
        h: "8. Contact",
        paras: [
          "Des questions sur ces conditions ? {contactCta}",
        ],
      },
    ],
  },
};

const pt: SupportCopy = {
  updated: 'Última atualização: outubro de 2026',
  back: "Voltar à bússola",
  contactLink: "fale conosco",
  about: {
    whatH: 'O que é o onlinecompass?',
    what: [
      'O onlinecompass é um kit de navegação gratuito, no navegador, que transforma qualquer celular, tablet ou notebook em bússola de precisão, nível de bolha, velocímetro e localizador de Qibla. Meça direção, inclinação, velocidade e rumo de oração com precisão real, sem instalar aplicativos e sem criar conta.',
      'Ao contrário da maioria das bússolas online, que apenas estimam sua orientação, o onlinecompass lê o magnetômetro, o acelerômetro e o GPS do aparelho diretamente pelas APIs padrão do navegador. Depois de carregado, funciona offline e mantém os dados dos sensores no seu aparelho.',
    ],
    missionH: 'Nossa missão',
    mission: [
      'Orientar-se deveria ser instantâneo e gratuito. Criamos o onlinecompass porque uma bússola, um nível ou um velocímetro nunca estava por perto — e as alternativas online eram imprecisas, cheias de anúncios ou exigiam downloads desnecessários. O onlinecompass é rápido, privado e preciso desde o início.',
    ],
    featuresH: 'Principais recursos',
    features: [
      'Direção de bússola ao vivo para achar norte, sul, leste e oeste',
      'Nível de bolha: horizontal, vertical e circular',
      'Velocímetro: velocidade por GPS, máxima, média, altitude e tempo de viagem',
      'Localizador de Qibla: direção da oração de qualquer local',
      'Quatro métodos de calibração de precisão para qualquer aparelho',
      'Réguas e ferramentas em qualquer borda da tela, modo tela cheia',
      'Modo escuro que respeita a preferência do sistema',
      'Funciona em qualquer navegador moderno — sem download e sem cadastro',
    ],
    featuresCompass: [
      "Direção de bússola ao vivo para achar norte, sul, leste e oeste",
      "Leitura precisa do rumo em graus",
      "Quatro métodos de calibração de precisão para qualquer aparelho",
      "Réguas e ferramentas em qualquer borda da tela, modo tela cheia",
      "Modo escuro que respeita a preferência do sistema",
      "Funciona em qualquer navegador moderno — sem download e sem cadastro",
    ],
    privacyH: 'Privacidade em primeiro lugar',
    privacy:
      'Os dados dos seus sensores ficam no seu aparelho. Não coletamos, armazenamos nem transmitimos seu rumo, localização ou orientação. Suas configurações de calibração ficam salvas localmente no seu aparelho.',
    contactH: 'Contato',
    contact: 'Tem uma dúvida, encontrou um erro ou quer sugerir um recurso? Vamos adorar ler sua mensagem.',
    privacyPre: "Veja nossa ",
    privacyLink: "Política de Privacidade",
    privacyPost: " para saber mais.",
    contactCta: "Fale com a gente aqui.",
  },
  blog: {
    title: "Blog da bússola online",
    desc: "Guias e dicas para ler a direção com a bússola online: como ler o mostrador, encontrar o norte sem ferramentas e corrigir um rumo que parece errado.",
    intro: "Guias e dicas para se orientar com o onlinecompass.",
    posts: [
      {
        href: "/onlinecompass/blog/how-to-find-north-without-a-compass/",
        title: "Como encontrar o norte sem bússola (e com o celular)",
        desc: "Encontre o norte em segundos com uma bússola online ou sem nenhuma ferramenta. Configuração dos sensores passo a passo, leituras em graus e conferência pelo sol ou pelas sombras.",
      },
      {
        href: "/onlinecompass/blog/how-to-read-a-compass-dial/",
        title: "Como ler o limbo de uma bússola: graus, pontos cardeais e rumos",
        desc: "Leia corretamente qualquer limbo de bússola. Pontos cardeais, graus, rumos e declinação, com exemplos resolvidos e correções dos erros mais comuns.",
      },
      {
        href: "/onlinecompass/blog/how-to-use-an-online-compass/",
        title: "Como usar uma bússola online (passo a passo, com exemplos)",
        desc: "Guia prático para medir a direção com o celular. Calibre, leia N/S/L/O e veja exemplos reais.",
      },
    ],
  },  contact: {
    emailH: "E-mail",
    sendH: "Enviar mensagem",
    intro: 'Somos uma equipe pequena e lemos todas as mensagens. Se você encontrou um erro, tem um pedido de recurso ou só quer dizer olá, use o formulário abaixo.',
    email: 'Fale com a gente em {email}. Normalmente respondemos em poucos dias úteis.',
  },
  toolPhrase: { compass: "como bússola", level: "como nível de bolha", speed: "como velocímetro", qibla: "como localizador de Qibla" },
  privacy: {
    sections: [
      {
        h: "Visão geral",
        paras: [
          "O onlinecompass (“nós”, “o serviço”) está comprometido com a proteção da sua privacidade. Esta política explica quais informações coletamos, como usamos e quais são seus direitos. Em resumo: coletamos quase nada e não vendemos nem compartilhamos seus dados.",
        ],
      },
      {
        h: "1. Informações que coletamos",
        paras: [
          "**Não é preciso criar conta nem fornecer dados pessoais para usar o onlinecompass.**",
          "A bússola, o nível, o velocímetro e o localizador de Qibla funcionam inteiramente no navegador. Os dados de calibração (leituras dos sensores, método escolhido, preferência de tema) ficam apenas no localStorage do navegador e nunca são enviados aos nossos servidores.",
          "Podemos coletar os seguintes dados agregados e não pessoais por meio de registros de servidor e análise padrão:",
        ],
        listAt: 2,
        list: [
          "Páginas visitadas e duração aproximada da sessão",
          "Tipo de navegador e sistema operacional (agregados)",
          "Site ou mecanismo de busca de origem",
          "Região geográfica no nível do país (não a localização exata)",
        ],
      },
      {
        h: "2. Cookies",
        paras: [
          "O onlinecompass não usa cookies de publicidade. Usamos um serviço de análise de terceiros para contar visitas, com anonimização de IP ativada e sem recursos de publicidade ou rastreamento entre sites; esse serviço define seus próprios cookies de análise. Também usamos localStorage (não cookies) para lembrar sua calibração e tema entre visitas, e esses dados nunca saem do seu aparelho.",
          "Você pode apagar esses dados a qualquer momento limpando os dados do site onlinecompass no navegador.",
        ],
      },
      {
        h: "3. Serviços de terceiros",
        paras: [
          "Carregamos a fonte Geist de uma rede de distribuição de fontes de terceiros. Ao baixar as fontes, esse provedor pode registrar seu endereço IP como parte da entrega padrão. Consulte a política de privacidade dele para detalhes.",
          "Não incorporamos widgets de redes sociais, redes de publicidade ou rastreadores publicitários. O único script de terceiros na página é a tag de análise descrita acima.",
        ],
      },
      {
        h: "4. Retenção de dados",
        paras: [
          "Não armazenamos dados pessoais nos nossos servidores. Os registros de acesso, se mantidos, ficam por no máximo 90 dias e servem apenas para diagnosticar problemas técnicos.",
        ],
      },
      {
        h: "5. Privacidade de crianças",
        paras: [
          "O onlinecompass é uma ferramenta de uso geral adequada a todas as idades. Não coletamos intencionalmente dados pessoais de crianças menores de 13 anos. Como não coletamos dados pessoais de nenhum usuário, o serviço atende à COPPA por concepção.",
        ],
      },
      {
        h: "6. Seus direitos",
        paras: [
          "Como não coletamos dados pessoais identificáveis, normalmente não há nada para recuperar, corrigir ou excluir em seu nome. Se tiver dúvidas, {contact} e responderemos rapidamente.",
          "Se você estiver no Espaço Econômico Europeu, tem direito de acessar, corrigir ou excluir os dados pessoais que mantemos e de reclamar junto à autoridade de supervisão local.",
        ],
      },
      {
        h: "7. Mudanças nesta política",
        paras: [
          "Podemos atualizar esta Política de Privacidade. A data de “Última atualização” no topo reflete a revisão mais recente. Continuar usando o serviço após as mudanças significa aceitar a política revisada.",
        ],
      },
      {
        h: "8. Contato",
        paras: [
          "Dúvidas sobre esta Política de Privacidade? {contactCta}",
        ],
      },
    ],
  },
  terms: {
    intro: "Leia estes Termos e Condições (“Termos”) com atenção antes de usar o onlinecompass (“o Serviço”). Ao acessar ou usar o Serviço, você concorda em ficar vinculado a estes Termos.",
    sections: [
      {
        h: "1. Uso do serviço",
        paras: [
          "O onlinecompass é fornecido gratuitamente para uso pessoal e profissional. Você pode usá-lo para encontrar direção, verificar superfícies niveladas, medir velocidade e encontrar a Qibla. Não é necessário cadastro nem pagamento.",
          "Você concorda em não:",
        ],
        listAt: 1,
        list: [
          "Usar o Serviço para qualquer finalidade ilícita",
          "Tentar fazer engenharia reversa, raspar ou copiar o Serviço para redistribuição sem permissão",
          "Interferir ou interromper os servidores ou redes que hospedam o Serviço",
        ],
      },
      {
        h: "2. Aviso sobre precisão",
        paras: [
          "O onlinecompass foi projetado para dar leituras precisas quando corretamente calibrado. A precisão depende, porém, de:",
          "**Não use o onlinecompass para medições críticas de segurança** — como aplicações médicas, de engenharia ou de construção em que erros possam causar danos. Para trabalhos de precisão, use instrumentos físicos calibrados.",
        ],
        listAt: 0,
        list: [
          "Calibração correta pelo usuário",
          "As características físicas do seu aparelho",
          "O nível de zoom do navegador (as medições assumem 100% de zoom)",
          "As configurações de escala de tela do seu sistema operacional",
        ],
      },
      {
        h: "3. Propriedade intelectual",
        paras: [
          "O design, o código, os textos e os recursos visuais do onlinecompass são nossos e protegidos por direitos autorais. Não é permitido reproduzir ou redistribuir sem autorização escrita prévia. A funcionalidade de medição — usar sensores {tool} — não é reivindicada como exclusiva; apenas nossa implementação concreta é protegida.",
        ],
      },
      {
        h: "4. Isenção de garantias",
        paras: [
          "O serviço é fornecido “como está” e “conforme disponibilidade”, sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que seja ininterrupto, livre de erros ou totalmente exato em todos os aparelhos e telas.",
        ],
      },
      {
        h: "5. Limitação de responsabilidade",
        paras: [
          "Na máxima extensão permitida por lei, não seremos responsáveis por danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou da impossibilidade de usar o serviço, mesmo que tenhamos sido avisados dessa possibilidade.",
        ],
      },
      {
        h: "6. Links de terceiros",
        paras: [
          "O serviço pode conter links para sites de terceiros. Eles são oferecidos por conveniência. Não controlamos esse conteúdo e não assumimos responsabilidade por ele.",
        ],
      },
      {
        h: "7. Mudanças nestes termos",
        paras: [
          "Reservamo-nos o direito de modificar estes Termos a qualquer momento. A data de “Última atualização” reflete a revisão mais recente. Continuar usando o serviço após as mudanças significa aceitar os Termos revisados.",
        ],
      },
      {
        h: "8. Contato",
        paras: [
          "Dúvidas sobre estes Termos? {contactCta}",
        ],
      },
    ],
  },
};

const ko: SupportCopy = {
  updated: '최종 수정: 2026년 10월',
  back: "나침반으로 돌아가기",
  contactLink: "문의해 주시면",
  about: {
    whatH: 'onlinecompass란?',
    what: [
      'onlinecompass는 스마트폰, 태블릿, 노트북을 정밀 나침반, 수평계, 속도계, 키블라 안내로 바꿔 주는 무료 브라우저 기반 탐색 도구입니다. 방향, 기울기, 속도, 예배 방향을 실제와 같은 정확도로 측정하며, 앱 설치도 계정도 필요 없습니다.',
      '방향을 추측만 하는 대부분의 온라인 나침반과 달리, onlinecompass는 기기의 자기 센서, 가속도 센서, GPS를 브라우저 표준 API로 직접 읽습니다. 한 번 불러오면 오프라인에서도 동작하며 센서 데이터는 기기 안에 남습니다.',
    ],
    missionH: '우리의 목표',
    mission: [
      '방향을 아는 일은 즉시, 무료여야 합니다. 나침반도 수평계도 속도계도 손 닿는 곳에 없고, 온라인 대안은 부정확하거나 광고로 가득하거나 불필요한 설치를 요구했기 때문에 onlinecompass를 만들었습니다. 빠르고, 개인정보를 지키고, 처음부터 정확한 것이 원칙입니다.',
    ],
    featuresH: '주요 기능',
    features: [
      '동서남북을 찾는 실시간 방위 표시',
      '수평계: 수평, 수직, 원형 기포',
      '속도계: GPS 속도, 최고 속도, 평균, 고도, 주행 시간',
      '키블라 안내: 어느 위치에서든 예배 방향',
      '모든 기기를 위한 네 가지 정밀 보정 방법',
      '화면 가장자리 자 도구, 전체 화면 모드',
      '시스템 설정을 따르는 다크 모드',
      '최신 브라우저에서 동작 — 다운로드도 가입도 없음',
    ],
    featuresCompass: [
      "동서남북을 찾는 실시간 방위 표시",
      "도 단위의 정확한 방위 읽기",
      "모든 기기를 위한 네 가지 정밀 보정 방법",
      "화면 가장자리 자 도구, 전체 화면 모드",
      "시스템 설정을 따르는 다크 모드",
      "최신 브라우저에서 동작 — 다운로드도 가입도 없음",
    ],
    privacyH: '개인정보 우선',
    privacy:
      '센서 데이터는 기기에 남습니다. 방위, 위치, 기울기를 수집·저장·전송하지 않습니다. 보정 설정은 사용자의 기기에만 저장됩니다.',
    contactH: '문의',
    contact: '질문이 있거나 오류를 발견했거나 기능을 제안하고 싶다면 언제든 알려 주세요.',
    privacyPre: "자세한 내용은 ",
    privacyLink: "개인정보 처리방침",
    privacyPost: "을 확인하세요.",
    contactCta: "여기로 문의하세요.",
  },
  blog: {
    title: "온라인 나침반 블로그 — 사용법 가이드",
    desc: "온라인 나침반으로 방위를 읽는 방법과 팁. 북쪽 찾기, 다이얼 읽기, 각도 활용법을 정리했습니다.",
    intro: "onlinecompass로 방향을 다루는 방법과 팁.",
    posts: [
      {
        href: "/onlinecompass/blog/how-to-find-north-without-a-compass/",
        title: "나침반 없이 북쪽 찾는 방법 (스마트폰 사용법 포함)",
        desc: "온라인 나침반으로도, 아무 도구 없이도 몇 초 만에 북쪽을 찾습니다. 센서 설정 단계, 각도 읽기, 태양과 그림자로 결과 확인하기.",
      },
      {
        href: "/onlinecompass/blog/how-to-read-a-compass-dial/",
        title: "나침반 다이얼 읽는 법: 각도, 방위, 방위각",
        desc: "어떤 나침반 다이얼도 정확히 읽는 방법. 기본 방위, 각도, 방위각과 편각을 실제 예시와 자주 틀리는 부분의 해결법과 함께 설명합니다.",
      },
      {
        href: "/onlinecompass/blog/how-to-use-an-online-compass/",
        title: "온라인 나침반 사용법 (단계별, 실제 예시 포함)",
        desc: "스마트폰으로 방향을 재는 실전 안내. 보정부터 동서남북 읽기, 실제 예시까지.",
      },
    ],
  },  contact: {
    emailH: "이메일",
    sendH: "메시지 보내기",
    intro: '작은 팀이지만 보내 주신 모든 메시지를 읽습니다. 오류 제보, 기능 요청, 간단한 인사 모두 아래 양식으로 보내 주세요.',
    email: '{email} 으로 연락 주세요. 보통 영업일 기준 며칠 안에 답변드립니다.',
  },
  toolPhrase: { compass: "나침반으로", level: "수평계로", speed: "속도계로", qibla: "키블라 파인더로" },
  privacy: {
    sections: [
      {
        h: "개요",
        paras: [
          "onlinecompass(이하 “당사”, “서비스”)는 이용자의 개인정보를 보호합니다. 본 방침은 어떤 정보를 수집하고 어떻게 이용하며 어떤 권리가 있는지 설명합니다. 요약하면 거의 아무것도 수집하지 않으며 데이터를 판매하거나 공유하지 않습니다.",
        ],
      },
      {
        h: "1. 수집하는 정보",
        paras: [
          "**onlinecompass를 사용하는 데 계정 생성이나 개인정보 제공은 필요하지 않습니다.**",
          "나침반, 수평계, 속도계, 키블라 안내는 모두 브라우저 안에서 동작합니다. 보정 데이터(센서 값, 선택한 방식, 테마 설정)는 브라우저 localStorage에만 저장되며 당사 서버로 전송되지 않습니다.",
          "표준 서버 로그와 분석을 통해 다음과 같은 비개인 집계 데이터를 수집할 수 있습니다.",
        ],
        listAt: 2,
        list: [
          "방문한 페이지와 대략적인 세션 시간",
          "브라우저 종류와 운영체제(집계)",
          "유입 웹사이트 또는 검색엔진",
          "국가 단위 지역(정확한 위치 아님)",
        ],
      },
      {
        h: "2. 쿠키",
        paras: [
          "onlinecompass는 광고 쿠키를 사용하지 않습니다. 페이지 조회수를 세기 위해 제3자 분석 서비스 하나를 사용하며, IP 익명화를 켜고 광고 및 교차 사이트 추적 기능은 사용하지 않습니다. 이 서비스는 자체 분석 쿠키를 설정합니다. 보정과 테마 기억에는 쿠키가 아닌 localStorage를 사용하며 해당 데이터는 기기를 벗어나지 않습니다.",
          "브라우저에서 onlinecompass의 사이트 데이터를 삭제하면 언제든 지울 수 있습니다.",
        ],
      },
      {
        h: "3. 제3자 서비스",
        paras: [
          "Geist 서체를 제3자 폰트 배포망에서 불러옵니다. 폰트를 내려받을 때 해당 제공자가 일반적인 배포 과정에서 IP 주소를 기록할 수 있습니다. 자세한 내용은 해당 제공자의 개인정보 방침을 확인하세요.",
          "소셜 미디어 위젯, 광고 네트워크, 광고 추적기는 넣지 않았습니다. 페이지의 유일한 제3자 스크립트는 위에 설명한 분석 태그입니다.",
        ],
      },
      {
        h: "4. 데이터 보관",
        paras: [
          "당사 서버에 개인정보를 저장하지 않습니다. 접속 로그를 보관하는 경우에도 최대 90일을 넘지 않으며 기술 문제 진단에만 사용합니다.",
        ],
      },
      {
        h: "5. 아동의 개인정보",
        paras: [
          "onlinecompass는 모든 연령이 사용할 수 있는 범용 도구입니다. 만 13세 미만 아동의 개인정보를 알면서 수집하지 않습니다. 어떤 이용자에게서도 개인정보를 수집하지 않으므로 본 서비스는 설계상 COPPA를 준수합니다.",
        ],
      },
      {
        h: "6. 이용자의 권리",
        paras: [
          "식별 가능한 개인정보를 수집하지 않으므로 일반적으로 열람·정정·삭제할 정보가 없습니다. 우려되는 점이 있으면 {contact} 신속히 답변드립니다.",
          "유럽경제지역에 거주하는 경우 당사가 보유한 개인정보에 접근하고 정정하거나 삭제할 권리, 그리고 감독 기관에 민원을 제기할 권리가 있습니다.",
        ],
      },
      {
        h: "7. 방침의 변경",
        paras: [
          "본 개인정보 처리방침은 수시로 갱신될 수 있습니다. 페이지 상단의 “최종 수정” 날짜가 가장 최근 개정을 나타냅니다. 변경 후에도 서비스를 계속 사용하면 개정된 방침에 동의한 것으로 봅니다.",
        ],
      },
      {
        h: "8. 문의",
        paras: [
          "본 방침에 대해 궁금한 점이 있으면 {contactCta}",
        ],
      },
    ],
  },
  terms: {
    intro: "onlinecompass(이하 “서비스”)를 사용하기 전에 본 이용약관(이하 “약관”)을 주의 깊게 읽어 주세요. 서비스에 접속하거나 사용하면 본 약관에 동의한 것으로 간주됩니다.",
    sections: [
      {
        h: "1. 서비스 이용",
        paras: [
          "onlinecompass는 개인적·업무적 용도로 무료 제공됩니다. 방향 확인, 수평 확인, 속도 측정, 키블라 방향 확인에 사용할 수 있습니다. 가입이나 결제는 필요하지 않습니다.",
          "다음 행위를 하지 않기로 동의합니다.",
        ],
        listAt: 1,
        list: [
          "불법적인 목적으로 서비스를 이용하는 행위",
          "허가 없이 서비스를 역설계하거나 자동 수집·복제하여 재배포하는 행위",
          "서비스를 제공하는 서버나 네트워크를 방해하거나 중단시키는 행위",
        ],
      },
      {
        h: "2. 정확도 고지",
        paras: [
          "onlinecompass는 올바르게 보정되었을 때 정확한 값을 제공하도록 설계되었습니다. 다만 정확도는 다음 요소에 따라 달라집니다.",
          "**측정 오차가 위해로 이어질 수 있는 의료, 공학, 건설 등 안전이 중요한 용도로는 사용하지 마세요.** 정밀 작업에는 교정된 측정기를 사용하십시오.",
        ],
        listAt: 0,
        list: [
          "사용자에 의한 올바른 보정",
          "사용 중인 기기의 물리적 특성",
          "브라우저 확대/축소 수준(측정은 100% 확대를 기준으로 함)",
          "운영체제의 화면 배율 설정",
        ],
      },
      {
        h: "3. 지적 재산권",
        paras: [
          "onlinecompass의 디자인, 코드, 문구, 이미지는 당사 소유이며 저작권법으로 보호됩니다. 사전 서면 허가 없이 복제하거나 재배포할 수 없습니다. 센서를 {tool} 쓰는 기능 자체를 독점 주장하지 않으며, 당사의 구체적 구현만 보호됩니다.",
        ],
      },
      {
        h: "4. 보증의 부인",
        paras: [
          "본 서비스는 “있는 그대로” 그리고 “제공 가능한 범위에서” 제공되며 명시적이든 묵시적이든 어떠한 보증도 하지 않습니다. 모든 기기와 화면에서 중단 없이, 오류 없이, 완전히 정확하게 동작한다고 보증하지 않습니다.",
        ],
      },
      {
        h: "5. 책임의 제한",
        paras: [
          "법이 허용하는 최대 범위에서, 서비스 이용 또는 이용 불가로 인한 간접적, 우발적, 특별, 결과적, 징벌적 손해에 대해 당사는 책임지지 않습니다.",
        ],
      },
      {
        h: "6. 제3자 링크",
        paras: [
          "본 서비스에는 제3자 웹사이트 링크가 포함될 수 있습니다. 이러한 링크는 편의를 위한 것이며, 제3자 콘텐츠를 통제하지 않고 이에 대한 책임을 지지 않습니다.",
        ],
      },
      {
        h: "7. 약관의 변경",
        paras: [
          "당사는 언제든 본 약관을 변경할 권리를 가집니다. 페이지 상단의 “최종 수정” 날짜가 최신 개정을 나타냅니다. 변경 후에도 서비스를 계속 사용하면 개정 약관에 동의한 것으로 봅니다.",
        ],
      },
      {
        h: "8. 문의",
        paras: [
          "본 약관에 대해 궁금한 점이 있으면 {contactCta}",
        ],
      },
    ],
  },
};

const it: SupportCopy = {
  updated: 'Ultimo aggiornamento: ottobre 2026',
  back: "Torna alla bussola",
  contactLink: "scrivici",
  about: {
    whatH: 'Che cos’è onlinecompass?',
    what: [
      'onlinecompass è un kit di navigazione gratuito e basato sul browser che trasforma qualsiasi telefono, tablet o portatile in una bussola di precisione, una livella, un tachimetro e un cercatore di Qibla. Misura direzione, inclinazione, velocità e direzione della preghiera con precisione reale, senza installare app e senza account.',
      'A differenza della maggior parte delle bussole online, che stimano l’orientamento, onlinecompass legge magnetometro, accelerometro e GPS del dispositivo direttamente tramite le API standard del browser. Una volta caricato funziona offline e tiene i dati dei sensori sul tuo dispositivo.',
    ],
    missionH: 'La nostra missione',
    mission: [
      'Orientarsi dovrebbe essere immediato e gratuito. Abbiamo costruito onlinecompass perché una bussola, una livella o un tachimetro non erano mai a portata di mano, e le alternative online erano imprecise, piene di pubblicità o richiedevano download inutili. onlinecompass è veloce, riservato e preciso fin dall’inizio.',
    ],
    featuresH: 'Funzioni principali',
    features: [
      'Direzione della bussola in tempo reale per trovare nord, sud, est e ovest',
      'Livella: orizzontale, verticale e bolla circolare',
      'Tachimetro: velocità GPS, massima, media, altitudine e durata del viaggio',
      'Cercatore di Qibla: direzione della preghiera da qualsiasi luogo',
      'Quattro metodi di calibrazione di precisione per ogni dispositivo',
      'Righelli e strumenti su ogni bordo dello schermo, modalità a schermo intero',
      'Modalità scura che rispetta le impostazioni di sistema',
      'Funziona su ogni browser moderno — senza download e senza registrazione',
    ],
    featuresCompass: [
      "Direzione della bussola in tempo reale per trovare nord, sud, est e ovest",
      "Lettura precisa dell’azimut in gradi",
      "Quattro metodi di calibrazione di precisione per ogni dispositivo",
      "Righelli e strumenti su ogni bordo dello schermo, modalità a schermo intero",
      "Modalità scura che rispetta le impostazioni di sistema",
      "Funziona su ogni browser moderno — senza download e senza registrazione",
    ],
    privacyH: 'Prima la privacy',
    privacy:
      'I dati dei sensori restano sul tuo dispositivo. Non raccogliamo, memorizziamo né trasmettiamo la tua direzione, posizione o orientamento. Le impostazioni di calibrazione sono salvate localmente sul tuo dispositivo.',
    contactH: 'Contatti',
    contact: 'Hai una domanda, hai trovato un bug o vuoi proporre una funzione? Saremo felici di leggerti.',
    privacyPre: "Leggi la nostra ",
    privacyLink: "informativa sulla privacy",
    privacyPost: " per tutti i dettagli.",
    contactCta: "Scrivici qui.",
  },
  blog: {
    title: "Blog della bussola online",
    desc: "Guide e consigli per leggere la direzione con la bussola online: come leggere il quadrante, trovare il nord senza strumenti e correggere una direzione che sembra sbagliata.",
    intro: "Guide e consigli per orientarsi con onlinecompass.",
    posts: [
      {
        href: "/onlinecompass/blog/how-to-find-north-without-a-compass/",
        title: "Come trovare il nord senza bussola (e con il telefono)",
        desc: "Trova il nord in pochi secondi con una bussola online o senza alcuno strumento. Impostazione dei sensori passo dopo passo, letture in gradi e verifiche con il sole o le ombre.",
      },
      {
        href: "/onlinecompass/blog/how-to-read-a-compass-dial/",
        title: "Come leggere il quadrante di una bussola: gradi, punti cardinali, azimut",
        desc: "Leggi correttamente qualsiasi quadrante. Punti cardinali, gradi, azimut e declinazione, con esempi svolti e correzioni degli errori più frequenti.",
      },
      {
        href: "/onlinecompass/blog/how-to-use-an-online-compass/",
        title: "Come usare una bussola online (passo dopo passo, con esempi)",
        desc: "Guida pratica per misurare la direzione con il telefono: calibra, leggi N/S/E/O e segui esempi reali.",
      },
    ],
  },  contact: {
    emailH: "Email",
    sendH: "Invia un messaggio",
    intro: 'Siamo una squadra piccola e leggiamo ogni messaggio. Se hai trovato un bug, hai una richiesta o vuoi solo salutarci, scrivici con il modulo qui sotto.',
    email: 'Scrivici a {email}. Di solito rispondiamo entro pochi giorni lavorativi.',
  },
  toolPhrase: { compass: "come bussola", level: "come livella a bolla", speed: "come tachimetro", qibla: "come cercatore di Qibla" },
  privacy: {
    sections: [
      {
        h: "Panoramica",
        paras: [
          "onlinecompass (“noi”, “il servizio”) si impegna a proteggere la tua privacy. Questa informativa spiega quali informazioni raccogliamo, come le usiamo e quali sono i tuoi diritti. In breve: raccogliamo quasi nulla e non vendiamo né condividiamo i tuoi dati.",
        ],
      },
      {
        h: "1. Informazioni raccolte",
        paras: [
          "**Non serve creare un account né fornire dati personali per usare onlinecompass.**",
          "Bussola, livella, tachimetro e cercatore di Qibla funzionano interamente nel browser. I dati di calibrazione (letture dei sensori, metodo scelto, preferenza del tema) sono salvati solo nel localStorage del browser e non vengono mai inviati ai nostri server.",
          "Possiamo raccogliere i seguenti dati aggregati e non personali tramite log del server e analisi standard:",
        ],
        listAt: 2,
        list: [
          "Pagine visitate e durata approssimativa della sessione",
          "Tipo di browser e sistema operativo (aggregati)",
          "Sito web o motore di ricerca di provenienza",
          "Regione geografica a livello di paese (non la posizione esatta)",
        ],
      },
      {
        h: "2. Cookie",
        paras: [
          "onlinecompass non usa cookie pubblicitari. Usiamo un servizio di analisi di terze parti per contare le visite, con anonimizzazione dell’IP attiva e senza funzioni pubblicitarie o di tracciamento tra siti; quel servizio imposta i propri cookie analitici. Usiamo inoltre il localStorage (non i cookie) per ricordare calibrazione e tema tra una visita e l’altra, e quei dati non lasciano mai il dispositivo.",
          "Puoi cancellare questi dati in qualsiasi momento eliminando i dati del sito onlinecompass dal browser.",
        ],
      },
      {
        h: "3. Servizi di terze parti",
        paras: [
          "Carichiamo il carattere Geist da una rete di distribuzione di font di terze parti. Al download, quel fornitore può registrare il tuo indirizzo IP come parte della consegna standard. Consulta la sua informativa privacy per i dettagli.",
          "Non incorporiamo widget social, reti pubblicitarie o tracker pubblicitari. L’unico script di terze parti nella pagina è il tag di analisi descritto sopra.",
        ],
      },
      {
        h: "4. Conservazione dei dati",
        paras: [
          "Non memorizziamo dati personali sui nostri server. I log di accesso, se conservati, restano per non più di 90 giorni e servono solo a diagnosticare problemi tecnici.",
        ],
      },
      {
        h: "5. Privacy dei minori",
        paras: [
          "onlinecompass è uno strumento generale adatto a tutte le età. Non raccogliamo consapevolmente dati personali di minori di 13 anni. Poiché non raccogliamo dati personali da alcun utente, il servizio rispetta il COPPA per progettazione.",
        ],
      },
      {
        h: "6. I tuoi diritti",
        paras: [
          "Poiché non raccogliamo dati personali identificabili, di norma non c’è nulla da recuperare, correggere o cancellare per tuo conto. Se hai dubbi, {contact} e risponderemo rapidamente.",
          "Se ti trovi nello Spazio economico europeo, hai diritto di accedere, rettificare o cancellare i dati personali che deteniamo e di presentare reclamo all’autorità di controllo locale.",
        ],
      },
      {
        h: "7. Modifiche a questa informativa",
        paras: [
          "Possiamo aggiornare questa informativa privacy. La data “Ultimo aggiornamento” in alto indica la revisione più recente. Continuare a usare il servizio dopo le modifiche equivale ad accettarle.",
        ],
      },
      {
        h: "8. Contatti",
        paras: [
          "Domande su questa informativa privacy? {contactCta}",
        ],
      },
    ],
  },
  terms: {
    intro: "Leggi con attenzione questi Termini e condizioni (“Termini”) prima di usare onlinecompass (“il Servizio”). Accedendo o usando il Servizio accetti di essere vincolato da questi Termini.",
    sections: [
      {
        h: "1. Uso del servizio",
        paras: [
          "onlinecompass è fornito gratuitamente per uso personale e professionale. Puoi usarlo per trovare la direzione, verificare superfici, misurare la velocità e trovare la Qibla. Non sono richiesti registrazione né pagamento.",
          "Accetti di non:",
        ],
        listAt: 1,
        list: [
          "Usare il Servizio per fini illeciti",
          "Tentare di decompilare, estrarre automaticamente o copiare il Servizio per ridistribuirlo senza autorizzazione",
          "Interferire con i server o le reti che ospitano il Servizio o interromperne il funzionamento",
        ],
      },
      {
        h: "2. Avviso sulla precisione",
        paras: [
          "onlinecompass è progettato per fornire letture accurate quando è correttamente calibrato. La precisione dipende però da:",
          "**Non usare onlinecompass per misurazioni critiche per la sicurezza** — applicazioni mediche, ingegneristiche o edili in cui un errore possa causare danni. Per lavori di precisione usa strumenti fisici calibrati.",
        ],
        listAt: 0,
        list: [
          "Calibrazione corretta da parte dell’utente",
          "Le caratteristiche fisiche del tuo dispositivo",
          "Il livello di zoom del browser (le misure presuppongono uno zoom al 100%)",
          "Le impostazioni di ridimensionamento dello schermo del sistema operativo",
        ],
      },
      {
        h: "3. Proprietà intellettuale",
        paras: [
          "Design, codice, testi e risorse visive di onlinecompass sono nostri e protetti dal diritto d’autore. Non puoi riprodurli o ridistribuirli senza autorizzazione scritta preventiva. La funzionalità di misura — usare i sensori {tool} — non è rivendicata come esclusiva; è protetta solo la nostra implementazione concreta.",
        ],
      },
      {
        h: "4. Esclusione di garanzie",
        paras: [
          "Il servizio è fornito “così com’è” e “come disponibile”, senza garanzie di alcun tipo, esplicite o implicite. Non garantiamo che sia ininterrotto, privo di errori o del tutto accurato su ogni dispositivo e schermo.",
        ],
      },
      {
        h: "5. Limitazione di responsabilità",
        paras: [
          "Nella misura massima consentita dalla legge, non saremo responsabili per danni indiretti, incidentali, speciali, consequenziali o punitivi derivanti dall’uso o dall’impossibilità di usare il servizio, anche se avvisati di tale possibilità.",
        ],
      },
      {
        h: "6. Link a terze parti",
        paras: [
          "Il servizio può contenere link a siti di terze parti, forniti solo per comodità. Non controlliamo tali contenuti e non ne assumiamo alcuna responsabilità.",
        ],
      },
      {
        h: "7. Modifiche a questi termini",
        paras: [
          "Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento. La data “Ultimo aggiornamento” indica la revisione più recente. Continuare a usare il servizio dopo le modifiche equivale ad accettarle.",
        ],
      },
      {
        h: "8. Contatti",
        paras: [
          "Domande su questi Termini? {contactCta}",
        ],
      },
    ],
  },
};

const nl: SupportCopy = {
  updated: "Laatst bijgewerkt: oktober 2026",
  back: "Terug naar Kompas",
  contactLink: "neem contact op",
  about: {
    whatH: "Wat is onlinecompass?",
    what: [
      "onlinecompass is een gratis navigatiegereedschap in de browser dat elke telefoon, tablet of laptop omzet in een precisiekompas, waterpas, snelheidsmeter en qibla-zoeker. Meet richting, helling, snelheid en gebedsrichting met echte nauwkeurigheid, zonder app te installeren en zonder account.",
      "Anders dan de meeste online kompassen, die je oriëntatie gokken, leest onlinecompass je magnetometer, versnellingsmeter en GPS rechtstreeks via standaard browser-API's. Zodra de pagina geladen is, werkt alles offline en blijven je sensorgegevens op je toestel.",
    ],
    missionH: "Onze missie",
    mission: [
      "Navigeren moet direct en gratis zijn. We bouwden onlinecompass omdat we steeds een kompas, waterpas of snelheidsmeter zochten die niet binnen handbereik was — en de online alternatieven waren onnauwkeurig, vol advertenties of vroegen onnodige downloads. onlinecompass is snel, privé en standaard nauwkeurig.",
    ],
    featuresH: "Belangrijkste functies",
    features: [
      "Live kompasrichting om noord, zuid, oost en west te vinden",
      "Waterpas: horizontaal, verticaal en rondom-niveau",
      "Snelheidsmeter: GPS-snelheid, top, gemiddelde, hoogte en reistijd",
      "Qibla-zoeker: gebedsrichting vanaf elke locatie",
      "Vier precieze kalibratiemethoden voor elk toestel",
      "Linialen en tools aan elke schermrand, volledig scherm",
      "Donkere modus die je systeemvoorkeur volgt",
      "Werkt in elke moderne browser — geen download, geen account",
    ],
    featuresCompass: [
      "Live kompasrichting om noord, zuid, oost en west te vinden",
      "Nauwkeurige peiling in graden",
      "Vier precieze kalibratiemethoden voor elk toestel",
      "Linialen en tools aan elke schermrand, volledig scherm",
      "Donkere modus die je systeemvoorkeur volgt",
      "Werkt in elke moderne browser — geen download, geen account",
    ],
    privacyH: "Privacy voorop",
    privacy:
      "Je sensorgegevens blijven op je toestel. We verzamelen, bewaren of versturen je koers, locatie of oriëntatie niet. Je kalibratie-instellingen worden lokaal op je eigen toestel opgeslagen.",
    contactH: "Contact",
    contact: "Heb je een vraag, heb je een bug gevonden of wil je een functie voorstellen? We horen het graag.",
    privacyPre: "Lees ons ",
    privacyLink: "Privacybeleid",
    privacyPost: " voor alle details.",
    contactCta: "Neem hier contact op.",
  },
  blog: {
    title: "Online Kompas Blog",
    desc: "Gidsen en tips voor het lezen van richting met het online kompas — hoe je een kompas afleest, noord vindt zonder hulpmiddelen en een koers herstelt die verkeerd lijkt.",
    intro: "Gidsen en tips voor navigeren met onlinecompass.",
    posts: [
      {
        href: "/onlinecompass/blog/online-compass-without-an-app/",
        title: "Online kompas zonder app: je telefoon als kompas",
        desc: "Gebruik je telefoon als kompas in de browser — geen app, geen installatie. Wat de magnetometer leest, hoe je met één tik kalibreert en wanneer een browserkompas genoeg is.",
      },
      {
        href: "/onlinecompass/blog/how-to-find-north-without-a-compass/",
        title: "Hoe je noord vindt zonder kompas (en met je telefoon)",
        desc: "Vind noord in seconden met een online kompas of zonder enig hulpmiddel. Stapsgewijze sensorinstelling, gradenwaarden en controle met zon of schaduw.",
      },
      {
        href: "/onlinecompass/blog/how-to-read-a-compass-dial/",
        title: "Een kompas aflezen: graden, windstreken en peilingen",
        desc: "Lees elk kompas correct af. Windstreken, graden, peilingen en declinatie, met uitgewerkte voorbeelden en oplossingen voor de meest gemaakte leesfouten.",
      },
      {
        href: "/onlinecompass/blog/how-to-use-an-online-compass/",
        title: "Een online kompas gebruiken (stap voor stap, met voorbeelden)",
        desc: "Een praktische gids voor het meten van richting met je telefoon. Kalibreer, lees N/Z/O/W en werk echte voorbeelden door.",
      },
    ],
  },  contact: {
    emailH: "E-mail",
    sendH: "Bericht sturen",
    intro:
      "We zijn een klein team en lezen elk bericht. Of je een bug hebt gevonden, een functie wenst of gewoon hallo wilt zeggen — gebruik het formulier hieronder.",
    email: "Bereik ons op {email}. We antwoorden meestal binnen een paar werkdagen.",
  },
  toolPhrase: { compass: "als kompas", level: "als waterpas", speed: "als snelheidsmeter", qibla: "als qibla-zoeker" },
  privacy: {
    sections: [
      {
        h: "Overzicht",
        paras: [
          "onlinecompass (“wij”, “ons”, “de dienst”) zet zich in voor het beschermen van je privacy. Dit beleid legt uit welke gegevens we verzamelen, hoe we ze gebruiken en wat je rechten zijn. De korte versie: we verzamelen bijna niets en we verkopen of delen je gegevens niet.",
        ],
      },
      {
        h: "1. Gegevens die we verzamelen",
        paras: [
          "**Je hoeft geen account aan te maken en geen persoonsgegevens te geven om onlinecompass te gebruiken.**",
          "Het kompas, de waterpas, de snelheidsmeter en de qibla-zoeker draaien volledig in je browser. Kalibratiegegevens (je sensormetingen, de gekozen kalibratiemethode, je themavoorkeur) worden alleen in de localStorage van je browser opgeslagen en nooit naar onze servers verstuurd.",
          "Via standaard serverlogs en statistieken kunnen we de volgende niet-persoonlijke, geaggregeerde gegevens verzamelen:",
        ],
        listAt: 2,
        list: [
          "Bezochte pagina's en geschatte sessieduur",
          "Browsertype en besturingssysteem (geaggregeerd)",
          "Verwijzende website of zoekmachine",
          "Geografische regio op landniveau (geen precieze locatie)",
        ],
      },
      {
        h: "2. Cookies",
        paras: [
          "onlinecompass gebruikt geen advertentiecookies. We gebruiken één externe analysedienst om paginaweergaven te tellen, met IP-anonimisering aan en zonder advertentie- of cross-site-trackingfuncties; die dienst plaatst zijn eigen analytische cookies. We gebruiken ook localStorage (geen cookies) om je kalibratie en themavoorkeur tussen bezoeken te bewaren, en die gegevens verlaten je toestel nooit.",
          "Je kunt deze gegevens op elk moment wissen door de sitegegevens van onlinecompass in je browser te wissen.",
        ],
      },
      {
        h: "3. Diensten van derden",
        paras: [
          "We laden het lettertype Geist van een extern netwerk voor lettertypelevering. Wanneer je browser deze lettertypen downloadt, kan die aanbieder je IP-adres loggen als onderdeel van de normale levering. Raadpleeg het privacybeleid van die aanbieder voor details.",
          "We plaatsen geen widgets van sociale media, advertentienetwerken of advertentietrackers. Het enige externe script op de pagina is de hierboven beschreven statistiektag.",
        ],
      },
      {
        h: "4. Bewaartermijn",
        paras: [
          "We bewaren geen persoonsgegevens op onze servers. Serverlogboeken worden, als ze worden bewaard, niet langer dan 90 dagen bewaard en alleen gebruikt om technische problemen te diagnosticeren.",
        ],
      },
      {
        h: "5. Privacy van kinderen",
        paras: [
          "onlinecompass is een algemeen hulpmiddel voor alle leeftijden. We verzamelen niet bewust persoonsgegevens van kinderen onder de 13 jaar. Omdat we van geen enkele gebruiker persoonsgegevens verzamelen, voldoet deze dienst door zijn opzet aan COPPA.",
        ],
      },
      {
        h: "6. Jouw rechten",
        paras: [
          "Omdat we geen identificeerbare persoonsgegevens verzamelen, valt er namens jou doorgaans niets op te vragen, te corrigeren of te verwijderen. Heb je bezwaren, {contact} dan en we reageren snel.",
          "Als je in de Europese Economische Ruimte bent, heb je het recht om persoonsgegevens die wij hebben in te zien, te laten corrigeren of te laten wissen, en om een klacht in te dienen bij je lokale toezichthoudende autoriteit.",
        ],
      },
      {
        h: "7. Wijzigingen in dit beleid",
        paras: [
          "We kunnen dit privacybeleid van tijd tot tijd bijwerken. De datum “Laatst bijgewerkt” bovenaan deze pagina geeft de meest recente versie aan. Voortgezet gebruik van de dienst na het plaatsen van wijzigingen geldt als aanvaarding van het herziene beleid.",
        ],
      },
      {
        h: "8. Contact",
        paras: [
          "Vragen over dit privacybeleid? {contactCta}",
        ],
      },
    ],
  },
  terms: {
    intro: "Lees deze Algemene voorwaarden (“Voorwaarden”) zorgvuldig voordat je onlinecompass (“de Dienst”) gebruikt. Door de Dienst te bezoeken of te gebruiken, ga je akkoord gebonden te zijn aan deze Voorwaarden.",
    sections: [
      {
        h: "1. Gebruik van de dienst",
        paras: [
          "onlinecompass wordt gratis aangeboden voor persoonlijk en professioneel gebruik. Je mag de Dienst gebruiken om kompasrichting te bepalen, oppervlakken waterpas te zetten, snelheid te meten en de qibla te vinden. Registratie of betaling is niet nodig.",
          "Je gaat ermee akkoord om niet:",
        ],
        listAt: 1,
        list: [
          "De Dienst voor onwettige doeleinden te gebruiken",
          "Te proberen de Dienst terug te ontwerpen, te scrapen of te kopiëren voor herdistributie zonder toestemming",
          "De servers of netwerken die de Dienst hosten te verstoren of te hinderen",
        ],
      },
      {
        h: "2. Disclaimer over nauwkeurigheid",
        paras: [
          "onlinecompass is ontworpen om nauwkeurige metingen te geven bij correcte kalibratie. De nauwkeurigheid hangt echter af van:",
          "**Vertrouw niet op onlinecompass voor veiligheidskritische metingen** — zoals medische, technische of bouwkundige toepassingen waarbij meetfouten schade kunnen veroorzaken. Gebruik voor precisiewerk gekalibreerde fysieke instrumenten.",
        ],
        listAt: 0,
        list: [
          "Correcte kalibratie door de gebruiker",
          "De fysieke eigenschappen van jouw specifieke toestel",
          "Het zoomniveau van de browser (metingen gaan uit van 100% zoom)",
          "De schermschalingsinstellingen van je besturingssysteem",
        ],
      },
      {
        h: "3. Intellectueel eigendom",
        paras: [
          "Het ontwerp, de code, de tekst en de visuele middelen van onlinecompass zijn ons eigendom en beschermd door het auteursrecht. Je mag ze niet verveelvoudigen of herdistribueren zonder voorafgaande schriftelijke toestemming. De meetfunctionaliteit van de Dienst — het gebruiken van de sensoren van een toestel {tool} — wordt niet als eigendom opgeëist; alleen onze specifieke implementatie is beschermd.",
        ],
      },
      {
        h: "4. Uitsluiting van garanties",
        paras: [
          "De Dienst wordt geleverd “zoals hij is” en “zoals beschikbaar”, zonder enige garantie, uitdrukkelijk of impliciet. We garanderen niet dat de Dienst ononderbroken, foutloos of volledig nauwkeurig is voor alle toestellen en schermen.",
        ],
      },
      {
        h: "5. Beperking van aansprakelijkheid",
        paras: [
          "Voor zover wettelijk toegestaan zijn we niet aansprakelijk voor indirecte, incidentele, bijzondere, gevolg- of strafschade die voortvloeit uit je gebruik van, of het onvermogen om te gebruiken, de Dienst — ook als we op de mogelijkheid van zulke schade zijn gewezen.",
        ],
      },
      {
        h: "6. Links naar derden",
        paras: [
          "De Dienst kan links naar websites van derden bevatten. Deze links worden alleen voor het gemak gegeven. We hebben geen controle over inhoud van derden en aanvaarden daarvoor geen verantwoordelijkheid.",
        ],
      },
      {
        h: "7. Wijzigingen in deze voorwaarden",
        paras: [
          "We behouden ons het recht voor deze Voorwaarden op elk moment te wijzigen. De datum “Laatst bijgewerkt” bovenaan deze pagina geeft de meest recente versie aan. Voortgezet gebruik van de Dienst na het plaatsen van wijzigingen geldt als aanvaarding van de herziene Voorwaarden.",
        ],
      },
      {
        h: "8. Contact",
        paras: [
          "Vragen over deze Voorwaarden? {contactCta}",
        ],
      },
    ],
  },
};

const sv: SupportCopy = {
  updated: "Senast uppdaterad: oktober 2026",
  back: "Tillbaka till Kompass",
  contactLink: "kontakta oss",
  about: {
    whatH: "Vad är onlinecompass?",
    what: [
      "onlinecompass är en gratis navigeringsverktygslåda i webbläsaren som gör vilken telefon, surfplatta eller laptop som helst till en precisionskompass, vattenpass, hastighetsmätare och qibla-sökare. Mät riktning, lutning, hastighet och böneriktning med verklig noggrannhet, utan att installera en app och utan konto.",
      "Till skillnad från de flesta online-kompasar som gissar din orientering läser onlinecompass din magnetometer, accelerometer och GPS direkt via webbläsarens standard-API:er. När sidan har laddats fungerar den offline och dina sensordata stannar på enheten.",
    ],
    missionH: "Vårt uppdrag",
    mission: [
      "Navigering ska vara direkt och gratis. Vi byggde onlinecompass för att vi ständigt letade efter en kompass, ett vattenpass eller en hastighetsmätare som inte fanns i närheten — och online-alternativen var opålitliga, fulla av annonser eller krävde onödiga nedladdningar. onlinecompass är snabbt, privat och korrekt från start.",
    ],
    featuresH: "Viktiga funktioner",
    features: [
      "Live kompassriktning för att hitta norr, söder, öster och väster",
      "Vattenpass: horisontellt, vertikalt och ovalt nivåmått",
      "Hastighetsmätare: GPS-hastighet, topp, medel, höjd och restid",
      "Qibla-sökare: böneriktning från vilken plats som helst",
      "Fyra noggranna kalibreringsmetoder för alla enheter",
      "Linjaler och verktyg vid varje skärmkant, helskärm",
      "Mörkt läge som följer systeminställningen",
      "Fungerar i alla moderna webbläsare — ingen nedladdning, inget konto",
    ],
    featuresCompass: [
      "Live kompassriktning för att hitta norr, söder, öster och väster",
      "Exakt bäring i grader",
      "Fyra noggranna kalibreringsmetoder för alla enheter",
      "Linjaler och verktyg vid varje skärmkant, helskärm",
      "Mörkt läge som följer systeminställningen",
      "Fungerar i alla moderna webbläsare — ingen nedladdning, inget konto",
    ],
    privacyH: "Integritet först",
    privacy:
      "Dina sensordata stannar på enheten. Vi samlar inte in, lagrar eller skickar din kurs, position eller orientering. Dina kalibreringsinställningar sparas lokalt på din egen enhet.",
    contactH: "Kontakt",
    contact: "Har du en fråga, hittat en bugg eller vill föreslå en funktion? Vi vill gärna höra från dig.",
    privacyPre: "Läs vår ",
    privacyLink: "integritetspolicy",
    privacyPost: " för alla detaljer.",
    contactCta: "Kontakta oss här.",
  },
  blog: {
    title: "Online Kompass Blogg",
    desc: "Guider och tips för att läsa riktning med online-kompassen — hur du läser en kompass, hittar norr utan verktyg och rättar en kurs som ser fel ut.",
    intro: "Guider och tips för att navigera med onlinecompass.",
    posts: [
      {
        href: "/onlinecompass/blog/online-compass-without-an-app/",
        title: "Online-kompass utan app: använd telefonen som kompass",
        desc: "Använd telefonen som kompass i webbläsaren — ingen app, ingen installation. Vad magnetometern läser, hur du kalibrerar med ett tryck och när en webbläsarkompass räcker.",
      },
      {
        href: "/onlinecompass/blog/how-to-find-north-without-a-compass/",
        title: "Hur du hittar norr utan kompass (och med telefonen)",
        desc: "Hitta norr på sekunder med en online-kompass eller helt utan verktyg. Steg för steg med sensorinställning, gradvärden och kontroll med sol eller skugga.",
      },
      {
        href: "/onlinecompass/blog/how-to-read-a-compass-dial/",
        title: "Så läser du en kompass: grader, väderstreck och bäringar",
        desc: "Läs vilken kompass som helst korrekt. Väderstreck, grader, bäringar och missvisning, med genomräknade exempel och rättelser för de vanligaste felen.",
      },
      {
        href: "/onlinecompass/blog/how-to-use-an-online-compass/",
        title: "Så använder du en online-kompass (steg för steg, med exempel)",
        desc: "En praktisk guide för att mäta riktning med telefonen. Kalibrera, läs N/S/O/V och arbeta igenom verkliga exempel.",
      },
    ],
  },  contact: {
    emailH: "E-post",
    sendH: "Skicka ett meddelande",
    intro:
      "Vi är ett litet team och läser varje meddelande. Har du hittat en bugg, vill du föreslå en funktion eller bara säga hej — använd formuläret nedan.",
    email: "Nå oss på {email}. Vi svarar oftast inom några arbetsdagar.",
  },
  toolPhrase: { compass: "som kompass", level: "som vattenpass", speed: "som hastighetsmätare", qibla: "som qibla-sökare" },
  privacy: {
    sections: [
      {
        h: "Översikt",
        paras: [
          "onlinecompass (”vi”, ”vår”, ”tjänsten”) värnar om din integritet. Den här policyn förklarar vilka uppgifter vi samlar in, hur vi använder dem och vilka rättigheter du har. Kort version: vi samlar in nästan ingenting och vi säljer eller delar inte dina uppgifter.",
        ],
      },
      {
        h: "1. Uppgifter vi samlar in",
        paras: [
          "**Du behöver inte skapa ett konto eller lämna personuppgifter för att använda onlinecompass.**",
          "Kompassen, vattenpasset, hastighetsmätaren och qibla-sökaren körs helt i din webbläsare. Kalibreringsdata (dina sensormätningar, vald kalibreringsmetod, tema) lagras bara i webbläsarens localStorage och skickas aldrig till våra servrar.",
          "Vi kan samla in följande icke-personliga, aggregerade uppgifter via vanliga serverloggar och statistik:",
        ],
        listAt: 2,
        list: [
          "Besökta sidor och ungefärlig sessionstid",
          "Webbläsartyp och operativsystem (aggregerat)",
          "Hänvisande webbplats eller sökmotor",
          "Geografisk region på landsnivå (inte exakt position)",
        ],
      },
      {
        h: "2. Cookies",
        paras: [
          "onlinecompass använder inga reklamcookies. Vi använder en tredjepartstjänst för analys för att räkna sidvisningar, med IP-anonymisering påslagen och utan reklam- eller spårningsfunktioner över webbplatser; den sätter sina egna analyscookies. Vi använder också localStorage (inte cookies) för att komma ihåg din kalibrering och ditt tema mellan besök, och de uppgifterna lämnar aldrig din enhet.",
          "Du kan rensa dessa uppgifter när som helst genom att rensa webbplatsdata för onlinecompass i webbläsaren.",
        ],
      },
      {
        h: "3. Tredjepartstjänster",
        paras: [
          "Vi laddar typsnittet Geist från ett externt nätverk för typsnittsleverans. När din webbläsare hämtar typsnitten kan leverantören logga din IP-adress som en del av den normala leveransen. Se leverantörens integritetspolicy för detaljer.",
          "Vi bäddar inte in widgetar för sociala medier, annonsnätverk eller reklamspårare. Det enda tredjepartsskriptet på sidan är analystaggen som beskrivs ovan.",
        ],
      },
      {
        h: "4. Lagringstid",
        paras: [
          "Vi lagrar inga personuppgifter på våra servrar. Serverloggar, om de sparas, behålls i högst 90 dagar och används endast för att diagnostisera tekniska problem.",
        ],
      },
      {
        h: "5. Barns integritet",
        paras: [
          "onlinecompass är ett allmänt verktyg för alla åldrar. Vi samlar inte medvetet in personuppgifter från barn under 13 år. Eftersom vi inte samlar in personuppgifter från någon användare uppfyller tjänsten COPPA genom sin utformning.",
        ],
      },
      {
        h: "6. Dina rättigheter",
        paras: [
          "Eftersom vi inte samlar in identifierbara personuppgifter finns det i regel inget för oss att hämta ut, rätta eller radera för din räkning. Har du synpunkter, {contact} så svarar vi snabbt.",
          "Om du befinner dig inom Europeiska ekonomiska samarbetsområdet har du rätt att få tillgång till, rätta eller radera personuppgifter vi har, och att lämna klagomål till din lokala tillsynsmyndighet.",
        ],
      },
      {
        h: "7. Ändringar av denna policy",
        paras: [
          "Vi kan uppdatera denna integritetspolicy då och då. Datumet ”Senast uppdaterad” högst upp på sidan visar den senaste versionen. Fortsatt användning av tjänsten efter att ändringar publicerats innebär att du godkänner den reviderade policyn.",
        ],
      },
      {
        h: "8. Kontakt",
        paras: [
          "Frågor om denna integritetspolicy? {contactCta}",
        ],
      },
    ],
  },
  terms: {
    intro: "Läs dessa villkor (”Villkoren”) noggrant innan du använder onlinecompass (”Tjänsten”). Genom att öppna eller använda Tjänsten godkänner du att vara bunden av dessa Villkor.",
    sections: [
      {
        h: "1. Användning av tjänsten",
        paras: [
          "onlinecompass tillhandahålls gratis för personligt och professionellt bruk. Du får använda Tjänsten för att hitta kompassriktning, nolla ytor, mäta hastighet och hitta qibla. Ingen registrering eller betalning krävs.",
          "Du godkänner att inte:",
        ],
        listAt: 1,
        list: [
          "Använda Tjänsten för olagliga ändamål",
          "Försöka bakåtkompilera, skrapa eller kopiera Tjänsten för vidare distribution utan tillstånd",
          "Störa eller hindra de servrar eller nätverk som är värdar för Tjänsten",
        ],
      },
      {
        h: "2. Ansvarsfriskrivning om noggrannhet",
        paras: [
          "onlinecompass är utformat för att ge noggranna mätningar vid korrekt kalibrering. Noggrannheten beror dock på:",
          "**Förlita dig inte på onlinecompass för säkerhetskritiska mätningar** — som medicinska, tekniska eller byggtekniska tillämpningar där mätfel kan orsaka skada. Använd kalibrerade fysiska instrument för precisionsarbete.",
        ],
        listAt: 0,
        list: [
          "Korrekt kalibrering av användaren",
          "Den fysiska utrustningen i just din enhet",
          "Webbläsarens zoomnivå (mätningar förutsätter 100 % zoom)",
          "Skärmens skalningsinställningar i ditt operativsystem",
        ],
      },
      {
        h: "3. Immateriella rättigheter",
        paras: [
          "Design, kod, text och visuella tillgångar i onlinecompass ägs av oss och skyddas av upphovsrätt. Du får inte reproducera eller distribuera dem utan föregående skriftligt tillstånd. Tjänstens mätfunktion — att använda en enhets sensorer {tool} — görs inte anspråk på som proprietär; endast vår specifika implementation skyddas.",
        ],
      },
      {
        h: "4. Friskrivning från garantier",
        paras: [
          "Tjänsten tillhandahålls ”i befintligt skick” och ”i mån av tillgång” utan garantier av något slag, uttryckliga eller underförstådda. Vi garanterar inte att Tjänsten är oavbruten, felfri eller helt korrekt för alla enheter och skärmar.",
        ],
      },
      {
        h: "5. Ansvarsbegränsning",
        paras: [
          "I den utsträckning lagen tillåter ansvarar vi inte för indirekta, tillfälliga, särskilda, följd- eller straffskador som uppstår genom din användning av, eller oförmåga att använda, Tjänsten — även om vi har informerats om möjligheten till sådana skador.",
        ],
      },
      {
        h: "6. Länkar till tredje part",
        paras: [
          "Tjänsten kan innehålla länkar till tredje parts webbplatser. Dessa länkar tillhandahålls endast för bekvämlighet. Vi har ingen kontroll över tredje parts innehåll och ansvarar inte för det.",
        ],
      },
      {
        h: "7. Ändringar av dessa villkor",
        paras: [
          "Vi förbehåller oss rätten att ändra dessa Villkor när som helst. Datumet ”Senast uppdaterad” högst upp på sidan visar den senaste versionen. Fortsatt användning av Tjänsten efter att ändringar publicerats innebär att du godkänner de reviderade Villkoren.",
        ],
      },
      {
        h: "8. Kontakt",
        paras: [
          "Frågor om dessa Villkor? {contactCta}",
        ],
      },
    ],
  },
};

export const supportCopy: Record<string, SupportCopy> = { en, ja, es, de, fr, pt, ko, it, nl, sv };
