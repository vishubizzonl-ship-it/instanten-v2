/**
 * Localised body copy for the bubble level tool page.
 *
 * The tool page rendered one English <section> (heading, 5 sub-headings and 11
 * paragraphs), one English guide list and one English FAQ block, so every
 * locale URL showed a translated header above English prose.
 *
 * `**text**` marks the keywords the English page emphasises; the renderer turns
 * it into <strong>, so the translated copy keeps the same weight and rhythm.
 */
export type BubbleSection = { h: string; paras: string[]; list?: string[] };

export type BubbleProse = {
  aboutH: string;
  intro: string[];
  sections: BubbleSection[];
  guidesH: string;
  guides: { href: string; title: string; desc: string }[];
  guidesAll: string;
  faqH: string;
  faq: { q: string; a: string }[];
};

const en: BubbleProse = {
  aboutH: "The free online bubble level that checks any surface",
  intro: [
    "This **online bubble level** turns the phone in your hand into a working **level checker tool** in one tap. There is nothing to install, no account to create and no download waiting time — you open the page, place the device on the surface and the bubble tells you instantly whether that surface is flat, tilted or plumb. It is a **free bubble level** built for one job: telling you the truth about a surface before you hang a shelf, fix a frame or level a table.",
    "If you have ever searched for “**bubble level online**”, “**spirit level online**” or “**level checker tool online**”, you already know the problem. You are holding a picture frame that looks straight, a washing machine that wobbles, or a desk that seems to slope — and your eyes are not a measuring instrument. A **bubble level check online** removes the guesswork in two seconds, with a number in degrees instead of a hunch.",
  ],
  sections: [
    {
      h: "What this bubble level tool actually shows you",
      paras: [
        "The **online bubble level** reads the accelerometer inside your device and draws the same information a physical spirit level shows, only with more detail. You get a horizontal vial for flat surfaces, a **vertical level tool online** for plumb walls and door frames, and a bullseye view that shows tilt in every direction at once — left to right and front to back. Instead of judging where a bubble sits between two lines, you read a degrees figure, so “almost level” becomes an exact number you can act on.",
        "Because the reading is digital, this **leveler tool** can do things a wooden level cannot. It updates as you tilt the surface, so you can watch the number fall toward zero while you slide a shim under a leg. It keeps working in dark corners where you cannot see a bubble clearly. And it never loses its calibration fluid, because there is no fluid — the sensor is solid state and the zero point is set in software.",
      ],
    },
    {
      h: "How to check a surface with the online bubble level",
      paras: [
        "Open the page, allow the sensor prompt once, then place the device flat on the surface you want to test. Hold it still for a second so the reading settles. The degrees value is your answer: a number near 0.0° means the surface is level, and the direction of the offset tells you which side needs lifting. For a plumb check, stand the device against the wall on its long edge and use the vertical vial in the same way.",
      ],
      list: [
        "Take the phone out of its magnetic case and away from metal tools, screws and pipes.",
        "Check the same surface in two directions, at 90° to each other, before you drill.",
        "If the reading drifts, put the device on a known flat surface and recalibrate there.",
        "Keep the device on the surface itself — holding it in your hand adds your own tilt.",
      ],
    },
    {
      h: "Bubble level vs a physical spirit level",
      paras: [
        "A traditional **bubble level ruler** is a sealed tube with a bubble in it, and it is excellent at what it does — but you only get it when you remember to carry it. A **bubble level online** is already in your pocket, which matters when a shelf looks off and you are standing on a chair. The trade-off is precision: a good 60 cm spirit level can detect a slope a phone sensor will round away. For hanging, furniture, appliances and quick checks the digital reading is more than enough; for tiling a floor or fitting a worktop, a long physical level still wins.",
        "Many people search for a **water level tool online** expecting a hose-and-water levelling trick. This page does the same job electronically: no water, no hose, no mess, and it works at any distance from the surface. Likewise, if a **bubble level online** search brought you here, the tool below is the interactive answer — not a diagram of one.",
      ],
    },
    {
      h: "Who uses a free online level",
      paras: [
        "Anyone who hangs, builds, mounts or installs. Homeowners use the **free online level** to hang picture frames, shelves and mirrors straight the first time. Renters use the **online level bubble level** to check whether a wardrobe or a fridge is sitting level before blaming the door. DIY and carpentry work uses the vertical vial for door frames, studs and posts. Photographers and videographers check that a tripod head is flat. **Online level check** use also spikes around furniture assembly — flat-pack instructions assume a level floor, and a phone is the only tool within reach.",
        "Beyond the workshop, the same **online bubble level free** reading helps in small everyday ways. Check whether a table rocks because the floor slopes or because one leg is short. Confirm a washing machine is level so it stops walking across the floor. Level a camper van, a caravan or a rooftop tent before you sleep in it. Set up a pool table, a ping-pong table or a dartboard. Test a new phone case or a desk stand for wobble. None of these jobs need a toolbox — they need one honest number.",
      ],
    },
    {
      h: "Accuracy, privacy and what to expect",
      paras: [
        "Accuracy depends on the sensor in your device, not on the page. Phone accelerometers are typically good to about one degree, which is plenty for hanging and furniture work, and the reading gets more stable the longer the device sits still. Nothing is uploaded: the sensor data is read in your browser and never leaves the device, no account is needed and there is no tracking of your readings. Once the page has loaded, this **bubble level check** keeps working even without a network connection, which is useful in a basement, a garage or a building site.",
        "Use it as a fast **level checker tool** before you commit to a hole in the wall, and keep a physical level for the jobs where millimetres matter. That combination — a phone for the quick answer, a spirit level for the final fix — is how most people actually work. If the bubble looks wrong, check the surface, the calibration and nearby metal before you blame the tool, and recalibrate on a surface you trust.",
      ],
    },
  ],
  guidesH: "Latest guides from the Bubble Level blog",
  guides: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      title: "How to Use an Online Bubble Level (Step-by-Step)",
      desc: "Open the page, place the phone flat, calibrate, and read the tilt in degrees.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      title: "How Accurate Is a Phone Bubble Level?",
      desc: "Typical error, what ruins a reading, and how to calibrate for a reliable check.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      title: "How to Level Furniture, Shelves and Appliances",
      desc: "Step-by-step checks for a rocking table, a leaning bookcase and a walking washing machine.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      title: "Bubble Level vs Spirit Level",
      desc: "Accuracy, cost and speed compared, and when to reach for a real level.",
    },
  ],
  guidesAll: "See all Online Bubble Level guides →",
  faqH: "Frequently asked questions about the online bubble level",
  faq: [
    {
      q: "How to read an online level bubble?",
      a: "Place the phone flat on the surface and let the bubble settle. The bubble drifting to the left or right shows which end is high: the bubble always floats to the highest point, so the side it moves towards is the high side. The number beside it is the tilt in degrees, and 0.0° means the surface is level.",
    },
    {
      q: "Is a phone bubble level as good as a spirit level?",
      a: "For quick checks, yes. A calibrated phone reads within about half a degree, which is enough for shelves, pictures, furniture and appliances. For long spans such as worktops, floors and walls, a long spirit level wins because it sees a slope a short phone body cannot.",
    },
    {
      q: "Does an online bubble level work on a laptop or desktop?",
      a: "The page loads anywhere, but a laptop or desktop has no accelerometer, so the bubble will not move. Use a phone or tablet for a real level check, and a desktop for reading the guides and comparing numbers.",
    },
    {
      q: "Is an online bubble level accurate enough for shelves and pictures?",
      a: "Yes. A calibrated phone reads within about half a degree, which is under 5 mm across a 60 cm shelf and well inside what the eye notices. For anything longer than a metre, or for worktops and walls, use a spirit level as well because a short phone body cannot see a slope spread over a long span.",
    },
    {
      q: "Why is my bubble level stuck at 0.0 degrees?",
      a: "Almost always the motion sensor permission. Browsers block device orientation until you allow it, and the tool then shows its resting state. Allow motion access in the prompt, reload the page, and if the reading still does not move, check that you are not on a desktop browser with no accelerometer.",
    },
    {
      q: "Do I need to install an app to use the free bubble level?",
      a: "No. The bubble level runs inside the browser, so there is nothing to install and no account to create. Open the page on your phone, allow the motion sensor once, and the level works immediately — and keeps working offline after the first load.",
    },
    {
      q: "How do I check if a wall is plumb with my phone?",
      a: "Use the vertical vial. Stand the phone against the wall on its long edge, keep the back of the phone flat against the surface, and read the degrees figure: near 0.0° means the wall is plumb. Check near the top and near the bottom of the wall, because a wall can lean without the middle of it showing any tilt.",
    },
  ],
};


