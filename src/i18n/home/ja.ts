import type { HomeCopy } from './types';

export const home: HomeCopy = {
  howTitle: 'Instanten の使い方',
  steps: [
    {
      title: 'Instanten ツールを選ぶ',
      body:
        'ホームページからツールを開くだけ。アカウント作成、拡張機能、待ち時間は不要です。スマートフォン、タブレット、PC のブラウザで直接動作します。',
    },
    {
      title: '実行・即時変換する',
      body:
        'テキストや値、パラメータを貼り付けると、ミリ秒単位で整形された結果が表示されます。変換、書式設定、計算のいずれも入力に合わせてリアルタイムに更新されます。',
    },
    {
      title: '結果をコピーしてヘルプを見る',
      body:
        '正確な結果をワンクリックでコピー。必要に応じて手順、数式、トラブルシューティングをまとめたガイドを開けます。各ガイドは公開標準に基づいています。',
    },
  ],
  trustTitle: '速さだけでなく、信頼性を重視',
  trustLead:
    '多くのツールサイトはポップアップや重いスクリプト、ログインの壁で簡単な作業を妨げます。Instanten は実際の開発者が公開標準を参照し、クリーンで透明、集中できるワークフローを提供します。',
  trustCards: [
    {
      title: '登録不要の即時ヘルプ',
      body:
        'すべてのツールとガイドがすぐ使えます。ちょっとした作業のためにメールアドレスを渡したり、試用を始めたり、パスワードを作る必要はありません。',
    },
    {
      title: '高速なオンライン配信',
      body:
        'ページは最小限のスクリプトで静的生成され、モバイル回線でも各ツールがすぐ反応します。Core Web Vitals の目標にも対応しています。',
    },
    {
      title: '検証された変換精度',
      body:
        '出力は標準ルールに従い、コピーしやすい形式です。オンライン定規は ISO/IEC 7810 ID-1 カード寸法（3.370 × 2.125 インチ）、カラーパレットは WCAG 2.2 AA のコントラスト比を参照します。',
    },
    {
      title: 'ブラウザ優先のプライバシー',
      body:
        '処理は可能な限りブラウザ内で実行され、テーマ設定は端末のローカルストレージに保存されます。Instanten は広告目的で個人データを販売・共有しません。',
    },
  ],
  explainTitle: 'Instanten の説明',
  explainLead:
    '即時ツールの仕組み、数秒でできること、そして高速なブラウザツールが重いダウンロードより優れる理由を、実際の公開標準に基づいて説明します。',
  blocks: [
    {
      title: 'Instanten の役割',
      paragraphs: [
        '学生、開発者、ライター、デザイナー、チームは毎日、データ整形、即時変換、テキスト整理、計算、技術的な調べ物など多くの小さな作業を行っています。30 秒の作業のために重いデスクトップソフトを開くのは非効率です。',
        'Instanten はそれを 1 か所で解決します。無料の即時ツールと実用的なチュートリアルをまとめた軽量なオンライン作業スペースで、アカウントも利用上限もサブスクも不要です。',
      ],
    },
    {
      title: 'Instanten が手軽に感じられる理由',
      paragraphs: [
        '速さだけでなく分かりやすさも重要です。各ツールは入力と出力を前面に置き、モバイル向け操作、キーボード操作、ライト／ダークモードの即時切り替えに対応しています。',
        'ツールライブラリ全体を導く 3 つの原則：',
      ],
      bullets: [
        '無駄のない即時起動 — 静的 HTML ページは最新ブラウザでほぼ即座に読み込まれます。',
        '標準準拠のコピー可能な出力 — JSON Formatter は IETF RFC 8259、Base64 Encoder は IETF RFC 4648、Markdown Editor は CommonMark、メタタグ生成は Google Search Central と Open Graph に従います。',
        'ツールの隣に実用的な文脈 — ガイドが例外やベストプラクティスを説明し、単なる数値ではない即時ヘルプを提供します。',
      ],
    },
    {
      title: 'Instanten で完了できる日常作業',
      bullets: [
        '高速な整形と即時変換 — 単位、構造化テキスト、コード、文書の値を計算ミスなく変換。',
        '開発者・クリエイターのワークフロー — 開発や公開、デザイン引き渡しの際に素材を素早く確認・準備。',
        '学生・オフィスの即時ヘルプ — スマートフォン、Chromebook、PC で計算確認や手順の実行が可能。',
        '実践的な AI・生産性ガイド — Instanten ブログで最新ツールとブラウザ活用術を紹介。',
      ],
      links: [{ label: 'Instanten ブログ', href: '/blog/' }],
    },
    {
      title: 'オンラインツールが重いインストーラーに勝る理由',
      paragraphs: [
        'ネイティブのデスクトップスイートは数 GB の動画処理には向いていますが、日常の小さな作業には不向きです。ブラウザで動くオンラインツールなら、OS 互換性、ストレージ、バックグラウンド更新、ライセンスの手間がなく、Windows、macOS、Linux、Android、iOS で同じように使えます。',
        'NIST、W3C、IETF の仕様に基づく検証方針については About ページをご覧ください。',
      ],
      links: [{ label: 'Instanten について', href: '/about/' }],
    },
    {
      title: 'Instanten を最大限活用する方法',
      bullets: [
        'ホームページをブックマークしてワンタップでアクセス。',
        'まずは余計な書式のない入力を使い、隠れた空白による影響を防ぎます。',
        '不明なルールや例外がある場合は、ツールと実例を組み合わせます。',
        '長時間の閲覧時はテーマを切り替え。設定は端末に保存されます。',
        '固定 URL と Open Graph プレビューで同僚とページを共有。',
        '必要な新機能はお問い合わせページから提案できます。',
      ],
      links: [{ label: 'お問い合わせ', href: '/contact/' }],
    },
  ],
  faqTitle: 'よくある質問',
  faqs: [
    {
      question: 'What is Instanten and how is it different from other free online tools websites?',
      answer:
        'Instanten is a free online tools hub where every utility runs inside your own browser instead of on a server. That single design choice is the difference: nothing you paste or upload leaves your device, there is no account wall, no daily cap and no paid tier, and each instant tool opens on a static page that is usable within a second even on a slow mobile connection.',
    },
    {
      question: 'Which online tools are available on this tools hub right now?',
      answer:
        'The online tools list currently has twelve utilities: JSON Formatter, Base64 Encoder and Decoder, Word Counter, Password Generator, QR Generator, Image Compressor, Color Palette, CSS Grid Generator, Markdown Editor, Meta Tag Generator, Online Ruler and Regex Tester. They are grouped as developer, design, writing and utility tools, so a multi tool website visitor can reach the right page from the homepage grid or by typing a single keyword in the search box.',
    },
    {
      question: 'Are these online tools really free, or is there a hidden limit?',
      answer:
        'They are free, and the limit is identical to zero: no trial countdown, no credit card screen, no watermark, no export cap and no queue. A free online tools hub should behave like a public utility, so you can run the same instant tool ten times in a row during one working session and the result will be identical each time. There is nothing to subscribe to later because there is no premium tier.',
    },
    {
      question: 'Is it safe to paste passwords, tokens or client documents into an online tool?',
      answer:
        'On Instanten it is safe, because the processing happens in your browser through plain JavaScript — the text or file is never transmitted to a server and is not stored anywhere after you close the tab. This is the first question worth asking about any free online tools website: if a site uploads your input to its own backend, the content is effectively a copy of your data on someone else seat of control.',
    },
    {
      question: 'Do these browser tools work on mobile phones and tablets?',
      answer:
        'Yes. Every page uses a responsive layout with a single-column form on small screens, touch targets of at least 44 pixels, and input fields sized so the phone does not zoom unexpectedly. Word count, QR generation, password generation, image compression and the online ruler all work the same on Android Chrome, iPhone Safari, iPad, Windows and macOS, in both light and dark mode.',
    },
    {
      question: 'Do I need to install an app or create an account to use instant tools?',
      answer:
        'No install and no account. Open the tools hub, pick the utility and start typing — the result appears as you work. Because nothing needs a login, there is no verification email to wait for, no password to remember and no profile being built from your usage; the tool page is self-contained and can be bookmarked or added to your phone home screen instead.',
    },
    {
      question: 'Do the tools keep working when the internet connection drops?',
      answer:
        'Once a tool page has loaded, the work itself continues without a connection, because formatting, counting, encoding, compressing and measuring all run locally in the browser rather than on a remote server. Reloading the page, opening a different utility or coming back the next day does need a connection, so on a train or a flight keep the tab open if you know you will need the tool again.',
    },
    {
      question: 'How accurate are the online ruler, speedometer and measurement style tools?',
      answer:
        'Measurement tools follow published standards rather than guesswork: the online ruler calibrates against the ID-1 card size of 85.60 by 53.98 millimetres used by bank and identity cards worldwide, and unit conversions use exact definitions such as 1 inch equals 25.4 millimetres. Accuracy then depends on the calibration step and on your screen density, so the page always shows the current pixels-per-millimetre value instead of hiding it.',
    },
    {
      question: 'How do I pick the right tool for a task on a multi tool website?',
      answer:
        'Start from the task, not the tool name. If the output must be readable or valid, open the formatter or validator; if something is being shortened, resized or encoded, look under conversion; if you are writing, counting or cleaning up text, the writing utilities cover it; if you are checking a layout or a colour, the design tools cover it. A one-word search on the homepage is usually faster than scanning categories.',
    },
    {
      question: 'Why use a web tools hub instead of five single-purpose subscriptions?',
      answer:
        'Because the job is small and the subscription is not. Four or five focused subscriptions quietly cost more than a streaming plan, and each one adds an account, a privacy policy and an update cycle to maintain. A single web tools hub keeps one address, one visual language and one keyboard behaviour across every utility, so switching tasks never means learning a new product or remembering which site had the good formatter.',
    },
  ],
};
