import type { LangCode } from './ui';

export interface BlogCopy {
  title: string;
  excerpt: string;
}

export type BlogCopyBySlug = Record<string, BlogCopy>;

const en: BlogCopyBySlug = {
  'complete-guide-to-instanten-tools-and-instant-online-workflows': {
    title: 'Complete Guide to Instanten Tools — Fast Instant Online Workflows Without Sign-Up',
    excerpt:
      'Discover how free Instanten tools, instant convert utilities, and practical instant help guides work together inside a single browser-based workspace with no account required.',
  },
  'how-instant-convert-and-instant-help-tools-save-hours-daily': {
    title: 'How Instant Convert Utilities and Browser-Based Instant Help Save Hours Every Week',
    excerpt:
      'A practical breakdown of how fast instant convert workflows, clean formatting helpers, and step-by-step instant help guides cut repetitive tasks from your daily routine.',
  },
};

const de: BlogCopyBySlug = {
  'complete-guide-to-instanten-tools-and-instant-online-workflows': {
    title: 'Kompletter Leitfaden zu Instanten Tools – schnelle Online-Workflows ohne Anmeldung',
    excerpt:
      'Erfahre, wie kostenlose Instanten Tools, Instant-Convert-Utilities und praktische Hilfe in einem browserbasierten Arbeitsbereich zusammenspielen.',
  },
  'how-instant-convert-and-instant-help-tools-save-hours-daily': {
    title: 'Wie Instant-Convert-Utilities und browserbasierte Hilfe jede Woche Stunden sparen',
    excerpt:
      'Eine praktische Übersicht, wie schnelle Konvertierungen, saubere Formatierungshilfen und Schritt-für-Schritt-Anleitungen Routineaufgaben verkürzen.',
  },
  'online-tools-hub-guide': {
    title: 'Kostenloser Online-Tools-Hub: eine Seite ersetzt zehn Lesezeichen',
    excerpt:
      'Ein kostenloser Online-Tools-Hub hält jedes Sofort-Tool nur einen Klick entfernt. So funktioniert die Online-Tools-Liste von Instanten und so erledigst du Sofort-Arbeit ohne Installation.',
  },
  'instant-tools-for-daily-work': {
    title: '12 Sofort-Tools für Sofort-Arbeit: die tägliche Checkliste',
    excerpt:
      'Zwölf Sofort-Tools für die kleinen digitalen Aufgaben, die du jede Woche wiederholst — JSON, Wortzählung, Passwörter, Bildkomprimierung — kostenlos und ohne Konto.',
  },
  'web-tools-hub-vs-subscriptions': {
    title: 'Web-Tools-Hub gegen Bezahl-Abos: Wer gewinnt?',
    excerpt:
      'Einzweck-SaaS-Tools summieren sich still. Was ein kostenloser Online-Tools-Hub ersetzt, wo Bezahlsoftware weiterhin vorn liegt und wie du kostenlose Online-Tools ohne Fallen wählst.',
  },
};

const ja: BlogCopyBySlug = {
  'complete-guide-to-instanten-tools-and-instant-online-workflows': {
    title: 'Instanten Tools 完全ガイド — 登録不要の高速オンラインワークフロー',
    excerpt:
      '無料の Instanten ツール、即時変換ユーティリティ、実践的なガイドが 1 つのブラウザワークスペースでどう連携するかを紹介します。',
  },
  'how-instant-convert-and-instant-help-tools-save-hours-daily': {
    title: '即時変換ツールとブラウザベースのヘルプが毎週数時間を節約する方法',
    excerpt:
      '高速な変換、整形ツール、手順付きガイドが日々の反復作業をどう減らすかを実例で解説します。毎週くり返す小さな作業をブラウザ内で数秒に短縮する具体的な手順を紹介します。',
  },
  'online-tools-hub-guide': {
    title: '無料オンラインツールハブ：1つのサイトで10個のブックマークを代替',
    excerpt:
      '無料オンラインツールハブなら、どの即時ツールもワンクリックで開けます。Instanten のオンラインツール一覧の仕組みと、インストールなしで即時作業を終える方法を解説します。',
  },
  'instant-tools-for-daily-work': {
    title: '即時作業のための12の即時ツール：毎日のチェックリスト',
    excerpt:
      '毎週くり返す小さなデジタル作業のための12の即時ツールをまとめました。JSON整形、文字数カウント、パスワード生成、画像圧縮、QRコード作成、カラーコントラスト確認まで、すべてブラウザ内で完結し、無料でアカウント登録も不要です。',
  },
  'web-tools-hub-vs-subscriptions': {
    title: 'ウェブツールハブと有料サブスクリプション、勝つのはどっち？',
    excerpt:
      '単機能のSaaSツールは知らないうちに積み上がります。無料オンラインツールハブが代替できる範囲、有料ソフトが依然として強い場面、落とし穴のない無料オンラインツールの選び方をまとめました。',
  },
};