const es: BubbleProse = {
  aboutH: "El nivel de burbuja online gratuito que comprueba cualquier superficie",
  intro: [
    "Este **nivel de burbuja online** convierte el móvil que tienes en la mano en una **herramienta de comprobación de nivel** en un toque. No hay nada que instalar, ni cuenta que crear, ni esperas de descarga: abres la página, apoyas el dispositivo sobre la superficie y la burbuja te dice al instante si esa superficie está plana, inclinada o a plomo. Es un **nivel de burbuja gratis** hecho para una sola cosa: decirte la verdad sobre una superficie antes de colgar un estante, ajustar un cuadro o nivelar una mesa.",
    "Si alguna vez has buscado “**nivel de burbuja online**”, “**nivel de burbuja digital**” o “**comprobar nivel online**”, ya conoces el problema. Tienes en las manos un marco que parece recto, una lavadora que baila o un escritorio que parece inclinado — y tus ojos no son un instrumento de medida. Una **comprobación de nivel online** elimina la duda en dos segundos, con un número en grados en lugar de una intuición.",
  ],
  sections: [
    {
      h: "Lo que este nivel de burbuja te muestra de verdad",
      paras: [
        "El **nivel de burbuja online** lee el acelerómetro de tu dispositivo y dibuja la misma información que muestra un nivel de burbuja físico, solo que con más detalle. Tienes un vial horizontal para superficies planas, una **herramienta de nivel vertical** para paredes y marcos de puerta a plomo, y una vista de burbuja circular que muestra la inclinación en todas las direcciones a la vez: de izquierda a derecha y de delante a atrás. En lugar de juzgar dónde queda la burbuja entre dos líneas, lees una cifra en grados, así que “casi nivelado” se convierte en un número exacto sobre el que puedes actuar.",
        "Como la lectura es digital, esta **herramienta niveladora** hace cosas que un nivel de madera no puede. Se actualiza mientras inclinas la superficie, así que puedes ver el número caer hacia cero mientras metes una cuña bajo una pata. Sigue funcionando en rincones oscuros donde no verías bien una burbuja. Y nunca pierde su líquido de calibración, porque no hay líquido: el sensor es de estado sólido y el punto cero se fija por software.",
      ],
    },
    {
      h: "Cómo comprobar una superficie con el nivel de burbuja online",
      paras: [
        "Abre la página, acepta una vez el aviso del sensor y apoya el dispositivo plano sobre la superficie que quieres comprobar. Sujétalo quieto un segundo para que la lectura se estabilice. El valor en grados es tu respuesta: un número cerca de 0,0° significa que la superficie está nivelada, y la dirección del desvío te dice qué lado hay que levantar. Para comprobar la plomada, apoya el dispositivo contra la pared sobre su borde largo y usa el vial vertical de la misma manera.",
      ],
      list: [
        "Saca el móvil de su funda magnética y aléjalo de herramientas, tornillos y tuberías metálicas.",
        "Comprueba la misma superficie en dos direcciones, a 90° entre sí, antes de taladrar.",
        "Si la lectura deriva, pon el dispositivo sobre una superficie plana conocida y recalibra ahí.",
        "Deja el dispositivo sobre la propia superficie: sostenerlo en la mano añade tu propia inclinación.",
      ],
    },
    {
      h: "Nivel de burbuja frente a nivel físico",
      paras: [
        "Un **nivel de burbuja** tradicional es un tubo sellado con una burbuja dentro, y es excelente en lo suyo, pero solo lo tienes cuando te acuerdas de llevarlo. Un **nivel de burbuja online** ya está en tu bolsillo, lo que importa cuando un estante se ve torcido y estás subido a una silla. La contrapartida es la precisión: un buen nivel de 60 cm detecta una pendiente que el sensor de un móvil redondearía. Para colgar, muebles, electrodomésticos y comprobaciones rápidas la lectura digital sobra; para alicatar un suelo o montar una encimera, un nivel físico largo sigue ganando.",
        "Mucha gente busca una **herramienta de nivel de agua online** esperando el truco de la manguera y el agua. Esta página hace lo mismo de forma electrónica: sin agua, sin manguera, sin desastre, y funciona a cualquier distancia de la superficie. Igualmente, si una búsqueda de **nivel de burbuja online** te trajo aquí, la herramienta de abajo es la respuesta interactiva, no un dibujo de ella.",
      ],
    },
    {
      h: "Quién usa un nivel online gratuito",
      paras: [
        "Cualquiera que cuelgue, construya, monte o instale. Los propietarios usan el **nivel online gratis** para colgar cuadros, estantes y espejos rectos a la primera. Los inquilinos usan el **nivel de burbuja online** para comprobar si un armario o una nevera están nivelados antes de culpar a la puerta. El bricolaje y la carpintería usan el vial vertical para marcos de puerta, montantes y postes. Fotógrafos y videógrafos comprueban que la rótula del trípode está plana. El uso del **nivel online** también se dispara al montar muebles: las instrucciones asumen un suelo nivelado y el móvil es la única herramienta a mano.",
        "Fuera del taller, la misma lectura del **nivel de burbuja online gratis** ayuda en pequeños asuntos del día a día. Comprueba si una mesa cojea porque el suelo tiene pendiente o porque una pata es más corta. Confirma que la lavadora está nivelada para que deje de caminar por el suelo. Nivela una autocaravana, una caravana o una tienda de techo antes de dormir dentro. Monta una mesa de billar, una de ping-pong o una diana. Prueba si una funda nueva o un soporte de escritorio bailan. Ninguna de estas tareas necesita una caja de herramientas: necesita un número honesto.",
      ],
    },
    {
      h: "Precisión, privacidad y qué esperar",
      paras: [
        "La precisión depende del sensor de tu dispositivo, no de la página. Los acelerómetros de los móviles suelen ser buenos hasta aproximadamente un grado, lo que sobra para colgar cosas y para muebles, y la lectura se vuelve más estable cuanto más tiempo está quieto el dispositivo. No se sube nada: los datos del sensor se leen en tu navegador y nunca salen del dispositivo, no hace falta cuenta y no se rastrean tus mediciones. Una vez cargada la página, esta **comprobación de nivel** sigue funcionando incluso sin conexión, lo que resulta útil en un sótano, un garaje o una obra.",
        "Úsalo como **herramienta de nivel** rápida antes de hacer un agujero en la pared, y guarda un nivel físico para los trabajos donde importan los milímetros. Esa combinación —el móvil para la respuesta rápida, el nivel de burbuja para el ajuste final— es como trabaja la mayoría de la gente. Si la burbuja parece equivocada, revisa la superficie, la calibración y el metal cercano antes de culpar a la herramienta, y recalibra sobre una superficie en la que confíes.",
      ],
    },
  ],
  guidesH: "Últimas guías del blog del nivel de burbuja",
  guides: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      title: "Cómo usar un nivel de burbuja online (paso a paso)",
      desc: "Abre la página, apoya el móvil plano, calibra y lee la inclinación en grados.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      title: "¿Qué precisión tiene el nivel de burbuja de un móvil?",
      desc: "Error típico, qué estropea una lectura y cómo calibrar para una comprobación fiable.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      title: "Cómo nivelar muebles, estantes y electrodomésticos",
      desc: "Comprobaciones paso a paso para una mesa que cojea, una estantería torcida y una lavadora que se mueve.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      title: "Nivel de burbuja frente a nivel de burbuja físico",
      desc: "Precisión, coste y rapidez comparados, y cuándo echar mano de un nivel de verdad.",
    },
  ],
  guidesAll: "Ver todas las guías del nivel de burbuja online →",
  faqH: "Preguntas frecuentes sobre el nivel de burbuja online",
  faq: [
    {
      q: "¿Cómo se lee la burbuja de un nivel online?",
      a: "Apoya el móvil plano sobre la superficie y deja que la burbuja se asiente. Si la burbuja se va a la izquierda o a la derecha, ese lado indica qué extremo está alto: la burbuja siempre flota hacia el punto más alto, así que el lado hacia el que se mueve es el lado alto. El número de al lado es la inclinación en grados, y 0,0° significa que la superficie está nivelada.",
    },
    {
      q: "¿Un nivel de burbuja de móvil es tan bueno como un nivel de burbuja?",
      a: "Para comprobaciones rápidas, sí. Un móvil calibrado lee con un error de medio grado aproximadamente, suficiente para estantes, cuadros, muebles y electrodomésticos. Para distancias largas como encimeras, suelos y paredes, gana un nivel largo, porque detecta una pendiente que el cuerpo corto de un móvil no puede ver.",
    },
    {
      q: "¿El nivel de burbuja online funciona en un portátil o un PC?",
      a: "La página carga en cualquier sitio, pero un portátil o un PC no tienen acelerómetro, así que la burbuja no se moverá. Usa un móvil o una tablet para una comprobación real y un ordenador para leer las guías y comparar números.",
    },
    {
      q: "¿El nivel de burbuja online es suficientemente preciso para estantes y cuadros?",
      a: "Sí. Un móvil calibrado lee con un error de medio grado, que en un estante de 60 cm son menos de 5 mm y está muy por debajo de lo que el ojo nota. Para algo de más de un metro, o para encimeras y paredes, usa también un nivel físico, porque el cuerpo corto de un móvil no ve una pendiente repartida en una distancia larga.",
    },
    {
      q: "¿Por qué mi nivel de burbuja se queda en 0,0 grados?",
      a: "Casi siempre es el permiso del sensor de movimiento. Los navegadores bloquean la orientación del dispositivo hasta que lo permites, y entonces la herramienta muestra su estado de reposo. Concede el acceso al movimiento en el aviso, recarga la página y, si la lectura sigue sin moverse, comprueba que no estás en un navegador de escritorio sin acelerómetro.",
    },
    {
      q: "¿Hace falta instalar una app para usar el nivel de burbuja gratis?",
      a: "No. El nivel de burbuja funciona dentro del navegador, así que no hay nada que instalar ni cuenta que crear. Abre la página en el móvil, permite el sensor de movimiento una vez y el nivel funciona al momento, y sigue funcionando sin conexión tras la primera carga.",
    },
    {
      q: "¿Cómo compruebo si una pared está a plomo con el móvil?",
      a: "Usa el vial vertical. Apoya el móvil contra la pared sobre su borde largo, mantén la parte trasera pegada a la superficie y lee la cifra en grados: cerca de 0,0° significa que la pared está a plomo. Comprueba cerca de arriba y cerca de abajo de la pared, porque una pared puede inclinarse sin que la zona central muestre inclinación alguna.",
    },
  ],
};


