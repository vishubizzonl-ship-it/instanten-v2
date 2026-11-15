/**
 * Localised copy for the bubble level silo pages (about, blog index).
 *
 * Privacy, terms and the contact-form wording are shared with the compass silo
 * and come from supportCopy / contactForm, so only the parts that genuinely
 * differ for a level — the "what is it", the how-it-works explainer, the
 * feature list and the article list — live here.
 */
export type BubbleSiloCopy = {
  /** "Back to Bubble Level" link label. */
  back: string;
  aboutTitle: string;
  aboutDesc: string;
  about: {
    whatH: string;
    what: string[];
    howH: string;
    how: string[];
    missionH: string;
    mission: string[];
    featuresH: string;
    features: string[];
    whoH: string;
    who: string[];
    accuracyH: string;
    accuracy: string[];
  };
  blogTitle: string;
  blogDesc: string;
  blogIntro: string;
  blogIntro2: string;
  posts: { href: string; date: string; title: string; desc: string }[];
  /** Localised <title> for the bubble level tool page. */
  toolTitle: string;
  /** Localised meta description for the tool page. */
  toolDesc: string;
  /** Localised og:image:alt / meta image alt for the tool page. */
  ogAlt: string;
  /** Local-language keyword list for the tag. */
  keywords: string;
  /** Link label for the accuracy guide, used by the {accuracyGuide} token. */
  guideLabel: string;
  contact: {
    contactTitle: string;
    contactDesc: string;
    contactIntro: string;
    howH: string;
    how: string[];
    fixesH: string;
    fixes: { h: string; p: string }[];
    tellH: string;
    tell: string[];
    emailH: string;
    emailPre: string;
    emailPost: string;
    sendH: string;
    responseH: string;
    response: string[];
    guideA: string;
    guideMid: string;
    guideB: string;
    guidePost: string;
  },
};

const en: BubbleSiloCopy = {
  back: "Back to Bubble Level",
  aboutTitle: "About Online Bubble Level — Free Level Checker Tool",
  aboutDesc: "About the online bubble level: how a phone measures tilt, who the free bubble level is for, and the accuracy you can expect from a level checker tool.",
  about: {
    whatH: "What is onlinecompass?",
    what: [
      "onlinecompass is a free, browser-based bubble level that turns any phone, tablet, or laptop into a precision spirit level. Check level and plumb, read tilt in degrees, and square up a surface at real-world accuracy, with no app to install and no account required.",
      "Unlike most online level tools that guess a surface, onlinecompass reads your device's accelerometer and orientation sensors directly through standard browser APIs. Once loaded, it works offline and keeps your sensor data on your device.",
    ],
    howH: "How a phone bubble level actually works",
    how: [
      "Your phone contains an accelerometer, a tiny sensor that measures gravity. The browser reads it through standard device-motion APIs, and this **level checker tool online** turns that reading into two numbers: tilt along the long edge and tilt along the short edge. A centred bubble means both are close to zero, which is what a spirit level vial shows with its air bubble.",
      "That is also why the tool needs a moment to settle. Put a phone down and the sensor output wobbles for a fraction of a second before the filter smooths it. If you have ever used a **bubble level online** page where the bubble jitters, the sensor is fine — the page is simply showing raw values instead of a filtered reading.",
      "For a **vertical level tool online** the maths changes. Held upright, the phone measures the lean of its back face rather than the tilt of a table, so plumb readings are naturally a little noisier. We show both axes at once so you can check a wall and a shelf without changing the view.",
    ],
    missionH: "Our Mission",
    mission: [
      "Navigation should be instant and free. We built onlinecompass because we kept reaching for a level that wasn't nearby — and the online alternatives were inaccurate, cluttered with ads, or required unnecessary downloads. onlinecompass is fast, private, and accurate by default.",
    ],
    featuresH: "Key Features",
    features: [
      "Level and plumb measurement in one view",
      "Tilt readout in degrees for both axes",
      "Four precision calibration methods for any device",
      "Rulers and tools on any screen edge, fullscreen mode",
      "Dark mode that respects your system preference",
      "Works on every modern browser — no download, no sign-up",
    ],
    whoH: "Who the free bubble level is for",
    who: [
      "Most people arrive here with one job: something in the house looks crooked and they want a number before they drill. This **free bubble level** is built for that moment — hanging a picture, checking a shelf, seeing whether a table rocks, or confirming a washing machine before it walks across the floor.",
      "It is also a sensible second opinion for people who own a real level and cannot find it, and a quick **leveler tool** for renters who would rather not buy a 60 cm bar for four holes in a wall.",
      "The **water level tool online** trick still has a place for long spans, but for the everyday \"is this straight?\" question the phone in your hand wins on speed.",
    ],
    accuracyH: "Accuracy you can expect",
    accuracy: [
      "A calibrated phone reads within about 0.5° on a flat surface, which is close to a small spirit level and good enough for furniture, shelves and pictures. It is not a substitute for a long level when you are building a wall or laying a floor, because a short base cannot see a slope spread over three metres.",
      "If a reading looks wrong, calibrate on a surface you trust, then run a **bubble level check** a second time before you cut or drill. Our {accuracyGuide} explains the four common causes in detail.",
    ],
  },
  blogTitle: "Online Bubble Level Blog",
  blogDesc: "Guides and tips for checking level and plumb with the online bubble level.",
  blogIntro: "Guides and tips for checking level and plumb with the online bubble level.",
  blogIntro2: "Start with the how-to if you are new to the tool, or jump to the accuracy guide if a level check has already given you a number you do not trust. If you are deciding whether to buy a spirit level at all, the comparison guide covers accuracy, cost and when a phone is genuinely enough.",
  posts: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      date: "October 4, 2026",
      title: "How to Use an Online Bubble Level (Step-by-Step)",
      desc: "Open the page, place the phone flat, calibrate, and read the tilt in degrees to check any surface.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      date: "November 7, 2026",
      title: "How Accurate Is a Phone Bubble Level? (And How to Fix It)",
      desc: "How accurate is a phone bubble level? Typical error, what ruins a reading, and how to calibrate for a reliable check.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      date: "November 7, 2026",
      title: "How to Level Furniture, Shelves and Appliances with a Phone",
      desc: "Level furniture, shelves and appliances with a phone in minutes, plus fixes for a wobble and a sloped floor.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      date: "November 7, 2026",
      title: "Bubble Level vs Spirit Level: Which One Do You Need?",
      desc: "Bubble level vs spirit level: accuracy, cost, speed and when each wins, plus where an online bubble level fits in.",
    },
  ],
  toolTitle: "Online Bubble Level — Free Spirit Level & Level Checker",
  toolDesc: "Free online bubble level to check any surface. Bubble level check online, spirit level online, level checker tool and water level tool online — no install.",
  ogAlt: "Online bubble level — free spirit level and level checker tool to check any surface in your browser",
  keywords: "online bubble level, bubble level, free bubble level, bubble level ruler, bubble level online, spirit level online, vertical level tool online, level checker tool online, leveler tool, bubble level check online, water level tool online, online level bubble level, free online level, online bubble level free, bubble level check",
  guideLabel: "accuracy guide",
  contact: {
  contactTitle: "Contact Online Bubble Level — Feedback & Bug Reports",
  contactDesc: "Contact the online bubble level team. Report a calibration or accuracy problem with the free bubble level, suggest a feature, or ask a privacy question.",
  contactIntro: "We are a small team and we read every message. Whether you have found a bug, have a feature request, or just want to say hello — reach out using the form below.",
  howH: "How the check works",
  how: [
    "Before you write, it helps to know what the tool is doing. The online bubble level reads your device's accelerometer through the browser and shows tilt in degrees on two axes. Nothing is uploaded: the reading is calculated on your own phone, which is why the level checker tool online keeps working offline once the page has loaded.",
    "That design also explains most support questions. The bubble only moves if the browser is allowed to read motion sensors, and calibration is stored per device, so a new phone or a cleared browser cache starts from zero again.",
  ],
  fixesH: "Quick fixes before you write",
  fixes: [
    { h: "Bubble frozen at 0.0°", p: "allow motion access when the browser asks, then reload the page." },
    { h: "Reading looks off by a degree or two", p: "recalibrate on a surface you trust, away from magnets and metal." },
    { h: "Tool shows nothing at all", p: "some desktop browsers have no accelerometer — use a phone or tablet." },
    { h: "Vertical view feels noisy", p: "hold the phone against the surface instead of judging it by eye." },
  ],
  tellH: "What to tell us",
  tell: [
    "For a bug report, tell us the device, the browser version, and what the number said when the bubble was centred. For an accuracy complaint, mention whether the free bubble level was calibrated first and what you compared it against — a spirit level, a second phone, or a surface you assumed was flat.",
    "For a feature request, describe the job rather than the button. \"I want to hang a heavy mirror on a plaster wall\" tells us more than \"add a save button\", and it usually leads to a better guide as well as a better tool.",
  ],
  emailH: "Email",
  emailPre: "Reach us at ",
  emailPost: ". We usually reply within a few business days.",
  sendH: "Send a message",
  responseH: "Response times",
  response: [
    "This is a small project, so replies are not instant. Accuracy and calibration reports get priority because they affect every user of the online bubble level; feature ideas are read and logged but may not get a personal reply. Privacy questions are always answered.",
    "While you wait, the guides are worth a look: the",
  ],
  guideA: "step-by-step walkthrough",
  guideMid: "and the",
  guideB: "furniture and appliance guide",
  guidePost: "answer most level-check questions already.",
  },
};