const fr: BlogCopyBySlug = {
  'complete-guide-to-instanten-tools-and-instant-online-workflows': {
    title: 'Guide complet des outils Instanten — des workflows en ligne rapides sans inscription',
    excerpt:
      'Découvrez comment les outils Instanten gratuits, les utilitaires de conversion instantanée et les guides pratiques s’articulent dans un espace unique.',
  },
  'how-instant-convert-and-instant-help-tools-save-hours-daily': {
    title: 'Comment les utilitaires instantanés et l’aide en ligne font gagner des heures chaque semaine',
    excerpt:
      'Un point pratique sur la façon dont les conversions rapides, le formatage et les guides pas à pas réduisent les tâches répétitives.',
  },
  'online-tools-hub-guide': {
    title: 'Hub d’outils en ligne gratuits : un seul site remplace dix favoris',
    excerpt:
      'Un hub d’outils en ligne gratuits garde chaque outil instantané à un clic. Comment fonctionne la liste d’outils en ligne d’Instanten et comment terminer un travail instantané sans rien installer.',
  },
  'instant-tools-for-daily-work': {
    title: '12 outils instantanés pour le travail instantané : la liste quotidienne',
    excerpt:
      'Douze outils instantanés pour les petites tâches numériques que vous répétez chaque semaine — JSON, comptage de mots, mots de passe, compression d’images — gratuits et sans compte.',
  },
  'web-tools-hub-vs-subscriptions': {
    title: 'Hub d’outils web ou abonnements payants : qui gagne ?',
    excerpt:
      'Les outils SaaS mono-usage s’accumulent sans bruit. Ce qu’un hub d’outils en ligne gratuit remplace, là où le logiciel payant reste devant, et comment choisir des outils en ligne gratuits sans piège.',
  },
};

const es: BlogCopyBySlug = {
  'complete-guide-to-instanten-tools-and-instant-online-workflows': {
    title: 'Guía completa de Instanten Tools — flujos online rápidos sin registro',
    excerpt:
      'Descubre cómo las herramientas gratuitas de Instanten, los conversores instantáneos y las guías prácticas se combinan en un único espacio de trabajo.',
  },
  'how-instant-convert-and-instant-help-tools-save-hours-daily': {
    title: 'Cómo los conversores instantáneos y la ayuda en el navegador ahorran horas cada semana',
    excerpt:
      'Un análisis práctico de cómo las conversiones rápidas, el formato limpio y las guías paso a paso reducen las tareas repetitivas.',
  },
  'online-tools-hub-guide': {
    title: 'Hub de herramientas online gratis: un sitio sustituye diez marcadores',
    excerpt:
      'Un hub de herramientas online gratis mantiene cada herramienta instantánea a un clic. Cómo funciona la lista de herramientas online de Instanten y cómo terminar el trabajo instantáneo sin instalar nada.',
  },
  'instant-tools-for-daily-work': {
    title: '12 herramientas instantáneas para el trabajo instantáneo: lista diaria',
    excerpt:
      'Doce herramientas instantáneas para las pequeñas tareas digitales que repites cada semana: JSON, recuento de palabras, contraseñas y compresión de imágenes, gratis y sin cuenta.',
  },
  'web-tools-hub-vs-subscriptions': {
    title: 'Hub de herramientas web frente a suscripciones de pago: ¿quién gana?',
    excerpt:
      'Las herramientas SaaS de un solo uso se acumulan sin que lo notes. Qué sustituye un hub de herramientas online gratis, dónde sigue ganando el software de pago y cómo elegir herramientas online gratis sin trampas.',
  },
};

