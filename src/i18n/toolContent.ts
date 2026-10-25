import type { LangCode } from './ui';

export interface ToolCopy {
  name: string;
  description: string;
}

export type ToolCopyBySlug = Record<string, ToolCopy>;

const en: ToolCopyBySlug = {
  'base64-encoder': {
    name: 'Base64 Encoder/Decoder',
    description:
      'Encode and decode Base64 strings instantly using IETF RFC 4648 — handle text, files, and images with UTF-8 support, all locally in your browser.',
  },
  'color-palette': {
    name: 'Color Palette',
    description:
      'Generate harmonious accessible color palettes from a single color with WCAG 2.2 Level AA contrast verification for ADA and Section 508 compliance.',
  },
  'css-grid-generator': {
    name: 'CSS Grid Generator',
    description:
      'Visually build responsive CSS Grid layouts using W3C CSS Grid specifications with clean, production-ready output for frontend developers.',
  },
  'image-compressor': {
    name: 'Image Compressor',
    description:
      'Compress images without losing quality for faster e-commerce listings, blog assets, and web performance. Client-side Canvas/WebP compression keeps images on your device.',
  },
  'json-formatter': {
    name: 'JSON Formatter',
    description:
      'Format, validate, and beautify JSON data with syntax highlighting, error detection, and tree view — all validated against IETF RFC 8259.',
  },
  'markdown-editor': {
    name: 'Markdown Editor',
    description:
      'Write and preview Markdown with live rendering, syntax highlighting, and CommonMark-compliant export options for writers, students, and developers.',
  },
  'meta-tag-generator': {
    name: 'Meta Tag Generator',
    description:
      'Generate HTML meta tags for SEO, Open Graph, Twitter Cards, and Google Search Central-compliant snippets — copy-paste ready for any website.',
  },
  'online-ruler': {
    name: 'Online Ruler',
    description:
      'Measure anything on your screen with pixel-perfect accuracy. A lightweight browser-based ruler for designers and developers using standard units.',
  },
  'password-generator': {
    name: 'Password Generator',
    description:
      'Generate secure random passwords with customizable length, character sets, and entropy estimation.',
  },
  'qr-generator': {
    name: 'QR Generator',
    description:
      'Create custom QR codes instantly. Generate codes for URLs, text, WiFi, contacts, and more with design options.',
  },
  'regex-tester': {
    name: 'Regex Tester',
    description:
      'Test and debug regular expressions with real-time matching, explanation, and cheat sheet.',
  },
  'word-counter': {
    name: 'Word Counter',
    description:
      'Count words, characters, sentences, and paragraphs instantly. Real-time stats with reading time estimates.',
  },
};