const ja: BubbleProse = {
  aboutH: "あらゆる面をチェックできる無料のオンライン水準器",
  intro: [
    "この**オンライン水準器**は、手元のスマートフォンをワンタップで使える**水平チェックツール**に変えます。インストールもアカウント作成もダウンロード待ちもありません。ページを開いて端末を面の上に置けば、その面が水平か、傾いているか、垂直かがバブルで即座に分かります。ひとつの役割のために作られた**無料の水準器**です。棚を取り付ける前、額縁を直す前、テーブルを水平にする前に、その面の本当の状態を教えてくれます。",
    "「**オンライン水準器**」「**スマホ 水平器**」「**水平チェック ツール**」で検索したことがあるなら、困りごとはもう分かっているはずです。まっすぐに見える額縁、ガタつく洗濯機、傾いて見える机——あなたの目は測定器ではありません。**オンラインでの水平チェック**なら、勘ではなく度数という数字で、2秒で迷いを消せます。",
  ],
  sections: [
    {
      h: "この水準器ツールで実際に分かること",
      paras: [
        "**オンライン水準器**は端末内の加速度センサーを読み取り、実物の水準器が示す情報をより詳しく描き出します。平らな面のための横方向の気泡管、垂直な壁やドア枠のための**縦方向の水準ツール**、そして左右と前後の傾きを同時に示す丸形ビューが使えます。2本の線の間にバブルがどこにあるかを目分量で判断する代わりに度数を読むので、「ほぼ水平」が行動できる正確な数値になります。",
        "読み取りがデジタルなので、この**水平ツール**は木製の水準器にできないことができます。面を傾けると表示が更新されるため、脚の下に板を差し込みながら数字がゼロに近づくのを見ていられます。バブルが見えにくい暗い隅でも動き続けます。そして校正液がなくなることもありません。液体は存在せず、センサーは固体素子で、ゼロ点はソフトウェアで設定されるからです。",
      ],
    },
    {
      h: "オンライン水準器で面をチェックする方法",
      paras: [
        "ページを開き、センサーの許可を一度だけ求められたら許可して、確認したい面の上に端末を平らに置きます。読み取りが落ち着くまで1秒ほど静止させてください。度数の値が答えです。0.0°に近ければその面は水平で、ずれの向きが持ち上げるべき側を教えてくれます。垂直の確認では、端末の長い辺を壁に当てて立て、同じように縦の気泡管を使います。",
      ],
      list: [
        "スマートフォンを磁気ケースから外し、金属製の工具・ねじ・配管から離してください。",
        "穴を開ける前に、同じ面を90°違う2方向から確認してください。",
        "読み取りがずれる場合は、水平と分かっている面に置いてそこで再校正します。",
        "端末は面の上に置いたままにしてください。手に持つと自分の傾きが加わります。",
      ],
    },
    {
      h: "オンライン水準器と実物の水準器",
      paras: [
        "昔ながらの**水準器**は気泡の入った密閉管で、その仕事は見事ですが、持ち歩くのを忘れなければ使えません。**オンライン水準器**はすでにポケットの中にあります。棚が傾いて見えて椅子の上に立っているとき、これが効いてきます。代わりに落ちるのは精度です。良い60cmの水準器は、スマートフォンのセンサーが丸めてしまう傾きも検出します。取り付け、家具、家電、素早い確認にはデジタルの読み取りで十分ですが、床のタイル貼りや作業台の取り付けでは、長い実物の水準器が依然として有利です。",
        "**水準器 水**や**水盛り**の方法を期待して検索する人も多いでしょう。このページは同じことを電子的に行います。水もホースも汚れも不要で、面からの距離も問いません。**オンライン水準器**でここに来た方にとって、下のツールは図ではなく、実際に動く答えです。",
      ],
    },
    {
      h: "無料オンライン水平器を使う人たち",
      paras: [
        "吊るす、作る、取り付ける、設置する——そんなすべての人。住宅の持ち主は**無料オンライン水平器**で額縁・棚・鏡を一発でまっすぐ掛けます。賃貸の住人は**オンライン水平器**で、ワードローブや冷蔵庫が水平に置かれているかをドアのせいにする前に確認します。DIYや木工では縦の気泡管をドア枠・間柱・支柱に使います。写真家や映像の人は三脚の雲台が平らかを確認します。**水平チェック**の利用は家具の組み立て時にも増えます。組み立て説明書は水平な床を前提にしており、手元にある唯一の道具がスマートフォンだからです。",
        "作業場の外でも、同じ**無料オンライン水準器**の読み取りが日常の小さな場面で役立ちます。テーブルがぐらつくのは床の傾きか脚の短さか。洗濯機が水平かを確かめれば、床を歩き回らなくなります。キャンピングカー、キャラバン、ルーフテントは寝る前に水平に。ビリヤード台、卓球台、ダーツボードの設置にも。新しいスマホケースやディスプレイスタンドのガタつき確認にも。どれも工具箱ではなく、正直な数字ひとつで足ります。",
      ],
    },
    {
      h: "精度・プライバシー・期待できること",
      paras: [
        "精度はページではなく端末のセンサーで決まります。スマートフォンの加速度センサーは通常1度程度まで正確で、取り付けや家具の作業には十分です。端末が静止している時間が長いほど読み取りは安定します。何もアップロードしません。センサーデータはブラウザ内で読み取られ、端末の外に出ることはなく、アカウントも不要で、測定値の追跡もありません。ページを一度読み込めば、この**水平チェック**はネットワーク接続がなくても動き続けます。地下室、ガレージ、建設現場で役立ちます。",
        "壁に穴を開ける前に、素早い**水平チェックツール**として使い、ミリ単位が重要な作業には実物の水準器を残しておいてください。素早い答えはスマートフォン、最終調整は水準器——多くの人が実際にそう作業しています。バブルがおかしいと感じたら、ツールのせいにする前に面・校正・近くの金属を確認し、信頼できる面で再校正してください。",
      ],
    },
  ],
  guidesH: "水準器ブログの最新ガイド",
  guides: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      title: "オンライン水準器の使い方（手順つき）",
      desc: "ページを開き、スマホを平らに置き、校正して、傾きを度数で読みます。",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      title: "スマホの水準器の精度はどれくらい？",
      desc: "一般的な誤差、読み取りを狂わせる要因、信頼できる確認のための校正方法。",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      title: "家具・棚・家電を水平にする方法",
      desc: "ぐらつくテーブル、傾いた本棚、動き回る洗濯機を順に確認する手順。",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      title: "水準器と実物の水準器の比較",
      desc: "精度・費用・速さを比べ、実物の水準器を使うべき場面を整理します。",
    },
  ],
  guidesAll: "オンライン水準器のガイドをすべて見る →",
  faqH: "オンライン水準器についてよくある質問",
  faq: [
    {
      q: "オンライン水準器のバブルはどう読むのですか？",
      a: "スマートフォンを面の上に平らに置き、バブルが落ち着くのを待ちます。バブルが左右どちらかに寄れば、寄った側が高いことを示します。バブルは常に最も高い位置に浮くため、動いた側が高い側です。隣の数字が傾きの度数で、0.0°ならその面は水平です。",
    },
    {
      q: "スマホの水準器は実物の水準器と同じくらい使えますか？",
      a: "素早い確認なら十分です。校正済みのスマートフォンは0.5度程度の誤差で読め、棚・額縁・家具・家電には足ります。作業台・床・壁のような長い距離では、短いスマホでは見えない傾きを捉えられる長い水準器が有利です。",
    },
    {
      q: "オンライン水準器はノートPCやデスクトップでも動きますか？",
      a: "ページはどこでも開きますが、ノートPCやデスクトップには加速度センサーがないため、バブルは動きません。実際の確認にはスマートフォンかタブレットを使い、パソコンではガイドを読んだり数値を比べたりしてください。",
    },
    {
      q: "オンライン水準器は棚や額縁に使える精度ですか？",
      a: "はい。校正済みのスマートフォンは0.5度程度の誤差で、60cmの棚なら5mm未満、目で気づく範囲より十分に小さい値です。1メートルを超えるもの、作業台や壁では、長い距離に広がる傾きを短いスマホは捉えられないため、実物の水準器も併用してください。",
    },
    {
      q: "水準器が0.0度のまま動きません",
      a: "ほとんどの場合、モーションセンサーの許可です。ブラウザは許可するまで端末の向きを遮断し、その間ツールは静止状態を表示します。表示された確認でモーションへのアクセスを許可し、ページを再読み込みしてください。それでも動かない場合は、加速度センサーのないパソコンのブラウザでないか確認してください。",
    },
    {
      q: "無料の水準器を使うのにアプリのインストールは必要ですか？",
      a: "いいえ。水準器はブラウザ内で動作するため、インストールもアカウント作成も不要です。スマートフォンでページを開き、モーションセンサーを一度許可すればすぐに使え、初回読み込み後はオフラインでも動きます。",
    },
    {
      q: "スマホで壁が垂直かを確認する方法は？",
      a: "縦の気泡管を使います。端末の長い辺を壁に当てて立て、背面を面に密着させたまま度数を読みます。0.0°に近ければ壁は垂直です。壁は中央に傾きが出ないまま全体が傾くことがあるので、壁の上部と下部の両方で確認してください。",
    },
  ],
};


