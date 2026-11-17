/**
 * `/compassinstant/` hub page ki copy — compassinstant wala poora setup
 * instanten-v2 ke andar, saare 16 tools ke cards ke saath.
 *
 * Har string English fallback ke saath 10 locales mein hai; `hubCopy[lang]`
 * hamesha maujood rehta hai, isliye page kabhi khaali nahi dikhta.
 */
export type HubCopy = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  instrumentsH: string;
  instrumentsLead: string;
  toolsH: string;
  toolsLead: string;
  open: string;
  siloAbout: string;
  siloBlog: string;
  siloContact: string;
  siloPrivacy: string;
  siloTools: string;
  badge: string;
};

const en: HubCopy = {
  title: 'CompassInstant — four sensor instruments in one place',
  description:
    'The complete CompassInstant toolset inside Instanten: online compass, bubble level, speedometer and Qibla finder — each with its own guides, about, contact and legal pages. Every card opens its own page.',
  h1: 'CompassInstant tools',
  lead: 'Four sensor instruments — a compass, a bubble level, a speedometer and a Qibla finder. Every card opens its own page, and each instrument keeps its own guides, about, contact and legal pages.',
  instrumentsH: 'Instruments',
  instrumentsLead: 'Live sensor tools that run entirely in your browser: put the phone flat, allow the sensor, read the value.',
  toolsH: 'Browser tools',
  toolsLead: 'Single-purpose utilities that finish in one screen — no sign-up, no upload, everything client-side.',
  open: 'Open',
  siloAbout: 'About',
  siloBlog: 'Guides',
  siloContact: 'Contact',
  siloPrivacy: 'Privacy',
  siloTools: 'All tools',
  badge: 'Free · no sign-up',
};