const de: ToolCopyBySlug = {
  'base64-encoder': {
    name: 'Base64-Encoder/Decoder',
    description:
      'Kodiere und dekodiere Base64-Strings sofort nach IETF RFC 4648 – für Text, Dateien und Bilder mit UTF-8-Unterstützung, vollständig lokal im Browser.',
  },
  'color-palette': {
    name: 'Farbpalette',
    description:
      'Erzeuge harmonische, barrierefreie Farbpaletten aus einer Farbe mit WCAG-2.2-AA-Kontrastprüfung für ADA- und Section-508-Konformität.',
  },
  'css-grid-generator': {
    name: 'CSS-Grid-Generator',
    description:
      'Erstelle responsive CSS-Grid-Layouts visuell nach W3C-Spezifikation mit sauberem, produktionsbereitem Code für Frontend-Entwickler.',
  },
  'image-compressor': {
    name: 'Bildkomprimierer',
    description:
      'Komprimiere Bilder ohne Qualitätsverlust für schnellere Shops, Blog-Assets und Web-Performance. Canvas/WebP-Komprimierung direkt im Browser.',
  },
  'json-formatter': {
    name: 'JSON-Formatierer',
    description:
      'Formatiere, validiere und verschönere JSON-Daten mit Syntaxhervorhebung, Fehlererkennung und Baumansicht – geprüft nach IETF RFC 8259.',
  },
  'markdown-editor': {
    name: 'Markdown-Editor',
    description:
      'Schreibe und zeige Markdown mit Live-Vorschau, Syntaxhervorhebung und CommonMark-konformen Exportoptionen für Autoren, Studierende und Entwickler.',
  },
  'meta-tag-generator': {
    name: 'Meta-Tag-Generator',
    description:
      'Erzeuge HTML-Meta-Tags für SEO, Open Graph, Twitter Cards und Google-Search-Central-Snippets – direkt zum Kopieren für jede Website.',
  },
  'online-ruler': {
    name: 'Online-Lineal',
    description:
      'Miss alles auf deinem Bildschirm pixelgenau. Ein leichtes browserbasiertes Lineal für Designer und Entwickler mit Standardeinheiten.',
  },
  'password-generator': {
    name: 'Passwortgenerator',
    description:
      'Erzeuge sichere Zufallspasswörter mit anpassbarer Länge, Zeichensätzen und Entropieschätzung.',
  },
  'qr-generator': {
    name: 'QR-Generator',
    description:
      'Erstelle sofort individuelle QR-Codes für URLs, Text, WLAN, Kontakte und mehr – mit Gestaltungsoptionen.',
  },
  'regex-tester': {
    name: 'Regex-Tester',
    description:
      'Teste und debugge reguläre Ausdrücke mit Echtzeit-Abgleich, Erklärungen und Spickzettel.',
  },
  'word-counter': {
    name: 'Wortzähler',
    description:
      'Zähle Wörter, Zeichen, Sätze und Absätze sofort. Echtzeit-Statistiken mit geschätzter Lesezeit.',
  },
};

const ja: ToolCopyBySlug = {
  'base64-encoder': {
    name: 'Base64 エンコーダー/デコーダー',
    description:
      'IETF RFC 4648 に基づいて Base64 文字列を即座に変換。UTF-8 対応でテキスト、ファイル、画像をすべてブラウザ内で安全に処理します。',
  },
  'color-palette': {
    name: 'カラーパレット',
    description:
      '1 つの色から調和の取れたアクセシブルな配色を生成。WCAG 2.2 AA のコントラスト検証で ADA・Section 508 対応を支援します。',
  },
  'css-grid-generator': {
    name: 'CSS Grid ジェネレーター',
    description:
      'W3C の CSS Grid 仕様に沿ってレスポンシブなグリッドを視覚的に作成。フロントエンド開発者向けの実用的なコードを出力します。',
  },
  'image-compressor': {
    name: '画像圧縮',
    description:
      '画質を保ちながら画像を圧縮し、EC サイトやブログ、Web パフォーマンスを改善。Canvas/WebP で端末内のみで処理します。',
  },
  'json-formatter': {
    name: 'JSON フォーマッター',
    description:
      'JSON を整形・検証・ハイライト表示。エラー検出とツリー表示を備え、IETF RFC 8259 に準拠しています。',
  },
  'markdown-editor': {
    name: 'Markdown エディター',
    description:
      'Markdown をリアルタイムプレビュー付きで執筆。シンタックスハイライトと CommonMark 準拠のエクスポートに対応します。',
  },
  'meta-tag-generator': {
    name: 'メタタグジェネレーター',
    description:
      'SEO、Open Graph、Twitter Cards、Google Search Central 向けの HTML メタタグを生成。コピーするだけで使えます。',
  },
  'online-ruler': {
    name: 'オンライン定規',
    description:
      '画面上のあらゆるものをピクセル単位で正確に測定。標準単位に対応した軽量なブラウザベースの定規です。',
  },
  'password-generator': {
    name: 'パスワードジェネレーター',
    description:
      '長さや文字種をカスタマイズして安全なランダムパスワードを生成。エントロピー推定も表示します。',
  },
  'qr-generator': {
    name: 'QR ジェネレーター',
    description:
      'URL、テキスト、Wi-Fi、連絡先などのカスタム QR コードをデザインオプション付きで即座に作成できます。',
  },
  'regex-tester': {
    name: '正規表現テスター',
    description:
      '正規表現をリアルタイム照合・解説・チートシート付きでテストおよびデバッグできます。',
  },
  'word-counter': {
    name: '文字数カウント',
    description:
      '単語数、文字数、文数、段落数を即座にカウント。読了時間の推定付きでリアルタイムに表示します。',
  },
};