const fr: BubbleProse = {
  aboutH: "Le niveau à bulle en ligne gratuit qui contrôle toute surface",
  intro: [
    "Ce **niveau à bulle en ligne** transforme le téléphone que vous tenez en un véritable **outil de contrôle de niveau** en un geste. Rien à installer, aucun compte à créer, aucune attente de téléchargement : vous ouvrez la page, vous posez l’appareil sur la surface et la bulle vous dit aussitôt si cette surface est plane, inclinée ou d’aplomb. C’est un **niveau à bulle gratuit** conçu pour une seule chose : vous dire la vérité sur une surface avant de poser une étagère, de redresser un cadre ou de niveler une table.",
    "Si vous avez déjà cherché « **niveau à bulle en ligne** », « **niveau à bulle smartphone** » ou « **vérifier la horizontalité en ligne** », vous connaissez le problème. Vous tenez un cadre qui semble droit, une machine à laver qui tremble ou un bureau qui paraît pencher — et vos yeux ne sont pas un instrument de mesure. Un **contrôle de niveau en ligne** supprime le doute en deux secondes, avec un nombre en degrés plutôt qu’une intuition.",
  ],
  sections: [
    {
      h: "Ce que ce niveau à bulle vous montre vraiment",
      paras: [
        "Le **niveau à bulle en ligne** lit l’accéléromètre de votre appareil et reproduit les informations d’un niveau physique, avec plus de détails. Vous disposez d’une fiole horizontale pour les surfaces planes, d’un **outil de niveau vertical** pour les murs et les encadrements de porte d’aplomb, et d’une vue à bulle circulaire qui montre l’inclinaison dans toutes les directions à la fois — de gauche à droite et d’avant en arrière. Au lieu de juger la position de la bulle entre deux repères, vous lisez une valeur en degrés : « presque de niveau » devient un chiffre exact sur lequel agir.",
        "Comme la mesure est numérique, cet **outil de mise à niveau** fait ce qu’un niveau en bois ne peut pas faire. Il se met à jour pendant que vous inclinez la surface : vous voyez le chiffre descendre vers zéro pendant que vous glissez une cale sous un pied. Il continue de fonctionner dans un coin sombre où la bulle serait illisible. Et il ne perd jamais son liquide de calibration, car il n’y a pas de liquide : le capteur est électronique et le zéro est défini par logiciel.",
      ],
    },
    {
      h: "Comment contrôler une surface avec le niveau à bulle en ligne",
      paras: [
        "Ouvrez la page, acceptez une fois l’autorisation du capteur, puis posez l’appareil à plat sur la surface à tester. Maintenez-le immobile une seconde pour que la mesure se stabilise. La valeur en degrés est votre réponse : un nombre proche de 0,0° signifie que la surface est de niveau, et le sens de l’écart indique quel côté doit être relevé. Pour un contrôle d’aplomb, posez l’appareil contre le mur sur son grand côté et utilisez la fiole verticale de la même façon.",
      ],
      list: [
        "Sortez le téléphone de sa coque magnétique et éloignez-le des outils, vis et tuyaux métalliques.",
        "Contrôlez la même surface dans deux directions perpendiculaires avant de percer.",
        "Si la mesure dérive, posez l’appareil sur une surface plane de référence et recalibrez à cet endroit.",
        "Laissez l’appareil sur la surface elle-même : le tenir à la main ajoute votre propre inclinaison.",
      ],
    },
    {
      h: "Niveau à bulle en ligne ou niveau physique",
      paras: [
        "Un **niveau à bulle** classique est un tube scellé contenant une bulle : il fait très bien son travail, mais seulement quand vous pensez à l’emporter. Un **niveau à bulle en ligne** est déjà dans votre poche, ce qui compte quand une étagère paraît de travers et que vous êtes debout sur une chaise. La contrepartie, c’est la précision : un bon niveau de 60 cm détecte une pente que le capteur d’un téléphone arrondira. Pour suspendre, pour les meubles, les appareils électroménagers et les vérifications rapides, la mesure numérique suffit largement ; pour carreler un sol ou poser un plan de travail, un long niveau physique reste devant.",
        "Beaucoup cherchent un **niveau à eau en ligne** en pensant à l’astuce du tuyau rempli d’eau. Cette page fait la même chose en électronique : pas d’eau, pas de tuyau, pas de dégâts, et cela fonctionne à n’importe quelle distance de la surface. De même, si une recherche de **niveau à bulle en ligne** vous a mené ici, l’outil ci-dessous est la réponse interactive, pas un schéma.",
      ],
    },
    {
      h: "Qui utilise un niveau en ligne gratuit",
      paras: [
        "Tous ceux qui suspendent, construisent, fixent ou installent. Les propriétaires utilisent le **niveau en ligne gratuit** pour poser cadres, étagères et miroirs droits du premier coup. Les locataires utilisent le **niveau à bulle en ligne** pour vérifier qu’une armoire ou un réfrigérateur est bien d’aplomb avant d’accuser la porte. Le bricolage et la menuiserie emploient la fiole verticale pour les encadrements, les montants et les poteaux. Les photographes et vidéastes vérifient que la rotule du trépied est plane. L’usage du **contrôle de niveau en ligne** grimpe aussi au moment du montage de meubles : les notices supposent un sol de niveau et le téléphone est le seul outil à portée.",
        "Hors de l’atelier, la même lecture du **niveau à bulle en ligne gratuit** aide dans les petites choses du quotidien. Vérifier si une table branle à cause du sol ou d’un pied trop court. Confirmer qu’une machine à laver est de niveau pour qu’elle cesse de se déplacer. Mettre de niveau un camping-car, une caravane ou une tente de toit avant d’y dormir. Installer un billard, une table de ping-pong ou une cible de fléchettes. Tester une nouvelle coque ou un support d’écran. Aucune de ces tâches ne demande une caisse à outils : elle demande un chiffre honnête.",
      ],
    },
    {
      h: "Précision, confidentialité et ce qu’il faut attendre",
      paras: [
        "La précision dépend du capteur de votre appareil, pas de la page. Les accéléromètres de téléphone sont généralement bons à environ un degré, ce qui suffit pour suspendre et pour les meubles, et la mesure devient plus stable à mesure que l’appareil reste immobile. Rien n’est envoyé : les données du capteur sont lues dans votre navigateur et ne quittent jamais l’appareil, aucun compte n’est nécessaire et vos mesures ne sont pas suivies. Une fois la page chargée, ce **contrôle de niveau** continue de fonctionner même sans réseau, ce qui est utile dans une cave, un garage ou sur un chantier.",
        "Utilisez-le comme **outil de contrôle de niveau** rapide avant de faire un trou dans le mur, et gardez un niveau physique pour les travaux où les millimètres comptent. Cette combinaison — le téléphone pour la réponse rapide, le niveau à bulle pour le réglage final — correspond à la façon dont la plupart des gens travaillent. Si la bulle semble fausse, vérifiez la surface, la calibration et le métal à proximité avant d’accuser l’outil, et recalibrez sur une surface de confiance.",
      ],
    },
  ],
  guidesH: "Les derniers guides du blog du niveau à bulle",
  guides: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      title: "Utiliser un niveau à bulle en ligne (pas à pas)",
      desc: "Ouvrez la page, posez le téléphone à plat, calibrez et lisez l’inclinaison en degrés.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      title: "Quelle est la précision d’un niveau à bulle de téléphone ?",
      desc: "Erreur typique, ce qui fausse une mesure, et comment calibrer pour un contrôle fiable.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      title: "Mettre de niveau meubles, étagères et appareils",
      desc: "Contrôles pas à pas pour une table qui branle, une bibliothèque penchée et une machine à laver qui se déplace.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      title: "Niveau à bulle en ligne ou niveau physique",
      desc: "Précision, coût et rapidité comparés, et quand sortir un vrai niveau.",
    },
  ],
  guidesAll: "Voir tous les guides du niveau à bulle en ligne →",
  faqH: "Questions fréquentes sur le niveau à bulle en ligne",
  faq: [
    {
      q: "Comment lire la bulle d’un niveau en ligne ?",
      a: "Posez le téléphone à plat sur la surface et laissez la bulle se stabiliser. Si la bulle part à gauche ou à droite, elle indique le côté le plus haut : la bulle flotte toujours vers le point le plus élevé, donc le côté vers lequel elle se déplace est le côté haut. Le nombre à côté est l’inclinaison en degrés, et 0,0° signifie que la surface est de niveau.",
    },
    {
      q: "Un niveau à bulle de téléphone vaut-il un niveau physique ?",
      a: "Pour des vérifications rapides, oui. Un téléphone calibré lit à environ un demi-degré près, ce qui suffit pour les étagères, les cadres, les meubles et les appareils. Sur de longues portées comme les plans de travail, les sols et les murs, un long niveau gagne, car il voit une pente que le corps court d’un téléphone ne peut pas percevoir.",
    },
    {
      q: "Le niveau à bulle en ligne fonctionne-t-il sur un ordinateur portable ou de bureau ?",
      a: "La page se charge partout, mais un ordinateur n’a pas d’accéléromètre : la bulle ne bougera pas. Utilisez un téléphone ou une tablette pour un vrai contrôle, et un ordinateur pour lire les guides et comparer les chiffres.",
    },
    {
      q: "Le niveau à bulle en ligne est-il assez précis pour des étagères et des cadres ?",
      a: "Oui. Un téléphone calibré lit à environ un demi-degré près, soit moins de 5 mm sur une étagère de 60 cm, bien en dessous de ce que l’œil remarque. Au-delà d’un mètre, ou pour les plans de travail et les murs, utilisez aussi un niveau physique : le corps court d’un téléphone ne voit pas une pente répartie sur une longue portée.",
    },
    {
      q: "Pourquoi mon niveau reste-t-il bloqué à 0,0 degré ?",
      a: "Presque toujours l’autorisation du capteur de mouvement. Les navigateurs bloquent l’orientation de l’appareil jusqu’à ce que vous l’autorisiez, et l’outil affiche alors son état de repos. Autorisez l’accès au mouvement dans l’invite, rechargez la page et, si la mesure ne bouge toujours pas, vérifiez que vous n’êtes pas sur un navigateur de bureau sans accéléromètre.",
    },
    {
      q: "Faut-il installer une application pour utiliser le niveau à bulle gratuit ?",
      a: "Non. Le niveau à bulle fonctionne dans le navigateur : rien à installer, aucun compte à créer. Ouvrez la page sur votre téléphone, autorisez une fois le capteur de mouvement et le niveau fonctionne immédiatement — et continue de fonctionner hors ligne après le premier chargement.",
    },
    {
      q: "Comment vérifier qu’un mur est d’aplomb avec mon téléphone ?",
      a: "Utilisez la fiole verticale. Posez le téléphone contre le mur sur son grand côté, gardez le dos de l’appareil bien plat contre la surface et lisez la valeur : proche de 0,0°, le mur est d’aplomb. Vérifiez en haut et en bas du mur, car un mur peut pencher sans que sa partie centrale montre la moindre inclinaison.",
    },
  ],
};


