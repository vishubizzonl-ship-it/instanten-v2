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
  'json-formatter': {
    en: 'json prettify pretty beautify validate minify parse format json',
    de: 'json formatieren verschönern prüfen validieren',
    ja: 'json 整形 フォーマット 検証 圧縮 整える',
    fr: 'json formater embellir valider minifier',
    es: 'json formatear validar minificar',
    ko: 'json 정렬 포맷 검증 압축',
    nl: 'json formatteren mooier maken valideren',
    sv: 'json formatera validera',
    it: 'json formattare validare minificare',
    pt: 'json formatar validar minificar',
  },
  'base64-encoder': {
    en: 'base64 encode decode converter string to base64',
    de: 'base64 kodieren dekodieren umwandeln',
    ja: 'base64 エンコード デコード 変換 エンコード',
    fr: 'base64 encoder décoder convertir',
    es: 'base64 codificar decodificar convertir',
    ko: 'base64 인코딩 디코딩 변환',
    nl: 'base64 coderen decoderen omzetten',
    sv: 'base64 koda avkoda konvertera',
    it: 'base64 codificare decodificare convertire',
    pt: 'base64 codificar decodificar converter',
  },
  'word-counter': {
    en: 'word count counter characters letters sentences paragraphs reading time',
    de: 'wörter zählen zeichen zählen text länge',
    ja: '文字数 単語数 カウント 文字カウント 原稿',
    fr: 'compter les mots caractères texte',
    es: 'contar palabras caracteres texto',
    ko: '글자수 단어수 세기 카운터',
    nl: 'woorden tellen tekens tekst',
    sv: 'ordräkning räkna ord tecken',
    it: 'contare parole caratteri testo',
    pt: 'contar palavras caracteres texto',
  },
  'qr-generator': {
    en: 'qr code generator barcode scan wifi vcard url',
    de: 'qr code generator erstellen barcode',
    ja: 'qr コード 二次元コード 作成 生成 バーコード',
    fr: 'qr code générateur code barre',
    es: 'qr código generador',
    ko: 'qr 코드 생성 바코드',
    nl: 'qr code generator maken',
    sv: 'qr kod generator skapa',
    it: 'qr code generatore',
    pt: 'qr código gerador',
  },
  'password-generator': {
    en: 'password generator random strong secure passphrase',
    de: 'passwort generator zufällig sicher',
    ja: 'パスワード 生成 ランダム 安全 パスワード作成 乱数 パスワード生成',
    fr: 'mot de passe générateur aléatoire sécurisé',
    es: 'contraseña generador aleatorio seguro',
    ko: '비밀번호 생성 랜덤 암호 비밀번호 만들기',
    nl: 'wachtwoord generator willekeurig',
    sv: 'lösenord generator slumpmässigt',
    it: 'password generatore casuale sicura',
    pt: 'senha gerador aleatório seguro',
  },
  'regex-tester': {
    en: 'regex regular expression tester debug match pattern',
    de: 'regex regulärer ausdruck testen prüfen',
    ja: '正規表現 テスト 置換 マッチ チェック',
    fr: 'regex expression régulière tester',
    es: 'regex expresión regular probar',
    ko: '정규식 정규 표현식 테스트',
    nl: 'regex reguliere expressie testen',
    sv: 'regex reguljärt uttryck testa',
    it: 'regex espressione regolare testare',
    pt: 'regex expressão regular testar',
  },
  'markdown-editor': {
    en: 'markdown editor preview html converter md',
    de: 'markdown editor vorschau html umwandeln',
    ja: 'マークダウン エディタ プレビュー 変換',
    fr: 'markdown éditeur aperçu convertir',
    es: 'markdown editor vista previa convertir',
    ko: '마크다운 에디터 미리보기 변환',
    nl: 'markdown editor voorbeeld converteren',
    sv: 'markdown editor förhandsvisning',
    it: 'markdown editor anteprima convertire',
    pt: 'markdown editor visualizar converter',
  },
  'image-compressor': {
    en: 'image compressor compress photo reduce size jpg png webp',
    de: 'bild komprimieren foto verkleinern',
    ja: '画像 圧縮 写真 サイズ 縮小 jpg png',
    fr: 'image compresser réduire photo',
    es: 'imagen comprimir reducir foto',
    ko: '이미지 압축 사진 줄이기',
    nl: 'afbeelding comprimeren foto verkleinen',
    sv: 'bild komprimera foto förminska',
    it: 'immagine comprimere ridurre foto',
    pt: 'imagem comprimir reduzir foto',
  },
  'online-ruler': {
    en: 'online ruler measure cm inch screen actual size',
    de: 'lineal messen zentimeter zoll',
    ja: '定規 ものさし 測定 cm インチ 画面 長さ センチ 長さ測定',
    fr: 'règle mesurer centimètre pouce',
    es: 'regla medir centímetro pulgada',
    ko: '자 눈금 측정 센치 인치 길이 길이측정',
    nl: 'liniaal meten centimeter inch',
    sv: 'linjal mäta centimeter tum',
    it: 'righello misurare centimetro pollice',
    pt: 'régua medir centímetro polegada',
  },
  'meta-tag-generator': {
    en: 'meta tags generator seo og title description',
    de: 'meta tags generator seo titel beschreibung',
    ja: 'メタタグ 生成 seo タイトル ディスクリプション',
    fr: 'balises meta générateur seo',
    es: 'meta etiquetas generador seo',
    ko: '메타 태그 생성 seo',
    nl: 'meta tags generator seo',
    sv: 'meta taggar generator seo',
    it: 'meta tag generatore seo',
    pt: 'meta tags gerador seo',
  },
  'css-grid-generator': {
    en: 'css grid generator layout columns rows',
    de: 'css grid generator layout spalten',
    ja: 'css グリッド 生成 レイアウト 列',
    fr: 'css grid générateur mise en page',
    es: 'css grid generador diseño',
    ko: 'css 그리드 생성 레이아웃',
    nl: 'css grid generator lay-out',
    sv: 'css grid generator layout',
    it: 'css grid generatore layout',
    pt: 'css grid gerador layout',
  },
  'color-palette': {
    en: 'color palette generator hex contrast wcag scheme',
    de: 'farbpalette generator kontrast farben',
    ja: 'カラーパレット 配色 生成 色彩 コントラスト',
    fr: 'palette de couleurs générateur contraste',
    es: 'paleta de colores generador contraste',
    ko: '색상 팔레트 생성 대비',
    nl: 'kleurenpalet generator contrast',
    sv: 'färgpalett generator kontrast',
    it: 'palette colori generatore contrasto',
    pt: 'paleta de cores gerador contraste',
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