const ko: BlogCopyBySlug = {
  'complete-guide-to-instanten-tools-and-instant-online-workflows': {
    title: 'Instanten Tools 완벽 가이드 — 가입 없는 빠른 온라인 워크플로',
    excerpt:
      '무료 Instanten 도구, 즉시 변환 유틸리티, 실용 가이드가 하나의 브라우저 작업 공간에서 어떻게 연결되는지 알아보세요.',
  },
  'how-instant-convert-and-instant-help-tools-save-hours-daily': {
    title: '즉시 변환 도구와 브라우저 기반 도움이 매주 몇 시간을 절약하는 방법',
    excerpt:
      '빠른 변환, 깔끔한 서식 도우미, 단계별 가이드가 반복 작업을 어떻게 줄여 주는지 실용적으로 정리했습니다.',
  },
  'online-tools-hub-guide': {
    title: '무료 온라인 도구 허브: 사이트 하나로 북마크 열 개를 대신합니다',
    excerpt:
      '무료 온라인 도구 허브는 모든 즉시 도구를 클릭 한 번으로 유지합니다. Instanten 온라인 도구 목록이 어떻게 작동하는지, 설치 없이 즉시 작업을 끝내는 방법을 설명합니다.',
  },
  'instant-tools-for-daily-work': {
    title: '즉시 작업을 위한 12가지 즉시 도구: 매일 체크리스트',
    excerpt:
      '매주 반복하는 작은 디지털 작업을 위한 12가지 즉시 도구 — JSON, 단어 수 세기, 비밀번호, 이미지 압축 — 무료이고 계정도 필요 없습니다.',
  },
  'web-tools-hub-vs-subscriptions': {
    title: '웹 도구 허브 vs 유료 구독: 어느 쪽이 이길까?',
    excerpt:
      '단일 목적 SaaS 도구는 조용히 쌓입니다. 무료 온라인 도구 허브가 무엇을 대체하는지, 유료 소프트웨어가 여전히 강한 지점, 함정 없는 무료 온라인 도구를 고르는 방법을 정리했습니다.',
  },
};

const nl: BlogCopyBySlug = {
  'complete-guide-to-instanten-tools-and-instant-online-workflows': {
    title: 'Complete gids voor Instanten Tools — snelle online workflows zonder registratie',
    excerpt:
      'Ontdek hoe gratis Instanten-tools, instant conversie-utilities en praktische gidsen samenwerken in één browserwerkruimte.',
  },
  'how-instant-convert-and-instant-help-tools-save-hours-daily': {
    title: 'Hoe instant conversietools en browserhulp elke week uren besparen',
    excerpt:
      'Een praktische uitleg over hoe snelle conversies, nette opmaak en stapsgewijze gidsen repetitieve taken verminderen.',
  },
};

const sv: BlogCopyBySlug = {
  'complete-guide-to-instanten-tools-and-instant-online-workflows': {
    title: 'Komplett guide till Instanten Tools – snabba onlinearbetsflöden utan registrering',
    excerpt:
      'Se hur gratis Instanten-verktyg, snabba konverteringsverktyg och praktiska guider samverkar i en webbläsarbaserad arbetsyta.',
  },
  'how-instant-convert-and-instant-help-tools-save-hours-daily': {
    title: 'Hur snabba konverteringsverktyg och webbläsarhjälp sparar timmar varje vecka',
    excerpt:
      'En praktisk genomgång av hur snabba konverteringar, formateringshjälp och steg-för-steg-guider minskar repetitiva uppgifter.',
  },
};