const de: BubbleProse = {
  aboutH: "Die kostenlose Online-Wasserwaage, die jede Fläche prüft",
  intro: [
    "Diese **Online-Wasserwaage** macht das Handy in deiner Hand mit einem Tipp zu einem echten **Wasserwaage-Tool**. Nichts zu installieren, kein Konto, keine Wartezeit auf einen Download: Du öffnest die Seite, legst das Gerät auf die Fläche und die Libelle sagt dir sofort, ob diese Fläche eben, geneigt oder lotrecht ist. Es ist eine **kostenlose Wasserwaage** für genau eine Aufgabe: dir die Wahrheit über eine Fläche zu sagen, bevor du ein Regal aufhängst, einen Rahmen ausrichtest oder einen Tisch nivellierst.",
    "Wenn du je nach „**Online-Wasserwaage**“, „**Wasserwaage Handy**“ oder „**Wasserwaage online messen**“ gesucht hast, kennst du das Problem. Du hältst einen Bilderrahmen, der gerade wirkt, eine Waschmaschine, die wackelt, oder einen Schreibtisch, der zu kippen scheint — und deine Augen sind kein Messinstrument. Ein **Wasserwaage-Check online** nimmt dir das Raten in zwei Sekunden ab, mit einer Zahl in Grad statt einem Gefühl.",
  ],
  sections: [
    {
      h: "Was dir dieses Wasserwaage-Tool tatsächlich zeigt",
      paras: [
        "Die **Online-Wasserwaage** liest den Beschleunigungssensor in deinem Gerät und zeichnet dieselben Informationen wie eine physische Wasserwaage, nur detaillierter. Du bekommst eine waagerechte Libelle für ebene Flächen, ein **vertikales Wasserwaage-Tool** für lotrechte Wände und Türrahmen und eine runde Libelle, die die Neigung in alle Richtungen gleichzeitig zeigt — von links nach rechts und von vorne nach hinten. Statt zu schätzen, wo die Libelle zwischen zwei Strichen steht, liest du einen Gradwert: „fast eben“ wird zu einer genauen Zahl, mit der du arbeiten kannst.",
        "Weil die Anzeige digital ist, kann dieses **Nivellier-Tool** Dinge, die eine Wasserwaage aus Holz nicht kann. Sie aktualisiert sich, während du die Fläche neigst — du siehst die Zahl Richtung null fallen, während du ein Plättchen unter ein Bein schiebst. Sie funktioniert in dunklen Ecken, in denen eine Libelle kaum zu sehen ist. Und sie verliert nie ihre Libellenflüssigkeit, denn es gibt keine: Der Sensor ist elektronisch und der Nullpunkt wird in der Software gesetzt.",
      ],
    },
    {
      h: "So prüfst du eine Fläche mit der Online-Wasserwaage",
      paras: [
        "Öffne die Seite, erlaube einmal die Sensorabfrage und lege das Gerät flach auf die Fläche, die du prüfen willst. Halte es eine Sekunde still, damit sich der Wert beruhigt. Der Gradwert ist deine Antwort: eine Zahl nahe 0,0° heißt, die Fläche ist eben, und die Richtung der Abweichung zeigt, welche Seite angehoben werden muss. Für eine Lotprüfung stellst du das Gerät mit der langen Kante an die Wand und nutzt die vertikale Libelle genauso.",
      ],
      list: [
        "Nimm das Handy aus der Magnet-Hülle und halte es von Werkzeugen, Schrauben und Rohren aus Metall fern.",
        "Prüfe dieselbe Fläche vor dem Bohren in zwei Richtungen im 90°-Winkel.",
        "Wenn der Wert wandert, lege das Gerät auf eine bekannt ebene Fläche und kalibriere dort neu.",
        "Lass das Gerät auf der Fläche selbst — in der Hand addiert sich deine eigene Neigung.",
      ],
    },
    {
      h: "Online-Wasserwaage oder physische Wasserwaage",
      paras: [
        "Eine traditionelle **Wasserwaage** ist ein geschlossenes Rohr mit Libelle und darin sehr gut — aber du hast sie nur, wenn du daran gedacht hast, sie mitzunehmen. Eine **Online-Wasserwaage** ist schon in deiner Tasche, und das zählt, wenn ein Regal schief aussieht und du auf einem Stuhl stehst. Der Preis dafür ist Präzision: Eine gute 60-cm-Wasserwaage erkennt eine Neigung, die der Handy-Sensor weg rundet. Zum Aufhängen, für Möbel, Haushaltsgeräte und schnelle Checks reicht die digitale Anzeige völlig; beim Fliesenlegen oder beim Einpassen einer Arbeitsplatte gewinnt eine lange physische Wasserwaage.",
        "Viele suchen eine **Schlauchwaage online** und erwarten den Trick mit Schlauch und Wasser. Diese Seite erledigt dieselbe Aufgabe elektronisch: kein Wasser, kein Schlauch, keine Sauerei, und sie funktioniert in jedem Abstand zur Fläche. Wenn dich also eine Suche nach **Wasserwaage online** hierher geführt hat, ist das Tool unten die interaktive Antwort — keine Zeichnung davon.",
      ],
    },
    {
      h: "Wer eine kostenlose Online-Wasserwaage nutzt",
      paras: [
        "Alle, die aufhängen, bauen, montieren oder installieren. Wohnungseigentümer nutzen die **kostenlose Online-Wasserwaage**, um Bilderrahmen, Regale und Spiegel gleich beim ersten Mal gerade aufzuhängen. Mieter nutzen die **Online-Wasserwaage**, um zu prüfen, ob ein Schrank oder ein Kühlschrank gerade steht, bevor sie die Tür beschuldigen. Heimwerken und Tischlerei nutzen die vertikale Libelle für Türrahmen, Ständer und Pfosten. Fotografen und Filmschaffende prüfen, ob der Kugelkopf des Stativs eben ist. **Wasserwaage online** wird auch beim Möbelaufbau häufig gesucht: Aufbauanleitungen setzen einen ebenen Boden voraus, und das Handy ist das einzige Werkzeug in Reichweite.",
        "Außerhalb der Werkstatt hilft derselbe Wert der **kostenlosen Online-Wasserwaage** im Alltag. Prüfe, ob ein Tisch wackelt, weil der Boden schief ist oder ein Bein zu kurz. Stelle sicher, dass die Waschmaschine gerade steht, damit sie nicht durch den Raum wandert. Nivelliere ein Wohnmobil, einen Wohnwagen oder ein Dachzelt, bevor du darin schläfst. Richte einen Billardtisch, eine Tischtennisplatte oder eine Dartscheibe ein. Teste eine neue Handyhülle oder einen Monitorständer auf Wackeln. Nichts davon braucht einen Werkzeugkasten — es braucht eine ehrliche Zahl.",
      ],
    },
    {
      h: "Genauigkeit, Datenschutz und was zu erwarten ist",
      paras: [
        "Die Genauigkeit hängt vom Sensor deines Geräts ab, nicht von der Seite. Handy-Beschleunigungssensoren sind meist auf etwa ein Grad genau, was für Aufhängen und Möbel reicht, und der Wert wird stabiler, je länger das Gerät still liegt. Nichts wird hochgeladen: Die Sensordaten werden im Browser gelesen und verlassen das Gerät nie, ein Konto ist nicht nötig und deine Messungen werden nicht verfolgt. Nach dem Laden funktioniert dieser **Wasserwaage-Check** auch ohne Netzwerkverbindung weiter — praktisch im Keller, in der Garage oder auf der Baustelle.",
        "Nutze es als schnelles **Wasserwaage-Tool**, bevor du ein Loch in die Wand bohrst, und behalte eine physische Wasserwaage für Arbeiten, bei denen Millimeter zählen. Diese Kombination — Handy für die schnelle Antwort, Wasserwaage für die Feinjustage — ist die Arbeitsweise der meisten Leute. Wenn die Libelle falsch wirkt, prüfe Fläche, Kalibrierung und Metall in der Nähe, bevor du das Tool beschuldigst, und kalibriere auf einer Fläche, der du traust.",
      ],
    },
  ],
  guidesH: "Neueste Anleitungen aus dem Wasserwaage-Blog",
  guides: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      title: "Eine Online-Wasserwaage nutzen (Schritt für Schritt)",
      desc: "Seite öffnen, Handy flach auflegen, kalibrieren und die Neigung in Grad ablesen.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      title: "Wie genau ist eine Wasserwaage im Handy?",
      desc: "Typischer Fehler, was eine Messung verdirbt und wie du für einen verlässlichen Check kalibrierst.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      title: "Möbel, Regale und Geräte nivellieren",
      desc: "Schrittweise Prüfungen für einen wackelnden Tisch, ein schiefes Regal und eine wandernde Waschmaschine.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      title: "Online-Wasserwaage oder physische Wasserwaage",
      desc: "Genauigkeit, Kosten und Tempo im Vergleich — und wann du zur echten Wasserwaage greifst.",
    },
  ],
  guidesAll: "Alle Anleitungen zur Online-Wasserwaage ansehen →",
  faqH: "Häufige Fragen zur Online-Wasserwaage",
  faq: [
    {
      q: "Wie lese ich die Libelle einer Online-Wasserwaage?",
      a: "Lege das Handy flach auf die Fläche und lass die Libelle zur Ruhe kommen. Wandert die Libelle nach links oder rechts, zeigt das die hohe Seite: Die Libelle schwimmt immer zum höchsten Punkt, also ist die Seite, zu der sie wandert, die hohe Seite. Die Zahl daneben ist die Neigung in Grad, und 0,0° bedeutet, die Fläche ist eben.",
    },
    {
      q: "Ist eine Wasserwaage im Handy so gut wie eine echte Wasserwaage?",
      a: "Für schnelle Checks ja. Ein kalibriertes Handy liest auf etwa einen halben Grad genau, das reicht für Regale, Bilder, Möbel und Geräte. Bei langen Strecken wie Arbeitsplatten, Böden und Wänden gewinnt eine lange Wasserwaage, weil sie eine Neigung erkennt, die der kurze Handy-Körper nicht sieht.",
    },
    {
      q: "Funktioniert die Online-Wasserwaage auf Laptop oder Desktop?",
      a: "Die Seite lädt überall, aber Laptop und Desktop haben keinen Beschleunigungssensor, also bewegt sich die Libelle nicht. Nutze Handy oder Tablet für einen echten Check und den Rechner, um Anleitungen zu lesen und Werte zu vergleichen.",
    },
    {
      q: "Ist die Online-Wasserwaage genau genug für Regale und Bilder?",
      a: "Ja. Ein kalibriertes Handy liest auf etwa einen halben Grad genau, das sind unter 5 mm auf einem 60 cm langen Regal und deutlich weniger, als das Auge bemerkt. Für alles über einem Meter sowie für Arbeitsplatten und Wände nutze zusätzlich eine echte Wasserwaage, denn der kurze Handy-Körper sieht keine über eine lange Strecke verteilte Neigung.",
    },
    {
      q: "Warum bleibt meine Wasserwaage bei 0,0 Grad stehen?",
      a: "Fast immer die Berechtigung für den Bewegungssensor. Browser blockieren die Geräteausrichtung, bis du sie erlaubst, und das Tool zeigt dann seinen Ruhezustand. Erlaube den Bewegungszugriff in der Abfrage, lade die Seite neu und prüfe, ob du nicht in einem Desktop-Browser ohne Beschleunigungssensor bist, wenn sich weiter nichts bewegt.",
    },
    {
      q: "Muss ich eine App installieren, um die kostenlose Wasserwaage zu nutzen?",
      a: "Nein. Die Wasserwaage läuft im Browser, es gibt nichts zu installieren und kein Konto. Öffne die Seite am Handy, erlaube einmal den Bewegungssensor, und die Wasserwaage funktioniert sofort — und nach dem ersten Laden auch offline.",
    },
    {
      q: "Wie prüfe ich mit dem Handy, ob eine Wand lotrecht ist?",
      a: "Nutze die vertikale Libelle. Stelle das Handy mit der langen Kante an die Wand, halte die Rückseite flach an die Fläche und lies den Gradwert: nahe 0,0° heißt lotrecht. Prüfe oben und unten an der Wand, denn eine Wand kann sich neigen, ohne dass die Mitte eine Neigung zeigt.",
    },
  ],
};