const es: BubbleSiloCopy = {
  back: "Volver al nivel de burbuja",
  aboutTitle: "Sobre el nivel de burbuja online — herramienta gratuita de nivel",
  aboutDesc: "Sobre el nivel de burbuja online: cómo mide la inclinación un móvil, para quién es el nivel de burbuja gratis y qué precisión esperar de una herramienta de nivel.",
  about: {
    whatH: "¿Qué es onlinecompass?",
    what: [
      "onlinecompass es un nivel de burbuja gratuito que funciona en el navegador y convierte cualquier móvil, tablet o portátil en un nivel de precisión. Comprueba el nivel y la plomada, lee la inclinación en grados y cuadra una superficie con precisión real, sin instalar apps y sin crear cuenta.",
      "A diferencia de la mayoría de herramientas de nivel online, que solo estiman una superficie, onlinecompass lee el acelerómetro y los sensores de orientación del dispositivo directamente mediante las API estándar del navegador. Una vez cargado funciona sin conexión y mantiene los datos de los sensores en tu dispositivo.",
    ],
    howH: "Cómo funciona realmente un nivel de burbuja de móvil",
    how: [
      "Tu móvil tiene un acelerómetro, un pequeño sensor que mide la gravedad. El navegador lo lee a través de las API estándar de movimiento del dispositivo, y esta **herramienta de nivel online** convierte esa lectura en dos números: la inclinación del borde largo y la del borde corto. Una burbuja centrada significa que ambos están cerca de cero, que es lo que muestra el tubo de un nivel con su burbuja de aire.",
      "Por eso la herramienta necesita un momento para estabilizarse. Deja el móvil y la salida del sensor oscila una fracción de segundo antes de que el filtro la suavice. Si has usado alguna página de **nivel de burbuja online** donde la burbuja tiembla, el sensor está bien: la página simplemente muestra valores en bruto en lugar de una lectura filtrada.",
      "Para una **herramienta de nivel vertical** el cálculo cambia. En vertical, el móvil mide la inclinación de su cara trasera y no la de una mesa, así que las lecturas de plomada son algo más ruidosas por naturaleza. Mostramos ambos ejes a la vez para que puedas comprobar una pared y un estante sin cambiar de vista.",
    ],
    missionH: "Nuestra misión",
    mission: [
      "Orientarse y nivelar debería ser instantáneo y gratuito. Creamos onlinecompass porque nunca teníamos un nivel a mano, y las alternativas online eran imprecisas, estaban llenas de anuncios o exigían descargas innecesarias. onlinecompass es rápido, privado y preciso por defecto.",
    ],
    featuresH: "Funciones principales",
    features: [
      "Medición de nivel y plomada en una sola vista",
      "Lectura de inclinación en grados para ambos ejes",
      "Cuatro métodos de calibración de precisión para cualquier dispositivo",
      "Reglas y herramientas en cualquier borde de pantalla, modo pantalla completa",
      "Modo oscuro que respeta la preferencia del sistema",
      "Funciona en cualquier navegador moderno — sin descargas ni registros",
    ],
    whoH: "Para quién es el nivel de burbuja gratis",
    who: [
      "La mayoría llega aquí con una tarea: algo de la casa parece torcido y quieren un número antes de taladrar. Este **nivel de burbuja gratis** está hecho para ese momento: colgar un cuadro, revisar un estante, ver si una mesa cojea o confirmar una lavadora antes de que se vaya caminando por el suelo.",
      "También es una segunda opinión sensata para quien tiene un nivel de verdad y no lo encuentra, y una **herramienta niveladora** rápida para inquilinos que prefieren no comprar una barra de 60 cm para cuatro agujeros en la pared.",
      "El truco del **nivel de agua online** sigue teniendo su lugar en distancias largas, pero para la pregunta diaria «¿esto está recto?» el móvil que llevas encima gana en rapidez.",
    ],
    accuracyH: "La precisión que puedes esperar",
    accuracy: [
      "Un móvil calibrado lee con un margen de unos 0,5° en una superficie plana, cerca de un nivel pequeño y suficiente para muebles, estantes y cuadros. No sustituye a un nivel largo cuando construyes una pared o colocas un suelo, porque una base corta no ve una pendiente repartida en tres metros.",
      "Si una lectura parece incorrecta, calibra sobre una superficie en la que confíes y repite la **comprobación de nivel** antes de cortar o taladrar. Nuestra {accuracyGuide} explica las cuatro causas habituales con detalle.",
    ],
  },
  blogTitle: "Blog del nivel de burbuja online",
  blogDesc: "Guías y consejos para comprobar el nivel y la plomada con el nivel de burbuja online.",
  blogIntro: "Guías y consejos para comprobar el nivel y la plomada con el nivel de burbuja online.",
  blogIntro2: "Empieza por la guía práctica si eres nuevo en la herramienta, o pasa a la guía de precisión si una comprobación ya te dio un número en el que no confías. Si estás decidiendo si comprar un nivel físico, la guía comparativa cubre precisión, coste y cuándo un móvil es realmente suficiente.",
  posts: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      date: "4 de octubre de 2026",
      title: "Cómo usar un nivel de burbuja online (paso a paso)",
      desc: "Abre la página, apoya el móvil plano, calibra y lee la inclinación en grados para comprobar cualquier superficie.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      date: "7 de noviembre de 2026",
      title: "¿Qué precisión tiene el nivel de burbuja de un móvil? (y cómo mejorarla)",
      desc: "¿Qué precisión tiene el nivel de burbuja de un móvil? Error típico, qué estropea una lectura y cómo calibrar para una comprobación fiable.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      date: "7 de noviembre de 2026",
      title: "Cómo nivelar muebles, estantes y electrodomésticos con el móvil",
      desc: "Nivela muebles, estantes y electrodomésticos con el móvil en minutos, con soluciones para un balanceo y un suelo inclinado.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      date: "7 de noviembre de 2026",
      title: "Nivel de burbuja frente a nivel de burbuja físico: ¿cuál necesitas?",
      desc: "Nivel online frente a nivel físico: precisión, coste, rapidez y cuándo gana cada uno, además de dónde encaja un nivel de burbuja online.",
    },
  ],
  toolTitle: "Nivel de Burbuja Online — Nivel Gratis y Comprobador de Nivel",
  toolDesc: "Nivel de burbuja online gratis para comprobar cualquier superficie. Comprueba el nivel en grados, nivel de agua online y herramienta de nivel en el móvil — sin instalar nada.",
  ogAlt: "Nivel de burbuja online — herramienta de nivel gratis para comprobar cualquier superficie en el navegador",
  keywords: "nivel de burbuja online, nivel de burbuja, nivel de burbuja gratis, nivel de burbuja digital, comprobar nivel online, nivel online, nivel de agua online, herramienta de nivel, nivel de burbuja móvil",
  guideLabel: "guía de precisión",
  contact: {
  contactTitle: "Contactar con el nivel de burbuja online — opiniones e informes de fallos",
  contactDesc: "Contacta con el equipo del nivel de burbuja online. Informa de un problema de calibración o precisión del nivel de burbuja gratis, sugiere una función o haz una pregunta sobre privacidad.",
  contactIntro: "Somos un equipo pequeño y leemos todos los mensajes. Si has encontrado un fallo, tienes una idea para una función o simplemente quieres saludar, escríbenos con el formulario de abajo.",
  howH: "Cómo funciona la comprobación",
  how: [
    "Antes de escribir, conviene saber qué hace la herramienta. El nivel de burbuja online lee el acelerómetro de tu dispositivo a través del navegador y muestra la inclinación en grados sobre dos ejes. No se sube nada: el cálculo se hace en tu propio móvil, y por eso la herramienta de nivel sigue funcionando sin conexión una vez cargada la página.",
    "Ese diseño también explica la mayoría de las consultas de soporte. La burbuja solo se mueve si el navegador tiene permiso para leer los sensores de movimiento, y la calibración se guarda por dispositivo, así que un móvil nuevo o una caché borrada empiezan otra vez desde cero.",
  ],
  fixesH: "Soluciones rápidas antes de escribir",
  fixes: [
    { h: "La burbuja se queda en 0,0°", p: "permite el acceso al movimiento cuando el navegador lo pida y recarga la página." },
    { h: "La lectura falla uno o dos grados", p: "recalibra sobre una superficie de confianza, lejos de imanes y metal." },
    { h: "La herramienta no muestra nada", p: "algunos navegadores de escritorio no tienen acelerómetro: usa un móvil o una tablet." },
    { h: "La vista vertical parece inestable", p: "apoya el móvil contra la superficie en lugar de calcularlo a ojo." },
  ],
  tellH: "Qué contarnos",
  tell: [
    "Para un fallo, dinos el dispositivo, la versión del navegador y qué número indicaba cuando la burbuja estaba centrada. Para una queja de precisión, menciona si el nivel de burbuja gratis estaba calibrado y con qué lo comparaste: un nivel físico, un segundo móvil o una superficie que suponías plana.",
    "Para una idea de función, describe el trabajo y no el botón. «Quiero colgar un espejo pesado en una pared de yeso» nos dice más que «añade un botón de guardar», y suele dar lugar a una mejor guía además de una mejor herramienta.",
  ],
  emailH: "Correo electrónico",
  emailPre: "Escríbenos a ",
  emailPost: ". Normalmente respondemos en unos días laborables.",
  sendH: "Enviar un mensaje",
  responseH: "Tiempos de respuesta",
  response: [
    "Es un proyecto pequeño, así que las respuestas no son inmediatas. Los informes de precisión y calibración tienen prioridad porque afectan a todos los usuarios del nivel de burbuja online; las ideas se leen y se anotan, pero puede que no reciban respuesta personal. Las preguntas sobre privacidad siempre se responden.",
    "Mientras esperas, vale la pena leer las guías: el",
  ],
  guideA: "tutorial paso a paso",
  guideMid: "y la",
  guideB: "guía de muebles y electrodomésticos",
  guidePost: "ya resuelven la mayoría de las dudas sobre comprobar el nivel.",
  },
};