const fr: ToolCopyBySlug = {
  'base64-encoder': {
    name: 'Encodeur/Décodeur Base64',
    description:
      "Encodez et décodez instantanément des chaînes Base64 selon l'IETF RFC 4648 — texte, fichiers et images avec prise en charge UTF-8, entièrement dans le navigateur.",
  },
  'color-palette': {
    name: 'Palette de couleurs',
    description:
      "Générez des palettes harmonieuses et accessibles à partir d'une couleur avec vérification des contrastes WCAG 2.2 AA pour la conformité ADA et Section 508.",
  },
  'css-grid-generator': {
    name: 'Générateur CSS Grid',
    description:
      'Créez visuellement des mises en page CSS Grid responsives selon les spécifications W3C, avec un code propre prêt pour la production.',
  },
  'image-compressor': {
    name: "Compresseur d'images",
    description:
      "Compressez vos images sans perte de qualité pour des fiches produit, blogs et performances web plus rapides. Compression Canvas/WebP directement sur votre appareil.",
  },
  'json-formatter': {
    name: 'Formateur JSON',
    description:
      "Formatez, validez et embellissez du JSON avec coloration syntaxique, détection d'erreurs et vue arborescente — conforme à l'IETF RFC 8259.",
  },
  'markdown-editor': {
    name: 'Éditeur Markdown',
    description:
      'Écrivez et prévisualisez du Markdown en direct avec coloration syntaxique et export compatible CommonMark pour rédacteurs, étudiants et développeurs.',
  },
  'meta-tag-generator': {
    name: 'Générateur de balises meta',
    description:
      'Générez des balises meta HTML pour le SEO, Open Graph, Twitter Cards et Google Search Central — prêtes à copier-coller.',
  },
  'online-ruler': {
    name: 'Règle en ligne',
    description:
      "Mesurez n'importe quoi à l'écran au pixel près. Une règle légère dans le navigateur avec unités standard pour designers et développeurs.",
  },
  'password-generator': {
    name: 'Générateur de mots de passe',
    description:
      'Générez des mots de passe aléatoires sécurisés avec longueur et jeux de caractères personnalisables, ainsi que l’estimation de l’entropie.',
  },
  'qr-generator': {
    name: 'Générateur QR',
    description:
      'Créez instantanément des QR codes personnalisés pour URL, texte, Wi-Fi, contacts et plus encore avec des options de design.',
  },
  'regex-tester': {
    name: 'Testeur Regex',
    description:
      'Testez et déboguez vos expressions régulières avec correspondance en temps réel, explications et aide-mémoire.',
  },
  'word-counter': {
    name: 'Compteur de mots',
    description:
      'Comptez instantanément mots, caractères, phrases et paragraphes. Statistiques en temps réel avec estimation du temps de lecture.',
  },
};