const pt: BubbleProse = {
  aboutH: "O nível de bolha online gratuito que verifica qualquer superfície",
  intro: [
    "Este **nível de bolha online** transforma o celular na sua mão em uma **ferramenta de verificação de nível** em um toque. Não há nada para instalar, nenhuma conta para criar e nenhuma espera de download: você abre a página, coloca o aparelho sobre a superfície e a bolha diz na hora se aquela superfície está plana, inclinada ou no prumo. É um **nível de bolha grátis** feito para uma única coisa: dizer a verdade sobre uma superfície antes de pendurar uma prateleira, acertar um quadro ou nivelar uma mesa.",
    "Se você já buscou “**nível de bolha online**”, “**nível de bolha celular**” ou “**verificar nível online**”, já conhece o problema. Você está segurando um porta-retrato que parece reto, uma máquina de lavar que treme ou uma mesa que parece torta — e os seus olhos não são um instrumento de medição. Uma **verificação de nível online** acaba com a dúvida em dois segundos, com um número em graus em vez de um palpite.",
  ],
  sections: [
    {
      h: "O que este nível de bolha realmente mostra",
      paras: [
        "O **nível de bolha online** lê o acelerômetro do seu aparelho e desenha as mesmas informações de um nível físico, só que com mais detalhe. Você tem um tubo horizontal para superfícies planas, uma **ferramenta de nível vertical** para paredes e batentes no prumo, e uma vista de bolha circular que mostra a inclinação em todas as direções ao mesmo tempo — da esquerda para a direita e da frente para trás. Em vez de julgar onde a bolha está entre duas linhas, você lê um valor em graus, então “quase nivelado” vira um número exato com que dá para agir.",
        "Como a leitura é digital, esta **ferramenta de nivelamento** faz o que um nível de madeira não faz. Ela se atualiza enquanto você inclina a superfície: dá para ver o número cair em direção a zero enquanto você desliza uma cunha sob um pé. Continua funcionando em cantos escuros onde a bolha não seria visível. E nunca perde o líquido de calibração, porque não existe líquido: o sensor é de estado sólido e o ponto zero é definido por software.",
      ],
    },
    {
      h: "Como verificar uma superfície com o nível de bolha online",
      paras: [
        "Abra a página, aceite uma vez o pedido do sensor e coloque o aparelho deitado sobre a superfície que quer testar. Segure firme por um segundo para a leitura se estabilizar. O valor em graus é a sua resposta: um número perto de 0,0° significa que a superfície está nivelada, e a direção do desvio diz qual lado precisa ser levantado. Para conferir o prumo, encoste o aparelho na parede pela borda longa e use o tubo vertical do mesmo jeito.",
      ],
      list: [
        "Tire o celular da capa magnética e afaste-o de ferramentas, parafusos e canos de metal.",
        "Confira a mesma superfície em duas direções, a 90° uma da outra, antes de furar.",
        "Se a leitura fugir, coloque o aparelho sobre uma superfície plana conhecida e recalibre ali.",
        "Deixe o aparelho sobre a própria superfície — segurá-lo na mão soma a sua inclinação.",
      ],
    },
    {
      h: "Nível de bolha online ou nível físico",
      paras: [
        "Um **nível de bolha** tradicional é um tubo fechado com bolha dentro e é excelente no que faz — mas só está com você quando você lembra de levá-lo. Um **nível de bolha online** já está no seu bolso, o que importa quando uma prateleira parece torta e você está em cima de uma cadeira. O preço é a precisão: um bom nível de 60 cm detecta uma inclinação que o sensor de um celular arredonda. Para pendurar, móveis, eletrodomésticos e verificações rápidas, a leitura digital sobra; para assentar piso ou encaixar uma bancada, um nível físico longo ainda ganha.",
        "Muita gente busca por **nível de água online** esperando o truque da mangueira com água. Esta página faz a mesma coisa de forma eletrônica: sem água, sem mangueira, sem bagunça, e funciona a qualquer distância da superfície. Do mesmo modo, se uma busca por **nível de bolha online** trouxe você aqui, a ferramenta abaixo é a resposta interativa, não um desenho dela.",
      ],
    },
    {
      h: "Quem usa um nível online gratuito",
      paras: [
        "Quem pendura, constrói, monta ou instala. Os proprietários usam o **nível online grátis** para pendurar quadros, prateleiras e espelhos retos de primeira. Os inquilinos usam o **nível de bolha online** para verificar se um armário ou uma geladeira está nivelado antes de culpar a porta. O faça-você-mesmo e a marcenaria usam o tubo vertical para batentes, montantes e postes. Fotógrafos e cinegrafistas conferem se a cabeça do tripé está plana. O uso da **verificação de nível online** também cresce na montagem de móveis: os manuais supõem um piso nivelado e o celular é a única ferramenta ao alcance.",
        "Fora da oficina, a mesma leitura do **nível de bolha online grátis** ajuda nas pequenas coisas do dia a dia. Ver se a mesa balança porque o piso inclina ou porque um pé é curto. Confirmar que a máquina de lavar está nivelada para ela parar de andar pelo piso. Nivelar um motorhome, uma caravana ou uma barraca de teto antes de dormir nela. Montar uma mesa de sinuca, de pingue-pongue ou um alvo de dardos. Testar se uma capa nova ou um suporte de mesa balança. Nenhuma dessas tarefas precisa de caixa de ferramentas — precisa de um número honesto.",
      ],
    },
    {
      h: "Precisão, privacidade e o que esperar",
      paras: [
        "A precisão depende do sensor do seu aparelho, não da página. Acelerômetros de celular costumam ser bons até cerca de um grau, o que é mais que suficiente para pendurar e para móveis, e a leitura fica mais estável quanto mais tempo o aparelho fica parado. Nada é enviado: os dados do sensor são lidos no navegador e nunca saem do aparelho, não é preciso conta e não há rastreio das suas medições. Depois de carregada, esta **verificação de nível** continua funcionando mesmo sem conexão, o que é útil em um porão, uma garagem ou uma obra.",
        "Use como **ferramenta de nível** rápida antes de abrir um furo na parede, e mantenha um nível físico para os trabalhos em que milímetros importam. Essa combinação — celular para a resposta rápida, nível de bolha para o ajuste final — é como a maioria das pessoas realmente trabalha. Se a bolha parecer errada, confira a superfície, a calibração e o metal por perto antes de culpar a ferramenta, e recalibre sobre uma superfície em que você confie.",
      ],
    },
  ],
  guidesH: "Últimos guias do blog do nível de bolha",
  guides: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      title: "Como usar um nível de bolha online (passo a passo)",
      desc: "Abra a página, deite o celular plano, calibre e leia a inclinação em graus.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      title: "Qual a precisão do nível de bolha de um celular?",
      desc: "Erro típico, o que estraga uma leitura e como calibrar para uma verificação confiável.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      title: "Como nivelar móveis, prateleiras e eletrodomésticos",
      desc: "Verificações passo a passo para uma mesa que balança, uma estante torta e uma máquina de lavar que anda.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      title: "Nível de bolha online ou nível físico",
      desc: "Precisão, custo e rapidez comparados, e quando pegar um nível de verdade.",
    },
  ],
  guidesAll: "Ver todos os guias do nível de bolha online →",
  faqH: "Perguntas frequentes sobre o nível de bolha online",
  faq: [
    {
      q: "Como ler a bolha de um nível online?",
      a: "Deite o celular plano sobre a superfície e deixe a bolha se acomodar. Se a bolha vai para a esquerda ou para a direita, ela mostra qual ponta está alta: a bolha sempre flutua para o ponto mais alto, então o lado para onde ela vai é o lado alto. O número ao lado é a inclinação em graus, e 0,0° significa que a superfície está nivelada.",
    },
    {
      q: "O nível de bolha do celular é tão bom quanto um nível físico?",
      a: "Para verificações rápidas, sim. Um celular calibrado lê com cerca de meio grau de erro, o que basta para prateleiras, quadros, móveis e eletrodomésticos. Em vãos longos como bancadas, pisos e paredes, um nível longo ganha, porque enxerga uma inclinação que o corpo curto do celular não vê.",
    },
    {
      q: "O nível de bolha online funciona em notebook ou desktop?",
      a: "A página abre em qualquer lugar, mas notebook e desktop não têm acelerômetro, então a bolha não vai se mover. Use celular ou tablet para uma verificação real e o computador para ler os guias e comparar números.",
    },
    {
      q: "O nível de bolha online é preciso o suficiente para prateleiras e quadros?",
      a: "Sim. Um celular calibrado lê com cerca de meio grau de erro, o que dá menos de 5 mm em uma prateleira de 60 cm e bem abaixo do que o olho percebe. Para algo maior que um metro, ou para bancadas e paredes, use também um nível físico, porque o corpo curto do celular não vê uma inclinação espalhada por um vão longo.",
    },
    {
      q: "Por que meu nível de bolha fica travado em 0,0 grau?",
      a: "Quase sempre é a permissão do sensor de movimento. Os navegadores bloqueiam a orientação do aparelho até você permitir, e a ferramenta mostra então o estado de repouso. Permita o acesso ao movimento no aviso, recarregue a página e, se a leitura continuar parada, verifique se você não está em um navegador de computador sem acelerômetro.",
    },
    {
      q: "Preciso instalar um app para usar o nível de bolha grátis?",
      a: "Não. O nível de bolha roda dentro do navegador, então não há nada para instalar nem conta para criar. Abra a página no celular, permita o sensor de movimento uma vez e o nível funciona na hora — e continua funcionando offline depois do primeiro carregamento.",
    },
    {
      q: "Como verificar se uma parede está no prumo com o celular?",
      a: "Use o tubo vertical. Encoste o celular na parede pela borda longa, mantenha a parte de trás bem apoiada na superfície e leia o valor: perto de 0,0° significa que a parede está no prumo. Confira perto do topo e perto da base da parede, porque uma parede pode inclinar sem que o meio mostre qualquer inclinação.",
    },
  ],
};