const ja: BubbleSiloCopy = {
  back: "水準器に戻る",
  aboutTitle: "オンライン水準器について — 無料の水平チェックツール",
  aboutDesc: "オンライン水準器について：スマホが傾きを測る仕組み、無料の水準器が誰に向いているか、水平チェックツールに期待できる精度を説明します。",
  about: {
    whatH: "onlinecompass とは",
    what: [
      "onlinecompass は、スマートフォン・タブレット・ノートPCを精密な水準器に変える、ブラウザで動く無料の水準器です。水平と垂直を確認し、傾きを度で読み、実用精度で面を整えられます。アプリのインストールもアカウントも不要です。",
      "面を推測するだけのオンライン水平ツールと違い、onlinecompass は端末の加速度センサーと方位センサーをブラウザ標準 API から直接読み取ります。読み込み後はオフラインでも動作し、センサーデータは端末の外に出ません。",
    ],
    howH: "スマホの水準器が実際に動く仕組み",
    how: [
      "スマートフォンには重力を測る小さなセンサー、加速度センサーが入っています。ブラウザは標準のデバイスモーション API でそれを読み取り、この**オンライン水平チェックツール**が長辺方向と短辺方向、2つの傾きの数値に変えます。バブルが中央にあれば両方がゼロに近い状態で、これは気泡管の水準器が気泡で示しているのと同じことです。",
      "そのため、ツールには値が落ち着くまでのわずかな時間が必要です。スマートフォンを置くと、フィルターが滑らかにする前にセンサー出力が一瞬揺れます。バブルが震える**オンライン水準器**のページを使ったことがあるなら、センサーは正常で、そのページがフィルターを通さない生の値を表示しているだけです。",
      "**縦方向の水準ツール**では計算が変わります。立てて持つと、スマートフォンはテーブルの傾きではなく背面の傾きを測るため、垂直の読み取りは自然と少しノイズが増えます。当サイトは両方の軸を同時に表示するので、表示を切り替えずに壁と棚を確認できます。",
    ],
    missionH: "私たちの目的",
    mission: [
      "水平を確かめることは、すぐに、無料であるべきです。手元に水準器がない、しかもネット上の代わりは不正確だったり広告だらけだったり不要なダウンロードを求めたりする——そんな経験から onlinecompass を作りました。速く、プライバシーを守り、はじめから正確であることが方針です。",
    ],
    featuresH: "主な機能",
    features: [
      "水平と垂直をひとつの画面で測定",
      "両軸の傾きを度で表示",
      "あらゆる端末に対応する4つの精密キャリブレーション",
      "画面のどの辺にも置ける定規ツール、全画面モード",
      "システム設定に従うダークモード",
      "最新のブラウザで動作 — ダウンロードも登録も不要",
    ],
    whoH: "無料の水準器が向いている人",
    who: [
      "多くの人はひとつの用事でここに来ます。家の中の何かが傾いて見えて、穴を開ける前に数値が欲しい。この**無料の水準器**はその瞬間のために作られています。絵を掛ける、棚を確認する、テーブルがぐらつくか見る、洗濯機が床を歩き出す前に確かめる。",
      "実物の水準器を持っていて見つからない人にとっては妥当な第二の意見になり、壁に4つ穴を開けるために60cmの水準器を買いたくない賃貸の住人には手早い**水平ツール**になります。",
      "**水準器 水**を使う水盛りの方法は長い距離では今も有効ですが、「これ曲がってない？」という日常の問いには、手元のスマートフォンが速さで勝ります。",
    ],
    accuracyH: "期待できる精度",
    accuracy: [
      "校正済みのスマートフォンは平らな面で約0.5°以内で読み取れ、小さな水準器に近く、家具・棚・絵には十分です。壁を建てたり床を張ったりするときの長い水準器の代わりにはなりません。短い基準では3メートルに広がる傾きを見られないからです。",
      "読み取りがおかしいと感じたら、信頼できる面で校正し、切ったり穴を開けたりする前に**水平チェック**をもう一度行ってください。よくある4つの原因は{accuracyGuide}で詳しく説明しています。",
    ],
  },
  blogTitle: "オンライン水準器ブログ",
  blogDesc: "オンライン水準器で水平と垂直を確認するためのガイドとコツ。",
  blogIntro: "オンライン水準器で水平と垂直を確認するためのガイドとコツ。",
  blogIntro2: "初めてなら使い方のガイドから、すでに信じられない数値が出たなら精度のガイドへ進んでください。実物の水準器を買うべきか迷っているなら、比較ガイドで精度・費用・スマートフォンで十分な場面を確認できます。",
  posts: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      date: "2026\u5e7410\u67084\u65e5",
      title: "オンライン水準器の使い方（手順つき）",
      desc: "ページを開き、スマホを平らに置き、校正して、傾きを度で読めばどの面でも確認できます。",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      date: "2026\u5e7411\u67087\u65e5",
      title: "スマホの水準器の精度は？（改善方法も）",
      desc: "スマホの水準器はどれくらい正確か。一般的な誤差、読み取りを狂わせる要因、信頼できる確認のための校正方法。",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      date: "2026\u5e7411\u67087\u65e5",
      title: "スマホで家具・棚・家電を水平にする方法",
      desc: "スマホで家具・棚・家電を数分で水平に。ぐらつきや床の傾きへの対処も紹介します。",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      date: "2026\u5e7411\u67087\u65e5",
      title: "オンライン水準器と実物の水準器、どちらが必要？",
      desc: "オンラインと実物の水準器を比較：精度・費用・速さ、それぞれが有利な場面、オンライン水準器の位置づけ。",
    },
  ],
  toolTitle: "オンライン水準器 — 無料の水平器・水平チェックツール",
  toolDesc: "オンライン水準器ならどんな面もすぐに水平チェック。傾きを度で表示する無料の水平器・水準器ツールで、スマホだけで使えます。インストール不要。",
  ogAlt: "オンライン水準器 — ブラウザでどんな面も水平チェックできる無料の水平器ツール",
  keywords: "オンライン水準器, 水準器, 無料 水準器, スマホ 水準器, 水平器 アプリ, 水平 チェック, 傾き 測る, 水準器 使い方, 水平器 オンライン",
  guideLabel: "精度のガイド",
  contact: {
  contactTitle: "オンライン水準器へのお問い合わせ — ご意見・不具合報告",
  contactDesc: "オンライン水準器のチームへのお問い合わせ。無料の水準器の校正や精度の問題を報告したり、機能の提案やプライバシーに関する質問を送れます。",
  contactIntro: "小さなチームですが、すべてのメッセージに目を通しています。不具合を見つけた方も、機能のご要望がある方も、あいさつだけの方も、下のフォームからご連絡ください。",
  howH: "チェックの仕組み",
  how: [
    "ご連絡の前に、このツールが何をしているかを知っておくと話が早くなります。オンライン水準器はブラウザ経由で端末の加速度センサーを読み取り、2軸の傾きを度で表示します。データは一切送信されません。計算はお使いのスマートフォン内で行われるため、ページを読み込んだ後はオフラインでも水平チェックが動き続けます。",
    "この設計は、サポートの質問の多くも説明してくれます。ブラウザにモーションセンサーの読み取りが許可されたときだけ気泡は動き、校正は端末ごとに保存されるため、新しいスマートフォンやキャッシュを消したブラウザではゼロからやり直しになります。",
  ],
  fixesH: "ご連絡前の簡単な対処",
  fixes: [
    { h: "気泡が0.0°で止まる", p: "ブラウザの確認が出たらモーションへのアクセスを許可し、ページを再読み込みしてください。" },
    { h: "表示が1〜2度ずれている", p: "磁石や金属から離れた、信頼できる面で再校正してください。" },
    { h: "何も表示されない", p: "一部のパソコンのブラウザには加速度センサーがありません。スマートフォンかタブレットをお使いください。" },
    { h: "縦の表示が落ち着かない", p: "目分量で判断せず、スマートフォンを面に当ててください。" },
  ],
  tellH: "お知らせいただきたいこと",
  tell: [
    "不具合の報告では、端末の機種、ブラウザのバージョン、気泡が中央にあるときの数値を教えてください。精度へのご不満では、無料の水準器を校正したかどうか、何と比べたか（実物の水準器、2台目のスマートフォン、平らだと思っていた面など）をお書きください。",
    "機能のご要望では、ボタンではなく目的を教えてください。「石膏ボードの壁に重い鏡を掛けたい」は「保存ボタンを追加して」よりも多くの情報を与えてくれ、より良いガイドとより良いツールにつながります。",
  ],
  emailH: "メール",
  emailPre: "こちらのアドレスへ: ",
  emailPost: "。通常は数営業日以内に返信します。",
  sendH: "メッセージを送る",
  responseH: "返信の目安",
  response: [
    "小さなプロジェクトのため、返信はすぐではありません。精度と校正の報告はオンライン水準器のすべての利用者に関わるため優先します。機能のアイデアは読んで記録しますが、個別の返信がない場合があります。プライバシーに関するご質問には必ず回答します。",
    "お待ちの間に、ガイドもご覧ください。",
  ],
  guideA: "ステップごとの使い方",
  guideMid: "と",
  guideB: "家具・家電のガイド",
  guidePost: "で、水平チェックの疑問のほとんどは解決します。",
  },
};