const es: ToolCopyBySlug = {
  'base64-encoder': {
    name: 'Codificador/Decodificador Base64',
    description:
      'Codifica y decodifica cadenas Base64 al instante con IETF RFC 4648 — texto, archivos e imágenes con UTF-8, todo localmente en tu navegador.',
  },
  'color-palette': {
    name: 'Paleta de colores',
    description:
      'Genera paletas armoniosas y accesibles desde un solo color con verificación de contraste WCAG 2.2 AA para cumplir ADA y la Sección 508.',
  },
  'css-grid-generator': {
    name: 'Generador de CSS Grid',
    description:
      'Crea visualmente diseños CSS Grid responsivos con las especificaciones W3C y obtén código limpio listo para producción.',
  },
  'image-compressor': {
    name: 'Compresor de imágenes',
    description:
      'Comprime imágenes sin perder calidad para tiendas, blogs y rendimiento web. Compresión Canvas/WebP en el navegador, sin subir tus archivos.',
  },
  'json-formatter': {
    name: 'Formateador JSON',
    description:
      'Formatea, valida y embellece JSON con resaltado de sintaxis, detección de errores y vista de árbol, conforme a IETF RFC 8259.',
  },
  'markdown-editor': {
    name: 'Editor Markdown',
    description:
      'Escribe y previsualiza Markdown en vivo con resaltado de sintaxis y exportación compatible con CommonMark.',
  },
  'meta-tag-generator': {
    name: 'Generador de metaetiquetas',
    description:
      'Genera metaetiquetas HTML para SEO, Open Graph, Twitter Cards y Google Search Central, listas para copiar y pegar.',
  },
  'online-ruler': {
    name: 'Regla en línea',
    description:
      'Mide cualquier cosa en pantalla con precisión de píxeles. Una regla ligera basada en el navegador con unidades estándar.',
  },
  'password-generator': {
    name: 'Generador de contraseñas',
    description:
      'Genera contraseñas aleatorias seguras con longitud, conjuntos de caracteres y estimación de entropía personalizables.',
  },
  'qr-generator': {
    name: 'Generador QR',
    description:
      'Crea códigos QR personalizados al instante para URL, texto, WiFi, contactos y más con opciones de diseño.',
  },
  'regex-tester': {
    name: 'Probador de Regex',
    description:
      'Prueba y depura expresiones regulares con coincidencias en tiempo real, explicaciones y hoja de referencia.',
  },
  'word-counter': {
    name: 'Contador de palabras',
    description:
      'Cuenta palabras, caracteres, oraciones y párrafos al instante. Estadísticas en tiempo real con estimación de lectura.',
  },
};

const ko: ToolCopyBySlug = {
  'base64-encoder': {
    name: 'Base64 인코더/디코더',
    description:
      'IETF RFC 4648에 따라 Base64 문자열을 즉시 인코딩·디코딩합니다. UTF-8을 지원하며 텍스트, 파일, 이미지를 브라우저에서만 처리합니다.',
  },
  'color-palette': {
    name: '색상 팔레트',
    description:
      '하나의 색상에서 조화롭고 접근성 높은 팔레트를 생성합니다. WCAG 2.2 AA 대비 검사로 ADA 및 Section 508 준수를 지원합니다.',
  },
  'css-grid-generator': {
    name: 'CSS Grid 생성기',
    description:
      'W3C CSS Grid 사양에 맞춰 반응형 레이아웃을 시각적으로 만들고 깔끔한 프로덕션용 코드를 출력합니다.',
  },
  'image-compressor': {
    name: '이미지 압축기',
    description:
      '품질 손실 없이 이미지를 압축해 쇼핑몰, 블로그, 웹 성능을 개선합니다. Canvas/WebP로 기기 안에서만 처리합니다.',
  },
  'json-formatter': {
    name: 'JSON 포매터',
    description:
      'JSON을 포맷·검증·정리하고 구문 강조, 오류 감지, 트리 보기를 제공합니다. IETF RFC 8259를 준수합니다.',
  },
  'markdown-editor': {
    name: 'Markdown 편집기',
    description:
      '실시간 미리보기, 구문 강조, CommonMark 호환 내보내기를 지원하는 Markdown 편집기입니다.',
  },
  'meta-tag-generator': {
    name: '메타 태그 생성기',
    description:
      'SEO, Open Graph, Twitter Cards, Google Search Central용 HTML 메타 태그를 생성해 바로 복사할 수 있습니다.',
  },
  'online-ruler': {
    name: '온라인 자',
    description:
      '화면의 모든 것을 픽셀 단위로 정확히 측정하세요. 표준 단위를 지원하는 가벼운 브라우저 자입니다.',
  },
  'password-generator': {
    name: '비밀번호 생성기',
    description:
      '길이와 문자 집합을 설정하고 엔트로피 추정까지 제공하는 안전한 무작위 비밀번호를 생성합니다.',
  },
  'qr-generator': {
    name: 'QR 생성기',
    description:
      'URL, 텍스트, Wi-Fi, 연락처 등을 위한 맞춤 QR 코드를 디자인 옵션과 함께 즉시 만드세요.',
  },
  'regex-tester': {
    name: '정규식 테스터',
    description:
      '실시간 매칭, 설명, 치트 시트와 함께 정규식을 테스트하고 디버그하세요.',
  },
  'word-counter': {
    name: '단어 카운터',
    description:
      '단어, 문자, 문장, 문단 수를 즉시 계산합니다. 읽기 시간 추정과 실시간 통계를 제공합니다.',
  },
};