const ko: BubbleProse = {
  aboutH: "어떤 표면이든 확인하는 무료 온라인 수평계",
  intro: [
    "이 **온라인 수평계**는 손에 든 스마트폰을 한 번의 탭으로 **수평 확인 도구**로 바꿔 줍니다. 설치할 것도, 만들 계정도, 다운로드를 기다릴 필요도 없습니다. 페이지를 열고 기기를 표면 위에 올려두면 그 표면이 평평한지, 기울었는지, 수직인지 기포가 즉시 알려 줍니다. 선반을 달기 전, 액자를 고치기 전, 테이블을 수평으로 맞추기 전에 표면의 진실을 알려 주는 한 가지 역할만을 위해 만든 **무료 수평계**입니다.",
    "“**온라인 수평계**”, “**스마트폰 수평계**”, “**수평 확인 도구**”를 검색해 본 적이 있다면 문제를 이미 알고 있을 것입니다. 반듯해 보이는 액자, 흔들리는 세탁기, 기울어진 듯한 책상 — 하지만 눈은 측정기가 아닙니다. **온라인 수평 확인**은 감이 아니라 도(degree) 단위의 숫자로 2초 만에 추측을 없애 줍니다.",
  ],
  sections: [
    {
      h: "이 수평계 도구가 실제로 보여 주는 것",
      paras: [
        "**온라인 수평계**는 기기 안의 가속도 센서를 읽어 실제 수평계가 보여 주는 정보를 더 자세하게 그려 냅니다. 평평한 면을 위한 가로 기포관, 수직 벽과 문틀을 위한 **세로 수평 도구**, 좌우와 앞뒤 기울기를 동시에 보여 주는 원형 보기가 있습니다. 두 선 사이에서 기포가 어디 있는지 눈대중으로 판단하는 대신 도 단위 숫자를 읽으므로 “거의 수평”이 실행할 수 있는 정확한 값이 됩니다.",
        "측정값이 디지털이라 이 **수평 도구**는 나무 수평계가 못 하는 일을 합니다. 표면을 기울이면 값이 갱신되어, 다리 아래에 받침을 밀어 넣으면서 숫자가 0으로 내려가는 것을 볼 수 있습니다. 기포가 잘 보이지 않는 어두운 구석에서도 계속 작동합니다. 그리고 수평액이 없어질 일도 없습니다. 액체가 없고 센서는 고체 소자이며 영점은 소프트웨어로 설정되기 때문입니다.",
      ],
    },
    {
      h: "온라인 수평계로 표면을 확인하는 방법",
      paras: [
        "페이지를 열고 센서 권한 요청을 한 번 허용한 뒤, 확인할 표면 위에 기기를 평평하게 올려놓습니다. 값이 안정될 때까지 1초 정도 가만히 두세요. 도 단위 값이 답입니다. 0.0°에 가까우면 그 표면은 수평이고, 벗어난 방향이 어느 쪽을 들어야 하는지를 알려 줍니다. 수직 확인은 기기의 긴 모서리를 벽에 대고 세운 뒤 세로 기포관을 같은 방식으로 사용합니다.",
      ],
      list: [
        "스마트폰을 자석 케이스에서 빼고 금속 공구, 나사, 배관에서 멀리 두세요.",
        "드릴로 구멍을 뚫기 전에 같은 표면을 서로 90°인 두 방향에서 확인하세요.",
        "값이 흔들리면 수평임을 아는 표면에 기기를 두고 그 자리에서 다시 보정하세요.",
        "기기는 표면 위에 그대로 두세요. 손에 들면 사용자의 기울기가 더해집니다.",
      ],
    },
    {
      h: "온라인 수평계와 실제 수평계",
      paras: [
        "전통적인 **수평계**는 기포가 든 밀폐관으로 제 역할을 훌륭히 하지만, 챙겨 다닐 때만 쓸 수 있습니다. **온라인 수평계**는 이미 주머니 안에 있습니다. 선반이 기울어 보이는데 의자 위에 서 있는 상황에서 이 차이가 큽니다. 대신 정밀도가 갈립니다. 좋은 60cm 수평계는 스마트폰 센서가 반올림해 버리는 기울기도 잡아냅니다. 달기, 가구, 가전, 빠른 확인에는 디지털 값으로 충분하지만, 바닥 타일 시공이나 상판 설치에는 긴 실물 수평계가 여전히 우세합니다.",
        "**수평계 물**이나 **호스 수평** 방식을 기대하며 검색하는 사람도 많습니다. 이 페이지는 같은 일을 전자식으로 합니다. 물도, 호스도, 뒷정리도 필요 없고 표면과의 거리도 상관없습니다. **온라인 수평계**를 찾다가 이곳에 왔다면, 아래 도구는 그림이 아니라 실제로 작동하는 답입니다.",
      ],
    },
    {
      h: "무료 온라인 수평계를 쓰는 사람들",
      paras: [
        "걸고, 짓고, 붙이고, 설치하는 모든 사람. 집주인은 **무료 온라인 수평계**로 액자, 선반, 거울을 한 번에 반듯하게 답니다. 세입자는 옷장이나 냉장고가 수평인지 문 탓을 하기 전에 **온라인 수평계**로 확인합니다. DIY와 목공은 세로 기포관을 문틀, 기둥, 포스트에 사용합니다. 사진가와 영상 제작자는 삼각대 헤드가 평평한지 확인합니다. **수평 확인**은 가구 조립 때도 많이 쓰입니다. 조립 설명서는 수평한 바닥을 전제로 하고, 손 닿는 유일한 도구가 스마트폰이기 때문입니다.",
        "작업대 밖에서도 같은 **무료 온라인 수평계** 값이 일상의 작은 일에 도움이 됩니다. 테이블이 흔들리는 이유가 바닥 기울기인지 짧은 다리인지 확인하기. 세탁기가 수평인지 확인해 바닥을 걸어 다니지 않게 하기. 캠핑카, 카라반, 루프텐트는 자기 전에 수평 맞추기. 당구대, 탁구대, 다트판 설치하기. 새 휴대폰 케이스나 모니터 받침대의 흔들림 확인하기. 이런 일에는 공구함이 아니라 정직한 숫자 하나면 충분합니다.",
      ],
    },
    {
      h: "정밀도, 개인정보, 기대할 수 있는 것",
      paras: [
        "정밀도는 페이지가 아니라 기기의 센서에 달려 있습니다. 스마트폰 가속도 센서는 보통 1도 정도까지 정확해 달기와 가구 작업에는 충분하고, 기기가 오래 정지해 있을수록 값이 안정됩니다. 아무것도 업로드하지 않습니다. 센서 데이터는 브라우저 안에서 읽히고 기기 밖으로 나가지 않으며, 계정도 필요 없고 측정값 추적도 없습니다. 페이지를 한 번 불러오면 이 **수평 확인**은 네트워크 없이도 계속 작동합니다. 지하실, 차고, 공사 현장에서 유용합니다.",
        "벽에 구멍을 뚫기 전 빠른 **수평 확인 도구**로 쓰고, 밀리미터가 중요한 작업에는 실물 수평계를 남겨 두세요. 빠른 답은 스마트폰, 최종 조정은 수평계 — 대부분의 사람이 실제로 이렇게 일합니다. 기포가 이상해 보이면 도구 탓을 하기 전에 표면, 보정 상태, 주변 금속을 확인하고, 믿을 수 있는 표면에서 다시 보정하세요.",
      ],
    },
  ],
  guidesH: "수평계 블로그의 최신 가이드",
  guides: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      title: "온라인 수평계 사용법 (단계별)",
      desc: "페이지를 열고 스마트폰을 평평하게 두고 보정한 뒤 기울기를 도 단위로 읽습니다.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      title: "스마트폰 수평계의 정확도는 어느 정도인가요?",
      desc: "일반적인 오차, 측정을 망치는 요인, 신뢰할 수 있는 확인을 위한 보정 방법.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      title: "가구, 선반, 가전 수평 맞추기",
      desc: "흔들리는 테이블, 기울어진 책장, 제자리에서 움직이는 세탁기를 단계별로 확인합니다.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      title: "온라인 수평계와 실제 수평계 비교",
      desc: "정확도, 비용, 속도를 비교하고 실제 수평계를 꺼내야 할 때를 정리합니다.",
    },
  ],
  guidesAll: "온라인 수평계 가이드 모두 보기 →",
  faqH: "온라인 수평계에 대해 자주 묻는 질문",
  faq: [
    {
      q: "온라인 수평계의 기포는 어떻게 읽나요?",
      a: "스마트폰을 표면 위에 평평하게 두고 기포가 안정될 때까지 기다립니다. 기포가 좌우로 움직이면 그쪽이 높다는 뜻입니다. 기포는 항상 가장 높은 지점으로 떠오르므로 움직인 쪽이 높은 쪽입니다. 옆의 숫자가 기울기(도)이며 0.0°이면 표면이 수평입니다.",
    },
    {
      q: "스마트폰 수평계가 실제 수평계만큼 좋은가요?",
      a: "빠른 확인에는 충분합니다. 보정된 스마트폰은 약 0.5도 이내로 읽어 선반, 액자, 가구, 가전에 알맞습니다. 상판, 바닥, 벽처럼 긴 구간에서는 짧은 스마트폰 본체가 보지 못하는 기울기를 잡아내는 긴 수평계가 우세합니다.",
    },
    {
      q: "온라인 수평계가 노트북이나 데스크톱에서도 작동하나요?",
      a: "페이지는 어디서나 열리지만 노트북과 데스크톱에는 가속도 센서가 없어 기포가 움직이지 않습니다. 실제 확인은 스마트폰이나 태블릿으로 하고, 컴퓨터에서는 가이드를 읽거나 값을 비교하는 데 쓰세요.",
    },
    {
      q: "온라인 수평계가 선반과 액자에 쓸 만큼 정확한가요?",
      a: "네. 보정된 스마트폰은 약 0.5도 이내로 읽으며, 60cm 선반에서 5mm 미만으로 눈이 알아채는 범위보다 충분히 작습니다. 1미터가 넘는 대상이나 상판, 벽에는 긴 구간에 퍼진 기울기를 짧은 스마트폰이 볼 수 없으므로 실제 수평계도 함께 사용하세요.",
    },
    {
      q: "수평계가 0.0도에서 움직이지 않습니다",
      a: "거의 항상 동작 센서 권한 문제입니다. 브라우저는 허용하기 전까지 기기 방향을 차단하고, 그동안 도구는 정지 상태를 표시합니다. 안내창에서 동작 접근을 허용하고 페이지를 새로 고치세요. 그래도 움직이지 않으면 가속도 센서가 없는 데스크톱 브라우저가 아닌지 확인하세요.",
    },
    {
      q: "무료 수평계를 쓰려면 앱을 설치해야 하나요?",
      a: "아니요. 수평계는 브라우저 안에서 작동하므로 설치할 것도 계정도 없습니다. 스마트폰에서 페이지를 열고 동작 센서를 한 번 허용하면 바로 작동하며, 첫 로딩 후에는 오프라인에서도 계속 작동합니다.",
    },
    {
      q: "스마트폰으로 벽이 수직인지 확인하는 방법은?",
      a: "세로 기포관을 사용합니다. 기기의 긴 모서리를 벽에 대고 세우고, 뒷면을 표면에 밀착한 채 값을 읽습니다. 0.0°에 가까우면 벽이 수직입니다. 벽은 가운데에 기울기가 드러나지 않은 채 전체가 기울 수 있으므로 벽의 위쪽과 아래쪽 모두에서 확인하세요.",
    },
  ],
};