const fr: BubbleSiloCopy = {
  back: "Retour au niveau à bulle",
  aboutTitle: "À propos du niveau à bulle en ligne — outil de contrôle gratuit",
  aboutDesc: "À propos du niveau à bulle en ligne : comment un téléphone mesure l’inclinaison, à qui s’adresse le niveau à bulle gratuit et la précision à attendre d’un outil de contrôle.",
  about: {
    whatH: "Qu’est-ce qu’onlinecompass ?",
    what: [
      "onlinecompass est un niveau à bulle gratuit, dans le navigateur, qui transforme n’importe quel téléphone, tablette ou ordinateur portable en niveau de précision. Contrôlez l’horizontale et l’aplomb, lisez l’inclinaison en degrés et alignez une surface avec une précision réelle, sans installer d’application ni créer de compte.",
      "Contrairement à la plupart des outils de niveau en ligne qui devinent une surface, onlinecompass lit l’accéléromètre et les capteurs d’orientation de votre appareil directement via les API standard du navigateur. Une fois chargé, il fonctionne hors ligne et garde vos données de capteurs sur votre appareil.",
    ],
    howH: "Comment fonctionne vraiment un niveau à bulle de téléphone",
    how: [
      "Votre téléphone contient un accéléromètre, un minuscule capteur qui mesure la gravité. Le navigateur le lit via les API standard de mouvement de l’appareil, et cet **outil de contrôle de niveau en ligne** transforme cette mesure en deux nombres : l’inclinaison le long du grand côté et celle le long du petit côté. Une bulle centrée signifie que les deux sont proches de zéro, exactement ce que montre la fiole d’un niveau avec sa bulle d’air.",
      "C’est aussi pourquoi l’outil a besoin d’un instant pour se stabiliser. Posez un téléphone et la sortie du capteur oscille une fraction de seconde avant que le filtre ne la lisse. Si vous avez déjà utilisé une page de **niveau à bulle en ligne** où la bulle tremble, le capteur va bien : la page affiche simplement des valeurs brutes au lieu d’une mesure filtrée.",
      "Pour un **outil de niveau vertical**, le calcul change. Tenu debout, le téléphone mesure l’inclinaison de sa face arrière et non celle d’une table : les mesures d’aplomb sont donc naturellement un peu plus bruitées. Nous affichons les deux axes en même temps pour contrôler un mur et une étagère sans changer de vue.",
    ],
    missionH: "Notre mission",
    mission: [
      "Mettre de niveau devrait être instantané et gratuit. Nous avons créé onlinecompass parce qu’un niveau n’était jamais à portée de main — et les alternatives en ligne étaient imprécises, encombrées de publicités ou exigeaient des téléchargements inutiles. onlinecompass est rapide, respectueux de la vie privée et précis par défaut.",
    ],
    featuresH: "Fonctions principales",
    features: [
      "Mesure de l’horizontale et de l’aplomb dans une seule vue",
      "Relevé d’inclinaison en degrés sur les deux axes",
      "Quatre méthodes de calibration de précision pour tout appareil",
      "Règles et outils sur chaque bord d’écran, mode plein écran",
      "Mode sombre qui respecte la préférence du système",
      "Fonctionne sur tout navigateur moderne — sans téléchargement ni inscription",
    ],
    whoH: "À qui s’adresse le niveau à bulle gratuit",
    who: [
      "La plupart des gens arrivent ici avec une seule tâche : quelque chose dans la maison paraît de travers et ils veulent un chiffre avant de percer. Ce **niveau à bulle gratuit** est fait pour ce moment — accrocher un cadre, contrôler une étagère, voir si une table branle ou vérifier une machine à laver avant qu’elle ne se déplace sur le sol.",
      "C’est aussi un second avis raisonnable pour ceux qui possèdent un vrai niveau et ne le trouvent pas, et un **outil de mise à niveau** rapide pour les locataires qui préfèrent ne pas acheter une règle de 60 cm pour quatre trous dans un mur.",
      "L’astuce du **niveau à eau en ligne** garde sa place sur de longues portées, mais pour la question quotidienne « est-ce droit ? », le téléphone dans votre poche gagne en rapidité.",
    ],
    accuracyH: "La précision à attendre",
    accuracy: [
      "Un téléphone calibré lit à environ 0,5° près sur une surface plane, proche d’un petit niveau physique et suffisant pour les meubles, les étagères et les cadres. Il ne remplace pas un long niveau quand vous montez un mur ou posez un sol, car une base courte ne voit pas une pente répartie sur trois mètres.",
      "Si une mesure paraît fausse, calibrez sur une surface de confiance, puis refaites un **contrôle de niveau** avant de couper ou de percer. Notre {accuracyGuide} détaille les quatre causes courantes.",
    ],
  },
  blogTitle: "Blog du niveau à bulle en ligne",
  blogDesc: "Guides et conseils pour contrôler l’horizontale et l’aplomb avec le niveau à bulle en ligne.",
  blogIntro: "Guides et conseils pour contrôler l’horizontale et l’aplomb avec le niveau à bulle en ligne.",
  blogIntro2: "Commencez par le guide pratique si vous découvrez l’outil, ou passez au guide de précision si un contrôle vous a déjà donné un chiffre auquel vous ne faites pas confiance. Si vous hésitez à acheter un niveau physique, le guide comparatif couvre la précision, le coût et les cas où un téléphone suffit vraiment.",
  posts: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      date: "4 octobre 2026",
      title: "Utiliser un niveau à bulle en ligne (pas à pas)",
      desc: "Ouvrez la page, posez le téléphone à plat, calibrez et lisez l’inclinaison en degrés pour contrôler toute surface.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      date: "7 novembre 2026",
      title: "Quelle est la précision d’un niveau à bulle de téléphone ? (et comment l’améliorer)",
      desc: "Quelle précision pour un niveau à bulle de téléphone ? Erreur typique, ce qui fausse une mesure et comment calibrer pour un contrôle fiable.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      date: "7 novembre 2026",
      title: "Mettre de niveau meubles, étagères et appareils avec un téléphone",
      desc: "Mettez de niveau meubles, étagères et appareils avec un téléphone en quelques minutes, avec des solutions pour un balancement et un sol en pente.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      date: "7 novembre 2026",
      title: "Niveau à bulle en ligne ou niveau physique : lequel choisir ?",
      desc: "Niveau en ligne contre niveau physique : précision, coût, rapidité et les cas où chacun gagne, plus la place d’un niveau à bulle en ligne.",
    },
  ],
  toolTitle: "Niveau à Bulle en Ligne — Niveau et Contrôleur Gratuit",
  toolDesc: "Niveau à bulle en ligne gratuit pour contrôler toutes les surfaces. Contrôle de niveau en degrés, niveau d’eau en ligne et outil de niveau sur téléphone — sans installation.",
  ogAlt: "Niveau à bulle en ligne — outil de niveau gratuit pour contrôler toutes les surfaces dans le navigateur",
  keywords: "niveau à bulle en ligne, niveau à bulle, niveau à bulle gratuit, niveau à bulle smartphone, contrôle de niveau en ligne, niveau en ligne, niveau à eau en ligne, outil de niveau, mise à niveau",
  guideLabel: "guide de précision",
  contact: {
  contactTitle: "Contacter le niveau à bulle en ligne — avis et rapports de bugs",
  contactDesc: "Contactez l'équipe du niveau à bulle en ligne. Signalez un problème de calibrage ou de précision du niveau à bulle gratuit, proposez une fonctionnalité ou posez une question sur la confidentialité.",
  contactIntro: "Nous sommes une petite équipe et nous lisons chaque message. Que vous ayez trouvé un bug, une idée de fonctionnalité ou simplement envie de dire bonjour, écrivez-nous avec le formulaire ci-dessous.",
  howH: "Comment fonctionne le contrôle",
  how: [
    "Avant d'écrire, il est utile de savoir ce que fait l'outil. Le niveau à bulle en ligne lit l'accéléromètre de votre appareil via le navigateur et affiche l'inclinaison en degrés sur deux axes. Rien n'est envoyé : le calcul se fait sur votre téléphone, et c'est pourquoi l'outil de contrôle de niveau continue de fonctionner hors ligne une fois la page chargée.",
    "Cette conception explique aussi la plupart des questions au support. La bulle ne bouge que si le navigateur est autorisé à lire les capteurs de mouvement, et le calibrage est stocké par appareil : un nouveau téléphone ou un cache vidé repartent donc de zéro.",
  ],
  fixesH: "Solutions rapides avant d'écrire",
  fixes: [
    { h: "La bulle reste figée à 0,0°", p: "autorisez l'accès aux mouvements quand le navigateur le demande, puis rechargez la page." },
    { h: "La mesure semble fausse d'un ou deux degrés", p: "recalibrez sur une surface de confiance, loin des aimants et du métal." },
    { h: "L'outil n'affiche rien du tout", p: "certains navigateurs de bureau n'ont pas d'accéléromètre : utilisez un téléphone ou une tablette." },
    { h: "La vue verticale semble instable", p: "appuyez le téléphone contre la surface au lieu d'estimer à l'œil." },
  ],
  tellH: "Ce qu'il faut nous indiquer",
  tell: [
    "Pour un bug, indiquez l'appareil, la version du navigateur et le chiffre affiché quand la bulle était centrée. Pour un problème de précision, précisez si le niveau à bulle gratuit avait été calibré et à quoi vous l'avez comparé : un niveau physique, un second téléphone ou une surface que vous supposiez plane.",
    "Pour une idée de fonctionnalité, décrivez le besoin plutôt que le bouton. « Je veux accrocher un miroir lourd sur un mur en plâtre » nous en dit plus que « ajoutez un bouton d'enregistrement », et cela mène souvent à un meilleur guide autant qu'à un meilleur outil.",
  ],
  emailH: "E-mail",
  emailPre: "Écrivez-nous à ",
  emailPost: ". Nous répondons généralement en quelques jours ouvrés.",
  sendH: "Envoyer un message",
  responseH: "Délais de réponse",
  response: [
    "C'est un petit projet, les réponses ne sont donc pas immédiates. Les signalements de précision et de calibrage sont prioritaires car ils concernent tous les utilisateurs du niveau à bulle en ligne ; les idées de fonctionnalités sont lues et notées mais peuvent ne pas recevoir de réponse personnelle. Les questions de confidentialité reçoivent toujours une réponse.",
    "En attendant, les guides valent le détour :",
  ],
  guideA: "le tutoriel pas à pas",
  guideMid: "et",
  guideB: "le guide mobilier et électroménager",
  guidePost: "répondent déjà à la plupart des questions de contrôle de niveau.",
  },
};

