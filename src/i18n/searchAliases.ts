/**
 * Search aliases — "jo log bolte hain" wale shabd.
 *
 * Problem: tool ka naam "オンラインコンパス" hai, par Japanese user kabhi
 * "方位磁針" (compass ka asli Japanese lafz) ya "羅針盤" search karta hai.
 * Naam/description me wo shabd nahi hote, isliye tool results me nahi aata.
 * Yahi baat har bhasha par hai — German user "Bussole", Spanish user "brújula",
 * French user "boussole" likh sakta hai.
 *
 * Yahan har tool ke liye us bhasha ke aam shabd (synonyms) rakhe gaye hain.
 * Ye sirf search index me jaate hain — page par kahin dikhte nahi, isliye
 * copy/design par koi asar nahi.
 *
 * `en` wale shabd HAR bhasha me add hote hain (toolSearchAliases dekho): kai log
 * localized page par bhi English naam se search karte hain ("compass"), aur
 * unhe bhi result milna chahiye.
 */
import type { LangCode } from './ui';

type AliasMap = Record<string, Partial<Record<LangCode, string>>>;

/**
 * Har entry: slug → lang → space-separated words.
 * Sirf wahi shabd jo us bhasha me sach me bole/likhe jaate hain.
 */
const ALIASES: AliasMap = {
  onlinecompass: {
    en: 'compass direction north bearing magnet needle orientation',
    de: 'kompass bussole nadel richtung norden',
    ja: 'コンパス 方位磁針 羅針盤 方角 北 方位 磁石 コンパスアプリ',
    fr: 'boussole compas direction nord aiguille',
    es: 'brújula compás direccion norte aguja',
    ko: '나침반 방위 방향 북쪽 자침 나침반 앱',
    nl: 'kompas richting noorden naald',
    sv: 'kompass kompassnål riktning norr',
    it: 'bussola compasso direzione nord ago',
    pt: 'bússola direção norte agulha',
  },
  onlinebubblelevel: {
    en: 'bubble level spirit level tilt incline angle straight',
    de: 'wasserwaage libelle neigung waagerecht ausrichten waage',
    ja: '水平器 水準器 傾き 傾斜 水平 まっすぐ バブルレベル レベル 傾斜計 角度 角度計 バブル水準器 水平をとる',
    fr: 'niveau à bulle nivelle inclinaison horizontal bulle',
    es: 'nivel burbuja inclinación horizontal nivel de burbuja',
    ko: '수평계 수준기 기울기 수평 각도 각도기 버블레벨 버블 레벨 수평기',
    nl: 'waterpas helling waterpas zetten',
    sv: 'vattenpass lutning horisontell',
    it: 'livella bolla inclinazione orizzontale',
    pt: 'nível bolha inclinação horizontal',
  },
  onlinespeedometer: {
    en: 'speedometer speed gps velocity kmh kph mph odometer trip',
    de: 'tachometer tacho geschwindigkeit tempo kmh km/h kilometer pro stunde',
    ja: '速度計 スピードメーター 速度 時速 スピード メーター 速度測定 スピード計 キロ キロメートル',
    fr: 'compteur de vitesse vitesse kmh km/h tachymètre',
    es: 'velocímetro velocimetro velocidad kmh km/h',
    ko: '속도계 속력 속도 시속 스피드 스피드계 kmh',
    nl: 'snelheidsmeter snelheid vaart kmh km/u',
    sv: 'hastighetsmätare hastighet fart kmh km/h',
    it: 'tachimetro velocità contachilometri kmh',
    pt: 'velocímetro velocidade kmh km/h',
  },
  onlineqibla: {
    en: 'qibla qiblah mecca makkah kaaba prayer direction muslim islam namaz salah',
    de: 'qibla mekka gebetsrichtung kaaba beten gebet islam muslim',
    ja: 'キブラ きぶら メッカ カーバ 礼拝の方角 方角 聖地 礼拝 イスラム ムスリム メッカの方角',
    fr: 'qibla mecque kaaba direction prière islam musulman orientation',
    es: 'qibla meca kaaba dirección oración rezo islam musulmán orientación',
    ko: '키블라 메카 카바 예배 방향 성지 기도 이슬람 무슬림',
    nl: 'qibla mekka gebedsrichting kaaba gebed islam moslim',
    sv: 'qibla mecka böneriktning kaaba bön islam muslim',
    it: 'qibla mecca kaaba direzione preghiera islam musulmano',
    pt: 'qibla meca caaba direção oração islã muçulmano',
  },
};

/**
 * Ek tool ke search shabd us bhasha ke liye.
 *
 * English shabd hamesha saath aate hain (localized page par English query bhi
 * chalti rahe), aur duplicate hataye jaate hain.
 */
export function toolSearchAliases(slug: string, lang: LangCode): string {
  const entry = ALIASES[slug];
  if (!entry) return '';
  const parts = [entry[lang] || '', entry.en || ''].join(' ');
  const seen = new Set<string>();
  return parts
    .split(/\s+/)
    .map((word) => word.trim())
    .filter((word) => {
      if (!word) return false;
      const key = word.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join(' ');
}

/** Alias entry wale saare slugs (tests ke liye). */
export function aliasedSlugs(): string[] {
  return Object.keys(ALIASES);
}
