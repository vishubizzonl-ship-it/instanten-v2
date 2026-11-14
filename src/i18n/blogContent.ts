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
      '高速な変換、整形ツール、手順付きガイドが日々の反復作業をどう減らすかを実例で解説します。',
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
