import type { LangCode } from './ui';

export interface BlogCopy {
  title: string;
  excerpt: string;
}

export type BlogCopyBySlug = Record<string, BlogCopy>;

const en: BlogCopyBySlug = {
  'css-container-queries-guide': {
    title: 'CSS Container Queries: The Complete Guide to Responsive Components',
    excerpt:
      'Move beyond media queries. Container queries let components adapt to their parent container, not the viewport. Learn the syntax, use cases, and browser support for this game-changing CSS feature.',
  },
  'essential-git-workflows-developers': {
    title: 'Essential Git Workflows Every Developer Should Master in 2024',
    excerpt:
      'Level up your version control with battle-tested Git workflows. From feature branching to trunk-based development, learn when and how to apply each approach for maximum team productivity.',
  },
  'free-developer-tools-2024': {
    title: '15 Free Developer Tools That Will Transform Your Workflow',
    excerpt:
      'Stop paying for expensive subscriptions. These hand-picked free tools cover API testing, database design, code profiling, and deployment — all without spending a dime.',
  },
  'macos-developer-setup-2024': {
    title: 'The Ultimate macOS Developer Setup for 2024',
    excerpt:
      'From terminal configuration and window management to package managers and IDE setup — everything you need to turn a fresh Mac into a productivity powerhouse.',
  },
  'typescript-advanced-patterns': {
    title: 'Advanced TypeScript Patterns for Building Type-Safe APIs',
    excerpt:
      'Go beyond basic types with conditional types, template literals, and mapped types. Build APIs that catch errors at compile time and provide excellent autocomplete.',
  },
  'unlocking-power-ai-future': {
    title: 'Unlocking the Power of AI: How Machine Learning is Reshaping Our World',
    excerpt:
      'From healthcare diagnostics to creative arts, artificial intelligence is transforming every industry. Discover the breakthrough technologies driving this revolution.',
  },
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
  'css-container-queries-guide': {
    title: 'CSS Container Queries: Der vollständige Leitfaden für responsive Komponenten',
    excerpt:
      'Mehr als Media Queries: Container Queries lassen Komponenten auf ihren Elterncontainer reagieren. Lerne Syntax, Einsatzfälle und Browser-Unterstützung.',
  },
  'essential-git-workflows-developers': {
    title: 'Wichtige Git-Workflows, die jeder Entwickler 2024 beherrschen sollte',
    excerpt:
      'Verbessere deine Versionsverwaltung mit erprobten Git-Workflows – von Feature-Branches bis Trunk-based Development, inklusive passender Einsatzszenarien.',
  },
  'free-developer-tools-2024': {
    title: '15 kostenlose Entwickler-Tools, die deinen Workflow verändern',
    excerpt:
      'Schluss mit teuren Abos: Diese handverlesenen kostenlosen Tools decken API-Tests, Datenbankdesign, Code-Profiling und Deployment ab.',
  },
  'macos-developer-setup-2024': {
    title: 'Das ultimative macOS-Entwickler-Setup für 2024',
    excerpt:
      'Von Terminal-Konfiguration und Fensterverwaltung bis Paketmanagern und IDE-Einrichtung – alles für einen produktiven Mac.',
  },
  'typescript-advanced-patterns': {
    title: 'Fortgeschrittene TypeScript-Muster für typsichere APIs',
    excerpt:
      'Bedingte Typen, Template-Literale und Mapped Types helfen dir, APIs zu bauen, die Fehler bereits zur Kompilierzeit erkennen.',
  },
  'unlocking-power-ai-future': {
    title: 'Die Kraft der KI entfesseln: Wie Machine Learning unsere Welt verändert',
    excerpt:
      'Von medizinischer Diagnostik bis Kreativwirtschaft: KI verändert jede Branche. Entdecke die Technologien hinter diesem Wandel.',
  },
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
  'css-container-queries-guide': {
    title: 'CSS Container Queries 完全ガイド：レスポンシブコンポーネントの作り方',
    excerpt:
      'メディアクエリの先へ。Container Queries ならコンポーネントが親コンテナに応じて適応します。構文、活用例、ブラウザ対応を解説します。',
  },
  'essential-git-workflows-developers': {
    title: '2024 年に開発者が身につけるべき Git ワークフロー',
    excerpt:
      'フィーチャーブランチからトランクベース開発まで、実績ある Git ワークフローと適切な使い分けを学び、チームの生産性を高めましょう。',
  },
  'free-developer-tools-2024': {
    title: 'ワークフローを変える 15 の無料開発ツール',
    excerpt:
      '高額なサブスクは不要。API テスト、データベース設計、コードプロファイリング、デプロイまでをカバーする無料ツールを厳選しました。',
  },
  'macos-developer-setup-2024': {
    title: '2024 年版 macOS 開発環境の究極セットアップ',
    excerpt:
      'ターミナル設定、ウィンドウ管理、パッケージマネージャー、IDE 構築まで。新しい Mac を生産性の高い環境に変える方法を紹介します。',
  },
  'typescript-advanced-patterns': {
    title: '型安全な API のための高度な TypeScript パターン',
    excerpt:
      '条件型、テンプレートリテラル型、マップ型を活用し、コンパイル時にエラーを検出できる API を構築する方法を解説します。',
  },
  'unlocking-power-ai-future': {
    title: 'AI の力を解き放つ：機械学習が世界をどう変えるか',
    excerpt:
      '医療診断から創作まで、AI はあらゆる業界を変革しています。その原動力となる技術と、開発者・企業への影響を探ります。',
  },
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
  'css-container-queries-guide': {
    title: 'CSS Container Queries : le guide complet des composants responsives',
    excerpt:
      'Au-delà des media queries, les container queries adaptent les composants à leur conteneur parent. Découvrez la syntaxe, les cas d’usage et la prise en charge.',
  },
  'essential-git-workflows-developers': {
    title: 'Les workflows Git essentiels à maîtriser en 2024',
    excerpt:
      'Améliorez votre gestion de versions avec des workflows Git éprouvés, du feature branching au trunk-based development, et sachez quand les appliquer.',
  },
  'free-developer-tools-2024': {
    title: '15 outils de développement gratuits qui transforment votre workflow',
    excerpt:
      'Fini les abonnements coûteux : ces outils gratuits couvrent les tests API, la conception de bases de données, le profilage et le déploiement.',
  },
  'macos-developer-setup-2024': {
    title: 'La configuration macOS ultime pour développeurs en 2024',
    excerpt:
      'Terminal, gestion de fenêtres, gestionnaires de paquets et IDE : tout pour transformer un Mac neuf en machine de productivité.',
  },
  'typescript-advanced-patterns': {
    title: 'Patterns TypeScript avancés pour des API sûres',
    excerpt:
      'Types conditionnels, template literals et mapped types permettent de construire des API qui détectent les erreurs dès la compilation.',
  },
  'unlocking-power-ai-future': {
    title: 'Libérer la puissance de l’IA : comment le machine learning transforme notre monde',
    excerpt:
      'Du diagnostic médical aux arts créatifs, l’IA transforme tous les secteurs. Découvrez les technologies à l’origine de cette révolution.',
  },
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
  'css-container-queries-guide': {
    title: 'CSS Container Queries: la guía completa de componentes responsivos',
    excerpt:
      'Más allá de las media queries, las container queries adaptan los componentes a su contenedor padre. Aprende sintaxis, casos de uso y compatibilidad.',
  },
  'essential-git-workflows-developers': {
    title: 'Flujos de trabajo Git esenciales que todo desarrollador debe dominar en 2024',
    excerpt:
      'Mejora tu control de versiones con flujos Git probados, desde feature branching hasta trunk-based development, y aprende cuándo aplicar cada uno.',
  },
  'free-developer-tools-2024': {
    title: '15 herramientas de desarrollo gratuitas que transformarán tu flujo de trabajo',
    excerpt:
      'Deja de pagar suscripciones caras. Estas herramientas gratuitas cubren pruebas de API, diseño de bases de datos, perfilado y despliegue.',
  },
  'macos-developer-setup-2024': {
    title: 'La configuración definitiva de macOS para desarrolladores en 2024',
    excerpt:
      'Terminal, gestión de ventanas, gestores de paquetes e IDE: todo lo necesario para convertir un Mac nuevo en una máquina productiva.',
  },
  'typescript-advanced-patterns': {
    title: 'Patrones avanzados de TypeScript para APIs seguras',
    excerpt:
      'Tipos condicionales, template literals y mapped types permiten crear APIs que detectan errores en tiempo de compilación.',
  },
  'unlocking-power-ai-future': {
    title: 'El poder de la IA: cómo el machine learning está transformando el mundo',
    excerpt:
      'Desde el diagnóstico médico hasta las artes creativas, la IA transforma todos los sectores. Descubre las tecnologías que impulsan esta revolución.',
  },
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
  'css-container-queries-guide': {
    title: 'CSS Container Queries 완벽 가이드: 반응형 컴포넌트 만들기',
    excerpt:
      '미디어 쿼리를 넘어 컨테이너 쿼리로 컴포넌트가 부모 컨테이너에 맞춰 적응하는 방법을 알아보세요. 문법, 활용 사례, 브라우저 지원을 다룹니다.',
  },
  'essential-git-workflows-developers': {
    title: '2024년 개발자가 꼭 알아야 할 필수 Git 워크플로',
    excerpt:
      '기능 브랜치부터 트렁크 기반 개발까지 검증된 Git 워크플로와 각 방식의 적용 시점을 배워 팀 생산성을 높이세요.',
  },
  'free-developer-tools-2024': {
    title: '워크플로를 바꾸는 15가지 무료 개발 도구',
    excerpt:
      '비싼 구독은 이제 그만. API 테스트, 데이터베이스 설계, 코드 프로파일링, 배포까지 아우르는 무료 도구를 엄선했습니다.',
  },
  'macos-developer-setup-2024': {
    title: '2024년 궁극의 macOS 개발 환경 설정',
    excerpt:
      '터미널 설정, 창 관리, 패키지 관리자, IDE 구성까지 새 Mac을 생산성 중심 환경으로 바꾸는 방법을 소개합니다.',
  },
  'typescript-advanced-patterns': {
    title: '타입 안전한 API를 위한 고급 TypeScript 패턴',
    excerpt:
      '조건부 타입, 템플릿 리터럴 타입, 매핑 타입으로 컴파일 시점에 오류를 잡는 API를 만들어 보세요.',
  },
  'unlocking-power-ai-future': {
    title: 'AI의 힘을 열다: 머신러닝이 세상을 바꾸는 방식',
    excerpt:
      '의료 진단부터 창작 분야까지 AI는 모든 산업을 변화시키고 있습니다. 혁신을 이끄는 기술과 그 의미를 살펴봅니다.',
  },
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
  'css-container-queries-guide': {
    title: 'CSS Container Queries: de complete gids voor responsieve componenten',
    excerpt:
      'Verder dan media queries: container queries laten componenten reageren op hun bovenliggende container. Leer de syntax, toepassingen en browserondersteuning.',
  },
  'essential-git-workflows-developers': {
    title: 'Essentiële Git-workflows die elke developer in 2024 moet beheersen',
    excerpt:
      'Verbeter je versiebeheer met beproefde Git-workflows, van feature branches tot trunk-based development, en leer wanneer je welke aanpak gebruikt.',
  },
  'free-developer-tools-2024': {
    title: '15 gratis ontwikkelaarstools die je workflow transformeren',
    excerpt:
      'Stop met dure abonnementen. Deze gratis tools dekken API-tests, databasedesign, code-profilering en deployment.',
  },
  'macos-developer-setup-2024': {
    title: 'De ultieme macOS-developersetup voor 2024',
    excerpt:
      'Van terminalconfiguratie en vensterbeheer tot pakketbeheerders en IDE-instellingen: alles om een nieuwe Mac productief te maken.',
  },
  'typescript-advanced-patterns': {
    title: 'Geavanceerde TypeScript-patronen voor typeveilige API’s',
    excerpt:
      'Met conditionele types, template literals en mapped types bouw je API’s die fouten al bij compilatie opsporen.',
  },
  'unlocking-power-ai-future': {
    title: 'De kracht van AI ontketenen: hoe machine learning onze wereld verandert',
    excerpt:
      'Van medische diagnostiek tot creatieve kunsten: AI verandert elke sector. Ontdek de technologieën achter deze revolutie.',
  },
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
  'css-container-queries-guide': {
    title: 'CSS Container Queries: den kompletta guiden för responsiva komponenter',
    excerpt:
      'Bortom media queries: container queries låter komponenter anpassa sig efter sin föräldercontainer. Lär dig syntax, användningsfall och webbläsarstöd.',
  },
  'essential-git-workflows-developers': {
    title: 'Viktiga Git-arbetsflöden som varje utvecklare bör behärska 2024',
    excerpt:
      'Utveckla din versionshantering med beprövade Git-arbetsflöden, från feature branches till trunk-based development.',
  },
  'free-developer-tools-2024': {
    title: '15 gratis utvecklarverktyg som förändrar ditt arbetsflöde',
    excerpt:
      'Sluta betala för dyra prenumerationer. Dessa kostnadsfria verktyg täcker API-testning, databasdesign, kodprofilering och driftsättning.',
  },
  'macos-developer-setup-2024': {
    title: 'Den ultimata macOS-utvecklaruppsättningen för 2024',
    excerpt:
      'Från terminalkonfiguration och fönsterhantering till pakethanterare och IDE-inställning – allt för en produktiv Mac.',
  },
  'typescript-advanced-patterns': {
    title: 'Avancerade TypeScript-mönster för typsäkra API:er',
    excerpt:
      'Villkorliga typer, template literals och mapped types hjälper dig bygga API:er som fångar fel redan vid kompilering.',
  },
  'unlocking-power-ai-future': {
    title: 'Släpp loss AI:s kraft: hur maskininlärning förändrar vår värld',
    excerpt:
      'Från sjukvårdsdiagnostik till kreativa yrken – AI förändrar alla branscher. Upptäck teknikerna bakom revolutionen.',
  },
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
  'css-container-queries-guide': {
    title: 'CSS Container Queries: la guida completa ai componenti responsive',
    excerpt:
      'Oltre le media query: le container query adattano i componenti al contenitore padre. Scopri sintassi, casi d’uso e supporto dei browser.',
  },
  'essential-git-workflows-developers': {
    title: 'Workflow Git essenziali che ogni sviluppatore dovrebbe padroneggiare nel 2024',
    excerpt:
      'Migliora il controllo di versione con workflow Git collaudati, dal feature branching al trunk-based development, e scopri quando applicarli.',
  },
  'free-developer-tools-2024': {
    title: '15 strumenti di sviluppo gratuiti che trasformano il tuo workflow',
    excerpt:
      'Basta abbonamenti costosi. Questi strumenti gratuiti coprono test API, progettazione di database, profilazione del codice e deployment.',
  },
  'macos-developer-setup-2024': {
    title: 'La configurazione macOS definitiva per sviluppatori nel 2024',
    excerpt:
      'Terminale, gestione finestre, package manager e IDE: tutto ciò che serve per rendere produttivo un Mac appena acquistato.',
  },
  'typescript-advanced-patterns': {
    title: 'Pattern TypeScript avanzati per API type-safe',
    excerpt:
      'Tipi condizionali, template literal e mapped types permettono di creare API che intercettano gli errori già in compilazione.',
  },
  'unlocking-power-ai-future': {
    title: 'Liberare la potenza dell’IA: come il machine learning sta cambiando il mondo',
    excerpt:
      'Dalla diagnostica medica alle arti creative, l’IA trasforma ogni settore. Scopri le tecnologie che guidano questa rivoluzione.',
  },
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
  'css-container-queries-guide': {
    title: 'CSS Container Queries: o guia completo para componentes responsivos',
    excerpt:
      'Além das media queries, as container queries adaptam os componentes ao contentor pai. Aprenda a sintaxe, os casos de uso e o suporte dos navegadores.',
  },
  'essential-git-workflows-developers': {
    title: 'Fluxos de trabalho Git essenciais que todo programador deve dominar em 2024',
    excerpt:
      'Melhore o controlo de versões com fluxos Git testados, desde feature branching até trunk-based development, e saiba quando aplicar cada um.',
  },
  'free-developer-tools-2024': {
    title: '15 ferramentas de desenvolvimento gratuitas que transformam o seu fluxo de trabalho',
    excerpt:
      'Deixe de pagar subscrições caras. Estas ferramentas gratuitas cobrem testes de API, design de bases de dados, criação de perfis e implementação.',
  },
  'macos-developer-setup-2024': {
    title: 'A configuração definitiva de macOS para programadores em 2024',
    excerpt:
      'Do terminal e gestão de janelas aos gestores de pacotes e IDE: tudo para transformar um Mac novo numa máquina produtiva.',
  },
  'typescript-advanced-patterns': {
    title: 'Padrões avançados de TypeScript para APIs com segurança de tipos',
    excerpt:
      'Tipos condicionais, template literals e mapped types permitem criar APIs que detetam erros em tempo de compilação.',
  },
  'unlocking-power-ai-future': {
    title: 'Libertar o poder da IA: como o machine learning está a transformar o mundo',
    excerpt:
      'Do diagnóstico médico às artes criativas, a IA transforma todos os setores. Descubra as tecnologias por trás desta revolução.',
  },
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