const nl: ToolCopyBySlug = {
  'base64-encoder': {
    name: 'Base64 encoder/decoder',
    description:
      'Codeer en decodeer direct Base64-strings volgens IETF RFC 4648 — tekst, bestanden en afbeeldingen met UTF-8, volledig lokaal in je browser.',
  },
  'color-palette': {
    name: 'Kleurenpalet',
    description:
      'Genereer harmonieuze, toegankelijke kleurenpaletten vanuit één kleur met WCAG 2.2 AA-contrastcontrole voor ADA en Section 508.',
  },
  'css-grid-generator': {
    name: 'CSS Grid-generator',
    description:
      'Bouw visueel responsieve CSS Grid-layouts volgens de W3C-specificatie met schone, productieklare code.',
  },
  'image-compressor': {
    name: 'Afbeeldingscompressor',
    description:
      'Comprimeer afbeeldingen zonder kwaliteitsverlies voor snellere shops, blogs en webprestaties. Canvas/WebP-verwerking blijft op je apparaat.',
  },
  'json-formatter': {
    name: 'JSON-formatter',
    description:
      'Formatteer, valideer en verfraai JSON met syntaxiskleuring, foutdetectie en boomweergave — volgens IETF RFC 8259.',
  },
  'markdown-editor': {
    name: 'Markdown-editor',
    description:
      'Schrijf en bekijk Markdown live met syntaxiskleuring en CommonMark-compatibele export voor schrijvers, studenten en ontwikkelaars.',
  },
  'meta-tag-generator': {
    name: 'Meta-tag-generator',
    description:
      'Genereer HTML-meta-tags voor SEO, Open Graph, Twitter Cards en Google Search Central — klaar om te kopiëren.',
  },
  'online-ruler': {
    name: 'Online liniaal',
    description:
      'Meet alles op je scherm tot op de pixel nauwkeurig. Een lichtgewicht liniaal in de browser met standaardeenheden.',
  },
  'password-generator': {
    name: 'Wachtwoordgenerator',
    description:
      'Genereer veilige willekeurige wachtwoorden met aanpasbare lengte, tekensets en entropieschatting.',
  },
  'qr-generator': {
    name: 'QR-generator',
    description:
      'Maak direct aangepaste QR-codes voor URL’s, tekst, wifi, contacten en meer, met ontwerpoptjes.',
  },
  'regex-tester': {
    name: 'Regex-tester',
    description:
      'Test en debug reguliere expressies met realtime matching, uitleg en spiekbriefje.',
  },
  'word-counter': {
    name: 'Woordenteller',
    description:
      'Tel direct woorden, tekens, zinnen en alinea’s. Realtime statistieken met geschatte leestijd.',
  },
};