const it: BlogCopyBySlug = {
  'complete-guide-to-instanten-tools-and-instant-online-workflows': {
    title: 'Guida completa a Instanten Tools — workflow online rapidi senza registrazione',
    excerpt:
      'Scopri come gli strumenti gratuiti Instanten, le utility di conversione istantanea e le guide pratiche collaborano in un unico spazio di lavoro.',
  },
  'how-instant-convert-and-instant-help-tools-save-hours-daily': {
    title: 'Come le utility di conversione istantanea e l’aiuto nel browser risparmiano ore ogni settimana',
    excerpt:
      'Un’analisi pratica di come conversioni rapide, formattazione pulita e guide passo passo riducano le attività ripetitive.',
  },
  'online-tools-hub-guide': {
    title: 'Hub di strumenti online gratis: un sito sostituisce dieci segnalibri',
    excerpt:
      'Un hub di strumenti online gratis tiene ogni strumento istantaneo a un clic. Come funziona l’elenco di strumenti online di Instanten e come chiudere il lavoro istantaneo senza installare nulla.',
  },
  'instant-tools-for-daily-work': {
    title: '12 strumenti istantanei per il lavoro istantaneo: la checklist quotidiana',
    excerpt:
      'Dodici strumenti istantanei per le piccole attività digitali che ripeti ogni settimana — JSON, conteggio parole, password, compressione immagini — gratis e senza account.',
  },
  'web-tools-hub-vs-subscriptions': {
    title: 'Hub di strumenti web contro abbonamenti a pagamento: chi vince?',
    excerpt:
      'Gli strumenti SaaS monouso si accumulano in silenzio. Cosa sostituisce un hub di strumenti online gratis, dove il software a pagamento resta avanti e come scegliere strumenti online gratis senza trappole.',
  },
};

const pt: BlogCopyBySlug = {
  'complete-guide-to-instanten-tools-and-instant-online-workflows': {
    title: 'Guia completo das Instanten Tools — fluxos online rápidos sem registo',
    excerpt:
      'Descubra como as ferramentas gratuitas Instanten, os conversores instantâneos e os guias práticos funcionam num único espaço de trabalho.',
  },
  'how-instant-convert-and-instant-help-tools-save-hours-daily': {
    title: 'Como os conversores instantâneos e a ajuda no navegador poupam horas todas as semanas',
    excerpt:
      'Uma análise prática de como conversões rápidas, formatação cuidada e guias passo a passo reduzem tarefas repetitivas.',
  },
  'online-tools-hub-guide': {
    title: 'Hub de ferramentas online grátis: um site substitui dez favoritos',
    excerpt:
      'Um hub de ferramentas online grátis mantém cada ferramenta instantânea a um clique. Como funciona a lista de ferramentas online do Instanten e como concluir trabalho instantâneo sem instalar nada.',
  },
  'instant-tools-for-daily-work': {
    title: '12 ferramentas instantâneas para trabalho instantâneo: lista diária',
    excerpt:
      'Doze ferramentas instantâneas para as pequenas tarefas digitais que você repete toda semana — JSON, contagem de palavras, senhas, compressão de imagens — grátis e sem conta.',
  },
  'web-tools-hub-vs-subscriptions': {
    title: 'Hub de ferramentas web ou assinaturas pagas: quem ganha?',
    excerpt:
      'Ferramentas SaaS de uso único se acumulam sem barulho. O que um hub de ferramentas online grátis substitui, onde o software pago ainda ganha e como escolher ferramentas online grátis sem armadilhas.',
  },
};

export const blogCopy: Record<LangCode, BlogCopyBySlug> = {
  en,
  de,
  ja,
  fr,
  es,
  ko,
  nl,
  sv,
  it,
  pt,
};

export function localizePost(
  lang: LangCode,
  post: { slug: string; title: string; excerpt: string }
): BlogCopy {
  const localized = blogCopy[lang]?.[post.slug];
  return {
    title: localized?.title || post.title,
    excerpt: localized?.excerpt || post.excerpt,
  };
}