const de: BubbleSiloCopy = {
  back: "Zurück zur Wasserwaage",
  aboutTitle: "Über die Online-Wasserwaage — kostenloses Wasserwaage-Tool",
  aboutDesc: "Über die Online-Wasserwaage: wie ein Handy die Neigung misst, für wen die kostenlose Wasserwaage gedacht ist und welche Genauigkeit du erwarten kannst.",
  about: {
    whatH: "Was ist onlinecompass?",
    what: [
      "onlinecompass ist eine kostenlose Wasserwaage im Browser, die jedes Handy, Tablet oder Notebook in eine präzise Wasserwaage verwandelt. Prüfe Waagerechte und Lot, lies die Neigung in Grad ab und richte eine Fläche mit praxistauglicher Genauigkeit aus — ohne Installation und ohne Konto.",
      "Anders als die meisten Online-Werkzeuge, die eine Fläche nur schätzen, liest onlinecompass den Beschleunigungssensor und die Lagesensoren deines Geräts direkt über die Standard-APIs des Browsers. Nach dem Laden funktioniert es offline und behält die Sensordaten auf deinem Gerät.",
    ],
    howH: "Wie eine Wasserwaage im Handy wirklich arbeitet",
    how: [
      "In deinem Handy steckt ein Beschleunigungssensor, ein kleiner Sensor, der die Schwerkraft misst. Der Browser liest ihn über die Standard-Device-Motion-APIs, und dieses **Wasserwaage-Tool online** macht daraus zwei Zahlen: die Neigung entlang der langen Kante und entlang der kurzen Kante. Eine mittige Libelle bedeutet, dass beide nahe null liegen — genau das zeigt eine Libelle mit ihrer Luftblase.",
      "Deshalb braucht das Werkzeug einen Moment, bis es sich beruhigt. Legst du ein Handy ab, schwankt der Sensorwert für einen Bruchteil einer Sekunde, bevor der Filter ihn glättet. Wenn du je eine Seite mit **Online-Wasserwaage** gesehen hast, auf der die Libelle zittert, ist der Sensor in Ordnung: Die Seite zeigt rohe Werte statt einer gefilterten Messung.",
      "Bei einem **vertikalen Wasserwaage-Tool** ändert sich die Rechnung. Aufrecht gehalten misst das Handy die Neigung seiner Rückseite und nicht die eines Tisches, daher sind Lotmessungen naturgemäß etwas unruhiger. Wir zeigen beide Achsen gleichzeitig, damit du Wand und Regal prüfen kannst, ohne die Ansicht zu wechseln.",
    ],
    missionH: "Unser Anspruch",
    mission: [
      "Nivellieren sollte sofort und kostenlos sein. Wir haben onlinecompass gebaut, weil nie eine Wasserwaage in Reichweite war — und die Online-Alternativen ungenau, voller Werbung oder mit unnötigen Downloads verbunden waren. onlinecompass ist schnell, privat und von Anfang an genau.",
    ],
    featuresH: "Wichtigste Funktionen",
    features: [
      "Waagerechte und Lot in einer Ansicht",
      "Neigungswert in Grad für beide Achsen",
      "Vier präzise Kalibriermethoden für jedes Gerät",
      "Lineale und Werkzeuge an jedem Bildschirmrand, Vollbildmodus",
      "Dunkelmodus, der die Systemeinstellung respektiert",
      "Läuft in jedem modernen Browser — ohne Download, ohne Anmeldung",
    ],
    whoH: "Für wen die kostenlose Wasserwaage gedacht ist",
    who: [
      "Die meisten kommen mit einer Aufgabe hierher: Etwas im Haus wirkt schief und sie wollen eine Zahl, bevor sie bohren. Diese **kostenlose Wasserwaage** ist für genau diesen Moment gebaut — ein Bild aufhängen, ein Regal prüfen, sehen, ob ein Tisch wackelt, oder eine Waschmaschine prüfen, bevor sie über den Boden wandert.",
      "Sie ist außerdem eine vernünftige zweite Meinung für alle, die eine echte Wasserwaage besitzen und sie nicht finden, und ein schnelles **Nivellier-Tool** für Mieter, die für vier Löcher in der Wand keine 60-cm-Wasserwaage kaufen wollen.",
      "Der Trick mit der **Schlauchwaage online** hat bei langen Strecken weiterhin seinen Platz, doch bei der Alltagsfrage „ist das gerade?“ gewinnt das Handy in der Tasche bei der Geschwindigkeit.",
    ],
    accuracyH: "Welche Genauigkeit du erwarten kannst",
    accuracy: [
      "Ein kalibriertes Handy liest auf einer ebenen Fläche auf etwa 0,5° genau, was an eine kleine Wasserwaage heranreicht und für Möbel, Regale und Bilder reicht. Beim Bauen einer Wand oder beim Verlegen eines Bodens ersetzt es keine lange Wasserwaage, denn eine kurze Basis sieht keine über drei Meter verteilte Neigung.",
      "Wenn ein Wert falsch wirkt, kalibriere auf einer Fläche, der du traust, und mache vor dem Sägen oder Bohren einen zweiten **Wasserwaage-Check**. Unser {accuracyGuide} erklärt die vier häufigen Ursachen im Detail.",
    ],
  },
  blogTitle: "Blog der Online-Wasserwaage",
  blogDesc: "Anleitungen und Tipps zum Prüfen von Waagerechte und Lot mit der Online-Wasserwaage.",
  blogIntro: "Anleitungen und Tipps zum Prüfen von Waagerechte und Lot mit der Online-Wasserwaage.",
  blogIntro2: "Beginne mit der Anleitung, wenn das Werkzeug neu für dich ist, oder springe zum Genauigkeits-Guide, wenn ein Check dir schon eine Zahl geliefert hat, der du nicht traust. Wenn du überlegst, ob du überhaupt eine Wasserwaage kaufst, vergleicht unser Vergleichs-Guide Genauigkeit, Kosten und wann ein Handy wirklich reicht.",
  posts: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      date: "4. Oktober 2026",
      title: "Eine Online-Wasserwaage nutzen (Schritt für Schritt)",
      desc: "Seite öffnen, Handy flach auflegen, kalibrieren und die Neigung in Grad ablesen, um jede Fläche zu prüfen.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      date: "7. November 2026",
      title: "Wie genau ist eine Wasserwaage im Handy? (und wie du sie verbesserst)",
      desc: "Wie genau ist eine Wasserwaage im Handy? Typischer Fehler, was eine Messung verdirbt und wie du für einen verlässlichen Check kalibrierst.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      date: "7. November 2026",
      title: "Möbel, Regale und Geräte mit dem Handy nivellieren",
      desc: "Nivelliere Möbel, Regale und Geräte in Minuten mit dem Handy — inklusive Lösungen für Wackeln und einen schiefen Boden.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      date: "7. November 2026",
      title: "Online-Wasserwaage oder physische Wasserwaage: Was brauchst du?",
      desc: "Online gegen physisch: Genauigkeit, Kosten, Tempo und wann was gewinnt — plus wo eine Online-Wasserwaage ihren Platz hat.",
    },
  ],
  toolTitle: "Online-Wasserwaage — Kostenlose Wasserwaage & Niveau-Check",
  toolDesc: "Kostenlose Online-Wasserwaage für jede Fläche. Niveau in Grad messen, Wasserwaage online und Niveau-Check auf dem Handy — ohne Installation.",
  ogAlt: "Online-Wasserwaage — kostenloses Werkzeug für den Niveau-Check jeder Fläche im Browser",
  keywords: "online wasserwaage, wasserwaage, kostenlose wasserwaage, wasserwaage handy, wasserwaage online, niveaumesser, wasserwaage app, waagerecht prüfen, schlauchwaage online",
  guideLabel: "Genauigkeits-Guide",
  contact: {
  contactTitle: "Online-Wasserwaage kontaktieren — Feedback & Fehlerberichte",
  contactDesc: "Kontaktiere das Team der Online-Wasserwaage. Melde ein Kalibrierungs- oder Genauigkeitsproblem der kostenlosen Wasserwaage, schlage eine Funktion vor oder stelle eine Datenschutzfrage.",
  contactIntro: "Wir sind ein kleines Team und lesen jede Nachricht. Ob du einen Fehler gefunden hast, eine Funktionsidee hast oder einfach Hallo sagen willst — schreib uns über das Formular unten.",
  howH: "So funktioniert der Check",
  how: [
    "Bevor du schreibst, hilft es zu wissen, was das Werkzeug macht. Die Online-Wasserwaage liest den Beschleunigungssensor deines Geräts über den Browser und zeigt die Neigung in Grad auf zwei Achsen. Nichts wird hochgeladen: Die Messung entsteht auf deinem eigenen Handy, deshalb funktioniert das Werkzeug nach dem Laden der Seite auch offline weiter.",
    "Dieses Design erklärt auch die meisten Support-Fragen. Die Libelle bewegt sich nur, wenn der Browser Bewegungssensoren lesen darf, und die Kalibrierung wird pro Gerät gespeichert — ein neues Handy oder ein geleerter Cache starten also wieder bei null.",
  ],
  fixesH: "Schnelle Lösungen vor dem Schreiben",
  fixes: [
    { h: "Libelle bleibt bei 0,0° stehen", p: "erlaube den Bewegungszugriff, wenn der Browser fragt, und lade die Seite neu." },
    { h: "Messung weicht ein bis zwei Grad ab", p: "kalibriere auf einer Fläche, der du traust, abseits von Magneten und Metall." },
    { h: "Das Werkzeug zeigt gar nichts", p: "manche Desktop-Browser haben keinen Beschleunigungssensor — nutze ein Handy oder Tablet." },
    { h: "Die vertikale Ansicht wirkt unruhig", p: "lege das Handy an die Fläche an, statt nach Augenmaß zu schätzen." },
  ],
  tellH: "Was wir wissen müssen",
  tell: [
    "Bei einem Fehlerbericht nenne Gerät, Browser-Version und den Wert, der angezeigt wurde, als die Libelle mittig stand. Bei einer Genauigkeitsbeschwerde schreib dazu, ob die kostenlose Wasserwaage vorher kalibriert wurde und womit du verglichen hast — eine echte Wasserwaage, ein zweites Handy oder eine Fläche, die du für eben hieltest.",
    "Bei einer Funktionsidee beschreibe die Aufgabe statt des Buttons. „Ich möchte einen schweren Spiegel an eine Rigipswand hängen\" sagt uns mehr als „füge einen Speichern-Button hinzu\" — und führt meist zu einem besseren Guide und einem besseren Werkzeug.",
  ],
  emailH: "E-Mail",
  emailPre: "Schreib uns an ",
  emailPost: ". Wir antworten meist innerhalb weniger Werktage.",
  sendH: "Nachricht senden",
  responseH: "Antwortzeiten",
  response: [
    "Das ist ein kleines Projekt, Antworten kommen also nicht sofort. Berichte zu Genauigkeit und Kalibrierung haben Vorrang, weil sie alle Nutzer der Online-Wasserwaage betreffen; Funktionsideen werden gelesen und notiert, bekommen aber nicht immer eine persönliche Antwort. Datenschutzfragen werden immer beantwortet.",
    "Während du wartest, lohnen sich die Guides:",
  ],
  guideA: "die Schritt-für-Schritt-Anleitung",
  guideMid: "und",
  guideB: "der Möbel- und Geräte-Guide",
  guidePost: "beantworten die meisten Fragen zum Niveau-Check schon.",
  },
};