export const hubCopy: Record<string, HubCopy> = {
  en,
  de: {
    ...en,
    title: 'CompassInstant — vier Messinstrumente an einem Ort',
    description:
      'Das komplette CompassInstant-Set in Instanten: Online-Kompass, Wasserwaage, Tachometer und Qibla-Finder — jeweils mit eigenen Guides, Über-uns-, Kontakt- und Rechtsseiten — plus zwölf Browser-Tools.',
    h1: 'CompassInstant-Tools',
    lead: 'Vier Sensor-Instrumente und zwölf Browser-Tools. Jede Karte öffnet die eigene Seite des Tools — jedes Instrument behält eigene Guides, Über-uns-, Kontakt- und Rechtsseiten.',
    instrumentsH: 'Instrumente',
    instrumentsLead: 'Live-Sensortools, die komplett im Browser laufen: Gerät flach hinlegen, Sensor erlauben, Wert ablesen.',
    toolsH: 'Browser-Tools',
    toolsLead: 'Werkzeuge für eine Aufgabe, auf einem Bildschirm erledigt — ohne Anmeldung, ohne Upload, alles lokal.',
    open: 'Öffnen',
    siloAbout: 'Über uns',
    siloBlog: 'Guides',
    siloContact: 'Kontakt',
    siloPrivacy: 'Datenschutz',
    siloTools: 'Alle Tools',
    badge: 'Kostenlos · ohne Anmeldung',
  },
  es: {
    ...en,
    title: 'CompassInstant — 4 instrumentos + four instruments instantáneas',
    description:
      'El conjunto completo de CompassInstant dentro de Instanten: brújula online, nivel de burbuja, velocímetro y alquibla — cada uno con sus guías, sobre nosotros, contacto y páginas legales — más doce herramientas de navegador.',
    h1: 'Herramientas CompassInstant',
    lead: 'Cuatro instrumentos con sensor y doce herramientas de navegador. Cada tarjeta abre la página propia de esa herramienta — cada instrumento mantiene sus guías, sobre nosotros, contacto y páginas legales.',
    instrumentsH: 'Instrumentos',
    instrumentsLead: 'Herramientas de sensor en vivo que funcionan en el navegador: apoya el móvil, permite el sensor y lee el valor.',
    toolsH: 'Herramientas de navegador',
    toolsLead: 'Utilidades de una sola tarea que se resuelven en una pantalla — sin registro, sin subir archivos, todo en local.',
    open: 'Abrir',
    siloAbout: 'Acerca de',
    siloBlog: 'Guías',
    siloContact: 'Contacto',
    siloPrivacy: 'Privacidad',
    siloTools: 'Todas las herramientas',
    badge: 'Gratis · sin registro',
  },
  fr: {
    ...en,
    title: 'CompassInstant — 4 instruments + four instruments instantanés',
    description:
      'L\'ensemble CompassInstant complet dans Instanten : boussole en ligne, niveau à bulle, tachymètre et boussole Qibla — chacun avec ses guides, à propos, contact et pages légales — plus douze outils de navigateur.',
    h1: 'Outils CompassInstant',
    lead: 'Quatre instruments à capteur et douze outils de navigateur. Chaque carte ouvre la page propre à cet outil — chaque instrument garde ses guides, à propos, contact et pages légales.',
    instrumentsH: 'Instruments',
    instrumentsLead: 'Outils à capteur en direct, entièrement dans le navigateur : posez le téléphone, autorisez le capteur, lisez la valeur.',
    toolsH: 'Outils de navigateur',
    toolsLead: 'Des utilitaires à une seule tâche, réglés en un écran — sans compte, sans envoi de fichier, tout en local.',
    open: 'Ouvrir',
    siloAbout: 'À propos',
    siloBlog: 'Guides',
    siloContact: 'Contact',
    siloPrivacy: 'Confidentialité',
    siloTools: 'Tous les outils',
    badge: 'Gratuit · sans compte',
  },
  it: {
    ...en,
    title: 'CompassInstant — 4 strumenti + four instruments istantanei',
    description:
      'Il set CompassInstant completo dentro Instanten: bussola online, livella, tachimetro e bussola Qibla — ognuno con guide, chi siamo, contatti e pagine legali — più dodici strumenti del browser.',
    h1: 'Strumenti CompassInstant',
    lead: 'Quattro strumenti con sensore e dodici strumenti del browser. Ogni scheda apre la pagina dello strumento — ogni strumento mantiene guide, chi siamo, contatti e pagine legali.',
    instrumentsH: 'Strumenti',
    instrumentsLead: 'Strumenti con sensore in tempo reale, interamente nel browser: appoggia il telefono, consenti il sensore, leggi il valore.',
    toolsH: 'Strumenti del browser',
    toolsLead: 'Utility per una sola attività, risolte in una schermata — senza registrazione, senza caricamenti, tutto in locale.',
    open: 'Apri',
    siloAbout: 'Chi siamo',
    siloBlog: 'Guide',
    siloContact: 'Contatti',
    siloPrivacy: 'Privacy',
    siloTools: 'Tutti gli strumenti',
    badge: 'Gratis · senza registrazione',
  },
  pt: {
    ...en,
    title: 'CompassInstant — 4 instrumentos + four instruments instantâneas',
    description:
      'O conjunto CompassInstant completo dentro do Instanten: bússola online, nível de bolha, velocímetro e alquibla — cada um com guias, sobre, contacto e páginas legais — mais doze ferramentas de navegador.',
    h1: 'Ferramentas CompassInstant',
    lead: 'Quatro instrumentos com sensor e doze ferramentas de navegador. Cada cartão abre a página própria dessa ferramenta — cada instrumento mantém guias, sobre, contacto e páginas legais.',
    instrumentsH: 'Instrumentos',
    instrumentsLead: 'Ferramentas de sensor ao vivo que correm no navegador: pousa o telemóvel, permite o sensor, lê o valor.',
    toolsH: 'Ferramentas de navegador',
    toolsLead: 'Utilitários de uma só tarefa, resolvidos num ecrã — sem registo, sem carregamentos, tudo local.',
    open: 'Abrir',
    siloAbout: 'Sobre',
    siloBlog: 'Guias',
    siloContact: 'Contacto',
    siloPrivacy: 'Privacidade',
    siloTools: 'Todas as ferramentas',
    badge: 'Grátis · sem registo',
  },
  nl: {
    ...en,
    title: 'CompassInstant — vier meetinstrumenten op één plek',
    description:
      'De complete CompassInstant-set binnen Instanten: online kompas, waterpas, snelheidsmeter en Qibla-kompas — elk met eigen gidsen, over ons, contact en juridische pagina\'s — plus twaalf browsertools.',
    h1: 'CompassInstant-tools',
    lead: 'Vier sensorbased instrumenten en twaalf browsertools. Elke kaart opent de eigen pagina van die tool — elk instrument houdt eigen gidsen, over ons, contact en juridische pagina\'s.',
    instrumentsH: 'Instrumenten',
    instrumentsLead: 'Live sensortools die volledig in je browser werken: leg het toestel plat, geef toestemming, lees de waarde.',
    toolsH: 'Browsertools',
    toolsLead: 'Hulpmiddelen voor één taak, binnen één scherm klaar — geen account, geen upload, alles lokaal.',
    open: 'Openen',
    siloAbout: 'Over ons',
    siloBlog: 'Gidsen',
    siloContact: 'Contact',
    siloPrivacy: 'Privacy',
    siloTools: 'Alle tools',
    badge: 'Gratis · geen account',
  },
  sv: {
    ...en,
    title: 'CompassInstant — fyra mätinstrument på ett ställe',
    description:
      'Hela CompassInstant-uppsättningen i Instanten: online kompass, vattenpass, hastighetsmätare och Qibla-kompass — var och en med egna guider, om oss, kontakt och juridiska sidor — plus tolv webbläsarverktyg.',
    h1: 'CompassInstant-verktyg',
    lead: 'Fyra sensorinstrument och tolv webbläsarverktyg. Varje kort öppnar verktygets egen sida — varje instrument behåller egna guider, om oss, kontakt och juridiska sidor.',
    instrumentsH: 'Instrument',
    instrumentsLead: 'Senserverktyg i realtid som körs helt i webbläsaren: lägg telefonen plant, tillåt sensorn, läs av värdet.',
    toolsH: 'Webbläsarverktyg',
    toolsLead: 'Verktyg för en enda uppgift, klara på en skärm — inget konto, ingen uppladdning, allt lokalt.',
    open: 'Öppna',
    siloAbout: 'Om oss',
    siloBlog: 'Guider',
    siloContact: 'Kontakt',
    siloPrivacy: 'Integritet',
    siloTools: 'Alla verktyg',
    badge: 'Gratis · inget konto',
  },
  ja: {
    ...en,
    title: 'CompassInstant — 4つの計測ツール + 12の即時ツール',
    description:
      'Instanten 内の CompassInstant 一式：オンライン方位磁針、水準器、速度計、キブラ方位 — それぞれにガイド、概要、お問い合わせ、法務ページがあります。さらに12のブラウザツール。',
    h1: 'CompassInstant のツール',
    lead: '4つのセンサー計測ツールと12のブラウザツール。各カードはそのツール専用ページを開きます。計測ツールはそれぞれ独自のガイド、概要、お問い合わせ、法務ページを持ちます。',
    instrumentsH: '計測ツール',
    instrumentsLead: 'ブラウザだけで動くセンサー計測ツール：端末を平らに置き、センサーを許可して値を読み取ります。',
    toolsH: 'ブラウザツール',
    toolsLead: '1画面で完了する単機能ツール。登録不要、アップロード不要、すべて端末内で処理します。',
    open: '開く',
    siloAbout: '概要',
    siloBlog: 'ガイド',
    siloContact: 'お問い合わせ',
    siloPrivacy: 'プライバシー',
    siloTools: 'すべてのツール',
    badge: '無料 · 登録不要',
  },
  ko: {
    ...en,
    title: 'CompassInstant — 계측 도구 4종 + 즉시 도구 12종',
    description:
      'Instanten 안의 CompassInstant 전체 세트: 온라인 나침반, 수평계, 속도계, 키블라 방향 — 각각 고유한 가이드, 소개, 문의, 법적 페이지를 갖추고 있습니다. 여기에 브라우저 도구 12종.',
    h1: 'CompassInstant 도구',
    lead: '센서 계측 도구 4종과 브라우저 도구 12종. 각 카드는 해당 도구의 전용 페이지를 엽니다. 계측 도구는 각자의 가이드, 소개, 문의, 법적 페이지를 유지합니다.',
    instrumentsH: '계측 도구',
    instrumentsLead: '브라우저에서만 동작하는 실시간 센서 도구: 기기를 평평하게 두고 센서를 허용한 뒤 값을 읽습니다.',
    toolsH: '브라우저 도구',
    toolsLead: '한 화면에서 끝나는 단일 기능 도구. 가입 없음, 업로드 없음, 모든 처리는 기기 안에서.',
    open: '열기',
    siloAbout: '소개',
    siloBlog: '가이드',
    siloContact: '문의',
    siloPrivacy: '개인정보',
    siloTools: '모든 도구',
    badge: '무료 · 가입 없음',
  },
};