export const blogCategoryLabels: Record<LangCode, Record<string, string>> = {
  en: {},
  de: {
    AI: 'KI',
    'API DESIGN': 'API-Design',
    CSS: 'CSS',
    DEVOPS: 'DevOps',
    'FREE RESOURCES': 'Kostenlose Ressourcen',
    FRONTEND: 'Frontend',
    GIT: 'Git',
    'MACHINE LEARNING': 'Machine Learning',
    MACOS: 'macOS',
    PRODUCTIVITY: 'Produktivität',
    TOOLS: 'Tools',
    TYPESCRIPT: 'TypeScript',
  },
  ja: {
    AI: 'AI',
    'API DESIGN': 'API 設計',
    CSS: 'CSS',
    DEVOPS: 'DevOps',
    'FREE RESOURCES': '無料リソース',
    FRONTEND: 'フロントエンド',
    GIT: 'Git',
    'MACHINE LEARNING': '機械学習',
    MACOS: 'macOS',
    PRODUCTIVITY: '生産性',
    TOOLS: 'ツール',
    TYPESCRIPT: 'TypeScript',
  },
  fr: {
    AI: 'IA',
    'API DESIGN': 'Conception API',
    CSS: 'CSS',
    DEVOPS: 'DevOps',
    'FREE RESOURCES': 'Ressources gratuites',
    FRONTEND: 'Frontend',
    GIT: 'Git',
    'MACHINE LEARNING': 'Machine learning',
    MACOS: 'macOS',
    PRODUCTIVITY: 'Productivité',
    TOOLS: 'Outils',
    TYPESCRIPT: 'TypeScript',
  },
  es: {
    AI: 'IA',
    'API DESIGN': 'Diseño de API',
    CSS: 'CSS',
    DEVOPS: 'DevOps',
    'FREE RESOURCES': 'Recursos gratuitos',
    FRONTEND: 'Frontend',
    GIT: 'Git',
    'MACHINE LEARNING': 'Aprendizaje automático',
    MACOS: 'macOS',
    PRODUCTIVITY: 'Productividad',
    TOOLS: 'Herramientas',
    TYPESCRIPT: 'TypeScript',
  },
  ko: {
    AI: 'AI',
    'API DESIGN': 'API 설계',
    CSS: 'CSS',
    DEVOPS: 'DevOps',
    'FREE RESOURCES': '무료 자료',
    FRONTEND: '프론트엔드',
    GIT: 'Git',
    'MACHINE LEARNING': '머신러닝',
    MACOS: 'macOS',
    PRODUCTIVITY: '생산성',
    TOOLS: '도구',
    TYPESCRIPT: 'TypeScript',
  },
  nl: {
    AI: 'AI',
    'API DESIGN': 'API-ontwerp',
    CSS: 'CSS',
    DEVOPS: 'DevOps',
    'FREE RESOURCES': 'Gratis bronnen',
    FRONTEND: 'Frontend',
    GIT: 'Git',
    'MACHINE LEARNING': 'Machine learning',
    MACOS: 'macOS',
    PRODUCTIVITY: 'Productiviteit',
    TOOLS: 'Tools',
    TYPESCRIPT: 'TypeScript',
  },
  sv: {
    AI: 'AI',
    'API DESIGN': 'API-design',
    CSS: 'CSS',
    DEVOPS: 'DevOps',
    'FREE RESOURCES': 'Gratis resurser',
    FRONTEND: 'Frontend',
    GIT: 'Git',
    'MACHINE LEARNING': 'Maskininlärning',
    MACOS: 'macOS',
    PRODUCTIVITY: 'Produktivitet',
    TOOLS: 'Verktyg',
    TYPESCRIPT: 'TypeScript',
  },
  it: {
    AI: 'IA',
    'API DESIGN': 'Progettazione API',
    CSS: 'CSS',
    DEVOPS: 'DevOps',
    'FREE RESOURCES': 'Risorse gratuite',
    FRONTEND: 'Frontend',
    GIT: 'Git',
    'MACHINE LEARNING': 'Machine learning',
    MACOS: 'macOS',
    PRODUCTIVITY: 'Produttività',
    TOOLS: 'Strumenti',
    TYPESCRIPT: 'TypeScript',
  },
  pt: {
    AI: 'IA',
    'API DESIGN': 'Design de API',
    CSS: 'CSS',
    DEVOPS: 'DevOps',
    'FREE RESOURCES': 'Recursos gratuitos',
    FRONTEND: 'Frontend',
    GIT: 'Git',
    'MACHINE LEARNING': 'Aprendizagem automática',
    MACOS: 'macOS',
    PRODUCTIVITY: 'Produtividade',
    TOOLS: 'Ferramentas',
    TYPESCRIPT: 'TypeScript',
  },
};

export function localizeBlogCategory(lang: LangCode, name: string): string {
  return blogCategoryLabels[lang]?.[name] || name;
}