const pt: BubbleSiloCopy = {
  back: "Voltar ao nível de bolha",
  aboutTitle: "Sobre o nível de bolha online — ferramenta gratuita de nível",
  aboutDesc: "Sobre o nível de bolha online: como um celular mede a inclinação, para quem é o nível de bolha grátis e a precisão que você pode esperar de uma ferramenta de nível.",
  about: {
    whatH: "O que é o onlinecompass?",
    what: [
      "O onlinecompass é um nível de bolha gratuito, no navegador, que transforma qualquer celular, tablet ou notebook em um nível de precisão. Confira nível e prumo, leia a inclinação em graus e alinhe uma superfície com precisão real, sem instalar app e sem criar conta.",
      "Diferente da maioria das ferramentas de nível online, que apenas estimam uma superfície, o onlinecompass lê o acelerômetro e os sensores de orientação do aparelho diretamente pelas APIs padrão do navegador. Depois de carregado, funciona offline e mantém os dados dos sensores no seu aparelho.",
    ],
    howH: "Como um nível de bolha de celular realmente funciona",
    how: [
      "O seu celular tem um acelerômetro, um sensor minúsculo que mede a gravidade. O navegador o lê pelas APIs padrão de movimento do dispositivo, e esta **ferramenta de nível online** transforma essa leitura em dois números: a inclinação na borda longa e na borda curta. Uma bolha centralizada significa que os dois estão perto de zero, exatamente o que um tubo de nível mostra com a bolha de ar.",
      "É por isso que a ferramenta precisa de um instante para estabilizar. Coloque o celular e a saída do sensor oscila por uma fração de segundo antes de o filtro suavizar. Se você já usou uma página de **nível de bolha online** em que a bolha treme, o sensor está bem: a página apenas mostra valores brutos em vez de uma leitura filtrada.",
      "Para uma **ferramenta de nível vertical** o cálculo muda. Na vertical, o celular mede a inclinação da face traseira e não a de uma mesa, então leituras de prumo são naturalmente um pouco mais ruidosas. Mostramos os dois eixos ao mesmo tempo para você conferir parede e prateleira sem trocar de vista.",
    ],
    missionH: "Nossa missão",
    mission: [
      "Nivelar deveria ser instantâneo e gratuito. Criamos o onlinecompass porque nunca havia um nível por perto — e as alternativas online eram imprecisas, cheias de anúncios ou exigiam downloads desnecessários. O onlinecompass é rápido, privado e preciso desde o início.",
    ],
    featuresH: "Principais recursos",
    features: [
      "Medição de nível e prumo em uma única vista",
      "Leitura de inclinação em graus nos dois eixos",
      "Quatro métodos de calibração de precisão para qualquer aparelho",
      "Réguas e ferramentas em qualquer borda da tela, modo tela cheia",
      "Modo escuro que respeita a preferência do sistema",
      "Funciona em qualquer navegador moderno — sem download e sem cadastro",
    ],
    whoH: "Para quem é o nível de bolha grátis",
    who: [
      "A maioria chega aqui com uma tarefa: algo na casa parece torto e a pessoa quer um número antes de furar. Este **nível de bolha grátis** foi feito para esse momento — pendurar um quadro, conferir uma prateleira, ver se a mesa balança ou confirmar a máquina de lavar antes que ela ande pelo piso.",
      "Também é uma segunda opinião sensata para quem tem um nível de verdade e não o encontra, e uma **ferramenta de nivelamento** rápida para inquilinos que preferem não comprar uma régua de 60 cm para quatro furos na parede.",
      "O truque do **nível de água online** ainda tem seu lugar em vãos longos, mas para a pergunta do dia a dia “isso está reto?”, o celular no bolso ganha em rapidez.",
    ],
    accuracyH: "A precisão que você pode esperar",
    accuracy: [
      "Um celular calibrado lê com cerca de 0,5° de margem em uma superfície plana, perto de um nível pequeno e suficiente para móveis, prateleiras e quadros. Não substitui um nível longo quando você levanta uma parede ou assenta um piso, porque uma base curta não vê uma inclinação espalhada por três metros.",
      "Se uma leitura parecer errada, calibre sobre uma superfície em que você confie e faça uma segunda **verificação de nível** antes de cortar ou furar. Nosso {accuracyGuide} explica as quatro causas comuns em detalhe.",
    ],
  },
  blogTitle: "Blog do nível de bolha online",
  blogDesc: "Guias e dicas para conferir nível e prumo com o nível de bolha online.",
  blogIntro: "Guias e dicas para conferir nível e prumo com o nível de bolha online.",
  blogIntro2: "Comece pelo guia prático se você é novo na ferramenta, ou vá para o guia de precisão se uma verificação já deu um número em que você não confia. Se está decidindo se compra um nível físico, o guia comparativo cobre precisão, custo e quando um celular é realmente suficiente.",
  posts: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      date: "4 de outubro de 2026",
      title: "Como usar um nível de bolha online (passo a passo)",
      desc: "Abra a página, apoie o celular plano, calibre e leia a inclinação em graus para conferir qualquer superfície.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      date: "7 de novembro de 2026",
      title: "Qual a precisão do nível de bolha de um celular? (e como melhorar)",
      desc: "Qual a precisão do nível de bolha de um celular? Erro típico, o que estraga uma leitura e como calibrar para uma verificação confiável.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      date: "7 de novembro de 2026",
      title: "Como nivelar móveis, prateleiras e eletrodomésticos com o celular",
      desc: "Nivele móveis, prateleiras e eletrodomésticos com o celular em minutos, com soluções para balanço e piso inclinado.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      date: "7 de novembro de 2026",
      title: "Nível de bolha online ou nível físico: qual você precisa?",
      desc: "Online contra físico: precisão, custo, rapidez e quando cada um ganha, além de onde o nível de bolha online se encaixa.",
    },
  ],
  toolTitle: "Nível de Bolha Online — Nível Grátis e Verificador de Nível",
  toolDesc: "Nível de bolha online grátis para verificar qualquer superfície. Verificação de nível em graus, nível de água online e ferramenta de nível no celular — sem instalar.",
  ogAlt: "Nível de bolha online — ferramenta de nível grátis para verificar qualquer superfície no navegador",
  keywords: "nível de bolha online, nível de bolha, nível de bolha grátis, nível de bolha celular, verificar nível online, nível online, nível de água online, ferramenta de nível, nivelar superfície",
  guideLabel: "guia de precisão",
  contact: {
  contactTitle: "Falar com o nível de bolha online — feedback e relatos de erros",
  contactDesc: "Fale com a equipe do nível de bolha online. Relate um problema de calibração ou precisão do nível de bolha grátis, sugira um recurso ou tire uma dúvida sobre privacidade.",
  contactIntro: "Somos uma equipe pequena e lemos todas as mensagens. Se você encontrou um erro, tem uma ideia de recurso ou só quer dar um oi, escreva pelo formulário abaixo.",
  howH: "Como a verificação funciona",
  how: [
    "Antes de escrever, vale saber o que a ferramenta faz. O nível de bolha online lê o acelerômetro do seu aparelho pelo navegador e mostra a inclinação em graus em dois eixos. Nada é enviado: o cálculo acontece no seu próprio celular, e é por isso que a ferramenta de verificação de nível continua funcionando offline depois que a página carrega.",
    "Esse desenho também explica a maioria das dúvidas de suporte. A bolha só se mexe se o navegador tiver permissão para ler os sensores de movimento, e a calibração é guardada por aparelho — então um celular novo ou um cache limpo começam do zero outra vez.",
  ],
  fixesH: "Soluções rápidas antes de escrever",
  fixes: [
    { h: "A bolha travada em 0,0°", p: "permita o acesso ao movimento quando o navegador pedir e recarregue a página." },
    { h: "A leitura erra um ou dois graus", p: "recalibre numa superfície confiável, longe de ímãs e metal." },
    { h: "A ferramenta não mostra nada", p: "alguns navegadores de computador não têm acelerômetro — use um celular ou tablet." },
    { h: "A visão vertical parece instável", p: "encoste o celular na superfície em vez de avaliar no olho." },
  ],
  tellH: "O que nos contar",
  tell: [
    "Para um relato de erro, informe o aparelho, a versão do navegador e o número que aparecia com a bolha centralizada. Para uma reclamação de precisão, diga se o nível de bolha grátis foi calibrado antes e com o que você comparou — um nível físico, um segundo celular ou uma superfície que você supunha plana.",
    "Para uma ideia de recurso, descreva a tarefa em vez do botão. “Quero pendurar um espelho pesado numa parede de gesso” diz mais do que “adicione um botão de salvar”, e costuma gerar um guia melhor além de uma ferramenta melhor.",
  ],
  emailH: "E-mail",
  emailPre: "Fale com a gente em ",
  emailPost: ". Normalmente respondemos em alguns dias úteis.",
  sendH: "Enviar uma mensagem",
  responseH: "Prazos de resposta",
  response: [
    "É um projeto pequeno, então as respostas não são imediatas. Relatos de precisão e calibração têm prioridade porque afetam todos os usuários do nível de bolha online; ideias de recursos são lidas e registradas, mas podem não receber resposta pessoal. Dúvidas sobre privacidade são sempre respondidas.",
    "Enquanto espera, vale a pena ler os guias:",
  ],
  guideA: "o tutorial passo a passo",
  guideMid: "e o",
  guideB: "guia de móveis e eletrodomésticos",
  guidePost: "já respondem a maioria das dúvidas sobre verificar nível.",
  },
};

