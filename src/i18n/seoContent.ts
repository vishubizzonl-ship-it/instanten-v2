import type { LangCode } from './ui';

export interface SeoPageContent {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  subtitle: string;
}

export const seoHome: Record<LangCode, SeoPageContent> = {
  en: {
    title: 'Instanten — Free Instant Online Tools, Instant Convert & Instant Help',
    description:
      'Instanten offers free instant online tools, fast instant convert utilities, step-by-step guides, and instant help directly in your browser with zero sign-up. Verified with NIST, W3C WCAG 2.2, IETF RFC 8259 / 4648.',
    keywords:
      'free instant online tools, instant convert, instant help, instant online, instant tool, browser-based utilities, $0 USD, NIST, W3C WCAG 2.2, IETF RFC 8259, IETF RFC 4648, CommonMark, instant convert, instant tools, instant help',
    h1: 'Free Instant Online Tools',
    subtitle: 'Fast browser utilities, zero sign-up. Verified with real public standards.',
  },
  de: {
    title: 'Instanten — Kostenlose Online-Tools & Sofort-Konverter',
    description:
      'Instanten bietet kostenlose Online-Tools, schnelle Sofort-Konverter und praktische Anleitungen direkt im Browser — ohne Anmeldung, ohne Abonnement. Verifiziert mit NIST, W3C WCAG 2.2, IETF RFC 8259 / 4648.',
    keywords:
      'kostenlose online tools, sofort konverter, sofort-hilfe, browser-tools, $0 USD, NIST, W3C WCAG 2.2, IETF RFC 8259, IETF RFC 4648, instanten, kostenlose tools',
    h1: 'Kostenlose Online-Tools',
    subtitle: 'Schnelle Browser-Utilities — ohne Anmeldung, ohne Kosten.',
  },
  ja: {
    title: 'Instanten — 無料オンラインツール・即時変換',
    description:
      'Instantenは無料のオンラインツール、即時変換ユーティリティ、ステップガイドをブラウザ内で提供。登録不要、$0コスト。NIST、W3C WCAG 2.2、IETF RFC 8259 / 4648準拠。',
    keywords:
      '無料オンラインツール, 即時変換, ブラウザツール, $0コスト, NIST, W3C WCAG 2.2, IETF RFC 8259, IETF RFC 4648, インスタントツール, 無料ツール',
    h1: '無料オンラインツール',
    subtitle: '高速ブラウザユーティリティ — 登録不要、完全無料。',
  },
  fr: {
    title: 'Instanten — Outils en Ligne Gratuits & Convertisseur Instantané',
    description:
      'Instanten propose des outils en ligne gratuits, un convertisseur instantané rapide et des guides pratiques directement dans votre navigateur — sans inscription, sans abonnement. Vérifié avec NIST, W3C WCAG 2.2, IETF RFC 8259 / 4648.',
    keywords:
      'outils en ligne gratuits, convertisseur instantané, aide instantanée, outils navigateur, $0 USD, NIST, W3C WCAG 2.2, IETF RFC 8259, IETF RFC 4648, instanten, outils gratuits',
    h1: 'Outils en Ligne Gratuits',
    subtitle: 'Utilitaires rapides dans le navigateur — sans inscription, sans frais.',
  },
  es: {
    title: 'Instanten — Herramientas Online Gratis y Conversor Instantáneo',
    description:
      'Instanten ofrece herramientas online gratis, un conversor instantáneo rápido y guías prácticas directamente en su navegador — sin registro, sin suscripción. Verificado con NIST, W3C WCAG 2.2, IETF RFC 8259 / 4648.',
    keywords:
      'herramientas online gratis, conversor instantáneo, ayuda instantánea, herramientas navegador, $0 USD, NIST, W3C WCAG 2.2, IETF RFC 8259, IETF RFC 4648, instanten, herramientas gratis',
    h1: 'Herramientas Online Gratis',
    subtitle: 'Utilidades rápidas en el navegador — sin registro, sin costo.',
  },
  ko: {
    title: 'Instanten — 무료 온라인 도구 및 즉시 변환기',
    description:
      'Instanten은 무료 온라인 도구, 즉시 변환기, 단계별 가이드를 브라우저 내에서 제공 — 가입 불필요, $0 비용. NIST, W3C WCAG 2.2, IETF RFC 8259 / 4648 검증.',
    keywords:
      '무료 온라인 도구, 즉시 변환기, 즉시 도움, 브라우저 도구, $0 비용, NIST, W3C WCAG 2.2, IETF RFC 8259, IETF RFC 4648, 인스탄텐, 무료 도구',
    h1: '무료 온라인 도구',
    subtitle: '빠른 브라우저 유틸리티 — 가입 불필요, 완전 무료.',
  },
  nl: {
    title: 'Instanten — Gratis Online Tools & Direct Converteren',
    description:
      'Instanten biedt gratis online tools, een directe converter en praktische handleidingen rechtstreeks in uw browser — zonder registratie, zonder abonnement. Geverifieerd met NIST, W3C WCAG 2.2, IETF RFC 8259 / 4648.',
    keywords:
      'gratis online tools, direct converteren, directe hulp, browser hulpmiddelen, $0 USD, NIST, W3C WCAG 2.2, IETF RFC 8259, IETF RFC 4648, instanten, gratis tools',
    h1: 'Gratis Online Tools',
    subtitle: 'Snelle browser-hulpmiddelen — zonder registratie, zonder kosten.',
  },
  sv: {
    title: 'Instanten — Gratis Onlineverktyg & Direktkonvertering',
    description:
      'Instanten erbjuder gratis onlineverktyg, direktkonvertering och praktiska guider direkt i din webbläsare — utan registrering, utan prenumeration. Verifierad med NIST, W3C WCAG 2.2, IETF RFC 8259 / 4648.',
    keywords:
      'gratis onlineverktyg, direktkonvertering, direkt hjälp, webbläsarverktyg, $0 USD, NIST, W3C WCAG 2.2, IETF RFC 8259, IETF RFC 4648, instanten, gratis verktyg',
    h1: 'Gratis Onlineverktyg',
    subtitle: 'Snabba webbläsarverktyg — utan registrering, utan kostnad.',
  },
  it: {
    title: 'Instanten — Strumenti Online Gratuiti & Convertitore Istantaneo',
    description:
      'Instanten offre strumenti online gratuiti, un convertitore istantaneo veloce e guide pratiche direttamente nel tuo browser — senza registrazione, senza abbonamento. Verificato con NIST, W3C WCAG 2.2, IETF RFC 8259 / 4648.',
    keywords:
      'strumenti online gratuiti, convertitore istantaneo, aiuto istantaneo, strumenti browser, $0 USD, NIST, W3C WCAG 2.2, IETF RFC 8259, IETF RFC 4648, instanten, strumenti gratis',
    h1: 'Strumenti Online Gratuiti',
    subtitle: 'Strumenti rapidi nel browser — senza registrazione, senza costo.',
  },
  pt: {
    title: 'Instanten — Ferramentas Online Grátis & Conversor Instantâneo',
    description:
      'Instanten oferece ferramentas online grátis, um conversor instantâneo rápido e guias práticos diretamente no seu navegador — sem cadastro, sem assinatura. Verificado com NIST, W3C WCAG 2.2, IETF RFC 8259 / 4648.',
    keywords:
      'ferramentas online grátis, conversor instantâneo, ajuda instantânea, ferramentas navegador, $0 USD, NIST, W3C WCAG 2.2, IETF RFC 8259, IETF RFC 4648, instanten, ferramentas grátis',
    h1: 'Ferramentas Online Grátis',
    subtitle: 'Utilidades rápidas no navegador — sem cadastro, sem custo.',
  },
};