const it: BubbleProse = {
  aboutH: "La livella online gratuita che controlla qualsiasi superficie",
  intro: [
    "Questa **livella online** trasforma il telefono che hai in mano in un vero **strumento di controllo del livello** con un tocco. Niente da installare, nessun account da creare e nessuna attesa di download: apri la pagina, appoggi il dispositivo sulla superficie e la bolla ti dice subito se quella superficie è piana, inclinata o a piombo. È una **livella gratuita** costruita per un solo compito: dirti la verità su una superficie prima di appendere una mensola, sistemare una cornice o livellare un tavolo.",
    "Se hai mai cercato “**livella online**”, “**livella bolla smartphone**” o “**controllare il livello online**”, conosci già il problema. Hai in mano una cornice che sembra dritta, una lavatrice che traballa o una scrivania che sembra in pendenza — e i tuoi occhi non sono uno strumento di misura. Un **controllo del livello online** elimina l’incertezza in due secondi, con un numero in gradi invece di un presentimento.",
  ],
  sections: [
    {
      h: "Che cosa ti mostra davvero questa livella",
      paras: [
        "La **livella online** legge l’accelerometro del dispositivo e disegna le stesse informazioni di una livella fisica, solo con più dettaglio. Hai una fiala orizzontale per le superfici piane, uno **strumento di livello verticale** per pareti e telai delle porte a piombo e una vista a bolla circolare che mostra l’inclinazione in tutte le direzioni insieme — da sinistra a destra e da davanti a dietro. Invece di giudicare dove sta la bolla tra due riferimenti, leggi una cifra in gradi: “quasi in bolla” diventa un numero esatto su cui puoi agire.",
        "Poiché la lettura è digitale, questo **strumento di livellamento** può fare cose che una livella di legno non fa. Si aggiorna mentre inclini la superficie, così vedi il numero scendere verso zero mentre infili uno spessore sotto un piede. Continua a funzionare negli angoli bui dove la bolla non si vedrebbe bene. E non perde mai il liquido di calibratura, perché di liquido non ce n’è: il sensore è a stato solido e lo zero è impostato via software.",
      ],
    },
    {
      h: "Come controllare una superficie con la livella online",
      paras: [
        "Apri la pagina, accetta una volta la richiesta del sensore, poi appoggia il dispositivo in piano sulla superficie da controllare. Tienilo fermo per un secondo, così la lettura si stabilizza. Il valore in gradi è la risposta: un numero vicino a 0,0° significa che la superficie è in bolla, e la direzione dello scostamento indica quale lato va alzato. Per il controllo del piombo, appoggia il dispositivo al muro sul lato lungo e usa la fiala verticale allo stesso modo.",
      ],
      list: [
        "Togli il telefono dalla custodia magnetica e allontanalo da utensili, viti e tubi metallici.",
        "Controlla la stessa superficie in due direzioni, a 90° l’una dall’altra, prima di trapanare.",
        "Se la lettura va alla deriva, metti il dispositivo su una superficie piana nota e ricalibra lì.",
        "Lascia il dispositivo sulla superficie: tenerlo in mano aggiunge la tua inclinazione.",
      ],
    },
    {
      h: "Livella online o livella fisica",
      paras: [
        "Una **livella** tradizionale è un tubo sigillato con una bolla ed è ottima nel suo lavoro — ma ce l’hai solo quando ti ricordi di portarla. Una **livella online** è già in tasca, e questo conta quando una mensola sembra storta e sei in piedi su una sedia. Il prezzo è la precisione: una buona livella da 60 cm rileva una pendenza che il sensore di un telefono arrotonda. Per appendere, per i mobili, gli elettrodomestici e i controlli rapidi la lettura digitale è più che sufficiente; per posare un pavimento o montare un piano di lavoro, una livella lunga vince ancora.",
        "Molti cercano una **livella ad acqua online** aspettandosi il trucco del tubo con l’acqua. Questa pagina fa lo stesso lavoro in modo elettronico: niente acqua, niente tubo, niente disordine, e funziona a qualsiasi distanza dalla superficie. Allo stesso modo, se una ricerca di **livella online** ti ha portato qui, lo strumento qui sotto è la risposta interattiva, non un disegno.",
      ],
    },
    {
      h: "Chi usa una livella online gratuita",
      paras: [
        "Chiunque appendа, costruisca, monti o installi. I proprietari usano la **livella online gratis** per appendere cornici, mensole e specchi dritti al primo colpo. Gli inquilini usano la **livella online** per controllare se un armadio o un frigorifero sono in bolla prima di dare la colpa alla porta. Il fai-da-te e la falegnameria usano la fiala verticale per telai, montanti e pali. Fotografi e videomaker controllano che la testa del treppiede sia piana. L’uso del **controllo del livello online** aumenta anche durante il montaggio dei mobili: le istruzioni danno per scontato un pavimento in bolla e il telefono è l’unico strumento a portata di mano.",
        "Fuori dall’officina, la stessa lettura della **livella online gratuita** aiuta nelle piccole cose di ogni giorno. Capire se un tavolo traballa per il pavimento in pendenza o per una gamba corta. Verificare che la lavatrice sia in bolla, così smette di camminare sul pavimento. Livellare un camper, una roulotte o una tenda da tetto prima di dormirci. Montare un tavolo da biliardo, un tavolo da ping-pong o un bersaglio per le freccette. Provare se una custodia nuova o un supporto da scrivania traballano. Nessuno di questi lavori richiede una cassetta degli attrezzi: richiede un numero onesto.",
      ],
    },
    {
      h: "Precisione, privacy e cosa aspettarsi",
      paras: [
        "La precisione dipende dal sensore del tuo dispositivo, non dalla pagina. Gli accelerometri dei telefoni sono di solito buoni a circa un grado, più che sufficiente per appendere e per i mobili, e la lettura diventa più stabile quanto più il dispositivo resta fermo. Niente viene caricato: i dati del sensore si leggono nel browser e non lasciano mai il dispositivo, non serve un account e non c’è tracciamento delle tue misure. Una volta caricata la pagina, questo **controllo del livello** continua a funzionare anche senza rete, cosa utile in cantina, in garage o in cantiere.",
        "Usalo come **strumento di controllo del livello** veloce prima di fare un buco nel muro, e tieni una livella fisica per i lavori in cui contano i millimetri. Quella combinazione — telefono per la risposta rapida, livella per la regolazione finale — è come lavora la maggior parte delle persone. Se la bolla sembra sbagliata, controlla la superficie, la calibratura e il metallo vicino prima di dare la colpa allo strumento, e ricalibra su una superficie di cui ti fidi.",
      ],
    },
  ],
  guidesH: "Le ultime guide dal blog della livella",
  guides: [
    {
      href: "/onlinebubblelevel/blog/how-to-use-an-online-bubble-level/",
      title: "Come usare una livella online (passo dopo passo)",
      desc: "Apri la pagina, appoggia il telefono in piano, calibra e leggi l’inclinazione in gradi.",
    },
    {
      href: "/onlinebubblelevel/blog/how-accurate-is-a-phone-bubble-level/",
      title: "Quanto è precisa la livella di uno smartphone?",
      desc: "Errore tipico, cosa rovina una lettura e come calibrare per un controllo affidabile.",
    },
    {
      href: "/onlinebubblelevel/blog/level-furniture-shelves-appliances/",
      title: "Come livellare mobili, mensole ed elettrodomestici",
      desc: "Controlli passo dopo passo per un tavolo che traballa, una libreria storta e una lavatrice che si sposta.",
    },
    {
      href: "/onlinebubblelevel/blog/bubble-level-vs-spirit-level/",
      title: "Livella online e livella fisica a confronto",
      desc: "Precisione, costo e rapidità a confronto, e quando prendere una livella vera.",
    },
  ],
  guidesAll: "Vedi tutte le guide della livella online →",
  faqH: "Domande frequenti sulla livella online",
  faq: [
    {
      q: "Come si legge la bolla di una livella online?",
      a: "Appoggia il telefono in piano sulla superficie e lascia che la bolla si stabilizzi. Se la bolla va a sinistra o a destra, indica quale estremità è alta: la bolla galleggia sempre verso il punto più alto, quindi il lato verso cui si sposta è quello alto. Il numero accanto è l’inclinazione in gradi, e 0,0° significa che la superficie è in bolla.",
    },
    {
      q: "La livella di uno smartphone vale quanto una livella fisica?",
      a: "Per controlli rapidi, sì. Un telefono calibrato legge entro circa mezzo grado, sufficiente per mensole, cornici, mobili ed elettrodomestici. Su luci lunghe come piani di lavoro, pavimenti e pareti vince una livella lunga, perché vede una pendenza che il corpo corto di un telefono non può vedere.",
    },
    {
      q: "La livella online funziona su portatile o desktop?",
      a: "La pagina si apre ovunque, ma portatile e desktop non hanno accelerometro, quindi la bolla non si muoverà. Usa telefono o tablet per un controllo reale e il computer per leggere le guide e confrontare i numeri.",
    },
    {
      q: "La livella online è abbastanza precisa per mensole e cornici?",
      a: "Sì. Un telefono calibrato legge entro circa mezzo grado, cioè meno di 5 mm su una mensola da 60 cm e ben sotto quello che l’occhio nota. Per qualcosa più lungo di un metro, o per piani di lavoro e pareti, usa anche una livella fisica: il corpo corto di un telefono non vede una pendenza distribuita su una luce lunga.",
    },
    {
      q: "Perché la mia livella resta ferma a 0,0 gradi?",
      a: "Quasi sempre è il permesso del sensore di movimento. I browser bloccano l’orientamento del dispositivo finché non lo consenti, e lo strumento mostra allora il suo stato di riposo. Consenti l’accesso al movimento nella richiesta, ricarica la pagina e, se la lettura non si muove ancora, controlla di non essere su un browser desktop senza accelerometro.",
    },
    {
      q: "Serve installare un’app per usare la livella gratuita?",
      a: "No. La livella gira nel browser, quindi non c’è nulla da installare e nessun account da creare. Apri la pagina sul telefono, consenti una volta il sensore di movimento e la livella funziona subito — e continua a funzionare offline dopo il primo caricamento.",
    },
    {
      q: "Come verifico se una parete è a piombo con il telefono?",
      a: "Usa la fiala verticale. Appoggia il telefono al muro sul lato lungo, tieni il retro ben aderente alla superficie e leggi il valore: vicino a 0,0° la parete è a piombo. Controlla vicino alla sommità e vicino alla base del muro, perché una parete può pendere senza che la parte centrale mostri inclinazione.",
    },
  ],
};
export const bubbleProse: Record<string, BubbleProse> = { en, es, ja, fr, de, pt, ko, it };