const ko: BubbleSiloCopy = {
  back: "수평계로 돌아가기",
  aboutTitle: "온라인 수평계 소개 — 무료 수평 확인 도구",
  aboutDesc: "온라인 수평계 소개: 스마트폰이 기울기를 재는 방식, 무료 수평계가 누구를 위한 도구인지, 수평 확인 도구에 기대할 수 있는 정확도를 설명합니다.",
  about: {
    whatH: "onlinecompass란?",
    what: [
      "onlinecompass는 스마트폰, 태블릿, 노트북을 정밀 수평계로 바꿔 주는 무료 브라우저 기반 수평계입니다. 수평과 수직을 확인하고 기울기를 도 단위로 읽으며 실제 수준의 정확도로 표면을 맞출 수 있고, 앱 설치도 계정도 필요 없습니다.",
      "표면을 추측만 하는 대부분의 온라인 수평 도구와 달리, onlinecompass는 기기의 가속도 센서와 방향 센서를 브라우저 표준 API로 직접 읽습니다. 한 번 불러오면 오프라인에서도 동작하며 센서 데이터는 기기 안에 남습니다.",
    ],
    howH: "스마트폰 수평계가 실제로 작동하는 방식",
    how: [
      "스마트폰에는 중력을 측정하는 작은 센서인 가속도 센서가 들어 있습니다. 브라우저는 표준 기기 동작 API로 이를 읽고, 이 **온라인 수평 확인 도구**가 그 값을 두 개의 숫자로 바꿉니다. 긴 모서리 방향의 기울기와 짧은 모서리 방향의 기울기입니다. 기포가 가운데 있으면 두 값이 모두 0에 가깝다는 뜻이며, 이는 기포관 수평계가 기포로 보여 주는 것과 같습니다.",
      "그래서 도구가 값을 안정시키는 데 잠깐이 필요합니다. 스마트폰을 내려놓으면 필터가 부드럽게 만들기 전까지 센서 출력이 아주 짧게 흔들립니다. 기포가 떨리는 **온라인 수평계** 페이지를 써 봤다면 센서는 정상이고, 그 페이지만 필터를 거치지 않은 원시 값을 보여 주는 것입니다.",
      "**세로 수평 도구**에서는 계산이 달라집니다. 세워서 들면 스마트폰은 테이블의 기울기가 아니라 뒷면의 기울기를 재기 때문에 수직 측정값은 자연히 조금 더 흔들립니다. 두 축을 동시에 보여 주므로 화면을 바꾸지 않고 벽과 선반을 함께 확인할 수 있습니다.",
    ],
    missionH: "우리의 목표",
    mission: [
      "수평을 확인하는 일은 즉시, 무료여야 합니다. 수평계가 손 닿는 곳에 없고, 온라인 대안은 부정확하거나 광고로 가득하거나 불필요한 설치를 요구했기 때문에 onlinecompass를 만들었습니다. 빠르고, 개인정보를 지키고, 처음부터 정확한 것이 원칙입니다.",
    ],
    featuresH: "주요 기능",
    features: [
      "수평과 수직을 한 화면에서 측정",
      "두 축의 기울기를 도 단위로 표시",
      "모든 기기를 위한 네 가지 정밀 보정 방법",
      "화면 가장자리 자 도구, 전체 화면 모드",
      "시스템 설정을 따르는 다크 모드",
      "최신 브라우저에서 동작 — 다운로드도 가입도 없음",
    ],
    whoH: "무료 수평계가 필요한 사람",
    who: [
      "대부분은 한 가지 일 때문에 이곳에 옵니다. 집 안의 무언가가 기울어 보이고, 구멍을 뚫기 전에 숫자를 알고 싶은 경우입니다. 이 **무료 수평계**는 바로 그 순간을 위해 만들어졌습니다. 액자를 걸기, 선반 확인하기, 테이블이 흔들리는지 보기, 세탁기가 바닥을 걸어 다니기 전에 확인하기.",
      "실제 수평계를 가지고 있지만 찾지 못하는 사람에게는 합리적인 두 번째 의견이 되고, 벽에 네 개의 구멍을 뚫으려고 60cm 수평대를 사고 싶지 않은 세입자에게는 빠른 **수평 도구**가 됩니다.",
      "**수평계 물** 방식의 수면 수평은 긴 구간에서 여전히 쓸모가 있지만, “이거 반듯한가?”라는 일상의 질문에는 주머니 속 스마트폰이 속도로 이깁니다.",
    ],
    accuracyH: "기대할 수 있는 정확도",
    accuracy: [
      "보정된 스마트폰은 평평한 표면에서 약 0.5° 이내로 읽으며, 작은 수평계에 가깝고 가구·선반·액자에는 충분합니다. 벽을 세우거나 바닥을 깔 때 긴 수평계를 대신하지는 못합니다. 짧은 기준으로는 3미터에 걸쳐 퍼진 기울기를 볼 수 없기 때문입니다.",
      "값이 이상해 보이면 믿을 수 있는 표면에서 보정하고, 자르거나 뚫기 전에 **수평 확인**을 한 번 더 하세요. 흔한 원인 네 가지는 {accuracyGuide}에서 자세히 설명합니다.",
    ],
  },
  blogTitle: "온라인 수평계 블로그",
  blogDesc: "온라인 수평계로 수평과 수직을 확인하는 방법과 팁.",
  blogIntro: "온라인 수평계로 수평과 수직을 확인하는 방법과 팁.",
  blogIntro2: "도구가 처음이라면 사용법 가이드부터, 이미 믿기 어려운 숫자가 나왔다면 정확도 가이드로 이동하세요. 실제 수평계를 살지 고민 중이라면 비교 가이드에서 정확도, 비용, 스마트폰으로 충분한 경우를 확인할 수 있습니다.",
  posts: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      date: "2026\ub144 10\uc6d4 4\uc77c",
      title: "온라인 수평계 사용법 (단계별)",
      desc: "페이지를 열고 스마트폰을 평평하게 두고 보정한 뒤 기울기를 도 단위로 읽어 어떤 표면이든 확인합니다.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      date: "2026\ub144 11\uc6d4 7\uc77c",
      title: "스마트폰 수평계의 정확도는? (개선 방법 포함)",
      desc: "스마트폰 수평계는 얼마나 정확할까요? 일반적인 오차, 측정을 망치는 요인, 신뢰할 수 있는 확인을 위한 보정 방법.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      date: "2026\ub144 11\uc6d4 7\uc77c",
      title: "스마트폰으로 가구·선반·가전 수평 맞추기",
      desc: "스마트폰으로 가구, 선반, 가전을 몇 분 만에 수평으로 맞추고, 흔들림과 기울어진 바닥 해결법도 확인하세요.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      date: "2026\ub144 11\uc6d4 7\uc77c",
      title: "온라인 수평계와 실제 수평계, 무엇이 필요할까?",
      desc: "온라인과 실제 수평계 비교: 정확도, 비용, 속도, 각각 유리한 상황과 온라인 수평계의 자리.",
    },
  ],
  toolTitle: "온라인 수평계 — 무료 수평기·수평 확인 도구",
  toolDesc: "온라인 수평계로 어떤 표면이든 수평 확인하세요. 기울기를 도 단위로 보여 주는 무료 수평기·수준기 도구로, 휴대폰만 있으면 됩니다. 설치 불필요.",
  ogAlt: "온라인 수평계 — 브라우저에서 모든 표면의 수평을 확인하는 무료 수평기 도구",
  keywords: "온라인 수평계, 수평계, 무료 수평계, 스마트폰 수평계, 수평 확인, 기울기 측정, 수평계 앱, 수평 맞추기, 온라인 수평 도구",
  guideLabel: "정확도 가이드",
  contact: {
  contactTitle: "온라인 수평계 문의 — 의견 및 버그 신고",
  contactDesc: "온라인 수평계 팀에 문의하세요. 무료 수평계의 보정이나 정확도 문제를 알리고, 기능을 제안하거나 개인정보 관련 질문을 보낼 수 있습니다.",
  contactIntro: "작은 팀이지만 모든 메시지를 읽습니다. 버그를 발견했거나 기능 제안이 있거나 그냥 인사를 전하고 싶다면 아래 양식을 이용해 주세요.",
  howH: "측정이 작동하는 방식",
  how: [
    "문의 전에 이 도구가 무엇을 하는지 알면 도움이 됩니다. 온라인 수평계는 브라우저를 통해 기기의 가속도 센서를 읽고 두 축의 기울기를 도 단위로 보여줍니다. 어떤 데이터도 전송되지 않으며 계산은 사용자의 휴대폰에서 이루어지기 때문에, 페이지를 한 번 열면 오프라인에서도 수평 확인 도구가 계속 작동합니다.",
    "이 구조는 대부분의 지원 문의도 설명해 줍니다. 브라우저가 동작 센서를 읽도록 허용된 경우에만 기포가 움직이고, 보정 값은 기기별로 저장되므로 새 휴대폰이나 캐시를 지운 브라우저는 다시 0에서 시작합니다.",
  ],
  fixesH: "문의 전에 해볼 수 있는 간단한 해결",
  fixes: [
    { h: "기포가 0.0°에서 멈춤", p: "브라우저가 요청하면 동작 접근을 허용한 뒤 페이지를 새로 고치세요." },
    { h: "측정값이 1~2도 어긋남", p: "자석과 금속에서 떨어진, 믿을 수 있는 면에서 다시 보정하세요." },
    { h: "아무것도 표시되지 않음", p: "일부 데스크톱 브라우저에는 가속도 센서가 없습니다. 휴대폰이나 태블릿을 사용하세요." },
    { h: "수직 보기가 흔들림", p: "눈대중으로 판단하지 말고 휴대폰을 면에 대세요." },
  ],
  tellH: "알려 주실 내용",
  tell: [
    "버그 신고라면 기기, 브라우저 버전, 기포가 중앙에 있을 때 표시된 숫자를 알려 주세요. 정확도 문제라면 무료 수평계를 먼저 보정했는지, 무엇과 비교했는지(실물 수평계, 두 번째 휴대폰, 평평하다고 생각한 면 등)를 적어 주세요.",
    "기능 제안이라면 버튼이 아니라 하려는 작업을 설명해 주세요. “석고 벽에 무거운 거울을 걸고 싶다”가 “저장 버튼을 추가해 달라”보다 훨씬 많은 정보를 주고, 보통 더 나은 가이드와 더 나은 도구로 이어집니다.",
  ],
  emailH: "이메일",
  emailPre: "다음 주소로 연락하세요: ",
  emailPost: ". 보통 영업일 기준 며칠 안에 답장합니다.",
  sendH: "메시지 보내기",
  responseH: "답변 소요 시간",
  response: [
    "작은 프로젝트라 답변이 즉시 이루어지지는 않습니다. 정확도와 보정 관련 신고는 모든 온라인 수평계 사용자에게 영향을 주기 때문에 우선 처리합니다. 기능 아이디어는 읽고 기록하지만 개별 답변이 없을 수 있습니다. 개인정보 관련 질문에는 항상 답변합니다.",
    "기다리는 동안 가이드를 읽어 보세요.",
  ],
  guideA: "단계별 사용법",
  guideMid: "과",
  guideB: "가구·가전 가이드",
  guidePost: "만 봐도 수평 확인에 관한 대부분의 궁금증이 풀립니다.",
  },
};