const sv: ToolCopyBySlug = {
  'base64-encoder': {
    name: 'Base64-kodare/avkodare',
    description:
      'Koda och avkoda Base64-strängar direkt enligt IETF RFC 4648 — text, filer och bilder med UTF-8, helt lokalt i webbläsaren.',
  },
  'color-palette': {
    name: 'Färgpalett',
    description:
      'Skapa harmoniska och tillgängliga färgpaletter från en färg med WCAG 2.2 AA-kontrastkontroll för ADA och Section 508.',
  },
  'css-grid-generator': {
    name: 'CSS Grid-generator',
    description:
      'Bygg responsiva CSS Grid-layouter visuellt enligt W3C-specifikationen med ren, produktionsklar kod.',
  },
  'image-compressor': {
    name: 'Bildkomprimerare',
    description:
      'Komprimera bilder utan kvalitetsförlust för snabbare butiker, bloggar och webbprestanda. Canvas/WebP sker på din enhet.',
  },
  'json-formatter': {
    name: 'JSON-formaterare',
    description:
      'Formatera, validera och försköna JSON med syntaxmarkering, felidentifiering och trädvy — enligt IETF RFC 8259.',
  },
  'markdown-editor': {
    name: 'Markdown-redigerare',
    description:
      'Skriv och förhandsgranska Markdown live med syntaxmarkering och CommonMark-kompatibel export.',
  },
  'meta-tag-generator': {
    name: 'Metatagg-generator',
    description:
      'Generera HTML-metataggar för SEO, Open Graph, Twitter Cards och Google Search Central — redo att klistra in.',
  },
  'online-ruler': {
    name: 'Online-linjal',
    description:
      'Mät allt på skärmen med pixelprecision. En lättviktslinjal i webbläsaren med standardenheter.',
  },
  'password-generator': {
    name: 'Lösenordsgenerator',
    description:
      'Skapa säkra slumpmässiga lösenord med anpassningsbar längd, teckenuppsättningar och entropiuppskattning.',
  },
  'qr-generator': {
    name: 'QR-generator',
    description:
      'Skapa anpassade QR-koder direkt för webbadresser, text, wifi, kontakter och mer med designval.',
  },
  'regex-tester': {
    name: 'Regex-testare',
    description:
      'Testa och felsök reguljära uttryck med realtidsmatchning, förklaringar och fuskblad.',
  },
  'word-counter': {
    name: 'Ordräknare',
    description:
      'Räkna ord, tecken, meningar och stycken direkt. Realtidsstatistik med uppskattad lästid.',
  },
};

const it: ToolCopyBySlug = {
  'base64-encoder': {
    name: 'Codificatore/Decodificatore Base64',
    description:
      'Codifica e decodifica istantaneamente stringhe Base64 secondo IETF RFC 4648 — testo, file e immagini con UTF-8, tutto nel browser.',
  },
  'color-palette': {
    name: 'Tavolozza colori',
    description:
      'Genera palette armoniose e accessibili da un solo colore con verifica del contrasto WCAG 2.2 AA per ADA e Section 508.',
  },
  'css-grid-generator': {
    name: 'Generatore CSS Grid',
    description:
      'Crea visivamente layout CSS Grid responsive secondo le specifiche W3C con codice pulito e pronto per la produzione.',
  },
  'image-compressor': {
    name: 'Compressore immagini',
    description:
      'Comprimi le immagini senza perdere qualità per e-commerce, blog e prestazioni web. Compressione Canvas/WebP sul tuo dispositivo.',
  },
  'json-formatter': {
    name: 'Formattatore JSON',
    description:
      'Formatta, valida e abbellisci JSON con evidenziazione della sintassi, rilevamento errori e vista ad albero — conforme a IETF RFC 8259.',
  },
  'markdown-editor': {
    name: 'Editor Markdown',
    description:
      'Scrivi e visualizza Markdown in tempo reale con evidenziazione della sintassi ed export compatibile CommonMark.',
  },
  'meta-tag-generator': {
    name: 'Generatore di meta tag',
    description:
      'Genera meta tag HTML per SEO, Open Graph, Twitter Cards e Google Search Central — pronti da copiare.',
  },
  'online-ruler': {
    name: 'Righello online',
    description:
      'Misura qualsiasi cosa sullo schermo con precisione al pixel. Un righello leggero nel browser con unità standard.',
  },
  'password-generator': {
    name: 'Generatore di password',
    description:
      'Genera password casuali sicure con lunghezza, set di caratteri e stima dell’entropia personalizzabili.',
  },
  'qr-generator': {
    name: 'Generatore QR',
    description:
      'Crea subito QR code personalizzati per URL, testo, Wi-Fi, contatti e altro con opzioni di design.',
  },
  'regex-tester': {
    name: 'Tester Regex',
    description:
      'Testa e debugga espressioni regolari con corrispondenze in tempo reale, spiegazioni e cheat sheet.',
  },
  'word-counter': {
    name: 'Contatore parole',
    description:
      'Conta istantaneamente parole, caratteri, frasi e paragrafi. Statistiche in tempo reale con stima del tempo di lettura.',
  },
};