export const seoAbout: Record<LangCode, SeoPageContent> = {
  en: {
    title: 'About Instanten — Independent Free Software Project',
    description:
      'Instanten is an independent browser-based software project. No fake office, no fake authors, no paid SaaS upsell. Every tool references real public standards.',
    keywords: 'about instanten, independent software project, free tools, real standards, NIST, W3C',
    h1: 'About Instanten',
    subtitle: 'An independent, transparent software project.',
  },
  de: {
    title: 'Über Instanten — Unabhängiges Freies Software-Projekt',
    description:
      'Instanten ist ein unabhängiges browserbasiertes Software-Projekt. Kein gefälschtes Büro, keine gefälschten Autoren, kein bezahltes SaaS-Upsell. Jedes Tool verweist auf echte öffentliche Standards.',
    keywords: 'über instanten, unabhängiges software projekt, kostenlose tools, echte standards, NIST, W3C',
    h1: 'Über Instanten',
    subtitle: 'Ein unabhängiges, transparentes Software-Projekt.',
  },
  ja: {
    title: 'Instantenについて — 独立した無料ソフトウェアプロジェクト',
    description:
      'Instantenは独立したブラウザベースのソフトウェアプロジェクトです。偽のオフィス、偽の作者、有料SaaSのアップセルは一切ありません。すべてのツールは実際の公的規格を参照しています。',
    keywords: 'instanten について, 独立ソフトウェアプロジェクト, 無料ツール, 実際の規格, NIST, W3C',
    h1: 'Instantenについて',
    subtitle: '独立した透明性のあるソフトウェアプロジェクト。',
  },
  fr: {
    title: 'À propos d\'Instanten — Projet Logiciel Libre Indépendant',
    description:
      'Instanten est un projet logiciel indépendant basé sur le navigateur. Pas de faux bureau, pas de faux auteurs, pas d\'upsell SaaS payant. Chaque outil fait référence à de vraies normes publiques.',
    keywords: 'à propos instanten, projet logiciel indépendant, outils gratuits, normes réelles, NIST, W3C',
    h1: 'À propos d\'Instanten',
    subtitle: 'Un projet logiciel indépendant et transparent.',
  },
  es: {
    title: 'Acerca de Instanten — Proyecto de Software Libre Independiente',
    description:
      'Instanten es un proyecto de software independiente basado en el navegador. Sin oficina falsa, sin autores falsos, sin upsell de SaaS pagado. Cada herramienta hace referencia a normas públicas reales.',
    keywords: 'acerca de instanten, proyecto software independiente, herramientas gratis, normas reales, NIST, W3C',
    h1: 'Acerca de Instanten',
    subtitle: 'Un proyecto de software independiente y transparente.',
  },
  ko: {
    title: 'Instanten 소개 — 독립적인 무료 소프트웨어 프로젝트',
    description:
      'Instanten은 독립적인 브라우저 기반 소프트웨어 프로젝트입니다. 가짜 사무실, 가짜 저자, 유료 SaaS 업셀은 전혀 없습니다. 모든 도구는 실제 공공 표준을 참조합니다.',
    keywords: 'instanten 소개, 독립 소프트웨어 프로젝트, 무료 도구, 실제 표준, NIST, W3C',
    h1: 'Instanten 소개',
    subtitle: '독립적이고 투명한 소프트웨어 프로젝트.',
  },
  nl: {
    title: 'Over Instanten — Onafhankelijk Gratis Softwareproject',
    description:
      'Instanten is een onafhankelijk browsergebaseerd softwareproject. Geen nep kantoor, geen nep auteurs, geen betaalde SaaS upsell. Elke tool verwijst naar echte publieke normen.',
    keywords: 'over instanten, onafhankelijk softwareproject, gratis tools, echte normen, NIST, W3C',
    h1: 'Over Instanten',
    subtitle: 'Een onafhankelijk, transparant softwareproject.',
  },
  sv: {
    title: 'Om Instanten — Oberoende Gratis Mjukvaruprojekt',
    description:
      'Instanten är ett oberoende webbläsarbaserat mjukvaruprojekt. Inget falskt kontor, inga falska författare, ingen betald SaaS upsell. Varje verktyg hänvisar till verkliga offentliga standarder.',
    keywords: 'om instanten, oberoende mjukvaruprojekt, gratis verktyg, verkliga standarder, NIST, W3C',
    h1: 'Om Instanten',
    subtitle: 'Ett oberoende, transparent mjukvaruprojekt.',
  },
  it: {
    title: 'Chi è Instanten — Progetto Software Libero Indipendente',
    description:
      'Instanten è un progetto software indipendente basato sul browser. Nessun ufficio falso, nessun autore falso, nessun upsell SaaS a pagamento. Ogni strumento fa riferimento a veri standard pubblici.',
    keywords: 'chi è instanten, progetto software indipendente, strumenti gratuiti, standard reali, NIST, W3C',
    h1: 'Chi è Instanten',
    subtitle: 'Un progetto software indipendente e trasparente.',
  },
  pt: {
    title: 'Sobre a Instanten — Projeto de Software Livre Independente',
    description:
      'Instanten é um projeto de software independente baseado no navegador. Sem escritório falso, sem autores falsos, sem upsell de SaaS pago. Cada ferramenta faz referência a padrões públicos reais.',
    keywords: 'sobre instanten, projeto software independente, ferramentas grátis, padrões reais, NIST, W3C',
    h1: 'Sobre a Instanten',
    subtitle: 'Um projeto de software independente e transparente.',
  },
};