const it: BubbleSiloCopy = {
  back: "Torna alla livella",
  aboutTitle: "Informazioni sulla livella online — strumento gratuito di controllo",
  aboutDesc: "La livella online: come un telefono misura l’inclinazione, a chi serve la livella gratuita e la precisione che puoi aspettarti da uno strumento di controllo del livello.",
  about: {
    whatH: "Che cos’è onlinecompass?",
    what: [
      "onlinecompass è una livella gratuita nel browser che trasforma qualsiasi telefono, tablet o portatile in una livella di precisione. Controlla livello e piombo, leggi l’inclinazione in gradi e allinea una superficie con precisione reale, senza installare app e senza account.",
      "A differenza della maggior parte degli strumenti di livello online, che si limitano a stimare una superficie, onlinecompass legge l’accelerometro e i sensori di orientamento del dispositivo direttamente tramite le API standard del browser. Una volta caricato funziona offline e tiene i dati dei sensori sul tuo dispositivo.",
    ],
    howH: "Come funziona davvero una livella da telefono",
    how: [
      "Il tuo telefono contiene un accelerometro, un piccolo sensore che misura la gravità. Il browser lo legge tramite le API standard di movimento del dispositivo, e questo **strumento di controllo del livello online** trasforma quella lettura in due numeri: l’inclinazione lungo il lato lungo e lungo il lato corto. Una bolla centrata significa che entrambi sono vicini a zero, esattamente ciò che mostra la fiala di una livella con la sua bolla d’aria.",
      "È anche il motivo per cui lo strumento ha bisogno di un istante per stabilizzarsi. Appoggi il telefono e l’uscita del sensore oscilla per una frazione di secondo prima che il filtro la smussi. Se hai usato una pagina di **livella online** in cui la bolla tremava, il sensore va bene: la pagina mostra semplicemente valori grezzi invece di una lettura filtrata.",
      "Con uno **strumento di livello verticale** il calcolo cambia. Tenuto in verticale, il telefono misura l’inclinazione della faccia posteriore e non quella di un tavolo, quindi le letture di piombo sono naturalmente un po’ più rumorose. Mostriamo entrambi gli assi insieme, così puoi controllare parete e mensola senza cambiare vista.",
    ],
    missionH: "La nostra missione",
    mission: [
      "Mettere in bolla dovrebbe essere immediato e gratuito. Abbiamo creato onlinecompass perché una livella non era mai a portata di mano — e le alternative online erano imprecise, piene di pubblicità o richiedevano download inutili. onlinecompass è veloce, riservato e preciso fin dall’inizio.",
    ],
    featuresH: "Funzioni principali",
    features: [
      "Misura di livello e piombo in un’unica vista",
      "Lettura dell’inclinazione in gradi su entrambi gli assi",
      "Quattro metodi di calibrazione di precisione per ogni dispositivo",
      "Righelli e strumenti su ogni bordo dello schermo, modalità a schermo intero",
      "Modalità scura che rispetta le impostazioni di sistema",
      "Funziona su ogni browser moderno — senza download e senza registrazione",
    ],
    whoH: "A chi serve la livella gratuita",
    who: [
      "La maggior parte delle persone arriva qui con un solo compito: qualcosa in casa sembra storto e vogliono un numero prima di trapanare. Questa **livella gratuita** è costruita per quel momento — appendere un quadro, controllare una mensola, vedere se un tavolo traballa o verificare una lavatrice prima che si metta a camminare sul pavimento.",
      "È anche un secondo parere sensato per chi ha una livella vera e non la trova, e uno **strumento di livellamento** rapido per gli inquilini che preferiscono non comprare una barra da 60 cm per quattro fori nel muro.",
      "Il trucco della **livella ad acqua online** ha ancora il suo posto sulle luci lunghe, ma per la domanda quotidiana “è dritto?” il telefono in tasca vince sulla velocità.",
    ],
    accuracyH: "La precisione che puoi aspettarti",
    accuracy: [
      "Un telefono calibrato legge entro circa 0,5° su una superficie piana, vicino a una livella piccola e sufficiente per mobili, mensole e quadri. Non sostituisce una livella lunga quando costruisci una parete o posi un pavimento, perché una base corta non vede una pendenza distribuita su tre metri.",
      "Se una lettura sembra sbagliata, calibra su una superficie di cui ti fidi e ripeti il **controllo del livello** prima di tagliare o trapanare. La nostra {accuracyGuide} spiega in dettaglio le quattro cause più comuni.",
    ],
  },
  blogTitle: "Blog della livella online",
  blogDesc: "Guide e consigli per controllare livello e piombo con la livella online.",
  blogIntro: "Guide e consigli per controllare livello e piombo con la livella online.",
  blogIntro2: "Inizia dalla guida pratica se sei nuovo dello strumento, oppure passa alla guida alla precisione se un controllo ti ha già dato un numero di cui non ti fidi. Se stai decidendo se comprare una livella fisica, la guida comparativa copre precisione, costo e quando un telefono è davvero sufficiente.",
  posts: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      date: "4 ottobre 2026",
      title: "Come usare una livella online (passo dopo passo)",
      desc: "Apri la pagina, appoggia il telefono in piano, calibra e leggi l’inclinazione in gradi per controllare qualsiasi superficie.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      date: "7 novembre 2026",
      title: "Quanto è precisa la livella di uno smartphone? (e come migliorarla)",
      desc: "Quanto è precisa la livella di un telefono? Errore tipico, cosa rovina una lettura e come calibrare per un controllo affidabile.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      date: "7 novembre 2026",
      title: "Come livellare mobili, mensole ed elettrodomestici con il telefono",
      desc: "Metti in bolla mobili, mensole ed elettrodomestici con il telefono in pochi minuti, con soluzioni per il traballamento e un pavimento in pendenza.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      date: "7 novembre 2026",
      title: "Livella online o livella fisica: quale ti serve?",
      desc: "Online contro fisica: precisione, costo, rapidità e quando vince ciascuna, più il posto della livella online.",
    },
  ],
  toolTitle: "Livella a Bolla Online — Livella e Controllo di Livello Gratis",
  toolDesc: "Livella a bolla online gratis per controllare ogni superficie. Controllo del livello in gradi, livella ad acqua online e strumento livello sul telefono — senza installazione.",
  ogAlt: "Livella a bolla online — strumento di livello gratuito per controllare ogni superficie nel browser",
  keywords: "livella online, livella, livella gratuita, livella smartphone, controllo del livello online, livella bolla, livella ad acqua online, strumento di livello, mettere in bolla",
  guideLabel: "guida alla precisione",
  contact: {
  contactTitle: "Contatta il livello a bolla online — feedback e segnalazioni",
  contactDesc: "Contatta il team del livello a bolla online. Segnala un problema di calibrazione o precisione del livello a bolla gratuito, proponi una funzione o fai una domanda sulla privacy.",
  contactIntro: "Siamo un team piccolo e leggiamo ogni messaggio. Se hai trovato un bug, hai un'idea per una funzione o vuoi solo salutarci, scrivici con il modulo qui sotto.",
  howH: "Come funziona il controllo",
  how: [
    "Prima di scrivere è utile sapere cosa fa lo strumento. Il livello a bolla online legge l'accelerometro del tuo dispositivo tramite il browser e mostra l'inclinazione in gradi su due assi. Nulla viene caricato: il calcolo avviene sul tuo telefono, ed è per questo che lo strumento di controllo livello continua a funzionare offline una volta caricata la pagina.",
    "Questa struttura spiega anche la maggior parte delle domande al supporto. La bolla si muove solo se il browser è autorizzato a leggere i sensori di movimento, e la calibrazione è salvata per dispositivo: un telefono nuovo o una cache svuotata ripartono quindi da zero.",
  ],
  fixesH: "Soluzioni rapide prima di scrivere",
  fixes: [
    { h: "La bolla resta ferma a 0,0°", p: "consenti l'accesso al movimento quando il browser lo chiede, poi ricarica la pagina." },
    { h: "La lettura sbaglia di un grado o due", p: "ricalibra su una superficie affidabile, lontano da magneti e metallo." },
    { h: "Lo strumento non mostra nulla", p: "alcuni browser desktop non hanno accelerometro: usa un telefono o un tablet." },
    { h: "La vista verticale sembra instabile", p: "appoggia il telefono alla superficie invece di valutare a occhio." },
  ],
  tellH: "Cosa raccontarci",
  tell: [
    "Per una segnalazione di bug, indica dispositivo, versione del browser e il numero mostrato con la bolla centrata. Per un problema di precisione, specifica se il livello a bolla gratuito era stato calibrato e con cosa lo hai confrontato: una livella fisica, un secondo telefono o una superficie che supponevi piana.",
    "Per un'idea di funzione, descrivi il lavoro invece del pulsante. «Voglio appendere uno specchio pesante a una parete di cartongesso» ci dice più di «aggiungi un pulsante di salvataggio», e di solito porta a una guida migliore oltre che a uno strumento migliore.",
  ],
  emailH: "Email",
  emailPre: "Scrivici a ",
  emailPost: ". Di solito rispondiamo entro qualche giorno lavorativo.",
  sendH: "Invia un messaggio",
  responseH: "Tempi di risposta",
  response: [
    "È un progetto piccolo, quindi le risposte non sono immediate. Le segnalazioni su precisione e calibrazione hanno priorità perché riguardano tutti gli utenti del livello a bolla online; le idee sulle funzioni vengono lette e registrate ma potrebbero non ricevere una risposta personale. Le domande sulla privacy ricevono sempre risposta.",
    "Nell'attesa, vale la pena leggere le guide:",
  ],
  guideA: "il tutorial passo passo",
  guideMid: "e",
  guideB: "la guida per mobili ed elettrodomestici",
  guidePost: "rispondono già alla maggior parte delle domande sul controllo del livello.",
  },
};

export const bubbleSupport: Record<string, BubbleSiloCopy> = { en, es, ja, fr, de, pt, ko, it };