const pt: ToolCopyBySlug = {
  'base64-encoder': {
    name: 'Codificador/Descodificador Base64',
    description:
      'Codifique e descodifique strings Base64 instantaneamente com IETF RFC 4648 — texto, ficheiros e imagens com UTF-8, tudo no navegador.',
  },
  'color-palette': {
    name: 'Paleta de cores',
    description:
      'Gere paletas harmoniosas e acessíveis a partir de uma cor com verificação de contraste WCAG 2.2 AA para ADA e Section 508.',
  },
  'css-grid-generator': {
    name: 'Gerador de CSS Grid',
    description:
      'Crie visualmente layouts CSS Grid responsivos segundo as especificações W3C com código limpo e pronto para produção.',
  },
  'image-compressor': {
    name: 'Compressor de imagens',
    description:
      'Comprima imagens sem perder qualidade para lojas, blogs e desempenho web. Compressão Canvas/WebP no seu dispositivo.',
  },
  'json-formatter': {
    name: 'Formatador JSON',
    description:
      'Formate, valide e embeleze JSON com realce de sintaxe, deteção de erros e vista em árvore — conforme IETF RFC 8259.',
  },
  'markdown-editor': {
    name: 'Editor Markdown',
    description:
      'Escreva e pré-visualize Markdown ao vivo com realce de sintaxe e exportação compatível com CommonMark.',
  },
  'meta-tag-generator': {
    name: 'Gerador de meta tags',
    description:
      'Gere meta tags HTML para SEO, Open Graph, Twitter Cards e Google Search Central — prontas a copiar.',
  },
  'online-ruler': {
    name: 'Régua online',
    description:
      'Meça qualquer coisa no ecrã com precisão ao pixel. Uma régua leve no navegador com unidades padrão.',
  },
  'password-generator': {
    name: 'Gerador de palavras-passe',
    description:
      'Gere palavras-passe aleatórias seguras com comprimento, conjuntos de caracteres e estimativa de entropia personalizáveis.',
  },
  'qr-generator': {
    name: 'Gerador QR',
    description:
      'Crie códigos QR personalizados instantaneamente para URLs, texto, Wi-Fi, contactos e mais com opções de design.',
  },
  'regex-tester': {
    name: 'Testador de Regex',
    description:
      'Teste e depure expressões regulares com correspondência em tempo real, explicações e cheat sheet.',
  },
  'word-counter': {
    name: 'Contador de palavras',
    description:
      'Conte palavras, caracteres, frases e parágrafos instantaneamente. Estatísticas em tempo real com estimativa de leitura.',
  },
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
  const localized = toolCopy[lang]?.[tool.slug];
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
