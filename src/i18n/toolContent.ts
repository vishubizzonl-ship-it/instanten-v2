import type { LangCode } from './ui';
import { instrumentToolCopy } from './instruments/toolCopy';

export interface ToolCopy {
  name: string;
  description: string;
}

export type ToolCopyBySlug = Record<string, ToolCopy>;

const en: ToolCopyBySlug = {
};

const de: ToolCopyBySlug = {
};

const ja: ToolCopyBySlug = {
};

const fr: ToolCopyBySlug = {
};

const es: ToolCopyBySlug = {
};

const ko: ToolCopyBySlug = {
};

const nl: ToolCopyBySlug = {
};

const sv: ToolCopyBySlug = {
};

const it: ToolCopyBySlug = {
};

const pt: ToolCopyBySlug = {
};

export const toolCopy: Record<LangCode, ToolCopyBySlug> = {
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

export function localizeTool(
  lang: LangCode,
  tool: { slug: string; name: string; description: string }
): ToolCopy {
  // Sensor tools (compass / bubble level / speedometer / Qibla) apna localized
  // copy alag module mein rakhte hain — instrument ka data wahi rehta hai.
  const localized = toolCopy[lang]?.[tool.slug] ?? instrumentToolCopy[lang]?.[tool.slug];
  return {
    name: localized?.name || tool.name,
    description: localized?.description || tool.description,
  };
}

export const toolCategoryLabels: Record<LangCode, Record<string, string>> = {
  en: {},
  de: {
    Design: 'Design',
    Developer: 'Entwicklung',
    Marketing: 'Marketing',
    Productivity: 'Produktivität',
    Utility: 'Dienstprogramme',
    Writing: 'Schreiben',
  },
  ja: {
    Design: 'デザイン',
    Developer: '開発',
    Marketing: 'マーケティング',
    Productivity: '生産性',
    Utility: 'ユーティリティ',
    Writing: 'ライティング',
  },
  fr: {
    Design: 'Design',
    Developer: 'Développement',
    Marketing: 'Marketing',
    Productivity: 'Productivité',
    Utility: 'Utilitaires',
    Writing: 'Rédaction',
  },
  es: {
    Design: 'Diseño',
    Developer: 'Desarrollo',
    Marketing: 'Marketing',
    Productivity: 'Productividad',
    Utility: 'Utilidades',
    Writing: 'Redacción',
  },
  ko: {
    Design: '디자인',
    Developer: '개발',
    Marketing: '마케팅',
    Productivity: '생산성',
    Utility: '유틸리티',
    Writing: '글쓰기',
  },
  nl: {
    Design: 'Design',
    Developer: 'Ontwikkeling',
    Marketing: 'Marketing',
    Productivity: 'Productiviteit',
    Utility: 'Hulpprogramma’s',
    Writing: 'Schrijven',
  },
  sv: {
    Design: 'Design',
    Developer: 'Utveckling',
    Marketing: 'Marknadsföring',
    Productivity: 'Produktivitet',
    Utility: 'Verktyg',
    Writing: 'Skrivande',
  },
  it: {
    Design: 'Design',
    Developer: 'Sviluppo',
    Marketing: 'Marketing',
    Productivity: 'Produttività',
    Utility: 'Utilità',
    Writing: 'Scrittura',
  },
  pt: {
    Design: 'Design',
    Developer: 'Programação',
    Marketing: 'Marketing',
    Productivity: 'Produtividade',
    Utility: 'Utilitários',
    Writing: 'Escrita',
  },
};

export const pricingLabels: Record<LangCode, Record<string, string>> = {
  en: {},
  de: { Free: 'Kostenlos', Freemium: 'Freemium', Paid: 'Kostenpflichtig' },
  ja: { Free: '無料', Freemium: 'フリーミアム', Paid: '有料' },
  fr: { Free: 'Gratuit', Freemium: 'Freemium', Paid: 'Payant' },
  es: { Free: 'Gratis', Freemium: 'Freemium', Paid: 'De pago' },
  ko: { Free: '무료', Freemium: '프리미엄', Paid: '유료' },
  nl: { Free: 'Gratis', Freemium: 'Freemium', Paid: 'Betaald' },
  sv: { Free: 'Gratis', Freemium: 'Freemium', Paid: 'Betald' },
  it: { Free: 'Gratuito', Freemium: 'Freemium', Paid: 'A pagamento' },
  pt: { Free: 'Gratuito', Freemium: 'Freemium', Paid: 'Pago' },
};

export function localizeToolCategory(lang: LangCode, category: string): string {
  return toolCategoryLabels[lang]?.[category] || category;
}

export function localizePricing(lang: LangCode, pricing: string): string {
  return pricingLabels[lang]?.[pricing] || pricing;
}

export const pricingNotes: Record<LangCode, Record<string, string>> = {
  en: {
    Free: 'Completely free with no account required and no hidden limits.',
    Freemium: 'A free tier is available, with optional paid features for advanced workflows.',
    Paid: 'A paid tool with transparent pricing and no hidden fees.',
  },
  de: {
    Free: 'Vollständig kostenlos, ohne Konto und ohne versteckte Limits.',
    Freemium: 'Eine kostenlose Variante ist verfügbar; erweiterte Funktionen sind optional kostenpflichtig.',
    Paid: 'Ein kostenpflichtiges Tool mit transparenten Preisen und ohne versteckte Gebühren.',
  },
  ja: {
    Free: 'アカウント不要、隠れた制限なしで完全無料です。',
    Freemium: '無料プランがあり、高度な機能はオプションの有料プランで利用できます。',
    Paid: '透明な価格設定の有料ツールで、隠れた費用はありません。',
  },
  fr: {
    Free: 'Entièrement gratuit, sans compte ni limite cachée.',
    Freemium: 'Une offre gratuite est disponible, avec des fonctions avancées payantes en option.',
    Paid: 'Un outil payant avec une tarification transparente et sans frais cachés.',
  },
  es: {
    Free: 'Totalmente gratis, sin cuenta ni límites ocultos.',
    Freemium: 'Hay un plan gratuito disponible, con funciones avanzadas opcionales de pago.',
    Paid: 'Herramienta de pago con precios transparentes y sin cargos ocultos.',
  },
  ko: {
    Free: '계정 없이 숨은 제한 없이 완전 무료입니다.',
    Freemium: '무료 요금제가 있으며 고급 기능은 선택형 유료로 제공됩니다.',
    Paid: '투명한 가격의 유료 도구이며 숨은 비용이 없습니다.',
  },
  nl: {
    Free: 'Volledig gratis zonder account en zonder verborgen limieten.',
    Freemium: 'Er is een gratis variant; geavanceerde functies zijn optioneel betaald.',
    Paid: 'Een betaald hulpmiddel met transparante prijzen en zonder verborgen kosten.',
  },
  sv: {
    Free: 'Helt gratis utan konto och utan dolda gränser.',
    Freemium: 'En gratis nivå finns, med valfria betalfunktioner för avancerade flöden.',
    Paid: 'Ett betalverktyg med transparent prissättning och inga dolda avgifter.',
  },
  it: {
    Free: 'Completamente gratuito, senza account e senza limiti nascosti.',
    Freemium: 'È disponibile un piano gratuito, con funzioni avanzate opzionali a pagamento.',
    Paid: 'Uno strumento a pagamento con prezzi trasparenti e senza costi nascosti.',
  },
  pt: {
    Free: 'Totalmente gratuito, sem conta e sem limites ocultos.',
    Freemium: 'Existe um plano gratuito, com funcionalidades avançadas opcionais pagas.',
    Paid: 'Ferramenta paga com preços transparentes e sem custos ocultos.',
  },
};

export function getPricingNote(lang: LangCode, pricing: string): string {
  return pricingNotes[lang]?.[pricing] || pricingNotes.en[pricing] || pricingNotes.en.Free;
}
